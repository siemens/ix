import { r as registerInstance, c as createEvent, h, F as Fragment, H as Host, g as getElement } from "./global-DXu0UsM0.js";
import { a as animate } from "./anime.esm-DhE1t8Qh-cS95-bBh.js";
import { a as a11yBoolean } from "./a11y-DAzBNVe7-CO1Uj69l.js";
import { h as iconChevronDownSmall } from "./index-8HpPmDK_-DinFJk0z.js";
import { A as Animation } from "./animation-C5MWUgDN-BXCJNYHu.js";
const blindCss = ":host{display:flex;flex-direction:column;border-radius:var(--theme-blind--border-radius);overflow:hidden}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .blind-header-wrapper{position:relative;min-height:3rem;height:3rem;overflow:hidden}:host .blind-header-content{display:flex;position:relative;align-items:center;justify-content:flex-start;width:100%;height:100%;pointer-events:none;padding-left:0.5rem}:host .blind-header-title{display:flex;position:relative;align-items:center;flex-grow:1;margin-right:0.5rem}:host .blind-header{all:unset;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block;position:absolute;top:0px;left:0px;pointer-events:all;padding-left:2.5rem;min-height:3rem;height:3rem;width:calc(100% - 2 * var(--theme-blind--border-thickness));border:solid var(--theme-blind--border-thickness) transparent;border-radius:var(--theme-blind--border-radius) var(--theme-blind--border-radius) 0 0;cursor:pointer}:host .blind-header:not(.disabled):not(:disabled):focus-visible{border-color:var(--theme-color-focus-bdr);outline:none}:host .blind-header-title-icon,:host .collapse-icon{margin-right:0.5rem}:host .blind-header-title-row{display:flex;flex-grow:1;overflow:hidden}:host .blind-header-title-col{display:inline-flex;align-items:center;width:calc(100% - 1rem);overflow:hidden}:host .blind-header-title-col:not(:first-of-type){justify-content:flex-end}:host ix-typography{flex-grow:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .blind-header-title-label{padding-inline-end:0.5rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .blind-header-title-sublabel{padding-inline:0.5rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .blind-header-title{display:flex;align-items:center;flex-grow:1;height:100%;min-width:0}:host .blind-header-labels{display:inline-flex;flex-grow:1;min-width:0}:host .blind-content{display:block;padding:1rem;transition-property:padding;transition-duration:var(--theme-default-time);transition-timing-function:ease-in}:host .blind-content.hide{max-height:0;padding-top:0px;padding-bottom:0px}:host .header-actions{pointer-events:all;margin-left:auto}:host(.blind-alarm) .blind-header{background-color:var(--theme-color-alarm)}:host(.blind-alarm) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-alarm) .blind-header:not(.disabled):not(:disabled):hover,:host(.blind-alarm) .blind-header:not(.disabled):not(:disabled).hover{background-color:var(--theme-color-alarm--hover)}:host(.blind-alarm) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-alarm) .blind-header:not(.disabled):not(:disabled):active,:host(.blind-alarm) .blind-header:not(.disabled):not(:disabled).active{background-color:var(--theme-color-alarm--active)}:host(.blind-alarm) .blind-header-title-label,:host(.blind-alarm) .blind-header-title-sublabel{color:var(--theme-color-alarm--contrast)}:host(.blind-alarm){background-color:var(--theme-blind-base--background)}:host(.blind-critical) .blind-header{background-color:var(--theme-color-critical)}:host(.blind-critical) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-critical) .blind-header:not(.disabled):not(:disabled):hover,:host(.blind-critical) .blind-header:not(.disabled):not(:disabled).hover{background-color:var(--theme-color-critical--hover)}:host(.blind-critical) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-critical) .blind-header:not(.disabled):not(:disabled):active,:host(.blind-critical) .blind-header:not(.disabled):not(:disabled).active{background-color:var(--theme-color-critical--active)}:host(.blind-critical) .blind-header-title-label,:host(.blind-critical) .blind-header-title-sublabel{color:var(--theme-color-critical--contrast)}:host(.blind-critical){background-color:var(--theme-blind-base--background)}:host(.blind-info) .blind-header{background-color:var(--theme-color-info)}:host(.blind-info) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-info) .blind-header:not(.disabled):not(:disabled):hover,:host(.blind-info) .blind-header:not(.disabled):not(:disabled).hover{background-color:var(--theme-color-info--hover)}:host(.blind-info) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-info) .blind-header:not(.disabled):not(:disabled):active,:host(.blind-info) .blind-header:not(.disabled):not(:disabled).active{background-color:var(--theme-color-info--active)}:host(.blind-info) .blind-header-title-label,:host(.blind-info) .blind-header-title-sublabel{color:var(--theme-color-info--contrast)}:host(.blind-info){background-color:var(--theme-blind-base--background)}:host(.blind-neutral) .blind-header{background-color:var(--theme-color-neutral)}:host(.blind-neutral) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-neutral) .blind-header:not(.disabled):not(:disabled):hover,:host(.blind-neutral) .blind-header:not(.disabled):not(:disabled).hover{background-color:var(--theme-color-neutral--hover)}:host(.blind-neutral) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-neutral) .blind-header:not(.disabled):not(:disabled):active,:host(.blind-neutral) .blind-header:not(.disabled):not(:disabled).active{background-color:var(--theme-color-neutral--active)}:host(.blind-neutral) .blind-header-title-label,:host(.blind-neutral) .blind-header-title-sublabel{color:var(--theme-color-neutral--contrast)}:host(.blind-neutral){background-color:var(--theme-blind-base--background)}:host(.blind-filled) .blind-header{background-color:var(--theme-color-filled)}:host(.blind-filled) .blind-header:not(.disabled):not(:disabled).hover,:host(.blind-filled) .blind-header:not(.disabled):not(:disabled):hover{background-color:var(--theme-ghost--background--hover)}:host(.blind-filled) .blind-header:not(.disabled):not(:disabled).active,:host(.blind-filled) .blind-header:not(.disabled):not(:disabled):active{background-color:var(--theme-ghost--background--active)}:host(.blind-filled) .blind-header-title-label{color:var(--theme-color-std-text)}:host(.blind-filled) .blind-header-title-sublabel{color:var(--theme-color-soft-text)}:host(.blind-filled){background-color:var(--theme-blind-base--background)}:host(.blind-success) .blind-header{background-color:var(--theme-color-success)}:host(.blind-success) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-success) .blind-header:not(.disabled):not(:disabled):hover,:host(.blind-success) .blind-header:not(.disabled):not(:disabled).hover{background-color:var(--theme-color-success--hover)}:host(.blind-success) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-success) .blind-header:not(.disabled):not(:disabled):active,:host(.blind-success) .blind-header:not(.disabled):not(:disabled).active{background-color:var(--theme-color-success--active)}:host(.blind-success) .blind-header-title-label,:host(.blind-success) .blind-header-title-sublabel{color:var(--theme-color-success--contrast)}:host(.blind-success){background-color:var(--theme-blind-base--background)}:host(.blind-warning) .blind-header{background-color:var(--theme-color-warning)}:host(.blind-warning) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-warning) .blind-header:not(.disabled):not(:disabled):hover,:host(.blind-warning) .blind-header:not(.disabled):not(:disabled).hover{background-color:var(--theme-color-warning--hover)}:host(.blind-warning) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-warning) .blind-header:not(.disabled):not(:disabled):active,:host(.blind-warning) .blind-header:not(.disabled):not(:disabled).active{background-color:var(--theme-color-warning--active)}:host(.blind-warning) .blind-header-title-label,:host(.blind-warning) .blind-header-title-sublabel{color:var(--theme-color-warning--contrast)}:host(.blind-warning){background-color:var(--theme-blind-base--background)}:host(.blind-primary) .blind-header{background-color:var(--theme-color-primary)}:host(.blind-primary) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-primary) .blind-header:not(.disabled):not(:disabled):hover,:host(.blind-primary) .blind-header:not(.disabled):not(:disabled).hover{background-color:var(--theme-color-primary--hover)}:host(.blind-primary) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-primary) .blind-header:not(.disabled):not(:disabled):active,:host(.blind-primary) .blind-header:not(.disabled):not(:disabled).active{background-color:var(--theme-color-primary--active)}:host(.blind-primary) .blind-header-title-label,:host(.blind-primary) .blind-header-title-sublabel{color:var(--theme-color-primary--contrast)}:host(.blind-primary){background-color:var(--theme-blind-base--background)}:host(.blind-outline){border:solid var(--theme-blind--border-thickness) var(--theme-blind-base--border-color)}:host(.blind-outline) .blind-header{background-color:var(--theme-color-ghost)}:host(.blind-outline) .blind-header:not(.disabled):not(:disabled).hover,:host(.blind-outline) .blind-header:not(.disabled):not(:disabled):hover{background-color:var(--theme-ghost--background--hover)}:host(.blind-outline) .blind-header:not(.disabled):not(:disabled).active,:host(.blind-outline) .blind-header:not(.disabled):not(:disabled):active{background-color:var(--theme-ghost--background--active)}:host(.blind-outline) .blind-header-title-label{color:var(--theme-color-std-text)}:host(.blind-outline) .blind-header-title-sublabel{color:var(--theme-color-soft-text)}:host(.blind-outline){border-color:var(--theme-color-soft-bdr)}";
let sequentialInstanceId = 0;
const Blind = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.collapsedChange = createEvent(this, "collapsedChange", 7);
    this.collapsed = false;
    this.variant = "filled";
    this.blindId = ++sequentialInstanceId;
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
      this.rotateChevronDown();
    } else {
      this.rotateChevronUp();
    }
  }
  rotateChevronUp() {
    animate(this.chevronRef, {
      duration: Animation.defaultTime,
      easing: "easeInOutSine",
      rotateZ: 180
    });
    animate(this.content, {
      duration: Animation.defaultTime,
      easing: "easeInOutSine",
      opacity: 1
    });
  }
  rotateChevronDown() {
    animate(this.chevronRef, {
      duration: Animation.defaultTime,
      easing: "easeInOutSine",
      rotateZ: 0
    });
    animate(this.content, {
      duration: Animation.defaultTime,
      easing: "easeInOutSine",
      opacity: 0
    });
  }
  render() {
    return h(Host, { key: "8132d63d01748ee9775ff889ef609b238ee6ad11", class: {
      [`blind-${this.variant}`]: true
    } }, h("div", { key: "7a971735cf482988e6b3c10b43fd184650bb092c", class: "blind-header-wrapper" }, h("button", { key: "c84a6d42cc11326dd3884038f6bfb92b8ea4ed4a", class: {
      "blind-header": true,
      [`blind-${this.variant}`]: true,
      closed: this.collapsed
    }, type: "button", "aria-labelledby": `ix-blind-header-title-${this.blindId}`, "aria-controls": `ix-blind-content-section-${this.blindId}`, "aria-expanded": a11yBoolean(!this.collapsed), onClick: () => this.onHeaderClick() }, h("slot", { key: "65618fee3104c839b462791ec7643e37185590a1", name: "custom-header" })), h("div", { key: "95a82b37768f20a098abbff113c95f5dd64c2cfe", class: "blind-header-content" }, h("ix-icon", { key: "45e86bd9d5c314248cbfbc29d76ef9a851452388", class: "collapse-icon", name: iconChevronDownSmall, color: this.variant === "filled" || this.variant === "outline" ? "color-std-text" : `color-${this.variant}--contrast`, ref: (ref) => this.chevronRef = ref }), h("div", { key: "710f8228005e5eb99d47f5520c4b221ea9401d57", class: "blind-header-title", id: `ix-blind-header-title-${this.blindId}` }, this.label !== void 0 ? h(Fragment, null, this.icon && h("ix-icon", { class: "blind-header-title-icon", name: this.icon, color: this.variant === "filled" || this.variant === "outline" ? "color-std-text" : `color-${this.variant}--contrast` }), h("div", { class: "blind-header-title-row" }, h("div", { class: "blind-header-title-col" }, h("ix-typography", { title: this.label, format: "label-lg", bold: true }, h("div", { class: "blind-header-title-label", title: this.label }, this.label))), this.sublabel && h("div", { class: "blind-header-title-col" }, h("ix-typography", { title: this.sublabel }, h("div", { class: "blind-header-title-sublabel" }, this.sublabel)))), h("div", { class: "header-actions" }, h("slot", { name: "header-actions" }))) : null))), h("section", { key: "6a987fb6d8febfec6786dccc4e8ebfcdf6673d19", id: `ix-blind-content-section-${this.blindId}`, "aria-labelledby": `ix-blind-header-title-${this.blindId}` }, h("div", { key: "5fe282aa92b32d30503fc6e47e45a7d84cb055c9", class: {
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
Blind.style = blindCss;
export {
  Blind as ix_blind
};
