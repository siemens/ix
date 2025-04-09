import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global.bff64ac3.js";
import { b as iconChevronRightSmall } from "./index-CrTP-icT.451e0ae2.js";
const cardAccordionCss = ':host{display:flex;position:relative;flex-direction:column;width:100%;transition:var(--theme-default-time) ease-in-out}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .expand-action{all:unset;display:flex;position:relative;-webkit-appearance:button;-moz-appearance:button;appearance:button;height:2.5rem;width:100%;background-color:var(--theme-color-component-1);align-items:center;justify-content:flex-start}:host .expand-action:hover{background:var(--theme-color-component-1--hover)}:host .expand-action:active{background:var(--theme-color-component-1--active)}:host .expand-action:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .expand-action::before{content:"";position:absolute;width:100%;height:100%;background-color:var(--ix-card-background);z-index:-1}:host .expand-action:not(.show),:host .expand-action:not(.show)::before{border-bottom-left-radius:var(--theme-default-border-radius);border-bottom-right-radius:var(--theme-default-border-radius)}:host .expand-icon{margin-left:0.5rem;transition:var(--theme-default-time) transform ease-in-out}:host .expand-icon.show{transform:rotate(90deg)}:host .expand-content{display:grid;position:relative;grid-template-rows:0fr;transition:var(--theme-default-time) ease-in-out;width:100%;max-height:14.75rem;opacity:0;background-color:var(--theme-color-component-1)}:host .expand-content.show{grid-template-rows:14.75rem;opacity:1}:host .expand-content-inner{position:relative;height:100%;overflow:hidden}:host .expand-content.show .expand-content-body{display:none;overflow:hidden;color:var(--theme-color-std-text)}:host .expand-content.show .expand-content-body{display:block;overflow:auto;height:calc(100% - 1rem)}:host .expand-content-footer{display:block;position:relative;width:100%;height:1rem;margin-top:auto;margin-bottom:0px;background-color:var(--theme-color-component-1);border-bottom-left-radius:var(--theme-default-border-radius);border-bottom-right-radius:var(--theme-default-border-radius)}';
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
    return h(Host, { key: "491fb99db65dab3492d23e3122ca9da2c899b232", slot: "card-accordion" }, h("button", { key: "b498d87343ed4e70ef4a094642fc4906b309f5b3", tabIndex: 0, class: { "expand-action": true, show: this.expandContent }, onClick: (event) => this.onExpandActionClick(event), role: "button", type: "button", "aria-expanded": this.expandContent, "aria-controls": getAriaControlsId() }, h("ix-icon", { key: "eb8b3af0c8ded220c6c8d62b3c9da45ba302c5d6", name: iconChevronRightSmall, class: {
      "expand-icon": true,
      show: this.expandContent
    } })), h("div", { key: "9b0b53385f7b0b7f3365c89e7134869990c6270a", class: {
      "expand-content": true,
      show: this.expandContent
    } }, h("div", { key: "a79520b455e3d344aca02ca70a9b7ff3262c76f8", class: "expand-content-inner" }, h("div", { key: "c0798bb66e28ca6e2a5d6ee38b21222677d5a09a", class: "expand-content-body" }, h("slot", { key: "01f775b08d53d8ea428b35d972d75af719006e8c" })), h("div", { key: "df5f62b0667977076557472c5713e30a7840a1a4", class: "expand-content-footer" }))));
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
CardAccordion.style = cardAccordionCss;
const cardTitleCss = ":host{display:flex;position:relative;flex-direction:row;align-items:center;margin-top:0.25rem;margin-bottom:0.25rem;gap:1rem;width:100%}:host .title-actions{display:flex;position:relative;flex-direction:row;gap:0.25rem;margin-left:auto;margin-right:0}";
const CardHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "0f4e8785e6861fa9151cece5946a7b33e85bd7fd" }, h("slot", { key: "d8909ebe344940cda53d4076ccd1291eb1240f8b" }), h("div", { key: "f87b52b2b467664d6e9d886d358b1c6b5403aae8", class: "title-actions" }, h("slot", { key: "9e45b897368e305f0ce1e66b47424360c44c148d", name: "title-actions" })));
  }
};
CardHeader.style = cardTitleCss;
export {
  CardAccordion as ix_card_accordion,
  CardHeader as ix_card_title
};
