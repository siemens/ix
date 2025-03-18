import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global.78f61b49.js";
import { a as a11yBoolean } from "./a11y-Bb7pDeaQ.1f74cdb9.js";
const toggleCss = ':host{display:inline-flex;flex-direction:row;position:relative;height:1.5rem;margin-block-start:0.25rem;margin-block-end:0.25rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host input[type=checkbox]{display:none}:host .wrapper{display:flex;align-items:flex-start;width:100%;height:100%}:host .label{display:inline-block;white-space:normal;overflow:hidden;text-overflow:ellipsis;margin-block-start:0.125rem;margin-inline-start:0.5625rem}:host .switch{all:unset;position:relative;display:inline-block;width:3rem;min-width:3rem;max-width:3rem;height:1.5rem}:host .slider{position:absolute;top:0;left:0;right:0;bottom:0;background-color:var(--theme-switch-off--background);transition:var(--theme-default-time);border-radius:1.5rem;border:0.0625rem solid transparent}:host .slider:before{position:absolute;content:"";height:1.125rem;width:1.125rem;left:0.125rem;bottom:0.125rem;background-color:var(--theme-switch-thumb-off--background);transition:var(--theme-default-time);border-radius:50%}:host .switch.checked>.slider::before{background-color:var(--theme-switch-thumb-on--background);transform:translateX(1.5rem)}:host .switch>.slider{border-color:var(--theme-switch-off--border-color)}:host .switch:hover>.slider{background-color:var(--theme-switch-off--background--hover);border-color:var(--theme-switch-off--border-color--hover)}:host .switch:hover>.slider:before{background-color:var(--theme-switch-thumb-off--background--hover)}:host .switch:active>.slider{background-color:var(--theme-switch-off--background--active);border-color:var(--theme-switch-off--border-color--active)}:host .switch:active>.slider:before{background-color:var(--theme-switch-thumb-off--background--active)}:host .switch.checked>.slider{background-color:var(--theme-switch-on--background);border-color:var(--theme-switch-on--border-color)}:host .switch.checked:hover>.slider{background-color:var(--theme-switch-on--background--hover);border-color:var(--theme-switch-on--border-color--hover)}:host .switch.checked:hover>.slider:before{background-color:var(--theme-switch-thumb-on--background--hover)}:host .switch.checked:active>.slider{background-color:var(--theme-switch-on--background--active);border-color:var(--theme-switch-on--border-color--active)}:host .switch.checked:active>.slider:before{background-color:var(--theme-switch-thumb-on--background--active)}:host .switch.indeterminate>.slider::before{transform:translateX(0.75rem)}:host(:not(.disabled)) .wrapper{cursor:pointer}:host(:not(.disabled)) .switch:focus-visible>.slider{outline:0.0625rem solid var(--theme-color-focus-bdr);outline-offset:0.0625rem}:host(.disabled){pointer-events:none}:host(.disabled) .switch{opacity:0.5}:host(.disabled) .switch>.slider{background-color:var(--theme-switch-off--background--disabled)}:host(.disabled) .switch>.slider:before{background-color:var(--theme-switch-thumb-off--background--disabled)}:host(.disabled) .switch.checked>.slider{background-color:var(--theme-switch-on--background--disabled)}:host(.disabled) .switch.checked>.slider:before{background-color:var(--theme-switch-thumb-on--background--disabled)}:host(.disabled) .label{color:var(--theme-color-weak-text)}:host(.ix-info:not(.disabled)) .slider{--theme-switch-off--background:var(\n    --theme-switch-off--background--info\n  );--theme-switch-off--background--hover:var(\n    --theme-switch-off--background--info--hover\n  );--theme-switch-off--background--active:var(\n    --theme-switch-off--background--info--active\n  );--theme-switch-thumb-off--background:var(\n    --theme-switch-thumb-off--background--info\n  );--theme-switch-thumb-off--background--hover:var(\n    --theme-switch-thumb-off--background--info--hover\n  );--theme-switch-thumb-off--background--active:var(\n    --theme-switch-thumb-off--background--info--active\n  );--theme-switch-off--border-color:var(\n    --theme-switch-off--border-color--info\n  );--theme-switch-off--border-color--hover:var(\n    --theme-switch-off--border-color--info--hover\n  );--theme-switch-off--border-color--active:var(\n    --theme-switch-off--border-color--info--active\n  );--theme-switch-on--background:var(\n    --theme-switch-on--background--info\n  );--theme-switch-on--background--hover:var(\n    --theme-switch-on--background--info--hover\n  );--theme-switch-on--background--active:var(\n    --theme-switch-on--background--info--active\n  );--theme-switch-thumb-on--background:var(\n    --theme-switch-thumb-on--background--info\n  );--theme-switch-thumb-on--background--hover:var(\n    --theme-switch-thumb-on--background--info--hover\n  );--theme-switch-thumb-on--background--active:var(\n    --theme-switch-thumb-on--background--info--active\n  );--theme-switch-on--border-color:var(\n    --theme-switch-on--border-color--info\n  );--theme-switch-on--border-color--hover:var(\n    --theme-switch-on--border-color--info--hover\n  );--theme-switch-on--border-color--active:var(\n    --theme-switch-on--border-color--info--active\n  );--theme-switch-mixed--background:var(\n    --theme-switch-mixed--background--info\n  );--theme-switch-mixed--background--hover:var(\n    --theme-switch-mixed--background--info--hover\n  );--theme-switch-mixed--background--active:var(\n    --theme-switch-mixed--background--info--active\n  );--theme-switch-thumb-mixed--background:var(\n    --theme-switch-thumb-mixed--background--info\n  );--theme-switch-thumb-mixed--background--hover:var(\n    --theme-switch-thumb-mixed--background--info--hover\n  );--theme-switch-thumb-mixed--background--active:var(\n    --theme-switch-thumb-mixed--background--info--active\n  );--theme-switch-mixed--border-color:var(\n    --theme-switch-mixed--border-color--info\n  );--theme-switch-mixed--border-color--hover:var(\n    --theme-switch-mixed--border-color--info--hover\n  );--theme-switch-mixed--border-color--active:var(\n    --theme-switch-mixed--border-color--info--active\n  )}:host(.ix-warning:not(.disabled)) .slider{--theme-switch-off--background:var(\n    --theme-switch-off--background--warning\n  );--theme-switch-off--background--hover:var(\n    --theme-switch-off--background--warning--hover\n  );--theme-switch-off--background--active:var(\n    --theme-switch-off--background--warning--active\n  );--theme-switch-thumb-off--background:var(\n    --theme-switch-thumb-off--background--warning\n  );--theme-switch-thumb-off--background--hover:var(\n    --theme-switch-thumb-off--background--warning--hover\n  );--theme-switch-thumb-off--background--active:var(\n    --theme-switch-thumb-off--background--warning--active\n  );--theme-switch-off--border-color:var(\n    --theme-switch-off--border-color--warning\n  );--theme-switch-off--border-color--hover:var(\n    --theme-switch-off--border-color--warning--hover\n  );--theme-switch-off--border-color--active:var(\n    --theme-switch-off--border-color--warning--active\n  );--theme-switch-on--background:var(\n    --theme-switch-on--background--warning\n  );--theme-switch-on--background--hover:var(\n    --theme-switch-on--background--warning--hover\n  );--theme-switch-on--background--active:var(\n    --theme-switch-on--background--warning--active\n  );--theme-switch-thumb-on--background:var(\n    --theme-switch-thumb-on--background--warning\n  );--theme-switch-thumb-on--background--hover:var(\n    --theme-switch-thumb-on--background--warning--hover\n  );--theme-switch-thumb-on--background--active:var(\n    --theme-switch-thumb-on--background--warning--active\n  );--theme-switch-on--border-color:var(\n    --theme-switch-on--border-color--warning\n  );--theme-switch-on--border-color--hover:var(\n    --theme-switch-on--border-color--warning--hover\n  );--theme-switch-on--border-color--active:var(\n    --theme-switch-on--border-color--warning--active\n  );--theme-switch-mixed--background:var(\n    --theme-switch-mixed--background--warning\n  );--theme-switch-mixed--background--hover:var(\n    --theme-switch-mixed--background--warning--hover\n  );--theme-switch-mixed--background--active:var(\n    --theme-switch-mixed--background--warning--active\n  );--theme-switch-thumb-mixed--background:var(\n    --theme-switch-thumb-mixed--background--warning\n  );--theme-switch-thumb-mixed--background--hover:var(\n    --theme-switch-thumb-mixed--background--warning--hover\n  );--theme-switch-thumb-mixed--background--active:var(\n    --theme-switch-thumb-mixed--background--warning--active\n  );--theme-switch-mixed--border-color:var(\n    --theme-switch-mixed--border-color--warning\n  );--theme-switch-mixed--border-color--hover:var(\n    --theme-switch-mixed--border-color--warning--hover\n  );--theme-switch-mixed--border-color--active:var(\n    --theme-switch-mixed--border-color--warning--active\n  )}:host(.ix-invalid--required:not(.disabled)) .slider{--theme-switch-off--background:var(\n    --theme-switch-off--background--invalid\n  );--theme-switch-off--background--hover:var(\n    --theme-switch-off--background--invalid--hover\n  );--theme-switch-off--background--active:var(\n    --theme-switch-off--background--invalid--active\n  );--theme-switch-thumb-off--background:var(\n    --theme-switch-thumb-off--background--invalid\n  );--theme-switch-thumb-off--background--hover:var(\n    --theme-switch-thumb-off--background--invalid--hover\n  );--theme-switch-thumb-off--background--active:var(\n    --theme-switch-thumb-off--background--invalid--active\n  );--theme-switch-off--border-color:var(\n    --theme-switch-off--border-color--invalid\n  );--theme-switch-off--border-color--hover:var(\n    --theme-switch-off--border-color--invalid--hover\n  );--theme-switch-off--border-color--active:var(\n    --theme-switch-off--border-color--invalid--active\n  );--theme-switch-on--background:var(\n    --theme-switch-on--background--invalid\n  );--theme-switch-on--background--hover:var(\n    --theme-switch-on--background--invalid--hover\n  );--theme-switch-on--background--active:var(\n    --theme-switch-on--background--invalid--active\n  );--theme-switch-thumb-on--background:var(\n    --theme-switch-thumb-on--background--invalid\n  );--theme-switch-thumb-on--background--hover:var(\n    --theme-switch-thumb-on--background--invalid--hover\n  );--theme-switch-thumb-on--background--active:var(\n    --theme-switch-thumb-on--background--invalid--active\n  );--theme-switch-on--border-color:var(\n    --theme-switch-on--border-color--invalid\n  );--theme-switch-on--border-color--hover:var(\n    --theme-switch-on--border-color--invalid--hover\n  );--theme-switch-on--border-color--active:var(\n    --theme-switch-on--border-color--invalid--active\n  );--theme-switch-mixed--background:var(\n    --theme-switch-mixed--background--invalid\n  );--theme-switch-mixed--background--hover:var(\n    --theme-switch-mixed--background--invalid--hover\n  );--theme-switch-mixed--background--active:var(\n    --theme-switch-mixed--background--invalid--active\n  );--theme-switch-thumb-mixed--background:var(\n    --theme-switch-thumb-mixed--background--invalid\n  );--theme-switch-thumb-mixed--background--hover:var(\n    --theme-switch-thumb-mixed--background--invalid--hover\n  );--theme-switch-thumb-mixed--background--active:var(\n    --theme-switch-thumb-mixed--background--invalid--active\n  );--theme-switch-mixed--border-color:var(\n    --theme-switch-mixed--border-color--invalid\n  );--theme-switch-mixed--border-color--hover:var(\n    --theme-switch-mixed--border-color--invalid--hover\n  );--theme-switch-mixed--border-color--active:var(\n    --theme-switch-mixed--border-color--invalid--active\n  )}:host(.ix-invalid:not(.disabled)) .slider{--theme-switch-off--background:var(\n    --theme-switch-off--background--invalid\n  );--theme-switch-off--background--hover:var(\n    --theme-switch-off--background--invalid--hover\n  );--theme-switch-off--background--active:var(\n    --theme-switch-off--background--invalid--active\n  );--theme-switch-thumb-off--background:var(\n    --theme-switch-thumb-off--background--invalid\n  );--theme-switch-thumb-off--background--hover:var(\n    --theme-switch-thumb-off--background--invalid--hover\n  );--theme-switch-thumb-off--background--active:var(\n    --theme-switch-thumb-off--background--invalid--active\n  );--theme-switch-off--border-color:var(\n    --theme-switch-off--border-color--invalid\n  );--theme-switch-off--border-color--hover:var(\n    --theme-switch-off--border-color--invalid--hover\n  );--theme-switch-off--border-color--active:var(\n    --theme-switch-off--border-color--invalid--active\n  );--theme-switch-on--background:var(\n    --theme-switch-on--background--invalid\n  );--theme-switch-on--background--hover:var(\n    --theme-switch-on--background--invalid--hover\n  );--theme-switch-on--background--active:var(\n    --theme-switch-on--background--invalid--active\n  );--theme-switch-thumb-on--background:var(\n    --theme-switch-thumb-on--background--invalid\n  );--theme-switch-thumb-on--background--hover:var(\n    --theme-switch-thumb-on--background--invalid--hover\n  );--theme-switch-thumb-on--background--active:var(\n    --theme-switch-thumb-on--background--invalid--active\n  );--theme-switch-on--border-color:var(\n    --theme-switch-on--border-color--invalid\n  );--theme-switch-on--border-color--hover:var(\n    --theme-switch-on--border-color--invalid--hover\n  );--theme-switch-on--border-color--active:var(\n    --theme-switch-on--border-color--invalid--active\n  );--theme-switch-mixed--background:var(\n    --theme-switch-mixed--background--invalid\n  );--theme-switch-mixed--background--hover:var(\n    --theme-switch-mixed--background--invalid--hover\n  );--theme-switch-mixed--background--active:var(\n    --theme-switch-mixed--background--invalid--active\n  );--theme-switch-thumb-mixed--background:var(\n    --theme-switch-thumb-mixed--background--invalid\n  );--theme-switch-thumb-mixed--background--hover:var(\n    --theme-switch-thumb-mixed--background--invalid--hover\n  );--theme-switch-thumb-mixed--background--active:var(\n    --theme-switch-thumb-mixed--background--invalid--active\n  );--theme-switch-mixed--border-color:var(\n    --theme-switch-mixed--border-color--invalid\n  );--theme-switch-mixed--border-color--hover:var(\n    --theme-switch-mixed--border-color--invalid--hover\n  );--theme-switch-mixed--border-color--active:var(\n    --theme-switch-mixed--border-color--invalid--active\n  )}';
const Toggle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.checkedChange = createEvent(this, "checkedChange", 7);
    this.valueChange = createEvent(this, "valueChange", 7);
    if (hostRef.$hostElement$["s-ei"]) {
      this.formInternals = hostRef.$hostElement$["s-ei"];
    } else {
      this.formInternals = hostRef.$hostElement$.attachInternals();
      hostRef.$hostElement$["s-ei"] = this.formInternals;
    }
    this.value = "on";
    this.checked = false;
    this.disabled = false;
    this.indeterminate = false;
    this.textOn = "On";
    this.textOff = "Off";
    this.textIndeterminate = "Mixed";
    this.hideText = false;
    this.required = false;
  }
  onCheckedChange(newChecked) {
    if (this.disabled) {
      return;
    }
    const wasIndeterminate = this.indeterminate;
    const oldChecked = this.checked;
    if (this.indeterminate) {
      this.indeterminate = false;
    }
    this.checked = newChecked;
    const { defaultPrevented } = this.checkedChange.emit(this.checked);
    if (defaultPrevented) {
      this.indeterminate = wasIndeterminate;
      this.checked = oldChecked;
    }
  }
  componentWillLoad() {
    this.updateFormInternalValue();
  }
  updateFormInternalValue() {
    if (this.checked) {
      this.formInternals.setFormValue(this.value);
    } else {
      this.formInternals.setFormValue(null);
    }
  }
  watchCheckedChange() {
    this.updateFormInternalValue();
  }
  hasValidValue() {
    return Promise.resolve(this.checked);
  }
  getAssociatedFormElement() {
    return Promise.resolve(this.formInternals.form);
  }
  render() {
    let toggleText = this.textOff;
    if (this.checked) {
      toggleText = this.textOn;
    }
    if (this.indeterminate) {
      toggleText = this.textIndeterminate;
    }
    return h(Host, { key: "f531e9d80601ee7884a09b26adbcef4ccb1e6220", class: {
      disabled: this.disabled
    } }, h("label", { key: "f1ed4a7be7a1b54fd2b22ee722f4548652e902e5", class: "wrapper" }, h("button", { key: "f5c1b49ff55e2696ad7887a45ab316e41f189dab", role: "switch", "aria-checked": a11yBoolean(this.checked), class: {
      switch: true,
      checked: this.checked,
      indeterminate: this.indeterminate
    }, onClick: () => this.onCheckedChange(!this.checked) }, h("div", { key: "78d480eb757f90adff629dee453be7989aa263f7", class: "slider" })), h("input", { key: "e95ea3776b169e735cf471807dc1c18debdbaed0", type: "checkbox", disabled: this.disabled, indeterminate: this.indeterminate, checked: this.checked, tabindex: 0, "aria-hidden": a11yBoolean(true), "aria-checked": a11yBoolean(this.checked), onChange: (event) => this.onCheckedChange(event.target.checked) }), !this.hideText && h("ix-typography", { key: "1edb349714ec98ed6b3b57071d2a588bdd0c5bba", class: "label" }, toggleText)));
  }
  static get formAssociated() {
    return true;
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "checked": ["watchCheckedChange"]
    };
  }
};
Toggle.style = toggleCss;
export {
  Toggle as ix_toggle
};
