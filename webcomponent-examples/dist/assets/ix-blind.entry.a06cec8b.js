import { r as registerInstance, c as createEvent, h, F as Fragment, H as Host, g as getElement } from "./global.8b5b8f81.js";
import { a as anime } from "./anime.es-a5520566.eae0a8f1.js";
import { a as a11yBoolean } from "./a11y-d5444a76.05d6fe5e.js";
const blindCss = ":host{display:flex;flex-direction:column;border-radius:var(--theme-blind--border-radius);overflow:hidden}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .blind-header-wrapper{position:relative;min-height:3rem;height:3rem;overflow:hidden}:host .blind-header-content{display:flex;position:relative;align-items:center;justify-content:flex-start;width:100%;height:100%;pointer-events:none;padding-left:0.5rem}:host .blind-header-title{display:flex;position:relative;align-items:center;flex-grow:1;margin-right:0.5rem}:host .blind-header{all:unset;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block;position:absolute;top:0px;left:0px;pointer-events:all;padding-left:2.5rem;min-height:3rem;height:3rem;width:calc(100% - 2 * var(--theme-blind--border-thickness));border:solid var(--theme-blind--border-thickness) transparent;border-radius:var(--theme-blind--border-radius) var(--theme-blind--border-radius) 0 0;cursor:pointer}:host .blind-header:not(.disabled):not(:disabled):focus-visible{border-color:var(--theme-color-focus-bdr);outline:none}:host .blind-header-title-icon,:host .collapse-icon{margin-right:0.5rem}:host .blind-header-title-row{display:flex;flex-grow:1;overflow:hidden}:host .blind-header-title-col{display:inline-flex;align-items:center;width:calc(100% - 1rem);overflow:hidden}:host .blind-header-title-col:not(:first-of-type){justify-content:flex-end}:host ix-typography{flex-grow:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .blind-header-title-label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-inline-end:0.5rem}:host .blind-header-title-sublabel{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-inline:0.5rem}:host .blind-header-title{display:flex;align-items:center;flex-grow:1;height:100%;min-width:0}:host .blind-header-labels{display:inline-flex;flex-grow:1;min-width:0}:host .blind-content{display:block;padding:1rem;transition-property:padding;transition-duration:var(--theme-default-time);transition-timing-function:ease-in}:host .blind-content.hide{max-height:0;padding-top:0px;padding-bottom:0px}:host .header-actions{pointer-events:all;margin-left:auto}:host(.blind-alarm){background-color:var(--theme-blind-base--background)}:host(.blind-alarm) .blind-header{background-color:var(--theme-color-alarm)}:host(.blind-alarm) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-alarm) .blind-header:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-alarm--hover)}:host(.blind-alarm) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-alarm) .blind-header:not(.disabled):not(:disabled):active,:host(.blind-alarm) .blind-header:not(.disabled):not(:disabled).active{background-color:var(--theme-color-alarm--active)}:host(.blind-alarm) .blind-header-title-label,:host(.blind-alarm) .blind-header-title-sublabel{color:var(--theme-color-alarm--contrast)}:host(.blind-critical){background-color:var(--theme-blind-base--background)}:host(.blind-critical) .blind-header{background-color:var(--theme-color-critical)}:host(.blind-critical) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-critical) .blind-header:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-critical--hover)}:host(.blind-critical) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-critical) .blind-header:not(.disabled):not(:disabled):active,:host(.blind-critical) .blind-header:not(.disabled):not(:disabled).active{background-color:var(--theme-color-critical--active)}:host(.blind-critical) .blind-header-title-label,:host(.blind-critical) .blind-header-title-sublabel{color:var(--theme-color-critical--contrast)}:host(.blind-info){background-color:var(--theme-blind-base--background)}:host(.blind-info) .blind-header{background-color:var(--theme-color-info)}:host(.blind-info) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-info) .blind-header:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-info--hover)}:host(.blind-info) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-info) .blind-header:not(.disabled):not(:disabled):active,:host(.blind-info) .blind-header:not(.disabled):not(:disabled).active{background-color:var(--theme-color-info--active)}:host(.blind-info) .blind-header-title-label,:host(.blind-info) .blind-header-title-sublabel{color:var(--theme-color-info--contrast)}:host(.blind-insight){background-color:var(--theme-blind-base--background)}:host(.blind-insight) .blind-header{background-color:var(--theme-color-insight)}:host(.blind-insight) .blind-header:not(.disabled):not(:disabled).hover,:host(.blind-insight) .blind-header:not(.disabled):not(:disabled):hover{background-color:var(--theme-ghost--background--hover)}:host(.blind-insight) .blind-header:not(.disabled):not(:disabled).active,:host(.blind-insight) .blind-header:not(.disabled):not(:disabled):active{background-color:var(--theme-ghost--background--active)}:host(.blind-insight) .blind-header-title-label{color:var(--theme-color-std-text)}:host(.blind-insight) .blind-header-title-sublabel{color:var(--theme-color-soft-text)}:host(.blind-neutral){background-color:var(--theme-blind-base--background)}:host(.blind-neutral) .blind-header{background-color:var(--theme-color-neutral)}:host(.blind-neutral) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-neutral) .blind-header:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-neutral--hover)}:host(.blind-neutral) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-neutral) .blind-header:not(.disabled):not(:disabled):active,:host(.blind-neutral) .blind-header:not(.disabled):not(:disabled).active{background-color:var(--theme-color-neutral--active)}:host(.blind-neutral) .blind-header-title-label,:host(.blind-neutral) .blind-header-title-sublabel{color:var(--theme-color-neutral--contrast)}:host(.blind-notification){background-color:var(--theme-blind-base--background)}:host(.blind-notification) .blind-header{background-color:var(--theme-color-notification)}:host(.blind-notification) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-notification) .blind-header:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-notification--hover)}:host(.blind-notification) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-notification) .blind-header:not(.disabled):not(:disabled):active,:host(.blind-notification) .blind-header:not(.disabled):not(:disabled).active{background-color:var(--theme-color-notification--active)}:host(.blind-notification) .blind-header-title-label,:host(.blind-notification) .blind-header-title-sublabel{color:var(--theme-color-notification--contrast)}:host(.blind-success){background-color:var(--theme-blind-base--background)}:host(.blind-success) .blind-header{background-color:var(--theme-color-success)}:host(.blind-success) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-success) .blind-header:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-success--hover)}:host(.blind-success) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-success) .blind-header:not(.disabled):not(:disabled):active,:host(.blind-success) .blind-header:not(.disabled):not(:disabled).active{background-color:var(--theme-color-success--active)}:host(.blind-success) .blind-header-title-label,:host(.blind-success) .blind-header-title-sublabel{color:var(--theme-color-success--contrast)}:host(.blind-warning){background-color:var(--theme-blind-base--background)}:host(.blind-warning) .blind-header{background-color:var(--theme-color-warning)}:host(.blind-warning) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-warning) .blind-header:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-warning--hover)}:host(.blind-warning) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-warning) .blind-header:not(.disabled):not(:disabled):active,:host(.blind-warning) .blind-header:not(.disabled):not(:disabled).active{background-color:var(--theme-color-warning--active)}:host(.blind-warning) .blind-header-title-label,:host(.blind-warning) .blind-header-title-sublabel{color:var(--theme-color-warning--contrast)}:host(.blind-primary){background-color:var(--theme-blind-base--background)}:host(.blind-primary) .blind-header{background-color:var(--theme-color-primary)}:host(.blind-primary) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-primary) .blind-header:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-primary--hover)}:host(.blind-primary) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-primary) .blind-header:not(.disabled):not(:disabled):active,:host(.blind-primary) .blind-header:not(.disabled):not(:disabled).active{background-color:var(--theme-color-primary--active)}:host(.blind-primary) .blind-header-title-label,:host(.blind-primary) .blind-header-title-sublabel{color:var(--theme-color-primary--contrast)}:host(.blind-outline){border:solid var(--theme-blind--border-thickness) var(--theme-blind-base--border-color);border-color:var(--theme-color-soft-bdr)}:host(.blind-outline) .blind-header{background-color:var(--theme-color-ghost)}:host(.blind-outline) .blind-header:not(.disabled):not(:disabled).hover,:host(.blind-outline) .blind-header:not(.disabled):not(:disabled):hover{background-color:var(--theme-ghost--background--hover)}:host(.blind-outline) .blind-header:not(.disabled):not(:disabled).active,:host(.blind-outline) .blind-header:not(.disabled):not(:disabled):active{background-color:var(--theme-ghost--background--active)}:host(.blind-outline) .blind-header-title-label{color:var(--theme-color-std-text)}:host(.blind-outline) .blind-header-title-sublabel{color:var(--theme-color-soft-text)}";
const IxBlindStyle0 = blindCss;
let sequentialInstanceId = 0;
const Blind = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.collapsedChange = createEvent(this, "collapsedChange", 7);
    this.blindId = ++sequentialInstanceId;
    this.collapsed = false;
    this.label = void 0;
    this.sublabel = void 0;
    this.icon = void 0;
    this.variant = "insight";
  }
  onHeaderClick() {
    this.collapsed = !this.collapsed;
    this.collapsedChange.emit(this.collapsed);
  }
  componentDidLoad() {
    this.animateCollapse(this.collapsed);
  }
  get content() {
    return this.hostElement.shadowRoot.querySelector(".blind-content");
  }
  animation(isCollapsed) {
    this.animateCollapse(isCollapsed);
  }
  animateCollapse(isCollapsed) {
    if (isCollapsed) {
      this.rotateChevronRight();
    } else {
      this.rotateChevronDown();
    }
  }
  rotateChevronDown() {
    anime({
      targets: this.chevronRef,
      duration: 150,
      easing: "easeInOutSine",
      rotateZ: 90
    });
    anime({
      targets: this.content,
      duration: 150,
      easing: "easeInOutSine",
      opacity: 1
    });
  }
  rotateChevronRight() {
    anime({
      targets: this.chevronRef,
      duration: 150,
      easing: "easeInOutSine",
      rotateZ: 0
    });
    anime({
      targets: this.content,
      duration: 150,
      easing: "easeInOutSine",
      opacity: 0
    });
  }
  render() {
    return h(Host, { key: "5ec247be84e5612134ffec1e53730f61a214cd0b", class: {
      [`blind-${this.variant}`]: true
    } }, h("div", { key: "abe3273f7a820cd6481d7f75a174e3c6c332b438", class: "blind-header-wrapper" }, h("button", { key: "12a572e7145c435451a8a9cc89f66c50d58d3cca", class: {
      "blind-header": true,
      [`blind-${this.variant}`]: true,
      closed: this.collapsed
    }, type: "button", "aria-labelledby": `ix-blind-header-title-${this.blindId}`, "aria-controls": `ix-blind-content-section-${this.blindId}`, "aria-expanded": a11yBoolean(!this.collapsed), onClick: () => this.onHeaderClick() }, h("slot", { key: "11a9cc78537fac060310eeba7f57a147907e2a14", name: "custom-header" })), h("div", { key: "08abe64452f9841fc50951708ffdbb13f594e80b", class: "blind-header-content" }, h("ix-icon", { key: "67a41dada571459470153b03247bc7f175c206de", class: "collapse-icon", name: "chevron-right-small", color: this.variant === "insight" || this.variant === "outline" ? "color-primary" : `color-${this.variant}--contrast`, ref: (ref) => this.chevronRef = ref }), h("div", { key: "6a898defd05378868577745464956fd8ecc67472", class: "blind-header-title", id: `ix-blind-header-title-${this.blindId}` }, this.label !== void 0 ? h(Fragment, null, this.icon && h("ix-icon", { class: "blind-header-title-icon", name: this.icon, color: this.variant === "insight" || this.variant === "outline" ? "color-std-text" : `color-${this.variant}--contrast` }), h("div", { class: "blind-header-title-row" }, h("div", { class: "blind-header-title-col" }, h("ix-typography", { title: this.label, format: "label-lg", bold: true }, h("div", { class: "blind-header-title-label", title: this.label }, this.label))), this.sublabel && h("div", { class: "blind-header-title-col" }, h("ix-typography", { title: this.sublabel }, h("div", { class: "blind-header-title-sublabel" }, this.sublabel)))), h("div", { class: "header-actions" }, h("slot", { name: "header-actions" }))) : null))), h("section", { key: "909fdaeec7732c55c81833e6f0212cea5b2174b0", id: `ix-blind-content-section-${this.blindId}`, "aria-labelledby": `ix-blind-header-title-${this.blindId}` }, h("div", { key: "ace2f5a2269acc3d0c2c79a0cf31df6283038bec", class: {
      "blind-content": true,
      hide: this.collapsed
    } }, !this.collapsed ? h("slot", null) : null)));
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "collapsed": ["animation"]
    };
  }
};
Blind.style = IxBlindStyle0;
export {
  Blind as ix_blind
};
