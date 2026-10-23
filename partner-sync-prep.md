# Peak Pursuit — Partner Sync Prep

**For:** call with your Nepal business partner
**Goal:** align on how the webapp connects to the real, people-side of the business (guides, customer service, scheduling) and agree on what to build next.

---

## Where the app is today (context for the conversation)

The admin/guide portal already exists as a shell at `/admin`, with panels for **Dashboard, Bookings, Calendar, Guides, Assign, Emails, Treks, Settings**. But everything in it is fake right now:

- Bookings, guides, and assignments are hard-coded sample data — nothing is saved.
- Guide "assignment" updates a screen but doesn't notify anyone.
- The "Emails" panel shows canned templates; no email actually sends.
- Guides have no way to log in, see their treks, confirm, or set their availability.
- The public booking flow doesn't connect to the admin side — a customer booking doesn't create a real record your partner's team can act on.

So the honest framing for tomorrow: **the storefront looks done, but the operational engine that turns a booking into an assigned, confirmed, staffed trek doesn't exist yet.** The whole conversation is about defining that engine before we build it.

---

## The one thing to settle first: who owns what

Before the detailed questions, agree on the split. Most decisions below fall out of this.

- Who owns the **guide roster and relationships** (almost certainly him, on the ground)?
- Who owns **customer service** — and does it split by stage? (e.g. you/web handle pre-booking inquiries; his team handles in-country logistics and on-trek support.)
- Who is the **source of truth** for a guide's availability — the guide, an office coordinator in Kathmandu, or your partner personally?
- Who handles **money** — deposits, balance, guide payouts — and in which currency?

---

## Discussion questions, by topic

### 1. Guides & customer service

- Do we have guides who can also act as customer service, or is CS a separate role? What's their English (and other language) level for handling foreign clients?
- How many guides do we have, and how many are reliably available in peak season (Oct–Nov, Mar–May)?
- Is there an **office coordinator / fixer in Kathmandu** who sits between clients and guides? If so, that person — not the guides — is probably the app's main "admin" user.
- For customer service specifically: what channels do clients expect to reach us on before/during a trek (email, WhatsApp, phone)? Who answers, and what are the hours given the time-zone gap?
- Who handles a problem *on the mountain* (weather, illness, evacuation) — and does that need to show up in the app at all, or stay offline?

### 2. Alerting guides about upcoming treks + how they confirm

This is your core question. Nail down channel and confirmation loop.

- **Channel:** In Nepal, WhatsApp is dominant and email is often ignored. Do guides actually read email, or should the primary alert be WhatsApp (with email as backup/record)? Worth deciding now because it changes what we build.
- **What's in the alert:** trek name, dates, client name/size, meeting point, special needs, pay. How much does the guide need up front vs. on assignment?
- **Confirmation:** how does a guide say "yes, I've got it"? Options to discuss:
  - Reply in WhatsApp (simple, but someone has to manually mark it confirmed).
  - A confirm/decline **link** in the message that updates the app automatically (cleaner, needs the guide portal).
- **Timing & escalation:** how far ahead do guides get alerted? What happens if a guide doesn't confirm within X hours — who gets pinged, and is there a backup guide?
- **Reassignment:** if a guide declines or drops out last-minute, what's the fallback process?

### 3. How guides keep their schedules updated (so booking stays clean)

The thing that makes assignment "smooth and clean" is trustworthy availability data.

- How do guides currently tell your partner when they're free vs. booked (their own treks, other companies, festivals, family)?
- Are guides comfortable and able to **update their own availability in an app** (smartphone reality, data access in the mountains), or should a coordinator maintain it for them?
- What's the unit of availability — full days? Whole trek windows? Do we need to block travel/rest days on either side of a trek?
- Do guides work for **other companies** too? If so, availability changes outside our system — how do we keep it current and avoid double-booking?
- What's the rule when two bookings want the same guide? First-come, seniority, skill match (e.g. only certain guides for Island Peak / Ama Dablam climbing)?

### 4. Booking → assignment → delivery (the end-to-end flow)

Walk this through together, step by step, and note who does each part:

1. Customer books on the website → **what happens next?** (Right now: nothing reaches Nepal.)
2. Who reviews/approves the booking, and where?
3. How is a guide matched and assigned — by whom, based on what?
4. How is the client told who their guide is and what happens next?
5. Who tracks deposit vs. balance-due, gear rental, permits (TIMS/Sagarmatha), and airport pickup?
6. After the trek — reviews, repeat customers, guide feedback: anything to capture?

### 5. Payments & money

The app already displays deposits, so this is half-formed and needs real decisions.

- How do clients pay the deposit and balance — card, bank transfer, on arrival? What processor works for inbound Nepal tourism?
- What currency do we quote and settle in? Who eats FX risk?
- How and when do **guides get paid**, and does the app need to track guide payouts or is that fully offline?

### 6. Data & source of truth

- Where does the "real" list of bookings and guides live — this app, a spreadsheet, WhatsApp, your partner's head? (Often it's a spreadsheet today — worth seeing it.)
- Does your partner already use any tool (spreadsheet, another booking system) we should import from or sync with rather than replace?
- What's the minimum he needs to see on day one to trust and actually use the portal?

---

## Feature roadmap

Grounded in the panels that already exist, split into what's needed to *run* the business vs. what makes it *better*.

### Now — the minimum to actually operate (MVP)

1. **Real data + a database.** Bookings and guides must persist, not reset on refresh. This is the foundation everything else needs.
2. **Booking flow feeds the admin portal.** A website booking creates a real record that appears in the Bookings panel. Without this, the site and the ops side are two disconnected things.
3. **Guide assignment that actually notifies.** Assigning a guide sends a real alert — **WhatsApp first, email as backup** (pending the channel decision in Q2).
4. **Guide confirmation loop.** A confirm/decline link (or a coordinator marking it) so a booking's status reflects reality: pending → assigned → confirmed.
5. **Guide availability, maintained by someone.** Even a simple coordinator-editable calendar per guide, so the assign screen only offers guides who are actually free.
6. **A real login** for your partner / coordinator (the current portal password is cosmetic).

### Next — makes operations smooth

7. **Guide-facing portal or WhatsApp bot** so guides see their upcoming treks and set their own availability without a coordinator in the loop.
8. **Automated client comms:** booking confirmation, "meet your guide," pre-trip checklist, balance reminders.
9. **Payments integration** for deposit + balance, with status visible in the portal.
10. **Assignment intelligence:** filter/suggest guides by skill (climbing peaks vs. trekking), language, and rating; block double-booking automatically.
11. **Permits & logistics checklist** per booking (TIMS, national park entry, domestic flights, gear rental).

### Later — scale and polish

12. Guide payouts and basic financial reporting.
13. Reviews / repeat-customer tracking and a returning-client experience.
14. Multi-language support for guides and clients.
15. Analytics: conversion, peak-season load, guide utilization.

---

## Suggested agenda for the call (30–40 min)

1. Agree the **who-owns-what** split (5 min).
2. Walk the **booking→assignment→delivery** flow out loud; note every handoff (10 min).
3. Decide the **guide alert channel + confirmation method** — WhatsApp vs. email (5 min).
4. Decide **who maintains guide availability** and how (5 min).
5. Confirm the **MVP feature list** and what he needs to see first to trust it (10 min).
6. Note open items on payments and the current source-of-truth spreadsheet (5 min).
