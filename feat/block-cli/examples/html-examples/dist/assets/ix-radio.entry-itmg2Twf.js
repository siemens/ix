import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-C_dy4gBz.js";
import { a as a11yBoolean } from "./a11y-B5k8YVR0-BOSd6BQK.js";
import { c as createClassMutationObserver } from "./validation-YeAaQqsK-CQfTnaKj.js";
const radioCss = () => `:host{display:inline-block;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .radio-checkmark{all:unset;display:inline-flex;position:relative;align-items:center;justify-content:center;width:1.125rem;min-width:1.125rem;max-width:1.125rem;height:1.125rem;min-height:1.125rem;max-height:1.125rem;border:1px solid white;border-radius:100px}:host .radio-button{height:1.5rem;width:1.5rem;display:flex;align-items:center;justify-content:center}:host label{display:flex;justify-content:flex-start;align-items:center;width:100%;height:100%}:host .checkmark{border-radius:100px;background-color:var(--theme-color-primary--contrast);width:0.5rem;height:0.5rem}:host .radio-checkmark{background-color:var(--theme-radiobtn-unchecked--background);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-unchecked--border-color)}:host(:hover) .radio-checkmark{background-color:var(--theme-radiobtn-unchecked--background--hover);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-unchecked--border-color--hover)}:host(:active) .radio-checkmark{background-color:var(--theme-radiobtn-unchecked--background--active);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-unchecked--border-color--active)}:host(.checked) .radio-checkmark,:host([indeterminate]) .radio-checkmark{background-color:var(--theme-radiobtn-checked--background);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-checked--border-color)}:host(.checked:hover) .radio-checkmark,:host([indeterminate]:hover) .radio-checkmark{background-color:var(--theme-radiobtn-checked--background--hover);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-checked--border-color--hover)}:host(.checked:active) .radio-checkmark,:host([indeterminate]:active) .radio-checkmark{background-color:var(--theme-radiobtn-checked--background--active);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-checked--border-color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .radio-checkmark{background-color:var(--theme-radiobtn-unchecked--background--disabled);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-unchecked--border-color--disabled)}:host(.checked.disabled) .radio-checkmark,:host([indeterminate].disabled) .radio-checkmark{background-color:var(--theme-radiobtn-checked--background--disabled);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-checked--border-color--disabled)}:host(:focus-visible){outline:0.0625rem solid var(--theme-color-focus-bdr);outline-offset:var(--theme-radiobtn--focus--outline-offset)}ix-typography{margin:0.125rem 0 0.125rem 0.5rem}:host(.ix-info:not(.disabled)) .radio-checkmark{--theme-radiobtn-unchecked--background:var(     --theme-radiobtn-unchecked--background--info   );--theme-radiobtn-unchecked--background--hover:var(     --theme-radiobtn-unchecked--background--info--hover   );--theme-radiobtn-unchecked--background--active:var(     --theme-radiobtn-unchecked--background--info--active   );--theme-radiobtn-unchecked--border-color:var(     --theme-radiobtn-unchecked--border-color--info   );--theme-radiobtn-unchecked--border-color--hover:var(     --theme-radiobtn-unchecked--border-color--info--hover   );--theme-radiobtn-unchecked--border-color--active:var(     --theme-radiobtn-unchecked--border-color--info--active   );--theme-radiobtn-checked--background:var(     --theme-radiobtn-checked--background--info   );--theme-radiobtn-checked--background--hover:var(     --theme-radiobtn-checked--background--info--hover   );--theme-radiobtn-checked--background--active:var(     --theme-radiobtn-checked--background--info--active   );--theme-radiobtn-checked--border-color:var(     --theme-radiobtn-checked--border-color--info   );--theme-radiobtn-checked--border-color--hover:var(     --theme-radiobtn-checked--border-color--info--hover   );--theme-radiobtn-checked--border-color--active:var(     --theme-radiobtn-checked--border-color--info--active   );--theme-radiobtn-mixed--background:var(     --theme-radiobtn-mixed--background--info   );--theme-radiobtn-mixed--background--hover:var(     --theme-radiobtn-mixed--background--info--hover   );--theme-radiobtn-mixed--background--active:var(     --theme-radiobtn-mixed--background--info--active   );--theme-radiobtn-mixed--border-color:var(     --theme-radiobtn-mixed--border-color--info   );--theme-radiobtn-mixed--border-color--hover:var(     --theme-radiobtn-mixed--border-color--info--hover   );--theme-radiobtn-mixed--border-color--active:var(     --theme-radiobtn-mixed--border-color--info--active   )}:host(.ix-info) .radio-checkmark{background-color:var(--theme-radiobtn-unchecked--background);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-unchecked--border-color)}:host(.ix-info:hover) .radio-checkmark{background-color:var(--theme-radiobtn-unchecked--background--hover);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-unchecked--border-color--hover)}:host(.ix-info:active) .radio-checkmark{background-color:var(--theme-radiobtn-unchecked--background--active);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-unchecked--border-color--active)}:host(.ix-info.checked) .radio-checkmark,:host(.ix-info[indeterminate]) .radio-checkmark{background-color:var(--theme-radiobtn-checked--background);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-checked--border-color)}:host(.ix-info.checked:hover) .radio-checkmark,:host(.ix-info[indeterminate]:hover) .radio-checkmark{background-color:var(--theme-radiobtn-checked--background--hover);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-checked--border-color--hover)}:host(.ix-info.checked:active) .radio-checkmark,:host(.ix-info[indeterminate]:active) .radio-checkmark{background-color:var(--theme-radiobtn-checked--background--active);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-checked--border-color--active)}:host(.ix-info.disabled) .radio-checkmark{background-color:var(--theme-radiobtn-unchecked--background--disabled);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-unchecked--border-color--disabled)}:host(.ix-info.checked.disabled) .radio-checkmark,:host(.ix-info[indeterminate].disabled) .radio-checkmark{background-color:var(--theme-radiobtn-checked--background--disabled);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-checked--border-color--disabled)}:host(.ix-warning:not(.disabled)) .radio-checkmark{--theme-radiobtn-unchecked--background:var(     --theme-radiobtn-unchecked--background--warning   );--theme-radiobtn-unchecked--background--hover:var(     --theme-radiobtn-unchecked--background--warning--hover   );--theme-radiobtn-unchecked--background--active:var(     --theme-radiobtn-unchecked--background--warning--active   );--theme-radiobtn-unchecked--border-color:var(     --theme-radiobtn-unchecked--border-color--warning   );--theme-radiobtn-unchecked--border-color--hover:var(     --theme-radiobtn-unchecked--border-color--warning--hover   );--theme-radiobtn-unchecked--border-color--active:var(     --theme-radiobtn-unchecked--border-color--warning--active   );--theme-radiobtn-checked--background:var(     --theme-radiobtn-checked--background--warning   );--theme-radiobtn-checked--background--hover:var(     --theme-radiobtn-checked--background--warning--hover   );--theme-radiobtn-checked--background--active:var(     --theme-radiobtn-checked--background--warning--active   );--theme-radiobtn-checked--border-color:var(     --theme-radiobtn-checked--border-color--warning   );--theme-radiobtn-checked--border-color--hover:var(     --theme-radiobtn-checked--border-color--warning--hover   );--theme-radiobtn-checked--border-color--active:var(     --theme-radiobtn-checked--border-color--warning--active   );--theme-radiobtn-mixed--background:var(     --theme-radiobtn-mixed--background--warning   );--theme-radiobtn-mixed--background--hover:var(     --theme-radiobtn-mixed--background--warning--hover   );--theme-radiobtn-mixed--background--active:var(     --theme-radiobtn-mixed--background--warning--active   );--theme-radiobtn-mixed--border-color:var(     --theme-radiobtn-mixed--border-color--warning   );--theme-radiobtn-mixed--border-color--hover:var(     --theme-radiobtn-mixed--border-color--warning--hover   );--theme-radiobtn-mixed--border-color--active:var(     --theme-radiobtn-mixed--border-color--warning--active   )}:host(.ix-warning) .radio-checkmark{background-color:var(--theme-radiobtn-unchecked--background);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-unchecked--border-color)}:host(.ix-warning:hover) .radio-checkmark{background-color:var(--theme-radiobtn-unchecked--background--hover);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-unchecked--border-color--hover)}:host(.ix-warning:active) .radio-checkmark{background-color:var(--theme-radiobtn-unchecked--background--active);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-unchecked--border-color--active)}:host(.ix-warning.checked) .radio-checkmark,:host(.ix-warning[indeterminate]) .radio-checkmark{background-color:var(--theme-radiobtn-checked--background);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-checked--border-color)}:host(.ix-warning.checked:hover) .radio-checkmark,:host(.ix-warning[indeterminate]:hover) .radio-checkmark{background-color:var(--theme-radiobtn-checked--background--hover);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-checked--border-color--hover)}:host(.ix-warning.checked:active) .radio-checkmark,:host(.ix-warning[indeterminate]:active) .radio-checkmark{background-color:var(--theme-radiobtn-checked--background--active);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-checked--border-color--active)}:host(.ix-warning.disabled) .radio-checkmark{background-color:var(--theme-radiobtn-unchecked--background--disabled);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-unchecked--border-color--disabled)}:host(.ix-warning.checked.disabled) .radio-checkmark,:host(.ix-warning[indeterminate].disabled) .radio-checkmark{background-color:var(--theme-radiobtn-checked--background--disabled);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-checked--border-color--disabled)}:host(.ix-invalid--required:not(.disabled)) .radio-checkmark{--theme-radiobtn-unchecked--background:var(     --theme-radiobtn-unchecked--background--invalid   );--theme-radiobtn-unchecked--background--hover:var(     --theme-radiobtn-unchecked--background--invalid--hover   );--theme-radiobtn-unchecked--background--active:var(     --theme-radiobtn-unchecked--background--invalid--active   );--theme-radiobtn-unchecked--border-color:var(     --theme-radiobtn-unchecked--border-color--invalid   );--theme-radiobtn-unchecked--border-color--hover:var(     --theme-radiobtn-unchecked--border-color--invalid--hover   );--theme-radiobtn-unchecked--border-color--active:var(     --theme-radiobtn-unchecked--border-color--invalid--active   );--theme-radiobtn-checked--background:var(     --theme-radiobtn-checked--background--invalid   );--theme-radiobtn-checked--background--hover:var(     --theme-radiobtn-checked--background--invalid--hover   );--theme-radiobtn-checked--background--active:var(     --theme-radiobtn-checked--background--invalid--active   );--theme-radiobtn-checked--border-color:var(     --theme-radiobtn-checked--border-color--invalid   );--theme-radiobtn-checked--border-color--hover:var(     --theme-radiobtn-checked--border-color--invalid--hover   );--theme-radiobtn-checked--border-color--active:var(     --theme-radiobtn-checked--border-color--invalid--active   );--theme-radiobtn-mixed--background:var(     --theme-radiobtn-mixed--background--invalid   );--theme-radiobtn-mixed--background--hover:var(     --theme-radiobtn-mixed--background--invalid--hover   );--theme-radiobtn-mixed--background--active:var(     --theme-radiobtn-mixed--background--invalid--active   );--theme-radiobtn-mixed--border-color:var(     --theme-radiobtn-mixed--border-color--invalid   );--theme-radiobtn-mixed--border-color--hover:var(     --theme-radiobtn-mixed--border-color--invalid--hover   );--theme-radiobtn-mixed--border-color--active:var(     --theme-radiobtn-mixed--border-color--invalid--active   )}:host(.ix-invalid--required) .radio-checkmark{background-color:var(--theme-radiobtn-unchecked--background);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-unchecked--border-color)}:host(.ix-invalid--required:hover) .radio-checkmark{background-color:var(--theme-radiobtn-unchecked--background--hover);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-unchecked--border-color--hover)}:host(.ix-invalid--required:active) .radio-checkmark{background-color:var(--theme-radiobtn-unchecked--background--active);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-unchecked--border-color--active)}:host(.ix-invalid--required.checked) .radio-checkmark,:host(.ix-invalid--required[indeterminate]) .radio-checkmark{background-color:var(--theme-radiobtn-checked--background);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-checked--border-color)}:host(.ix-invalid--required.checked:hover) .radio-checkmark,:host(.ix-invalid--required[indeterminate]:hover) .radio-checkmark{background-color:var(--theme-radiobtn-checked--background--hover);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-checked--border-color--hover)}:host(.ix-invalid--required.checked:active) .radio-checkmark,:host(.ix-invalid--required[indeterminate]:active) .radio-checkmark{background-color:var(--theme-radiobtn-checked--background--active);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-checked--border-color--active)}:host(.ix-invalid--required.disabled) .radio-checkmark{background-color:var(--theme-radiobtn-unchecked--background--disabled);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-unchecked--border-color--disabled)}:host(.ix-invalid--required.checked.disabled) .radio-checkmark,:host(.ix-invalid--required[indeterminate].disabled) .radio-checkmark{background-color:var(--theme-radiobtn-checked--background--disabled);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-checked--border-color--disabled)}:host(.ix-invalid:not(.disabled)) .radio-checkmark{--theme-radiobtn-unchecked--background:var(     --theme-radiobtn-unchecked--background--invalid   );--theme-radiobtn-unchecked--background--hover:var(     --theme-radiobtn-unchecked--background--invalid--hover   );--theme-radiobtn-unchecked--background--active:var(     --theme-radiobtn-unchecked--background--invalid--active   );--theme-radiobtn-unchecked--border-color:var(     --theme-radiobtn-unchecked--border-color--invalid   );--theme-radiobtn-unchecked--border-color--hover:var(     --theme-radiobtn-unchecked--border-color--invalid--hover   );--theme-radiobtn-unchecked--border-color--active:var(     --theme-radiobtn-unchecked--border-color--invalid--active   );--theme-radiobtn-checked--background:var(     --theme-radiobtn-checked--background--invalid   );--theme-radiobtn-checked--background--hover:var(     --theme-radiobtn-checked--background--invalid--hover   );--theme-radiobtn-checked--background--active:var(     --theme-radiobtn-checked--background--invalid--active   );--theme-radiobtn-checked--border-color:var(     --theme-radiobtn-checked--border-color--invalid   );--theme-radiobtn-checked--border-color--hover:var(     --theme-radiobtn-checked--border-color--invalid--hover   );--theme-radiobtn-checked--border-color--active:var(     --theme-radiobtn-checked--border-color--invalid--active   );--theme-radiobtn-mixed--background:var(     --theme-radiobtn-mixed--background--invalid   );--theme-radiobtn-mixed--background--hover:var(     --theme-radiobtn-mixed--background--invalid--hover   );--theme-radiobtn-mixed--background--active:var(     --theme-radiobtn-mixed--background--invalid--active   );--theme-radiobtn-mixed--border-color:var(     --theme-radiobtn-mixed--border-color--invalid   );--theme-radiobtn-mixed--border-color--hover:var(     --theme-radiobtn-mixed--border-color--invalid--hover   );--theme-radiobtn-mixed--border-color--active:var(     --theme-radiobtn-mixed--border-color--invalid--active   )}:host(.ix-invalid) .radio-checkmark{background-color:var(--theme-radiobtn-unchecked--background);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-unchecked--border-color)}:host(.ix-invalid:hover) .radio-checkmark{background-color:var(--theme-radiobtn-unchecked--background--hover);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-unchecked--border-color--hover)}:host(.ix-invalid:active) .radio-checkmark{background-color:var(--theme-radiobtn-unchecked--background--active);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-unchecked--border-color--active)}:host(.ix-invalid.checked) .radio-checkmark,:host(.ix-invalid[indeterminate]) .radio-checkmark{background-color:var(--theme-radiobtn-checked--background);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-checked--border-color)}:host(.ix-invalid.checked:hover) .radio-checkmark,:host(.ix-invalid[indeterminate]:hover) .radio-checkmark{background-color:var(--theme-radiobtn-checked--background--hover);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-checked--border-color--hover)}:host(.ix-invalid.checked:active) .radio-checkmark,:host(.ix-invalid[indeterminate]:active) .radio-checkmark{background-color:var(--theme-radiobtn-checked--background--active);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-checked--border-color--active)}:host(.ix-invalid.disabled) .radio-checkmark{background-color:var(--theme-radiobtn-unchecked--background--disabled);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-unchecked--border-color--disabled)}:host(.ix-invalid.checked.disabled) .radio-checkmark,:host(.ix-invalid[indeterminate].disabled) .radio-checkmark{background-color:var(--theme-radiobtn-checked--background--disabled);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-checked--border-color--disabled)}`;
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
   *
   * @since 3.0.0
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
    return h(Host, { key: "b8633a5a6a5273982a3d73d6b9581bc9fc7452d2", "aria-checked": a11yBoolean(this.checked), "aria-disabled": a11yBoolean(this.disabled), role: "radio", tabindex: tabIndex, class: {
      disabled: this.disabled,
      checked: this.checked
    }, onClick: () => {
      if (this.disabled)
        return;
      this.setCheckedState(true);
    }, onKeyDown: (event) => this.onKeyDown(event), onBlur: () => this.ixBlur.emit() }, h("label", { key: "da4367a9cab53b42d3a27e5e2ddad77de2470999" }, h("div", { key: "5110e9e60a9035265c8a31f0ec743dd4f0e18a1a", class: "radio-button" }, h("div", { key: "4e7397ee720732b8ac241ac005ade298e79668ed", "aria-hidden": "true", class: {
      ["radio-checkmark"]: true,
      checked: this.checked
    } }, h("div", { key: "531f2235bb865e344b8363aee1927f474deb817d", class: "checkmark", style: { visibility: this.checked ? "visible" : "hidden" } }))), this.label && h("ix-typography", { key: "377cb47cccbb7af09aca3ea85ab1ebd4d9fb0e9e", format: "label", textColor: this.disabled ? "weak" : "std" }, this.label, h("slot", { key: "b5c8f706a1ed835bfbd8d3f07f3dcea6075d1c8a" }))));
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
