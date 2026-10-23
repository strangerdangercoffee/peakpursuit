# Routine Context — Peak Pursuit

> **Persistent working state for automated routines.** Claude reads this file at the
> start of every routine run and updates it at the end, so it never re-discovers the
> project from scratch. Keep entries terse and current. Prune anything resolved and
> older than ~30 days. Newest entries go at the top of each log section.

## Project facts

- **Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS. All data is in-memory / client-side.
- **Repo root:** this folder. Public pages under `app/(site)/`, guide portal at `app/admin/`.
- **Ticket convention:** _none established yet — record the tracker ID or a short slug here once known._

### Verify commands (run these to confirm health)

```bash
npm install       # if node_modules missing or deps changed
npm run build     # production build — the primary pass/fail gate
npm run lint      # next lint
npx tsc --noEmit  # type check (no dedicated script; run directly)
```

There is no unit-test suite. "Tests pass" means: build succeeds, lint clean, typecheck clean.

---

## Active tickets

_One block per ticket the routine is working. Include ID, goal, status, and touched files._

<!-- TEMPLATE
### <TICKET-ID / slug> — <one-line goal>
- **Status:** todo | in progress | blocked | in review | done
- **Files:** <paths touched>
- **Notes:** <key decisions, gotchas>
-->

_None yet._

---

## Latest test / verify results

_Most recent run at top. Format: date — command — pass/fail — one-line summary._

<!-- 2026-07-08 — npm run build — PASS — clean production build -->

_No runs recorded yet._

---

## Failure logs

_Capture the actual error output (trimmed) so the next run doesn't re-diagnose. Include the
command, the failing file/line, and the error text. Mark FIXED with a date when resolved._

<!-- TEMPLATE
### <date> — <command> — <short title>
```
<trimmed error output>
```
- **Cause:** <if known>
- **Status:** open | FIXED <date>
-->

_None._

---

## Blockers

_Anything preventing progress: missing access, waiting on a person/decision, external dependency._

<!-- - <date> — <what's blocked> — waiting on <who/what> -->

_None._

---

## Run log

_One line per routine run: date — what it did — outcome._

<!-- - 2026-07-08 — initial context file created -->
- 2026-07-08 — context file created
