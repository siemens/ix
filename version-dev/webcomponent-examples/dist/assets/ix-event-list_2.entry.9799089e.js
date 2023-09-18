import { r as registerInstance, h, H as Host, g as getElement, c as createEvent } from "./index.505c8453.js";
import { c as createMutationObserver } from "./mutation-observer-7d01bbea.e6c38b94.js";
import { c as convertToRemString } from "./rwd.util-cfc2ea72.925cc3e0.js";
const eventListCss = ":host{display:block;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host ul{list-style:none;padding:0;margin-bottom:0}:host(.item-size-l){--event-list-item-height:6.5rem;--event-list-item-content-white-space:normal}:host(.compact){--event-list-item-border-radius:0;--event-list-item-margin-bottom:0}";
const EventList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.mutationObserver = createMutationObserver(this.onMutation.bind(this));
    this.itemHeight = "S";
    this.compact = false;
    this.animated = true;
    this.chevron = void 0;
  }
  watchChevron(chevron) {
    this.handleChevron(chevron);
  }
  componentDidLoad() {
    if (this.animated) {
      this.triggerFadeIn();
    }
    if (!Number.isNaN(Number(this.itemHeight))) {
      const height = convertToRemString(this.itemHeight);
      this.hostElement.querySelectorAll("ix-event-list-item").forEach((item) => {
        this.setCustomHeight(item, height);
      });
    }
    this.handleChevron(this.chevron);
    this.mutationObserver.observe(this.hostElement, {
      childList: true,
      subtree: true
    });
  }
  onMutation(mutationRecords) {
    this.triggerFadeOut().then(() => {
      if (typeof this.itemHeight === "number") {
        const height = convertToRemString(this.itemHeight);
        mutationRecords.filter((mutation) => mutation.type === "childList").forEach((mutation) => mutation.addedNodes.forEach((item) => {
          const itemHtml = item;
          this.setCustomHeight(itemHtml, height);
        }));
      }
      this.handleChevron(this.chevron);
      this.triggerFadeIn();
    });
  }
  setCustomHeight(item, height) {
    item.style.setProperty("--event-list-item-height", height);
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
    const listElement = this.hostElement.shadowRoot.querySelector("ul");
    return listElement.animate(keyframes, {
      duration: EventList.fadeOutDuration
    }).finished;
  }
  triggerFadeIn() {
    if (!this.animated) {
      return;
    }
    const listItems = this.hostElement.querySelectorAll("ix-event-list-item");
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
  handleChevron(chevron) {
    const listItems = this.hostElement.querySelectorAll("ix-event-list-item");
    listItems.forEach((e) => {
      if (chevron) {
        e.setAttribute("chevron", "true");
      } else if (chevron !== void 0) {
        e.removeAttribute("chevron");
      }
    });
  }
  render() {
    return h(Host, { class: {
      "item-size-s": this.itemHeight === "S",
      "item-size-l": this.itemHeight === "L",
      compact: this.compact
    } }, h("ul", null, h("slot", null)));
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "chevron": ["watchChevron"]
    };
  }
};
EventList.fadeOutDuration = 50;
EventList.fadeInDuration = 150;
EventList.style = eventListCss;
const eventListItemCss = ":host{}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .event-list-item{display:flex;align-items:center;position:relative;height:var(--event-list-item-height, 2.5rem);max-height:var(--event-list-item-height, 2.5rem);border-radius:var(--event-list-item-border-radius, 0.25rem);background-color:var(--theme-event-item--background);overflow:hidden;transition:150ms;cursor:pointer;margin-bottom:var(--event-list-item-margin-bottom, 0.5rem)}:host .event-list-item .indicator{height:100%;width:0.5rem;max-width:0.5rem;min-width:0.5rem;border-top-left-radius:var(--event-list-item-border-radius, 0.25rem);border-bottom-left-radius:var(--event-list-item-border-radius, 0.25rem)}:host .event-list-item .indicator-empty{border:var(--theme-weak-bdr-1);border-right:none}:host .event-list-item .event-list-item-container{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;flex-grow:1;width:calc(100% - (1rem + 0.5rem));height:100%;border:0.062rem solid;border-color:var(--theme-event-item--border);border-top-left-radius:0;border-top-right-radius:var(--event-list-item-border-radius, 0.25rem);border-bottom-left-radius:0;border-bottom-right-radius:var(--event-list-item-border-radius, 0.25rem);border-left:none;padding-left:1rem}:host .event-list-item .event-content{display:flex;align-items:center;width:100%;height:var(--event-list-item-height, 100%);max-height:var(--event-list-item-height, 100%);white-space:var(--event-list-item-content-white-space, inherit);overflow:hidden}:host .event-list-item .chevron-icon{margin-left:auto;margin-right:0.5rem;opacity:0.6;align-self:center}:host .event-list-item:not(.selected):not(.disabled):not(:disabled){cursor:pointer}:host .event-list-item:not(.selected):not(.disabled):not(:disabled):hover{background-color:var(--theme-event-item--background--hover)}:host .event-list-item:not(.selected):not(.disabled):not(:disabled){cursor:pointer}:host .event-list-item:not(.selected):not(.disabled):not(:disabled):active,:host .event-list-item:not(.selected):not(.disabled):not(:disabled).active{background-color:var(--theme-event-item--background--active)}:host .event-list-item:not(.selected) .event-list-item-container:not(.disabled):not(:disabled){cursor:pointer}:host .event-list-item:not(.selected) .event-list-item-container:not(.disabled):not(:disabled):hover{border-color:var(--theme-event-item--border--hover)}:host .event-list-item:not(.selected) .event-list-item-container:not(.disabled):not(:disabled){cursor:pointer}:host .event-list-item:not(.selected) .event-list-item-container:not(.disabled):not(:disabled):active,:host .event-list-item:not(.selected) .event-list-item-container:not(.disabled):not(:disabled).active{border-color:var(--theme-event-item--border--active)}:host .event-list-item.selected .event-list-item-container{background-color:var(--theme-event-item--background--selected);border-color:var(--theme-event-item--border--selected)}:host .event-list-item[disabled],:host .event-list-item.disabled{pointer-events:none}:host .event-list-item[disabled] .event-list-item-container,:host .event-list-item.disabled .event-list-item-container{background-color:var(--theme-event-item--background--disabled);border-color:var(--theme-event-item--border--disabled)}:host(.disabled){pointer-events:none}";
const EventListItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.itemClick = createEvent(this, "itemClick", 7);
    this.color = void 0;
    this.selected = void 0;
    this.disabled = void 0;
    this.chevron = void 0;
  }
  handleItemClick() {
    this.itemClick.emit();
  }
  render() {
    var _a;
    const color = ((_a = this.color) === null || _a === void 0 ? void 0 : _a.startsWith("--theme")) ? `var(${this.color})` : `var(--theme-${this.color})`;
    return h(Host, { class: {
      disabled: this.disabled
    } }, h("div", { class: {
      "event-list-item": true,
      selected: this.selected,
      disabled: this.disabled
    } }, h("div", { class: `indicator ${!this.color ? "indicator-empty" : ""}`, style: {
      "background-color": this.color ? color : "inherit",
      opacity: `${this.disabled ? 0.4 : 1}`
    } }), h("div", { class: "event-list-item-container" }, h("div", { class: "event-content" }, h("slot", null)), this.chevron && h("ix-icon", { name: "chevron-right", size: "16", class: "chevron-icon" }))));
  }
};
EventListItem.style = eventListItemCss;
export {
  EventList as ix_event_list,
  EventListItem as ix_event_list_item
};
