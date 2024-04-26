import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./index.918151cc.js";
const filterChipCss = ":host{display:inline-flex;align-items:center;justify-content:space-between;height:1.5rem;padding-left:0.5rem;border:var(--theme-focus--border-thickness) solid var(--theme-chip-primary-outline--border-color);border-radius:2rem;background-color:var(--theme-color-ghost);color:var(--theme-chip-primary-outline--color)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .slot-container{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .slot-container :host-context(.disabled){background-color:var(--theme-color-ghost);border-color:var(--theme-color-component-4);color:var(--theme-color-weak-text)}:host ix-icon-button{height:1.5rem;margin-left:0.25rem}:host ix-icon-button:not(.disabled):not(:disabled):focus-visible{outline:none}:host(.disabled){border:var(--theme-focus--border-thickness) solid var(--theme-color-component-4);color:var(--theme-color-weak-text);padding-right:0.5rem;cursor:default}:host(.readonly){padding-right:0.5rem}:host(:not(.disabled):not(:disabled)){cursor:pointer}:host(:hover:not(.disabled):not(:disabled)){background-color:var(--theme-color-ghost-primary--hover);border-color:var(--theme-chip-primary-outline--border-color--hover);color:var(--theme-chip-primary-outline--color--hover)}:host(:not(.disabled):not(:disabled)){cursor:pointer}:host(:active:not(.disabled):not(:disabled)){background-color:var(--theme-color-ghost-primary--active);border-color:var(--theme-chip-primary-outline--border-color--active);color:var(--theme-chip-primary-outline--color--active)}:host(:focus-visible:not(.disabled):not(:disabled)){outline:var(--theme-color-focus-bdr) solid var(--theme-focus--border-thickness);outline-offset:-0.125rem}";
const IxFilterChipStyle0 = filterChipCss;
const FilterChip = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.closeClick = createEvent(this, "closeClick", 7);
    this.disabled = false;
    this.readonly = false;
  }
  onCloseClick(event) {
    event.preventDefault();
    event.stopPropagation();
    this.closeClick.emit();
  }
  render() {
    return h(Host, { key: "ab9555b6ab060074b79e61b6262821ce545e9e62", class: { disabled: this.disabled, readonly: this.readonly }, title: this.el.textContent }, h("div", { key: "889e241f3ea192f23452f499934c4d0e7aee2cde", class: "slot-container" }, h("slot", { key: "d48aea2e83bf484d77d13240dec464bac3a483fa" })), !this.disabled && !this.readonly ? h("ix-icon-button", { ghost: true, oval: true, icon: "close-small", size: "16", tabindex: this.disabled ? -1 : 0, variant: "primary", disabled: this.disabled, onClick: (e) => this.onCloseClick(e) }) : null);
  }
  get el() {
    return getElement(this);
  }
};
FilterChip.style = IxFilterChipStyle0;
class IxSelectItemLabelChangeEvent extends CustomEvent {
  constructor(detail) {
    super("ix-select-item:labelChange", {
      bubbles: true,
      detail
    });
  }
}
const selectItemCss = ":host{display:block;position:relative}:host>ix-dropdown-item{width:100%}:host ix-dropdown-item{color:var(--theme-color-std-text)}:host .select-item-checked{background-color:var(--theme-select-list-item--background--selected);--ix-dropdown-item-checked-color:var(--theme-color-std-text)}:host(.d-none){display:none}";
const IxSelectItemStyle0 = selectItemCss;
const SelectItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.itemClick = createEvent(this, "itemClick", 7);
    this.label = void 0;
    this.value = void 0;
    this.selected = false;
    this.hover = false;
  }
  async getDropdownItemElement() {
    return this.dropdownItem;
  }
  async onItemClick(event) {
    event === null || event === void 0 ? void 0 : event.preventDefault();
    event === null || event === void 0 ? void 0 : event.stopPropagation();
    this.itemClick.emit(this.value);
  }
  get dropdownItem() {
    return this.hostElement.querySelector("ix-dropdown-item");
  }
  componentDidRender() {
    if (this.value === void 0 || this.value === null) {
      throw Error("ix-select-item must have a `value` property");
    }
  }
  labelChange(newValue, oldValue) {
    this.hostElement.dispatchEvent(new IxSelectItemLabelChangeEvent({
      newValue,
      oldValue
    }));
  }
  render() {
    return h(Host, { key: "9ff392300b9cabcdfc27dcfabbccb7b1de715090" }, h("ix-dropdown-item", { key: "3e4d06b4251b938857c9b097cd1215e7dc255761", class: {
      "select-item-checked": this.selected
    }, checked: this.selected, label: this.label ? this.label : this.value, onItemClick: (e) => this.onItemClick(e) }));
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "label": ["labelChange"]
    };
  }
};
SelectItem.style = IxSelectItemStyle0;
export {
  FilterChip as ix_filter_chip,
  SelectItem as ix_select_item
};
