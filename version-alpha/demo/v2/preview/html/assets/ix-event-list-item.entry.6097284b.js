import { r as registerInstance, c as createEvent, h, H as Host } from "./global.bff64ac3.js";
import { n as iconChevronRight } from "./index-CrTP-icT.451e0ae2.js";
import { a as a11yBoolean } from "./a11y-Bb7pDeaQ.1f74cdb9.js";
const eventListItemCss = ":host{}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .event-list-item{display:flex;align-items:center;position:relative;height:var(--event-list-item-height, 2.5rem);max-height:var(--event-list-item-height, 2.5rem);border-radius:var(--event-list-item-border-radius, 0.25rem);background-color:var(--theme-event-item--background);overflow:hidden;transition:var(--theme-default-time);cursor:pointer;margin-bottom:var(--event-list-item-margin-bottom, 0.5rem)}:host .event-list-item .indicator{height:100%;width:0.5rem;max-width:0.5rem;min-width:0.5rem;border-top-left-radius:var(--event-list-item-border-radius, 0.25rem);border-bottom-left-radius:var(--event-list-item-border-radius, 0.25rem)}:host .event-list-item .indicator-empty{border:var(--theme-weak-bdr-1);border-right:none}:host .event-list-item .event-list-item-container{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;flex-grow:1;width:calc(100% - (1rem + 0.5rem));height:100%;border:0.062rem solid;border-color:var(--theme-event-item--border);border-top-left-radius:0;border-top-right-radius:var(--event-list-item-border-radius, 0.25rem);border-bottom-left-radius:0;border-bottom-right-radius:var(--event-list-item-border-radius, 0.25rem);border-left:none;padding-left:1rem}:host .event-list-item .event-content{display:flex;align-items:center;width:100%;height:var(--event-list-item-height, 100%);max-height:var(--event-list-item-height, 100%);white-space:var(--event-list-item-content-white-space, inherit);overflow:hidden;padding-inline-end:0.5rem}:host .event-list-item .chevron-icon{margin-left:auto;margin-right:0.5rem;opacity:0.6;align-self:center}:host .event-list-item:not(.selected):not(.disabled):not(:disabled){cursor:pointer}:host .event-list-item:not(.selected):not(.disabled):not(:disabled):hover{background-color:var(--theme-event-item--background--hover)}:host .event-list-item:not(.selected):not(.disabled):not(:disabled){cursor:pointer}:host .event-list-item:not(.selected):not(.disabled):not(:disabled):active,:host .event-list-item:not(.selected):not(.disabled):not(:disabled).active{background-color:var(--theme-event-item--background--active)}:host .event-list-item:not(.selected) .event-list-item-container:not(.disabled):not(:disabled){cursor:pointer}:host .event-list-item:not(.selected) .event-list-item-container:not(.disabled):not(:disabled):hover{border-color:var(--theme-event-item--border--hover)}:host .event-list-item:not(.selected) .event-list-item-container:not(.disabled):not(:disabled){cursor:pointer}:host .event-list-item:not(.selected) .event-list-item-container:not(.disabled):not(:disabled):active,:host .event-list-item:not(.selected) .event-list-item-container:not(.disabled):not(:disabled).active{border-color:var(--theme-event-item--border--active)}:host .event-list-item.selected .event-list-item-container{background-color:var(--theme-event-item--background--selected);border-color:var(--theme-event-item--border--selected)}:host .event-list-item[disabled],:host .event-list-item.disabled{pointer-events:none}:host .event-list-item[disabled] .event-list-item-container,:host .event-list-item.disabled .event-list-item-container{background-color:var(--theme-event-item--background--disabled);border-color:var(--theme-event-item--border--disabled)}:host(.disabled){pointer-events:none}";
const EventListItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.itemClick = createEvent(this, "itemClick", 7);
    this.selected = false;
    this.disabled = false;
    this.chevron = false;
  }
  handleItemClick() {
    this.itemClick.emit();
  }
  render() {
    var _a;
    let color = ((_a = this.itemColor) === null || _a === void 0 ? void 0 : _a.startsWith("--theme")) ? `var(${this.itemColor})` : `var(--theme-${this.itemColor})`;
    return h(Host, { key: "8ca14f30aa83e34f045697990d17f21ddf4c21e9", class: {
      disabled: this.disabled
    } }, h("div", { key: "5c1f4fa602313021f80f74bf540d7464b1736ac8", role: "listitem", "aria-disabled": a11yBoolean(this.disabled), class: {
      "event-list-item": true,
      selected: this.selected,
      disabled: this.disabled
    } }, h("div", { key: "cc74637b814acab62588d828caa99e61a9c24180", class: `indicator ${!this.itemColor ? "indicator-empty" : ""}`, style: {
      "background-color": this.itemColor ? color : "inherit",
      opacity: `${this.disabled ? 0.4 : 1}`
    } }), h("div", { key: "2c4a3a980b8444ad2289b731bdd7a060bdc46607", class: "event-list-item-container" }, h("div", { key: "09055d7d893c6e7395d6c1abd00f05abe112f61b", class: "event-content" }, h("slot", { key: "ae8540d948cf7778288f54c2b892b86b34d2cf08" })), this.chevron && h("ix-icon", { key: "68e6a4b5dfa40354ac087c719f3731f5ec41fbe4", name: iconChevronRight, size: "16", class: "chevron-icon" }))));
  }
};
EventListItem.style = eventListItemCss;
export {
  EventListItem as ix_event_list_item
};
