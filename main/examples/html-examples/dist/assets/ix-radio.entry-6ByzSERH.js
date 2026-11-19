import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./index-CgUi6DzV-C-hoZ9qs.js";
import { a as a11yBoolean } from "./a11y-BjBGvZyE-CRtX0AHd.js";
import { c as createClassMutationObserver } from "./validation-Di-_grhN-BVj5tatl.js";
import "./preload-helper-UZRgTS1n.js";
import "./condition-checks-B3dDrNFs-BiqvZF_l.js";
import "./index-XBTykBKS-D8xrYMLu.js";
const radioCss = () => `@charset "UTF-8";:host{--ix-radio-checkmark--background:var(--si-sys-color-text-on-accent);--ix-radio--outline-color--focus:var(--si-sys-color-effects-focus);--ix-radio--background--checked:var(--si-sys-color-background-accent);--ix-radio--background--checked--active:var(--si-sys-color-background-accent-active);--ix-radio--background--checked--disabled:var(--si-sys-color-text-disabled);--ix-radio--background--checked--hover:var(--si-sys-color-background-accent-hover);--ix-radio--background--info--checked:var(--si-sys-color-background-information);--ix-radio--background--info--checked--active:var(--si-sys-color-background-information-active);--ix-radio--background--info--checked--hover:var(--si-sys-color-background-information-hover);--ix-radio--background--invalid--checked:var(--si-sys-color-background-danger);--ix-radio--background--invalid--checked--active:var(--si-sys-color-background-danger-active);--ix-radio--background--invalid--checked--hover:var(--si-sys-color-background-danger-hover);--ix-radio--background--warning--checked:var(--si-sys-color-background-warning);--ix-radio--background--warning--checked--active:var(--si-sys-color-background-warning-active);--ix-radio--background--warning--checked--hover:var(--si-sys-color-background-warning-hover);--ix-radio--border-color--checked:rgba(0, 0, 0, 0);--ix-radio--border-color--checked--active:rgba(0, 0, 0, 0);--ix-radio--border-color--checked--disabled:rgba(0, 0, 0, 0);--ix-radio--border-color--checked--hover:rgba(0, 0, 0, 0);--ix-radio--border-color--info--checked:rgba(0, 0, 0, 0);--ix-radio--border-color--info--checked--active:rgba(0, 0, 0, 0);--ix-radio--border-color--info--checked--hover:rgba(0, 0, 0, 0);--ix-radio--border-color--invalid--checked:rgba(0, 0, 0, 0);--ix-radio--border-color--invalid--checked--active:rgba(0, 0, 0, 0);--ix-radio--border-color--invalid--checked--hover:rgba(0, 0, 0, 0);--ix-radio--border-color--warning--checked:var(--si-sys-color-border-warning);--ix-radio--border-color--warning--checked--active:var(--si-sys-color-border-warning);--ix-radio--border-color--warning--checked--hover:var(--si-sys-color-border-warning);--ix-radio--background--unchecked:var(--si-sys-color-background-1);--ix-radio--background--unchecked--active:var(--si-sys-color-background-selected);--ix-radio--background--unchecked--disabled:rgba(0, 0, 0, 0);--ix-radio--background--unchecked--hover:var(--si-sys-color-background-hover);--ix-radio--background--info--unchecked:var(--si-sys-color-background-1);--ix-radio--background--info--unchecked--active:var(--si-sys-color-background-selected);--ix-radio--background--info--unchecked--hover:var(--si-sys-color-background-hover);--ix-radio--background--invalid--unchecked:var(--si-sys-color-background-1);--ix-radio--background--invalid--unchecked--active:var(--si-sys-color-background-selected);--ix-radio--background--invalid--unchecked--hover:var(--si-sys-color-background-hover);--ix-radio--background--warning--unchecked:var(--si-sys-color-background-1);--ix-radio--background--warning--unchecked--active:var(--si-sys-color-background-selected);--ix-radio--background--warning--unchecked--hover:var(--si-sys-color-background-hover);--ix-radio--border-color--unchecked:var(--si-sys-color-border-2);--ix-radio--border-color--unchecked--active:var(--si-sys-color-border-2);--ix-radio--border-color--unchecked--disabled:var(--si-sys-color-text-disabled);--ix-radio--border-color--unchecked--hover:var(--si-sys-color-border-2);--ix-radio--border-color--info--unchecked:var(--si-sys-color-border-information);--ix-radio--border-color--info--unchecked--active:var(--si-sys-color-border-information);--ix-radio--border-color--info--unchecked--hover:var(--si-sys-color-border-information);--ix-radio--border-color--invalid--unchecked:var(--si-sys-color-border-danger);--ix-radio--border-color--invalid--unchecked--active:var(--si-sys-color-border-danger);--ix-radio--border-color--invalid--unchecked--hover:var(--si-sys-color-border-danger);--ix-radio--border-color--warning--unchecked:var(--si-sys-color-border-warning);--ix-radio--border-color--warning--unchecked--active:var(--si-sys-color-border-warning);--ix-radio--border-color--warning--unchecked--hover:var(--si-sys-color-border-warning);--ix-radio-checkmark--border-color:white}:host{--ix-radio--border-width:var(--si-sys-sizing-border-width-default);--ix-radio--outline-offset--focus:var(--si-sys-sizing-focus-ring-offset);--ix-radio-checkmark--border-width--initial:var(--si-sys-sizing-border-width-default);--ix-radio-checkmark--border-radius:var(--si-sys-sizing-border-radius-full);--ix-radio--outline-width--focus:var(--si-sys-sizing-focus-ring-width);--ix-radio-checkmark--width:var(--si-sys-sizing-size-60);--ix-radio-checkmark--min-width:var(--si-sys-sizing-size-60);--ix-radio-checkmark--max-width:var(--si-sys-sizing-size-60);--ix-radio-checkmark--height:var(--si-sys-sizing-size-60);--ix-radio-checkmark--min-height:var(--si-sys-sizing-size-60);--ix-radio-checkmark--max-height:var(--si-sys-sizing-size-60);--ix-radio-button--height:var(--si-sys-sizing-size-60);--ix-radio-button--width:var(--si-sys-sizing-size-60);--ix-radio--target-size:var(--si-sys-sizing-size-70);--ix-radio-selection-indicator--width:calc(var(--ix-radio-checkmark--width) * 0.4);--ix-radio-selection-indicator--height:calc(var(--ix-radio-checkmark--height) * 0.4);--ix-radio--margin:var(--si-sys-sizing-spacing-y-10) 0 var(--si-sys-sizing-spacing-y-10) var(--si-sys-sizing-spacing-x-40)}:host{display:inline-block;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .radio-checkmark{all:unset;box-sizing:border-box;display:inline-flex;position:relative;align-items:center;justify-content:center;width:var(--ix-radio-checkmark--width);min-width:var(--ix-radio-checkmark--min-width);max-width:var(--ix-radio-checkmark--max-width);height:var(--ix-radio-checkmark--height);min-height:var(--ix-radio-checkmark--min-height);max-height:var(--ix-radio-checkmark--max-height);border:var(--ix-radio-checkmark--border-width--initial) solid var(--ix-radio-checkmark--border-color);border-radius:var(--ix-radio-checkmark--border-radius)}:host .radio-button{position:relative;height:var(--ix-radio-button--height);width:var(--ix-radio-button--width);display:flex;align-items:center;justify-content:center}:host .radio-button::before{content:"";position:absolute;inset:calc((var(--ix-radio-button--height) - var(--ix-radio--target-size)) / 2)}:host label{display:flex;justify-content:flex-start;align-items:center;width:100%;height:100%}:host .checkmark{border-radius:var(--ix-radio-checkmark--border-radius);background-color:var(--ix-radio-checkmark--background);width:var(--ix-radio-selection-indicator--width);height:var(--ix-radio-selection-indicator--height)}:host .radio-checkmark{background-color:var(--ix-radio--background--unchecked);border:var(--ix-radio--border-width) solid var(--ix-radio--border-color--unchecked)}:host(:hover) .radio-checkmark{background-color:var(--ix-radio--background--unchecked--hover);border:var(--ix-radio--border-width) solid var(--ix-radio--border-color--unchecked--hover)}:host(:active) .radio-checkmark{background-color:var(--ix-radio--background--unchecked--active);border:var(--ix-radio--border-width) solid var(--ix-radio--border-color--unchecked--active)}:host(.checked) .radio-checkmark,:host([indeterminate]) .radio-checkmark{background-color:var(--ix-radio--background--checked);border:var(--ix-radio--border-width) solid var(--ix-radio--border-color--checked)}:host(.checked:hover) .radio-checkmark,:host([indeterminate]:hover) .radio-checkmark{background-color:var(--ix-radio--background--checked--hover);border:var(--ix-radio--border-width) solid var(--ix-radio--border-color--checked--hover)}:host(.checked:active) .radio-checkmark,:host([indeterminate]:active) .radio-checkmark{background-color:var(--ix-radio--background--checked--active);border:var(--ix-radio--border-width) solid var(--ix-radio--border-color--checked--active)}:host(.disabled){pointer-events:none}:host(.disabled) .radio-checkmark{background-color:var(--ix-radio--background--unchecked--disabled);border:var(--ix-radio--border-width) solid var(--ix-radio--border-color--unchecked--disabled)}:host(.checked.disabled) .radio-checkmark,:host([indeterminate].disabled) .radio-checkmark{background-color:var(--ix-radio--background--checked--disabled);border:var(--ix-radio--border-width) solid var(--ix-radio--border-color--checked--disabled)}:host(:focus-visible){outline:var(--ix-radio--outline-width--focus) solid var(--ix-radio--outline-color--focus);outline-offset:var(--ix-radio--outline-offset--focus)}ix-typography{margin:var(--ix-radio--margin)}:host(.ix-info:not(.disabled)) .radio-checkmark{--ix-radio--background--unchecked:var(--ix-radio--background--info--unchecked);--ix-radio--background--unchecked--hover:var(--ix-radio--background--info--unchecked--hover);--ix-radio--background--unchecked--active:var(--ix-radio--background--info--unchecked--active);--ix-radio--border-color--unchecked:var(--ix-radio--border-color--info--unchecked);--ix-radio--border-color--unchecked--hover:var(--ix-radio--border-color--info--unchecked--hover);--ix-radio--border-color--unchecked--active:var(--ix-radio--border-color--info--unchecked--active);--ix-radio--background--checked:var(--ix-radio--background--info--checked);--ix-radio--background--checked--hover:var(--ix-radio--background--info--checked--hover);--ix-radio--background--checked--active:var(--ix-radio--background--info--checked--active);--ix-radio--border-color--checked:var(--ix-radio--border-color--info--checked);--ix-radio--border-color--checked--hover:var(--ix-radio--border-color--info--checked--hover);--ix-radio--border-color--checked--active:var(--ix-radio--border-color--info--checked--active)}:host(.ix-info) .radio-checkmark{background-color:var(--ix-radio--background--unchecked);border:var(--ix-radio--border-width) solid var(--ix-radio--border-color--unchecked)}:host(.ix-info:hover) .radio-checkmark{background-color:var(--ix-radio--background--unchecked--hover);border:var(--ix-radio--border-width) solid var(--ix-radio--border-color--unchecked--hover)}:host(.ix-info:active) .radio-checkmark{background-color:var(--ix-radio--background--unchecked--active);border:var(--ix-radio--border-width) solid var(--ix-radio--border-color--unchecked--active)}:host(.ix-info.checked) .radio-checkmark,:host(.ix-info[indeterminate]) .radio-checkmark{background-color:var(--ix-radio--background--checked);border:var(--ix-radio--border-width) solid var(--ix-radio--border-color--checked)}:host(.ix-info.checked:hover) .radio-checkmark,:host(.ix-info[indeterminate]:hover) .radio-checkmark{background-color:var(--ix-radio--background--checked--hover);border:var(--ix-radio--border-width) solid var(--ix-radio--border-color--checked--hover)}:host(.ix-info.checked:active) .radio-checkmark,:host(.ix-info[indeterminate]:active) .radio-checkmark{background-color:var(--ix-radio--background--checked--active);border:var(--ix-radio--border-width) solid var(--ix-radio--border-color--checked--active)}:host(.ix-info.disabled) .radio-checkmark{background-color:var(--ix-radio--background--unchecked--disabled);border:var(--ix-radio--border-width) solid var(--ix-radio--border-color--unchecked--disabled)}:host(.ix-info.checked.disabled) .radio-checkmark,:host(.ix-info[indeterminate].disabled) .radio-checkmark{background-color:var(--ix-radio--background--checked--disabled);border:var(--ix-radio--border-width) solid var(--ix-radio--border-color--checked--disabled)}:host(.ix-warning:not(.disabled)) .radio-checkmark{--ix-radio--background--unchecked:var(--ix-radio--background--warning--unchecked);--ix-radio--background--unchecked--hover:var(--ix-radio--background--warning--unchecked--hover);--ix-radio--background--unchecked--active:var(--ix-radio--background--warning--unchecked--active);--ix-radio--border-color--unchecked:var(--ix-radio--border-color--warning--unchecked);--ix-radio--border-color--unchecked--hover:var(--ix-radio--border-color--warning--unchecked--hover);--ix-radio--border-color--unchecked--active:var(--ix-radio--border-color--warning--unchecked--active);--ix-radio--background--checked:var(--ix-radio--background--warning--checked);--ix-radio--background--checked--hover:var(--ix-radio--background--warning--checked--hover);--ix-radio--background--checked--active:var(--ix-radio--background--warning--checked--active);--ix-radio--border-color--checked:var(--ix-radio--border-color--warning--checked);--ix-radio--border-color--checked--hover:var(--ix-radio--border-color--warning--checked--hover);--ix-radio--border-color--checked--active:var(--ix-radio--border-color--warning--checked--active)}:host(.ix-warning) .radio-checkmark{background-color:var(--ix-radio--background--unchecked);border:var(--ix-radio--border-width) solid var(--ix-radio--border-color--unchecked)}:host(.ix-warning:hover) .radio-checkmark{background-color:var(--ix-radio--background--unchecked--hover);border:var(--ix-radio--border-width) solid var(--ix-radio--border-color--unchecked--hover)}:host(.ix-warning:active) .radio-checkmark{background-color:var(--ix-radio--background--unchecked--active);border:var(--ix-radio--border-width) solid var(--ix-radio--border-color--unchecked--active)}:host(.ix-warning.checked) .radio-checkmark,:host(.ix-warning[indeterminate]) .radio-checkmark{background-color:var(--ix-radio--background--checked);border:var(--ix-radio--border-width) solid var(--ix-radio--border-color--checked)}:host(.ix-warning.checked:hover) .radio-checkmark,:host(.ix-warning[indeterminate]:hover) .radio-checkmark{background-color:var(--ix-radio--background--checked--hover);border:var(--ix-radio--border-width) solid var(--ix-radio--border-color--checked--hover)}:host(.ix-warning.checked:active) .radio-checkmark,:host(.ix-warning[indeterminate]:active) .radio-checkmark{background-color:var(--ix-radio--background--checked--active);border:var(--ix-radio--border-width) solid var(--ix-radio--border-color--checked--active)}:host(.ix-warning.disabled) .radio-checkmark{background-color:var(--ix-radio--background--unchecked--disabled);border:var(--ix-radio--border-width) solid var(--ix-radio--border-color--unchecked--disabled)}:host(.ix-warning.checked.disabled) .radio-checkmark,:host(.ix-warning[indeterminate].disabled) .radio-checkmark{background-color:var(--ix-radio--background--checked--disabled);border:var(--ix-radio--border-width) solid var(--ix-radio--border-color--checked--disabled)}:host(.ix-invalid--required:not(.disabled)) .radio-checkmark{--ix-radio--background--unchecked:var(--ix-radio--background--invalid--unchecked);--ix-radio--background--unchecked--hover:var(--ix-radio--background--invalid--unchecked--hover);--ix-radio--background--unchecked--active:var(--ix-radio--background--invalid--unchecked--active);--ix-radio--border-color--unchecked:var(--ix-radio--border-color--invalid--unchecked);--ix-radio--border-color--unchecked--hover:var(--ix-radio--border-color--invalid--unchecked--hover);--ix-radio--border-color--unchecked--active:var(--ix-radio--border-color--invalid--unchecked--active);--ix-radio--background--checked:var(--ix-radio--background--invalid--checked);--ix-radio--background--checked--hover:var(--ix-radio--background--invalid--checked--hover);--ix-radio--background--checked--active:var(--ix-radio--background--invalid--checked--active);--ix-radio--border-color--checked:var(--ix-radio--border-color--invalid--checked);--ix-radio--border-color--checked--hover:var(--ix-radio--border-color--invalid--checked--hover);--ix-radio--border-color--checked--active:var(--ix-radio--border-color--invalid--checked--active)}:host(.ix-invalid--required) .radio-checkmark{background-color:var(--ix-radio--background--unchecked);border:var(--ix-radio--border-width) solid var(--ix-radio--border-color--unchecked)}:host(.ix-invalid--required:hover) .radio-checkmark{background-color:var(--ix-radio--background--unchecked--hover);border:var(--ix-radio--border-width) solid var(--ix-radio--border-color--unchecked--hover)}:host(.ix-invalid--required:active) .radio-checkmark{background-color:var(--ix-radio--background--unchecked--active);border:var(--ix-radio--border-width) solid var(--ix-radio--border-color--unchecked--active)}:host(.ix-invalid--required.checked) .radio-checkmark,:host(.ix-invalid--required[indeterminate]) .radio-checkmark{background-color:var(--ix-radio--background--checked);border:var(--ix-radio--border-width) solid var(--ix-radio--border-color--checked)}:host(.ix-invalid--required.checked:hover) .radio-checkmark,:host(.ix-invalid--required[indeterminate]:hover) .radio-checkmark{background-color:var(--ix-radio--background--checked--hover);border:var(--ix-radio--border-width) solid var(--ix-radio--border-color--checked--hover)}:host(.ix-invalid--required.checked:active) .radio-checkmark,:host(.ix-invalid--required[indeterminate]:active) .radio-checkmark{background-color:var(--ix-radio--background--checked--active);border:var(--ix-radio--border-width) solid var(--ix-radio--border-color--checked--active)}:host(.ix-invalid--required.disabled) .radio-checkmark{background-color:var(--ix-radio--background--unchecked--disabled);border:var(--ix-radio--border-width) solid var(--ix-radio--border-color--unchecked--disabled)}:host(.ix-invalid--required.checked.disabled) .radio-checkmark,:host(.ix-invalid--required[indeterminate].disabled) .radio-checkmark{background-color:var(--ix-radio--background--checked--disabled);border:var(--ix-radio--border-width) solid var(--ix-radio--border-color--checked--disabled)}:host(.ix-invalid:not(.disabled)) .radio-checkmark{--ix-radio--background--unchecked:var(--ix-radio--background--invalid--unchecked);--ix-radio--background--unchecked--hover:var(--ix-radio--background--invalid--unchecked--hover);--ix-radio--background--unchecked--active:var(--ix-radio--background--invalid--unchecked--active);--ix-radio--border-color--unchecked:var(--ix-radio--border-color--invalid--unchecked);--ix-radio--border-color--unchecked--hover:var(--ix-radio--border-color--invalid--unchecked--hover);--ix-radio--border-color--unchecked--active:var(--ix-radio--border-color--invalid--unchecked--active);--ix-radio--background--checked:var(--ix-radio--background--invalid--checked);--ix-radio--background--checked--hover:var(--ix-radio--background--invalid--checked--hover);--ix-radio--background--checked--active:var(--ix-radio--background--invalid--checked--active);--ix-radio--border-color--checked:var(--ix-radio--border-color--invalid--checked);--ix-radio--border-color--checked--hover:var(--ix-radio--border-color--invalid--checked--hover);--ix-radio--border-color--checked--active:var(--ix-radio--border-color--invalid--checked--active)}:host(.ix-invalid) .radio-checkmark{background-color:var(--ix-radio--background--unchecked);border:var(--ix-radio--border-width) solid var(--ix-radio--border-color--unchecked)}:host(.ix-invalid:hover) .radio-checkmark{background-color:var(--ix-radio--background--unchecked--hover);border:var(--ix-radio--border-width) solid var(--ix-radio--border-color--unchecked--hover)}:host(.ix-invalid:active) .radio-checkmark{background-color:var(--ix-radio--background--unchecked--active);border:var(--ix-radio--border-width) solid var(--ix-radio--border-color--unchecked--active)}:host(.ix-invalid.checked) .radio-checkmark,:host(.ix-invalid[indeterminate]) .radio-checkmark{background-color:var(--ix-radio--background--checked);border:var(--ix-radio--border-width) solid var(--ix-radio--border-color--checked)}:host(.ix-invalid.checked:hover) .radio-checkmark,:host(.ix-invalid[indeterminate]:hover) .radio-checkmark{background-color:var(--ix-radio--background--checked--hover);border:var(--ix-radio--border-width) solid var(--ix-radio--border-color--checked--hover)}:host(.ix-invalid.checked:active) .radio-checkmark,:host(.ix-invalid[indeterminate]:active) .radio-checkmark{background-color:var(--ix-radio--background--checked--active);border:var(--ix-radio--border-width) solid var(--ix-radio--border-color--checked--active)}:host(.ix-invalid.disabled) .radio-checkmark{background-color:var(--ix-radio--background--unchecked--disabled);border:var(--ix-radio--border-width) solid var(--ix-radio--border-color--unchecked--disabled)}:host(.ix-invalid.checked.disabled) .radio-checkmark,:host(.ix-invalid[indeterminate].disabled) .radio-checkmark{background-color:var(--ix-radio--background--checked--disabled);border:var(--ix-radio--border-width) solid var(--ix-radio--border-color--checked--disabled)}`;
const Radio = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.checkedChange = createEvent(this, "checkedChange", 7);
    this.valueChange = createEvent(this, "valueChange", 7);
    this.ixBlur = createEvent(this, "ixBlur", 7);
    if (hostRef.$hostElement$["s-ei"]) {
      this.formInternals = hostRef.$hostElement$["s-ei"];
    } else {
      this.formInternals = hostRef.$hostElement$.attachInternals();
      hostRef.$hostElement$["s-ei"] = this.formInternals;
    }
  }
  get hostElement() {
    return getElement(this);
  }
  formInternals;
  /**
   * Name of the radio component
   */
  name;
  /**
   * Value of the radio component
   */
  value;
  /**
   * Label for the radio component
   */
  label;
  /**
   * Disabled state of the radio component
   */
  disabled = false;
  /**
   * Checked state of the radio component
   */
  checked = false;
  /**
   * Requires the radio component and its group to be checked for the form to be submittable
   */
  required = false;
  /**
   * Event emitted when the checked state of the radio changes
   */
  checkedChange;
  /**
   * Event emitted when the value of the radio changes
   */
  valueChange;
  /**
   * Event emitted when the radio is blurred
   */
  ixBlur;
  classMutationObserver;
  /** @internal */
  async setCheckedState(newChecked) {
    if (this.checked) {
      return;
    }
    const result = this.checkedChange.emit(newChecked);
    if (result.defaultPrevented) {
      return;
    }
    this.checked = newChecked;
  }
  async onCheckedChange() {
    this.updateFormInternalValue();
  }
  onValueChange() {
    this.valueChange.emit(this.value);
  }
  connectedCallback() {
    const parent = this.hostElement.closest("ix-radio-group");
    if (parent) {
      this.classMutationObserver = createClassMutationObserver(parent, () => {
        this.hostElement.classList.toggle("ix-invalid--required", parent.classList.contains("ix-invalid--required"));
      });
    }
  }
  disconnectedCallback() {
    if (this.classMutationObserver) {
      this.classMutationObserver.destroy();
    }
  }
  componentWillLoad() {
    this.updateFormInternalValue();
  }
  updateFormInternalValue() {
    if (this.checked) {
      this.formInternals.setFormValue(this.value ?? "on");
    } else {
      this.formInternals.setFormValue(null);
    }
  }
  onKeyDown(event) {
    if (this.disabled) {
      return;
    }
    let preventEvent = false;
    if (event.code === "Space") {
      preventEvent = true;
      this.setCheckedState(true);
    }
    const closestRadioGroup = this.hostElement.closest("ix-radio-group");
    switch (event.code) {
      case "ArrowUp":
      case "ArrowLeft":
        preventEvent = true;
        closestRadioGroup?.setCheckedToNextItem(this.hostElement, false);
        break;
      case "ArrowDown":
      case "ArrowRight":
        preventEvent = true;
        closestRadioGroup?.setCheckedToNextItem(this.hostElement, true);
        break;
    }
    if (preventEvent) {
      event.stopPropagation();
      event.preventDefault();
    }
  }
  /** @internal */
  hasValidValue() {
    return Promise.resolve(this.checked);
  }
  /** @internal */
  getAssociatedFormElement() {
    return Promise.resolve(this.formInternals.form);
  }
  render() {
    let tabIndex = 0;
    if (this.disabled) {
      tabIndex = -1;
    }
    return h(Host, { key: "ef2a38488cd7ba5b2ba18f396c28e2d2f08c838f", "aria-checked": a11yBoolean(this.checked), "aria-disabled": a11yBoolean(this.disabled), role: "radio", tabindex: tabIndex, class: {
      disabled: this.disabled,
      checked: this.checked
    }, onClick: () => {
      if (this.disabled)
        return;
      this.setCheckedState(true);
    }, onKeyDown: (event) => this.onKeyDown(event), onBlur: () => this.ixBlur.emit() }, h("label", { key: "60bc891c520f31441344d1d8c894a762cda4366a" }, h("div", { key: "9c8ef51341acab977cc32dbcf95e7a906cefe054", class: "radio-button" }, h("div", { key: "393f1a1c061dd4dbde5bc72738b91efc51ad735b", "aria-hidden": "true", class: {
      ["radio-checkmark"]: true,
      checked: this.checked
    } }, h("div", { key: "c29ea8468ab82c3d02dee3e88d0c720a227a1ba4", class: "checkmark", style: { visibility: this.checked ? "visible" : "hidden" } }))), this.label && h("ix-typography", { key: "bdcba8aedccbc8289fec49f165486ef3c3e9bafc", format: "body", textColor: this.disabled ? "disabled" : "primary" }, this.label, h("slot", { key: "9b5ee836498abd22227e39a38c41169ef937d64a" }))));
  }
  static get formAssociated() {
    return true;
  }
  static get watchers() {
    return {
      "checked": [{
        "onCheckedChange": 0
      }],
      "value": [{
        "onValueChange": 0
      }]
    };
  }
};
Radio.style = radioCss();
export {
  Radio as ix_radio
};
