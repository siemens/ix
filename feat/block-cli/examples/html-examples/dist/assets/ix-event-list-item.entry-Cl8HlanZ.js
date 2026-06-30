import { r as registerInstance, c as createEvent, h, H as Host } from "./global-F68Qu5y3.js";
import { p as iconChevronRight } from "./index-DgUGsIlh-CLxQRaVd.js";
import { a as a11yBoolean } from "./a11y-C21npbUc-CU_Bg8RX.js";
const eventListItemCss = () => `:host(.event-list-item-outline) .event-list-item{--ix-event-list-item--color-border:var(     --theme-event-item-outline--border   );--ix-event-list-item--background:var(     --theme-event-item-outline--background   );--ix-event-list-item--background--hover:var(     --theme-event-item-outline--background--hover   );--ix-event-list-item--background--active:var(     --theme-event-item-outline--background--active   );--ix-event-list-item--background--selected:var(     --theme-event-item-outline--background--selected   );--ix-event-list-item--border--hover:var(     --theme-event-item-outline--border--hover   );--ix-event-list-item--border--active:var(     --theme-event-item-outline--border--active   );--ix-event-list-item--border--selected:var(     --theme-event-item-outline--border--selected   );--ix-event-list-item--border--disabled:var(     --theme-event-item-outline--border--disabled   )}:host(.event-list-item-filled) .event-list-item{--ix-event-list-item--color-border:var(     --theme-event-item-filled--border   );--ix-event-list-item--background:var(     --theme-event-item-filled--background   );--ix-event-list-item--background--hover:var(     --theme-event-item-filled--background--hover   );--ix-event-list-item--background--active:var(     --theme-event-item-filled--background--active   );--ix-event-list-item--background--selected:var(     --theme-event-item-filled--background--selected   );--ix-event-list-item--border--hover:var(     --theme-event-item-filled--border--hover   );--ix-event-list-item--border--active:var(     --theme-event-item-filled--border--active   );--ix-event-list-item--border--selected:var(     --theme-event-item-filled--border--selected   );--ix-event-list-item--border--disabled:var(     --theme-event-item-filled--border--disabled   )}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .event-list-item{display:flex;align-items:center;position:relative;height:var(--event-list-item-height, 2.5rem);max-height:var(--event-list-item-height, 2.5rem);border-radius:var(--event-list-item-border-radius, 0.25rem);background-color:var(--ix-event-list-item--background);overflow:hidden;transition:var(--theme-default-time);cursor:pointer;margin-bottom:var(--event-list-item-margin-bottom, 0.5rem)}:host .event-list-item .indicator{height:100%;width:0.5rem;max-width:0.5rem;min-width:0.5rem;border-top-left-radius:var(--event-list-item-border-radius, 0.25rem);border-bottom-left-radius:var(--event-list-item-border-radius, 0.25rem)}:host .event-list-item .indicator-empty{border:var(--theme-weak-bdr-1);border-right:none}:host .event-list-item .event-list-item-container{display:flex;flex-grow:1;width:calc(100% - (1rem + 0.5rem));height:100%;border:0.062rem solid;border-color:var(--ix-event-list-item--color-border);border-top-left-radius:0;border-top-right-radius:var(--event-list-item-border-radius, 0.25rem);border-bottom-left-radius:0;border-bottom-right-radius:var(--event-list-item-border-radius, 0.25rem);border-left:none;padding-left:1rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .event-list-item .event-content{display:flex;align-items:center;width:100%;height:var(--event-list-item-height, 100%);max-height:var(--event-list-item-height, 100%);white-space:var(--event-list-item-content-white-space, inherit);overflow:hidden;padding-inline-end:0.5rem}:host .event-list-item .chevron-icon{margin-left:auto;margin-right:0.5rem;opacity:0.6;align-self:center}:host .event-list-item:not(.selected):not(.disabled):not(:disabled){cursor:pointer}:host .event-list-item:not(.selected):not(.disabled):not(:disabled):hover,:host .event-list-item:not(.selected):not(.disabled):not(:disabled).hover{background-color:var(--ix-event-list-item--background--hover)}:host .event-list-item:not(.selected):not(.disabled):not(:disabled){cursor:pointer}:host .event-list-item:not(.selected):not(.disabled):not(:disabled):active,:host .event-list-item:not(.selected):not(.disabled):not(:disabled).active{background-color:var(--ix-event-list-item--background--active)}:host .event-list-item:not(.selected) .event-list-item-container:not(.disabled):not(:disabled){cursor:pointer}:host .event-list-item:not(.selected) .event-list-item-container:not(.disabled):not(:disabled):hover,:host .event-list-item:not(.selected) .event-list-item-container:not(.disabled):not(:disabled).hover{border-color:var(--ix-event-list-item--border--hover)}:host .event-list-item:not(.selected) .event-list-item-container:not(.disabled):not(:disabled){cursor:pointer}:host .event-list-item:not(.selected) .event-list-item-container:not(.disabled):not(:disabled):active,:host .event-list-item:not(.selected) .event-list-item-container:not(.disabled):not(:disabled).active{border-color:var(--ix-event-list-item--border--active)}:host .event-list-item.selected .event-list-item-container{background-color:var(--ix-event-list-item--background--selected);border-color:var(--ix-event-list-item--border--selected)}:host .event-list-item[disabled],:host .event-list-item.disabled{pointer-events:none}:host .event-list-item[disabled] .event-list-item-container,:host .event-list-item.disabled .event-list-item-container{background-color:var(--ix-event-list-item--background--disabled);border-color:var(--ix-event-list-item--border--disabled)}:host(.disabled){pointer-events:none}`;
const EventListItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.itemClick = createEvent(this, "itemClick", 7);
  }
  /**
   * Variant of the event list item
   *
   * @since 4.0.0
   */
  variant = "outline";
  /**
   * Color of the status indicator.
   * You can find a list of all available colors in our documentation.
   * Example values are `--theme-color-alarm` or `color-alarm`
   *
   * {@link https://ix.siemens.io/docs/styles/colors}
   */
  itemColor;
  /**
   * Show event list item as selected
   */
  selected = false;
  /**
   * Disable event list item
   */
  disabled = false;
  /**
   * Show chevron on right side of the event list item
   */
  chevron = false;
  /**
   * Event list item click
   */
  itemClick;
  handleItemClick() {
    this.itemClick.emit();
  }
  render() {
    let color = this.itemColor?.startsWith("--theme") ? `var(${this.itemColor})` : `var(--theme-${this.itemColor})`;
    return h(Host, { key: "f8ecc273ac58cbe0709fa31444a17f551cbe6bc5", class: {
      disabled: this.disabled,
      [`event-list-item-${this.variant}`]: true
    } }, h("div", { key: "053d8c368d44ebce06e9d8b14b1bc047a98e1a3d", role: "listitem", "aria-disabled": a11yBoolean(this.disabled), class: {
      "event-list-item": true,
      selected: this.selected,
      disabled: this.disabled
    } }, h("div", { key: "31af7a41ea21bf04d0ab98dffe5c9dbf144af578", class: `indicator ${!this.itemColor ? "indicator-empty" : ""}`, style: {
      "background-color": this.itemColor ? color : "inherit",
      opacity: `${this.disabled ? 0.4 : 1}`
    } }), h("div", { key: "f8a8527cf04a63289d96a7d87ecc7c55fe26c382", class: "event-list-item-container" }, h("div", { key: "ad9cca6bdaf451afce117f8bd2a880486573c48a", class: "event-content" }, h("slot", { key: "19d738a432f8be7c17c1e3f308f4b4cee8300828" })), this.chevron && h("ix-icon", { key: "a5fb5b105325ca9be1d0f1061d7035787e153b5b", name: iconChevronRight, size: "16", class: "chevron-icon", "aria-hidden": "true" }))));
  }
};
EventListItem.style = eventListItemCss();
export {
  EventListItem as ix_event_list_item
};
