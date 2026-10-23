"use client";

import "./prepare.css";
import Link from "next/link";
import { useEffect, useState } from "react";

type TabId = "standard" | "technical" | "cultural";

const SIDEBAR_LINKS: { href: string; label: string }[] = [
  { href: "#what-to-expect", label: "What to Expect" },
  { href: "#packing", label: "Packing Lists" },
  { href: "#altitude", label: "Altitude Sickness" },
  { href: "#diamox", label: "Diamox Guide" },
  { href: "#insurance", label: "Travel Insurance" },
  { href: "#fitness", label: "Fitness Prep" },
  { href: "#visa", label: "Nepal Visa & Permits" },
  { href: "#kathmandu", label: "Kathmandu Arrival" },
];

export default function PreparePage() {
  const [tab, setTab] = useState<TabId>("standard");
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [openWeeks, setOpenWeeks] = useState<Record<number, boolean>>({});
  const [activeSection, setActiveSection] = useState<string>("what-to-expect");

  // Sidebar highlighting on scroll
  useEffect(() => {
    const onScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>(".section-card[id]");
      let current = "";
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleCheck = (id: string) =>
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));

  const toggleWeek = (i: number) =>
    setOpenWeeks((prev) => ({ ...prev, [i]: !prev[i] }));

  // Helper to render a gear item with a stable key
  const GearItem = ({
    id,
    children,
  }: {
    id: string;
    children: React.ReactNode;
  }) => (
    <div className="gear-item">
      <div
        className={`gear-check${checked[id] ? " checked" : ""}`}
        onClick={() => toggleCheck(id)}
      />
      {children}
    </div>
  );

  return (
    <>
      {/* Hero */}
      <div className="page-hero">
        <div className="page-hero-content">
          <div className="eyebrow" style={{ color: "var(--amber-light)", marginBottom: "0.5rem" }}>
            Knowledge is Safety
          </div>
          <h1 className="display-lg" style={{ color: "var(--white)", marginBottom: "0.5rem" }}>
            Prepare for Your Trek
          </h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.05rem" }}>
            Packing lists · Altitude sickness · Travel insurance · Fitness · What to expect
          </p>
        </div>
      </div>

      <section className="section" style={{ background: "var(--snow)" }}>
        <div className="container-default">
          <div className="prepare-layout">

            {/* Sidebar */}
            <aside className="prepare-sidebar">
              <div className="sidebar-title">In This Guide</div>
              {SIDEBAR_LINKS.map((l) => (
                <a
                  key={l.href}
                  className={`sidebar-link${
                    activeSection === l.href.slice(1) ? " active" : ""
                  }`}
                  href={l.href}
                >
                  {l.label}
                </a>
              ))}
              <div style={{ marginTop: "1.5rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border-dark)" }}>
                <Link href="/book" className="btn btn-primary btn-sm" style={{ width: "100%", justifyContent: "center" }}>
                  Book a Trek
                </Link>
              </div>
            </aside>

            {/* Main Content */}
            <main>

              {/* What to Expect */}
              <div className="section-card" id="what-to-expect">
                <h2 className="section-card-title">What to Expect</h2>
                <p className="section-card-lead">
                  Your Himalayan journey begins weeks before you board the plane. Here&apos;s a day-by-day breakdown of a typical Everest Base Camp experience.
                </p>

                <div className="day-card">
                  <div className="day-num">Pre</div>
                  <div>
                    <div className="day-title">Before You Arrive — Preparation</div>
                    <div className="day-detail">Get your Nepal e-visa. Book travel insurance with helicopter evacuation cover. Start a fitness routine 12 weeks out. Consult your doctor about Diamox. Purchase or rent gear. Pack smart — teahouse porters carry max 15kg.</div>
                  </div>
                </div>
                <div className="day-card">
                  <div className="day-num">1</div>
                  <div>
                    <div className="day-title">Arrival in Kathmandu (1,400m)</div>
                    <div className="day-detail">Your guide meets you at Tribhuvan Airport. Transfer to hotel in Thamel. Gear check meeting — rental gear pickup if needed. Briefing dinner: route overview, permits, health check. Rest well for the Lukla flight.</div>
                  </div>
                </div>
                <div className="day-card">
                  <div className="day-num">2</div>
                  <div>
                    <div className="day-title">The Lukla Flight (2,860m) — World&apos;s Most Dramatic Airport</div>
                    <div className="day-detail">30-minute Twin Otter flight through mountain valleys. Lukla&apos;s sloped runway ends in a cliff — breathtaking but perfectly safe. Trek begins immediately through pine forests. You&apos;ll feel the altitude — take it slow, stay hydrated.</div>
                  </div>
                </div>
                <div className="day-card">
                  <div className="day-num">3–5</div>
                  <div>
                    <div className="day-title">Namche Bazaar (3,440m) — Acclimatization</div>
                    <div className="day-detail">Spend 2 nights at Namche. Crucial acclimatization period. Expect headaches, reduced appetite, vivid dreams — this is normal. Day hike to 3,880m without sleeping there. Saturday market is a highlight. WiFi, hot showers, good espresso (seriously).</div>
                  </div>
                </div>
                <div className="day-card">
                  <div className="day-num">6–8</div>
                  <div>
                    <div className="day-title">Into the High Khumbu (4,000–4,500m)</div>
                    <div className="day-detail">Trails thin. Yak caravans share the path. Tengboche Monastery evening prayers are unforgettable. Air gets noticeably thinner. Breathing becomes deliberate. Sleep may be disrupted — earplugs help in teahouses. Your appetite drops; eat anyway.</div>
                  </div>
                </div>
                <div className="day-card">
                  <div className="day-num">9–11</div>
                  <div>
                    <div className="day-title">High Camp Zone (4,500–5,364m)</div>
                    <div className="day-detail">Lobuche. Gorak Shep. Thin air, cold nights (-15°C possible), stunning silence. Your guide monitors you daily for AMS symptoms. The EBC approach crosses glacier moraine — slow, methodical, exhilarating. Base Camp itself is anticlimactic for some — but Kalapathar sunrise never disappoints.</div>
                  </div>
                </div>
                <div className="day-card">
                  <div className="day-num">12+</div>
                  <div>
                    <div className="day-title">Descent & Return to Kathmandu</div>
                    <div className="day-detail">Descent is fast and joyful — your body loves the thickening air. You&apos;ll notice your energy returning with every 100m of descent. Celebration in Namche. Final Lukla flight. Back in Kathmandu for a celebration dinner. You did it.</div>
                  </div>
                </div>

                <div className="info-box info-box-amber" style={{ marginTop: "1.5rem" }}>
                  <div className="info-box-title">The Golden Rule of Altitude</div>
                  &quot;Walk high, sleep low.&quot; Acclimatization day hikes always go higher than your sleeping altitude. Never skip rest days. Never push through AMS symptoms. Your guide has final authority on safety decisions — trust them completely.
                </div>
              </div>

              {/* Packing List */}
              <div className="section-card" id="packing">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", marginBottom: "0.5rem" }}>
                  <h2 className="section-card-title" style={{ margin: 0 }}>Packing Lists</h2>
                  <button className="btn btn-outline-amber btn-sm" onClick={() => window.print()}>Print List</button>
                </div>
                <p className="section-card-lead">
                  Click items to check them off. Items marked <span className="gear-rental-tag">Available to Rent</span> can be rented in Kathmandu — saving you baggage fees and shipping hassle.
                </p>

                <div className="tab-nav">
                  <button className={`tab-btn${tab === "standard" ? " active" : ""}`} onClick={() => setTab("standard")}>Standard EBC</button>
                  <button className={`tab-btn${tab === "technical" ? " active" : ""}`} onClick={() => setTab("technical")}>Peak Climbing Add-ons</button>
                  <button className={`tab-btn${tab === "cultural" ? " active" : ""}`} onClick={() => setTab("cultural")}>Cultural Trek</button>
                </div>

                <div className={`tab-panel${tab === "standard" ? " active" : ""}`} id="tab-standard">
                  <div className="gear-cat-title">Clothing — Layering System</div>
                  <GearItem id="s1">Base layer (moisture-wicking, 2×) — top & bottom</GearItem>
                  <GearItem id="s2">Mid-layer fleece or softshell jacket</GearItem>
                  <GearItem id="s3">Down jacket (rated to -10°C minimum) <span className="gear-rental-tag">Available to Rent</span></GearItem>
                  <GearItem id="s4">Waterproof shell jacket (breathable, Gore-Tex recommended)</GearItem>
                  <GearItem id="s5">Waterproof shell pants</GearItem>
                  <GearItem id="s6">Trekking pants (2 pairs, zip-off useful)</GearItem>
                  <GearItem id="s7">Thermal underwear (2 pairs)</GearItem>
                  <GearItem id="s8">Trekking socks — wool (4–5 pairs)</GearItem>
                  <GearItem id="s9">Liner gloves + warm insulated gloves</GearItem>
                  <GearItem id="s10">Warm hat (wool/fleece) + sun hat or cap</GearItem>
                  <GearItem id="s11">Balaclava or neck gaiter (above 4,500m)</GearItem>
                  <GearItem id="s12">Gaiters (helpful in snow)</GearItem>

                  <div className="gear-cat-title">Footwear</div>
                  <GearItem id="s13">Waterproof trekking boots (broken in!) <span className="gear-rental-tag">Available to Rent</span></GearItem>
                  <GearItem id="s14">Camp sandals / flip-flops</GearItem>
                  <GearItem id="s15">Gaiters</GearItem>

                  <div className="gear-cat-title">Pack & Sleep</div>
                  <GearItem id="s16">Daypack (25–35L) + rain cover <span className="gear-rental-tag">Available to Rent</span></GearItem>
                  <GearItem id="s17">Duffel bag for porter (max 15kg) <span className="gear-rental-tag">Available to Rent</span></GearItem>
                  <GearItem id="s18">Sleeping bag (rated -15°C / 5°F) <span className="gear-rental-tag">Available to Rent</span></GearItem>
                  <GearItem id="s19">Sleeping bag liner (adds warmth, good hygiene)</GearItem>

                  <div className="gear-cat-title">Nutrition & Hydration</div>
                  <GearItem id="s20">2× water bottles (1L each) or hydration bladder</GearItem>
                  <GearItem id="s21">Water purification tablets or SteriPen</GearItem>
                  <GearItem id="s22">Energy bars / gels (20+ days of snacks)</GearItem>
                  <GearItem id="s23">Electrolyte tablets (critical at altitude)</GearItem>

                  <div className="gear-cat-title">Medical / First Aid</div>
                  <GearItem id="s24"><strong>Diamox (acetazolamide)</strong> — see guide below</GearItem>
                  <GearItem id="s25">Ibuprofen / paracetamol (headaches)</GearItem>
                  <GearItem id="s26">Imodium / rehydration salts (GI issues)</GearItem>
                  <GearItem id="s27">Blister kit (Compeed, moleskin)</GearItem>
                  <GearItem id="s28">Sunscreen SPF 50+ (UV is intense at altitude)</GearItem>
                  <GearItem id="s29">Lip balm with SPF</GearItem>
                  <GearItem id="s30">Eye drops (dry air)</GearItem>
                  <GearItem id="s31">Prescription medications + extra supply</GearItem>

                  <div className="gear-cat-title">Gear & Tech</div>
                  <GearItem id="s32">Trekking poles (highly recommended) <span className="gear-rental-tag">Available to Rent</span></GearItem>
                  <GearItem id="s33">Headlamp + spare batteries</GearItem>
                  <GearItem id="s34">Glacier sunglasses (UV400 Category 4) <span className="gear-rental-tag">Available to Rent</span></GearItem>
                  <GearItem id="s35">Portable charger / power bank</GearItem>
                  <GearItem id="s36">Camera (cold drains batteries — keep warm)</GearItem>
                  <GearItem id="s37">Universal power adapter</GearItem>
                  <GearItem id="s38">Garmin / GPS watch (optional but useful)</GearItem>

                  <div className="gear-cat-title">Documents</div>
                  <GearItem id="s39">Passport (valid 6+ months) — photocopy kept separate</GearItem>
                  <GearItem id="s40">Nepal visa (obtained on arrival or e-visa)</GearItem>
                  <GearItem id="s41">Travel insurance documents (helicopter evac policy)</GearItem>
                  <GearItem id="s42">Emergency contact list (printed, not just digital)</GearItem>
                  <GearItem id="s43">USD cash (ATMs unreliable above Namche)</GearItem>
                </div>

                <div className={`tab-panel${tab === "technical" ? " active" : ""}`} id="tab-technical">
                  <div className="info-box info-box-amber" style={{ marginBottom: "1.5rem" }}>
                    <div className="info-box-title">Required for Peak Climbing Treks</div>
                    These additional items are required for Lobuche Peak, Island Peak, Mera Peak, and any pass crossing (Cho La, Renjo La, Kongma La).
                  </div>
                  <div className="gear-cat-title">Technical Mountaineering</div>
                  <GearItem id="t1">Crampons (12-point) <span className="gear-rental-tag">Available to Rent</span></GearItem>
                  <GearItem id="t2">Ice axe <span className="gear-rental-tag">Available to Rent</span></GearItem>
                  <GearItem id="t3">Climbing harness <span className="gear-rental-tag">Available to Rent</span></GearItem>
                  <GearItem id="t4">Helmet <span className="gear-rental-tag">Available to Rent</span></GearItem>
                  <GearItem id="t5">Jumar / ascender <span className="gear-rental-tag">Available to Rent</span></GearItem>
                  <GearItem id="t6">Carabiners (4× locking) <span className="gear-rental-tag">Available to Rent</span></GearItem>
                  <GearItem id="t7">Slings / cordage</GearItem>
                  <GearItem id="t8">Double boots (for 6,000m+) <span className="gear-rental-tag">Available to Rent</span></GearItem>
                  <GearItem id="t9">Mountaineering gaiters (waterproof, high)</GearItem>
                  <GearItem id="t10">Expedition sleeping bag (-25°C) <span className="gear-rental-tag">Available to Rent</span></GearItem>
                </div>

                <div className={`tab-panel${tab === "cultural" ? " active" : ""}`} id="tab-cultural">
                  <div className="info-box info-box-green" style={{ marginBottom: "1.5rem" }}>
                    <div className="info-box-title">Cultural Treks — Lighter Packing</div>
                    For Namche cultural trek and Ama Dablam BC (below 4,600m) you can pack significantly lighter.
                  </div>
                  <div className="gear-cat-title">Lighter Essentials</div>
                  <GearItem id="c1">Light waterproof jacket</GearItem>
                  <GearItem id="c2">Fleece mid-layer</GearItem>
                  <GearItem id="c3">Light trekking boots</GearItem>
                  <GearItem id="c4">20–25L daypack</GearItem>
                  <GearItem id="c5">3-season sleeping bag (-5°C) <span className="gear-rental-tag">Available to Rent</span></GearItem>
                  <GearItem id="c6">Sunscreen & hat</GearItem>
                  <GearItem id="c7">Small day first aid kit</GearItem>
                </div>
              </div>

              {/* Altitude Sickness */}
              <div className="section-card" id="altitude">
                <h2 className="section-card-title">Altitude Sickness — Know Before You Go</h2>
                <p className="section-card-lead">Altitude sickness (acute mountain sickness / AMS) affects everyone differently. Even the fittest athletes can be struck. Understanding the symptoms and knowing when to act is the most important safety knowledge you can have.</p>

                <div className="ams-scale">
                  <div className="ams-level ams-level-mild">
                    <div className="ams-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="#92400E"><rect x="4" y="14" width="4" height="6" rx="1" /><rect x="10" y="10" width="4" height="10" rx="1" opacity="0.3" /><rect x="16" y="6" width="4" height="14" rx="1" opacity="0.3" /></svg></div>
                    <div className="ams-title" style={{ color: "#92400E" }}>Mild AMS</div>
                    <div className="ams-symptoms" style={{ color: "#78350F" }}>
                      Headache · Fatigue · Dizziness · Loss of appetite · Nausea · Poor sleep<br /><br />
                      <strong>Action:</strong> Rest at current altitude. Don&apos;t ascend until symptoms resolve. Take ibuprofen/paracetamol.
                    </div>
                  </div>
                  <div className="ams-level ams-level-moderate">
                    <div className="ams-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="#991B1B"><rect x="4" y="14" width="4" height="6" rx="1" /><rect x="10" y="10" width="4" height="10" rx="1" /><rect x="16" y="6" width="4" height="14" rx="1" opacity="0.3" /></svg></div>
                    <div className="ams-title" style={{ color: "#991B1B" }}>Moderate AMS</div>
                    <div className="ams-symptoms" style={{ color: "#7F1D1D" }}>
                      Severe headache · Persistent vomiting · Extreme fatigue · Shortness of breath at rest · Confusion<br /><br />
                      <strong>Action:</strong> DESCEND immediately. Take Diamox. Alert your guide. Do not wait for morning.
                    </div>
                  </div>
                  <div className="ams-level ams-level-severe">
                    <div className="ams-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="var(--amber-light)"><rect x="4" y="14" width="4" height="6" rx="1" /><rect x="10" y="10" width="4" height="10" rx="1" /><rect x="16" y="6" width="4" height="14" rx="1" /></svg></div>
                    <div className="ams-title" style={{ color: "var(--amber-light)" }}>HACE / HAPE (Severe)</div>
                    <div className="ams-symptoms" style={{ color: "rgba(255,255,255,0.8)" }}>
                      Ataxia (can&apos;t walk straight) · Gurgling in chest · Blue lips · Cannot stay conscious<br /><br />
                      <strong>Action:</strong> MEDICAL EMERGENCY. Descend immediately. Helicopter evacuation. Your guide activates insurance immediately.
                    </div>
                  </div>
                </div>

                <div className="info-box" style={{ margin: "1.5rem 0" }}>
                  <div className="info-box-title">The Acclimatization Rule</div>
                  Above 3,000m, never ascend more than 300–500m of sleeping altitude per day. For every 1,000m gained, take one rest day. Your itinerary is built around this — do not try to rush ahead.
                </div>

                <h3 style={{ marginBottom: "1rem", fontSize: "1.1rem" }}>Prevention Tips</h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div className="info-box info-box-green">
                    <div className="info-box-title">Do</div>
                    Hydrate 3–4L of water daily · Eat even when not hungry · Rest on acclimatization days · Tell your guide any symptoms immediately · Take Diamox if prescribed · Walk slowly (&quot;Sherpa pace&quot;)
                  </div>
                  <div className="info-box info-box-red">
                    <div className="info-box-title">Don&apos;t</div>
                    Don&apos;t push through headaches · Don&apos;t ascend with symptoms · Don&apos;t drink alcohol above 3,500m · Don&apos;t take sleeping pills (suppress breathing) · Don&apos;t hide symptoms from your guide
                  </div>
                </div>
              </div>

              {/* Diamox */}
              <div className="section-card" id="diamox">
                <h2 className="section-card-title">Diamox (Acetazolamide) — The Complete Guide</h2>
                <p className="section-card-lead">Diamox is a carbonic anhydrase inhibitor that helps your body acclimatize by stimulating breathing. It&apos;s widely used by trekkers and is available over-the-counter in Kathmandu pharmacies.</p>

                <div className="diamox-box">
                  <div className="diamox-title">Diamox at a Glance</div>
                  <div className="diamox-row">
                    <div className="diamox-stat">
                      <div className="diamox-stat-val">125–250mg</div>
                      <div className="diamox-stat-key">Typical Dose</div>
                    </div>
                    <div className="diamox-stat">
                      <div className="diamox-stat-val">Twice Daily</div>
                      <div className="diamox-stat-key">Frequency</div>
                    </div>
                    <div className="diamox-stat">
                      <div className="diamox-stat-val">24–48 hrs</div>
                      <div className="diamox-stat-key">Before Ascent</div>
                    </div>
                    <div className="diamox-stat">
                      <div className="diamox-stat-val">~$2 USD</div>
                      <div className="diamox-stat-key">Cost in Kathmandu</div>
                    </div>
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", margin: "1.5rem 0" }}>
                  <div className="info-box info-box-green">
                    <div className="info-box-title">Who Should Consider Diamox</div>
                    • History of altitude sickness<br />
                    • Fast ascent itinerary (14 days to EBC)<br />
                    • Individual susceptibility (genetics)<br />
                    • Peace of mind on your once-in-a-lifetime trek
                  </div>
                  <div className="info-box info-box-red">
                    <div className="info-box-title">Contraindications (Do Not Take If)</div>
                    • Sulfa drug allergy<br />
                    • Kidney disease<br />
                    • Pregnant or breastfeeding<br />
                    • Taking certain blood thinners<br />
                    <strong>Always consult your doctor first!</strong>
                  </div>
                </div>

                <div className="info-box info-box-amber">
                  <div className="info-box-title">Where to Buy in Kathmandu</div>
                  Diamox is available without prescription at most pharmacies in Thamel, Kathmandu at a fraction of Western prices. Your guide will take you to a trusted pharmacy during your arrival briefing. Bring a note from your doctor if possible. Common brand names: <strong>Acetazolamide, Diamox, Azetamide</strong>.
                </div>

                <p style={{ marginTop: "1.5rem", fontSize: "0.88rem", color: "var(--stone)" }}><strong>Note:</strong> Diamox causes increased urination (helpful) and tingling in fingers/toes (harmless). Carbonated drinks may taste flat. Side effects are generally mild and resolve on stopping the medication. It does NOT replace proper acclimatization — it&apos;s a supplement to good planning.</p>
              </div>

              {/* Insurance */}
              <div className="section-card" id="insurance">
                <h2 className="section-card-title">Travel Insurance — Non-Negotiable</h2>
                <p className="section-card-lead">Travel insurance with helicopter evacuation coverage is <strong>mandatory</strong> for all Peak Pursuit treks above 5,000m. A helicopter rescue from EBC costs $5,000–$15,000+ without insurance. This is not optional.</p>

                <div className="info-box info-box-red" style={{ marginBottom: "2rem" }}>
                  <div className="info-box-title">Why Helicopter Evac Coverage Matters</div>
                  At 5,000m+ there are no roads. The only way out in an emergency is helicopter. HACE and HAPE can turn fatal within hours. Your insurance must explicitly cover helicopter evacuation above 5,000m (many standard policies exclude this). Some policies require pre-authorization — your guide will handle this.
                </div>

                <h3 style={{ fontSize: "1.05rem", marginBottom: "1rem" }}>Coverage Comparison</h3>
                <table className="insurance-table">
                  <thead>
                    <tr>
                      <th>Coverage Type</th>
                      <th>Standard Travel</th>
                      <th>Adventure/Trek</th>
                      <th>Expedition</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Trip cancellation</td><td className="check">✓</td><td className="check">✓</td><td className="check">✓</td></tr>
                    <tr><td>Medical expenses</td><td className="check">✓</td><td className="check">✓</td><td className="check">✓</td></tr>
                    <tr><td>Helicopter evacuation (below 5,000m)</td><td className="cross">✗</td><td className="check">✓</td><td className="check">✓</td></tr>
                    <tr><td>Helicopter evacuation (above 5,000m)</td><td className="cross">✗</td><td className="cross">✗ <em style={{ color: "var(--stone)", fontSize: "0.78rem" }}>(often excluded)</em></td><td className="check">✓</td></tr>
                    <tr><td>High altitude trekking (to 5,500m)</td><td className="cross">✗</td><td className="check">✓</td><td className="check">✓</td></tr>
                    <tr><td>Peak climbing (6,000m+)</td><td className="cross">✗</td><td className="cross">✗</td><td className="check">✓</td></tr>
                    <tr><td>Search & rescue costs</td><td className="cross">✗</td><td className="check">✓</td><td className="check">✓</td></tr>
                  </tbody>
                </table>

                <div style={{ marginTop: "1.5rem" }}>
                  <div className="section-mini-title">Recommended Insurance Providers</div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1rem" }}>
                    <div className="info-box">
                      <div className="info-box-title">World Nomads</div>
                      Explorer plan covers trekking to 6,000m with helicopter evac. Popular with adventure travelers.
                    </div>
                    <div className="info-box">
                      <div className="info-box-title">Battleface</div>
                      Excellent for high-altitude trekking with clear language about helicopter evacuation coverage.
                    </div>
                    <div className="info-box">
                      <div className="info-box-title">Global Rescue</div>
                      Membership-based evacuation service (not insurance, but works alongside it). Used by professionals.
                    </div>
                  </div>
                </div>

                <div className="info-box info-box-amber" style={{ marginTop: "1rem" }}>
                  <div className="info-box-title">What to Check in Your Policy</div>
                  1. Does it cover helicopter evacuation above 5,000m specifically? 2. What is the maximum altitude covered? 3. Is there a pre-authorization requirement (call before evac)? 4. What&apos;s the medical expense limit ($100,000+ recommended)? 5. Does it cover trip cancellation due to AMS?
                </div>
              </div>

              {/* Fitness */}
              <div className="section-card" id="fitness">
                <h2 className="section-card-title">Fitness Preparation</h2>
                <p className="section-card-lead">You don&apos;t need to be a marathoner — but you do need a strong base of cardiovascular fitness and leg strength. Start training at least 12 weeks before your trek.</p>

                <div className="altitude-preview" style={{ marginBottom: "1.5rem" }}>
                  <div className="section-mini-title">Minimum Fitness Benchmark Before Departing</div>
                  <div className="altitude-bar">
                    <div className="altitude-bar-label">Easy hikes (Green ●)</div>
                    <div className="altitude-bar-track"><div className="altitude-bar-fill" style={{ width: "40%" }} /></div>
                    <div className="altitude-bar-value">3–4 hrs/day</div>
                  </div>
                  <div className="altitude-bar">
                    <div className="altitude-bar-label">Blue Square ■</div>
                    <div className="altitude-bar-track"><div className="altitude-bar-fill" style={{ width: "55%" }} /></div>
                    <div className="altitude-bar-value">5–6 hrs/day</div>
                  </div>
                  <div className="altitude-bar">
                    <div className="altitude-bar-label">EBC / Black Diamond ◆</div>
                    <div className="altitude-bar-track"><div className="altitude-bar-fill" style={{ width: "75%" }} /></div>
                    <div className="altitude-bar-value">6–8 hrs/day</div>
                  </div>
                  <div className="altitude-bar">
                    <div className="altitude-bar-label">Peak Climbing ◆◆</div>
                    <div className="altitude-bar-track"><div className="altitude-bar-fill" style={{ width: "100%" }} /></div>
                    <div className="altitude-bar-value">8+ hrs/day</div>
                  </div>
                </div>

                <div className="fitness-plan">
                  <div className="fitness-week">
                    <div className="fitness-week-header" onClick={() => toggleWeek(0)}>
                      <span className="fitness-week-title">Weeks 1–4: Foundation Building</span>
                      <span className="fitness-week-badge">{openWeeks[0] ? "▲ Collapse" : "▼ Expand"}</span>
                    </div>
                    <div className={`fitness-week-body${openWeeks[0] ? " open" : ""}`}>
                      <div className="fitness-item">30-minute brisk walk, 4× per week — build to 60 minutes by week 4</div>
                      <div className="fitness-item">2× strength training: squats, lunges, step-ups, single-leg deadlifts</div>
                      <div className="fitness-item">Core work: planks, mountain climbers (10–15 min/session)</div>
                      <div className="fitness-item">One weekend hike with a loaded pack (start with 5kg, build to 10kg)</div>
                    </div>
                  </div>
                  <div className="fitness-week">
                    <div className="fitness-week-header" onClick={() => toggleWeek(1)}>
                      <span className="fitness-week-title">Weeks 5–8: Endurance Building</span>
                      <span className="fitness-week-badge">{openWeeks[1] ? "▲ Collapse" : "▼ Expand"}</span>
                    </div>
                    <div className={`fitness-week-body${openWeeks[1] ? " open" : ""}`}>
                      <div className="fitness-item">3–4 hour hikes with 500–800m elevation gain, 2× per month</div>
                      <div className="fitness-item">Stair climbing with 10kg pack (skyscrapers, stadium stairs, parking garages)</div>
                      <div className="fitness-item">Yoga or swimming for recovery and flexibility</div>
                      <div className="fitness-item">Add 30-minute moderate cardio (cycling, elliptical) 3× per week</div>
                    </div>
                  </div>
                  <div className="fitness-week">
                    <div className="fitness-week-header" onClick={() => toggleWeek(2)}>
                      <span className="fitness-week-title">Weeks 9–12: Peak Conditioning</span>
                      <span className="fitness-week-badge">{openWeeks[2] ? "▲ Collapse" : "▼ Expand"}</span>
                    </div>
                    <div className={`fitness-week-body${openWeeks[2] ? " open" : ""}`}>
                      <div className="fitness-item">6–8 hour mountain hikes with full pack weight (12–15kg)</div>
                      <div className="fitness-item">Multi-day backpacking trip if possible (best preparation)</div>
                      <div className="fitness-item">Practice trekking pole technique — saves 20% energy on steep terrain</div>
                      <div className="fitness-item">Break in your boots completely — blisters can end a trek</div>
                      <div className="fitness-item">Week 12: TAPER — reduce intensity, prioritize sleep and nutrition</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visa & Permits */}
              <div className="section-card" id="visa">
                <h2 className="section-card-title">Nepal Visa & Trekking Permits</h2>
                <p className="section-card-lead">All international trekkers require a Nepal tourist visa plus two trekking permits for the Sagarmatha (Everest) National Park region.</p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div className="info-box">
                    <div className="info-box-title">Nepal Tourist Visa</div>
                    Available on arrival at Tribhuvan International Airport (Kathmandu) or via e-visa online.<br /><br />
                    <strong>Cost:</strong> 15 days $30 · 30 days $50 · 90 days $125<br />
                    <strong>Process:</strong> ~30 mins at airport. Have passport photos and USD cash ready.
                  </div>
                  <div className="info-box info-box-amber">
                    <div className="info-box-title">TIMS Card</div>
                    Trekkers&apos; Information Management System card — required for all trekkers.<br /><br />
                    <strong>Cost:</strong> ~$20 USD<br />
                    <strong>Where:</strong> Nepal Tourism Board, Kathmandu. Your guide arranges this for you.
                  </div>
                  <div className="info-box info-box-green">
                    <div className="info-box-title">Sagarmatha National Park Permit</div>
                    Required for all EBC-region treks. Entry to the national park.<br /><br />
                    <strong>Cost:</strong> ~$30 USD (included in your Peak Pursuit package)
                  </div>
                  <div className="info-box">
                    <div className="info-box-title">Khumbu Pasang Lhamu Rural Municipality</div>
                    Local municipality fee recently introduced for all Khumbu trekkers.<br /><br />
                    <strong>Cost:</strong> ~$8 USD (included in your package)<br />
                    <strong>Note:</strong> Permits are checked at multiple checkpoints on trail.
                  </div>
                </div>
              </div>

              {/* Kathmandu Arrival */}
              <div className="section-card" id="kathmandu">
                <h2 className="section-card-title">Kathmandu Arrival Tips</h2>
                <p className="section-card-lead">Your adventure starts the moment you land. Here&apos;s what to expect in Kathmandu and how to use your pre-trek time wisely.</p>

                <div className="day-card">
                  <div className="day-num">✈️</div>
                  <div>
                    <div className="day-title">At the Airport</div>
                    <div className="day-detail">Your Peak Pursuit guide or driver meets you in the arrivals hall with a sign. Do NOT take unofficial taxi offers. The drive to Thamel is 20–40 minutes. ATMs are available at the airport — withdraw NPR (Nepali Rupees) and USD.</div>
                  </div>
                </div>
                <div className="day-card">
                  <div className="day-num">💊</div>
                  <div>
                    <div className="day-title">Day 1 in Kathmandu</div>
                    <div className="day-detail">Gear check with your guide. Visit pharmacy for Diamox if needed. Currency exchange at hotel rate (or Thamel money changers). Brief walk around Thamel — the adventure hub with dozens of gear shops. Early dinner and rest.</div>
                  </div>
                </div>
                <div className="day-card">
                  <div className="day-num">🕌</div>
                  <div>
                    <div className="day-title">Optional: Sightseeing Day</div>
                    <div className="day-detail">If you have extra time, visit Pashupatinath Temple, Boudhanath Stupa (the world&apos;s largest Buddhist stupa), or Swayambhunath (Monkey Temple). Your guide can arrange a half-day tour. Acclimatize at Kathmandu&apos;s 1,400m before ascending to Lukla.</div>
                  </div>
                </div>
              </div>

              {/* Final CTA */}
              <div style={{ background: "linear-gradient(135deg, var(--navy), var(--midnight))", borderRadius: "var(--radius-xl)", padding: "3rem", textAlign: "center", color: "white" }}>
                <h3 style={{ fontSize: "1.6rem", marginBottom: "0.75rem", color: "var(--white)" }}>Ready to Start Your Journey?</h3>
                <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "2rem" }}>Questions? Your guide is available via WhatsApp to answer any pre-trek concerns.</p>
                <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                  <Link href="/book" className="btn btn-primary btn-lg">Book Your Trek Now</Link>
                  <Link href="/treks" className="btn btn-secondary btn-lg">Browse All Treks</Link>
                </div>
              </div>

            </main>
          </div>
        </div>
      </section>
    </>
  );
}
