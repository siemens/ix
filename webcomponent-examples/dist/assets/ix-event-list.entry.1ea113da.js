import { r as registerInstance, h, H as Host, g as getElement } from "./index.918151cc.js";
import { c as createMutationObserver } from "./mutation-observer-db8757e6.4a24be36.js";
import { c as convertToRemString } from "./rwd.util-d8e00a88.087cdec0.js";
const eventListCss = ":host{display:block;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host ul{list-style:none;padding:0;margin-top:0;margin-bottom:0}:host(.item-size-l){--event-list-item-height:6.5rem;--event-list-item-content-white-space:normal}:host(.compact){--event-list-item-border-radius:0;--event-list-item-margin-bottom:0}";
const IxEventListStyle0 = eventListCss;
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
    return h(Host, { key: "753ef5eaecb97380a454359d59397b163a75c70f", class: {
      "item-size-s": this.itemHeight === "S",
      "item-size-l": this.itemHeight === "L",
      compact: this.compact
    } }, h("ul", { key: "c4264b59d439dc2dae8ec3153aa04fe5ee04383c" }, h("slot", { key: "114837af21b63c7acec8eed2901aacc046608ab3" })));
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
EventList.style = IxEventListStyle0;
export {
  EventList as ix_event_list
};
