import { r as registerInstance, c as createEvent, h, H as Host } from "./global-Do6maBom.js";
import { C as iconChevronRight } from "./index-BeX6RWvV-CXzUIwMU.js";
import { a as a11yBoolean } from "./a11y-DD206pTM-BiwZPW5s.js";
const eventListItemCss = () => `@charset "UTF-8";:host{--ix-event-list-item--transition-duration:var(--theme-default-time);--ix-event-list-item-empty-indicator--border:var(--theme-weak-bdr-1);--ix-event-list-item-chevron--color:var(--si-sys-text-secondary);--ix-event-list-item-filled--background:var(--si-sys-background-1);--ix-event-list-item-filled--background--active:var(--si-sys-background-active);--ix-event-list-item-filled--background--disabled:var(--si-sys-background-1);--ix-event-list-item-filled--background--hover:var(--si-sys-background-hover);--ix-event-list-item-filled--background--selected:var(--si-sys-background-active);--ix-event-list-item-filled--border-color:rgba(0, 0, 0, 0);--ix-event-list-item-filled--border-color--active:rgba(0, 0, 0, 0);--ix-event-list-item-filled--border-color--disabled:rgba(0, 0, 0, 0);--ix-event-list-item-filled--border-color--hover:rgba(0, 0, 0, 0);--ix-event-list-item-filled--border-color--selected:var(--si-sys-border-accent-hover);--ix-event-list-item-indicator--width:var(--theme-size--2);--ix-event-list-item-indicator-opacity--disabled:0.3;--ix-event-list-item-outline--background:rgba(0, 0, 0, 0);--ix-event-list-item-outline--background--active:var(--si-sys-background-active);--ix-event-list-item-outline--background--disabled:rgba(0, 0, 0, 0);--ix-event-list-item-outline--background--hover:var(--si-sys-background-hover);--ix-event-list-item-outline--background--selected:var(--si-sys-background-active);--ix-event-list-item-outline--border-color:var(--si-sys-border-3);--ix-event-list-item-outline--border-color--active:var(--si-sys-border-3);--ix-event-list-item-outline--border-color--disabled:var(--si-sys-border-4);--ix-event-list-item-outline--border-color--hover:var(--si-sys-border-3);--ix-event-list-item-outline--border-color--selected:var(--si-sys-border-accent-hover)}:host(.event-list-item-outline) .event-list-item{--ix-event-list-item--border-color:var(     --ix-event-list-item-outline--border-color   );--ix-event-list-item--background:var(     --ix-event-list-item-outline--background   );--ix-event-list-item--background--hover:var(     --ix-event-list-item-outline--background--hover   );--ix-event-list-item--background--active:var(     --ix-event-list-item-outline--background--active   );--ix-event-list-item--background--disabled:var(     --ix-event-list-item-outline--background--disabled   );--ix-event-list-item--background--selected:var(     --ix-event-list-item-outline--background--selected   );--ix-event-list-item--border-color--hover:var(     --ix-event-list-item-outline--border-color--hover   );--ix-event-list-item--border-color--active:var(     --ix-event-list-item-outline--border-color--active   );--ix-event-list-item--border-color--selected:var(     --ix-event-list-item-outline--border-color--selected   );--ix-event-list-item--border-color--disabled:var(     --ix-event-list-item-outline--border-color--disabled   )}:host(.event-list-item-filled) .event-list-item{--ix-event-list-item--border-color:var(     --ix-event-list-item-filled--border-color   );--ix-event-list-item--background:var(     --ix-event-list-item-filled--background   );--ix-event-list-item--background--hover:var(     --ix-event-list-item-filled--background--hover   );--ix-event-list-item--background--active:var(     --ix-event-list-item-filled--background--active   );--ix-event-list-item--background--disabled:var(     --ix-event-list-item-filled--background--disabled   );--ix-event-list-item--background--selected:var(     --ix-event-list-item-filled--background--selected   );--ix-event-list-item--border-color--hover:var(     --ix-event-list-item-filled--border-color--hover   );--ix-event-list-item--border-color--active:var(     --ix-event-list-item-filled--border-color--active   );--ix-event-list-item--border-color--selected:var(     --ix-event-list-item-filled--border-color--selected   );--ix-event-list-item--border-color--disabled:var(     --ix-event-list-item-filled--border-color--disabled   )}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-border-4);--ix-scrollbar-background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .event-list-item{display:flex;align-items:center;position:relative;height:var(--event-list-item-height, 2.5rem);max-height:var(--event-list-item-height, 2.5rem);border-radius:var(--event-list-item-border-radius, 0.25rem);background-color:var(--ix-event-list-item--background);overflow:hidden;transition:var(--ix-event-list-item--transition-duration);cursor:pointer;margin-bottom:var(--event-list-item-margin-bottom, 0.5rem)}:host .event-list-item .indicator{height:100%;width:0.5rem;max-width:0.5rem;min-width:0.5rem;border-top-left-radius:var(--event-list-item-border-radius, 0.25rem);border-bottom-left-radius:var(--event-list-item-border-radius, 0.25rem)}:host .event-list-item .indicator-empty{border:var(--ix-event-list-item-empty-indicator--border);border-right:none}:host .event-list-item .event-list-item-container{display:flex;flex-grow:1;width:calc(100% - (1rem + 0.5rem));height:100%;border:0.062rem solid;border-color:var(--ix-event-list-item--border-color);border-top-left-radius:0;border-top-right-radius:var(--event-list-item-border-radius, 0.25rem);border-bottom-left-radius:0;border-bottom-right-radius:var(--event-list-item-border-radius, 0.25rem);border-left:none;padding-left:1rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .event-list-item .event-content{display:flex;align-items:center;width:100%;height:var(--event-list-item-height, 100%);max-height:var(--event-list-item-height, 100%);white-space:var(--event-list-item-content-white-space, inherit);overflow:hidden;padding-inline-end:0.5rem}:host .event-list-item .chevron-icon{margin-left:auto;margin-right:0.5rem;opacity:0.6;align-self:center}:host .event-list-item:not(.selected):not(.disabled):not(:disabled){cursor:pointer}:host .event-list-item:not(.selected):not(.disabled):not(:disabled):hover,:host .event-list-item:not(.selected):not(.disabled):not(:disabled).hover{background-color:var(--ix-event-list-item--background--hover)}:host .event-list-item:not(.selected):not(.disabled):not(:disabled){cursor:pointer}:host .event-list-item:not(.selected):not(.disabled):not(:disabled):active,:host .event-list-item:not(.selected):not(.disabled):not(:disabled).active{background-color:var(--ix-event-list-item--background--active)}:host .event-list-item:not(.selected) .event-list-item-container:not(.disabled):not(:disabled){cursor:pointer}:host .event-list-item:not(.selected) .event-list-item-container:not(.disabled):not(:disabled):hover,:host .event-list-item:not(.selected) .event-list-item-container:not(.disabled):not(:disabled).hover{border-color:var(--ix-event-list-item--border-color--hover)}:host .event-list-item:not(.selected) .event-list-item-container:not(.disabled):not(:disabled){cursor:pointer}:host .event-list-item:not(.selected) .event-list-item-container:not(.disabled):not(:disabled):active,:host .event-list-item:not(.selected) .event-list-item-container:not(.disabled):not(:disabled).active{border-color:var(--ix-event-list-item--border-color--active)}:host .event-list-item.selected .event-list-item-container{background-color:var(--ix-event-list-item--background--selected);border-color:var(--ix-event-list-item--border-color--selected)}:host .event-list-item[disabled],:host .event-list-item.disabled{pointer-events:none}:host .event-list-item[disabled] .event-list-item-container,:host .event-list-item.disabled .event-list-item-container{background-color:var(--ix-event-list-item--background--disabled);border-color:var(--ix-event-list-item--border-color--disabled)}:host(.disabled){pointer-events:none}`;
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
   * Example value: `--si-sys-background-danger`
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
    const color = this.itemColor ? `var(${this.itemColor})` : "inherit";
    return h(Host, { key: "6c4f3568b741d536bccdbff0494cb69938662699", class: {
      disabled: this.disabled,
      [`event-list-item-${this.variant}`]: true
    } }, h("div", { key: "ded61f64f6417dce179f274b0adb1698b5f06f82", role: "listitem", "aria-disabled": a11yBoolean(this.disabled), class: {
      "event-list-item": true,
      selected: this.selected,
      disabled: this.disabled
    } }, h("div", { key: "979782b685b192eb72b8d55c5efe5456daad2e47", class: `indicator ${!this.itemColor ? "indicator-empty" : ""}`, style: {
      "background-color": color,
      opacity: `${this.disabled ? 0.4 : 1}`
    } }), h("div", { key: "945129b6d8fb20723b4471dd63267a512f4991b1", class: "event-list-item-container" }, h("div", { key: "0388b9df77a4da3f65782487bc09349fde7dd1d3", class: "event-content" }, h("slot", { key: "2339c9040f25b69b7029594607dbd529ee4d55aa" })), this.chevron && h("ix-icon", { key: "f8132d528a2f3040b1b68a11ddaa98360c65b80a", name: iconChevronRight, size: "16", class: "chevron-icon", "aria-hidden": "true" }))));
  }
};
EventListItem.style = eventListItemCss();
export {
  EventListItem as ix_event_list_item
};
