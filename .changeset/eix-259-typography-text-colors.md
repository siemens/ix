---
'@siemens/ix': major
---

Migrate **ix-typography** `textColor` status values to the shared status set. Rename `alarm` → `danger`, `alarm-contrast` → `danger-contrast`, and `info-contrast` → `information-contrast`. Add plain status colors (`warning`, `caution`, `information`, `critical`, `success`) and `caution-contrast`. `warning-contrast` keeps its name but uses the warning (orange) token; the previous yellow meaning moves to `caution-contrast`. See `BREAKING_CHANGES/v6.md`.
