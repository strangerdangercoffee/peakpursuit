"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`} id="mainNav">
      <Link href="/" className="nav-logo" onClick={close}>
        Peak<span>Pursuit</span>
      </Link>
      <ul className={`nav-links${open ? " open" : ""}`} id="navLinks">
        <li>
          <Link href="/treks" onClick={close}>
            Treks
          </Link>
        </li>
        <li>
          <Link href="/prepare" onClick={close}>
            Prepare
          </Link>
        </li>
        <li>
          <Link href="/gear" onClick={close}>
            Gear Rental
          </Link>
        </li>
        <li>
          <Link href="/#testimonials" onClick={close}>
            Stories
          </Link>
        </li>
        <li>
          <Link href="/#about" onClick={close}>
            About
          </Link>
        </li>
        <li>
          <Link href="/book" className="nav-cta" onClick={close}>
            Book a Trek
          </Link>
        </li>
      </ul>
      <div
        className="nav-hamburger"
        id="hamburger"
        onClick={() => setOpen((o) => !o)}
        role="button"
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
