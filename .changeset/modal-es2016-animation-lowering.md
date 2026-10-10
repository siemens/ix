---
'@siemens/ix': patch
---

Fix modals opening off-center and failing to close in Angular dev servers that prebundle dependencies with an `es2016` target (zone.js apps, `ng serve`): the animation timing helper no longer uses ES static `#` private fields, which caused a `ReferenceError` in the temporal dead zone when oxc/rolldown lowered them to class helpers on minified class names. Showing a modal now also logs the original underlying error instead of the misleading `HTMLDialogElement not existing` message.
