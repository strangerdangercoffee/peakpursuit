"use client";

import "./home.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const VIDEO_ID = "YOUR_YOUTUBE_VIDEO_ID";

export default function HomePage() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);

  useEffect(() => {
    setHeroLoaded(true);
  }, []);

  const scrollToStats = () => {
    document.getElementById("stats")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ══ HERO ══ */}
      <section className="hero" id="hero">
        <div className={`hero-bg${heroLoaded ? " loaded" : ""}`} id="heroBg" />
        <div className="hero-overlay" />

        <div className="hero-content">
          <div className="hero-prayer-flags">
            <span style={{ background: "#3B82F6" }} />
            <span style={{ background: "#F8FAFC", border: "1px solid rgba(255,255,255,0.3)" }} />
            <span style={{ background: "#EF4444" }} />
            <span style={{ background: "#22C55E" }} />
            <span style={{ background: "#EAB308" }} />
            <span style={{ background: "#3B82F6" }} />
            <span style={{ background: "#F8FAFC", border: "1px solid rgba(255,255,255,0.3)" }} />
          </div>
          <div className="hero-eyebrow">Khumbu Himalaya · Nepal · Est. 2018</div>
          <h1 className="hero-title">
            Peak<br />
            <span className="hero-title-accent">Pursuit</span>
          </h1>
          <p className="hero-subtitle">Journey Beyond the Clouds</p>
          <p className="hero-tagline">
            Expert-guided treks across the Everest region with a local Sherpa guide who
            has summited the world&apos;s highest peaks and will get you there safely.
          </p>
          <div className="hero-buttons">
            <Link href="/treks" className="btn btn-primary btn-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M17 3l4 4-9.5 9.5-5 1 1-5L17 3z" />
              </svg>
              Explore Treks
            </Link>
            <a href="#video" className="btn btn-secondary btn-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5,3 19,12 5,21" />
              </svg>
              Meet Your Guide
            </a>
          </div>
        </div>

        <div className="hero-altitude-badge animate-float">
          <div className="hero-altitude-num">
            8,849<span style={{ fontSize: "1.2rem" }}>m</span>
          </div>
          <div className="hero-altitude-label">Mt. Everest Summit</div>
        </div>

        <div className="hero-scroll" onClick={scrollToStats}>
          <span>Scroll</span>
          <div className="hero-scroll-line" />
        </div>
      </section>

      {/* ══ STATS ══ */}
      <section className="stats-wrap" id="stats" />

      {/* ══ ABOUT GUIDE ══ */}
      <section className="section" id="about">
        <div className="container-default">
          <div className="about-grid">
            <div className="about-img-wrap reveal">
              <img src="/images/hike_3rd_person.jpeg" alt="Trekking to Everest Base Camp" />
              <div className="about-badge">
                <div className="about-badge-num">12+</div>
                <div className="about-badge-text">Years in the Khumbu</div>
              </div>
            </div>
            <div className="reveal" style={{ animationDelay: "0.2s" }}>
              <div className="eyebrow">Your Guide</div>
              <h2 className="display-md" style={{ margin: "0.75rem 0 1.25rem", color: "var(--navy)" }}>
                Born in the Shadow of Everest
              </h2>
              <p style={{ color: "var(--stone)", lineHeight: 1.8, marginBottom: "1.25rem", fontSize: "0.95rem" }}>
                Peak Pursuit was founded by a lifelong Sherpa guide who grew up in the Khumbu
                Valley with Everest as his backyard. Having led over 500 expeditions and with a
                decade-plus of guiding experience, he combines deep mountain knowledge with an
                infectious warmth that makes every trek unforgettable.
              </p>
              <p style={{ color: "var(--stone)", lineHeight: 1.8, marginBottom: "2rem", fontSize: "0.95rem" }}>
                Fluent in Nepali, Sherpa, English, and Hindi, and certified by Nepal Mountaineering
                Association, he doesn&apos;t just show you the mountains — he shares the stories,
                culture, and spirit of the Himalayas that most trekkers never get to experience.
              </p>
              <div className="about-features">
                <div className="about-feature">
                  <div className="about-feature-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="6" />
                      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                    </svg>
                  </div>
                  <div>
                    <div className="about-feature-title">NMA Certified Guide</div>
                    <div className="about-feature-text">
                      Nepal Mountaineering Association certified, with advanced wilderness first aid
                      training and high-altitude rescue qualifications.
                    </div>
                  </div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 20l5-10 4 6 3-4 5 8H3z" />
                      <path d="M12 4l1.5 3" />
                    </svg>
                  </div>
                  <div>
                    <div className="about-feature-title">Local Expert Knowledge</div>
                    <div className="about-feature-text">
                      Born and raised in the Khumbu region. Knows every hidden teahouse, shortcut,
                      and secret viewpoint that guidebooks don&apos;t mention.
                    </div>
                  </div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div>
                    <div className="about-feature-title">Small Group Focus</div>
                    <div className="about-feature-text">
                      Maximum 8 guests per group, ensuring personal attention, flexibility, and an
                      authentic experience — not a conveyor belt tour.
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: "2rem" }}>
                <Link href="/book" className="btn btn-primary">Book Your Trek</Link>
                <a href="#video" className="btn btn-outline-amber" style={{ marginLeft: "0.75rem" }}>
                  Watch His Story
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ VIDEO SECTION ══ */}
      <section className="video-section" id="video">
        <div className="container-default">
          <div className="video-layout">
            <div className="reveal">
              <div className="eyebrow" style={{ color: "var(--amber-light)" }}>Meet the Team</div>
              <h2 className="display-md" style={{ color: "var(--white)", margin: "0.75rem 0 1.25rem" }}>
                The Warmth That Gets You to the Top
              </h2>
              <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                Watch our founder talk about why he started Peak Pursuit, what drives his passion
                for guiding, and the philosophy that&apos;s earned 5-star reviews from hundreds of
                trekkers around the world.
              </p>
              <div className="prayer-flags" style={{ marginBottom: "1.5rem" }}>
                <div className="prayer-flag pf-blue" />
                <div className="prayer-flag pf-white" />
                <div className="prayer-flag pf-red" />
                <div className="prayer-flag pf-green" />
                <div className="prayer-flag pf-yellow" />
                <div className="prayer-flag pf-blue" />
                <div className="prayer-flag pf-white" />
                <div className="prayer-flag pf-red" />
                <div className="prayer-flag pf-green" />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "rgba(255,255,255,0.8)", fontSize: "0.9rem" }}>
                  <span style={{ color: "var(--gold)", fontSize: "1.1rem" }}>★</span>
                  <span>
                    &quot;The most genuine, caring guide I&apos;ve ever had — and I&apos;ve trekked in 12 countries.&quot;{" "}
                    <em style={{ color: "rgba(255,255,255,0.5)" }}>— Sarah K., USA</em>
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "rgba(255,255,255,0.8)", fontSize: "0.9rem" }}>
                  <span style={{ color: "var(--gold)", fontSize: "1.1rem" }}>★</span>
                  <span>
                    &quot;He pushed me safely to places I never thought I could reach.&quot;{" "}
                    <em style={{ color: "rgba(255,255,255,0.5)" }}>— Marco B., Italy</em>
                  </span>
                </div>
              </div>
              <Link href="/book" className="btn btn-primary">Start Your Journey</Link>
            </div>
            <div className="reveal" style={{ animationDelay: "0.2s" }}>
              <div className="video-wrapper">
                {videoPlaying ? (
                  <iframe
                    style={{ width: "100%", height: "100%", border: "none" }}
                    src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div
                    className="video-placeholder"
                    style={{ backgroundImage: "url('/images/yak_shrine.JPG')", backgroundSize: "cover", backgroundPosition: "center" }}
                  >
                    <div className="video-play-btn" onClick={() => setVideoPlaying(true)}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                        <polygon points="5,3 19,12 5,21" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
              <p style={{ textAlign: "center", color: "rgba(255,255,255,0.4)", fontSize: "0.78rem", marginTop: "1rem" }}>
                Add your YouTube video URL in the admin portal to go live
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FEATURED TREKS ══ */}
      <section className="section" id="treks" style={{ background: "var(--snow)" }}>
        <div className="container-default">
          <div className="section-header reveal">
            <div className="eyebrow">Explore the Khumbu</div>
            <h2 className="display-md" style={{ color: "var(--navy)", margin: "0.75rem 0 1rem" }}>
              Popular Treks
            </h2>
            <p className="lead">
              From classic routes to technical peaks — every journey rated with the Disney ski
              difficulty system so you know exactly what you&apos;re signing up for.
            </p>
          </div>

          <div className="grid-3" id="featuredTreks">
            <TrekCard
              img="/images/hike_3rd_person.jpeg"
              alt="Everest Base Camp Trek"
              diff={<span className="difficulty-badge diff-black"><span className="diff-icon">◆</span> Black Diamond</span>}
              price="From $1,890"
              title="Everest Base Camp"
              desc="The world's most iconic trek. Stand at 5,364m beneath the Khumbu Icefall and look up at the peak that has defined human ambition for generations."
              days="14 Days"
              max="5,364m Max"
              lodging="Teahouse"
              slug="ebc"
            />
            <TrekCard
              img="/images/hiking_down_at_sunset.jpeg"
              alt="Three High Passes Trek"
              diff={<span className="difficulty-badge diff-double-black"><span className="diff-icon">◆◆</span> Expert</span>}
              price="From $2,490"
              title="Three High Passes"
              desc="Cross Kongma La (5,535m), Cho La (5,420m), and Renjo La (5,360m) in one epic circuit. The ultimate Khumbu challenge for experienced trekkers."
              days="20 Days"
              max="5,535m Max"
              lodging="Mixed"
              slug="3passes"
              delay="0.1s"
            />
            <TrekCard
              img="/images/sunset_everest.jpeg"
              alt="Ama Dablam Base Camp"
              diff={<span className="difficulty-badge diff-blue"><span className="diff-icon">■</span> Blue Square</span>}
              price="From $1,290"
              title="Ama Dablam Base Camp"
              desc='Trek to the base of "the mountain of mothers," one of the most beautiful peaks in the world. Spectacular views, rich culture, accessible adventure.'
              days="10 Days"
              max="4,600m Max"
              lodging="Teahouse"
              slug="amadablam"
              delay="0.2s"
            />
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }} className="reveal">
            <Link href="/treks" className="btn btn-outline-amber btn-lg">
              View All 14 Treks
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ══ WHAT TO EXPECT TEASER ══ */}
      <section className="section section-cream">
        <div className="container-default">
          <div className="grid-2" style={{ alignItems: "center", gap: "4rem" }}>
            <div className="reveal">
              <div className="eyebrow">Be Ready</div>
              <h2 className="display-md" style={{ color: "var(--navy)", margin: "0.75rem 0 1.25rem" }}>
                Everything You Need to Know Before You Go
              </h2>
              <p style={{ color: "var(--stone)", lineHeight: 1.8, marginBottom: "2rem" }}>
                From packing lists to altitude sickness prevention, travelers insurance requirements
                to what Diamox is and when to take it — our comprehensive preparation guide leaves
                nothing to chance.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2rem" }}>
                <div className="info-box-amber info-box">
                  <div className="info-box-title">Packing Lists</div>
                  Trek-specific gear recommendations for every season and route.
                </div>
                <div className="info-box">
                  <div className="info-box-title">Altitude Guide</div>
                  AMS symptoms, prevention, Diamox dosing, and when to descend.
                </div>
                <div className="info-box-green info-box">
                  <div className="info-box-title">Insurance</div>
                  Which policies cover helicopter evacuation above 5,000m.
                </div>
                <div className="info-box">
                  <div className="info-box-title">Fitness Prep</div>
                  Training plans tailored to each trek&apos;s difficulty level.
                </div>
              </div>
              <Link href="/prepare" className="btn btn-dark btn-lg">Read the Preparation Guide</Link>
            </div>
            <div className="reveal" style={{ animationDelay: "0.2s" }}>
              <img
                src="/images/above_clouds.jpeg"
                alt="Above the clouds in the Himalayas"
                style={{ borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-xl)", width: "100%" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══ GEAR RENTAL ══ */}
      <section className="section section-dark">
        <div className="container-default">
          <div className="section-header centered reveal">
            <div className="eyebrow" style={{ color: "var(--amber-light)" }}>Don&apos;t Pack It, Rent It</div>
            <h2 className="display-md" style={{ color: "var(--white)", margin: "0.75rem 0 1rem" }}>
              Gear Rental in Kathmandu
            </h2>
            <p style={{ color: "rgba(255,255,255,0.7)", maxWidth: "560px", margin: "0 auto" }}>
              Premium mountain gear available to rent — saving you baggage fees and the hassle of
              shipping. Pick up in Kathmandu, return after your trek.
            </p>
          </div>
          <div className="gear-preview-grid reveal">
            <GearPreview icon="🥾" name="Trekking Boots" price="$4 / day" />
            <GearPreview icon="🎒" name="Trekking Pack" price="$3 / day" />
            <GearPreview icon="🛌" name="Sleeping Bag" price="$2.50 / day" />
            <GearPreview icon="🧥" name="Down Jacket" price="$3 / day" />
            <GearPreview icon="🕶️" name="Glacier Glasses" price="$1.50 / day" />
            <GearPreview icon="🧊" name="Crampons" price="$2 / day" />
            <GearPreview icon="🪝" name="Ice Axe" price="$2 / day" />
            <Link href="/gear" className="gear-preview-item" style={{ cursor: "pointer" }}>
              <div className="gear-preview-icon">➕</div>
              <div className="gear-preview-name">20+ Items</div>
              <div className="gear-preview-price" style={{ color: "var(--amber)" }}>View All</div>
            </Link>
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }} className="reveal">
            <Link href="/gear" className="btn btn-primary btn-lg">Browse Full Gear Catalog</Link>
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section className="testimonial-section" id="testimonials">
        <div className="container-default">
          <div className="section-header centered reveal">
            <div className="eyebrow" style={{ color: "var(--amber-light)" }}>Client Stories</div>
            <h2 className="display-md" style={{ color: "var(--white)", margin: "0.75rem 0 1rem" }}>
              What Trekkers Say
            </h2>
            <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: "500px", margin: "0 auto" }}>
              Real reviews from real trekkers. Video testimonials coming from our last season — the
              smiles say it all.
            </p>
          </div>

          <div className="grid-3" style={{ gap: "1.5rem", marginBottom: "3rem" }}>
            <VideoTestimonial img="/images/hiking_down_at_sunset.jpeg" name="Sarah K. — New York" sub="EBC Trek, November 2025" />
            <VideoTestimonial img="/images/above_clouds.jpeg" name="Marco B. — Milan" sub="Three High Passes, Oct 2025" delay="0.1s" />
            <VideoTestimonial img="/images/kalapathar.jpeg" name="Yuki T. — Tokyo" sub="Gokyo Lakes, October 2025" delay="0.2s" />
          </div>

          <div className="grid-3" style={{ gap: "1.5rem" }}>
            <div className="testimonial-card reveal">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                &quot;The most genuine, caring guide I&apos;ve ever had — and I&apos;ve trekked in 12
                countries. He pushed me safely to EBC when I wanted to quit at Namche. Changed my life.&quot;
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">SK</div>
                <div>
                  <div className="testimonial-name">Sarah K.</div>
                  <div className="testimonial-sub">New York, USA · EBC Trek</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card reveal" style={{ animationDelay: "0.15s" }}>
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                &quot;Three High Passes with him was the hardest and most rewarding thing I&apos;ve ever
                done. His knowledge of the terrain and altitude management was extraordinary.&quot;
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">MB</div>
                <div>
                  <div className="testimonial-name">Marco B.</div>
                  <div className="testimonial-sub">Milan, Italy · Three High Passes</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card reveal" style={{ animationDelay: "0.3s" }}>
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                &quot;He sang Sherpa folk songs at camp, cooked yak cheese noodles at 5,000m, and still
                had energy to point out the exact constellation above Everest. Pure magic.&quot;
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">YT</div>
                <div>
                  <div className="testimonial-name">Yuki T.</div>
                  <div className="testimonial-sub">Tokyo, Japan · Gokyo Lakes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ══ */}
      <section className="section-sm" style={{ padding: "4rem 2rem", background: "var(--snow)" }}>
        <div className="container-default">
          <div className="cta-banner reveal">
            <div className="cta-banner-bg" />
            <div className="cta-banner-content">
              <div className="eyebrow" style={{ color: "var(--amber-light)", marginBottom: "1rem" }}>Ready to Begin?</div>
              <h2 className="display-md" style={{ color: "var(--white)", marginBottom: "1rem" }}>
                Your Everest Journey Starts Here
              </h2>
              <p style={{ color: "rgba(255,255,255,0.75)", maxWidth: "520px", margin: "0 auto 2.5rem", fontSize: "1.05rem", lineHeight: 1.7 }}>
                Choose your trek, pick your dates, secure your spot with a deposit. The mountains are waiting.
              </p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/book" className="btn btn-primary btn-lg">Book Now — Secure with Deposit</Link>
                <Link href="/treks" className="btn btn-secondary btn-lg">Browse All Treks</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function TrekCard({
  img, alt, diff, price, title, desc, days, max, lodging, slug, delay,
}: {
  img: string; alt: string; diff: React.ReactNode; price: string; title: string;
  desc: string; days: string; max: string; lodging: string; slug: string; delay?: string;
}) {
  return (
    <div className="trek-card reveal" style={delay ? { animationDelay: delay } : undefined}>
      <div className="trek-card-img-wrap">
        <img src={img} alt={alt} className="trek-card-img" />
        <div className="trek-card-diff">{diff}</div>
        <div className="trek-card-price">{price}</div>
      </div>
      <div className="trek-card-body">
        <h3 className="trek-card-title">{title}</h3>
        <p className="trek-card-desc">{desc}</p>
        <div className="trek-card-stats">
          <div className="trek-stat">
            <svg className="trek-stat-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
            </svg>{" "}
            {days}
          </div>
          <div className="trek-stat">
            <svg className="trek-stat-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
            </svg>{" "}
            {max}
          </div>
          <div className="trek-stat">
            <svg className="trek-stat-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
            </svg>{" "}
            {lodging}
          </div>
        </div>
        <div className="trek-card-footer">
          <Link href={`/treks?trek=${slug}`} className="btn btn-dark btn-sm" style={{ flex: 1, justifyContent: "center" }}>
            View Details
          </Link>
          <Link href={`/book?trek=${slug}`} className="btn btn-primary btn-sm" style={{ flex: 1, justifyContent: "center" }}>
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}

function GearPreview({ icon, name, price }: { icon: string; name: string; price: string }) {
  return (
    <div className="gear-preview-item">
      <div className="gear-preview-icon">{icon}</div>
      <div className="gear-preview-name">{name}</div>
      <div className="gear-preview-price">{price}</div>
    </div>
  );
}

function VideoTestimonial({ img, name, sub, delay }: { img: string; name: string; sub: string; delay?: string }) {
  return (
    <div className="video-testimonial-card reveal" style={delay ? { animationDelay: delay } : undefined}>
      <img src={img} alt="Testimonial" />
      <div className="video-testimonial-play">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <polygon points="5,3 19,12 5,21" />
        </svg>
      </div>
      <div className="video-testimonial-overlay">
        <div>
          <div style={{ fontWeight: 700, color: "var(--white)", fontSize: "0.95rem" }}>{name}</div>
          <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.6)" }}>{sub}</div>
        </div>
      </div>
    </div>
  );
}
