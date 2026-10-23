import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-default">
        <div className="footer-grid">
          <div>
            <span className="footer-logo">
              Peak<span>Pursuit</span>
            </span>
            <p className="footer-desc">
              Expert-guided trekking and mountaineering expeditions in Nepal&apos;s
              Khumbu Himalaya. Born in the shadow of Everest, guiding you to the top
              of the world.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                  <polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" fill="var(--midnight)" />
                </svg>
              </a>
              <a href="#" aria-label="TripAdvisor">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10" opacity="0.3" />
                  <text x="6" y="16" fontSize="10" fontWeight="bold">
                    TA
                  </text>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <div className="footer-heading">Treks</div>
            <ul className="footer-links">
              <li><Link href="/treks?trek=ebc">Everest Base Camp</Link></li>
              <li><Link href="/treks?trek=3passes">Three High Passes</Link></li>
              <li><Link href="/treks?trek=amadablam">Ama Dablam BC</Link></li>
              <li><Link href="/treks?trek=gokyo">Gokyo Lakes &amp; Ri</Link></li>
              <li><Link href="/treks?trek=lobuche">Lobuche Peak</Link></li>
              <li><Link href="/treks">View All Treks →</Link></li>
            </ul>
          </div>
          <div>
            <div className="footer-heading">Company</div>
            <ul className="footer-links">
              <li><Link href="/#about">About the Guide</Link></li>
              <li><Link href="/prepare">Prepare for Your Trek</Link></li>
              <li><Link href="/gear">Gear Rental</Link></li>
              <li><Link href="/#testimonials">Client Stories</Link></li>
              <li><Link href="/admin">Guide Portal</Link></li>
            </ul>
          </div>
          <div>
            <div className="footer-heading">Contact &amp; Book</div>
            <ul className="footer-links" style={{ marginBottom: "1.5rem" }}>
              <li><a href="mailto:namaste@peakpursuit.com">namaste@peakpursuit.com</a></li>
              <li><a href="tel:+9779841000000">+977 984-100-0000</a></li>
              <li><a href="#">Thamel, Kathmandu, Nepal</a></li>
            </ul>
            <Link
              href="/book"
              className="btn btn-primary"
              style={{ width: "100%", justifyContent: "center", marginBottom: "0.75rem" }}
            >
              Book a Trek
            </Link>
            <a
              href="https://wa.me/9779841000000"
              className="btn btn-outline-amber"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Peak Pursuit Trekking · Kathmandu, Nepal</span>
          <span style={{ display: "flex", gap: "1.5rem" }}>
            <a href="#" style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.82rem" }}>Privacy Policy</a>
            <a href="#" style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.82rem" }}>Terms</a>
            <a href="#" style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.82rem" }}>Cancellation</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
