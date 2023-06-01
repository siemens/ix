import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { c as createMutationObserver } from './mutation-observer.js';
import { a as convertToRemString } from './rwd.util.js';

const eventListCss = ".sc-ix-event-list-h{display:block;position:relative}ul.sc-ix-event-list{list-style:none;padding:0;margin-bottom:0}.sc-ix-event-list-s>.sc-ix-event-list-h:not(.item-size-s) .ix-event-list-item,.sc-ix-event-list-h:not(.item-size-l) .ix-event-list-item.sc-ix-event-list{display:none}.sc-ix-event-list-h.chevron .sc-ix-event-list-s .ix-event-list-item .chevron-icon{display:initial}.item-size-l .sc-ix-event-list-s .ix-event-list-item{height:6.5rem;max-height:6.5rem}.item-size-l .sc-ix-event-list-s .ix-event-list-item .event-content{height:6.5rem;max-height:6.5rem;white-space:normal}.compact .sc-ix-event-list-s .ix-event-list-item{margin-bottom:0px;border-radius:0px}.compact .sc-ix-event-list-s .ix-event-list-item .indicator{border-top-left-radius:0px;border-bottom-left-radius:0px}.compact .sc-ix-event-list-s .ix-event-list-item .event-list-item-container{border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0}.compact.sc-ix-event-list .compact.sc-ix-event-list:not(:last-child) .event-list-item-container.sc-ix-event-list{border-bottom:none}";

const EventList = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.mutationObserver = createMutationObserver(this.onMutation.bind(this));
    this.itemHeight = 'S';
    this.compact = false;
    this.animated = true;
    this.chevron = undefined;
  }
  componentDidLoad() {
    if (this.animated) {
      this.triggerFadeIn();
    }
    if (typeof this.itemHeight === 'number') {
      const height = convertToRemString(this.itemHeight);
      this.el.querySelectorAll('.ix-event-list-item').forEach((item) => {
        item.classList.add('d-flex');
        this.setCustomHeight(item, height);
      });
    }
    this.mutationObserver.observe(this.el, { childList: true, subtree: true });
  }
  onMutation(mutationRecords) {
    this.triggerFadeOut().then(() => {
      if (typeof this.itemHeight === 'number') {
        const height = convertToRemString(this.itemHeight);
        mutationRecords
          .filter((mutation) => mutation.type === 'childList')
          .forEach((mutation) => mutation.addedNodes.forEach((item) => {
          var _a;
          const itemHtml = item;
          if (!((_a = itemHtml.classList) === null || _a === void 0 ? void 0 : _a.contains('ix-event-list-item'))) {
            return;
          }
          itemHtml.classList.add('d-flex');
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
        easing: 'ease-in',
      },
      { opacity: 0 },
    ];
    const listElement = this.el.querySelector('ul');
    return listElement.animate(keyframes, {
      duration: EventList.fadeOutDuration,
    }).finished;
  }
  triggerFadeIn() {
    if (!this.animated) {
      return;
    }
    const listItems = this.el.querySelectorAll('.ix-event-list-item');
    listItems.forEach((e, i) => {
      const delay = i * 80;
      const offset = delay / (delay + EventList.fadeInDuration);
      const keyframes = [
        { opacity: 0 },
        { opacity: 0, easing: 'ease-out', offset },
        { opacity: 1 },
      ];
      const options = {
        duration: EventList.fadeInDuration + delay,
        iterations: 1,
      };
      e.animate(keyframes, options);
    });
  }
  render() {
    return (h(Host, { class: {
        'item-size-s': this.itemHeight === 'S',
        'item-size-l': this.itemHeight === 'L',
        compact: this.compact,
        chevron: this.chevron,
      } }, h("ul", null, h("slot", null))));
  }
  get el() { return this; }
  static get style() { return eventListCss; }
}, [6, "ix-event-list", {
    "itemHeight": [8, "item-height"],
    "compact": [4],
    "animated": [4],
    "chevron": [4]
  }]);
EventList.fadeOutDuration = 50;
EventList.fadeInDuration = 150;
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ix-event-list"];
  components.forEach(tagName => { switch (tagName) {
    case "ix-event-list":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, EventList);
      }
      break;
  } });
}

const IxEventList = EventList;
const defineCustomElement = defineCustomElement$1;

export { IxEventList, defineCustomElement };
