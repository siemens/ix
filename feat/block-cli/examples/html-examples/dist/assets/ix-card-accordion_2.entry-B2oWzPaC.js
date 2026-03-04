import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global-BRURWDG-.js";
import { h as iconChevronDownSmall } from "./index-BBzEV-f4-ChQfUIyc.js";
const cardAccordionCss = () => `:host{display:flex;position:relative;flex-direction:column;width:100%;transition:var(--theme-default-time) ease-in-out}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .expand-action{all:unset;display:flex;position:relative;-webkit-appearance:button;-moz-appearance:button;appearance:button;height:2.5rem;width:100%;align-items:center;justify-content:flex-start}:host .expand-action:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .expand-action::before{content:"";position:absolute;width:100%;height:100%;background-color:var(--ix-card-background);z-index:-1}:host .expand-icon{margin-left:0.5rem;transition:var(--theme-default-time) transform ease-in-out}:host .expand-icon.show{transform:rotate(180deg)}:host .expand-content{display:grid;position:relative;grid-template-rows:0fr;transition:var(--theme-default-time) ease-in-out;width:100%;max-height:14.75rem;opacity:0}:host .expand-content.show{grid-template-rows:14.75rem;opacity:1}:host .expand-content-inner{position:relative;height:100%;overflow:hidden}:host .expand-content.show .expand-content-body{display:none;overflow:hidden;color:var(--theme-color-std-text)}:host .expand-content.show .expand-content-body{display:block;overflow:auto;height:calc(100% - 1rem)}:host .expand-content-footer{display:block;position:relative;width:100%;height:1rem;margin-top:auto;margin-bottom:0px;background-color:var(--theme-color-component-1);border-bottom-left-radius:var(--theme-default-border-radius);border-bottom-right-radius:var(--theme-default-border-radius)}:host(.variant-outline) .expand-action{background-color:var(--theme-push-card-outline-accordion--background)}:host(.variant-outline) .expand-action:hover{background:var(--theme-push-card-outline-accordion--background--hover)}:host(.variant-outline) .expand-action:active{background:var(--theme-push-card-outline-accordion--background--active)}:host(.variant-outline) .expand-content{background-color:var(--theme-push-card-outline-accordion-frame--background)}:host(.variant-outline) .expand-content.show{border:var(--theme-push-card-outline-accordion-frame--border-width, 0px) solid var(--theme-push-card-outline-accordion-frame--border-color)}:host(.variant-outline) .expand-content.show .expand-content-body{color:var(--theme-color-std-text)}:host(.variant-outline) .expand-content-footer{background-color:var(--theme-push-card-outline-accordion-footer--background)}:host(.variant-filled) .expand-action{background-color:var(--theme-push-card-filled-accordion--background)}:host(.variant-filled) .expand-action:hover{background:var(--theme-push-card-filled-accordion--background--hover)}:host(.variant-filled) .expand-action:active{background:var(--theme-push-card-filled-accordion--background--active)}:host(.variant-filled) .expand-content{background-color:var(--theme-push-card-filled-accordion-frame--background)}:host(.variant-filled) .expand-content.show{border:var(--theme-push-card-filled-accordion-frame--border-width, 0px) solid var(--theme-push-card-filled-accordion-frame--border-color)}:host(.variant-filled) .expand-content.show .expand-content-body{color:var(--theme-color-std-text)}:host(.variant-filled) .expand-content-footer{background-color:var(--theme-push-card-filled-accordion-footer--background)}:host(.variant-alarm) .expand-action{background-color:var(--theme-push-card-alarm-accordion--background)}:host(.variant-alarm) .expand-action:hover{background:var(--theme-push-card-alarm-accordion--background--hover)}:host(.variant-alarm) .expand-action:active{background:var(--theme-push-card-alarm-accordion--background--active)}:host(.variant-alarm) .expand-content{background-color:var(--theme-push-card-alarm-accordion-frame--background)}:host(.variant-alarm) .expand-content.show{border:var(--theme-push-card-alarm-accordion-frame--border-width, 0px) solid var(--theme-push-card-alarm-accordion-frame--border-color)}:host(.variant-alarm) .expand-content.show .expand-content-body{color:var(--theme-color-std-text)}:host(.variant-alarm) .expand-content-footer{background-color:var(--theme-push-card-alarm-accordion-footer--background)}:host(.variant-critical) .expand-action{background-color:var(--theme-push-card-critical-accordion--background)}:host(.variant-critical) .expand-action:hover{background:var(--theme-push-card-critical-accordion--background--hover)}:host(.variant-critical) .expand-action:active{background:var(--theme-push-card-critical-accordion--background--active)}:host(.variant-critical) .expand-content{background-color:var(--theme-push-card-critical-accordion-frame--background)}:host(.variant-critical) .expand-content.show{border:var(--theme-push-card-critical-accordion-frame--border-width, 0px) solid var(--theme-push-card-critical-accordion-frame--border-color)}:host(.variant-critical) .expand-content.show .expand-content-body{color:var(--theme-color-std-text)}:host(.variant-critical) .expand-content-footer{background-color:var(--theme-push-card-critical-accordion-footer--background)}:host(.variant-warning) .expand-action{background-color:var(--theme-push-card-warning-accordion--background)}:host(.variant-warning) .expand-action:hover{background:var(--theme-push-card-warning-accordion--background--hover)}:host(.variant-warning) .expand-action:active{background:var(--theme-push-card-warning-accordion--background--active)}:host(.variant-warning) .expand-content{background-color:var(--theme-push-card-warning-accordion-frame--background)}:host(.variant-warning) .expand-content.show{border:var(--theme-push-card-warning-accordion-frame--border-width, 0px) solid var(--theme-push-card-warning-accordion-frame--border-color)}:host(.variant-warning) .expand-content.show .expand-content-body{color:var(--theme-color-std-text)}:host(.variant-warning) .expand-content-footer{background-color:var(--theme-push-card-warning-accordion-footer--background)}:host(.variant-success) .expand-action{background-color:var(--theme-push-card-success-accordion--background)}:host(.variant-success) .expand-action:hover{background:var(--theme-push-card-success-accordion--background--hover)}:host(.variant-success) .expand-action:active{background:var(--theme-push-card-success-accordion--background--active)}:host(.variant-success) .expand-content{background-color:var(--theme-push-card-success-accordion-frame--background)}:host(.variant-success) .expand-content.show{border:var(--theme-push-card-success-accordion-frame--border-width, 0px) solid var(--theme-push-card-success-accordion-frame--border-color)}:host(.variant-success) .expand-content.show .expand-content-body{color:var(--theme-color-std-text)}:host(.variant-success) .expand-content-footer{background-color:var(--theme-push-card-success-accordion-footer--background)}:host(.variant-info) .expand-action{background-color:var(--theme-push-card-info-accordion--background)}:host(.variant-info) .expand-action:hover{background:var(--theme-push-card-info-accordion--background--hover)}:host(.variant-info) .expand-action:active{background:var(--theme-push-card-info-accordion--background--active)}:host(.variant-info) .expand-content{background-color:var(--theme-push-card-info-accordion-frame--background)}:host(.variant-info) .expand-content.show{border:var(--theme-push-card-info-accordion-frame--border-width, 0px) solid var(--theme-push-card-info-accordion-frame--border-color)}:host(.variant-info) .expand-content.show .expand-content-body{color:var(--theme-color-std-text)}:host(.variant-info) .expand-content-footer{background-color:var(--theme-push-card-info-accordion-footer--background)}:host(.variant-neutral) .expand-action{background-color:var(--theme-push-card-neutral-accordion--background)}:host(.variant-neutral) .expand-action:hover{background:var(--theme-push-card-neutral-accordion--background--hover)}:host(.variant-neutral) .expand-action:active{background:var(--theme-push-card-neutral-accordion--background--active)}:host(.variant-neutral) .expand-content{background-color:var(--theme-push-card-neutral-accordion-frame--background)}:host(.variant-neutral) .expand-content.show{border:var(--theme-push-card-neutral-accordion-frame--border-width, 0px) solid var(--theme-push-card-neutral-accordion-frame--border-color)}:host(.variant-neutral) .expand-content.show .expand-content-body{color:var(--theme-color-std-text)}:host(.variant-neutral) .expand-content-footer{background-color:var(--theme-push-card-neutral-accordion-footer--background)}:host(.variant-primary) .expand-action{background-color:var(--theme-push-card-primary-accordion--background)}:host(.variant-primary) .expand-action:hover{background:var(--theme-push-card-primary-accordion--background--hover)}:host(.variant-primary) .expand-action:active{background:var(--theme-push-card-primary-accordion--background--active)}:host(.variant-primary) .expand-content{background-color:var(--theme-push-card-primary-accordion-frame--background)}:host(.variant-primary) .expand-content.show{border:var(--theme-push-card-primary-accordion-frame--border-width, 0px) solid var(--theme-push-card-primary-accordion-frame--border-color)}:host(.variant-primary) .expand-content.show .expand-content-body{color:var(--theme-color-std-text)}:host(.variant-primary) .expand-content-footer{background-color:var(--theme-push-card-primary-accordion-footer--background)}`;
let accordionControlId = 0;
const getAriaControlsId = (prefix = "expand-content") => {
  return [prefix, accordionControlId++].join("-");
};
const CardAccordion = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.accordionExpand = createEvent(this, "accordionExpand", 7);
    this.collapse = false;
    this.variant = "outline";
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
    return h(Host, { key: "7f2e1d935bc4ef2c1ba2549b92ca6e09a7f5fd69", slot: "card-accordion", class: {
      [`variant-${this.variant}`]: true
    } }, h("button", { key: "51508a4c9497395a91af066fb54aca9372966104", tabIndex: 0, class: { "expand-action": true, show: this.expandContent }, onClick: (event) => this.onExpandActionClick(event), role: "button", type: "button", "aria-expanded": this.expandContent, "aria-controls": getAriaControlsId(), "aria-label": this.ariaLabelExpandButton }, h("ix-icon", { key: "29abe5d1542b29bba2f7b93e17f01e19e73ccded", name: iconChevronDownSmall, class: {
      "expand-icon": true,
      show: this.expandContent
    } })), h("div", { key: "30095aec4ca1f34fd45d58c59c938408f2bd5134", class: {
      "expand-content": true,
      show: this.expandContent
    } }, h("div", { key: "b1e0f210af45599b1d2641738bc2846dc66330be", class: "expand-content-inner" }, h("div", { key: "1fdb8f7af09025e03090ba3527304afc68e55dc7", class: "expand-content-body" }, h("slot", { key: "3f69fd6a55b12f7e52f72d9baa153b2edef73bdc" })), h("div", { key: "04002021db8750d1f34de5ae0fd17fea6d9b299f", class: "expand-content-footer" }))));
  }
  get hostElement() {
    return getElement(this);
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
const cardTitleCss = () => `:host{display:flex;position:relative;flex-direction:row;align-items:center;margin-top:0.25rem;margin-bottom:0.25rem;gap:1rem;width:100%}:host .title-actions{display:flex;position:relative;flex-direction:row;gap:0.25rem;margin-left:auto;margin-right:0}`;
const CardHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "163f292c5dfad2d003bdc8588dcc78046a2e5eb8" }, h("slot", { key: "22d2428752a3db256286c1e48b98a1e04bfb4b68" }), h("div", { key: "93960d34a6095c1cab1d2df86365d7be2b2641fb", class: "title-actions" }, h("slot", { key: "e47740f7279e0f581fe800f08bb0980b4b8c0f10", name: "title-actions" })));
  }
};
CardHeader.style = cardTitleCss();
export {
  CardAccordion as ix_card_accordion,
  CardHeader as ix_card_title
};
