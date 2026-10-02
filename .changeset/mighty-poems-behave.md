---
'@siemens/ix': patch
---

Fixed `ix-dropdown` trigger handling: an empty `trigger` value no longer matches
elements without an `id`, changing the trigger to an empty value now removes the
previously registered listeners, and asynchronously resolved triggers that became
stale are discarded instead of attaching orphaned listeners.
