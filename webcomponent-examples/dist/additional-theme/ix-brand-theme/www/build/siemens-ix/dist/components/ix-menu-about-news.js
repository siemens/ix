import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$3 } from './icon.js';
import { d as defineCustomElement$2 } from './icon-button.js';

const menuAboutNewsCss = ".sc-ix-menu-about-news-h{--margin:0.5rem;display:block;position:fixed;width:20rem;height:auto;background-color:var(--theme-color-1);border:var(--theme-weak-bdr-1);border-radius:0.25rem;padding:1rem;left:4rem;z-index:10000;transition:left var(--animate-duration);margin-left:var(--margin) !important;box-shadow:var(--theme-box-shadow-level-4)}.expanded.sc-ix-menu-about-news-h{left:calc(4rem + 12rem)}.show.sc-ix-menu-about-news-h{display:none}.sc-ix-menu-about-news-h .banner-container.sc-ix-menu-about-news{position:absolute;top:0.0625rem;left:1rem}.sc-ix-menu-about-news-h .banner-container.sc-ix-menu-about-news svg.sc-ix-menu-about-news{position:absolute;height:3.625rem;width:3rem}.sc-ix-menu-about-news-h .banner-container.sc-ix-menu-about-news svg.sc-ix-menu-about-news polygon.sc-ix-menu-about-news{fill:var(--theme-color-primary)}.sc-ix-menu-about-news-h .banner-container.sc-ix-menu-about-news ix-icon.sc-ix-menu-about-news{margin:0.5rem;position:absolute;z-index:1}.sc-ix-menu-about-news-h .cui-popover-news-header.sc-ix-menu-about-news{margin-bottom:2rem;margin-left:4rem;margin-top:-0.25rem}.sc-ix-menu-about-news-h .popover-body.sc-ix-menu-about-news{color:var(--theme-color-std-text)}.sc-ix-menu-about-news-h .cui-popover-news-footer.sc-ix-menu-about-news{display:flex;justify-content:flex-end;margin-top:1rem}.sc-ix-menu-about-news-h ix-icon-button.sc-ix-menu-about-news{top:0.5rem;right:0.5rem;position:absolute}.sc-ix-menu-about-news-h #arrow.sc-ix-menu-about-news{position:absolute;width:0.5rem;height:0.5rem;background-color:var(--theme-color-1);border-left:var(--theme-weak-bdr-1);border-bottom:var(--theme-weak-bdr-1);transform:translateX(calc(var(--margin) * -1 - 0.8rem)) rotateZ(45deg)}";

const MenuAboutNews = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.showMore = createEvent(this, "showMore", 7);
    this.closePopover = createEvent(this, "closePopover", 7);
    this.show = false;
    this.label = undefined;
    this.i18nShowMore = 'Show more';
    this.aboutItemLabel = undefined;
    this.offsetBottom = 0;
    this.expanded = false;
  }
  render() {
    return (h(Host, { class: {
        expanded: this.expanded,
        show: !this.show,
      } }, h("div", { class: "banner-container" }, h("ix-icon", { color: "color-inv-contrast-text", name: "shout", size: "32" }), h("svg", { viewBox: "0 0 48 56", xmlns: "http://www.w3.org/2000/svg" }, h("polygon", { points: "0 0 48 0 48 56 24 48 0 56" }))), h("div", { class: "cui-popover-news-header" }, h("span", { class: "text-l-title" }, this.label)), h("ix-icon-button", { size: "24", icon: "close-small", ghost: true, onClick: () => {
        this.show = false;
        this.closePopover.emit();
      } }), h("slot", null), this.aboutItemLabel ? (h("div", { class: "cui-popover-news-footer" }, h("button", { class: "btn btn-primary", onClick: (e) => {
        this.show = false;
        this.showMore.emit(e);
      } }, this.i18nShowMore))) : null, h("div", { id: "arrow" })));
  }
  static get style() { return menuAboutNewsCss; }
}, [6, "ix-menu-about-news", {
    "show": [1540],
    "label": [1],
    "i18nShowMore": [1, "i-1-8n-show-more"],
    "aboutItemLabel": [1, "about-item-label"],
    "offsetBottom": [2, "offset-bottom"],
    "expanded": [4]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ix-menu-about-news", "ix-icon", "ix-icon-button"];
  components.forEach(tagName => { switch (tagName) {
    case "ix-menu-about-news":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MenuAboutNews);
      }
      break;
    case "ix-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "ix-icon-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const IxMenuAboutNews = MenuAboutNews;
const defineCustomElement = defineCustomElement$1;

export { IxMenuAboutNews, defineCustomElement };
