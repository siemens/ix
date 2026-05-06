import { r as registerInstance, g as getElement, h, H as Host } from "./global-Dfa5QLOG.js";
import { c as createMutationObserver } from "./mutation-observer-CX81WQtk-DFcmhOTk.js";
import { c as convertToRemString } from "./rwd.util-JJddxCCh-B7dE3uhl.js";
import { m as modulesExports } from "./index-DCm5XQXq-CfBgwJIC.js";
const eventListCss = () => `:host{display:block;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host(.item-size-l){--event-list-item-height:6.5rem;--event-list-item-content-white-space:normal}:host(.compact){--event-list-item-border-radius:0;--event-list-item-margin-bottom:0}`;
const EventList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  mutationObserver = createMutationObserver(this.onMutation.bind(this));
  static fadeOutDuration = 50;
  static fadeInDuration = 150;
  get hostElement() {
    return getElement(this);
  }
  /**
   * Determines the height of list items.
   * This can either be one of two predefined sizes ('S' or 'L') or an absolute pixel value.
   * In case a number is supplied it will get converted to rem internally.
   * Defaults to 'S'.
   */
  itemHeight = "S";
  /**
   * Make event-list items more compact
   */
  compact = false;
  /**
   * Animate state change transitions. Defaults to 'false'.
   */
  animated = false;
  /**
   * Display a chevron icon in list items. Defaults to 'false'
   */
  chevron = false;
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
      if (!Number.isNaN(Number(this.itemHeight))) {
        const height = convertToRemString(this.itemHeight);
        const eventListItems = this.findEventListItems(mutationRecords);
        eventListItems.forEach((item) => this.setCustomHeight(item, height));
      }
      this.handleChevron(this.chevron);
      this.triggerFadeIn();
    });
  }
  findEventListItems(mutationRecords) {
    const eventListItems = [];
    mutationRecords.forEach((mutation) => {
      if (mutation.type !== "childList") {
        return;
      }
      mutation.addedNodes.forEach((node) => {
        const element = node;
        if (element.tagName === "IX-EVENT-LIST-ITEM") {
          eventListItems.push(element);
        }
      });
    });
    return eventListItems;
  }
  setCustomHeight(item, height) {
    item.style.setProperty("--event-list-item-height", height);
  }
  triggerFadeOut() {
    return new Promise((resolve) => {
      if (!this.animated) {
        resolve();
      }
      const listElement = this.hostElement.shadowRoot.querySelector("ul");
      modulesExports.animate(listElement, {
        opacity: [{ opacity: 1, easing: "easeInSine" }, { opacity: 0 }],
        duration: EventList.fadeOutDuration,
        onComplete: () => {
          resolve();
        }
      });
    });
  }
  triggerFadeIn() {
    if (!this.animated) {
      return;
    }
    const listItems = this.hostElement.querySelectorAll("ix-event-list-item");
    listItems.forEach((e, i) => {
      const delay = i * 80;
      const offset = delay / (delay + EventList.fadeInDuration);
      modulesExports.animate(e, {
        offset,
        duration: EventList.fadeInDuration + delay,
        opacity: [0, 1],
        easing: "easeInOutSine",
        delay,
        autoplay: true
      });
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
    return h(Host, { key: "14bb1caf05acec1646477f63ac80ed0a74751616", class: {
      "item-size-s": this.itemHeight === "S",
      "item-size-l": this.itemHeight === "L",
      compact: this.compact
    } }, h("div", { key: "178fe08dd82117059703479b189cecbd3b979c8b", role: "list" }, h("slot", { key: "184ed4a08c1d10bf53c8d9f9ce1d2722305f0b16" })));
  }
  static get watchers() {
    return {
      "chevron": [{
        "watchChevron": 0
      }]
    };
  }
};
EventList.style = eventListCss();
export {
  EventList as ix_event_list
};
