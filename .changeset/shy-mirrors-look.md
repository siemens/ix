---
"angular-standalone-test-app": patch
"angular-test-app": patch
"@siemens/ix-angular": patch
"@siemens/core": minor
---

feat(core/time-picker): Rework ix-time-picker according to new design
feat(core/time-input): Add new ix-time-input component

The ix-time-picker has been reworked to a new design and now uses different columns with selectable numbers to select the time. Milliseconds can now be selected as well.
There are also new interval properties to control which numbers are displayed for hours, minutes, seconds and milliseconds.
Additionally the displayed columns are now determined by the used format, making the showHour, showMinutes, showSeconds properties deprecated and will be removed with 4.0.0.
The numbers for hours, minutes, etc. can also be selected by tabbing onto the first number, and then using arrow keys and Enter to select the desired time.

The time-input component has been added as well, combining an input field and the new ix-time-picker, similar to the ix-date-input.
