import { r as registerInstance, c as createEvent, h, F as Fragment, H as Host, g as getElement } from "./global.9430376f.js";
import { a as a11yBoolean } from "./a11y-d5444a76.05d6fe5e.js";
const toggleCss = ':host{display:inline-flex;position:relative;height:2rem;justify-content:flex-start;align-items:center;margin-right:0.25rem;cursor:pointer}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .switch{position:relative;display:inline-block;width:3rem;min-width:3rem;max-width:3rem;height:1.5rem;margin-right:0.25rem}:host .switch input{opacity:0;width:0;height:0}:host .slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:var(--theme-switch-off--background);transition:var(--theme-default-time);border-radius:1.5rem}:host .slider:before{position:absolute;content:"";height:1.125rem;width:1.125rem;left:4px;bottom:3px;background-color:var(--theme-switch-thumb-off--background);transition:var(--theme-default-time);border-radius:50%}:host input{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}:host input:focus-visible+.switch>.slider{outline:1px solid var(--theme-color-focus-bdr);outline-offset:1px}:host input:checked+.switch>.slider{background-color:var(--theme-switch-on--background)}:host input:checked+.switch>.slider::before{background-color:var(--theme-switch-thumb-on--background);transform:translateX(1.35rem)}:host input+.switch:hover>.slider{background-color:var(--theme-switch-off--background--hover)}:host input+.switch:hover>.slider:before{background-color:var(--theme-switch-thumb-off--background--hover)}:host input+.switch:active>.slider{background-color:var(--theme-switch-off--background--active)}:host input+.switch:active>.slider:before{background-color:var(--theme-switch-thumb-off--background--active)}:host input:checked+.switch:hover>.slider{background-color:var(--theme-switch-on--background--hover)}:host input:checked+.switch:hover>.slider:before{background-color:var(--theme-switch-thumb-on--background--hover)}:host input:checked+.switch:active>.slider{background-color:var(--theme-switch-on--background--active)}:host input:checked+.switch:active>.slider:before{background-color:var(--theme-switch-thumb-on--background--active)}:host input:indeterminate+.switch>.slider::before{transform:translateX(0.7rem)}:host .toggle-text{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}:host(.disabled){pointer-events:none}:host(.disabled) input+.switch{opacity:0.5}:host(.disabled) input+.switch>.slider{background-color:var(--theme-switch-off--background--disabled)}:host(.disabled) input+.switch>.slider:before{background-color:var(--theme-switch-thumb-off--background--disabled)}:host(.disabled) input:checked+.switch>.slider{background-color:var(--theme-switch-on--background--disabled)}:host(.disabled) input:checked+.switch>.slider:before{background-color:var(--theme-switch-thumb-on--background--disabled)}:host(.disabled) .toggle-text{color:var(--theme-color-weak-text)}';
const IxToggleStyle0 = toggleCss;
const Toggle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.checkedChange = createEvent(this, "checkedChange", 7);
    this.checked = false;
    this.disabled = false;
    this.indeterminate = false;
    this.textOn = "On";
    this.textOff = "Off";
    this.textIndeterminate = "Mixed";
    this.hideText = false;
  }
  onCheckedChange(newChecked) {
    if (this.indeterminate) {
      this.indeterminate = false;
    }
    this.checked = newChecked;
    this.checkedChange.emit(this.checked);
  }
  render() {
    return h(Host, { key: "46cf23f4ae6803763da9344dfd9374aa2e307e14", class: {
      disabled: this.disabled
    }, onClick: () => this.onCheckedChange(!this.checked) }, h("input", { key: "3e85c5ebee51ea769bce59bf215a050e8196cc02", disabled: this.disabled, indeterminate: this.indeterminate, checked: this.checked, role: "switch", tabindex: 0, type: "checkbox", "aria-checked": a11yBoolean(this.checked), onChange: (event) => this.onCheckedChange(event.target.checked) }), h("label", { key: "d09e1342cbb63f4e5b0f18d2071260b47405eaa4", class: "switch", tabIndex: -1 }, h("span", { key: "94d1afb922bd8da6aa62dec9aa94bf350d507bc7", class: "slider" })), !this.hideText ? h(Fragment, null, !this.indeterminate ? h("span", { class: "toggle-text", "aria-hidden": a11yBoolean(true) }, this.checked ? this.textOn : this.textOff) : h("span", { class: "toggle-text", "aria-hidden": a11yBoolean(true) }, this.textIndeterminate)) : null);
  }
  get hostElement() {
    return getElement(this);
  }
};
Toggle.style = IxToggleStyle0;
export {
  Toggle as ix_toggle
};
