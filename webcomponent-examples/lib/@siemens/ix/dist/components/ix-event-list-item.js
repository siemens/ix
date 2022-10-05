import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const eventListItemCss = ".ix-event-list-item{display:flex;align-items:center;position:relative;height:2.5rem;max-height:2.5rem;border-radius:0.25rem;background-color:var(--theme-event-list-item-bg);overflow:hidden;cursor:pointer;margin-bottom:0.5rem}.ix-event-list-item .indicator{height:100%;width:0.5rem;max-width:0.5rem;min-width:0.5rem;border-top-left-radius:0.25rem;border-bottom-left-radius:0.25rem}.ix-event-list-item .indicator-empty{border:var(--theme-weak-bdr-1);border-right:none}.ix-event-list-item .cui-event-list-item-content-container{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;flex-grow:1;width:calc(100% - (1rem + 0.5rem));height:100%;border:0.062rem solid;border-color:var(--theme-event-list-item-border);border-top-left-radius:0;border-top-right-radius:0.25rem;border-bottom-left-radius:0;border-bottom-right-radius:0.25rem;border-left:none;padding-left:1rem}.ix-event-list-item .chevron-icon{display:none;margin-left:auto;margin-right:0.5rem;opacity:0.6;align-self:center}.ix-event-list-item .event-content{display:flex;align-items:center;width:100%;height:100%;overflow:hidden}.ix-event-list-item:not(.disabled):not(:disabled){cursor:pointer}.ix-event-list-item:not(.disabled):not(:disabled):hover{background-color:var(--theme-event-list-item-hover)}.ix-event-list-item:not(.disabled):not(:disabled){cursor:pointer}.ix-event-list-item:not(.disabled):not(:disabled):active{background-color:var(--theme-event-list-item-pressed)}.ix-event-list-item.selected{background-color:var(--theme-event-item--background--selected)}.ix-event-list-item[disabled],.ix-event-list-item.disabled{pointer-events:none}";

const EventListItem = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.itemClick = createEvent(this, "itemClick", 7);
    /**
     * Opacity of the status indicator.
     * Defaults to 1.0
     *
     * @deprecated Will be removed in 7.0.0. Use color with alpha value.
     */
    this.opacity = 1;
  }
  handleItemClick() {
    this.itemClick.emit();
  }
  render() {
    return (h("div", { class: {
        'ix-event-list-item': true,
        selected: this.selected,
        disabled: this.disabled,
      } }, h("div", { class: `indicator ${!this.color ? 'indicator-empty' : ''}`, style: {
        'background-color': this.color
          ? `var(--theme-${this.color})`
          : 'inherit',
        opacity: `${this.disabled ? 0.4 : this.opacity}`,
      } }), h("div", { class: "cui-event-list-item-content-container" }, h("div", { class: "event-content" }, h("slot", null)), h("i", { class: "glyph glyph-16 glyph-chevron-right chevron-icon" }))));
  }
  get el() { return this; }
  static get style() { return eventListItemCss; }
}, [4, "ix-event-list-item", {
    "color": [1],
    "selected": [4],
    "disabled": [4],
    "chevron": [4],
    "opacity": [2]
  }, [[1, "click", "handleItemClick"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ix-event-list-item"];
  components.forEach(tagName => { switch (tagName) {
    case "ix-event-list-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, EventListItem);
      }
      break;
  } });
}

const IxEventListItem = EventListItem;
const defineCustomElement = defineCustomElement$1;

export { IxEventListItem, defineCustomElement };
