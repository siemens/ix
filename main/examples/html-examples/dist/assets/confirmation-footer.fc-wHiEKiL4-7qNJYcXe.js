import { h } from "./global-BRajFsjN.js";
class PendingSelection {
  committed;
  pending;
  isSame;
  constructor(committed, pending, isSame) {
    this.committed = committed;
    this.pending = pending;
    this.isSame = isSame;
  }
  static create(committed, isSame) {
    return new PendingSelection(committed, void 0, isSame);
  }
  /** The value shown to the user: pending, else committed. */
  get displayed() {
    return this.pending ?? this.committed;
  }
  get hasPending() {
    return this.pending !== void 0;
  }
  /** Picks `value`. Re-selecting the committed value leaves nothing pending. */
  select(value) {
    const pending = this.isSame(value, this.committed) ? void 0 : value;
    return this.with(this.committed, pending);
  }
  /** Applies the pending value. */
  commit() {
    return this.pending ? this.with(this.pending, void 0) : this;
  }
  /** Drops the pending value, so the committed value is displayed again. */
  discard() {
    return this.pending ? this.with(this.committed, void 0) : this;
  }
  /**
   * Replaces the committed value. `pending` seeds a value that is shown and
   * can be confirmed before the user picked anything, e.g. a default time
   * while nothing is committed; otherwise the pending value is dropped.
   */
  reset(committed, pending) {
    return this.with(committed, pending);
  }
  /**
   * Whether a prop value only echoes the displayed value back, e.g. a
   * two-way binding to the change event that reported a pick.
   */
  isEcho(key, value) {
    const { displayed } = this;
    return this.isSame({ ...displayed, [key]: value }, displayed);
  }
  /**
   * Applies a change of the prop backing `key`. An echo is not an external
   * change: the same instance is returned, so a pending value stays pending
   * and can still be confirmed or discarded. Otherwise only `key` of the
   * committed value changes, as a consumer may bind only some of the props,
   * and the pending value is dropped.
   */
  withPropChange(key, value) {
    if (this.isEcho(key, value)) {
      return this;
    }
    return this.with({ ...this.committed, [key]: value }, void 0);
  }
  with(committed, pending) {
    if (committed === this.committed && pending === this.pending) {
      return this;
    }
    return new PendingSelection(committed, pending, this.isSame);
  }
}
const ConfirmationFooter = ({ requireConfirmation = false, i18nDone = "Done", i18nConfirm = "Confirm", i18nCancel = "Cancel", primaryActionDisabled = false, layout = "end", slot, class: className, onDone, onConfirm, onCancel }) => {
  return h("div", { slot, class: {
    "confirmation-footer": true,
    [`layout-${layout}`]: true,
    ...className ? { [className]: true } : {}
  } }, requireConfirmation && h("ix-button", { "data-testid": "cancel", variant: "subtle-primary", onClick: () => onCancel?.() }, i18nCancel), h("ix-button", { "data-testid": "confirm", disabled: primaryActionDisabled, onClick: () => requireConfirmation ? onConfirm?.() : onDone?.() }, requireConfirmation ? i18nConfirm : i18nDone));
};
export {
  ConfirmationFooter as C,
  PendingSelection as P
};
