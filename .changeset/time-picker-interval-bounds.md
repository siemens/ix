---
'@siemens/ix': patch
---

**ix-time-picker**: Reject zero, non-finite and overly small `hourInterval`, `minuteInterval`, `secondInterval` and `millisecondInterval` values. They fall back to the default instead of rendering an unbounded number of column entries or failing to render.
