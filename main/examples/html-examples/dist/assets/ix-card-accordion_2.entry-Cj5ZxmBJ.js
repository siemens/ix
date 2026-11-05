import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./index-CgUi6DzV-fQJuTF8s.js";
import { x as iconChevronDownSmall } from "./index-CYGHrGrm-D-7vpgvu.js";
import "./preload-helper-UZRgTS1n.js";
const cardAccordionCss = () => `@charset "UTF-8";:host{--ix-card-accordion--transition-duration:var(--theme-default-time);--ix-card-accordion-expand-icon--transition-duration:var(     --theme-default-time   );--ix-card-accordion-content--transition-duration:var(--theme-default-time);--ix-card-accordion--outline-color--focus:var(--si-sys-color-effects-focus);--ix-card-accordion--outline-width--focus:var(--si-sys-sizing-border-width-default);--ix-card-accordion-content--color:var(--si-sys-color-text-primary);--ix-card-accordion-footer--background:var(--si-sys-color-background-1);--ix-card-accordion-footer--border-radius:var(--si-sys-sizing-border-radius-sm);--ix-card-accordion--focus--outline-offset:var(--si-sys-sizing-focus-ring-offset);--ix-card-accordion-chrome--background:var(--si-sys-color-background-1);--ix-card-accordion-chrome--background--hover:var(--si-sys-color-background-hover);--ix-card-accordion-chrome--background--active:var(--si-sys-color-background-active);--ix-card-accordion-chrome-footer--background:var(--si-sys-color-background-1);--ix-card-accordion-chrome-frame--background:var(--si-sys-color-background-1);--ix-card-accordion-chrome-frame--border-color:var(--si-sys-color-border-3);--ix-card-accordion-chrome-frame--border-width:var(--si-sys-sizing-border-width-default);--ix-card-accordion-expand-action--border-bottom-left-radius:var(--si-sys-sizing-border-radius-none);--ix-card-accordion-expand-action--border-bottom-right-radius:var(--si-sys-sizing-border-radius-none)}:host(:not(.outline)){--ix-card-accordion-chrome-frame--border-color:transparent;--ix-card-accordion-chrome-frame--border-width:var(--si-sys-sizing-border-width-none);--ix-card-accordion-expand-action--border-bottom-left-radius:var(--si-sys-sizing-border-radius-sm);--ix-card-accordion-expand-action--border-bottom-right-radius:var(--si-sys-sizing-border-radius-sm)}:host{--ix-card-accordion--expanded-height:var(--si-sys-sizing-size-160);--ix-card-accordion-expand-action--height:calc(     var(--si-sys-sizing-size-80) + var(--si-sys-sizing-spacing-y-20)   );--ix-card-accordion-expand-action--border-top-width:var(--si-sys-sizing-border-width-none);--ix-card-accordion-expand-action--border-top-color:transparent;--ix-card-accordion-expand-action--border-radius--expanded:var(--si-sys-sizing-border-radius-none);--ix-card-accordion-expand-icon--icon-size:var(--si-sys-sizing-icon-md);--ix-card-accordion-expand-icon--margin-left:var(--si-sys-sizing-spacing-x-40);--ix-card-accordion-expand-content-body--height:calc(     var(--ix-card-accordion-expanded-height) - var(--si-sys-sizing-spacing-y-60)   );--ix-card-accordion-expand-content-footer--height:var(--si-sys-sizing-size-60)}:host{display:flex;position:relative;flex-direction:column;width:100%;transition:var(--ix-card-accordion--transition-duration) ease-in-out;--ix-card-accordion-expanded-height:var(     --ix-card-accordion--expanded-height   )}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .expand-action{all:unset;display:flex;position:relative;box-sizing:border-box;-webkit-appearance:button;-moz-appearance:button;appearance:button;height:var(--ix-card-accordion-expand-action--height);width:100%;align-items:center;justify-content:flex-start;border-top:var(--ix-card-accordion-expand-action--border-top-width) solid var(--ix-card-accordion-expand-action--border-top-color);border-bottom-left-radius:var(--ix-card-accordion-expand-action--border-bottom-left-radius);border-bottom-right-radius:var(--ix-card-accordion-expand-action--border-bottom-right-radius);background-color:var(--ix-card-accordion-chrome--background)}:host .expand-action:not(.disabled):not(:disabled):focus-visible{outline:var(--ix-card-accordion--outline-width--focus) solid var(--ix-card-accordion--outline-color--focus);outline-offset:var(--ix-card-accordion--focus--outline-offset)}:host .expand-action:hover{background:var(--ix-card-accordion-chrome--background--hover)}:host .expand-action:active{background:var(--ix-card-accordion-chrome--background--active)}:host .expand-action{}:host .expand-action.show{border-bottom-left-radius:var(--ix-card-accordion-expand-action--border-radius--expanded);border-bottom-right-radius:var(--ix-card-accordion-expand-action--border-radius--expanded)}:host .expand-action::before{content:"";position:absolute;width:100%;height:100%;background-color:var(--ix-card-background);z-index:-1}:host .expand-icon{block-size:var(--ix-card-accordion-expand-icon--icon-size);inline-size:var(--ix-card-accordion-expand-icon--icon-size);margin-left:var(--ix-card-accordion-expand-icon--margin-left);min-block-size:var(--ix-card-accordion-expand-icon--icon-size);min-inline-size:var(--ix-card-accordion-expand-icon--icon-size);transition:var(--ix-card-accordion-expand-icon--transition-duration) transform ease-in-out}:host .expand-icon.show{transform:rotate(180deg)}:host .expand-content{display:block;position:relative;width:100%;height:0;overflow:hidden;transition:height var(--ix-card-accordion-content--transition-duration) ease-in-out;background-color:var(--ix-card-accordion-chrome-frame--background)}:host .expand-content::after{content:"";position:absolute;inset:0;pointer-events:none;border-radius:var(--ix-card-accordion-expand-content--border-radius, 0);border-top:none;border:var(--ix-card-accordion-chrome-frame--border-width, 0px) solid transparent;border-color:var(--ix-card-accordion-chrome-frame--border-color)}:host .expand-content.show{height:var(--ix-card-accordion-expanded-height)}:host .expand-content-inner{position:relative;height:100%;overflow:hidden}:host .expand-content-body{opacity:0;transition:opacity var(--ix-card-accordion-content--transition-duration) ease-in-out}:host .expand-content.show .expand-content-body{display:block;overflow:auto;height:var(--ix-card-accordion-expand-content-body--height);color:var(--ix-card-accordion-content--color);opacity:1}:host .expand-content-footer{display:block;position:absolute;bottom:0;left:0;width:100%;height:var(--ix-card-accordion-expand-content-footer--height);background-color:var(--ix-card-accordion-chrome-footer--background);border-bottom-left-radius:var(--ix-card-accordion-footer--border-radius);border-bottom-right-radius:var(--ix-card-accordion-footer--border-radius)}`;
let accordionControlId = 0;
const getAriaControlsId = (prefix = "expand-content") => {
  return [prefix, accordionControlId++].join("-");
};
const CardAccordion = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.accordionExpand = createEvent(this, "accordionExpand", 7);
  }
  /**
   * ARIA label for the card's expand button.
   * Will be set as aria-label on the nested HTML button element
   *
   * @since 3.2.0
   */
  ariaLabelExpandButton;
  /**
   * Collapse the card
   */
  collapse = false;
  /**
   * Accordion status variant.
   *
   * @deprecated Has no visual effect; status chrome is owned by the parent card. Prefer omitting this prop
   * @since 4.0.0
   */
  variant = "base";
  /**
   * Show the accordion with outline chrome.
   * When omitted, outline chrome is used (`true`).
   * When `false`, uses filled accordion chrome.
   *
   * @since 6.0.0
   */
  outline;
  get hostElement() {
    return getElement(this);
  }
  /**
   * @internal
   */
  accordionExpand;
  expandContent = false;
  onInitialExpandChange() {
    this.expandContent = !this.collapse;
  }
  get expandedContent() {
    return this.hostElement.shadowRoot.querySelector(".expand-content");
  }
  onExpandActionClick(event) {
    event.preventDefault();
    event.stopPropagation();
    this.expandContent = !this.expandContent;
    this.accordionExpand.emit({
      expand: this.expandContent,
      nativeEvent: event
    });
    if (this.expandContent) {
      this.scrollExpandedContentIntoView();
    }
  }
  scrollExpandedContentIntoView() {
    setTimeout(() => {
      if (!this.expandedContent) {
        return;
      }
      const rect = this.expandedContent.getBoundingClientRect();
      if (rect.bottom > window.innerHeight) {
        this.hostElement.shadowRoot.querySelector(".expand-content").scrollIntoView(false);
      }
    }, 150);
  }
  componentWillLoad() {
    this.onInitialExpandChange();
  }
  get isOutline() {
    return this.outline !== false;
  }
  render() {
    return h(Host, { key: "f984a613502e373ce065e5fa209e5192bb33f33d", slot: "card-accordion", class: {
      outline: this.isOutline
    } }, h("button", { key: "8275dbebb570621ac368e683deff8b0ba347fde6", tabIndex: 0, class: { "expand-action": true, show: this.expandContent }, onClick: (event) => this.onExpandActionClick(event), role: "button", type: "button", "aria-expanded": this.expandContent, "aria-controls": getAriaControlsId(), "aria-label": this.ariaLabelExpandButton }, h("ix-icon", { key: "21a71de998fee1ed8b67bc51e9f2a7df60016211", name: iconChevronDownSmall, class: {
      "expand-icon": true,
      show: this.expandContent
    } })), h("div", { key: "5828cd8548a62b2e2bac0860ebf1c98185efad2d", class: {
      "expand-content": true,
      show: this.expandContent
    } }, h("div", { key: "18c416b3d2889983c42e75e5274c5c20aba69543", class: "expand-content-inner" }, h("div", { key: "d81429ae72fac418b2258a937c51f74b085f536a", class: "expand-content-body" }, h("slot", { key: "439bd5210f4777556b68060dd54e243c6ef21b68" })), h("div", { key: "c518321d289caffa372eb95f37e3545491fdaa63", class: "expand-content-footer" }))));
  }
  static get watchers() {
    return {
      "collapse": [{
        "onInitialExpandChange": 0
      }]
    };
  }
};
CardAccordion.style = cardAccordionCss();
const cardTitleCss = () => `@charset "UTF-8";:host{--ix-card-title--margin-top:var(--si-sys-sizing-spacing-y-20);--ix-card-title--margin-bottom:var(--si-sys-sizing-spacing-y-20);--ix-card-title--gap:var(--si-sys-sizing-spacing-x-60);--ix-card-title-title-actions--gap:var(--si-sys-sizing-spacing-x-20)}:host{display:flex;position:relative;flex-direction:row;align-items:center;margin-top:var(--ix-card-title--margin-top);margin-bottom:var(--ix-card-title--margin-bottom);gap:var(--ix-card-title--gap);width:100%}:host .title-actions{display:flex;position:relative;flex-direction:row;gap:var(--ix-card-title-title-actions--gap);margin-left:auto;margin-right:0}`;
const CardHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "b5442f201748171e7e013097657e48d55b5b4b1c" }, h("slot", { key: "39c2f5d37a2b7fdc7e75e1ff2ec8e5f68fb38a8b" }), h("div", { key: "f1dc6010e4df853bb30ebdcaa700b1a1372fa434", class: "title-actions" }, h("slot", { key: "ed4e54d0946e2e9502971c89ceedae0c98ba0505", name: "title-actions" })));
  }
};
CardHeader.style = cardTitleCss();
export {
  CardAccordion as ix_card_accordion,
  CardHeader as ix_card_title
};
