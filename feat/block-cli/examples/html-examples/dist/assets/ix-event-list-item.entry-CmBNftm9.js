import { r as registerInstance, c as createEvent, h, H as Host } from "./global-Dfa5QLOG.js";
import { s as iconChevronRight } from "./index-DLhpBBEI-C3tPjcQ4.js";
import { a as a11yBoolean } from "./a11y-B5k8YVR0-BOSd6BQK.js";
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
    return h(Host, { key: "c3c71e5b457f66fba44dd2e263402a7d296b9d54", class: {
      disabled: this.disabled,
      [`event-list-item-${this.variant}`]: true
    } }, h("div", { key: "c638535f909fd3d7aebaa33c4c46375732e451a6", role: "listitem", "aria-disabled": a11yBoolean(this.disabled), class: {
      "event-list-item": true,
      selected: this.selected,
      disabled: this.disabled
    } }, h("div", { key: "13db30ecb60a014052174de14b91965b0e7681ee", class: `indicator ${!this.itemColor ? "indicator-empty" : ""}`, style: {
      "background-color": this.itemColor ? color : "inherit",
      opacity: `${this.disabled ? 0.4 : 1}`
    } }), h("div", { key: "9a63215be2e9e9e70c5e90a128d584c7baa9c059", class: "event-list-item-container" }, h("div", { key: "89dae50a88a17daceb6484139c86254531926311", class: "event-content" }, h("slot", { key: "e7f71b12c86134280aedad42dda492de6b7d8912" })), this.chevron && h("ix-icon", { key: "659e717fdada095d19e946e8eb5b75eef05ec602", name: iconChevronRight, size: "16", class: "chevron-icon", "aria-hidden": "true" }))));
  }
};
EventListItem.style = eventListItemCss();
export {
  EventListItem as ix_event_list_item
};
