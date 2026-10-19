import { r as registerInstance, g as getElement, h, H as Host } from "./global-DPf-m4l1.js";
import { c as createMutationObserver } from "./mutation-observer-CX81WQtk-DFcmhOTk.js";
import { c as convertToRemString } from "./rwd.util-DIEEaulE-B7dE3uhl.js";
import { a as animate, E as Easing } from "./animate-BQARm6pw-B-wfC2r4.js";
import "./animation-C2bTHF7D-HeOCyL6m.js";
const eventListCss = () => `@charset "UTF-8";:host{--ix-event-list-large-item--height:calc(     var(--si-sys-sizing-size-130) + var(--si-sys-sizing-spacing-y-40)   )}:host{display:block;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host(.item-size-l){--event-list-item-height:var(--ix-event-list-large-item--height);--event-list-item-content-white-space:normal}:host(.compact){--event-list-item-border-radius:0;--event-list-item-margin-bottom:0}`;
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
        return resolve();
      }
      const listElement = this.hostElement.shadowRoot?.querySelector('div[role="list"]');
      if (!listElement) {
        return resolve();
      }
      if (!listElement) {
        resolve();
        return;
      }
      animate(listElement, [{ opacity: 1 }, { opacity: 0 }], {
        duration: EventList.fadeOutDuration,
        easing: Easing.easeOutQuad,
        persist: false,
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
      animate(e, [{ opacity: 0 }, { opacity: 1 }], {
        duration: EventList.fadeInDuration + delay,
        easing: Easing.easeOutQuad,
        delay,
        persist: false
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
    return h(Host, { key: "944bd35d84f6a3368cfc096608e4907804ef618c", class: {
      "item-size-s": this.itemHeight === "S",
      "item-size-l": this.itemHeight === "L",
      compact: this.compact
    } }, h("div", { key: "25ce26fca90b9ecfa580f406c0cc700f8669651d", role: "list" }, h("slot", { key: "ac2ee6025086a00c70e172f68c04176221bd1d73" })));
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
