"use client";

import { useState } from "react";
import Link from "next/link";
import "./admin.css";

type BookingStatus = "confirmed" | "pending" | "assigned" | "cancelled";

interface BookingRow {
  id: string;
  name: string;
  trek: string;
  dep: string;
  pax: number;
  deposit: string;
  guide: string;
  status: BookingStatus;
}

type PanelId =
  | "dashboard"
  | "bookings"
  | "calendar"
  | "guides"
  | "assign"
  | "emails"
  | "treks"
  | "settings";

const bookingsData: BookingRow[] = [
  { id: "#1042", name: "Sarah Kim", trek: "EBC", dep: "Oct 12, 2026", pax: 2, deposit: "$1,134", guide: "Unassigned", status: "confirmed" },
  { id: "#1041", name: "Marco Bianchi", trek: "Three High Passes", dep: "Oct 18, 2026", pax: 1, deposit: "$747", guide: "Tenzing Bhote", status: "assigned" },
  { id: "#1040", name: "Yuki Tanaka", trek: "Gokyo Lakes", dep: "Nov 2, 2026", pax: 3, deposit: "$1,341", guide: "Unassigned", status: "pending" },
  { id: "#1039", name: "David Müller", trek: "Island Peak", dep: "Apr 15, 2027", pax: 4, deposit: "$3,828", guide: "Unassigned", status: "confirmed" },
  { id: "#1038", name: "Ana García", trek: "Ama Dablam BC", dep: "Nov 8, 2026", pax: 2, deposit: "$774", guide: "Pemba Sherpa", status: "assigned" },
  { id: "#1037", name: "James & Lisa Park", trek: "Ama Dablam BC", dep: "Nov 15, 2026", pax: 2, deposit: "$774", guide: "Unassigned", status: "confirmed" },
  { id: "#1036", name: "Chen Wei", trek: "EBC", dep: "Mar 5, 2027", pax: 1, deposit: "$567", guide: "Tenzing Bhote", status: "assigned" },
  { id: "#1035", name: "Fatima Al-Rashid", trek: "Mera Peak", dep: "Apr 20, 2027", pax: 1, deposit: "$1,047", guide: "Dawa Tashi", status: "assigned" },
];

const statusMap: Record<BookingStatus, string> = {
  confirmed: "status-confirmed",
  pending: "status-pending",
  assigned: "status-assigned",
  cancelled: "status-cancelled",
};

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const trekDates: Record<string, string> = {
  "2026-10-12": "🏔️ Sarah Kim - EBC",
  "2026-11-02": "⛰️ Yuki Tanaka - Gokyo",
  "2026-11-08": "🏔️ Ana García - Ama",
};

interface CalCell {
  empty: boolean;
  day?: number;
  today?: boolean;
  hasBooking?: boolean;
  title?: string;
}

export default function AdminPage() {
  // ── Login ──
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("namaste@peakpursuit.com");
  const [dashDate, setDashDate] = useState("");

  // ── Panel switching ──
  const [activePanel, setActivePanel] = useState<PanelId>("dashboard");

  // ── Admin Calendar ──
  const [adminCalYear, setAdminCalYear] = useState(2026);
  const [adminCalMonth, setAdminCalMonth] = useState(9); // October

  // ── Email accordion ──
  const [openEmail, setOpenEmail] = useState<number | null>(null);

  // ── Assignment modal ──
  const [modalOpen, setModalOpen] = useState(false);
  const [assignedClientName, setAssignedClientName] = useState("");
  const [assignedGuideName, setAssignedGuideName] = useState("");

  // ── YouTube ID ──
  const [youtubeId, setYoutubeId] = useState("");

  function doLogin() {
    if (!password) {
      setLoginError(true);
      return;
    }
    setLoginError(false);
    setLoggedIn(true);
    setDashDate(
      new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );
  }

  function doLogout() {
    setLoggedIn(false);
    setPassword("");
  }

  function showPanel(id: PanelId) {
    setActivePanel(id);
  }

  function openAssignModal() {
    setModalOpen(true);
  }

  function assignGuide(client: string, _email: string, _trek: string, guide: string) {
    setAssignedClientName(client);
    setAssignedGuideName(guide);
    setModalOpen(true);
  }

  function toggleEmail(index: number) {
    setOpenEmail((prev) => (prev === index ? null : index));
  }

  function saveYoutubeId() {
    alert(
      `✅ YouTube video ID "${youtubeId}" saved! The homepage video player will now load this video.`
    );
  }

  function adminCalPrev() {
    setAdminCalMonth((m) => {
      if (m - 1 < 0) {
        setAdminCalYear((y) => y - 1);
        return 11;
      }
      return m - 1;
    });
  }

  function adminCalNext() {
    setAdminCalMonth((m) => {
      if (m + 1 > 11) {
        setAdminCalYear((y) => y + 1);
        return 0;
      }
      return m + 1;
    });
  }

  // ── Build calendar cells ──
  const calCells: CalCell[] = (() => {
    const cells: CalCell[] = [];
    const fd = new Date(adminCalYear, adminCalMonth, 1).getDay();
    const days = new Date(adminCalYear, adminCalMonth + 1, 0).getDate();
    const today = new Date();
    for (let i = 0; i < fd; i++) {
      cells.push({ empty: true });
    }
    for (let d = 1; d <= days; d++) {
      const dt = `${adminCalYear}-${String(adminCalMonth + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
      const isToday =
        new Date(adminCalYear, adminCalMonth, d).toDateString() === today.toDateString();
      const booking = trekDates[dt];
      cells.push({
        empty: false,
        day: d,
        today: isToday,
        hasBooking: Boolean(booking),
        title: booking,
      });
    }
    return cells;
  })();

  const navItems: { id: PanelId; icon: string; label: string }[] = [
    { id: "dashboard", icon: "📊", label: "Dashboard" },
    { id: "bookings", icon: "📋", label: "Bookings" },
    { id: "calendar", icon: "📅", label: "Calendar" },
    { id: "guides", icon: "🧗", label: "Guides" },
    { id: "assign", icon: "🔗", label: "Assign Guides" },
  ];
  const settingsNavItems: { id: PanelId; icon: string; label: string }[] = [
    { id: "emails", icon: "📧", label: "Email Templates" },
    { id: "treks", icon: "🏔️", label: "Trek Management" },
    { id: "settings", icon: "⚙️", label: "Settings" },
  ];

  return (
    <>
      {/* ════════════════════════════════════════════
          LOGIN SCREEN
      ════════════════════════════════════════════ */}
      <div className="login-screen" style={{ display: loggedIn ? "none" : "flex" }}>
        <div className="login-visual">
          <div className="login-visual-text">
            <div style={{ fontFamily: "var(--font-accent)", fontSize: "1.1rem", color: "rgba(255,255,255,0.6)", fontStyle: "italic", marginBottom: "0.25rem" }}>Guide Operations</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: "var(--white)" }}>Peak Pursuit Admin</h2>
            <p style={{ color: "rgba(255,255,255,0.55)", marginTop: "0.5rem" }}>Manage bookings, assign guides, track your calendar</p>
          </div>
        </div>
        <div className="login-panel">
          <div className="login-form">
            <div className="login-logo">Peak<span>Pursuit</span></div>
            <div className="login-subtitle">Guide Operations Portal</div>

            <div className="login-error" style={{ display: loginError ? "block" : "none" }}>Incorrect password. Please try again.</div>

            <label className="login-label">Email</label>
            <input
              type="email"
              className="login-input"
              placeholder="guide@peakpursuit.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="login-label">Password</label>
            <input
              type="password"
              className="login-input"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") doLogin();
              }}
            />

            <button
              className="btn btn-primary"
              style={{ width: "100%", justifyContent: "center", marginBottom: "1.25rem", fontSize: "1rem" }}
              onClick={doLogin}
            >
              Sign In to Portal
            </button>

            <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.3)", textAlign: "center" }}>
              Demo: use any password ·{" "}
              <Link href="/" style={{ color: "rgba(255,255,255,0.4)" }}>← Back to website</Link>
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════
          ADMIN APP
      ════════════════════════════════════════════ */}
      <div className={loggedIn ? "admin-app visible" : "admin-app"}>

        {/* Top Bar */}
        <div className="admin-topbar">
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <div className="admin-logo">Peak<span>Pursuit</span> <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-body)", fontWeight: 400 }}>Admin</span></div>
          </div>
          <div className="admin-user">
            <span style={{ color: "rgba(255,255,255,0.5)" }}>Namaste, Guide 🙏</span>
            <div className="admin-avatar">PP</div>
            <button onClick={doLogout} style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)", border: "none", borderRadius: "var(--radius-sm)", padding: "0.35rem 0.75rem", cursor: "pointer", fontSize: "0.78rem" }}>Sign Out</button>
          </div>
        </div>

        <div className="admin-body">
          {/* Sidebar Nav */}
          <nav className="admin-nav">
            <div style={{ padding: "0 1rem", marginBottom: "1.5rem" }}>
              <div style={{ fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.3)", padding: "0 0.5rem", marginBottom: "0.75rem" }}>Main</div>
              {navItems.map((item) => (
                <div
                  key={item.id}
                  className={activePanel === item.id ? "admin-nav-item active" : "admin-nav-item"}
                  onClick={() => showPanel(item.id)}
                >
                  <span>{item.icon}</span> {item.label}
                </div>
              ))}
              <div style={{ fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.3)", padding: "0 0.5rem", margin: "1.5rem 0 0.75rem" }}>Settings</div>
              {settingsNavItems.map((item) => (
                <div
                  key={item.id}
                  className={activePanel === item.id ? "admin-nav-item active" : "admin-nav-item"}
                  onClick={() => showPanel(item.id)}
                >
                  <span>{item.icon}</span> {item.label}
                </div>
              ))}
              <div style={{ padding: "1rem 0.5rem", marginTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "rgba(255,255,255,0.4)", fontSize: "0.8rem" }}>
                  <span>↗</span> View Website
                </Link>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <div className="admin-content">

            {/* ══ DASHBOARD ══ */}
            <div className={activePanel === "dashboard" ? "admin-panel active" : "admin-panel"}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                <div>
                  <h1 style={{ fontSize: "1.5rem", color: "var(--navy)", fontFamily: "var(--font-display)" }}>Dashboard</h1>
                  <p style={{ color: "var(--stone)", fontSize: "0.85rem" }}>{dashDate}</p>
                </div>
                <button className="btn btn-primary btn-sm" onClick={() => showPanel("bookings")}>+ New Booking</button>
              </div>

              {/* KPIs */}
              <div className="admin-stats-grid">
                <div className="kpi-card">
                  <div className="kpi-num">23</div>
                  <div className="kpi-label">Active Bookings</div>
                  <div className="kpi-delta kpi-up">↑ 5 this month</div>
                </div>
                <div className="kpi-card">
                  <div className="kpi-num">$48,200</div>
                  <div className="kpi-label">Revenue YTD</div>
                  <div className="kpi-delta kpi-up">↑ 22% vs last year</div>
                </div>
                <div className="kpi-card">
                  <div className="kpi-num">3</div>
                  <div className="kpi-label">Active Guides</div>
                  <div className="kpi-delta" style={{ color: "var(--stone)" }}>2 on trek, 1 available</div>
                </div>
                <div className="kpi-card">
                  <div className="kpi-num">8</div>
                  <div className="kpi-label">Awaiting Guide Assign</div>
                  <div className="kpi-delta kpi-down">↑ 3 unassigned</div>
                </div>
              </div>

              <div className="panel-grid">
                {/* Recent Bookings */}
                <div className="admin-card">
                  <div className="admin-card-header">
                    <span className="admin-card-title">Recent Bookings</span>
                    <button className="action-btn" onClick={() => showPanel("bookings")}>View All</button>
                  </div>
                  <table className="booking-table">
                    <thead>
                      <tr>
                        <th>Trekker</th>
                        <th>Trek</th>
                        <th>Departure</th>
                        <th>Status</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><div style={{ fontWeight: 600 }}>Sarah Kim</div><div style={{ fontSize: "0.75rem", color: "var(--stone)" }}>2 pax · EBC</div></td>
                        <td>Everest Base Camp</td>
                        <td>Oct 12, 2026</td>
                        <td><span className="status-badge status-confirmed">Confirmed</span></td>
                        <td><button className="action-btn" onClick={openAssignModal}>Assign</button></td>
                      </tr>
                      <tr>
                        <td><div style={{ fontWeight: 600 }}>Marco Bianchi</div><div style={{ fontSize: "0.75rem", color: "var(--stone)" }}>1 pax · 3HP</div></td>
                        <td>Three High Passes</td>
                        <td>Oct 18, 2026</td>
                        <td><span className="status-badge status-assigned">Guide Assigned</span></td>
                        <td><button className="action-btn">View</button></td>
                      </tr>
                      <tr>
                        <td><div style={{ fontWeight: 600 }}>Yuki Tanaka</div><div style={{ fontSize: "0.75rem", color: "var(--stone)" }}>3 pax · Gokyo</div></td>
                        <td>Gokyo Lakes</td>
                        <td>Nov 2, 2026</td>
                        <td><span className="status-badge status-pending">Deposit Paid</span></td>
                        <td><button className="action-btn" onClick={openAssignModal}>Assign</button></td>
                      </tr>
                      <tr>
                        <td><div style={{ fontWeight: 600 }}>David Müller</div><div style={{ fontSize: "0.75rem", color: "var(--stone)" }}>4 pax · Island</div></td>
                        <td>Island Peak</td>
                        <td>Apr 15, 2027</td>
                        <td><span className="status-badge status-confirmed">Confirmed</span></td>
                        <td><button className="action-btn" onClick={openAssignModal}>Assign</button></td>
                      </tr>
                      <tr>
                        <td><div style={{ fontWeight: 600 }}>Ana García</div><div style={{ fontSize: "0.75rem", color: "var(--stone)" }}>2 pax · Ama</div></td>
                        <td>Ama Dablam BC</td>
                        <td>Nov 8, 2026</td>
                        <td><span className="status-badge status-assigned">Guide Assigned</span></td>
                        <td><button className="action-btn">View</button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Guide Status */}
                <div className="admin-card">
                  <div className="admin-card-header">
                    <span className="admin-card-title">Guide Status</span>
                    <button className="action-btn" onClick={() => showPanel("guides")}>Manage</button>
                  </div>
                  <div className="guide-card">
                    <div className="guide-avatar">TB</div>
                    <div style={{ flex: 1 }}>
                      <div className="guide-name">Tenzing Bhote</div>
                      <div className="guide-role">Lead Guide · NMA Certified · 12 yrs</div>
                      <div className="guide-status">
                        <div className="guide-dot dot-on-trek"></div>
                        <span style={{ fontSize: "0.78rem", color: "var(--stone)" }}>On Trek — EBC (returns Oct 28)</span>
                      </div>
                    </div>
                  </div>
                  <div className="guide-card">
                    <div className="guide-avatar">PS</div>
                    <div style={{ flex: 1 }}>
                      <div className="guide-name">Pemba Sherpa</div>
                      <div className="guide-role">Senior Guide · 8 yrs</div>
                      <div className="guide-status">
                        <div className="guide-dot dot-available"></div>
                        <span style={{ fontSize: "0.78rem", color: "var(--stone)" }}>Available from today</span>
                      </div>
                    </div>
                  </div>
                  <div className="guide-card">
                    <div className="guide-avatar">DT</div>
                    <div style={{ flex: 1 }}>
                      <div className="guide-name">Dawa Tashi</div>
                      <div className="guide-role">Guide · 5 yrs · Technical specialist</div>
                      <div className="guide-status">
                        <div className="guide-dot dot-on-trek"></div>
                        <span style={{ fontSize: "0.78rem", color: "var(--stone)" }}>On Trek — Island Peak</span>
                      </div>
                    </div>
                  </div>
                  <div className="guide-card">
                    <div className="guide-avatar">NK</div>
                    <div style={{ flex: 1 }}>
                      <div className="guide-name">Nima Karma</div>
                      <div className="guide-role">Assistant Guide · 3 yrs</div>
                      <div className="guide-status">
                        <div className="guide-dot dot-rest"></div>
                        <span style={{ fontSize: "0.78rem", color: "var(--stone)" }}>Rest week · Available Nov 5</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ══ BOOKINGS ══ */}
            <div className={activePanel === "bookings" ? "admin-panel active" : "admin-panel"}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                <h1 style={{ fontSize: "1.5rem", color: "var(--navy)", fontFamily: "var(--font-display)" }}>All Bookings</h1>
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  <select className="form-select" style={{ padding: "0.55rem 1rem", fontSize: "0.85rem", width: "auto" }}>
                    <option>All Treks</option>
                    <option>EBC</option><option>Three High Passes</option><option>Gokyo</option><option>Island Peak</option>
                  </select>
                  <select className="form-select" style={{ padding: "0.55rem 1rem", fontSize: "0.85rem", width: "auto" }}>
                    <option>All Statuses</option>
                    <option>Confirmed</option><option>Pending</option><option>Assigned</option><option>Cancelled</option>
                  </select>
                </div>
              </div>
              <div className="admin-card">
                <table className="booking-table" style={{ fontSize: "0.82rem" }}>
                  <thead>
                    <tr>
                      <th>#</th><th>Trekker</th><th>Trek</th><th>Departure</th><th>Group</th><th>Deposit</th><th>Guide</th><th>Status</th><th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookingsData.map((b) => (
                      <tr key={b.id}>
                        <td style={{ color: "var(--stone)" }}>{b.id}</td>
                        <td style={{ fontWeight: 600 }}>{b.name}</td>
                        <td>{b.trek}</td>
                        <td>{b.dep}</td>
                        <td>{b.pax}</td>
                        <td>{b.deposit}</td>
                        <td style={b.guide === "Unassigned" ? { color: "#EF4444", fontWeight: 600 } : undefined}>{b.guide}</td>
                        <td><span className={`status-badge ${statusMap[b.status]}`}>{b.status}</span></td>
                        <td>
                          <button className="action-btn">View</button>
                          {b.guide === "Unassigned" && (
                            <button className="action-btn" onClick={openAssignModal}>Assign</button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* ══ CALENDAR ══ */}
            <div className={activePanel === "calendar" ? "admin-panel active" : "admin-panel"}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                <h1 style={{ fontSize: "1.5rem", color: "var(--navy)", fontFamily: "var(--font-display)" }}>Booking Calendar</h1>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                  <button className="btn btn-dark btn-sm" onClick={adminCalPrev}>‹ Prev</button>
                  <span style={{ fontWeight: 700, minWidth: "150px", textAlign: "center" }}>{MONTHS[adminCalMonth]} {adminCalYear}</span>
                  <button className="btn btn-dark btn-sm" onClick={adminCalNext}>Next ›</button>
                </div>
              </div>
              <div className="admin-card" style={{ padding: "1.5rem" }}>
                <div className="admin-cal-grid">
                  <div className="admin-cal-day-name">Sun</div>
                  <div className="admin-cal-day-name">Mon</div>
                  <div className="admin-cal-day-name">Tue</div>
                  <div className="admin-cal-day-name">Wed</div>
                  <div className="admin-cal-day-name">Thu</div>
                  <div className="admin-cal-day-name">Fri</div>
                  <div className="admin-cal-day-name">Sat</div>
                </div>
                <div className="admin-cal-grid" style={{ marginTop: "4px" }}>
                  {calCells.map((cell, i) => {
                    if (cell.empty) {
                      return <div key={i} className="admin-cal-cell empty"></div>;
                    }
                    const cls =
                      "admin-cal-cell" +
                      (cell.today ? " today" : "") +
                      (cell.hasBooking ? " has-booking" : "");
                    return (
                      <div key={i} className={cls} title={cell.title}>
                        <span>{cell.day}</span>
                        {cell.hasBooking && <div className="cal-booking-dot"></div>}
                      </div>
                    );
                  })}
                </div>
                <div style={{ display: "flex", gap: "1.5rem", marginTop: "1.25rem", paddingTop: "1.25rem", borderTop: "1px solid var(--border-dark)", fontSize: "0.78rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}><div style={{ width: "10px", height: "10px", borderRadius: "2px", background: "var(--amber)" }}></div> Departure</div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}><div style={{ width: "10px", height: "10px", borderRadius: "2px", background: "var(--blue-sky)" }}></div> Return</div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}><div style={{ width: "10px", height: "10px", borderRadius: "2px", background: "#22C55E" }}></div> On Trek</div>
                </div>
              </div>
            </div>

            {/* ══ GUIDES ══ */}
            <div className={activePanel === "guides" ? "admin-panel active" : "admin-panel"}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                <h1 style={{ fontSize: "1.5rem", color: "var(--navy)", fontFamily: "var(--font-display)" }}>Guide Management</h1>
                <button className="btn btn-primary btn-sm">+ Add Guide</button>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "1.5rem" }}>

                <div className="admin-card" style={{ padding: "2rem" }}>
                  <div style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                    <div className="guide-avatar" style={{ width: "64px", height: "64px", fontSize: "1.4rem" }}>TB</div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.2rem" }}>Tenzing Bhote</div>
                      <div style={{ fontSize: "0.82rem", color: "var(--stone)", marginBottom: "0.5rem" }}>Lead Guide · 12 Years Experience</div>
                      <span className="status-badge status-assigned" style={{ fontSize: "0.7rem" }}>On Trek</span>
                    </div>
                  </div>
                  <div style={{ fontSize: "0.82rem", lineHeight: 1.6, color: "var(--stone)", marginBottom: "1.25rem" }}>Born in Namche Bazaar, Tenzing has summited Everest twice and led over 200 EBC treks. Warm, funny, and incredibly safety-conscious. Speaks Sherpa, Nepali, English, and some Spanish.</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem", fontSize: "0.78rem", marginBottom: "1.25rem" }}>
                    <div style={{ background: "var(--cream)", borderRadius: "var(--radius-sm)", padding: "0.5rem" }}>
                      <div style={{ fontWeight: 700, color: "var(--navy)" }}>Specialties</div>
                      <div style={{ color: "var(--stone)" }}>EBC, 3HP, Island Peak</div>
                    </div>
                    <div style={{ background: "var(--cream)", borderRadius: "var(--radius-sm)", padding: "0.5rem" }}>
                      <div style={{ fontWeight: 700, color: "var(--navy)" }}>Certifications</div>
                      <div style={{ color: "var(--stone)" }}>NMA, Wilderness FA</div>
                    </div>
                    <div style={{ background: "var(--cream)", borderRadius: "var(--radius-sm)", padding: "0.5rem" }}>
                      <div style={{ fontWeight: 700, color: "var(--navy)" }}>Languages</div>
                      <div style={{ color: "var(--stone)" }}>Sherpa, Nepali, English</div>
                    </div>
                    <div style={{ background: "var(--cream)", borderRadius: "var(--radius-sm)", padding: "0.5rem" }}>
                      <div style={{ fontWeight: 700, color: "var(--navy)" }}>Treks Completed</div>
                      <div style={{ color: "var(--stone)" }}>200+</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <button className="btn btn-dark btn-sm" style={{ flex: 1, justifyContent: "center" }}>Edit Profile</button>
                    <button className="btn btn-outline-amber btn-sm" style={{ flex: 1, justifyContent: "center" }}>View Schedule</button>
                  </div>
                </div>

                <div className="admin-card" style={{ padding: "2rem" }}>
                  <div style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                    <div className="guide-avatar" style={{ width: "64px", height: "64px", fontSize: "1.4rem" }}>PS</div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.2rem" }}>Pemba Sherpa</div>
                      <div style={{ fontSize: "0.82rem", color: "var(--stone)", marginBottom: "0.5rem" }}>Senior Guide · 8 Years Experience</div>
                      <span className="status-badge status-confirmed">Available</span>
                    </div>
                  </div>
                  <div style={{ fontSize: "0.82rem", lineHeight: 1.6, color: "var(--stone)", marginBottom: "1.25rem" }}>From Khumjung village, Pemba is known for his patience and ability to motivate struggling trekkers. Particularly skilled with first-time altitude trekkers and family groups. Excellent cook.</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem", fontSize: "0.78rem", marginBottom: "1.25rem" }}>
                    <div style={{ background: "var(--cream)", borderRadius: "var(--radius-sm)", padding: "0.5rem" }}>
                      <div style={{ fontWeight: 700, color: "var(--navy)" }}>Specialties</div>
                      <div style={{ color: "var(--stone)" }}>EBC, Gokyo, Ama Dablam</div>
                    </div>
                    <div style={{ background: "var(--cream)", borderRadius: "var(--radius-sm)", padding: "0.5rem" }}>
                      <div style={{ fontWeight: 700, color: "var(--navy)" }}>Certifications</div>
                      <div style={{ color: "var(--stone)" }}>NMA, First Aid</div>
                    </div>
                    <div style={{ background: "var(--cream)", borderRadius: "var(--radius-sm)", padding: "0.5rem" }}>
                      <div style={{ fontWeight: 700, color: "var(--navy)" }}>Languages</div>
                      <div style={{ color: "var(--stone)" }}>Sherpa, Nepali, English, Japanese</div>
                    </div>
                    <div style={{ background: "var(--cream)", borderRadius: "var(--radius-sm)", padding: "0.5rem" }}>
                      <div style={{ fontWeight: 700, color: "var(--navy)" }}>Treks Completed</div>
                      <div style={{ color: "var(--stone)" }}>130+</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <button className="btn btn-dark btn-sm" style={{ flex: 1, justifyContent: "center" }}>Edit Profile</button>
                    <button className="btn btn-primary btn-sm" style={{ flex: 1, justifyContent: "center" }}>Assign to Trek</button>
                  </div>
                </div>

                <div className="admin-card" style={{ padding: "2rem" }}>
                  <div style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                    <div className="guide-avatar" style={{ width: "64px", height: "64px", fontSize: "1.4rem" }}>DT</div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.2rem" }}>Dawa Tashi</div>
                      <div style={{ fontSize: "0.82rem", color: "var(--stone)", marginBottom: "0.5rem" }}>Guide · Technical Specialist · 5 Yrs</div>
                      <span className="status-badge status-assigned">On Trek</span>
                    </div>
                  </div>
                  <div style={{ fontSize: "0.82rem", lineHeight: 1.6, color: "var(--stone)", marginBottom: "1.25rem" }}>Dawa is a technical climbing specialist trained in Chamonix, France and at the Himalayan Mountaineering Institute. He leads all peak climbing expeditions and Three High Passes treks.</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem", fontSize: "0.78rem", marginBottom: "1.25rem" }}>
                    <div style={{ background: "var(--cream)", borderRadius: "var(--radius-sm)", padding: "0.5rem" }}>
                      <div style={{ fontWeight: 700, color: "var(--navy)" }}>Specialties</div>
                      <div style={{ color: "var(--stone)" }}>Island Peak, Mera, Lobuche, 3HP</div>
                    </div>
                    <div style={{ background: "var(--cream)", borderRadius: "var(--radius-sm)", padding: "0.5rem" }}>
                      <div style={{ fontWeight: 700, color: "var(--navy)" }}>Certifications</div>
                      <div style={{ color: "var(--stone)" }}>HMI, NMA, IFMGA</div>
                    </div>
                    <div style={{ background: "var(--cream)", borderRadius: "var(--radius-sm)", padding: "0.5rem" }}>
                      <div style={{ fontWeight: 700, color: "var(--navy)" }}>Languages</div>
                      <div style={{ color: "var(--stone)" }}>Sherpa, Nepali, English, French</div>
                    </div>
                    <div style={{ background: "var(--cream)", borderRadius: "var(--radius-sm)", padding: "0.5rem" }}>
                      <div style={{ fontWeight: 700, color: "var(--navy)" }}>Peak Summits</div>
                      <div style={{ color: "var(--stone)" }}>80+ expeditions</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <button className="btn btn-dark btn-sm" style={{ flex: 1, justifyContent: "center" }}>Edit Profile</button>
                    <button className="btn btn-outline-amber btn-sm" style={{ flex: 1, justifyContent: "center" }}>View Schedule</button>
                  </div>
                </div>
              </div>
            </div>

            {/* ══ ASSIGN GUIDES ══ */}
            <div className={activePanel === "assign" ? "admin-panel active" : "admin-panel"}>
              <h1 style={{ fontSize: "1.5rem", color: "var(--navy)", fontFamily: "var(--font-display)", marginBottom: "1.5rem" }}>Guide Assignment Queue</h1>
              <div className="info-box info-box-amber" style={{ marginBottom: "1.5rem" }}>
                <div className="info-box-title">📧 Automated Guide Notification</div>
                When you assign a guide to a booking, an automated email is sent to the client immediately with the guide&apos;s photo, bio, languages, specialties, and WhatsApp number. The client also receives a pre-trek briefing email 14 days before departure.
              </div>
              <div className="admin-card">
                <div className="admin-card-header">
                  <span className="admin-card-title">Unassigned Bookings</span>
                  <span className="badge badge-red">3 pending</span>
                </div>
                <table className="booking-table">
                  <thead>
                    <tr><th>Trekker</th><th>Trek</th><th>Departure</th><th>Group Size</th><th>Assign Guide</th><th>Action</th></tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><div style={{ fontWeight: 600 }}>Sarah Kim</div><div style={{ fontSize: "0.75rem", color: "var(--stone)" }}>sarah.kim@email.com · USA</div></td>
                      <td>Everest Base Camp</td>
                      <td>Oct 12, 2026</td>
                      <td>2 pax</td>
                      <td>
                        <select className="form-select" style={{ padding: "0.4rem 0.75rem", fontSize: "0.82rem" }}>
                          <option value="">-- Select Guide --</option>
                          <option>Tenzing Bhote (On Trek until Oct 28)</option>
                          <option>Pemba Sherpa ✓ Available</option>
                          <option>Dawa Tashi (On Trek)</option>
                        </select>
                      </td>
                      <td><button className="btn btn-primary btn-sm" onClick={() => assignGuide("Sarah Kim", "sarah.kim@email.com", "Everest Base Camp", "Pemba Sherpa")}>✓ Assign &amp; Notify</button></td>
                    </tr>
                    <tr>
                      <td><div style={{ fontWeight: 600 }}>Yuki Tanaka</div><div style={{ fontSize: "0.75rem", color: "var(--stone)" }}>yuki.t@email.com · Japan</div></td>
                      <td>Gokyo Lakes</td>
                      <td>Nov 2, 2026</td>
                      <td>3 pax</td>
                      <td>
                        <select className="form-select" style={{ padding: "0.4rem 0.75rem", fontSize: "0.82rem" }}>
                          <option value="">-- Select Guide --</option>
                          <option>Pemba Sherpa ✓ Available (speaks Japanese!)</option>
                          <option>Nima Karma ✓ Available Nov 5</option>
                        </select>
                      </td>
                      <td><button className="btn btn-primary btn-sm" onClick={() => assignGuide("Yuki Tanaka", "yuki.t@email.com", "Gokyo Lakes", "Pemba Sherpa")}>✓ Assign &amp; Notify</button></td>
                    </tr>
                    <tr>
                      <td><div style={{ fontWeight: 600 }}>James &amp; Lisa Park</div><div style={{ fontSize: "0.75rem", color: "var(--stone)" }}>james.park@email.com · Australia</div></td>
                      <td>Ama Dablam BC</td>
                      <td>Nov 15, 2026</td>
                      <td>2 pax</td>
                      <td>
                        <select className="form-select" style={{ padding: "0.4rem 0.75rem", fontSize: "0.82rem" }}>
                          <option value="">-- Select Guide --</option>
                          <option>Pemba Sherpa ✓ Available</option>
                          <option>Nima Karma ✓ Available Nov 5</option>
                        </select>
                      </td>
                      <td><button className="btn btn-primary btn-sm" onClick={() => assignGuide("James & Lisa Park", "james.park@email.com", "Ama Dablam BC", "Nima Karma")}>✓ Assign &amp; Notify</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* ══ EMAIL TEMPLATES ══ */}
            <div className={activePanel === "emails" ? "admin-panel active" : "admin-panel"}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                <h1 style={{ fontSize: "1.5rem", color: "var(--navy)", fontFamily: "var(--font-display)" }}>Email Templates</h1>
                <div className="info-box info-box-green" style={{ padding: "0.6rem 1rem", fontSize: "0.8rem" }}>✉️ Connected via SendGrid</div>
              </div>
              <p style={{ color: "var(--stone)", marginBottom: "2rem", fontSize: "0.9rem" }}>These templates are sent automatically at key moments in the booking journey. Click to expand and edit.</p>

              <div className="email-template">
                <div className="email-template-header" onClick={() => toggleEmail(0)}>
                  <div>
                    <div style={{ fontWeight: 700 }}>📧 Booking Confirmation</div>
                    <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.5)" }}>Sent immediately after deposit payment</div>
                  </div>
                  <span>{openEmail === 0 ? "▲" : "▼"}</span>
                </div>
                <div className={openEmail === 0 ? "email-template-body open" : "email-template-body"}>
                  <div className="email-preview">{`Subject: 🏔️ Your Peak Pursuit Trek is Confirmed! — {TREK_NAME}

Namaste {FIRST_NAME}!

Your booking is confirmed. We are so excited to share the Himalayas with you!

📋 BOOKING SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Trek:          {TREK_NAME}
Departure:     {DEPARTURE_DATE}
Duration:      {DURATION}
Group Size:    {GROUP_SIZE}
Max Altitude:  {MAX_ALTITUDE}

💳 PAYMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Deposit Paid:  {DEPOSIT_AMOUNT}  ✅
Balance Due:   {BALANCE_AMOUNT}  (60 days before departure)

📧 WHAT HAPPENS NEXT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
→ Guide assignment email within 48 hours
→ Pre-trek briefing email 14 days before
→ Final logistics email 7 days before

🔗 USEFUL LINKS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Read Preparation Guide: peakpursuit.com/prepare
Browse Gear Rental:     peakpursuit.com/gear
WhatsApp Us:            +977 984-100-0000

With mountain love,
The Peak Pursuit Team 🙏`}</div>
                  <div style={{ marginTop: "1rem", display: "flex", gap: "0.75rem" }}>
                    <button className="btn btn-dark btn-sm">Edit Template</button>
                    <button className="btn btn-outline-amber btn-sm">Send Test Email</button>
                  </div>
                </div>
              </div>

              <div className="email-template">
                <div className="email-template-header" onClick={() => toggleEmail(1)}>
                  <div>
                    <div style={{ fontWeight: 700 }}>🧗 Guide Assignment Notification</div>
                    <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.5)" }}>Sent when a guide is assigned to the booking</div>
                  </div>
                  <span>{openEmail === 1 ? "▲" : "▼"}</span>
                </div>
                <div className={openEmail === 1 ? "email-template-body open" : "email-template-body"}>
                  <div className="email-preview">{`Subject: 🏔️ Meet {GUIDE_NAME} — Your Peak Pursuit Guide!

Namaste {FIRST_NAME}!

Great news — your guide for {TREK_NAME} has been assigned!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  🧗 YOUR GUIDE: {GUIDE_NAME}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[GUIDE PHOTO]

{GUIDE_FULL_BIO}

📊 GUIDE CREDENTIALS
• Years of Experience: {GUIDE_YEARS}
• Treks Completed: {GUIDE_TREKS}+
• Certifications: {GUIDE_CERTS}
• Languages: {GUIDE_LANGUAGES}
• Specialty: {GUIDE_SPECIALTY}

📱 CONNECT WITH YOUR GUIDE
WhatsApp: {GUIDE_WHATSAPP}
Feel free to reach out with any questions about the trek!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⛰️ YOUR TREK: {TREK_NAME}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Departure: {DEPARTURE_DATE}
Duration:  {DURATION}

Don't forget to read our preparation guide before your trek:
👉 peakpursuit.com/prepare

See you in Kathmandu! 🙏
{GUIDE_NAME} & The Peak Pursuit Team`}</div>
                  <div style={{ marginTop: "1rem", display: "flex", gap: "0.75rem" }}>
                    <button className="btn btn-dark btn-sm">Edit Template</button>
                    <button className="btn btn-outline-amber btn-sm">Send Test Email</button>
                  </div>
                </div>
              </div>

              <div className="email-template">
                <div className="email-template-header" onClick={() => toggleEmail(2)}>
                  <div>
                    <div style={{ fontWeight: 700 }}>📦 Pre-Trek Briefing (14 Days Before)</div>
                    <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.5)" }}>Sent 14 days before departure — packing list, altitude info, insurance reminder</div>
                  </div>
                  <span>{openEmail === 2 ? "▲" : "▼"}</span>
                </div>
                <div className={openEmail === 2 ? "email-template-body open" : "email-template-body"}>
                  <div className="email-preview">{`Subject: 🎒 {FIRST_NAME}, Your Trek is in 14 Days! Here's Everything You Need

Namaste {FIRST_NAME}!

14 days to departure — the excitement must be building! Here's your complete pre-trek briefing.

🎒 PACKING CHECKLIST
Please review: peakpursuit.com/prepare#packing

⛰️ ALTITUDE SICKNESS REMINDER
• Diamox available OTC in Kathmandu (~$2 USD)
• Consult your doctor now if considering it
• Full guide: peakpursuit.com/prepare#altitude

🛡️ INSURANCE — PLEASE CONFIRM
Have you purchased travel insurance with helicopter evacuation coverage?
If not, please do so immediately. This is mandatory for your trek.
Recommended: World Nomads Explorer plan

✈️ KATHMANDU LOGISTICS
• Your guide will meet you at arrivals
• Gear pickup: evening before Lukla flight
• Nepal visa: available on arrival ($50/30 days)

💊 MEDICATIONS TO PACK
• Diamox (acetazolamide) — see guide
• Ibuprofen / paracetamol
• Imodium / rehydration salts
• Sunscreen SPF50+ (altitude UV is intense!)

We'll see you soon! Safe travels.
{GUIDE_NAME} & Peak Pursuit Team 🏔️`}</div>
                  <div style={{ marginTop: "1rem", display: "flex", gap: "0.75rem" }}>
                    <button className="btn btn-dark btn-sm">Edit Template</button>
                    <button className="btn btn-outline-amber btn-sm">Send Test Email</button>
                  </div>
                </div>
              </div>

              <div className="email-template">
                <div className="email-template-header" onClick={() => toggleEmail(3)}>
                  <div>
                    <div style={{ fontWeight: 700 }}>🎉 Post-Trek Thank You + Review Request</div>
                    <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.5)" }}>Sent 2 days after the trek ends</div>
                  </div>
                  <span>{openEmail === 3 ? "▲" : "▼"}</span>
                </div>
                <div className={openEmail === 3 ? "email-template-body open" : "email-template-body"}>
                  <div className="email-preview">{`Subject: 🏔️ What an adventure, {FIRST_NAME}! Share your story?

Namaste {FIRST_NAME}!

You did it! {TREK_NAME} — completed! We are so proud of what you achieved.

It was our absolute honour to guide you through the Himalayas. We hope the mountains left their mark on you the way they do on all of us who love them.

⭐ WOULD YOU SHARE YOUR EXPERIENCE?
Your review helps other trekkers discover Peak Pursuit and plan their own Himalayan adventure.

→ TripAdvisor: [link]
→ Google Review: [link]
→ Or send us a video testimonial — we'd love to feature your story!

📸 SHARE YOUR PHOTOS
Tag us on Instagram: @peakpursuittrekking
We'll repost the best shots! The summit views you captured deserve to be seen.

🏔️ COMING BACK?
We'd love to see you again — perhaps Mera Peak next? 😊
Reply to this email for 10% returning-trekker discount.

With heartfelt gratitude from the Khumbu,
{GUIDE_NAME} & The Peak Pursuit Family 🙏`}</div>
                  <div style={{ marginTop: "1rem", display: "flex", gap: "0.75rem" }}>
                    <button className="btn btn-dark btn-sm">Edit Template</button>
                    <button className="btn btn-outline-amber btn-sm">Send Test Email</button>
                  </div>
                </div>
              </div>
            </div>

            {/* ══ TREK MANAGEMENT ══ */}
            <div className={activePanel === "treks" ? "admin-panel active" : "admin-panel"}>
              <h1 style={{ fontSize: "1.5rem", color: "var(--navy)", fontFamily: "var(--font-display)", marginBottom: "1.5rem" }}>Trek Management</h1>
              <div className="info-box" style={{ marginBottom: "1.5rem" }}>
                <div className="info-box-title">📡 Integration Note</div>
                Trek prices, availability, and dates sync to the booking system automatically. Changes here update the booking calendar in real-time.
              </div>
              <div className="admin-card">
                <table className="booking-table">
                  <thead>
                    <tr><th>Trek</th><th>Difficulty</th><th>Duration</th><th>Base Price</th><th>Bookings</th><th>Status</th><th></th></tr>
                  </thead>
                  <tbody>
                    <tr><td style={{ fontWeight: 600 }}>Everest Base Camp</td><td><span className="badge badge-blue">◆ Black</span></td><td>14 days</td><td>$1,890</td><td>12 bookings</td><td><span className="status-badge status-confirmed">Active</span></td><td><button className="action-btn">Edit</button></td></tr>
                    <tr><td style={{ fontWeight: 600 }}>Three High Passes</td><td><span className="status-badge" style={{ background: "#0A1628", color: "var(--amber-light)" }}>◆◆ Expert</span></td><td>20 days</td><td>$2,490</td><td>4 bookings</td><td><span className="status-badge status-confirmed">Active</span></td><td><button className="action-btn">Edit</button></td></tr>
                    <tr><td style={{ fontWeight: 600 }}>Gokyo Lakes</td><td><span className="badge badge-blue" style={{ background: "#DBEAFE", color: "#1E40AF" }}>■ Blue</span></td><td>13 days</td><td>$1,490</td><td>6 bookings</td><td><span className="status-badge status-confirmed">Active</span></td><td><button className="action-btn">Edit</button></td></tr>
                    <tr><td style={{ fontWeight: 600 }}>Ama Dablam BC</td><td><span className="badge badge-blue" style={{ background: "#DBEAFE", color: "#1E40AF" }}>■ Blue</span></td><td>10 days</td><td>$1,290</td><td>5 bookings</td><td><span className="status-badge status-confirmed">Active</span></td><td><button className="action-btn">Edit</button></td></tr>
                    <tr><td style={{ fontWeight: 600 }}>Island Peak</td><td><span className="status-badge" style={{ background: "#0A1628", color: "var(--amber-light)" }}>◆◆ Expert</span></td><td>20 days</td><td>$3,190</td><td>2 bookings</td><td><span className="status-badge status-confirmed">Active</span></td><td><button className="action-btn">Edit</button></td></tr>
                    <tr><td style={{ fontWeight: 600 }}>Mera Peak</td><td><span className="status-badge" style={{ background: "#0A1628", color: "var(--amber-light)" }}>◆◆ Expert</span></td><td>18 days</td><td>$3,490</td><td>1 booking</td><td><span className="status-badge status-confirmed">Active</span></td><td><button className="action-btn">Edit</button></td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* ══ SETTINGS ══ */}
            <div className={activePanel === "settings" ? "admin-panel active" : "admin-panel"}>
              <h1 style={{ fontSize: "1.5rem", color: "var(--navy)", fontFamily: "var(--font-display)", marginBottom: "1.5rem" }}>Settings &amp; Integrations</h1>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                <div className="admin-card" style={{ padding: "2rem" }}>
                  <h3 style={{ color: "var(--navy)", marginBottom: "1rem" }}>💳 Stripe Integration</h3>
                  <div className="form-group">
                    <label className="form-label">Publishable Key</label>
                    <input type="text" className="form-input" placeholder="pk_live_..." defaultValue="pk_live_••••••••••••••••" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Secret Key (stored securely on server)</label>
                    <input type="password" className="form-input" placeholder="sk_live_..." defaultValue="sk_live_••••••••••••••••" />
                  </div>
                  <div className="info-box info-box-green" style={{ fontSize: "0.82rem", marginBottom: "1rem" }}>✅ Stripe is connected and processing payments</div>
                  <button className="btn btn-dark btn-sm">Test Connection</button>
                </div>
                <div className="admin-card" style={{ padding: "2rem" }}>
                  <h3 style={{ color: "var(--navy)", marginBottom: "1rem" }}>📧 SendGrid Email</h3>
                  <div className="form-group">
                    <label className="form-label">API Key</label>
                    <input type="password" className="form-input" defaultValue="SG.••••••••••••••••••••••" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">From Email</label>
                    <input type="email" className="form-input" defaultValue="namaste@peakpursuit.com" />
                  </div>
                  <div className="info-box info-box-green" style={{ fontSize: "0.82rem", marginBottom: "1rem" }}>✅ SendGrid connected — automated emails active</div>
                  <button className="btn btn-dark btn-sm">Send Test Email</button>
                </div>
                <div className="admin-card" style={{ padding: "2rem" }}>
                  <h3 style={{ color: "var(--navy)", marginBottom: "1rem" }}>🎥 Guide Introduction Video</h3>
                  <div className="form-group">
                    <label className="form-label">YouTube Video ID</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="dQw4w9WgXcQ"
                      value={youtubeId}
                      onChange={(e) => setYoutubeId(e.target.value)}
                    />
                  </div>
                  <p style={{ fontSize: "0.82rem", color: "var(--stone)", marginBottom: "1rem" }}>Enter the YouTube video ID (the part after v= in the URL) for the guide&apos;s introduction video shown on the homepage.</p>
                  <button className="btn btn-primary btn-sm" onClick={saveYoutubeId}>Save Video ID</button>
                </div>
                <div className="admin-card" style={{ padding: "2rem" }}>
                  <h3 style={{ color: "var(--navy)", marginBottom: "1rem" }}>🌐 Business Info</h3>
                  <div className="form-group">
                    <label className="form-label">Company Name</label>
                    <input type="text" className="form-input" defaultValue="Peak Pursuit Trekking" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">WhatsApp Number</label>
                    <input type="tel" className="form-input" defaultValue="+977 984-100-0000" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Contact Email</label>
                    <input type="email" className="form-input" defaultValue="namaste@peakpursuit.com" />
                  </div>
                  <button className="btn btn-primary btn-sm">Save Changes</button>
                </div>
              </div>
            </div>

          </div>{/* /admin-content */}
        </div>{/* /admin-body */}
      </div>{/* /admin-app */}

      {/* Guide Assignment Modal */}
      <div className={modalOpen ? "assign-modal open" : "assign-modal"}>
        <div className="assign-modal-box">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", color: "var(--navy)" }}>✅ Guide Assigned — Email Sent!</h2>
            <button onClick={() => setModalOpen(false)} style={{ fontSize: "1.2rem", color: "var(--stone)", background: "none", border: "none", cursor: "pointer" }}>✕</button>
          </div>
          <div className="info-box info-box-green" style={{ marginBottom: "1.5rem" }}>
            <div className="info-box-title">📧 Automated Email Sent to <span>{assignedClientName}</span></div>
            The client received an email with <strong>{assignedGuideName}</strong>&apos;s photo, full bio, languages, WhatsApp number, and trek prep reminders.
          </div>
          <div style={{ background: "var(--cream)", borderRadius: "var(--radius)", padding: "1.5rem", fontSize: "0.85rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
            <strong>Email preview sent:</strong><br /><br />
            Subject: 🏔️ Meet <span>{assignedGuideName}</span> — Your Peak Pursuit Guide!<br /><br />
            &quot;Namaste [Client Name]! Great news — your guide for [Trek Name] has been assigned. Say hello to [Guide Name]! Born in the Khumbu Valley, [Guide] has led over [X] treks with a 100% safety record...&quot;
          </div>
          <button className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }} onClick={() => setModalOpen(false)}>Done</button>
        </div>
      </div>
    </>
  );
}
