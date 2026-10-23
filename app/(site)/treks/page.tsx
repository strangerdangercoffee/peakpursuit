"use client";

import "./treks.css";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

type FilterType = "all" | "green" | "blue" | "black" | "double" | "cultural" | "peak";

interface FilterDef {
  type: FilterType;
  label: string;
}

const FILTERS: FilterDef[] = [
  { type: "all", label: "All Treks" },
  { type: "green", label: "● Green Circle" },
  { type: "blue", label: "■ Blue Square" },
  { type: "black", label: "◆ Black Diamond" },
  { type: "double", label: "◆◆ Double Black" },
  { type: "cultural", label: "Cultural" },
  { type: "peak", label: "Peak Climbing" },
];

interface TrekSpec {
  val: string;
  key: string;
}

interface TrekCardData {
  id: string;
  diff: string; // data-diff
  tags: string; // data-tags
  img: string;
  alt: string;
  badge: React.ReactNode;
  price: string;
  season: string;
  title: string;
  elevation: string;
  tagline: string;
  specs: [TrekSpec, TrekSpec, TrekSpec];
  highlights: string[];
  // actions: by default Full Details (opens modal) + Book Now.
  // The custom trek overrides with a Contact Us mailto + Get a Quote.
  custom?: boolean;
}

const TREK_CARDS: TrekCardData[] = [
  {
    id: "namche",
    diff: "green",
    tags: "cultural green",
    img: "/images/trek_namche.jpg",
    alt: "Namche Bazaar Cultural Trek",
    badge: (
      <span className="difficulty-badge diff-green">
        <span className="diff-icon">●</span> Green Circle
      </span>
    ),
    price: "From $690",
    season: "Year-Round",
    title: "Namche Bazaar Cultural Walk",
    elevation: "3,440m",
    tagline:
      "The gateway to Everest — explore the bustling Sherpa capital, visit the Everest Museum, hike to Khumjung, and acclimatize in comfort.",
    specs: [
      { val: "5", key: "Days" },
      { val: "3,440m", key: "Max Alt." },
      { val: "Lodge", key: "Accommodation" },
    ],
    highlights: [
      "Sherpa culture & Namche Saturday market",
      "Everest view from Syangboche ridge",
      "Monastery visits at Tengboche & Khumjung",
    ],
  },
  {
    id: "amadablam",
    diff: "blue",
    tags: "blue",
    img: "/images/trek_amadablam.jpg",
    alt: "Ama Dablam Base Camp",
    badge: (
      <span className="difficulty-badge diff-blue">
        <span className="diff-icon">■</span> Blue Square
      </span>
    ),
    price: "From $1,290",
    season: "Oct–Nov · Mar–May",
    title: "Ama Dablam Base Camp",
    elevation: "4,600m",
    tagline:
      'Trek to the foot of one of the world\'s most photogenic mountains — the "matterhorn of the Himalayas." A classic route through Sherpa villages.',
    specs: [
      { val: "10", key: "Days" },
      { val: "4,600m", key: "Max Alt." },
      { val: "Teahouse", key: "Accommodation" },
    ],
    highlights: [
      "Close-up views of Ama Dablam's dramatic south face",
      "Tengboche Monastery — highest monastery in Nepal",
      "Chhukung Valley sunrise over Lhotse and Nuptse",
    ],
  },
  {
    id: "gokyo",
    diff: "blue",
    tags: "blue",
    img: "/images/trek_gokyo.jpg",
    alt: "Gokyo Lakes Trek",
    badge: (
      <span className="difficulty-badge diff-blue">
        <span className="diff-icon">■</span> Blue Square
      </span>
    ),
    price: "From $1,490",
    season: "Oct–Nov · Mar–May",
    title: "Gokyo Lakes Trek",
    elevation: "4,790m",
    tagline:
      "A serene alternative to the EBC trail — turquoise sacred lakes at altitude, a glacier hike, and the iconic summit of Gokyo Ri with panoramic Everest views.",
    specs: [
      { val: "13", key: "Days" },
      { val: "4,790m", key: "Max Alt." },
      { val: "Teahouse", key: "Accommodation" },
    ],
    highlights: [
      "Six sacred Gokyo Lakes & Ngozumpa Glacier",
      "Summit Gokyo Ri (5,357m) for 360° Everest panorama",
      "Less crowded, more wildlife than EBC route",
    ],
  },
  {
    id: "ebc",
    diff: "black",
    tags: "black",
    img: "/images/trek_ebc.jpg",
    alt: "Everest Base Camp Trek",
    badge: (
      <span className="difficulty-badge diff-black">
        <span className="diff-icon">◆</span> Black Diamond
      </span>
    ),
    price: "From $1,890",
    season: "Oct–Nov · Mar–May",
    title: "Everest Base Camp",
    elevation: "5,364m",
    tagline:
      "The world's most legendary trek. Stand at the foot of the world's highest mountain, feel the thin air at 5,364m, and look up at the Khumbu Icefall.",
    specs: [
      { val: "14", key: "Days" },
      { val: "5,364m", key: "Max Alt." },
      { val: "Teahouse", key: "Accommodation" },
    ],
    highlights: [
      "Reach legendary Everest Base Camp at 5,364m",
      "Summit Kalapathar (5,545m) for best Everest sunrise",
      "Fly into Lukla — one of the world's most dramatic airports",
    ],
  },
  {
    id: "kalapathar",
    diff: "black",
    tags: "black",
    img: "/images/kalapathar.jpeg",
    alt: "Kalapathar Summit",
    badge: (
      <span className="difficulty-badge diff-black">
        <span className="diff-icon">◆</span> Black Diamond
      </span>
    ),
    price: "From $1,790",
    season: "Full Moon Specials",
    title: "Kalapathar Sunrise Summit",
    elevation: "5,545m",
    tagline:
      "Hike before dawn to summit Kalapathar (Black Rock) at 5,545m for the world's most dramatic sunrise view directly over Everest. Bucket-list moment.",
    specs: [
      { val: "13", key: "Days" },
      { val: "5,545m", key: "Max Alt." },
      { val: "Teahouse", key: "Accommodation" },
    ],
    highlights: [
      "Best unobstructed view of Everest summit from ground level",
      "Also visits Everest Base Camp on the same route",
      "Full moon night hike option (seasonal)",
    ],
  },
  {
    id: "renjola",
    diff: "black",
    tags: "black",
    img: "/images/trek_renjola.jpg",
    alt: "Renjo La Pass Trek",
    badge: (
      <span className="difficulty-badge diff-black">
        <span className="diff-icon">◆</span> Black Diamond
      </span>
    ),
    price: "From $1,690",
    season: "Oct–Nov · Mar–May",
    title: "Renjo La Pass & Gokyo",
    elevation: "5,360m",
    tagline:
      "Cross the dramatic Renjo La pass at 5,360m with sweeping views of the Everest massif, then descend to the sacred Gokyo Lakes.",
    specs: [
      { val: "15", key: "Days" },
      { val: "5,360m", key: "Max Alt." },
      { val: "Teahouse", key: "Accommodation" },
    ],
    highlights: [
      "Renjo La summit — stunning views of Everest & Cho Oyu",
      "Gokyo Lakes and Gokyo Ri summit",
      "Less-traveled route with fewer trekkers",
    ],
  },
  {
    id: "jiri",
    diff: "black",
    tags: "black",
    img: "/images/hiking_down_at_sunset.jpeg",
    alt: "Jiri to EBC Classic Route",
    badge: (
      <span className="difficulty-badge diff-black">
        <span className="diff-icon">◆</span> Black Diamond
      </span>
    ),
    price: "From $2,290",
    season: "Oct–Nov · Mar–May",
    title: "Jiri to EBC — Classic Route",
    elevation: "5,364m",
    tagline:
      "Walk the same path Hillary & Tenzing walked. Start from Jiri as the original expeditions did — a 3-week journey through remote Nepal before the crowds begin.",
    specs: [
      { val: "22", key: "Days" },
      { val: "5,364m", key: "Max Alt." },
      { val: "Teahouse", key: "Accommodation" },
    ],
    highlights: [
      "The original 1953 expedition approach route",
      "Remote villages, terraced farms, cultural immersion",
      "Superb acclimatization — 7+ days before Khumbu entry",
    ],
  },
  {
    id: "chhukung",
    diff: "black",
    tags: "black",
    img: "/images/trek_chhukungri.jpg",
    alt: "Chhukung Ri",
    badge: (
      <span className="difficulty-badge diff-black">
        <span className="diff-icon">◆</span> Black Diamond
      </span>
    ),
    price: "From $1,990",
    season: "Oct–Nov · Mar–May",
    title: "Chhukung Ri Summit",
    elevation: "5,550m",
    tagline:
      "Summit Chhukung Ri for one of the highest non-technical viewpoints in the Khumbu — Ama Dablam, Lhotse, Makalu and Island Peak all in one panorama.",
    specs: [
      { val: "14", key: "Days" },
      { val: "5,550m", key: "Max Alt." },
      { val: "Teahouse", key: "Accommodation" },
    ],
    highlights: [
      "360° views of four 8,000m+ peaks",
      "Imja Lake glacier hike (climate-change landmark)",
      "Option to combine with EBC route",
    ],
  },
  {
    id: "3passes",
    diff: "double",
    tags: "double",
    img: "/images/trek_3passes.jpg",
    alt: "Three High Passes Trek",
    badge: (
      <span className="difficulty-badge diff-double-black">
        <span className="diff-icon">◆◆</span> Double Black
      </span>
    ),
    price: "From $2,490",
    season: "Oct · Apr–May",
    title: "Three High Passes",
    elevation: "5,535m",
    tagline:
      "The ultimate Khumbu circuit. Cross Kongma La (5,535m), Cho La (5,420m), and Renjo La (5,360m) — includes EBC and Gokyo in one 20-day epic.",
    specs: [
      { val: "20", key: "Days" },
      { val: "5,535m", key: "Max Alt." },
      { val: "Mixed", key: "Accommodation" },
    ],
    highlights: [
      "Three passes: Kongma La, Cho La, Renjo La",
      "Includes Everest Base Camp & Gokyo Lakes",
      "The most comprehensive Khumbu experience possible",
    ],
  },
  {
    id: "chola",
    diff: "double",
    tags: "double",
    img: "/images/trek_chola.jpg",
    alt: "Cho La Pass Trek",
    badge: (
      <span className="difficulty-badge diff-double-black">
        <span className="diff-icon">◆◆</span> Double Black
      </span>
    ),
    price: "From $2,090",
    season: "Oct · May",
    title: "Cho La Pass & EBC",
    elevation: "5,420m",
    tagline:
      "Cross the Cho La glaciated pass at 5,420m connecting the EBC route to the Gokyo valley — crampons required, spectacular high-mountain terrain.",
    specs: [
      { val: "16", key: "Days" },
      { val: "5,420m", key: "Max Alt." },
      { val: "Teahouse", key: "Accommodation" },
    ],
    highlights: [
      "Glacier crossing with crampons — an alpine experience",
      "Combines EBC & Gokyo Lakes in one route",
      "Spectacular ice formations on the pass",
    ],
  },
  {
    id: "lobuche",
    diff: "double",
    tags: "double peak",
    img: "/images/trek_lobuche.jpg",
    alt: "Lobuche Peak Climbing",
    badge: (
      <span className="difficulty-badge diff-double-black">
        <span className="diff-icon">◆◆</span> Double Black
      </span>
    ),
    price: "From $2,890",
    season: "Peak Climbing",
    title: "Lobuche Peak Climbing",
    elevation: "6,119m",
    tagline:
      'Also known as "La Bouche" — Lobuche East (6,119m) is a classic trekking peak near EBC. Fixed ropes, basic technical climbing, and a summit above the 6,000m mark.',
    specs: [
      { val: "18", key: "Days" },
      { val: "6,119m", key: "Summit" },
      { val: "Camp+Lodge", key: "Accommodation" },
    ],
    highlights: [
      "Summit above 6,000m with full EBC approach",
      "Crampon, harness, ice axe experience required",
      "High camp night above 5,600m",
    ],
  },
  {
    id: "island",
    diff: "double",
    tags: "double peak",
    img: "/images/trek_islandpeak.jpg",
    alt: "Island Peak Climbing",
    badge: (
      <span className="difficulty-badge diff-double-black">
        <span className="diff-icon">◆◆</span> Double Black
      </span>
    ),
    price: "From $3,190",
    season: "Peak Climbing",
    title: "Island Peak (Imja Tse)",
    elevation: "6,189m",
    tagline:
      'Nepal\'s most popular trekking peak — so-named because it appears as an "island" above the Chhukung glacier. Technical summit with ropes, crampons, and ice axe.',
    specs: [
      { val: "20", key: "Days" },
      { val: "6,189m", key: "Summit" },
      { val: "Camp+Lodge", key: "Accommodation" },
    ],
    highlights: [
      "Summit ridge with ropes — genuine mountaineering",
      "Sunrise from the summit over Lhotse and Makalu",
      "Option to add EBC on the approach route",
    ],
  },
  {
    id: "mera",
    diff: "double",
    tags: "double peak",
    img: "/images/trek_mera.jpg",
    alt: "Mera Peak Climbing",
    badge: (
      <span className="difficulty-badge diff-double-black">
        <span className="diff-icon">◆◆</span> Double Black
      </span>
    ),
    price: "From $3,490",
    season: "Peak Climbing",
    title: "Mera Peak",
    elevation: "6,476m",
    tagline:
      "The highest trekking peak in Nepal. From the summit you can see five of the world's six highest mountains — Everest, Kangchenjunga, Cho Oyu, Lhotse, and Makalu.",
    specs: [
      { val: "18", key: "Days" },
      { val: "6,476m", key: "Summit" },
      { val: "Camp+Lodge", key: "Accommodation" },
    ],
    highlights: [
      "5 of world's 6 highest peaks visible from the summit",
      "Nepal's highest trekking peak — a true expedition",
      "Hinku Valley approach through pristine wilderness",
    ],
  },
  {
    id: "custom",
    diff: "all",
    tags: "blue black double green",
    img: "/images/landing.JPG",
    alt: "Custom Bespoke Everest Trek",
    badge: (
      <span
        className="difficulty-badge"
        style={{ background: "linear-gradient(135deg,#1E40AF,#E8722B)", color: "white" }}
      >
        <span className="diff-icon">✦</span> Custom
      </span>
    ),
    price: "Ask for Quote",
    season: "Any Date",
    title: "Bespoke Everest Experience",
    elevation: "Custom",
    tagline:
      "Design your dream Himalayan adventure from scratch. Private guide, custom itinerary, your pace, your objectives — anywhere in the Khumbu.",
    specs: [
      { val: "Flexible", key: "Duration" },
      { val: "Your Goal", key: "Altitude" },
      { val: "Private", key: "Style" },
    ],
    highlights: [
      "Fully private, tailored to your goals and experience",
      "Photography treks, family-friendly routes, solo guidance",
      "Flexible departure dates year-round",
    ],
    custom: true,
  },
];

interface GenericTrekData {
  title: string;
  diff: string;
  img: string;
  days: string;
  alt: string;
  price: string;
  desc: string;
}

// Trek data for generic modal
const TREKS: Record<string, GenericTrekData> = {
  namche: {
    title: "Namche Bazaar Cultural Walk",
    diff: "Green Circle ●",
    img: "/images/yak_shrine.JPG",
    days: "5",
    alt: "3,440m",
    price: "$690",
    desc: "Explore the Sherpa capital and acclimatize in comfort. Visit the Everest Museum, Saturday market, and hike to the famous Everest view.",
  },
  amadablam: {
    title: "Ama Dablam Base Camp",
    diff: "Blue Square ■",
    img: "/images/sunset_3_peaks.jpeg",
    days: "10",
    alt: "4,600m",
    price: "$1,290",
    desc: 'Trek to the base of the "Matterhorn of Nepal." A spectacular approach through Sherpa villages with constant views of this iconic peak.',
  },
  gokyo: {
    title: "Gokyo Lakes Trek",
    diff: "Blue Square ■",
    img: "/images/above_clouds.jpeg",
    days: "13",
    alt: "4,790m",
    price: "$1,490",
    desc: "Six sacred turquoise lakes, a glacier walk, and summit of Gokyo Ri (5,357m) for panoramic Everest views on a quieter route.",
  },
  kalapathar: {
    title: "Kalapathar Sunrise Summit",
    diff: "Black Diamond ◆",
    img: "/images/kalapathar.jpeg",
    days: "13",
    alt: "5,545m",
    price: "$1,790",
    desc: "Pre-dawn summit of Kalapathar (5,545m) — the highest non-technical viewpoint of Everest. Also includes EBC.",
  },
  renjola: {
    title: "Renjo La Pass & Gokyo",
    diff: "Black Diamond ◆",
    img: "/images/sunset_3_peaks.jpeg",
    days: "15",
    alt: "5,360m",
    price: "$1,690",
    desc: "Cross the stunning Renjo La pass at 5,360m for sweeping Everest views, then descend to the Gokyo Lakes.",
  },
  jiri: {
    title: "Jiri to EBC — Classic Route",
    diff: "Black Diamond ◆",
    img: "/images/hiking_down_at_sunset.jpeg",
    days: "22",
    alt: "5,364m",
    price: "$2,290",
    desc: "The original 1953 expedition route from Jiri. Superb acclimatization, remote villages, and authentic Nepal before the crowds.",
  },
  chhukung: {
    title: "Chhukung Ri Summit",
    diff: "Black Diamond ◆",
    img: "/images/above_clouds.jpeg",
    days: "14",
    alt: "5,550m",
    price: "$1,990",
    desc: "Summit 5,550m Chhukung Ri for a 360° panorama of Ama Dablam, Lhotse, Makalu and Island Peak.",
  },
  "3passes": {
    title: "Three High Passes",
    diff: "Double Black ◆◆",
    img: "/images/hiking_down_at_sunset.jpeg",
    days: "20",
    alt: "5,535m",
    price: "$2,490",
    desc: "The ultimate Khumbu circuit. Cross all three high passes (Kongma La, Cho La, Renjo La) and include EBC and Gokyo Lakes.",
  },
  chola: {
    title: "Cho La Pass & EBC",
    diff: "Double Black ◆◆",
    img: "/images/kalapathar.jpeg",
    days: "16",
    alt: "5,420m",
    price: "$2,090",
    desc: "Cross the glaciated Cho La pass at 5,420m with crampons — connecting EBC to Gokyo on a spectacular route.",
  },
  lobuche: {
    title: "Lobuche Peak (La Bouche)",
    diff: "Double Black ◆◆",
    img: "/images/sunset_everest.jpeg",
    days: "18",
    alt: "6,119m",
    price: "$2,890",
    desc: "Lobuche East (6,119m) — a classic trekking peak beside EBC requiring crampons, harness, and basic technical skills.",
  },
  island: {
    title: "Island Peak (Imja Tse)",
    diff: "Double Black ◆◆",
    img: "/images/hike_3rd_person.jpeg",
    days: "20",
    alt: "6,189m",
    price: "$3,190",
    desc: "Nepal's most popular trekking peak with a technical summit ridge above 6,000m. Sunrise views of Lhotse, Makalu, and Everest.",
  },
  mera: {
    title: "Mera Peak",
    diff: "Double Black ◆◆",
    img: "/images/sunset_3_peaks.jpeg",
    days: "18",
    alt: "6,476m",
    price: "$3,490",
    desc: "Nepal's highest trekking peak. From the summit see 5 of the world's 6 highest mountains in one breathtaking panorama.",
  },
};

export default function TreksPage() {
  return (
    <Suspense fallback={null}>
      <TreksInner />
    </Suspense>
  );
}

function TreksInner() {
  const sp = useSearchParams();
  const deepLinkTrek = sp.get("trek");

  const [filter, setFilter] = useState<FilterType>("all");
  const [genericId, setGenericId] = useState<string | null>(null);
  const [ebcOpen, setEbcOpen] = useState(false);

  const openTrekModal = (id: string) => {
    if (id === "ebc") {
      setEbcOpen(true);
      return;
    }
    if (TREKS[id]) {
      setGenericId(id);
    }
  };

  // Handle URL param (deep-link to a trek). Mirrors the legacy 500ms delay.
  useEffect(() => {
    if (deepLinkTrek) {
      const t = setTimeout(() => openTrekModal(deepLinkTrek), 500);
      return () => clearTimeout(t);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deepLinkTrek]);

  const cardVisible = (card: TrekCardData): boolean => {
    if (filter === "all") return true;
    return card.tags.includes(filter);
  };

  const generic = genericId ? TREKS[genericId] : null;

  return (
    <>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="page-hero-content">
          <div className="eyebrow" style={{ color: "var(--amber-light)", marginBottom: "0.5rem" }}>
            Khumbu Himalaya, Nepal
          </div>
          <h1 className="display-lg" style={{ color: "var(--white)", marginBottom: "0.5rem" }}>
            All Treks
          </h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.05rem" }}>
            14 routes across the Everest region
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
          <div className="filter-bar">
            <span className="filter-label">Filter:</span>
            {FILTERS.map((f) => (
              <button
                key={f.type}
                className={`filter-chip${filter === f.type ? " active" : ""}`}
                onClick={() => setFilter(f.type)}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Trek Grid */}
          <div className="trek-grid" id="trekGrid">
            {TREK_CARDS.map((card) => (
              <div
                key={card.id}
                className="trek-full-card reveal"
                data-diff={card.diff}
                data-tags={card.tags}
                style={{ display: cardVisible(card) ? "flex" : "none" }}
              >
                <div className="trek-img-wrap">
                  <img src={card.img} alt={card.alt} />
                  <div className="trek-img-overlay" />
                  <div className="trek-img-badges">
                    {card.badge}
                    <span className="trek-price-badge">{card.price}</span>
                  </div>
                  <div style={{ position: "absolute", bottom: "1rem", left: "1rem", zIndex: 1 }}>
                    <span className="trek-season-badge">{card.season}</span>
                  </div>
                </div>
                <div className="trek-body">
                  <div className="trek-title-row">
                    <h3 className="trek-title">{card.title}</h3>
                    <div className="trek-elevation">{card.elevation}</div>
                  </div>
                  <p className="trek-tagline">{card.tagline}</p>
                  <div className="trek-specs">
                    {card.specs.map((s, i) => (
                      <div className="trek-spec" key={i}>
                        <div className="trek-spec-val">{s.val}</div>
                        <div className="trek-spec-key">{s.key}</div>
                      </div>
                    ))}
                  </div>
                  <div className="trek-highlights">
                    {card.highlights.map((h, i) => (
                      <div className="trek-highlight" key={i}>
                        {h}
                      </div>
                    ))}
                  </div>
                  <div className="trek-actions">
                    {card.custom ? (
                      <>
                        <a
                          href="mailto:namaste@peakpursuit.com"
                          className="btn btn-dark btn-sm"
                          style={{ flex: 1, justifyContent: "center" }}
                        >
                          Contact Us
                        </a>
                        <Link
                          href={`/book?trek=${card.id}`}
                          className="btn btn-primary btn-sm"
                          style={{ flex: 1, justifyContent: "center" }}
                        >
                          Get a Quote
                        </Link>
                      </>
                    ) : (
                      <>
                        <button
                          className="btn btn-dark btn-sm"
                          style={{ flex: 1, justifyContent: "center" }}
                          onClick={() => openTrekModal(card.id)}
                        >
                          Full Details
                        </button>
                        <Link
                          href={`/book?trek=${card.id}`}
                          className="btn btn-primary btn-sm"
                          style={{ flex: 1, justifyContent: "center" }}
                        >
                          Book Now
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* /trek-grid */}
        </div>
      </section>

      {/* EBC Detail Modal */}
      <div
        className={`modal-overlay${ebcOpen ? " open" : ""}`}
        id="modal-ebc"
        onClick={(e) => {
          if (e.target === e.currentTarget) setEbcOpen(false);
        }}
      >
        <div className="modal">
          <div className="modal-header">
            <div>
              <div className="eyebrow" style={{ marginBottom: "0.25rem" }}>
                Black Diamond ◆
              </div>
              <h2 style={{ fontSize: "1.6rem", color: "var(--navy)" }}>Everest Base Camp Trek</h2>
            </div>
            <button className="modal-close" onClick={() => setEbcOpen(false)}>
              ✕
            </button>
          </div>
          <img src="/images/hike_3rd_person.jpeg" alt="EBC" className="trek-modal-img" />
          <div className="trek-modal-body">
            <div className="trek-detail-specs">
              <div className="trek-detail-spec">
                <div className="trek-detail-spec-val">14 days</div>
                <div className="trek-detail-spec-key">Duration</div>
              </div>
              <div className="trek-detail-spec">
                <div className="trek-detail-spec-val">5,364m</div>
                <div className="trek-detail-spec-key">Max Altitude</div>
              </div>
              <div className="trek-detail-spec">
                <div className="trek-detail-spec-val">From $1,890</div>
                <div className="trek-detail-spec-key">Per Person</div>
              </div>
              <div className="trek-detail-spec">
                <div className="trek-detail-spec-val">Oct–Nov / Mar–May</div>
                <div className="trek-detail-spec-key">Best Season</div>
              </div>
            </div>
            <div className="section-mini-title">Sample Itinerary</div>
            <div className="itinerary-day">
              <div className="itinerary-day-num">1</div>
              <div>
                <div className="itinerary-day-title">
                  Fly Kathmandu → Lukla (2,860m), Trek to Phakding
                </div>
                <div className="itinerary-day-detail">
                  20-minute scenic flight to Lukla. Trek alongside the Dudh Kosi river through pine
                  forests to Phakding.
                </div>
                <div className="itinerary-day-meta">
                  <span className="itinerary-meta-chip">3–4 hrs</span>
                  <span className="itinerary-meta-chip">2,652m sleep</span>
                </div>
              </div>
            </div>
            <div className="itinerary-day">
              <div className="itinerary-day-num">2</div>
              <div>
                <div className="itinerary-day-title">Phakding → Namche Bazaar (3,440m)</div>
                <div className="itinerary-day-detail">
                  Cross suspension bridges over roaring rivers. Steep 600m climb to Namche — the
                  Sherpa capital with your first views of Everest.
                </div>
                <div className="itinerary-day-meta">
                  <span className="itinerary-meta-chip">5–6 hrs</span>
                  <span className="itinerary-meta-chip">3,440m sleep</span>
                </div>
              </div>
            </div>
            <div className="itinerary-day">
              <div className="itinerary-day-num">3–4</div>
              <div>
                <div className="itinerary-day-title">Namche Acclimatization (2 nights)</div>
                <div className="itinerary-day-detail">
                  Hike to Everest View Hotel (3,880m) for incredible panorama. Visit the Sherpa
                  Museum and Saturday market. Acclimatize at altitude.
                </div>
                <div className="itinerary-day-meta">
                  <span className="itinerary-meta-chip">Rest day</span>
                  <span className="itinerary-meta-chip">3,440m sleep</span>
                </div>
              </div>
            </div>
            <div className="itinerary-day">
              <div className="itinerary-day-num">5</div>
              <div>
                <div className="itinerary-day-title">Namche → Tengboche Monastery (3,867m)</div>
                <div className="itinerary-day-detail">
                  Trek through rhododendron forests past Khumjung to Tengboche — home to the highest
                  monastery in the world with views of Ama Dablam.
                </div>
                <div className="itinerary-day-meta">
                  <span className="itinerary-meta-chip">5–6 hrs</span>
                  <span className="itinerary-meta-chip">3,867m sleep</span>
                </div>
              </div>
            </div>
            <div className="itinerary-day">
              <div className="itinerary-day-num">6</div>
              <div>
                <div className="itinerary-day-title">Tengboche → Dingboche (4,410m)</div>
                <div className="itinerary-day-detail">
                  Pass through Pangboche village (highest permanent settlement), stone walls, and yak
                  pastures. Big views of Ama Dablam.
                </div>
                <div className="itinerary-day-meta">
                  <span className="itinerary-meta-chip">5–6 hrs</span>
                  <span className="itinerary-meta-chip">4,410m sleep</span>
                </div>
              </div>
            </div>
            <div className="itinerary-day">
              <div className="itinerary-day-num">7–8</div>
              <div>
                <div className="itinerary-day-title">Dingboche Acclimatization</div>
                <div className="itinerary-day-detail">
                  Critical rest. Day hike to 5,100m for acclimatization. Good night for spotting
                  phosphorescent stars in the crystal-clear air.
                </div>
                <div className="itinerary-day-meta">
                  <span className="itinerary-meta-chip">Acclimatize</span>
                </div>
              </div>
            </div>
            <div className="itinerary-day">
              <div className="itinerary-day-num">9</div>
              <div>
                <div className="itinerary-day-title">Dingboche → Lobuche (4,940m)</div>
                <div className="itinerary-day-detail">
                  Trek above the Khumbu Glacier moraine to Lobuche. Memorial chortens to lost
                  climbers. Thin air begins to bite.
                </div>
                <div className="itinerary-day-meta">
                  <span className="itinerary-meta-chip">4–5 hrs</span>
                  <span className="itinerary-meta-chip">4,940m sleep</span>
                </div>
              </div>
            </div>
            <div className="itinerary-day">
              <div className="itinerary-day-num">10</div>
              <div>
                <div className="itinerary-day-title">
                  Lobuche → Gorak Shep → Everest Base Camp (5,364m)
                </div>
                <div className="itinerary-day-detail">
                  The day you&apos;ve been preparing for. Hike across the moraine to EBC — the
                  legendary yellow and orange tents of the climbing season. Return to Gorak Shep.
                </div>
                <div className="itinerary-day-meta">
                  <span className="itinerary-meta-chip">7–8 hrs total</span>
                  <span className="itinerary-meta-chip">5,140m sleep</span>
                </div>
              </div>
            </div>
            <div className="itinerary-day">
              <div className="itinerary-day-num">11</div>
              <div>
                <div className="itinerary-day-title">Pre-dawn: Summit Kalapathar (5,545m)</div>
                <div className="itinerary-day-detail">
                  Wake at 4am. Headlamps on. Summit Kalapathar at first light for the greatest
                  sunrise view on Earth — Everest blazing gold above the clouds. Descend to Pheriche.
                </div>
                <div className="itinerary-day-meta">
                  <span className="itinerary-meta-chip">Sunrise summit</span>
                  <span className="itinerary-meta-chip">4,288m sleep</span>
                </div>
              </div>
            </div>
            <div className="itinerary-day">
              <div className="itinerary-day-num">12–14</div>
              <div>
                <div className="itinerary-day-title">
                  Descent: Pheriche → Namche → Lukla → Fly to Kathmandu
                </div>
                <div className="itinerary-day-detail">
                  Rapid descent through forests. Celebrations at Namche. Morning flight back to
                  Kathmandu. Celebration dinner!
                </div>
                <div className="itinerary-day-meta">
                  <span className="itinerary-meta-chip">Celebration</span>
                </div>
              </div>
            </div>
            <div style={{ marginTop: "2rem", display: "flex", gap: "0.75rem" }}>
              <Link
                href="/book?trek=ebc"
                className="btn btn-primary"
                style={{ flex: 1, justifyContent: "center" }}
              >
                Book This Trek
              </Link>
              <button
                className="btn btn-outline-amber"
                onClick={() => setEbcOpen(false)}
                style={{ flex: 1, justifyContent: "center" }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Generic modal for other treks */}
      <div
        className={`modal-overlay${generic ? " open" : ""}`}
        id="modal-generic"
        onClick={(e) => {
          if (e.target === e.currentTarget) setGenericId(null);
        }}
      >
        <div className="modal">
          <div className="modal-header">
            <div>
              <div className="eyebrow" id="modal-generic-diff" style={{ marginBottom: "0.25rem" }}>
                {generic?.diff}
              </div>
              <h2 id="modal-generic-title" style={{ fontSize: "1.6rem", color: "var(--navy)" }}>
                {generic?.title}
              </h2>
            </div>
            <button className="modal-close" onClick={() => setGenericId(null)}>
              ✕
            </button>
          </div>
          {generic && (
            <>
              <img
                id="modal-generic-img"
                src={generic.img}
                alt={generic.title}
                className="trek-modal-img"
              />
              <div className="trek-modal-body" id="modal-generic-body">
                <div
                  className="trek-detail-specs"
                  style={{ gridTemplateColumns: "repeat(3,1fr)" }}
                >
                  <div className="trek-detail-spec">
                    <div className="trek-detail-spec-val">{generic.days} days</div>
                    <div className="trek-detail-spec-key">Duration</div>
                  </div>
                  <div className="trek-detail-spec">
                    <div className="trek-detail-spec-val">{generic.alt}</div>
                    <div className="trek-detail-spec-key">Max Altitude</div>
                  </div>
                  <div className="trek-detail-spec">
                    <div className="trek-detail-spec-val">From {generic.price}</div>
                    <div className="trek-detail-spec-key">Per Person</div>
                  </div>
                </div>
                <p style={{ color: "var(--stone)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  {generic.desc}
                </p>
                <div className="info-box info-box-amber" style={{ marginBottom: "1.5rem" }}>
                  <div className="info-box-title">Best Seasons</div>
                  October–November (autumn clear skies) and March–May (spring rhododendrons).
                  Contact us for any-season options.
                </div>
                <div className="info-box" style={{ marginBottom: "1.5rem" }}>
                  <div className="info-box-title">What&apos;s Included</div>
                  Experienced certified guide · Porter service · All permits (TIMS + Sagarmatha NP) ·
                  Teahouse/camp accommodation · Airport transfers · Farewell dinner in Kathmandu
                </div>
                <div className="info-box info-box-red" style={{ marginBottom: "1.5rem" }}>
                  <div className="info-box-title">Not Included</div>
                  International flights · Nepal visa · Travel insurance (mandatory) · Personal gear ·
                  Alcoholic beverages · Tips
                </div>
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  <Link
                    href={`/book?trek=${genericId}`}
                    className="btn btn-primary"
                    style={{ flex: 1, justifyContent: "center" }}
                  >
                    Book This Trek
                  </Link>
                  <Link
                    href="/prepare"
                    className="btn btn-outline-amber"
                    style={{ flex: 1, justifyContent: "center" }}
                  >
                    Read Prep Guide
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
