import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./index.b385ac31.js";
const cardAccordionCss = ':host{display:flex;position:relative;flex-direction:column;width:100%;transition:var(--theme-default-time) ease-in-out}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .expand-action{all:unset;display:flex;position:relative;-webkit-appearance:button;-moz-appearance:button;appearance:button;height:2.5rem;width:100%;background-color:var(--theme-color-component-1);align-items:center;justify-content:flex-start}:host .expand-action:not(.disabled):not(:disabled).hover,:host .expand-action:not(.disabled):not(:disabled):hover{background-color:var(--theme-ghost--background--hover)}:host .expand-action:not(.disabled):not(:disabled).active,:host .expand-action:not(.disabled):not(:disabled):active{background-color:var(--theme-ghost--background--active)}:host .expand-action:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .expand-action::before{content:"";position:absolute;width:100%;height:100%;background-color:var(--ix-card-background);z-index:-1}:host .expand-action:not(.show),:host .expand-action:not(.show)::before{border-bottom-left-radius:var(--theme-default-border-radius);border-bottom-right-radius:var(--theme-default-border-radius)}:host .expand-icon{margin-left:0.5rem;transition:var(--theme-default-time) transform ease-in-out}:host .expand-icon.show{transform:rotate(90deg)}:host .expand-content{display:grid;position:relative;grid-template-rows:0fr;transition:var(--theme-default-time) ease-in-out;width:100%;max-height:14.75rem;opacity:0;background-color:var(--theme-color-component-1)}:host .expand-content.show{grid-template-rows:14.75rem;opacity:1}:host .expand-content-inner{position:relative;height:100%;overflow:hidden}:host .expand-content.show .expand-content-body{display:none;overflow:hidden;color:var(--theme-color-std-text)}:host .expand-content.show .expand-content-body{display:block;overflow:auto;height:calc(100% - 1rem)}:host .expand-content-footer{display:block;position:relative;width:100%;height:1rem;margin-top:auto;margin-bottom:0px;background-color:var(--theme-color-component-1);border-bottom-left-radius:var(--theme-default-border-radius);border-bottom-right-radius:var(--theme-default-border-radius)}';
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
    return h(Host, { key: "4e4415039fe113164586e8620b2ba46671b1f9e9", slot: "card-accordion" }, h("button", { key: "a99c3feec1c46a12f863260786bc14f924c5ebb8", tabIndex: 0, class: { "expand-action": true, show: this.expandContent }, onClick: (event) => this.onExpandActionClick(event), role: "button", type: "button", "aria-expanded": this.expandContent, "aria-controls": getAriaControlsId() }, h("ix-icon", { key: "765b773718f44c6d20df0c2c4341322725f92144", name: "chevron-right-small", class: {
      "expand-icon": true,
      show: this.expandContent
    } })), h("div", { key: "3f2584f144a95f302ab429a30cf81581c81c459b", class: {
      "expand-content": true,
      show: this.expandContent
    } }, h("div", { key: "0966471b4a55de828c847eb1d4f5262f3d7fc426", class: "expand-content-inner" }, h("div", { key: "65c0f7b5fb40e6bf035f728ee2c1535bf43cb4c1", class: "expand-content-body" }, h("slot", { key: "30a679ed712e09f6a338a780374ee9c10f853870" })), h("div", { key: "ab1bcd363d8af33052084ee7a998feacb7e8fa57", class: "expand-content-footer" }))));
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
    return h(Host, { key: "0d6fb3a5e4d91a6ca36e670dd6840a430fd5bf80" }, h("slot", { key: "18f10b373eace5c4cf7102a8a5eca93402f67884" }), h("div", { key: "19bacf432aef00963c20c3f54abe458717df03c8", class: "title-actions" }, h("slot", { key: "bd52f42b05e873163be38840453d9564e17b03a9", name: "title-actions" })));
  }
};
CardHeader.style = IxCardTitleStyle0;
export {
  CardAccordion as ix_card_accordion,
  CardHeader as ix_card_title
};
