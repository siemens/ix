---
'@siemens/ix': major
---

Migrate **ix-typography** `textColor` to shared status names and SDL token naming. Rename `alarm` → `danger`, `xxx-contrast` → `on-xxx` (including `warning-contrast` → `on-caution`, `critical-contrast` → `on-warning`, `primary-contrast` → `on-accent`), and non-status values `std`/`contrast` → `primary`, `soft` → `secondary`, `weak` → `disabled`. Add plain status colors and drop `inv-*` (use `inverse`). See `BREAKING_CHANGES/v6.md`.
