"use client";

import "./treks.css";
import "./trek-detail.css";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useMemo, useState } from "react";
import Photo, { PhotoCredit } from "@/components/trek/Photo";
import TrekModal from "@/components/trek/TrekModal";
import type { Trek } from "@/data/treks/types";
import { DIFFICULTY, altLabel, getTrek, priceLabel, regionGroups, type RegionGroup } from "@/lib/treks";

const FILTERS: { type: string; label: string }[] = [
  { type: "all", label: "All Treks" },
  { type: "green", label: "● Green Circle" },
  { type: "blue", label: "■ Blue Square" },
  { type: "black", label: "◆ Black Diamond" },
  { type: "double", label: "◆◆ Double Black" },
  { type: "cultural", label: "Cultural" },
  { type: "pass", label: "High Passes" },
  { type: "peak", label: "Peak Climbing" },
  { type: "short", label: "Short (7 days or fewer)" },
];

function matches(t: Trek, region: string, filter: string): boolean {
  if (region !== "all" && t.region !== region) return false;
  if (filter === "all") return true;
  if (filter in DIFFICULTY) return t.difficulty === filter;
  if (filter === "short") return t.days <= 7 || t.tags.includes("short");
  return (t.tags as string[]).includes(filter);
}

export default function TreksPage() {
  return (
    <Suspense fallback={null}>
      <TreksInner />
    </Suspense>
  );
}

function TrekCard({ t, regionName, onOpen }: { t: Trek; regionName: string; onOpen: (id: string) => void }) {
  const d = DIFFICULTY[t.difficulty];
  return (
    <div className="trek-full-card reveal visible" data-id={t.id}>
      <div className="trek-img-wrap">
        <Photo image={t.hero} label={regionName} />
        <div className="trek-img-overlay" />
        <div className="trek-img-badges">
          <span className={`difficulty-badge ${d.cls}`}>
            <span className="diff-icon">{d.icon}</span> {d.label}
          </span>
          <span className="trek-price-badge">From {priceLabel(t)}</span>
        </div>
        <div className="trek-img-foot">
          <span className="trek-season-badge">{t.seasonBadge}</span>
          {t.operator === "partner" && (
            <span className="trek-season-badge trek-partner-badge" title="Run with a licensed local partner">
              Partner-operated
            </span>
          )}
        </div>
      </div>
      <div className="trek-body">
        <div className="trek-title-row">
          <h3 className="trek-title">{t.title}</h3>
          <div className="trek-elevation">{altLabel(t.maxAlt)}</div>
        </div>
        <p className="trek-tagline">{t.tagline}</p>
        <div className="trek-specs">
          <div className="trek-spec"><div className="trek-spec-val">{t.days}</div><div className="trek-spec-key">Days</div></div>
          <div className="trek-spec"><div className="trek-spec-val">{altLabel(t.maxAlt)}</div><div className="trek-spec-key">Max Alt.</div></div>
          <div className="trek-spec"><div className="trek-spec-val">{t.accommodation}</div><div className="trek-spec-key">Accommodation</div></div>
        </div>
        <div className="trek-highlights">
          {t.highlights.slice(0, 3).map((h, i) => (
            <div className="trek-highlight" key={i}>{h}</div>
          ))}
        </div>
        <div className="trek-actions">
          <button className="btn btn-dark btn-sm" style={{ flex: 1, justifyContent: "center" }} data-open={t.id} onClick={() => onOpen(t.id)}>
            Full Details
          </button>
          <Link href={`/book?trek=${encodeURIComponent(t.id)}`} className="btn btn-primary btn-sm" style={{ flex: 1, justifyContent: "center" }}>
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}

function BespokeCard() {
  return (
    <div className="trek-full-card reveal visible" data-bespoke="1">
      <div className="trek-img-wrap">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/landing.JPG" alt="Custom bespoke Himalayan trek" loading="lazy" decoding="async" />
        <div className="trek-img-overlay" />
        <div className="trek-img-badges">
          <span className="difficulty-badge" style={{ background: "linear-gradient(135deg,#1E40AF,#E8722B)", color: "white" }}>
            <span className="diff-icon">✦</span> Custom
          </span>
          <span className="trek-price-badge">Ask for Quote</span>
        </div>
        <div className="trek-img-foot"><span className="trek-season-badge">Any Date</span></div>
      </div>
      <div className="trek-body">
        <div className="trek-title-row">
          <h3 className="trek-title">Bespoke Himalayan Experience</h3>
          <div className="trek-elevation">Custom</div>
        </div>
        <p className="trek-tagline">
          Design your dream Himalayan adventure from scratch. Private guide, custom itinerary, your pace, your objectives — in any of the regions above.
        </p>
        <div className="trek-specs">
          <div className="trek-spec"><div className="trek-spec-val">Flexible</div><div className="trek-spec-key">Duration</div></div>
          <div className="trek-spec"><div className="trek-spec-val">Your Goal</div><div className="trek-spec-key">Altitude</div></div>
          <div className="trek-spec"><div className="trek-spec-val">Private</div><div className="trek-spec-key">Style</div></div>
        </div>
        <div className="trek-highlights">
          <div className="trek-highlight">Fully private, tailored to your goals and experience</div>
          <div className="trek-highlight">Photography treks, family-friendly routes, solo guidance</div>
          <div className="trek-highlight">Flexible departure dates year-round</div>
        </div>
        <div className="trek-actions">
          <a href="mailto:namaste@peakpursuit.com" className="btn btn-dark btn-sm" style={{ flex: 1, justifyContent: "center" }}>Contact Us</a>
          <Link href="/book?trek=custom" className="btn btn-primary btn-sm" style={{ flex: 1, justifyContent: "center" }}>Get a Quote</Link>
        </div>
      </div>
    </div>
  );
}

function RegionGuide({ group }: { group: RegionGroup }) {
  const info = group.info;
  return (
    <details className="region-guide">
      <summary>Region guide: when to go, permits &amp; getting there</summary>
      <div className="rg-body">
        <div className="rg-intro">
          {info.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="rg-facts">
          <div><div className="rg-key">Best seasons</div><div>{info.bestSeasons}</div></div>
          <div><div className="rg-key">Permits &amp; rules</div><div>{info.permitsSummary}</div></div>
          <div><div className="rg-key">Getting there</div><div>{info.gettingThere}</div></div>
        </div>
        {info.gallery.length > 0 && (
          <div className="rg-gallery">
            {info.gallery.map((g, i) => (
              <figure className="rg-photo" key={i}>
                <Photo image={g} label={info.name} />
                <figcaption><PhotoCredit image={g} /></figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </details>
  );
}

function TreksInner() {
  const sp = useSearchParams();
  const groups = useMemo(() => regionGroups(), []);
  const total = groups.reduce((n, g) => n + g.treks.length, 0);
  const countries = new Set(groups.map((g) => g.info.country)).size;

  const regionParam = sp.get("region");
  const [region, setRegion] = useState<string>(
    regionParam && groups.some((g) => g.id === regionParam) ? regionParam : "all"
  );
  const [filter, setFilter] = useState<string>("all");
  const [openId, setOpenId] = useState<string | null>(null);
  const openTrek = openId ? getTrek(openId) : null;

  // Keep ?region= / ?trek= in the URL without adding history entries.
  const syncUrl = (key: string, value: string | null) => {
    const u = new URL(window.location.href);
    if (value) u.searchParams.set(key, value);
    else u.searchParams.delete(key);
    window.history.replaceState(null, "", u.pathname + u.search + u.hash);
  };

  const open = (id: string) => {
    if (!getTrek(id)) return;
    setOpenId(id);
    syncUrl("trek", id);
  };
  const close = () => {
    setOpenId(null);
    syncUrl("trek", null);
  };
  const chooseRegion = (id: string) => {
    setRegion(id);
    syncUrl("region", id === "all" ? null : id);
  };

  // Deep link to a trek (?trek=id).
  const deepLinkTrek = sp.get("trek");
  useEffect(() => {
    if (deepLinkTrek && getTrek(deepLinkTrek)) {
      const t = setTimeout(() => setOpenId(deepLinkTrek), 300);
      return () => clearTimeout(t);
    }
  }, [deepLinkTrek]);

  // Scroll to a region when arriving via ?region=.
  useEffect(() => {
    if (regionParam && !deepLinkTrek && region !== "all") {
      const t = setTimeout(() => document.getElementById(`region-${region}`)?.scrollIntoView({ behavior: "smooth", block: "start" }), 200);
      return () => clearTimeout(t);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const counts = Object.fromEntries(groups.map((g) => [g.id, g.treks.length]));
  const visible = groups
    .map((g) => ({ g, list: g.treks.filter((t) => matches(t, region, filter)) }))
    .filter((x) => x.list.length);
  const shown = visible.reduce((n, x) => n + x.list.length, 0);
  const showBespoke = region === "all" && (filter === "all" || filter in DIFFICULTY);

  return (
    <>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="page-hero-content">
          <div className="eyebrow" style={{ color: "var(--amber-light)", marginBottom: "0.5rem" }}>
            Nepal · Tibet · Bhutan
          </div>
          <h1 className="display-lg" style={{ color: "var(--white)", marginBottom: "0.5rem" }}>
            All Treks
          </h1>
          <p id="heroCount" style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.05rem" }}>
            {total} routes across {groups.length} Himalayan regions{countries > 1 ? ` in ${countries} countries` : ""}
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container-default">
          {/* Difficulty Legend */}
          <div className="difficulty-legend reveal">
            <div className="legend-item">
              <span
                className="difficulty-badge diff-green"
                style={{ whiteSpace: "nowrap", fontSize: "0.8rem" }}
              >
                <span className="diff-icon">●</span> Green
              </span>
              <div className="legend-text">
                <div className="legend-label">Green Circle — Easy</div>
                <div className="legend-desc">
                  Suitable for fit beginners. Moderate elevation, gentle terrain.
                </div>
              </div>
            </div>
            <div className="legend-item">
              <span
                className="difficulty-badge diff-blue"
                style={{ whiteSpace: "nowrap", fontSize: "0.8rem" }}
              >
                <span className="diff-icon">■</span> Blue
              </span>
              <div className="legend-text">
                <div className="legend-label">Blue Square — Intermediate</div>
                <div className="legend-desc">
                  Regular hiking experience needed. Some steep sections, higher altitude.
                </div>
              </div>
            </div>
            <div className="legend-item">
              <span
                className="difficulty-badge diff-black"
                style={{ whiteSpace: "nowrap", fontSize: "0.8rem" }}
              >
                <span className="diff-icon">◆</span> Black
              </span>
              <div className="legend-text">
                <div className="legend-label">Black Diamond — Difficult</div>
                <div className="legend-desc">
                  Strong fitness required. Multi-day high altitude, challenging terrain.
                </div>
              </div>
            </div>
            <div className="legend-item">
              <span
                className="difficulty-badge diff-double-black"
                style={{ whiteSpace: "nowrap", fontSize: "0.8rem" }}
              >
                <span className="diff-icon">◆◆</span> Expert
              </span>
              <div className="legend-text">
                <div className="legend-label">Double Black Diamond — Expert</div>
                <div className="legend-desc">
                  Technical climbing, crampon use, ice axe, prior expedition experience.
                </div>
              </div>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="filter-bar" id="filterBar">
            <div className="filter-row">
              <span className="filter-label">Region:</span>
              <div className="filter-chips">
                <button className={`filter-chip${region === "all" ? " active" : ""}`} data-region="all" onClick={() => chooseRegion("all")}>
                  All regions ({total})
                </button>
                {groups.map((g) => (
                  <button
                    key={g.id}
                    className={`filter-chip${region === g.id ? " active" : ""}`}
                    data-region={g.id}
                    onClick={() => chooseRegion(g.id)}
                  >
                    {g.info.name} ({counts[g.id]})
                  </button>
                ))}
              </div>
            </div>
            <div className="filter-row">
              <span className="filter-label">Filter:</span>
              <div className="filter-chips">
                {FILTERS.map((f) => (
                  <button
                    key={f.type}
                    className={`filter-chip${filter === f.type ? " active" : ""}`}
                    data-filter={f.type}
                    onClick={() => setFilter(f.type)}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Region sections */}
          <div id="trekRegions">
            {visible.map(({ g, list }) => {
              const info = g.info;
              const partner = info.operator === "partner";
              return (
                <section className="region-section" id={`region-${g.id}`} data-region={g.id} key={g.id}>
                  <div className="region-banner">
                    <Photo image={info.hero} label={info.name} eager className="region-banner-img" />
                    <div className="region-banner-overlay" />
                    <div className="region-banner-text">
                      <div className="eyebrow" style={{ color: "var(--amber-light)" }}>{info.country}</div>
                      <h2 className="region-title">{info.name}</h2>
                      <p className="region-tagline">{info.tagline}</p>
                      <div className="region-chips">
                        <span className="region-chip">{list.length} {list.length === 1 ? "trek" : "treks"}</span>
                        {partner && <span className="region-chip region-chip-partner">Run with a licensed local partner</span>}
                      </div>
                    </div>
                  </div>
                  {partner && info.operatorNote && (
                    <div className="info-box info-box-amber region-note">
                      <div className="info-box-title">How these trips are run</div>
                      {info.operatorNote}
                    </div>
                  )}
                  <RegionGuide group={g} />
                  <div className="trek-grid">
                    {list.map((t) => (
                      <TrekCard key={t.id} t={t} regionName={info.name} onOpen={open} />
                    ))}
                  </div>
                </section>
              );
            })}
            {showBespoke && (
              <section className="region-section region-custom">
                <div className="trek-grid">
                  <BespokeCard />
                </div>
              </section>
            )}
            {!shown && !showBespoke && (
              <div className="no-results">
                <h3>No treks match those filters</h3>
                <p>Try a different region or clear the filter.</p>
                <button
                  className="btn btn-dark btn-sm"
                  data-reset="1"
                  onClick={() => {
                    chooseRegion("all");
                    setFilter("all");
                  }}
                >
                  Show all treks
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <TrekModal trek={openTrek} onClose={close} />
    </>
  );
}
