import { r as registerInstance, c as createEvent, h, H as Host } from "./global.9430376f.js";
import { a as a11yBoolean } from "./a11y-d5444a76.05d6fe5e.js";
const eventListItemCss = ":host{}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .event-list-item{display:flex;align-items:center;position:relative;height:var(--event-list-item-height, 2.5rem);max-height:var(--event-list-item-height, 2.5rem);border-radius:var(--event-list-item-border-radius, 0.25rem);background-color:var(--theme-event-item--background);overflow:hidden;transition:var(--theme-default-time);cursor:pointer;margin-bottom:var(--event-list-item-margin-bottom, 0.5rem)}:host .event-list-item .indicator{height:100%;width:0.5rem;max-width:0.5rem;min-width:0.5rem;border-top-left-radius:var(--event-list-item-border-radius, 0.25rem);border-bottom-left-radius:var(--event-list-item-border-radius, 0.25rem)}:host .event-list-item .indicator-empty{border:var(--theme-weak-bdr-1);border-right:none}:host .event-list-item .event-list-item-container{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;flex-grow:1;width:calc(100% - (1rem + 0.5rem));height:100%;border:0.062rem solid;border-color:var(--theme-event-item--border);border-top-left-radius:0;border-top-right-radius:var(--event-list-item-border-radius, 0.25rem);border-bottom-left-radius:0;border-bottom-right-radius:var(--event-list-item-border-radius, 0.25rem);border-left:none;padding-left:1rem}:host .event-list-item .event-content{display:flex;align-items:center;width:100%;height:var(--event-list-item-height, 100%);max-height:var(--event-list-item-height, 100%);white-space:var(--event-list-item-content-white-space, inherit);overflow:hidden;padding-inline-end:0.5rem}:host .event-list-item .chevron-icon{margin-left:auto;margin-right:0.5rem;opacity:0.6;align-self:center}:host .event-list-item:not(.selected):not(.disabled):not(:disabled){cursor:pointer}:host .event-list-item:not(.selected):not(.disabled):not(:disabled):hover{background-color:var(--theme-event-item--background--hover)}:host .event-list-item:not(.selected):not(.disabled):not(:disabled){cursor:pointer}:host .event-list-item:not(.selected):not(.disabled):not(:disabled):active,:host .event-list-item:not(.selected):not(.disabled):not(:disabled).active{background-color:var(--theme-event-item--background--active)}:host .event-list-item:not(.selected) .event-list-item-container:not(.disabled):not(:disabled){cursor:pointer}:host .event-list-item:not(.selected) .event-list-item-container:not(.disabled):not(:disabled):hover{border-color:var(--theme-event-item--border--hover)}:host .event-list-item:not(.selected) .event-list-item-container:not(.disabled):not(:disabled){cursor:pointer}:host .event-list-item:not(.selected) .event-list-item-container:not(.disabled):not(:disabled):active,:host .event-list-item:not(.selected) .event-list-item-container:not(.disabled):not(:disabled).active{border-color:var(--theme-event-item--border--active)}:host .event-list-item.selected .event-list-item-container{background-color:var(--theme-event-item--background--selected);border-color:var(--theme-event-item--border--selected)}:host .event-list-item[disabled],:host .event-list-item.disabled{pointer-events:none}:host .event-list-item[disabled] .event-list-item-container,:host .event-list-item.disabled .event-list-item-container{background-color:var(--theme-event-item--background--disabled);border-color:var(--theme-event-item--border--disabled)}:host(.disabled){pointer-events:none}";
const IxEventListItemStyle0 = eventListItemCss;
const EventListItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.itemClick = createEvent(this, "itemClick", 7);
    this.color = void 0;
    this.itemColor = void 0;
    this.selected = void 0;
    this.disabled = void 0;
    this.chevron = void 0;
  }
  handleItemClick() {
    this.itemClick.emit();
  }
  render() {
    var _a, _b, _c, _d;
    let color = ((_a = this.itemColor) === null || _a === void 0 ? void 0 : _a.startsWith("--theme")) ? `var(${this.itemColor})` : `var(--theme-${this.itemColor})`;
    if (this.color) {
      color = ((_b = this.color) === null || _b === void 0 ? void 0 : _b.startsWith("--theme")) ? `var(${this.color})` : `var(--theme-${this.color})`;
    }
    return h(Host, { key: "f4867d7f68254b7f4929ce6746172eb03aa5caea", class: {
      disabled: this.disabled
    } }, h("li", { key: "325588cc80c9b8988b37aaeb72a8d9c7affc088e", "aria-disabled": a11yBoolean(this.disabled), class: {
      "event-list-item": true,
      selected: this.selected,
      disabled: this.disabled
    } }, h("div", { key: "24ef52d3c26ccb528934fa0366c9ebdce05ca38d", class: `indicator ${!((_c = this.itemColor) !== null && _c !== void 0 ? _c : this.color) ? "indicator-empty" : ""}`, style: {
      "background-color": ((_d = this.itemColor) !== null && _d !== void 0 ? _d : this.color) ? color : "inherit",
      opacity: `${this.disabled ? 0.4 : 1}`
    } }), h("div", { key: "74fac568b74471bcd6051f25d13bbac6d3aaadb4", class: "event-list-item-container" }, h("div", { key: "47d69475c3d448ca417b1892b30f22e7de77b19f", class: "event-content" }, h("slot", { key: "c87d4fc509bdbc2041122e274caa2860a2530843" })), this.chevron && h("ix-icon", { key: "8626b6e5ff1f23163d4a75d5c3a114adc3942c2c", name: "chevron-right", size: "16", class: "chevron-icon" }))));
  }
};
EventListItem.style = IxEventListItemStyle0;
export {
  EventListItem as ix_event_list_item
};
