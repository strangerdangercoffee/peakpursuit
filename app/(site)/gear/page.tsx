"use client";

import "./gear.css";
import Link from "next/link";
import { useMemo, useState } from "react";

type GearSpec = { key: string; val: string };

type GearItem = {
  icon: string;
  name: string;
  desc: string;
  specs: GearSpec[];
  price: string;
  priceLabel: string;
  /** value passed to the cart, mirroring addToCart(this, cartName, price) */
  cartName: string;
};

type GearCategory = {
  id: string;
  category: string;
  icon: string;
  title: string;
  count: string;
  items: GearItem[];
};

type FilterKey = "all" | "clothing" | "footwear" | "pack" | "technical" | "accessories";

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All Gear" },
  { key: "clothing", label: "Clothing" },
  { key: "footwear", label: "Footwear" },
  { key: "pack", label: "Packs & Sleep" },
  { key: "technical", label: "Technical" },
  { key: "accessories", label: "Accessories" },
];

const CLOTHING: GearItem[] = [
  {
    icon: "🧥",
    name: "Expedition Down Jacket",
    desc: "800-fill-power down jacket rated to -20°C. Essential above 4,000m. Packs small. Brands: The North Face, Arc'teryx, Mountain Hardwear.",
    specs: [
      { key: "Temperature", val: "-20°C" },
      { key: "Fill Power", val: "800-fill" },
      { key: "Sizes", val: "XS–3XL" },
    ],
    price: "$3",
    priceLabel: "per person",
    cartName: "Down Jacket",
  },
  {
    icon: "🌧️",
    name: "Waterproof Shell Jacket",
    desc: "Gore-Tex or equivalent 3-layer waterproof breathable shell. Essential for wind and rain. Packable design.",
    specs: [
      { key: "Material", val: "Gore-Tex / 3L" },
      { key: "Water Column", val: "20,000mm" },
      { key: "Sizes", val: "S–XXL" },
    ],
    price: "$2.50",
    priceLabel: "per person",
    cartName: "Shell Jacket",
  },
  {
    icon: "🧤",
    name: "Expedition Gloves (Set)",
    desc: "Outer waterproof shell + inner fleece liner system. Keeps hands warm and dexterous for trekking poles and camera use.",
    specs: [
      { key: "System", val: "3-layer shell + liner" },
      { key: "Rating", val: "-15°C" },
    ],
    price: "$1.50",
    priceLabel: "per person",
    cartName: "Expedition Gloves",
  },
  {
    icon: "🎽",
    name: "Fleece Mid-Layer",
    desc: "Polartec 200-weight fleece for warmth-to-weight ratio. Ideal mid-layer between base layer and down jacket.",
    specs: [
      { key: "Material", val: "Polartec 200" },
      { key: "Sizes", val: "XS–XXL" },
    ],
    price: "$2",
    priceLabel: "per person",
    cartName: "Fleece Mid-Layer",
  },
];

const FOOTWEAR: GearItem[] = [
  {
    icon: "🥾",
    name: "Waterproof Trekking Boots",
    desc: "Insulated waterproof mid-high trekking boots. Compatible with standard crampons. Broken in and ready to wear. Brands: Salomon, Scarpa, La Sportiva.",
    specs: [
      { key: "Sizes", val: "EU 35–47" },
      { key: "Insulation", val: "200g Thinsulate" },
      { key: "Crampon Compatible", val: "Yes" },
    ],
    price: "$4",
    priceLabel: "per person",
    cartName: "Trekking Boots",
  },
  {
    icon: "🏔️",
    name: "Double Mountaineering Boots",
    desc: "Required for peak climbing (6,000m+). Plastic outer shell with removable insulating inner boot. Rated to -40°C. Crampon-ready step-in rand.",
    specs: [
      { key: "Rating", val: "-40°C" },
      { key: "For", val: "6,000m+ climbing" },
      { key: "Crampon", val: "Step-in compatible" },
    ],
    price: "$6",
    priceLabel: "per person",
    cartName: "Double Boots",
  },
  {
    icon: "🧦",
    name: "Waterproof Gaiters (High)",
    desc: "High waterproof gaiters for snow and wet terrain. Attaches to crampon bail ring. Essential for pass crossings in spring/winter.",
    specs: [
      { key: "Height", val: "40cm (high)" },
      { key: "Material", val: "Cordura / Neoprene" },
    ],
    price: "$1.50",
    priceLabel: "per person",
    cartName: "High Gaiters",
  },
];

const PACK: GearItem[] = [
  {
    icon: "🛌",
    name: "Sleeping Bag (-15°C)",
    desc: "Down or synthetic sleeping bag rated to -15°C comfort. Sufficient for teahouse cold nights above 5,000m. Comes with stuff sack.",
    specs: [
      { key: "Comfort Rating", val: "-15°C" },
      { key: "Fill", val: "Down / Synthetic" },
    ],
    price: "$2.50",
    priceLabel: "per person",
    cartName: "Sleeping Bag (-15°C)",
  },
  {
    icon: "❄️",
    name: "Sleeping Bag (-25°C Expedition)",
    desc: "Required for high camp nights on peak climbs (Island Peak, Mera, Lobuche). Heavy-duty 4-season expedition bag.",
    specs: [
      { key: "Comfort Rating", val: "-25°C" },
      { key: "For", val: "High camp / 6,000m+" },
    ],
    price: "$4",
    priceLabel: "per person",
    cartName: "Expedition Sleeping Bag",
  },
  {
    icon: "🎒",
    name: "Daypack (30L) with Rain Cover",
    desc: "Lightweight 30L trekking daypack with integrated rain cover, hydration bladder sleeve, and trekking pole attachment points.",
    specs: [
      { key: "Volume", val: "30L" },
      { key: "Weight", val: "~900g" },
    ],
    price: "$3",
    priceLabel: "per person",
    cartName: "Daypack 30L",
  },
  {
    icon: "💼",
    name: "Porter Duffel Bag (60L)",
    desc: "Durable duffel for your main kit carried by the porter (max 15kg). Waterproof and lockable.",
    specs: [
      { key: "Volume", val: "60L" },
      { key: "Max Load", val: "15kg" },
    ],
    price: "$1.50",
    priceLabel: "per person",
    cartName: "Porter Duffel",
  },
];

const TECHNICAL: GearItem[] = [
  {
    icon: "🧊",
    name: "Crampons (12-Point)",
    desc: "Steel 12-point crampons for glacier and ice travel. Step-in or strap binding options. Fits most trekking boots (compatible with your rental boots).",
    specs: [
      { key: "Points", val: "12-point steel" },
      { key: "Binding", val: "Strap or step-in" },
    ],
    price: "$2",
    priceLabel: "per person",
    cartName: "Crampons",
  },
  {
    icon: "🪝",
    name: "Ice Axe (50–65cm)",
    desc: "Classic walking-length ice axe for self-arrest on steep snow slopes. Essential for any technical mountain travel.",
    specs: [
      { key: "Length", val: "50–65cm" },
      { key: "Material", val: "Aluminum / Steel" },
    ],
    price: "$2",
    priceLabel: "per person",
    cartName: "Ice Axe",
  },
  {
    icon: "⛑️",
    name: "Climbing Harness",
    desc: "Adjustable sit harness for fixed rope travel and rappelling on technical peaks. UIAA certified.",
    specs: [
      { key: "Certification", val: "UIAA / CE" },
      { key: "Sizes", val: "S–XL" },
    ],
    price: "$1.50",
    priceLabel: "per person",
    cartName: "Climbing Harness",
  },
  {
    icon: "🪖",
    name: "Climbing Helmet",
    desc: "CE/UIAA certified climbing helmet for rockfall and ice protection on technical peaks. Lightweight foam shell with ventilation.",
    specs: [
      { key: "Weight", val: "~350g" },
      { key: "Certification", val: "CE / UIAA" },
    ],
    price: "$1.50",
    priceLabel: "per person",
    cartName: "Climbing Helmet",
  },
  {
    icon: "🧗",
    name: "Jumar / Ascender",
    desc: "Hand-held rope clamp for ascending fixed ropes on peak climbs. Right or left hand versions. Required for Island Peak, Lobuche.",
    specs: [{ key: "For", val: "Fixed rope travel" }],
    price: "$1",
    priceLabel: "per person",
    cartName: "Jumar / Ascender",
  },
  {
    icon: "🔗",
    name: "Carabiner Set (4× Locking)",
    desc: "4 locking HMS carabiners for clipping into fixed ropes, building anchors, and general mountaineering use.",
    specs: [
      { key: "Quantity", val: "4× locking" },
      { key: "Gate", val: "Screw-lock" },
    ],
    price: "$1",
    priceLabel: "per set",
    cartName: "Carabiner Set",
  },
  {
    icon: "🌡️",
    name: "Portable Pulse Oximeter",
    desc: "Fingertip pulse oximeter to monitor blood oxygen saturation (SpO₂) at altitude. A critical safety tool above 4,000m. Your guide carries one — rent a second for personal monitoring.",
    specs: [{ key: "Reads", val: "SpO₂ + Heart Rate" }],
    price: "$1",
    priceLabel: "per device",
    cartName: "Pulse Oximeter",
  },
];

const ACCESSORIES: GearItem[] = [
  {
    icon: "🕶️",
    name: "Glacier Sunglasses",
    desc: "Category 4 UV400 glacier glasses with side shields. Mandatory above 4,000m on snow — UV radiation is 2–3× stronger than at sea level. Snow blindness is a real risk.",
    specs: [
      { key: "Filter", val: "Category 4 / UV400" },
      { key: "Side Shields", val: "Yes" },
    ],
    price: "$1.50",
    priceLabel: "per person",
    cartName: "Glacier Glasses",
  },
  {
    icon: "🪄",
    name: "Trekking Poles (Pair)",
    desc: "Lightweight collapsible carbon or aluminum trekking poles. Shock absorbing. Reduces knee strain by 20–30% on descents. Highly recommended for all trekkers.",
    specs: [
      { key: "Material", val: "Carbon / Aluminum" },
      { key: "Adjustment", val: "Collapsible" },
    ],
    price: "$1.50",
    priceLabel: "per pair",
    cartName: "Trekking Poles",
  },
  {
    icon: "🔦",
    name: "Headlamp (400+ lumens)",
    desc: "High-lumen headlamp for pre-dawn Kalapathar summit and teahouse evenings. Waterproof. Includes spare batteries.",
    specs: [
      { key: "Lumens", val: "400+" },
      { key: "Battery Life", val: "200 hrs (low)" },
    ],
    price: "$1",
    priceLabel: "per person",
    cartName: "Headlamp",
  },
  {
    icon: "🔋",
    name: "Solar Power Bank (20,000mAh)",
    desc: "High-capacity solar charging power bank. Charging points are scarce above Namche (typically NPR 200/hour). Keep your devices alive for emergency communication.",
    specs: [
      { key: "Capacity", val: "20,000mAh" },
      { key: "Solar Panel", val: "Yes (backup)" },
    ],
    price: "$2",
    priceLabel: "per device",
    cartName: "Solar Power Bank",
  },
  {
    icon: "📻",
    name: "Walkie-Talkie (pair)",
    desc: "Two-way radios for group communication on large treks where members may separate (technical peaks, Three High Passes). Range 5km line-of-sight.",
    specs: [
      { key: "Range", val: "5km (clear)" },
      { key: "For", val: "Peak climbing groups" },
    ],
    price: "$3",
    priceLabel: "per pair",
    cartName: "Walkie-Talkie Pair",
  },
];

const CATEGORIES: GearCategory[] = [
  {
    id: "cat-clothing",
    category: "clothing",
    icon: "🧥",
    title: "Clothing & Insulation",
    count: "4 items",
    items: CLOTHING,
  },
  {
    id: "cat-footwear",
    category: "footwear",
    icon: "🥾",
    title: "Footwear & Gaiters",
    count: "3 items",
    items: FOOTWEAR,
  },
  {
    id: "cat-pack",
    category: "pack",
    icon: "🎒",
    title: "Packs, Bags & Sleep Systems",
    count: "4 items",
    items: PACK,
  },
  {
    id: "cat-technical",
    category: "technical",
    icon: "⛏️",
    title: "Technical Mountaineering Gear",
    count: "7 items · Required for peak climbing & pass crossings",
    items: TECHNICAL,
  },
  {
    id: "cat-accessories",
    category: "accessories",
    icon: "🔦",
    title: "Accessories & Navigation",
    count: "5 items",
    items: ACCESSORIES,
  },
];

export default function GearPage() {
  const [cartItems, setCartItems] = useState<string[]>([]);
  const [filter, setFilter] = useState<FilterKey>("all");

  const toggleCart = (name: string) => {
    setCartItems((prev) =>
      prev.includes(name) ? prev.filter((i) => i !== name) : [...prev, name]
    );
  };

  const count = cartItems.length;

  const total = useMemo(() => {
    const priceByName = new Map<string, number>();
    for (const cat of CATEGORIES) {
      for (const item of cat.items) {
        priceByName.set(item.cartName, parseFloat(item.price.replace("$", "")));
      }
    }
    return cartItems.reduce((sum, name) => sum + (priceByName.get(name) ?? 0), 0);
  }, [cartItems]);

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-content">
          <div className="eyebrow" style={{ color: "var(--amber-light)", marginBottom: "0.5rem" }}>
            Kathmandu Pickup · Post-Trek Return
          </div>
          <h1 className="display-lg" style={{ color: "var(--white)", marginBottom: "0.5rem" }}>
            Gear Rental
          </h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.05rem" }}>
            Professional mountain gear · No shipping fees · Save your luggage allowance
          </p>
        </div>
      </div>

      <section className="section" style={{ background: "var(--snow)" }}>
        <div className="container-default">
          {/* How It Works */}
          <div className="section-header centered reveal" style={{ marginBottom: "2.5rem" }}>
            <div className="eyebrow">Simple Process</div>
            <h2 className="display-sm" style={{ color: "var(--navy)", margin: "0.5rem 0" }}>
              How Gear Rental Works
            </h2>
          </div>
          <div className="how-it-works reveal">
            <div className="how-step">
              <div className="how-step-num">1</div>
              <div className="how-step-icon">🛒</div>
              <div className="how-step-title">Select Your Gear</div>
              <div className="how-step-desc">
                Choose items during booking or add them here. We&apos;ll have everything ready for
                your Kathmandu arrival.
              </div>
            </div>
            <div className="how-step">
              <div className="how-step-num">2</div>
              <div className="how-step-icon">✈️</div>
              <div className="how-step-title">Pick Up in Kathmandu</div>
              <div className="how-step-desc">
                Your guide brings rental gear to your Thamel hotel the evening before the Lukla
                flight. No extra trips needed.
              </div>
            </div>
            <div className="how-step">
              <div className="how-step-num">3</div>
              <div className="how-step-icon">🏔️</div>
              <div className="how-step-title">Trek with Confidence</div>
              <div className="how-step-desc">
                All gear is professional grade, properly maintained, and sanitized. If anything
                fails, we replace it.
              </div>
            </div>
            <div className="how-step">
              <div className="how-step-num">4</div>
              <div className="how-step-icon">🔄</div>
              <div className="how-step-title">Return After Your Trek</div>
              <div className="how-step-desc">
                Return all gear to your guide on your last day in Kathmandu. Simple, no hassle, no
                shipping.
              </div>
            </div>
          </div>

          <div className="info-box info-box-amber reveal" style={{ marginBottom: "3rem" }}>
            <div className="info-box-title">Pro Tip: Travel Light, Trek Right</div>
            Most trekkers from outside Asia pay $50–$150 in extra baggage fees for bulky gear they
            only use once. Renting in Kathmandu saves money, saves luggage space, and you get
            tried-and-tested gear that&apos;s known to work at altitude. The quality of rental gear
            available in Thamel is excellent — most is the same brand gear sold in Western stores.
          </div>

          {/* Gear Filter */}
          <div className="gear-filter reveal">
            <span
              className="filter-label"
              style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--stone)", alignSelf: "center" }}
            >
              Filter:
            </span>
            {FILTERS.map((f) => (
              <button
                key={f.key}
                className={`gear-filter-btn${filter === f.key ? " active" : ""}`}
                onClick={() => setFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Categories */}
          {CATEGORIES.map((cat) => (
            <div
              className="gear-category reveal"
              data-category={cat.category}
              id={cat.id}
              key={cat.id}
              style={{ display: filter === "all" || filter === cat.category ? "block" : "none" }}
            >
              <div className="gear-category-header">
                <span className="gear-category-icon">{cat.icon}</span>
                <h3 className="gear-category-title">{cat.title}</h3>
                <span className="gear-category-count">{cat.count}</span>
              </div>

              {cat.category === "technical" && (
                <div className="info-box info-box-amber" style={{ marginBottom: "1.5rem" }}>
                  <div className="info-box-title">When You Need Technical Gear</div>
                  Crampons and ice axe are required for: Three High Passes (Cho La crossing),
                  Lobuche Peak, Island Peak, Mera Peak. Recommended for: Cho La Pass, Kongma La in
                  winter/spring, any off-trail glacier travel.
                </div>
              )}

              <div className="gear-cards">
                {cat.items.map((item) => {
                  const added = cartItems.includes(item.cartName);
                  return (
                    <div className="gear-card-full" key={item.cartName}>
                      <div className="gear-card-top">{item.icon}</div>
                      <div className="gear-card-body">
                        <div className="gear-card-name">{item.name}</div>
                        <div className="gear-card-desc">{item.desc}</div>
                        <div className="gear-card-specs">
                          {item.specs.map((spec) => (
                            <div className="gear-spec-row" key={spec.key}>
                              <span className="gear-spec-key">{spec.key}</span>
                              <span className="gear-spec-val">{spec.val}</span>
                            </div>
                          ))}
                        </div>
                        <div className="gear-card-price-row">
                          <div>
                            <div className="gear-day-price">
                              {item.price}
                              <span style={{ fontSize: "0.85rem", fontWeight: 500 }}>/day</span>
                            </div>
                            <div className="gear-day-label">{item.priceLabel}</div>
                          </div>
                          <button
                            className={`gear-add-btn${added ? " added" : ""}`}
                            onClick={() => toggleCart(item.cartName)}
                          >
                            {added ? "✓ Added" : "+ Add to Booking"}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Bottom CTA */}
          <div
            style={{
              background: "var(--midnight)",
              borderRadius: "var(--radius-xl)",
              padding: "3rem",
              textAlign: "center",
              color: "white",
            }}
            className="reveal"
          >
            <h3 style={{ fontSize: "1.6rem", marginBottom: "0.75rem" }}>
              Bundle Gear with Your Booking
            </h3>
            <p style={{ color: "rgba(255,255,255,0.65)", marginBottom: "2rem" }}>
              Add gear during the booking process for the best experience — we&apos;ll have
              everything ready in Kathmandu when you arrive.
            </p>
            <Link href="/book" className="btn btn-primary btn-lg">
              Book a Trek + Add Gear
            </Link>
          </div>
        </div>
      </section>

      {/* Floating Cart */}
      <div className={`rental-cart${count > 0 ? " visible" : ""}`} id="rentalCart">
        <div className="cart-count" id="cartCount">
          {count}
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: "0.9rem" }} id="cartText">
            {count} item{count !== 1 ? "s" : ""} selected
            {count > 0 ? ` · $${total % 1 === 0 ? total : total.toFixed(2)}/day` : ""}
          </div>
          <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)" }}>
            Click to view or add to booking
          </div>
        </div>
        <Link href="/book" className="btn btn-primary btn-sm">
          Book + Add Gear
        </Link>
      </div>
    </>
  );
}
