"use client";

import "./book.css";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useMemo, useState } from "react";

// ── Types ──
interface Trek {
  id: string;
  name: string;
  days: string;
  alt: string;
  price: number;
  img: string;
  diff: string;
}

interface TrekOption {
  id: string;
  name: string;
  optionName: string;
  days: string;
  alt: string;
  price: string;
  img: string;
  diffClass: string;
  diffLabel: string;
  diff: string;
  blackBadge?: boolean; // when option has no difficulty badge / custom price color
}

interface GearItem {
  id: string;
  name: string;
  icon: string;
  priceLabel: string;
  temp: number;
  perDay: number;
}

// ── Static data ──
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

// Booked dates (example data — replace with real API)
const bookedDates = ["2026-05-15", "2026-05-22", "2026-06-01", "2026-06-14"];
const popularDates = ["2026-05-10", "2026-05-17", "2026-10-01", "2026-10-15", "2026-11-01"];

// Trek options shown on Step 1
const TREK_OPTIONS: TrekOption[] = [
  {
    id: "ebc", name: "Everest Base Camp", optionName: "Everest Base Camp",
    days: "14 days", alt: "5,364m", price: "$1,890", img: "/images/hike_3rd_person.jpeg",
    diffClass: "diff-black", diffLabel: "Black Diamond", diff: "Black Diamond ◆",
  },
  {
    id: "3passes", name: "Three High Passes", optionName: "Three High Passes",
    days: "20 days", alt: "5,535m", price: "$2,490", img: "/images/hiking_down_at_sunset.jpeg",
    diffClass: "diff-double-black", diffLabel: "Double Black", diff: "Double Black ◆◆",
  },
  {
    id: "amadablam", name: "Ama Dablam Base Camp", optionName: "Ama Dablam Base Camp",
    days: "10 days", alt: "4,600m", price: "$1,290", img: "/images/sunset_3_peaks.jpeg",
    diffClass: "diff-blue", diffLabel: "Blue Square", diff: "Blue Square ■",
  },
  {
    id: "gokyo", name: "Gokyo Lakes & Ri", optionName: "Gokyo Lakes & Ri Summit",
    days: "13 days", alt: "4,790m", price: "$1,490", img: "/images/above_clouds.jpeg",
    diffClass: "diff-blue", diffLabel: "Blue Square", diff: "Blue Square ■",
  },
  {
    id: "lobuche", name: "Lobuche Peak (La Bouche)", optionName: "Lobuche Peak (La Bouche)",
    days: "18 days", alt: "6,119m", price: "$2,890", img: "/images/sunset_everest.jpeg",
    diffClass: "diff-double-black", diffLabel: "Double Black", diff: "Double Black ◆◆",
  },
  {
    id: "island", name: "Island Peak (Imja Tse)", optionName: "Island Peak (Imja Tse)",
    days: "20 days", alt: "6,189m", price: "$3,190", img: "/images/hike_3rd_person.jpeg",
    diffClass: "diff-double-black", diffLabel: "Double Black", diff: "Double Black ◆◆",
  },
  {
    id: "mera", name: "Mera Peak", optionName: "Mera Peak",
    days: "18 days", alt: "6,476m", price: "$3,490", img: "/images/sunset_3_peaks.jpeg",
    diffClass: "diff-double-black", diffLabel: "Double Black", diff: "Double Black ◆◆",
  },
  {
    id: "custom", name: "Custom / Bespoke Trek", optionName: "Bespoke / Custom Trek",
    days: "Flexible", alt: "Custom", price: "Contact Us", img: "/images/landing.JPG",
    diffClass: "", diffLabel: "", diff: "Custom ✦", blackBadge: true,
  },
];

// Gear catalogue
const GEAR_ITEMS: GearItem[] = [
  { id: "sleeping-bag", name: "Sleeping Bag", icon: "🛌", priceLabel: "$2.50/day", temp: -15, perDay: 2.5 },
  { id: "down-jacket", name: "Down Jacket", icon: "🧥", priceLabel: "$3/day", temp: 0, perDay: 3 },
  { id: "boots", name: "Trekking Boots", icon: "🥾", priceLabel: "$4/day", temp: 0, perDay: 4 },
  { id: "pack", name: "Trekking Pack", icon: "🎒", priceLabel: "$3/day", temp: 0, perDay: 3 },
  { id: "poles", name: "Trekking Poles", icon: "🪄", priceLabel: "$1.50/day", temp: 0, perDay: 1.5 },
  { id: "glasses", name: "Glacier Glasses", icon: "🕶️", priceLabel: "$1.50/day", temp: 0, perDay: 1.5 },
  { id: "crampons", name: "Crampons", icon: "🧊", priceLabel: "$2/day", temp: 0, perDay: 2 },
  { id: "ice-axe", name: "Ice Axe", icon: "🪝", priceLabel: "$2/day", temp: 0, perDay: 2 },
  { id: "harness", name: "Climbing Harness", icon: "⛑️", priceLabel: "$1.50/day", temp: 0, perDay: 1.5 },
];

// Gear display names used in the summary line
const GEAR_NAMES: Record<string, string> = {
  "sleeping-bag": "Sleeping Bag",
  "down-jacket": "Down Jacket",
  "boots": "Trekking Boots",
  "pack": "Trekking Pack",
  "poles": "Trekking Poles",
  "glasses": "Glacier Glasses",
  "crampons": "Crampons",
  "ice-axe": "Ice Axe",
  "harness": "Climbing Harness",
};

// Map used for the ?trek= deep-link (mirrors the legacy trekMap)
const TREK_MAP: Record<string, Trek> = {
  namche: { id: "namche", name: "Namche Cultural Walk", days: "5 days", alt: "3,440m", price: 690, img: "/images/landing.JPG", diff: "Green Circle ●" },
  amadablam: { id: "amadablam", name: "Ama Dablam Base Camp", days: "10 days", alt: "4,600m", price: 1290, img: "/images/sunset_3_peaks.jpeg", diff: "Blue Square ■" },
  gokyo: { id: "gokyo", name: "Gokyo Lakes", days: "13 days", alt: "4,790m", price: 1490, img: "/images/above_clouds.jpeg", diff: "Blue Square ■" },
  ebc: { id: "ebc", name: "Everest Base Camp", days: "14 days", alt: "5,364m", price: 1890, img: "/images/hike_3rd_person.jpeg", diff: "Black Diamond ◆" },
  kalapathar: { id: "kalapathar", name: "Kalapathar Sunrise", days: "13 days", alt: "5,545m", price: 1790, img: "/images/kalapathar.jpeg", diff: "Black Diamond ◆" },
  renjola: { id: "renjola", name: "Renjo La Pass", days: "15 days", alt: "5,360m", price: 1690, img: "/images/above_clouds.jpeg", diff: "Black Diamond ◆" },
  jiri: { id: "jiri", name: "Jiri to EBC Classic", days: "22 days", alt: "5,364m", price: 2290, img: "/images/hike_3rd_person.jpeg", diff: "Black Diamond ◆" },
  chhukung: { id: "chhukung", name: "Chhukung Ri", days: "14 days", alt: "5,550m", price: 1990, img: "/images/sunset_3_peaks.jpeg", diff: "Black Diamond ◆" },
  "3passes": { id: "3passes", name: "Three High Passes", days: "20 days", alt: "5,535m", price: 2490, img: "/images/hiking_down_at_sunset.jpeg", diff: "Double Black ◆◆" },
  chola: { id: "chola", name: "Cho La & EBC", days: "16 days", alt: "5,420m", price: 2090, img: "/images/hiking_down_at_sunset.jpeg", diff: "Double Black ◆◆" },
  lobuche: { id: "lobuche", name: "Lobuche Peak", days: "18 days", alt: "6,119m", price: 2890, img: "/images/kalapathar.jpeg", diff: "Double Black ◆◆" },
  island: { id: "island", name: "Island Peak", days: "20 days", alt: "6,189m", price: 3190, img: "/images/sunset_3_peaks.jpeg", diff: "Double Black ◆◆" },
  mera: { id: "mera", name: "Mera Peak", days: "18 days", alt: "6,476m", price: 3490, img: "/images/sunset_3_peaks.jpeg", diff: "Double Black ◆◆" },
  custom: { id: "custom", name: "Bespoke Expedition", days: "Custom", alt: "Custom", price: 0, img: "/images/above_clouds.jpeg", diff: "Custom" },
};

const DEFAULT_TREK: Trek = {
  id: "ebc", name: "Everest Base Camp", days: "14 days", alt: "5,364m",
  price: 1890, img: "/images/hike_3rd_person.jpeg", diff: "Black Diamond ◆",
};

const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function fmtMoney(n: number): string {
  return `$${n.toLocaleString()}`;
}

export default function BookPage() {
  return (
    <Suspense fallback={null}>
      <BookInner />
    </Suspense>
  );
}

function BookInner() {
  const sp = useSearchParams();
  const preTrek = sp.get("trek");

  // Initial trek + initial step derived from the deep-link
  const initialTrek: Trek = preTrek && TREK_MAP[preTrek] ? TREK_MAP[preTrek] : DEFAULT_TREK;
  const initialStep = preTrek && TREK_MAP[preTrek] ? 2 : 1;

  // ── Booking state ──
  const [trek, setTrek] = useState<Trek>(initialTrek);
  const [date, setDate] = useState<string | null>(null);
  const [groupSize, setGroupSize] = useState(2);
  const [selectedGear, setSelectedGear] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState<number>(initialStep);

  // Calendar position
  const [calYear, setCalYear] = useState(2026);
  const [calMonth, setCalMonth] = useState(4); // May (0-indexed)

  // Step 3 extras
  const [privateGuide, setPrivateGuide] = useState(false);

  // Step 4 form
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nationality, setNationality] = useState("");
  const [experience, setExperience] = useState("");
  const [medical, setMedical] = useState("");
  const [insurance, setInsurance] = useState("");
  const [specialReqs, setSpecialReqs] = useState("");
  const [termsChecked, setTermsChecked] = useState(false);

  // Step 5 payment
  const [payMethod, setPayMethod] = useState<"stripe" | "square">("stripe");
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCVC, setCardCVC] = useState("");
  const [processing, setProcessing] = useState(false);

  // ── Derived totals (updateSummary equivalent) ──
  const total = trek.price * groupSize;
  const deposit = Math.round(total * 0.3);
  const balance = total - deposit;

  const totalLabel = total ? fmtMoney(total) : "Contact Us";
  const depositLabel = deposit ? fmtMoney(deposit) : "—";
  const totalDisplayLabel = total ? fmtMoney(total) : "—";
  const balanceLabel = balance ? fmtMoney(balance) : "—";
  const pppLabel = trek.price ? fmtMoney(trek.price) : "Contact Us";

  const summaryDateLabel = date
    ? new Date(date + "T00:00:00").toLocaleDateString("en-US", {
        weekday: "short", year: "numeric", month: "short", day: "numeric",
      })
    : "— Select date";

  const summaryGearLabel = selectedGear.length
    ? selectedGear.map((id) => GEAR_NAMES[id]).join(", ")
    : "None selected";

  const summarySizeLabel = `${groupSize} person${groupSize > 1 ? "s" : ""}`;

  // ── Calendar cells ──
  const today = useMemo(() => new Date(), []);
  const calendarCells = useMemo(() => {
    const cells: Array<{ key: string; empty: boolean; day?: number; dateStr?: string; classes: string; title?: string; selectable: boolean }> = [];
    const firstDay = new Date(calYear, calMonth, 1).getDay();
    const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
      cells.push({ key: `empty-${i}`, empty: true, classes: "cal-cell cal-empty", selectable: false });
    }
    for (let d = 1; d <= daysInMonth; d++) {
      const dateStr = `${calYear}-${String(calMonth + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
      const cellDate = new Date(calYear, calMonth, d);
      let classes = "cal-cell";
      let title: string | undefined;
      let selectable = false;

      if (cellDate < today) {
        classes += " cal-past";
      } else if (bookedDates.includes(dateStr)) {
        classes += " cal-booked";
        title = "Fully booked";
      } else {
        if (popularDates.includes(dateStr)) classes += " cal-peak";
        if (date === dateStr) classes += " cal-selected";
        selectable = true;
      }
      if (cellDate.toDateString() === today.toDateString()) classes += " cal-today";

      cells.push({ key: dateStr, empty: false, day: d, dateStr, classes, title, selectable });
    }
    return cells;
  }, [calYear, calMonth, date, today]);

  // ── Handlers ──
  function selectTrekOption(o: TrekOption) {
    const priceNum = parseInt(o.price.replace(/\D/g, ""), 10) || 0;
    setTrek({ id: o.id, name: o.name, days: o.days, alt: o.alt, price: priceNum, img: o.img, diff: o.diff });
  }

  function selectDate(dateStr: string) {
    setDate(dateStr);
  }

  function prevMonth() {
    setCalMonth((m) => {
      if (m - 1 < 0) {
        setCalYear((y) => y - 1);
        return 11;
      }
      return m - 1;
    });
  }
  function nextMonthCal() {
    setCalMonth((m) => {
      if (m + 1 > 11) {
        setCalYear((y) => y + 1);
        return 0;
      }
      return m + 1;
    });
  }

  function changeSize(delta: number) {
    setGroupSize((s) => Math.max(1, Math.min(8, s + delta)));
  }

  function toggleGear(id: string) {
    setSelectedGear((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]
    );
  }

  // ── Steps ──
  function nextStep(num: number) {
    setCurrentStep(num);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
  function goToStep(num: number) {
    nextStep(num);
  }

  function validateStep4() {
    if (!termsChecked) {
      alert("Please confirm you have read the preparation guide and will obtain travel insurance.");
      return;
    }
    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }
    nextStep(5);
  }

  // ── Payment ──
  function formatCard(value: string) {
    const v = value.replace(/\D/g, "");
    setCardNumber(v.replace(/(.{4})/g, "$1 ").trim());
  }
  function formatExpiry(value: string) {
    let v = value.replace(/\D/g, "");
    if (v.length >= 2) v = v.slice(0, 2) + " / " + v.slice(2);
    setCardExpiry(v);
  }
  function processPayment() {
    setProcessing(true);
    // In production: Stripe.js createPaymentMethod() call goes here
    setTimeout(() => {
      setProcessing(false);
      nextStep(6);
    }, 2200);
  }

  // Step indicator: completed when its index < currentStep - 1
  const stepLabels = ["Choose Trek", "Pick Dates", "Group & Gear", "Your Info", "Payment"];

  return (
    <div className="booking-page">
      {/* Booking Hero */}
      <div className="booking-hero">
        <div className="booking-hero-content">
          <div className="eyebrow" style={{ color: "var(--amber-light)", marginBottom: "0.5rem" }}>
            Secure Your Adventure
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem,4vw,2.8rem)", color: "var(--white)", marginBottom: "0.5rem" }}>
            Book Your Himalayan Trek
          </h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.95rem" }}>
            30% deposit secures your spot · Full balance due 60 days before departure
          </p>
        </div>
      </div>

      {/* Step Navigation */}
      <div className="booking-steps">
        {stepLabels.map((label, i) => {
          const num = i + 1;
          const active = currentStep === num;
          const completed = i < currentStep - 1 && currentStep <= 6;
          return (
            <button
              key={num}
              className={`step-btn${active ? " active" : ""}${completed ? " completed" : ""}`}
              onClick={() => goToStep(num)}
              id={`stepBtn${num}`}
              type="button"
            >
              <span className="step-num">{num}</span> {label}
            </button>
          );
        })}
      </div>

      <div className="booking-layout">
        <div>
          {/* ── STEP 1: Choose Trek ── */}
          <div className={`booking-step${currentStep === 1 ? " active" : ""}`} id="step1">
            <div className="step-card">
              <h2 className="step-title">Choose Your Trek</h2>
              <p className="step-subtitle">
                Select a trek below or{" "}
                <Link href="/treks" style={{ color: "var(--amber)" }}>view full details</Link>{" "}
                for each route. All prices per person, guide included.
              </p>

              <div id="trekOptions">
                {TREK_OPTIONS.map((o) => (
                  <div
                    key={o.id}
                    className={`trek-option${trek.id === o.id ? " selected" : ""}`}
                    onClick={() => selectTrekOption(o)}
                  >
                    <div className="trek-option-radio" />
                    <div style={{ flex: 1 }}>
                      <div className="trek-option-name">{o.optionName}</div>
                      <div className="trek-option-meta">
                        {o.diffClass ? (
                          <span className={`difficulty-badge ${o.diffClass}`} style={{ fontSize: "0.7rem", padding: "0.2rem 0.6rem" }}>
                            <span className="diff-icon">{o.diff.replace(/[^◆■●]/g, "").trim() || "◆"}</span> {o.diffLabel}
                          </span>
                        ) : null}
                        {o.id === "custom" ? (
                          <>
                            <span>📅 Flexible</span>
                            <span>💬 Contact us for a quote</span>
                          </>
                        ) : (
                          <>
                            <span>📅 {o.days.replace(" days", " Days")}</span>
                            <span>📍 {o.alt}</span>
                          </>
                        )}
                      </div>
                    </div>
                    {o.id === "custom" ? (
                      <div className="trek-option-price" style={{ color: "var(--stone)" }}>Get Quote</div>
                    ) : (
                      <div className="trek-option-price">From {o.price}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button className="btn btn-primary btn-lg" onClick={() => nextStep(2)} type="button">
                Choose Dates{" "}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* ── STEP 2: Pick Dates ── */}
          <div className={`booking-step${currentStep === 2 ? " active" : ""}`} id="step2">
            <div className="step-card">
              <h2 className="step-title">Choose Your Start Date</h2>
              <p className="step-subtitle">
                Select your preferred departure date. We recommend booking 2–3 months in advance for the best availability during peak season (Oct–Nov, Mar–May).
              </p>

              <div className="calendar-container">
                <div className="calendar-nav">
                  <button className="calendar-nav-btn" onClick={prevMonth} type="button">‹</button>
                  <span className="calendar-month" id="calMonthYear">{MONTHS[calMonth]} {calYear}</span>
                  <button className="calendar-nav-btn" onClick={nextMonthCal} type="button">›</button>
                </div>
                <div className="calendar-body">
                  <div className="cal-day-names">
                    {DAY_NAMES.map((dn) => (
                      <div className="cal-day-name" key={dn}>{dn}</div>
                    ))}
                  </div>
                  <div className="cal-grid" id="calGrid">
                    {calendarCells.map((c) =>
                      c.empty ? (
                        <div className={c.classes} key={c.key} />
                      ) : (
                        <div
                          className={c.classes}
                          key={c.key}
                          title={c.title}
                          onClick={c.selectable ? () => selectDate(c.dateStr!) : undefined}
                        >
                          {c.day}
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div className="cal-legend">
                  <div className="cal-legend-item"><div className="cal-legend-dot" style={{ background: "var(--amber)" }} /> Selected start</div>
                  <div className="cal-legend-item"><div className="cal-legend-dot" style={{ background: "rgba(232,114,43,0.15)" }} /> Trek duration</div>
                  <div className="cal-legend-item"><div className="cal-legend-dot" style={{ background: "rgba(37,99,168,0.12)" }} /> Popular dates</div>
                  <div className="cal-legend-item"><div className="cal-legend-dot" style={{ background: "rgba(239,68,68,0.1)", border: "1px solid #EF4444" }} /> Fully booked</div>
                </div>
              </div>

              {date ? (
                <div style={{ marginTop: "1.5rem" }} id="selectedDateInfo">
                  <div className="info-box info-box-green">
                    <div className="info-box-title">✅ Available — Great Choice!</div>
                    <span id="selectedDateText">
                      {MONTHS[parseInt(date.slice(5, 7), 10) - 1]} {parseInt(date.slice(8, 10), 10)}, {date.slice(0, 4)} — Looks great! This date has excellent weather and trail conditions.
                    </span>
                  </div>
                </div>
              ) : null}

              <div className="info-box info-box-amber" style={{ marginTop: "1rem" }}>
                <div className="info-box-title">🏔️ Best Times to Trek the Khumbu</div>
                <strong>Autumn (Oct–Nov):</strong> Crystal-clear skies, stable weather, crisp air — the most popular season.<br />
                <strong>Spring (Mar–May):</strong> Rhododendrons blooming, slightly warmer, also excellent — Everest climbing season.<br />
                <strong>Winter (Dec–Feb):</strong> Fewer trekkers, cold (-20°C possible), some high passes closed. EBC still possible.<br />
                <strong>Monsoon (Jun–Sep):</strong> Lush greenery, dramatic skies, significant rain. Possible but requires flexibility.
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button className="btn btn-dark" onClick={() => nextStep(1)} type="button">← Back</button>
              <button className="btn btn-primary btn-lg" onClick={() => nextStep(3)} type="button">Group &amp; Gear →</button>
            </div>
          </div>

          {/* ── STEP 3: Group & Gear ── */}
          <div className={`booking-step${currentStep === 3 ? " active" : ""}`} id="step3">
            <div className="step-card">
              <h2 className="step-title">Group Size</h2>
              <p className="step-subtitle">
                How many people will be trekking? Maximum group size is 8 for a quality experience. Private groups available.
              </p>
              <div className="size-selector">
                <button className="size-btn" onClick={() => changeSize(-1)} type="button">−</button>
                <div className="size-display" id="groupSizeDisplay">{groupSize}</div>
                <button className="size-btn" onClick={() => changeSize(1)} type="button">+</button>
              </div>
              <div className="size-note">1–8 people · Private guide for up to 4, 2 guides for 5–8</div>
              <div style={{ marginTop: "1.5rem" }}>
                <label style={{ display: "flex", alignItems: "center", gap: "0.75rem", cursor: "pointer", fontSize: "0.9rem" }}>
                  <input
                    type="checkbox"
                    id="privateGuideCheck"
                    style={{ width: "18px", height: "18px", cursor: "pointer" }}
                    checked={privateGuide}
                    onChange={(e) => setPrivateGuide(e.target.checked)}
                  />
                  <div>
                    <div style={{ fontWeight: 700 }}>Request Private Guide (Solo/Couple)</div>
                    <div style={{ fontSize: "0.82rem", color: "var(--stone)" }}>Fully private experience — +$200/person</div>
                  </div>
                </label>
              </div>
            </div>

            <div className="step-card">
              <h2 className="step-title">
                Gear Rental{" "}
                <span style={{ fontSize: "0.85rem", fontWeight: 500, color: "var(--stone)" }}>(Optional — Add to Your Booking)</span>
              </h2>
              <p className="step-subtitle">
                Pick up in Kathmandu, return after your trek. All gear is professional grade and properly sanitized between rentals.
              </p>
              <div className="gear-grid" id="gearGrid">
                {GEAR_ITEMS.map((g) => (
                  <div
                    key={g.id}
                    className={`gear-select-card${selectedGear.includes(g.id) ? " selected" : ""}`}
                    onClick={() => toggleGear(g.id)}
                  >
                    <div className="icon">{g.icon}</div>
                    <div className="name">
                      {g.id === "sleeping-bag"
                        ? "Sleeping Bag (-15°C)"
                        : g.id === "pack"
                        ? "Trekking Pack (35L)"
                        : g.id === "poles"
                        ? "Trekking Poles (pair)"
                        : g.id === "crampons"
                        ? "Crampons (12-pt)"
                        : g.name}
                    </div>
                    <div className="price">{g.priceLabel}</div>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: "0.8rem", color: "var(--stone)", marginTop: "1rem" }}>
                * Gear rental is charged per person, per day of the full trek. Exact amounts confirmed in your booking confirmation email.
              </p>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button className="btn btn-dark" onClick={() => nextStep(2)} type="button">← Back</button>
              <button className="btn btn-primary btn-lg" onClick={() => nextStep(4)} type="button">Your Details →</button>
            </div>
          </div>

          {/* ── STEP 4: Personal Info ── */}
          <div className={`booking-step${currentStep === 4 ? " active" : ""}`} id="step4">
            <div className="step-card">
              <h2 className="step-title">Your Details</h2>
              <p className="step-subtitle">We need your information to process the booking and send your confirmation emails.</p>

              <div className="grid-2" style={{ gap: "1rem" }}>
                <div className="form-group">
                  <label className="form-label">First Name *</label>
                  <input type="text" className="form-input" id="firstName" placeholder="Alex" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="form-group">
                  <label className="form-label">Last Name *</label>
                  <input type="text" className="form-input" id="lastName" placeholder="Johnson" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input type="email" className="form-input" id="email" placeholder="alex@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                <div style={{ fontSize: "0.78rem", color: "var(--stone)", marginTop: "0.35rem" }}>Booking confirmation and trek info will be sent here</div>
              </div>
              <div className="form-group">
                <label className="form-label">Phone / WhatsApp *</label>
                <input type="tel" className="form-input" id="phone" placeholder="+1 555 000 0000" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">Nationality / Passport Country *</label>
                <input type="text" className="form-input" id="nationality" placeholder="United States" value={nationality} onChange={(e) => setNationality(e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">Trekking Experience Level *</label>
                <select className="form-select" id="experience" value={experience} onChange={(e) => setExperience(e.target.value)}>
                  <option value="">-- Please select --</option>
                  <option>No prior trekking experience</option>
                  <option>Light hiking (day hikes)</option>
                  <option>Multi-day trekking (below 4,000m)</option>
                  <option>High altitude trekking (above 4,000m)</option>
                  <option>Technical mountaineering experience</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Medical Conditions or Allergies (Optional)</label>
                <textarea className="form-textarea" id="medical" placeholder="Any conditions your guide should know about: asthma, heart conditions, medications, allergies, etc." rows={3} value={medical} onChange={(e) => setMedical(e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">Travel Insurance Provider &amp; Policy # (can be added later)</label>
                <input type="text" className="form-input" id="insurance" placeholder="World Nomads — Policy #WN-123456" value={insurance} onChange={(e) => setInsurance(e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">Special Requests (Optional)</label>
                <textarea className="form-textarea" id="specialReqs" placeholder="Dietary requirements, birthday celebrations, photography focus, custom dates, etc." rows={3} value={specialReqs} onChange={(e) => setSpecialReqs(e.target.value)} />
              </div>

              <div className="form-group">
                <label style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", cursor: "pointer", fontSize: "0.87rem" }}>
                  <input
                    type="checkbox"
                    id="termsCheck"
                    style={{ width: "18px", height: "18px", marginTop: "2px", flexShrink: 0 }}
                    checked={termsChecked}
                    onChange={(e) => setTermsChecked(e.target.checked)}
                  />
                  <span>
                    I have read the{" "}
                    <Link href="/prepare" style={{ color: "var(--amber)" }}>preparation guide</Link>{" "}
                    and understand the physical demands and altitude risks of this trek. I confirm I have or will obtain appropriate travel insurance with helicopter evacuation coverage.
                  </span>
                </label>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button className="btn btn-dark" onClick={() => nextStep(3)} type="button">← Back</button>
              <button className="btn btn-primary btn-lg" onClick={validateStep4} type="button">Continue to Payment →</button>
            </div>
          </div>

          {/* ── STEP 5: Payment ── */}
          <div className={`booking-step${currentStep === 5 ? " active" : ""}`} id="step5">
            <div className="step-card">
              <h2 className="step-title">Secure Your Spot</h2>
              <p className="step-subtitle">
                A 30% deposit is required to confirm your booking. The remaining balance is due 60 days before your departure date.
              </p>

              <div className="deposit-info">
                <div className="deposit-info-title">💳 Deposit Payment</div>
                <div className="deposit-info-text">
                  Your deposit of <strong id="depositAmountDisplay">{depositLabel}</strong> secures your group&apos;s place.
                  Full amount: <span id="totalAmountDisplay">{totalDisplayLabel}</span>. Balance of{" "}
                  <span id="balanceAmountDisplay">{balanceLabel}</span> due 60 days before departure. Cancellation: full refund 90+ days before, 50% refund 60–89 days.
                </div>
              </div>

              <div className="payment-methods">
                <div className={`pay-method${payMethod === "stripe" ? " selected" : ""}`} onClick={() => setPayMethod("stripe")}>
                  <div className="pay-method-icon">💳</div>
                  <div className="pay-method-name">Credit / Debit Card</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--stone)" }}>Visa, Mastercard, Amex</div>
                </div>
                <div className={`pay-method${payMethod === "square" ? " selected" : ""}`} onClick={() => setPayMethod("square")}>
                  <div className="pay-method-icon">⬛</div>
                  <div className="pay-method-name">Square</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--stone)" }}>All major cards</div>
                </div>
              </div>

              {/* Stripe Payment Form */}
              <div id="stripeForm">
                <div className="form-group">
                  <label className="form-label">Name on Card *</label>
                  <input type="text" className="stripe-field" placeholder="Alex Johnson" id="cardName" value={cardName} onChange={(e) => setCardName(e.target.value)} />
                </div>
                <div className="form-group">
                  <label className="form-label">Card Number *</label>
                  {/* In production, replace this with Stripe Elements */}
                  <input type="text" className="stripe-field" placeholder="4242 4242 4242 4242" id="cardNumber" maxLength={19} value={cardNumber} onChange={(e) => formatCard(e.target.value)} />
                </div>
                <div className="card-row">
                  <div className="form-group">
                    <label className="form-label">Expiry Date *</label>
                    <input type="text" className="stripe-field" placeholder="MM / YY" id="cardExpiry" maxLength={7} value={cardExpiry} onChange={(e) => formatExpiry(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">CVC *</label>
                    <input type="text" className="stripe-field" placeholder="•••" id="cardCVC" maxLength={4} value={cardCVC} onChange={(e) => setCardCVC(e.target.value)} />
                  </div>
                </div>
                <div className="info-box info-box-green" style={{ marginBottom: "1.25rem" }}>
                  <div className="info-box-title">🔒 Secure Payment via Stripe</div>
                  Your card details are encrypted and processed securely by Stripe. Peak Pursuit never sees your card number.
                </div>

                <div id="stripeElementsContainer" style={{ background: "#F8FAFC", border: "2px solid var(--border-dark)", borderRadius: "var(--radius-sm)", padding: "1rem", marginBottom: "1rem", color: "var(--stone)", fontSize: "0.85rem", textAlign: "center" }}>
                  🔌 Stripe payment element will load here in production.<br />
                  <small>Add your Stripe publishable key in the admin portal to activate live payments.</small>
                </div>

                <button
                  className="btn btn-primary"
                  style={{ width: "100%", justifyContent: "center", fontSize: "1.05rem", padding: "1.1rem" }}
                  onClick={processPayment}
                  id="payBtn"
                  type="button"
                  disabled={processing}
                >
                  {processing ? (
                    "⏳ Processing..."
                  ) : (
                    <>🔒 Pay Deposit — <span id="payDepositBtn">{deposit ? fmtMoney(deposit) : "Contact Us"}</span></>
                  )}
                </button>
                <div className="stripe-powered">
                  <span className="lock-icon">🔒</span>
                  Secured by Stripe · 256-bit SSL encryption · PCI DSS compliant
                </div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <button className="btn btn-dark" onClick={() => nextStep(4)} type="button">← Back</button>
            </div>
          </div>

          {/* ── SUCCESS ── */}
          <div className={`booking-step${currentStep === 6 ? " active" : ""}`} id="stepSuccess">
            <div className="success-screen">
              <div className="success-icon">🏔️</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: "var(--navy)", marginBottom: "0.75rem" }}>Booking Confirmed!</h2>
              <p style={{ color: "var(--stone)", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: "480px", margin: "0 auto 2rem" }}>
                Namaste! Your trek is confirmed. Check your email for your booking summary, preparation guide, and next steps. Your guide will be in touch within 24 hours via WhatsApp.
              </p>
              <div className="info-box info-box-green" style={{ textAlign: "left", maxWidth: "480px", margin: "0 auto 2rem" }}>
                <div className="info-box-title">📧 What Happens Next</div>
                1. Booking confirmation email sent immediately<br />
                2. Guide assignment email within 48 hours (with guide photo &amp; bio)<br />
                3. Pre-trek preparation email 2 weeks before departure<br />
                4. Final logistics email 1 week before departure
              </div>
              <Link href="/prepare" className="btn btn-primary btn-lg" style={{ marginRight: "1rem" }}>Read Preparation Guide</Link>
              <Link href="/" className="btn btn-dark btn-lg">Back to Home</Link>
            </div>
          </div>
        </div>

        {/* Booking Summary Sidebar */}
        <div className="booking-sidebar">
          <div className="summary-card">
            <img src={trek.img} alt="Trek" className="summary-img" id="summaryImg" />
            <div className="summary-body">
              <div className="summary-trek-name" id="summaryTrekName">{trek.name}</div>
              <div className="summary-row">
                <span className="summary-label">Difficulty</span>
                <span className="summary-val" id="summaryDiff">{trek.diff}</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Duration</span>
                <span className="summary-val" id="summaryDays">{trek.days}</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Max Altitude</span>
                <span className="summary-val" id="summaryAlt">{trek.alt}</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Start Date</span>
                <span className="summary-val" id="summaryDate">{summaryDateLabel}</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Group Size</span>
                <span className="summary-val" id="summarySize">{summarySizeLabel}</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Gear Rental</span>
                <span className="summary-val" id="summaryGear">{summaryGearLabel}</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Price per person</span>
                <span className="summary-val" id="summaryPPP">{pppLabel}</span>
              </div>
              <div className="summary-total-row">
                <span className="summary-total-label">Total</span>
                <span className="summary-total-val" id="summaryTotal">{totalLabel}</span>
              </div>
              <div className="summary-deposit-row">
                <span className="summary-deposit-label">Deposit due now (30%)</span>
                <span className="summary-deposit-val" id="summaryDeposit">{depositLabel}</span>
              </div>
              <div className="security-badges">
                <div className="security-badge"><span>🔒</span> Secure Stripe</div>
                <div className="security-badge"><span>↩️</span> Free cancellation 90d</div>
                <div className="security-badge"><span>✓</span> Permit included</div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "1rem", background: "var(--white)", borderRadius: "var(--radius)", padding: "1.25rem", boxShadow: "var(--shadow-sm)", border: "1px solid var(--border-dark)" }}>
            <div style={{ fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.75rem", color: "var(--navy)" }}>Need Help?</div>
            <a href="https://wa.me/9779841000000" style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.87rem", color: "var(--stone-dark)", padding: "0.5rem 0", borderBottom: "1px solid var(--border-dark)" }}>
              <span>💬</span> WhatsApp our guide
            </a>
            <a href="mailto:namaste@peakpursuit.com" style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.87rem", color: "var(--stone-dark)", padding: "0.5rem 0" }}>
              <span>📧</span> namaste@peakpursuit.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
