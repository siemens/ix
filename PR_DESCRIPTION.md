Requirement: EIX-328
Fixes #2772

## Current behavior

Date and time pickers, inputs and dropdowns currently behave inconsistently when saving and updating values.

Some apply every selection change immediately, others only on a button click, and buttons, events and close behaviour differed from component to component.

Users also had no reliable way to close a picker without keeping the current selection: unconfirmed picks were kept, or had already been applied, and there was no cancel/reset button available.

## New behavior

This PR aligns save, update and confirmation behavior across date and time components (with very few, intuitive, exceptions), with as few breaking changes as possible.

The new `requireConfirmation` property lets developers choose per component whether changes are applied immediately (default) or only after **Confirm**. With confirmation available, **Cancel**, <kbd>Escape</kbd> or clicking outside now discard unconfirmed changes before closing.

Note: in most cases default behavior is preserved with `requireConfirmation` false (default), keeping breaking changes to a minimum.

### Summary

- New `requireConfirmation` property (default `false`) on `ix-date-dropdown`, `ix-date-input`, `ix-datetime-input`, `ix-date-picker` and `ix-datetime-picker`. When true, a selection is pending until **Confirm**, and **Cancel**, <kbd>Escape</kbd> or an outside click discards pending selections.
- The only exceptions are `ix-time-picker` and `ix-time-input` which always require confirmation (because time selection is a collective unit) and always show **Cancel** (new) + **Confirm**.
- A shared internal `ix-confirmation-footer` gives all pickers the same footer buttons, layout and event emitters.
- Event separation - to support auto/manual confirmation, the pickers and `ix-date-dropdown` emit two kinds of events, in both modes, so consumers can choose between intermediate and applied values:
  - the change event (`dateChange`, `timeChange`, and `dateRangeChange` on `ix-date-dropdown`) is emitted for every intermediate pick, and on Dismiss with any restored, unconfirmed value.
  - the select event (`dateSelect`, `timeSelect`) is emitted only when the value is applied, i.e. on **Done** or **Confirm**, or when `ix-date-dropdown` applies a complete range without `requireConfirmation`.
- New API: `i18nConfirm` and `i18nCancel` on all affected components.
- New events: cancel events, and `dateSelect` on `ix-date-dropdown`.
- Done/Confirm is now disabled while the value is incomplete, invalid or unchanged.

### Behavior before/after comparison

Each behavior has three rows: before this PR, and after it with `requireConfirmation` off (default) or on.   
**Bold** in a "Before" row marks behavior that was inconsistent across components and is aligned by this PR.   
`ix-time-picker` and `ix-time-input` always require confirmation and have no `requireConfirmation` property, so their "off" rows are empty.   
`-` means not applicable. Dismiss means Cancel, <kbd>Escape</kbd> or an outside click.

| Behaviour | Mode | `ix-date-picker` | `ix-date-input` | `ix-date-dropdown` | `ix-datetime-picker` | `ix-datetime-input` | `ix-time-picker` (always confirms) | `ix-time-input` (always confirms) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Pick is applied** | Before | Immediately | Immediately | **Immediately (partial range too)** | Immediately | **On Confirm** | **Immediately** | On Confirm |
| | After · off | Immediately | Immediately | Immediately (once the range is complete) | Immediately | Immediately | - | - |
| | After · on | On Confirm | On Confirm | On Confirm | On Confirm | On Confirm | On Confirm | On Confirm |
| **Buttons** | Before | Done (range only) | None | **Done** | Done | **"Confirm" (`i18nDone`)** | Confirm | Confirm |
| | After · off | Done (range only)¹ | None | None | Done¹ | Done¹ | - | - |
| | After · on | Cancel + Confirm | Cancel + Confirm | Cancel + Confirm | Cancel + Confirm | Cancel + Confirm | Cancel + Confirm | Cancel + Confirm |
| **Primary button disabled** | Before | Never | - | Never | Never | Never | **Outside min/max only** | **Outside min/max only** |
| | After · off | Incomplete², or unchanged | - | - | Incomplete², or unchanged | Incomplete², or unchanged | - | - |
| | After · on | Incomplete², or unchanged | Incomplete², or unchanged | Incomplete², or unchanged | Incomplete², or unchanged | Incomplete², or unchanged | Invalid, or unchanged | Invalid, or unchanged |
| **Change events** | Before | Every pick | Every pick | **`dateRangeChange` on preset, Done and close** | **Every pick (+ leaked `dateRangeChange`)** | **On button** | **`timeChange` every pick, committed immediately** | On Confirm |
| | After · off | Every pick³ | Every pick | `dateRangeChange` every pick³ | Every pick³ | Every pick | - | - |
| | After · on | Every pick³ | On Confirm⁴ | `dateRangeChange` every pick³ | Every pick³ | On Confirm⁴ | `timeChange` every pick³ | On Confirm⁴ |
| **Dropdown closes** | Before | - | On pick | **On Done or dismiss** | - | On button | - | On Confirm |
| | After · off | - | On pick | Once the range is complete | - | On Done | - | - |
| | After · on | - | On Confirm or dismiss | On Confirm or dismiss | - | On Confirm or dismiss | - | On Confirm or dismiss |
| **Dismiss / Cancel** | Before | No Cancel | Closes | **Keeps a partial range; emits `dateRangeChange`** | No Cancel | **Unconfirmed pick kept in picker** | No Cancel | **Unconfirmed pick kept in picker** |
| | After · off | No Cancel | Closes | Reverts a partial range³ | No Cancel | Closes (picks already applied) | - | - |
| | After · on | Restores confirmed value³ | Discards; reopen shows confirmed value | Discards³; reopen shows confirmed value | Restores confirmed value³ | Discards; reopen shows confirmed value | Restores confirmed value³ | Discards; reopen shows confirmed value |

¹ With `requireConfirmation` off, a **Done** button appears only when the selection has no natural end: a standalone range, or a combined date and time. Single-date pickers and `ix-date-dropdown` finish on the pick that completes the value.  
² Incomplete: no date picked, a range with only a start date, or a time without a date (all where relevant).
³ Change events report every pick, including a start date alone and picks that are not confirmed yet. When a pending selection is discarded, the change event is emitted again with the restored value, followed by `dateCancel`/`timeCancel` if **Cancel** was clicked. The select event reports only applied values.
⁴ For the inputs, the change events are `valueChange` and `ixChange`, which always report the applied value. Without `requireConfirmation`, `ix-datetime-input` emits `valueChange` on every pick and `ixChange` once when the picker closes.

### Implementation notes (for reference during PR review)

- Each picker component keeps a committed ("actual") value and a pending value. Picking the committed value again clears the pending state.
- With `requireConfirmation`, `ix-date-input` applies its value from the embedded picker's `dateSelect` instead of `dateChange`.
- `ix-datetime-picker` handles a change to `from`, `to` or `time` from the consumer one prop at a time, so props the consumer doesn't bind keep their confirmed value.
- New shared helpers in `utils/calendar.util.ts`: `isSameRange`, `isSameDayOrUnset`, `isPartialRange` and the `DateRangeValue` type, which is exported publicly.
- `ix-datetime-picker` hides the embedded time picker's footer via the new `@internal` `hideFooter` prop (replacing the removed `dateTimePickerAppearance`), and `ix-datetime-input` reads the live selection via the `@internal` `getCurrentSelection()` method. Like `dateTimePickerAppearance`, both appear in the generated types and wrappers but are not public API.
- New `require-confirmation` preview examples (component with `requireConfirmation` only) in all example apps (`examples/*-examples`), with framework a11y snapshots.

### Release impact

- Changeset: **major** for `@siemens/ix`, see `.changeset/date-time-require-confirmation.md`.
- Migration notes: `BREAKING_CHANGES/v6.md`, section "Date and time pickers: confirmation and selection", including "Change and select events".
- Docs follow-up needed in `siemens/ix-docs`: the `requireConfirmation` usage and the new events.

🤖 Generated with [Claude Code](https://claude.com/claude-code)


<!-- This is an auto-generated comment: release notes by coderabbit.ai -->

## Summary by CodeRabbit

* **New Features**
  * Date and date-time controls can keep selections pending until users choose Confirm. Cancel, Escape, or clicking outside discards pending changes.
  * Time pickers and inputs support Cancel and Confirm actions, with pending time changes committed only when confirmed.
  * Added confirmation-focused examples across Angular, React, Vue, and HTML.

* **Updates**
  * The time picker’s confirmation label property is now `i18nConfirm`; the date-time input’s default Done label is now “Done.”
  * Date selection events now distinguish selections from applied changes.

<!-- end of auto-generated comment: release notes by coderabbit.ai -->
