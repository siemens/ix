import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global-BlVZeLef.js";
import { a as a11yBoolean } from "./a11y-DAzBNVe7-CO1Uj69l.js";
import { c as createClassMutationObserver } from "./validation-3877QBzA-Ffgo8PX7.js";
const radioCss = ":host{display:inline-block;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .radio-checkmark{all:unset;display:inline-flex;position:relative;align-items:center;justify-content:center;width:1.125rem;min-width:1.125rem;max-width:1.125rem;height:1.125rem;min-height:1.125rem;max-height:1.125rem;border:1px solid white;border-radius:100px}:host .radio-button{height:1.5rem;width:1.5rem;display:flex;align-items:center;justify-content:center}:host label{display:flex;justify-content:flex-start;align-items:center;width:100%;height:100%}:host .checkmark{border-radius:100px;background-color:var(--theme-color-primary--contrast);width:0.5rem;height:0.5rem}:host .radio-checkmark{background-color:var(--theme-radiobtn-unchecked--background);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-unchecked--border-color)}:host(:hover) .radio-checkmark{background-color:var(--theme-radiobtn-unchecked--background--hover);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-unchecked--border-color--hover)}:host(:active) .radio-checkmark{background-color:var(--theme-radiobtn-unchecked--background--active);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-unchecked--border-color--active)}:host(.checked) .radio-checkmark,:host([indeterminate]) .radio-checkmark{background-color:var(--theme-radiobtn-checked--background);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-checked--border-color)}:host(.checked:hover) .radio-checkmark,:host([indeterminate]:hover) .radio-checkmark{background-color:var(--theme-radiobtn-checked--background--hover);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-checked--border-color--hover)}:host(.checked:active) .radio-checkmark,:host([indeterminate]:active) .radio-checkmark{background-color:var(--theme-radiobtn-checked--background--active);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-checked--border-color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .radio-checkmark{background-color:var(--theme-radiobtn-unchecked--background--disabled);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-unchecked--border-color--disabled)}:host(.checked.disabled) .radio-checkmark,:host([indeterminate].disabled) .radio-checkmark{background-color:var(--theme-radiobtn-checked--background--disabled);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-checked--border-color--disabled)}:host(:focus-visible){outline:0.0625rem solid var(--theme-color-focus-bdr);outline-offset:var(--theme-radiobtn--focus--outline-offset)}ix-typography{margin:0.125rem 0 0.125rem 0.5rem}:host(.ix-info:not(.disabled)) .radio-checkmark{--theme-radiobtn-unchecked--background:var(\n    --theme-radiobtn-unchecked--background--info\n  );--theme-radiobtn-unchecked--background--hover:var(\n    --theme-radiobtn-unchecked--background--info--hover\n  );--theme-radiobtn-unchecked--background--active:var(\n    --theme-radiobtn-unchecked--background--info--active\n  );--theme-radiobtn-unchecked--border-color:var(\n    --theme-radiobtn-unchecked--border-color--info\n  );--theme-radiobtn-unchecked--border-color--hover:var(\n    --theme-radiobtn-unchecked--border-color--info--hover\n  );--theme-radiobtn-unchecked--border-color--active:var(\n    --theme-radiobtn-unchecked--border-color--info--active\n  );--theme-radiobtn-checked--background:var(\n    --theme-radiobtn-checked--background--info\n  );--theme-radiobtn-checked--background--hover:var(\n    --theme-radiobtn-checked--background--info--hover\n  );--theme-radiobtn-checked--background--active:var(\n    --theme-radiobtn-checked--background--info--active\n  );--theme-radiobtn-checked--border-color:var(\n    --theme-radiobtn-checked--border-color--info\n  );--theme-radiobtn-checked--border-color--hover:var(\n    --theme-radiobtn-checked--border-color--info--hover\n  );--theme-radiobtn-checked--border-color--active:var(\n    --theme-radiobtn-checked--border-color--info--active\n  );--theme-radiobtn-mixed--background:var(\n    --theme-radiobtn-mixed--background--info\n  );--theme-radiobtn-mixed--background--hover:var(\n    --theme-radiobtn-mixed--background--info--hover\n  );--theme-radiobtn-mixed--background--active:var(\n    --theme-radiobtn-mixed--background--info--active\n  );--theme-radiobtn-mixed--border-color:var(\n    --theme-radiobtn-mixed--border-color--info\n  );--theme-radiobtn-mixed--border-color--hover:var(\n    --theme-radiobtn-mixed--border-color--info--hover\n  );--theme-radiobtn-mixed--border-color--active:var(\n    --theme-radiobtn-mixed--border-color--info--active\n  )}:host(.ix-info) .radio-checkmark{background-color:var(--theme-radiobtn-unchecked--background);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-unchecked--border-color)}:host(.ix-info:hover) .radio-checkmark{background-color:var(--theme-radiobtn-unchecked--background--hover);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-unchecked--border-color--hover)}:host(.ix-info:active) .radio-checkmark{background-color:var(--theme-radiobtn-unchecked--background--active);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-unchecked--border-color--active)}:host(.ix-info.checked) .radio-checkmark,:host(.ix-info[indeterminate]) .radio-checkmark{background-color:var(--theme-radiobtn-checked--background);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-checked--border-color)}:host(.ix-info.checked:hover) .radio-checkmark,:host(.ix-info[indeterminate]:hover) .radio-checkmark{background-color:var(--theme-radiobtn-checked--background--hover);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-checked--border-color--hover)}:host(.ix-info.checked:active) .radio-checkmark,:host(.ix-info[indeterminate]:active) .radio-checkmark{background-color:var(--theme-radiobtn-checked--background--active);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-checked--border-color--active)}:host(.ix-info.disabled) .radio-checkmark{background-color:var(--theme-radiobtn-unchecked--background--disabled);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-unchecked--border-color--disabled)}:host(.ix-info.checked.disabled) .radio-checkmark,:host(.ix-info[indeterminate].disabled) .radio-checkmark{background-color:var(--theme-radiobtn-checked--background--disabled);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-checked--border-color--disabled)}:host(.ix-warning:not(.disabled)) .radio-checkmark{--theme-radiobtn-unchecked--background:var(\n    --theme-radiobtn-unchecked--background--warning\n  );--theme-radiobtn-unchecked--background--hover:var(\n    --theme-radiobtn-unchecked--background--warning--hover\n  );--theme-radiobtn-unchecked--background--active:var(\n    --theme-radiobtn-unchecked--background--warning--active\n  );--theme-radiobtn-unchecked--border-color:var(\n    --theme-radiobtn-unchecked--border-color--warning\n  );--theme-radiobtn-unchecked--border-color--hover:var(\n    --theme-radiobtn-unchecked--border-color--warning--hover\n  );--theme-radiobtn-unchecked--border-color--active:var(\n    --theme-radiobtn-unchecked--border-color--warning--active\n  );--theme-radiobtn-checked--background:var(\n    --theme-radiobtn-checked--background--warning\n  );--theme-radiobtn-checked--background--hover:var(\n    --theme-radiobtn-checked--background--warning--hover\n  );--theme-radiobtn-checked--background--active:var(\n    --theme-radiobtn-checked--background--warning--active\n  );--theme-radiobtn-checked--border-color:var(\n    --theme-radiobtn-checked--border-color--warning\n  );--theme-radiobtn-checked--border-color--hover:var(\n    --theme-radiobtn-checked--border-color--warning--hover\n  );--theme-radiobtn-checked--border-color--active:var(\n    --theme-radiobtn-checked--border-color--warning--active\n  );--theme-radiobtn-mixed--background:var(\n    --theme-radiobtn-mixed--background--warning\n  );--theme-radiobtn-mixed--background--hover:var(\n    --theme-radiobtn-mixed--background--warning--hover\n  );--theme-radiobtn-mixed--background--active:var(\n    --theme-radiobtn-mixed--background--warning--active\n  );--theme-radiobtn-mixed--border-color:var(\n    --theme-radiobtn-mixed--border-color--warning\n  );--theme-radiobtn-mixed--border-color--hover:var(\n    --theme-radiobtn-mixed--border-color--warning--hover\n  );--theme-radiobtn-mixed--border-color--active:var(\n    --theme-radiobtn-mixed--border-color--warning--active\n  )}:host(.ix-warning) .radio-checkmark{background-color:var(--theme-radiobtn-unchecked--background);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-unchecked--border-color)}:host(.ix-warning:hover) .radio-checkmark{background-color:var(--theme-radiobtn-unchecked--background--hover);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-unchecked--border-color--hover)}:host(.ix-warning:active) .radio-checkmark{background-color:var(--theme-radiobtn-unchecked--background--active);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-unchecked--border-color--active)}:host(.ix-warning.checked) .radio-checkmark,:host(.ix-warning[indeterminate]) .radio-checkmark{background-color:var(--theme-radiobtn-checked--background);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-checked--border-color)}:host(.ix-warning.checked:hover) .radio-checkmark,:host(.ix-warning[indeterminate]:hover) .radio-checkmark{background-color:var(--theme-radiobtn-checked--background--hover);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-checked--border-color--hover)}:host(.ix-warning.checked:active) .radio-checkmark,:host(.ix-warning[indeterminate]:active) .radio-checkmark{background-color:var(--theme-radiobtn-checked--background--active);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-checked--border-color--active)}:host(.ix-warning.disabled) .radio-checkmark{background-color:var(--theme-radiobtn-unchecked--background--disabled);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-unchecked--border-color--disabled)}:host(.ix-warning.checked.disabled) .radio-checkmark,:host(.ix-warning[indeterminate].disabled) .radio-checkmark{background-color:var(--theme-radiobtn-checked--background--disabled);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-checked--border-color--disabled)}:host(.ix-invalid--required:not(.disabled)) .radio-checkmark{--theme-radiobtn-unchecked--background:var(\n    --theme-radiobtn-unchecked--background--invalid\n  );--theme-radiobtn-unchecked--background--hover:var(\n    --theme-radiobtn-unchecked--background--invalid--hover\n  );--theme-radiobtn-unchecked--background--active:var(\n    --theme-radiobtn-unchecked--background--invalid--active\n  );--theme-radiobtn-unchecked--border-color:var(\n    --theme-radiobtn-unchecked--border-color--invalid\n  );--theme-radiobtn-unchecked--border-color--hover:var(\n    --theme-radiobtn-unchecked--border-color--invalid--hover\n  );--theme-radiobtn-unchecked--border-color--active:var(\n    --theme-radiobtn-unchecked--border-color--invalid--active\n  );--theme-radiobtn-checked--background:var(\n    --theme-radiobtn-checked--background--invalid\n  );--theme-radiobtn-checked--background--hover:var(\n    --theme-radiobtn-checked--background--invalid--hover\n  );--theme-radiobtn-checked--background--active:var(\n    --theme-radiobtn-checked--background--invalid--active\n  );--theme-radiobtn-checked--border-color:var(\n    --theme-radiobtn-checked--border-color--invalid\n  );--theme-radiobtn-checked--border-color--hover:var(\n    --theme-radiobtn-checked--border-color--invalid--hover\n  );--theme-radiobtn-checked--border-color--active:var(\n    --theme-radiobtn-checked--border-color--invalid--active\n  );--theme-radiobtn-mixed--background:var(\n    --theme-radiobtn-mixed--background--invalid\n  );--theme-radiobtn-mixed--background--hover:var(\n    --theme-radiobtn-mixed--background--invalid--hover\n  );--theme-radiobtn-mixed--background--active:var(\n    --theme-radiobtn-mixed--background--invalid--active\n  );--theme-radiobtn-mixed--border-color:var(\n    --theme-radiobtn-mixed--border-color--invalid\n  );--theme-radiobtn-mixed--border-color--hover:var(\n    --theme-radiobtn-mixed--border-color--invalid--hover\n  );--theme-radiobtn-mixed--border-color--active:var(\n    --theme-radiobtn-mixed--border-color--invalid--active\n  )}:host(.ix-invalid--required) .radio-checkmark{background-color:var(--theme-radiobtn-unchecked--background);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-unchecked--border-color)}:host(.ix-invalid--required:hover) .radio-checkmark{background-color:var(--theme-radiobtn-unchecked--background--hover);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-unchecked--border-color--hover)}:host(.ix-invalid--required:active) .radio-checkmark{background-color:var(--theme-radiobtn-unchecked--background--active);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-unchecked--border-color--active)}:host(.ix-invalid--required.checked) .radio-checkmark,:host(.ix-invalid--required[indeterminate]) .radio-checkmark{background-color:var(--theme-radiobtn-checked--background);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-checked--border-color)}:host(.ix-invalid--required.checked:hover) .radio-checkmark,:host(.ix-invalid--required[indeterminate]:hover) .radio-checkmark{background-color:var(--theme-radiobtn-checked--background--hover);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-checked--border-color--hover)}:host(.ix-invalid--required.checked:active) .radio-checkmark,:host(.ix-invalid--required[indeterminate]:active) .radio-checkmark{background-color:var(--theme-radiobtn-checked--background--active);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-checked--border-color--active)}:host(.ix-invalid--required.disabled) .radio-checkmark{background-color:var(--theme-radiobtn-unchecked--background--disabled);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-unchecked--border-color--disabled)}:host(.ix-invalid--required.checked.disabled) .radio-checkmark,:host(.ix-invalid--required[indeterminate].disabled) .radio-checkmark{background-color:var(--theme-radiobtn-checked--background--disabled);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-checked--border-color--disabled)}:host(.ix-invalid:not(.disabled)) .radio-checkmark{--theme-radiobtn-unchecked--background:var(\n    --theme-radiobtn-unchecked--background--invalid\n  );--theme-radiobtn-unchecked--background--hover:var(\n    --theme-radiobtn-unchecked--background--invalid--hover\n  );--theme-radiobtn-unchecked--background--active:var(\n    --theme-radiobtn-unchecked--background--invalid--active\n  );--theme-radiobtn-unchecked--border-color:var(\n    --theme-radiobtn-unchecked--border-color--invalid\n  );--theme-radiobtn-unchecked--border-color--hover:var(\n    --theme-radiobtn-unchecked--border-color--invalid--hover\n  );--theme-radiobtn-unchecked--border-color--active:var(\n    --theme-radiobtn-unchecked--border-color--invalid--active\n  );--theme-radiobtn-checked--background:var(\n    --theme-radiobtn-checked--background--invalid\n  );--theme-radiobtn-checked--background--hover:var(\n    --theme-radiobtn-checked--background--invalid--hover\n  );--theme-radiobtn-checked--background--active:var(\n    --theme-radiobtn-checked--background--invalid--active\n  );--theme-radiobtn-checked--border-color:var(\n    --theme-radiobtn-checked--border-color--invalid\n  );--theme-radiobtn-checked--border-color--hover:var(\n    --theme-radiobtn-checked--border-color--invalid--hover\n  );--theme-radiobtn-checked--border-color--active:var(\n    --theme-radiobtn-checked--border-color--invalid--active\n  );--theme-radiobtn-mixed--background:var(\n    --theme-radiobtn-mixed--background--invalid\n  );--theme-radiobtn-mixed--background--hover:var(\n    --theme-radiobtn-mixed--background--invalid--hover\n  );--theme-radiobtn-mixed--background--active:var(\n    --theme-radiobtn-mixed--background--invalid--active\n  );--theme-radiobtn-mixed--border-color:var(\n    --theme-radiobtn-mixed--border-color--invalid\n  );--theme-radiobtn-mixed--border-color--hover:var(\n    --theme-radiobtn-mixed--border-color--invalid--hover\n  );--theme-radiobtn-mixed--border-color--active:var(\n    --theme-radiobtn-mixed--border-color--invalid--active\n  )}:host(.ix-invalid) .radio-checkmark{background-color:var(--theme-radiobtn-unchecked--background);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-unchecked--border-color)}:host(.ix-invalid:hover) .radio-checkmark{background-color:var(--theme-radiobtn-unchecked--background--hover);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-unchecked--border-color--hover)}:host(.ix-invalid:active) .radio-checkmark{background-color:var(--theme-radiobtn-unchecked--background--active);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-unchecked--border-color--active)}:host(.ix-invalid.checked) .radio-checkmark,:host(.ix-invalid[indeterminate]) .radio-checkmark{background-color:var(--theme-radiobtn-checked--background);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-checked--border-color)}:host(.ix-invalid.checked:hover) .radio-checkmark,:host(.ix-invalid[indeterminate]:hover) .radio-checkmark{background-color:var(--theme-radiobtn-checked--background--hover);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-checked--border-color--hover)}:host(.ix-invalid.checked:active) .radio-checkmark,:host(.ix-invalid[indeterminate]:active) .radio-checkmark{background-color:var(--theme-radiobtn-checked--background--active);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-checked--border-color--active)}:host(.ix-invalid.disabled) .radio-checkmark{background-color:var(--theme-radiobtn-unchecked--background--disabled);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-unchecked--border-color--disabled)}:host(.ix-invalid.checked.disabled) .radio-checkmark,:host(.ix-invalid[indeterminate].disabled) .radio-checkmark{background-color:var(--theme-radiobtn-checked--background--disabled);border:var(--theme-radiobtn--border-thickness) solid var(--theme-radiobtn-checked--border-color--disabled)}";
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
    this.disabled = false;
    this.checked = false;
    this.required = false;
  }
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
    var _a;
    if (this.checked) {
      this.formInternals.setFormValue((_a = this.value) !== null && _a !== void 0 ? _a : "on");
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
        closestRadioGroup === null || closestRadioGroup === void 0 ? void 0 : closestRadioGroup.setCheckedToNextItem(this.hostElement, false);
        break;
      case "ArrowDown":
      case "ArrowRight":
        preventEvent = true;
        closestRadioGroup === null || closestRadioGroup === void 0 ? void 0 : closestRadioGroup.setCheckedToNextItem(this.hostElement, true);
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
    return h(Host, { key: "5206d8c46e7ed2b345f114edf23a9fd6e736a4b9", "aria-checked": a11yBoolean(this.checked), "aria-disabled": a11yBoolean(this.disabled), role: "radio", tabindex: tabIndex, class: {
      disabled: this.disabled,
      checked: this.checked
    }, onClick: () => {
      if (this.disabled)
        return;
      this.setCheckedState(true);
    }, onKeyDown: (event) => this.onKeyDown(event), onBlur: () => this.ixBlur.emit() }, h("label", { key: "f5ea4250356181fc1c5e94b4429e2a40b476bbec" }, h("div", { key: "9ca0585b76a27997d7ea35d663bfafb78d521c2f", class: "radio-button" }, h("div", { key: "c6992bba4c89692c8325e4e412adb3a10681a4ad", "aria-hidden": "true", class: {
      ["radio-checkmark"]: true,
      checked: this.checked
    } }, h("div", { key: "fd99b059da7283c7adf02b4e6a62ea0bbebc9ce8", class: "checkmark", style: { visibility: this.checked ? "visible" : "hidden" } }))), this.label && h("ix-typography", { key: "e6cb2b670917f873b9965bc5cdbb9ecb3ea74a5a", format: "label", textColor: this.disabled ? "weak" : "std" }, this.label, h("slot", { key: "72dff82562f85b35897942d215b4e298304ee5cd" }))));
  }
  static get formAssociated() {
    return true;
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "checked": ["onCheckedChange"],
      "value": ["onValueChange"]
    };
  }
};
Radio.style = radioCss;
export {
  Radio as ix_radio
};
