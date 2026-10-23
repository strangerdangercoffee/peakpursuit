"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Trek } from "@/data/treks/types";
import { DIFFICULTY, altLabel, getRegion, num, pad2, priceLabel } from "@/lib/treks";
import AltitudeChart from "./AltitudeChart";
import Photo, { PhotoCredit } from "./Photo";

interface Props {
  trek: Trek | null;
  onClose: () => void;
}

export default function TrekModal({ trek, onClose }: Props) {
  const boxRef = useRef<HTMLDivElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!trek) return;
    lastFocus.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    if (boxRef.current) boxRef.current.scrollTop = 0;
    boxRef.current?.querySelector<HTMLElement>(".modal-close")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      lastFocus.current?.focus?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trek?.id]);

  return (
    <div
      id="trekModal"
      className={`modal-overlay${trek ? " open" : ""}`}
      aria-hidden={trek ? "false" : "true"}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal" id="trekModalBox" ref={boxRef} role="dialog" aria-modal="true" aria-labelledby="trekModalTitle">
        {trek && <TrekDetail key={trek.id} trek={trek} onClose={onClose} />}
      </div>
    </div>
  );
}

function List({ items, cls }: { items: string[]; cls: string }) {
  return (
    <ul className={`tm-list ${cls}`}>
      {items.map((i, k) => (
        <li key={k}>{i}</li>
      ))}
    </ul>
  );
}

function TrekDetail({ trek: t, onClose }: { trek: Trek; onClose: () => void }) {
  const d = DIFFICULTY[t.difficulty];
  const r = getRegion(t.region);
  const label = r?.name || t.title;
  const photos = [t.hero, ...(t.gallery || [])].filter((p): p is NonNullable<typeof p> => !!p);
  const [photoIdx, setPhotoIdx] = useState(0);
  const [open, setOpen] = useState<Set<number>>(new Set());
  const allOpen = open.size === t.itinerary.length;

  const toggleDay = (day: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(day)) next.delete(day);
      else next.add(day);
      return next;
    });
  const toggleAll = () => setOpen(allOpen ? new Set() : new Set(t.itinerary.map((x) => x.day)));

  const shown = photos[photoIdx] ?? t.hero;
  const facts: [string, string][] = [
    [`${t.days} days`, "Duration"],
    [altLabel(t.maxAlt), t.maxAltName || "Max Altitude"],
    [`From ${priceLabel(t)}`, "Per Person"],
    [t.seasonBadge, "Best Season"],
    [t.accommodation, "Accommodation"],
    [`${t.walkingDays} days`, "Walking / Climbing"],
  ];
  if (t.distanceKm) facts.push([`~${num(t.distanceKm)} km`, "Approx. Distance"]);
  if (t.minGroupSize) facts.push([`${t.minGroupSize}+ trekkers`, "Minimum Group"]);

  return (
    <>
      <div className="modal-header tm-header">
        <div>
          <div className="eyebrow" style={{ marginBottom: "0.25rem" }}>
            {r?.name || ""} · {d.text}
          </div>
          <h2 id="trekModalTitle" style={{ fontSize: "1.6rem", color: "var(--navy)" }}>
            {t.title}
          </h2>
        </div>
        <button className="modal-close" aria-label="Close" data-close="1" onClick={onClose}>
          ✕
        </button>
      </div>

      <div className="tm-hero" id="tmHero">
        <Photo key={shown?.src ?? "none"} image={shown} label={label} eager className="tm-hero-img" />
        {shown?.credit && (
          <div className="tm-credit">
            Photo: <PhotoCredit image={{ ...shown, credit: shown.credit.replace(/^Photo(?: by)?:?\s*/i, "") }} />
          </div>
        )}
      </div>
      {photos.length > 1 && (
        <div className="tm-thumbs">
          {photos.map((p, i) => (
            <button
              key={i}
              type="button"
              className={`tm-thumb${i === photoIdx ? " active" : ""}`}
              data-photo={i}
              aria-label={`Show photo ${i + 1}`}
              onClick={() => setPhotoIdx(i)}
            >
              <Photo image={p} label={label} />
            </button>
          ))}
        </div>
      )}

      <div className="trek-modal-body tm-body">
        <p className="tm-lead">{t.tagline}</p>
        <div className="trek-detail-specs tm-specs">
          {facts.map(([val, key]) => (
            <div className="trek-detail-spec" key={key}>
              <div className="trek-detail-spec-val">{val}</div>
              <div className="trek-detail-spec-key">{key}</div>
            </div>
          ))}
        </div>
        <p className="tm-pricenote">
          <strong>About the price.</strong> {t.priceNote}
          {t.priceIsEstimate ? " Final quote confirmed when you book." : ""}
        </p>
        {t.operator === "partner" && t.operatorNote && (
          <div className="info-box info-box-amber tm-block">
            <div className="info-box-title">How this trip is run</div>
            {t.operatorNote}
          </div>
        )}

        <div className="tm-block">
          <div className="section-mini-title">Overview</div>
          {t.overview.map((p, i) => (
            <p className="tm-p" key={i}>{p}</p>
          ))}
        </div>

        <div className="tm-block">
          <div className="section-mini-title">Trek highlights</div>
          <List items={t.highlights} cls="tm-list-arrow" />
        </div>

        <div className="tm-block">
          <div className="itin-toolbar">
            <div className="section-mini-title" style={{ margin: 0 }}>Day-by-day itinerary</div>
            <button type="button" className="itin-toggle" data-toggle-all="1" aria-pressed={allOpen} onClick={toggleAll}>
              {allOpen ? "Collapse all" : "Expand all"}
            </button>
          </div>
          <div className="itin-list">
            {t.itinerary.map((day) => {
              const pid = `itin-${t.id}-${day.day}`;
              const isOpen = open.has(day.day);
              const dayFacts: [string, string][] = [["Activity", day.activity], ["Duration", day.duration]];
              if (day.distanceKm) dayFacts.push(["Distance", day.distanceKm]);
              if (typeof day.sleepAlt === "number") dayFacts.push(["Overnight altitude", altLabel(day.sleepAlt)]);
              dayFacts.push(["Meals", day.meals], ["Accommodation", day.stay]);
              return (
                <div className={`itin-item${isOpen ? " open" : ""}`} key={day.day}>
                  <h4 className="itin-h">
                    <button
                      type="button"
                      className="itin-btn"
                      id={`${pid}-btn`}
                      aria-expanded={isOpen}
                      aria-controls={pid}
                      onClick={() => toggleDay(day.day)}
                    >
                      <span className="itin-day">Day {pad2(day.day)}</span>
                      <span className="itin-title">{day.title}</span>
                      <span className="itin-chips">
                        {typeof day.sleepAlt === "number" && <span className="itin-chip">{altLabel(day.sleepAlt)}</span>}
                        <span className="itin-chip itin-chip-soft">{day.activity}</span>
                      </span>
                      <span className="itin-chev" aria-hidden="true" />
                    </button>
                  </h4>
                  <div className="itin-panel" id={pid} role="region" aria-labelledby={`${pid}-btn`} hidden={!isOpen}>
                    <dl className="itin-facts">
                      {dayFacts.map(([k, v]) => (
                        <div key={k}>
                          <dt>{k}</dt>
                          <dd>{v}</dd>
                        </div>
                      ))}
                    </dl>
                    <p className="itin-desc">{day.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {t.itinerary.filter((x) => typeof x.sleepAlt === "number").length > 1 && (
          <div className="tm-block">
            <div className="section-mini-title">Altitude profile</div>
            <div className="alt-wrap">
              <AltitudeChart trek={t} />
            </div>
            <p className="tm-chart-note">Overnight altitude by day. Dots show where you sleep; hover or tap one for the day.</p>
          </div>
        )}

        <div className="tm-block">
          <div className="section-mini-title">Route at a glance</div>
          <dl className="tm-glance">
            <div><dt>Starts</dt><dd>{t.startPoint}</dd></div>
            <div><dt>Ends</dt><dd>{t.endPoint}</dd></div>
            <div><dt>Best season</dt><dd>{t.bestSeasons}</dd></div>
          </dl>
        </div>

        <div className="tm-block">
          <div className="section-mini-title">Permits &amp; fees</div>
          <ul className="tm-permits">
            {t.permits.map((p, i) => (
              <li key={i}>
                <strong>{p.name}</strong>
                <span>{p.note}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="tm-block tm-inc">
          <div className="info-box info-box-green">
            <div className="info-box-title">What&apos;s included</div>
            <List items={t.included} cls="tm-list-check" />
          </div>
          <div className="info-box info-box-red">
            <div className="info-box-title">Not included</div>
            <List items={t.excluded} cls="tm-list-cross" />
          </div>
        </div>

        <div className="tm-block">
          <div className="section-mini-title">Fitness &amp; safety</div>
          <p className="tm-p">{t.fitness}</p>
          <List items={t.safetyNotes} cls="tm-list-arrow" />
        </div>
      </div>

      <div className="tm-footer">
        <Link href={`/book?trek=${encodeURIComponent(t.id)}`} className="btn btn-primary" style={{ flex: 1, justifyContent: "center" }}>
          Book This Trek
        </Link>
        <Link href="/prepare" className="btn btn-outline-amber" style={{ flex: 1, justifyContent: "center" }}>
          Read Prep Guide
        </Link>
      </div>
    </>
  );
}
