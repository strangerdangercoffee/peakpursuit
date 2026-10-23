# Project Notes — Peak Pursuit

> **Routine state:** Running work state (active tickets, latest test/verify results, failure
> logs, blockers) lives in `ROUTINE_CONTEXT.md`. Read it at the start of any routine and
> update it at the end.

## Stack

Next.js 14 (App Router), TypeScript, Tailwind CSS. All data is in-memory / client-side.
Public pages live under `app/(site)/`; the guide portal is at `app/admin/`. See `README.md`
for the full route map and structure.

## Verify commands

- `npm run build` — production build, the primary pass/fail gate
- `npm run lint` — next lint
- `npx tsc --noEmit` — type check

There is no unit-test suite; "tests pass" means build, lint, and typecheck are clean.
