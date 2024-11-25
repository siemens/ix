import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global.2bfd6008.js";
const cardAccordionCss = ':host{display:flex;position:relative;flex-direction:column;width:100%;transition:var(--theme-default-time) ease-in-out}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .expand-action{all:unset;display:flex;position:relative;-webkit-appearance:button;-moz-appearance:button;appearance:button;height:2.5rem;width:100%;background-color:var(--theme-color-component-1);align-items:center;justify-content:flex-start}:host .expand-action:hover{background:var(--theme-color-component-1--hover)}:host .expand-action:active{background:var(--theme-color-component-1--active)}:host .expand-action:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .expand-action::before{content:"";position:absolute;width:100%;height:100%;background-color:var(--ix-card-background);z-index:-1}:host .expand-action:not(.show),:host .expand-action:not(.show)::before{border-bottom-left-radius:var(--theme-default-border-radius);border-bottom-right-radius:var(--theme-default-border-radius)}:host .expand-icon{margin-left:0.5rem;transition:var(--theme-default-time) transform ease-in-out}:host .expand-icon.show{transform:rotate(90deg)}:host .expand-content{display:grid;position:relative;grid-template-rows:0fr;transition:var(--theme-default-time) ease-in-out;width:100%;max-height:14.75rem;opacity:0;background-color:var(--theme-color-component-1)}:host .expand-content.show{grid-template-rows:14.75rem;opacity:1}:host .expand-content-inner{position:relative;height:100%;overflow:hidden}:host .expand-content.show .expand-content-body{display:none;overflow:hidden;color:var(--theme-color-std-text)}:host .expand-content.show .expand-content-body{display:block;overflow:auto;height:calc(100% - 1rem)}:host .expand-content-footer{display:block;position:relative;width:100%;height:1rem;margin-top:auto;margin-bottom:0px;background-color:var(--theme-color-component-1);border-bottom-left-radius:var(--theme-default-border-radius);border-bottom-right-radius:var(--theme-default-border-radius)}';
const IxCardAccordionStyle0 = cardAccordionCss;
let accordionControlId = 0;
const getAriaControlsId = (prefix = "expand-content") => {
  return [prefix, accordionControlId++].join("-");
};
const CardAccordion = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.accordionExpand = createEvent(this, "accordionExpand", 7);
    this.collapse = false;
    this.expandContent = false;
  }
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
      const rect = this.expandedContent.getBoundingClientRect();
      if (rect.bottom > window.innerHeight) {
        this.hostElement.shadowRoot.querySelector(".expand-content").scrollIntoView(false);
      }
    }, 150);
  }
  componentWillLoad() {
    this.onInitialExpandChange();
  }
  render() {
    return h(Host, { key: "73d3ca21554724bf051ca8fe44365815cd2faf64", slot: "card-accordion" }, h("button", { key: "a3a71b2ebdd46c3e64fcc6b4df96e134701a9662", tabIndex: 0, class: { "expand-action": true, show: this.expandContent }, onClick: (event) => this.onExpandActionClick(event), role: "button", type: "button", "aria-expanded": this.expandContent, "aria-controls": getAriaControlsId() }, h("ix-icon", { key: "3713fc76176dc2b8ee99188a87c3de29851d567b", name: "chevron-right-small", class: {
      "expand-icon": true,
      show: this.expandContent
    } })), h("div", { key: "3081275d7694a98b35604cc9b5dd73c203b10426", class: {
      "expand-content": true,
      show: this.expandContent
    } }, h("div", { key: "ebad33d68b17070c4a3c133763279233d8984d1a", class: "expand-content-inner" }, h("div", { key: "32b3e459056717e3653f46e1b08e6f66f87a3143", class: "expand-content-body" }, h("slot", { key: "dbd2b6a198ca95727f34ae9160ee74dc313296d9" })), h("div", { key: "3d17c4534cf5bcf6366576e33c68292ed2765e06", class: "expand-content-footer" }))));
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "collapse": ["onInitialExpandChange"]
    };
  }
};
CardAccordion.style = IxCardAccordionStyle0;
const cardTitleCss = ":host{display:flex;position:relative;flex-direction:row;align-items:center;margin-top:0.25rem;margin-bottom:0.5rem;gap:1rem;width:100%}:host .title-actions{display:flex;position:relative;flex-direction:row;gap:0.25rem;margin-left:auto;margin-right:0px}";
const IxCardTitleStyle0 = cardTitleCss;
const CardHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "b1e7a55ef1edcdf510871c5bdb0324a94a23f020" }, h("slot", { key: "a31d4217aec1ed9759c9cb5a0b4a2efe5c8956f8" }), h("div", { key: "228f8069d056aae364cf3d98f21c4c06abc9c9f1", class: "title-actions" }, h("slot", { key: "2684711f7aed902d106b511daf538cb02bd8643f", name: "title-actions" })));
  }
};
CardHeader.style = IxCardTitleStyle0;
export {
  CardAccordion as ix_card_accordion,
  CardHeader as ix_card_title
};
