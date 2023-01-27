import { r as registerInstance, h, H as Host, g as getElement, c as createEvent } from "./index.e66f90c3.js";
import { c as createMutationObserver } from "./mutation-observer-379959bb.97e22f4f.js";
import { c as convertToRemString } from "./rwd.util-4a61a4b8.a45b2830.js";
const eventListCss = ".sc-ix-event-list-h{display:block;position:relative}ul.sc-ix-event-list{list-style:none;padding:0;margin-bottom:0}.sc-ix-event-list-s>.sc-ix-event-list-h:not(.item-size-s) .ix-event-list-item,.sc-ix-event-list-h:not(.item-size-l) .ix-event-list-item.sc-ix-event-list{display:none}.sc-ix-event-list-h.chevron .sc-ix-event-list-s .ix-event-list-item .chevron-icon{display:initial}.item-size-l .sc-ix-event-list-s .ix-event-list-item{height:6.5rem;max-height:6.5rem}.item-size-l .sc-ix-event-list-s .ix-event-list-item .event-content{height:6.5rem;max-height:6.5rem;white-space:normal}.compact .sc-ix-event-list-s .ix-event-list-item{margin-bottom:0px;border-radius:0px}.compact .sc-ix-event-list-s .ix-event-list-item .indicator{border-top-left-radius:0px;border-bottom-left-radius:0px}.compact .sc-ix-event-list-s .ix-event-list-item .event-list-item-container{border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0}.compact.sc-ix-event-list .compact.sc-ix-event-list:not(:last-child) .event-list-item-container.sc-ix-event-list{border-bottom:none}";
const EventList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.mutationObserver = createMutationObserver(this.onMutation.bind(this));
    this.itemHeight = "S";
    this.compact = false;
    this.animated = true;
    this.chevron = void 0;
  }
  componentDidLoad() {
    if (this.animated) {
      this.triggerFadeIn();
    }
    if (typeof this.itemHeight === "number") {
      const height = convertToRemString(this.itemHeight);
      this.el.querySelectorAll(".ix-event-list-item").forEach((item) => {
        item.classList.add("d-flex");
        this.setCustomHeight(item, height);
      });
    }
    this.mutationObserver.observe(this.el, { childList: true, subtree: true });
  }
  onMutation(mutationRecords) {
    this.triggerFadeOut().then(() => {
      if (typeof this.itemHeight === "number") {
        const height = convertToRemString(this.itemHeight);
        mutationRecords.filter((mutation) => mutation.type === "childList").forEach((mutation) => mutation.addedNodes.forEach((item) => {
          var _a;
          const itemHtml = item;
          if (!((_a = itemHtml.classList) === null || _a === void 0 ? void 0 : _a.contains("ix-event-list-item"))) {
            return;
          }
          itemHtml.classList.add("d-flex");
          this.setCustomHeight(itemHtml, height);
        }));
      }
      this.triggerFadeIn();
    });
  }
  setCustomHeight(item, height) {
    item.style.height = height;
    item.style.maxHeight = height;
  }
  triggerFadeOut() {
    if (!this.animated) {
      return Promise.resolve();
    }
    const keyframes = [
      {
        opacity: 1,
        easing: "ease-in"
      },
      { opacity: 0 }
    ];
    const listElement = this.el.querySelector("ul");
    return listElement.animate(keyframes, {
      duration: EventList.fadeOutDuration
    }).finished;
  }
  triggerFadeIn() {
    if (!this.animated) {
      return;
    }
    const listItems = this.el.querySelectorAll(".ix-event-list-item");
    listItems.forEach((e, i) => {
      const delay = i * 80;
      const offset = delay / (delay + EventList.fadeInDuration);
      const keyframes = [
        { opacity: 0 },
        { opacity: 0, easing: "ease-out", offset },
        { opacity: 1 }
      ];
      const options = {
        duration: EventList.fadeInDuration + delay,
        iterations: 1
      };
      e.animate(keyframes, options);
    });
  }
  render() {
    return h(Host, { class: {
      "item-size-s": this.itemHeight === "S",
      "item-size-l": this.itemHeight === "L",
      compact: this.compact,
      chevron: this.chevron
    } }, h("ul", null, h("slot", null)));
  }
  get el() {
    return getElement(this);
  }
};
EventList.fadeOutDuration = 50;
EventList.fadeInDuration = 150;
EventList.style = eventListCss;
const eventListItemCss = ".ix-event-list-item{display:flex;align-items:center;position:relative;height:2.5rem;max-height:2.5rem;border-radius:0.25rem;background-color:var(--theme-event-item--background);overflow:hidden;cursor:pointer;margin-bottom:0.5rem}.ix-event-list-item:not(.disabled):not(:disabled){cursor:pointer}.ix-event-list-item:not(.disabled):not(:disabled):hover{background-color:var(--theme-event-item--background--hover)}.ix-event-list-item:not(.disabled):not(:disabled){cursor:pointer}.ix-event-list-item:not(.disabled):not(:disabled):active{background-color:var(--theme-event-item--background--active)}.ix-event-list-item .indicator{height:100%;width:0.5rem;max-width:0.5rem;min-width:0.5rem;border-top-left-radius:0.25rem;border-bottom-left-radius:0.25rem}.ix-event-list-item .indicator-empty{border:var(--theme-weak-bdr-1);border-right:none}.ix-event-list-item .event-list-item-container{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;flex-grow:1;width:calc(100% - (1rem + 0.5rem));height:100%;border:0.062rem solid;border-color:var(--theme-event-item--border);border-top-left-radius:0;border-top-right-radius:0.25rem;border-bottom-left-radius:0;border-bottom-right-radius:0.25rem;border-left:none;padding-left:1rem}.ix-event-list-item .event-list-item-container:not(.disabled):not(:disabled){cursor:pointer}.ix-event-list-item .event-list-item-container:not(.disabled):not(:disabled):hover{border-color:var(--theme-event-item--border--hover)}.ix-event-list-item .event-list-item-container:not(.disabled):not(:disabled){cursor:pointer}.ix-event-list-item .event-list-item-container:not(.disabled):not(:disabled):active{border-color:var(--theme-event-item--border--active)}.ix-event-list-item.selected:not(:active,.active) .event-list-item-container{background-color:var(--theme-event-item--background--selected);border-color:var(--theme-event-item--border--selected)}.ix-event-list-item[disabled],.ix-event-list-item.disabled{pointer-events:none}.ix-event-list-item[disabled] .event-list-item-container,.ix-event-list-item.disabled .event-list-item-container{background-color:var(--theme-event-item--background--disabled);border-color:var(--theme-event-item--border--disabled)}.ix-event-list-item .chevron-icon{margin-left:auto;margin-right:0.5rem;opacity:0.6;align-self:center}.ix-event-list-item .event-content{display:flex;align-items:center;width:100%;height:100%;overflow:hidden}";
const EventListItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.itemClick = createEvent(this, "itemClick", 7);
    this.color = void 0;
    this.selected = void 0;
    this.disabled = void 0;
    this.chevron = void 0;
    this.opacity = 1;
  }
  handleItemClick() {
    this.itemClick.emit();
  }
  render() {
    return h("div", { class: {
      "ix-event-list-item": true,
      selected: this.selected,
      disabled: this.disabled
    } }, h("div", { class: `indicator ${!this.color ? "indicator-empty" : ""}`, style: {
      "background-color": this.color ? `var(--theme-${this.color})` : "inherit",
      opacity: `${this.disabled ? 0.4 : this.opacity}`
    } }), h("div", { class: "event-list-item-container" }, h("div", { class: "event-content" }, h("slot", null)), this.chevron ? h("i", { class: "glyph glyph-16 glyph-chevron-right chevron-icon" }) : ""));
  }
  get el() {
    return getElement(this);
  }
};
EventListItem.style = eventListItemCss;
export {
  EventList as ix_event_list,
  EventListItem as ix_event_list_item
};
