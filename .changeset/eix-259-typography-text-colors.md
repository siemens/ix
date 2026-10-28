---
'@siemens/ix': major
---

Migrate **ix-typography** `textColor` to shared status names and SDL token naming. Rename `alarm` → `danger`, `xxx-contrast` → `on-xxx` (including `warning-contrast` → `on-caution`, `critical-contrast` → `on-warning`, `primary-contrast` → `on-accent`), and non-status values `std`/`soft`/`weak`/`contrast` → `primary`/`secondary`/`disabled`/`inverse`. Add plain status colors and drop `inv-*`. See `BREAKING_CHANGES/v6.md`.
