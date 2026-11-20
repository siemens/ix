import { r as registerInstance, c as createEvent, h, H as Host } from "./index-CgUi6DzV-B0SX_BHQ.js";
import { u as iconChevronRight } from "./index-CZ_u3Y0s-B1dE3kOK.js";
import { a as a11yBoolean } from "./a11y-BjBGvZyE-CRtX0AHd.js";
import "./preload-helper-UZRgTS1n.js";
import "./condition-checks-B3dDrNFs-BiqvZF_l.js";
const eventListItemCss = () => `@charset "UTF-8";:host{--ix-event-list-item-empty-indicator--border:var(--si-sys-sizing-border-width-default) solid var(--si-sys-color-border-4);--ix-event-list-item--background--filled:var(--si-sys-color-background-1);--ix-event-list-item--background--filled--active:var(--si-sys-color-background-selected);--ix-event-list-item--background--filled--disabled:var(--si-sys-color-background-1);--ix-event-list-item--background--filled--hover:var(--si-sys-color-background-hover);--ix-event-list-item--background--filled--selected:var(--si-sys-color-background-selected);--ix-event-list-item--border-color--filled:rgba(0, 0, 0, 0);--ix-event-list-item--border-color--filled--active:rgba(0, 0, 0, 0);--ix-event-list-item--border-color--filled--disabled:rgba(0, 0, 0, 0);--ix-event-list-item--border-color--filled--hover:rgba(0, 0, 0, 0);--ix-event-list-item--border-color--filled--selected:var(--si-sys-color-border-accent-hover);--ix-event-list-item--background--outline:rgba(0, 0, 0, 0);--ix-event-list-item--background--outline--active:var(--si-sys-color-background-selected);--ix-event-list-item--background--outline--disabled:rgba(0, 0, 0, 0);--ix-event-list-item--background--outline--hover:var(--si-sys-color-background-hover);--ix-event-list-item--background--outline--selected:var(--si-sys-color-background-selected);--ix-event-list-item--border-color--outline:var(--si-sys-color-border-3);--ix-event-list-item--border-color--outline--active:var(--si-sys-color-border-3);--ix-event-list-item--border-color--outline--disabled:var(--si-sys-color-border-4);--ix-event-list-item--border-color--outline--hover:var(--si-sys-color-border-3);--ix-event-list-item--border-color--outline--selected:var(--si-sys-color-border-accent-hover)}:host{--ix-event-list-item--transition-duration:var(--theme-default-time);--ix-event-list-item--height:var(--si-sys-sizing-size-90);--ix-event-list-item--border-radius:0.25rem;--ix-event-list-item--margin-bottom:var(--si-sys-sizing-spacing-y-40);--ix-event-list-item-indicator-visual--width:var(--si-sys-sizing-spacing-x-40);--ix-event-list-item-indicator--max-width:var(--si-sys-sizing-spacing-x-40);--ix-event-list-item-indicator--min-width:var(--si-sys-sizing-spacing-x-40);--ix-event-list-item-indicator--border-top-left-radius:0.25rem;--ix-event-list-item-indicator--border-bottom-left-radius:0.25rem;--ix-event-list-item-container--width:calc(100% - (var(--si-sys-sizing-spacing-x-60) + var(--si-sys-sizing-spacing-x-40)));--ix-event-list-item-container--border-top-right-radius:0.25rem;--ix-event-list-item-container--border-bottom-right-radius:0.25rem;--ix-event-list-item-container--padding-left:var(--si-sys-sizing-spacing-x-60);--ix-event-list-item-event-content--padding-inline-end:var(--si-sys-sizing-spacing-x-40);--ix-event-list-item-chevron-icon--margin-right:var(--si-sys-sizing-spacing-x-40);--ix-event-list-item-container--border-width:calc(var(--si-sys-sizing-border-width-default) * 0.992);--ix-event-list-item-chevron-icon--opacity:0.6}:host(.event-list-item-outline) .event-list-item{--ix-event-list-item--border-color:var(--ix-event-list-item--border-color--outline);--ix-event-list-item--background:var(--ix-event-list-item--background--outline);--ix-event-list-item--background--hover:var(--ix-event-list-item--background--outline--hover);--ix-event-list-item--background--active:var(--ix-event-list-item--background--outline--active);--ix-event-list-item--background--disabled:var(--ix-event-list-item--background--outline--disabled);--ix-event-list-item--background--selected:var(--ix-event-list-item--background--outline--selected);--ix-event-list-item--border-color--hover:var(--ix-event-list-item--border-color--outline--hover);--ix-event-list-item--border-color--active:var(--ix-event-list-item--border-color--outline--active);--ix-event-list-item--border-color--selected:var(--ix-event-list-item--border-color--outline--selected);--ix-event-list-item--border-color--disabled:var(--ix-event-list-item--border-color--outline--disabled)}:host(.event-list-item-filled) .event-list-item{--ix-event-list-item--border-color:var(--ix-event-list-item--border-color--filled);--ix-event-list-item--background:var(--ix-event-list-item--background--filled);--ix-event-list-item--background--hover:var(--ix-event-list-item--background--filled--hover);--ix-event-list-item--background--active:var(--ix-event-list-item--background--filled--active);--ix-event-list-item--background--disabled:var(--ix-event-list-item--background--filled--disabled);--ix-event-list-item--background--selected:var(--ix-event-list-item--background--filled--selected);--ix-event-list-item--border-color--hover:var(--ix-event-list-item--border-color--filled--hover);--ix-event-list-item--border-color--active:var(--ix-event-list-item--border-color--filled--active);--ix-event-list-item--border-color--selected:var(--ix-event-list-item--border-color--filled--selected);--ix-event-list-item--border-color--disabled:var(--ix-event-list-item--border-color--filled--disabled)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .event-list-item{display:flex;align-items:center;position:relative;height:var(--event-list-item-height, var(--ix-event-list-item--height));max-height:var(--event-list-item-height, var(--ix-event-list-item--height));border-radius:var(--event-list-item-border-radius, var(--ix-event-list-item--border-radius));background-color:var(--ix-event-list-item--background);overflow:hidden;transition:var(--ix-event-list-item--transition-duration);cursor:pointer;margin-bottom:var(--event-list-item-margin-bottom, var(--ix-event-list-item--margin-bottom))}:host .event-list-item .indicator{height:100%;width:var(--ix-event-list-item-indicator-visual--width);max-width:var(--ix-event-list-item-indicator--max-width);min-width:var(--ix-event-list-item-indicator--min-width);border-top-left-radius:var(--event-list-item-border-radius, var(--ix-event-list-item-indicator--border-top-left-radius));border-bottom-left-radius:var(--event-list-item-border-radius, var(--ix-event-list-item-indicator--border-bottom-left-radius))}:host .event-list-item .indicator-empty{border:var(--ix-event-list-item-empty-indicator--border);border-right:none}:host .event-list-item .event-list-item-container{display:flex;flex-grow:1;width:var(--ix-event-list-item-container--width);height:100%;border:var(--ix-event-list-item-container--border-width) solid;border-color:var(--ix-event-list-item--border-color);border-top-left-radius:0;border-top-right-radius:var(--event-list-item-border-radius, var(--ix-event-list-item-container--border-top-right-radius));border-bottom-left-radius:0;border-bottom-right-radius:var(--event-list-item-border-radius, var(--ix-event-list-item-container--border-bottom-right-radius));border-left:none;padding-left:var(--ix-event-list-item-container--padding-left);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .event-list-item .event-content{display:flex;align-items:center;width:100%;height:var(--event-list-item-height, 100%);max-height:var(--event-list-item-height, 100%);white-space:var(--event-list-item-content-white-space, inherit);overflow:hidden;padding-inline-end:var(--ix-event-list-item-event-content--padding-inline-end)}:host .event-list-item .chevron-icon{margin-left:auto;margin-right:var(--ix-event-list-item-chevron-icon--margin-right);opacity:var(--ix-event-list-item-chevron-icon--opacity);align-self:center}:host .event-list-item:not(.selected):not(.disabled):not(:disabled){cursor:pointer}:host .event-list-item:not(.selected):not(.disabled):not(:disabled):hover,:host .event-list-item:not(.selected):not(.disabled):not(:disabled).hover{background-color:var(--ix-event-list-item--background--hover)}:host .event-list-item:not(.selected):not(.disabled):not(:disabled){cursor:pointer}:host .event-list-item:not(.selected):not(.disabled):not(:disabled):active,:host .event-list-item:not(.selected):not(.disabled):not(:disabled).active{background-color:var(--ix-event-list-item--background--active)}:host .event-list-item:not(.selected) .event-list-item-container:not(.disabled):not(:disabled){cursor:pointer}:host .event-list-item:not(.selected) .event-list-item-container:not(.disabled):not(:disabled):hover,:host .event-list-item:not(.selected) .event-list-item-container:not(.disabled):not(:disabled).hover{border-color:var(--ix-event-list-item--border-color--hover)}:host .event-list-item:not(.selected) .event-list-item-container:not(.disabled):not(:disabled){cursor:pointer}:host .event-list-item:not(.selected) .event-list-item-container:not(.disabled):not(:disabled):active,:host .event-list-item:not(.selected) .event-list-item-container:not(.disabled):not(:disabled).active{border-color:var(--ix-event-list-item--border-color--active)}:host .event-list-item.selected .event-list-item-container{background-color:var(--ix-event-list-item--background--selected);border-color:var(--ix-event-list-item--border-color--selected)}:host .event-list-item[disabled],:host .event-list-item.disabled{pointer-events:none}:host .event-list-item[disabled] .event-list-item-container,:host .event-list-item.disabled .event-list-item-container{background-color:var(--ix-event-list-item--background--disabled);border-color:var(--ix-event-list-item--border-color--disabled)}:host(.disabled){pointer-events:none}`;
const EventListItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.itemClick = createEvent(this, "itemClick", 7);
  }
  /**
   * Variant of the event list item
   */
  variant = "outline";
  /**
   * Color of the status indicator.
   * You can find a list of all available colors in our documentation.
   * Example value: `--si-sys-color-background-danger`
   *
   * {@link https://ix.siemens.io/docs/styles/colors}
   *
   * @breaking-change 6.0.0 Requires the full CSS custom property name
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
    return h(Host, { key: "169deda9f453a22da220d6bccb1b282cfa6dc003", class: {
      disabled: this.disabled,
      [`event-list-item-${this.variant}`]: true
    } }, h("div", { key: "e938aab5739d1b013378ec83188fe2fbb232ed72", role: "listitem", "aria-disabled": a11yBoolean(this.disabled), class: {
      "event-list-item": true,
      selected: this.selected,
      disabled: this.disabled
    } }, h("div", { key: "0b05b5063943192860b7ae60c518ee41a3947799", class: `indicator ${!this.itemColor ? "indicator-empty" : ""}`, style: {
      "background-color": color,
      opacity: `${this.disabled ? 0.4 : 1}`
    } }), h("div", { key: "bebe78bbbe53d5b6959931da19a30152d84b3858", class: "event-list-item-container" }, h("div", { key: "27cdb7a2dabdc24b2fd4015da771b5643ef8db3c", class: "event-content" }, h("slot", { key: "9616c4763ccfd5a6878e9ad8dff8daf33dc9b5cf" })), this.chevron && h("ix-icon", { key: "8db1aacbdb6b1929d61bf7a9974684fca708f4be", name: iconChevronRight, class: "chevron-icon", "aria-hidden": "true" }))));
  }
};
EventListItem.style = eventListItemCss();
export {
  EventListItem as ix_event_list_item
};
