import { M as Mixin, r as registerInstance, c as createEvent, g as getElement, h, F as Fragment, H as Host } from "./index-CgUi6DzV-5qI4MrWA.js";
import { a as a11yBoolean } from "./a11y-BjBGvZyE-CRtX0AHd.js";
import { D as DefaultMixins } from "./component-CxWIPGez-55aCZ0ep.js";
import { I as InheritAriaAttributesMixin } from "./inherit-aria-attributes.mixin-BZzEjNbh-DEpldu1p.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { h as hasSlottedContent } from "./shadow-dom-cGv1zHOb-DvI9lJZX.js";
import { H as HookValidationLifecycle } from "./validation-Di-_grhN-6u66ot-y.js";
import "./preload-helper-UZRgTS1n.js";
import "./condition-checks-B3dDrNFs-BiqvZF_l.js";
import "./focus-utilities-6ZxKp7Jn-DqvT-65C.js";
import "./index-XBTykBKS-D8xrYMLu.js";
const checkboxCss = () => `@charset "UTF-8";:host{--ix-checkbox-checkmark--color:var(--si-sys-color-text-on-accent);--ix-checkbox--outline-color--focus:var(--si-sys-color-effects-focus);--ix-checkbox--background--checked:var(--si-sys-color-background-accent);--ix-checkbox--background--checked--active:var(--si-sys-color-background-accent-active);--ix-checkbox--background--checked--disabled:var(--si-sys-color-text-disabled);--ix-checkbox--background--checked--hover:var(--si-sys-color-background-accent-hover);--ix-checkbox--background--info--checked:var(--si-sys-color-background-information);--ix-checkbox--background--info--checked--active:var(--si-sys-color-background-information-active);--ix-checkbox--background--info--checked--hover:var(--si-sys-color-background-information-hover);--ix-checkbox--background--invalid--checked:var(--si-sys-color-background-danger);--ix-checkbox--background--invalid--checked--active:var(--si-sys-color-background-danger-active);--ix-checkbox--background--invalid--checked--hover:var(--si-sys-color-background-danger-hover);--ix-checkbox--background--warning--checked:var(--si-sys-color-background-warning);--ix-checkbox--background--warning--checked--active:var(--si-sys-color-background-warning-active);--ix-checkbox--background--warning--checked--hover:var(--si-sys-color-background-warning-hover);--ix-checkbox--border-color--checked:rgba(0, 0, 0, 0);--ix-checkbox--border-color--checked--active:rgba(0, 0, 0, 0);--ix-checkbox--border-color--checked--disabled:rgba(0, 0, 0, 0);--ix-checkbox--border-color--checked--hover:rgba(0, 0, 0, 0);--ix-checkbox--border-color--info--checked:rgba(0, 0, 0, 0);--ix-checkbox--border-color--info--checked--active:rgba(0, 0, 0, 0);--ix-checkbox--border-color--info--checked--hover:rgba(0, 0, 0, 0);--ix-checkbox--border-color--invalid--checked:rgba(0, 0, 0, 0);--ix-checkbox--border-color--invalid--checked--active:rgba(0, 0, 0, 0);--ix-checkbox--border-color--invalid--checked--hover:rgba(0, 0, 0, 0);--ix-checkbox--border-color--warning--checked:var(--si-sys-color-border-warning);--ix-checkbox--border-color--warning--checked--active:var(--si-sys-color-border-warning);--ix-checkbox--border-color--warning--checked--hover:var(--si-sys-color-border-warning);--ix-checkbox--background--unchecked:var(--si-sys-color-background-1);--ix-checkbox--background--unchecked--active:var(--si-sys-color-background-selected);--ix-checkbox--background--unchecked--disabled:rgba(0, 0, 0, 0);--ix-checkbox--background--unchecked--hover:var(--si-sys-color-background-hover);--ix-checkbox--background--info--unchecked:var(--si-sys-color-background-1);--ix-checkbox--background--info--unchecked--active:var(--si-sys-color-background-selected);--ix-checkbox--background--info--unchecked--hover:var(--si-sys-color-background-hover);--ix-checkbox--background--invalid--unchecked:var(--si-sys-color-background-1);--ix-checkbox--background--invalid--unchecked--active:var(--si-sys-color-background-selected);--ix-checkbox--background--invalid--unchecked--hover:var(--si-sys-color-background-hover);--ix-checkbox--background--warning--unchecked:var(--si-sys-color-background-1);--ix-checkbox--background--warning--unchecked--active:var(--si-sys-color-background-selected);--ix-checkbox--background--warning--unchecked--hover:var(--si-sys-color-background-hover);--ix-checkbox--border-color--unchecked:var(--si-sys-color-border-2);--ix-checkbox--border-color--unchecked--active:var(--si-sys-color-border-2);--ix-checkbox--border-color--unchecked--disabled:var(--si-sys-color-text-disabled);--ix-checkbox--border-color--unchecked--hover:var(--si-sys-color-border-2);--ix-checkbox--border-color--info--unchecked:var(--si-sys-color-border-information);--ix-checkbox--border-color--info--unchecked--active:var(--si-sys-color-border-information);--ix-checkbox--border-color--info--unchecked--hover:var(--si-sys-color-border-information);--ix-checkbox--border-color--invalid--unchecked:var(--si-sys-color-border-danger);--ix-checkbox--border-color--invalid--unchecked--active:var(--si-sys-color-border-danger);--ix-checkbox--border-color--invalid--unchecked--hover:var(--si-sys-color-border-danger);--ix-checkbox--border-color--warning--unchecked:var(--si-sys-color-border-warning);--ix-checkbox--border-color--warning--unchecked--active:var(--si-sys-color-border-warning);--ix-checkbox--border-color--warning--unchecked--hover:var(--si-sys-color-border-warning)}:host{--ix-checkbox-label--gap:var(--si-sys-sizing-spacing-x-30);--ix-checkbox--border-radius:var(--si-sys-sizing-border-radius-xs);--ix-checkbox--border-width:var(--si-sys-sizing-border-width-default);--ix-checkbox--outline-offset--focus:var(--si-sys-sizing-focus-ring-offset);--ix-checkbox--outline-width--focus:var(--si-sys-sizing-focus-ring-width);--ix-checkbox-button--height:var(--si-sys-sizing-size-60);--ix-checkbox-button--width:var(--si-sys-sizing-size-60);--ix-checkbox--target-size:var(--si-sys-sizing-size-70);--ix-checkbox--width:var(--si-sys-sizing-size-60);--ix-checkbox--min-width:var(--si-sys-sizing-size-60);--ix-checkbox--max-width:var(--si-sys-sizing-size-60);--ix-checkbox--height:var(--si-sys-sizing-size-60);--ix-checkbox--min-height:var(--si-sys-sizing-size-60);--ix-checkbox--max-height:var(--si-sys-sizing-size-60)}:host{display:inline-block;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .checkbox-button{position:relative;height:var(--ix-checkbox-button--height);width:var(--ix-checkbox-button--width);flex-shrink:0;display:flex;align-items:center;justify-content:center}:host .checkbox-button::before{content:"";position:absolute;inset:calc((var(--ix-checkbox-button--height) - var(--ix-checkbox--target-size)) / 2)}:host .checkbox-control{all:unset;box-sizing:border-box;border-radius:var(--ix-checkbox--border-radius);display:inline-flex;position:relative;align-items:center;justify-content:center;width:var(--ix-checkbox--width);min-width:var(--ix-checkbox--min-width);max-width:var(--ix-checkbox--max-width);height:var(--ix-checkbox--height);min-height:var(--ix-checkbox--min-height);max-height:var(--ix-checkbox--max-height)}:host rect.checkmark{fill:var(--ix-checkbox-checkmark--color)}:host path.checkmark{stroke:var(--ix-checkbox-checkmark--color)}:host input[type=checkbox]:focus-visible+.checkbox-button .checkbox-control{outline:var(--ix-checkbox--outline-width--focus) solid var(--ix-checkbox--outline-color--focus);outline-offset:var(--ix-checkbox--outline-offset--focus)}:host input[type=checkbox]{cursor:pointer;height:1.5rem;margin:0;opacity:0;position:absolute;width:1.5rem;z-index:1}:host label{display:flex;justify-content:flex-start;align-items:center;gap:var(--ix-checkbox-label--gap);width:100%;height:100%;cursor:pointer}:host(.label-less) ix-typography{display:none}:host .checkbox-control{background-color:var(--ix-checkbox--background--unchecked);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox--border-color--unchecked)}:host(:hover) .checkbox-control{background-color:var(--ix-checkbox--background--unchecked--hover);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox--border-color--unchecked--hover)}:host(:active) .checkbox-control{background-color:var(--ix-checkbox--background--unchecked--active);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox--border-color--unchecked--active)}:host(.checked) .checkbox-control,:host(.indeterminate) .checkbox-control{background-color:var(--ix-checkbox--background--checked);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox--border-color--checked)}:host(.checked:hover) .checkbox-control,:host(.indeterminate:hover) .checkbox-control{background-color:var(--ix-checkbox--background--checked--hover);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox--border-color--checked--hover)}:host(.checked:active) .checkbox-control,:host(.indeterminate:active) .checkbox-control{background-color:var(--ix-checkbox--background--checked--active);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox--border-color--checked--active)}:host(.disabled) .checkbox-control{background-color:var(--ix-checkbox--background--unchecked--disabled);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox--border-color--unchecked--disabled)}:host(.checked.disabled) .checkbox-control,:host(.indeterminate.disabled) .checkbox-control{background-color:var(--ix-checkbox--background--checked--disabled);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox--border-color--checked--disabled)}:host(.ix-info) .checkbox-control{--ix-checkbox--background--unchecked:var(--ix-checkbox--background--info--unchecked);--ix-checkbox--background--unchecked--hover:var(--ix-checkbox--background--info--unchecked--hover);--ix-checkbox--background--unchecked--active:var(--ix-checkbox--background--info--unchecked--active);--ix-checkbox--border-color--unchecked:var(--ix-checkbox--border-color--info--unchecked);--ix-checkbox--border-color--unchecked--hover:var(--ix-checkbox--border-color--info--unchecked--hover);--ix-checkbox--border-color--unchecked--active:var(--ix-checkbox--border-color--info--unchecked--active);--ix-checkbox--background--checked:var(--ix-checkbox--background--info--checked);--ix-checkbox--background--checked--hover:var(--ix-checkbox--background--info--checked--hover);--ix-checkbox--background--checked--active:var(--ix-checkbox--background--info--checked--active);--ix-checkbox--border-color--checked:var(--ix-checkbox--border-color--info--checked);--ix-checkbox--border-color--checked--hover:var(--ix-checkbox--border-color--info--checked--hover);--ix-checkbox--border-color--checked--active:var(--ix-checkbox--border-color--info--checked--active);background-color:var(--ix-checkbox--background--unchecked);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox--border-color--unchecked)}:host(.ix-info:hover) .checkbox-control{background-color:var(--ix-checkbox--background--unchecked--hover);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox--border-color--unchecked--hover)}:host(.ix-info:active) .checkbox-control{background-color:var(--ix-checkbox--background--unchecked--active);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox--border-color--unchecked--active)}:host(.ix-info.checked) .checkbox-control,:host(.ix-info.indeterminate) .checkbox-control{background-color:var(--ix-checkbox--background--checked);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox--border-color--checked)}:host(.ix-info.checked:hover) .checkbox-control,:host(.ix-info.indeterminate:hover) .checkbox-control{background-color:var(--ix-checkbox--background--checked--hover);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox--border-color--checked--hover)}:host(.ix-info.checked:active) .checkbox-control,:host(.ix-info.indeterminate:active) .checkbox-control{background-color:var(--ix-checkbox--background--checked--active);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox--border-color--checked--active)}:host(.ix-info.disabled) .checkbox-control{background-color:var(--ix-checkbox--background--unchecked--disabled);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox--border-color--unchecked--disabled)}:host(.ix-info.checked.disabled) .checkbox-control,:host(.ix-info.indeterminate.disabled) .checkbox-control{background-color:var(--ix-checkbox--background--checked--disabled);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox--border-color--checked--disabled)}:host(.ix-warning) .checkbox-control{--ix-checkbox--background--unchecked:var(--ix-checkbox--background--warning--unchecked);--ix-checkbox--background--unchecked--hover:var(--ix-checkbox--background--warning--unchecked--hover);--ix-checkbox--background--unchecked--active:var(--ix-checkbox--background--warning--unchecked--active);--ix-checkbox--border-color--unchecked:var(--ix-checkbox--border-color--warning--unchecked);--ix-checkbox--border-color--unchecked--hover:var(--ix-checkbox--border-color--warning--unchecked--hover);--ix-checkbox--border-color--unchecked--active:var(--ix-checkbox--border-color--warning--unchecked--active);--ix-checkbox--background--checked:var(--ix-checkbox--background--warning--checked);--ix-checkbox--background--checked--hover:var(--ix-checkbox--background--warning--checked--hover);--ix-checkbox--background--checked--active:var(--ix-checkbox--background--warning--checked--active);--ix-checkbox--border-color--checked:var(--ix-checkbox--border-color--warning--checked);--ix-checkbox--border-color--checked--hover:var(--ix-checkbox--border-color--warning--checked--hover);--ix-checkbox--border-color--checked--active:var(--ix-checkbox--border-color--warning--checked--active);background-color:var(--ix-checkbox--background--unchecked);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox--border-color--unchecked)}:host(.ix-warning:hover) .checkbox-control{background-color:var(--ix-checkbox--background--unchecked--hover);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox--border-color--unchecked--hover)}:host(.ix-warning:active) .checkbox-control{background-color:var(--ix-checkbox--background--unchecked--active);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox--border-color--unchecked--active)}:host(.ix-warning.checked) .checkbox-control,:host(.ix-warning.indeterminate) .checkbox-control{background-color:var(--ix-checkbox--background--checked);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox--border-color--checked)}:host(.ix-warning.checked:hover) .checkbox-control,:host(.ix-warning.indeterminate:hover) .checkbox-control{background-color:var(--ix-checkbox--background--checked--hover);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox--border-color--checked--hover)}:host(.ix-warning.checked:active) .checkbox-control,:host(.ix-warning.indeterminate:active) .checkbox-control{background-color:var(--ix-checkbox--background--checked--active);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox--border-color--checked--active)}:host(.ix-warning.disabled) .checkbox-control{background-color:var(--ix-checkbox--background--unchecked--disabled);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox--border-color--unchecked--disabled)}:host(.ix-warning.checked.disabled) .checkbox-control,:host(.ix-warning.indeterminate.disabled) .checkbox-control{background-color:var(--ix-checkbox--background--checked--disabled);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox--border-color--checked--disabled)}:host(.ix-invalid--required) .checkbox-control{--ix-checkbox--background--unchecked:var(--ix-checkbox--background--invalid--unchecked);--ix-checkbox--background--unchecked--hover:var(--ix-checkbox--background--invalid--unchecked--hover);--ix-checkbox--background--unchecked--active:var(--ix-checkbox--background--invalid--unchecked--active);--ix-checkbox--border-color--unchecked:var(--ix-checkbox--border-color--invalid--unchecked);--ix-checkbox--border-color--unchecked--hover:var(--ix-checkbox--border-color--invalid--unchecked--hover);--ix-checkbox--border-color--unchecked--active:var(--ix-checkbox--border-color--invalid--unchecked--active);--ix-checkbox--background--checked:var(--ix-checkbox--background--invalid--checked);--ix-checkbox--background--checked--hover:var(--ix-checkbox--background--invalid--checked--hover);--ix-checkbox--background--checked--active:var(--ix-checkbox--background--invalid--checked--active);--ix-checkbox--border-color--checked:var(--ix-checkbox--border-color--invalid--checked);--ix-checkbox--border-color--checked--hover:var(--ix-checkbox--border-color--invalid--checked--hover);--ix-checkbox--border-color--checked--active:var(--ix-checkbox--border-color--invalid--checked--active);background-color:var(--ix-checkbox--background--unchecked);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox--border-color--unchecked)}:host(.ix-invalid--required:hover) .checkbox-control{background-color:var(--ix-checkbox--background--unchecked--hover);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox--border-color--unchecked--hover)}:host(.ix-invalid--required:active) .checkbox-control{background-color:var(--ix-checkbox--background--unchecked--active);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox--border-color--unchecked--active)}:host(.ix-invalid--required.checked) .checkbox-control,:host(.ix-invalid--required.indeterminate) .checkbox-control{background-color:var(--ix-checkbox--background--checked);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox--border-color--checked)}:host(.ix-invalid--required.checked:hover) .checkbox-control,:host(.ix-invalid--required.indeterminate:hover) .checkbox-control{background-color:var(--ix-checkbox--background--checked--hover);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox--border-color--checked--hover)}:host(.ix-invalid--required.checked:active) .checkbox-control,:host(.ix-invalid--required.indeterminate:active) .checkbox-control{background-color:var(--ix-checkbox--background--checked--active);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox--border-color--checked--active)}:host(.ix-invalid--required.disabled) .checkbox-control{background-color:var(--ix-checkbox--background--unchecked--disabled);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox--border-color--unchecked--disabled)}:host(.ix-invalid--required.checked.disabled) .checkbox-control,:host(.ix-invalid--required.indeterminate.disabled) .checkbox-control{background-color:var(--ix-checkbox--background--checked--disabled);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox--border-color--checked--disabled)}:host(.ix-invalid) .checkbox-control{--ix-checkbox--background--unchecked:var(--ix-checkbox--background--invalid--unchecked);--ix-checkbox--background--unchecked--hover:var(--ix-checkbox--background--invalid--unchecked--hover);--ix-checkbox--background--unchecked--active:var(--ix-checkbox--background--invalid--unchecked--active);--ix-checkbox--border-color--unchecked:var(--ix-checkbox--border-color--invalid--unchecked);--ix-checkbox--border-color--unchecked--hover:var(--ix-checkbox--border-color--invalid--unchecked--hover);--ix-checkbox--border-color--unchecked--active:var(--ix-checkbox--border-color--invalid--unchecked--active);--ix-checkbox--background--checked:var(--ix-checkbox--background--invalid--checked);--ix-checkbox--background--checked--hover:var(--ix-checkbox--background--invalid--checked--hover);--ix-checkbox--background--checked--active:var(--ix-checkbox--background--invalid--checked--active);--ix-checkbox--border-color--checked:var(--ix-checkbox--border-color--invalid--checked);--ix-checkbox--border-color--checked--hover:var(--ix-checkbox--border-color--invalid--checked--hover);--ix-checkbox--border-color--checked--active:var(--ix-checkbox--border-color--invalid--checked--active);background-color:var(--ix-checkbox--background--unchecked);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox--border-color--unchecked)}:host(.ix-invalid:hover) .checkbox-control{background-color:var(--ix-checkbox--background--unchecked--hover);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox--border-color--unchecked--hover)}:host(.ix-invalid:active) .checkbox-control{background-color:var(--ix-checkbox--background--unchecked--active);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox--border-color--unchecked--active)}:host(.ix-invalid.checked) .checkbox-control,:host(.ix-invalid.indeterminate) .checkbox-control{background-color:var(--ix-checkbox--background--checked);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox--border-color--checked)}:host(.ix-invalid.checked:hover) .checkbox-control,:host(.ix-invalid.indeterminate:hover) .checkbox-control{background-color:var(--ix-checkbox--background--checked--hover);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox--border-color--checked--hover)}:host(.ix-invalid.checked:active) .checkbox-control,:host(.ix-invalid.indeterminate:active) .checkbox-control{background-color:var(--ix-checkbox--background--checked--active);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox--border-color--checked--active)}:host(.ix-invalid.disabled) .checkbox-control{background-color:var(--ix-checkbox--background--unchecked--disabled);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox--border-color--unchecked--disabled)}:host(.ix-invalid.checked.disabled) .checkbox-control,:host(.ix-invalid.indeterminate.disabled) .checkbox-control{background-color:var(--ix-checkbox--background--checked--disabled);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox--border-color--checked--disabled)}:host(.disabled){pointer-events:none}:host(.disabled) .checkbox-control,:host(.disabled) label,:host(.disabled) input{pointer-events:none}`;
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const Checkbox = class extends Mixin(...DefaultMixins, InheritAriaAttributesMixin) {
  constructor(hostRef) {
    super();
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
   * Name of the checkbox component
   */
  name;
  /**
   * Value of the checkbox component
   */
  value = "on";
  /**
   * Label for the checkbox component
   */
  label;
  /**
   * Checked state of the checkbox component
   */
  checked = false;
  /**
   * Disabled state of the checkbox component
   */
  disabled = false;
  /**
   * Indeterminate state of the checkbox component
   */
  indeterminate = false;
  /**
   * Required state of the checkbox component.
   *
   * If true, checkbox needs to be checked to be valid
   */
  required = false;
  /**
   * Event emitted when the checked state of the checkbox changes
   */
  checkedChange;
  /**
   * Event emitted when the value of the checkbox changes
   */
  valueChange;
  /**
   * Event emitted when the checkbox is blurred
   */
  ixBlur;
  touched = false;
  hasDefaultSlotElements = false;
  defaultSlotElement;
  inputRef = makeRef((checkboxRef) => {
    checkboxRef.checked = this.checked;
    checkboxRef.indeterminate = this.indeterminate;
  });
  setCheckedState(newChecked) {
    this.checked = newChecked;
    this.checkedChange.emit(this.checked);
  }
  onCheckedChange() {
    this.touched = true;
    this.updateFormInternalValue();
  }
  onValueChange() {
    this.valueChange.emit(this.value);
  }
  componentWillLoad() {
    super.componentWillLoad();
    this.updateFormInternalValue();
  }
  componentDidLoad() {
    this.updateDefaultSlotElements();
  }
  updateDefaultSlotElements() {
    this.hasDefaultSlotElements = hasSlottedContent(this.defaultSlotElement);
  }
  get isLabelLess() {
    return !this.label && !this.hasDefaultSlotElements;
  }
  updateFormInternalValue() {
    if (this.checked) {
      this.formInternals.setFormValue(this.value ?? "on");
    } else {
      this.formInternals.setFormValue(null);
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
  /** @internal */
  isTouched() {
    return Promise.resolve(this.touched);
  }
  updateClassMappings() {
  }
  renderCheckmark() {
    return h("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, this.indeterminate && h(Fragment, null, h("rect", { width: "18", height: "18", fill: "transparent" }), h("rect", { x: "3", y: "8", width: "12", height: "2", class: "checkmark" })), this.checked && h("path", { d: "M3.65625 8.15625L8.4375 12.9375L14.625 3.9375", class: "checkmark", "stroke-width": "2" }));
  }
  render() {
    return h(Host, { key: "3c9637e05961d20da357482907745bc76d3e4292", class: {
      disabled: this.disabled,
      checked: this.checked,
      indeterminate: this.indeterminate,
      "label-less": this.isLabelLess
    }, onFocus: () => this.touched = true, onBlur: () => this.ixBlur.emit() }, h("label", { key: "5cbc1242eef3a1944acc132f58a4216381c31baa" }, h("input", { key: "7ec8179bc6c442df7ebeb89f200d7dcd47049824", ...this.inheritAriaAttributes, "aria-checked": this.indeterminate ? "mixed" : a11yBoolean(this.checked), required: this.required, disabled: this.disabled, checked: this.checked, ref: this.inputRef, type: "checkbox", onChange: (event) => this.setCheckedState(event.currentTarget.checked) }), h("div", { key: "1e9328bb3cdefaf572c891a676ef07da00fce572", class: "checkbox-button" }, h("div", { key: "e83d1cbb1d276ee5658d88c98759f234279e12cc", "aria-hidden": "true", class: {
      "checkbox-control": true,
      checked: this.checked
    } }, this.renderCheckmark())), h("ix-typography", { key: "4a151d209d7ad6267b0f2a5c3119b3fc0e9799a6", format: "body", textColor: this.disabled ? "disabled" : "primary" }, this.label, h("slot", { key: "044ea0de1c1756e74de2ca33efde570d8565f81c", onSlotchange: () => this.updateDefaultSlotElements(), ref: (element) => this.defaultSlotElement = element }))));
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
__decorate([
  HookValidationLifecycle()
], Checkbox.prototype, "updateClassMappings", null);
Checkbox.style = checkboxCss();
export {
  Checkbox as ix_checkbox
};
