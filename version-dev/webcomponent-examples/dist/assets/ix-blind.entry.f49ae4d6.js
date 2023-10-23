import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./index.98bdea62.js";
import { a as anime } from "./anime.es-185e9087.87a18bcc.js";
import { a as a11yBoolean } from "./a11y-115b6a36.b825263c.js";
const blindCss = ":host{display:flex;flex-direction:column;border-radius:var(--theme-blind--border-radius);overflow:hidden}:host .blind-header{all:unset;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;align-items:center;min-height:3rem;height:3rem;border:solid var(--theme-blind--border-thickness) transparent;border-radius:var(--theme-blind--border-radius) var(--theme-blind--border-radius) 0 0;padding-right:0.5rem;cursor:pointer;z-index:1}:host .blind-header .collapse-icon{padding:0.25rem 0.5rem}:host .blind-header .blind-header-title-col{flex-grow:1;flex-basis:0;display:inline-flex;align-items:center;min-width:0}:host .blind-header ix-typography{flex-grow:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .blind-header .blind-header-title-col:not(:first-of-type){justify-content:flex-end}:host .blind-header .blind-header-title-label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;-webkit-padding-end:0.5rem;padding-inline-end:0.5rem}:host .blind-header .blind-header-title-sublabel{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-inline:0.5rem}:host .blind-header .blind-header-title,:host .blind-header .blind-header-title-basic{display:flex;align-items:center;flex-grow:1;height:100%;min-width:0}:host .blind-header .blind-header-title-basic ix-icon{-webkit-margin-end:0.5rem;margin-inline-end:0.5rem}:host .blind-header:not(.disabled):not(:disabled):focus-visible{border-color:var(--theme-color-focus-bdr);outline:none}:host .blind-header .blind-header-labels{display:inline-flex;flex-grow:1;min-width:0}:host .blind-content{display:block;padding:1rem;transition-property:padding;transition-duration:150ms;transition-timing-function:ease-in}:host .blind-content.hide{max-height:0;padding-top:0px;padding-bottom:0px}:host(.blind-alarm){background-color:var(--theme-blind-base--background)}:host(.blind-alarm) .blind-header{background-color:var(--theme-color-alarm)}:host(.blind-alarm) .blind-header .blind-header-title-label,:host(.blind-alarm) .blind-header .blind-header-title-sublabel{color:var(--theme-color-alarm--contrast)}:host(.blind-alarm) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-alarm) .blind-header:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-alarm--hover)}:host(.blind-alarm) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-alarm) .blind-header:not(.disabled):not(:disabled):active,:host(.blind-alarm) .blind-header:not(.disabled):not(:disabled).active{background-color:var(--theme-color-alarm--active)}:host(.blind-critical){background-color:var(--theme-blind-base--background)}:host(.blind-critical) .blind-header{background-color:var(--theme-color-critical)}:host(.blind-critical) .blind-header .blind-header-title-label,:host(.blind-critical) .blind-header .blind-header-title-sublabel{color:var(--theme-color-critical--contrast)}:host(.blind-critical) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-critical) .blind-header:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-critical--hover)}:host(.blind-critical) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-critical) .blind-header:not(.disabled):not(:disabled):active,:host(.blind-critical) .blind-header:not(.disabled):not(:disabled).active{background-color:var(--theme-color-critical--active)}:host(.blind-info){background-color:var(--theme-blind-base--background)}:host(.blind-info) .blind-header{background-color:var(--theme-color-info)}:host(.blind-info) .blind-header .blind-header-title-label,:host(.blind-info) .blind-header .blind-header-title-sublabel{color:var(--theme-color-info--contrast)}:host(.blind-info) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-info) .blind-header:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-info--hover)}:host(.blind-info) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-info) .blind-header:not(.disabled):not(:disabled):active,:host(.blind-info) .blind-header:not(.disabled):not(:disabled).active{background-color:var(--theme-color-info--active)}:host(.blind-insight){background-color:var(--theme-blind-base--background)}:host(.blind-insight) .blind-header{background-color:var(--theme-color-insight)}:host(.blind-insight) .blind-header .blind-header-title-label{color:var(--theme-color-std-text)}:host(.blind-insight) .blind-header .blind-header-title-sublabel{color:var(--theme-color-soft-text)}:host(.blind-insight) .blind-header:not(.disabled):not(:disabled).hover,:host(.blind-insight) .blind-header:not(.disabled):not(:disabled):hover{background-color:var(--theme-ghost--background--hover)}:host(.blind-insight) .blind-header:not(.disabled):not(:disabled).active,:host(.blind-insight) .blind-header:not(.disabled):not(:disabled):active{background-color:var(--theme-ghost--background--active)}:host(.blind-neutral){background-color:var(--theme-blind-base--background)}:host(.blind-neutral) .blind-header{background-color:var(--theme-color-neutral)}:host(.blind-neutral) .blind-header .blind-header-title-label,:host(.blind-neutral) .blind-header .blind-header-title-sublabel{color:var(--theme-color-neutral--contrast)}:host(.blind-neutral) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-neutral) .blind-header:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-neutral--hover)}:host(.blind-neutral) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-neutral) .blind-header:not(.disabled):not(:disabled):active,:host(.blind-neutral) .blind-header:not(.disabled):not(:disabled).active{background-color:var(--theme-color-neutral--active)}:host(.blind-notification){background-color:var(--theme-blind-base--background)}:host(.blind-notification) .blind-header{background-color:var(--theme-color-notification)}:host(.blind-notification) .blind-header .blind-header-title-label,:host(.blind-notification) .blind-header .blind-header-title-sublabel{color:var(--theme-color-notification--contrast)}:host(.blind-notification) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-notification) .blind-header:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-notification--hover)}:host(.blind-notification) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-notification) .blind-header:not(.disabled):not(:disabled):active,:host(.blind-notification) .blind-header:not(.disabled):not(:disabled).active{background-color:var(--theme-color-notification--active)}:host(.blind-success){background-color:var(--theme-blind-base--background)}:host(.blind-success) .blind-header{background-color:var(--theme-color-success)}:host(.blind-success) .blind-header .blind-header-title-label,:host(.blind-success) .blind-header .blind-header-title-sublabel{color:var(--theme-color-success--contrast)}:host(.blind-success) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-success) .blind-header:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-success--hover)}:host(.blind-success) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-success) .blind-header:not(.disabled):not(:disabled):active,:host(.blind-success) .blind-header:not(.disabled):not(:disabled).active{background-color:var(--theme-color-success--active)}:host(.blind-warning){background-color:var(--theme-blind-base--background)}:host(.blind-warning) .blind-header{background-color:var(--theme-color-warning)}:host(.blind-warning) .blind-header .blind-header-title-label,:host(.blind-warning) .blind-header .blind-header-title-sublabel{color:var(--theme-color-warning--contrast)}:host(.blind-warning) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-warning) .blind-header:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-warning--hover)}:host(.blind-warning) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-warning) .blind-header:not(.disabled):not(:disabled):active,:host(.blind-warning) .blind-header:not(.disabled):not(:disabled).active{background-color:var(--theme-color-warning--active)}:host(.blind-primary){background-color:var(--theme-blind-base--background)}:host(.blind-primary) .blind-header{background-color:var(--theme-color-primary)}:host(.blind-primary) .blind-header .blind-header-title-label,:host(.blind-primary) .blind-header .blind-header-title-sublabel{color:var(--theme-color-primary--contrast)}:host(.blind-primary) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-primary) .blind-header:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-primary--hover)}:host(.blind-primary) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-primary) .blind-header:not(.disabled):not(:disabled):active,:host(.blind-primary) .blind-header:not(.disabled):not(:disabled).active{background-color:var(--theme-color-primary--active)}:host(.blind-outline){border:solid var(--theme-blind--border-thickness) var(--theme-blind-base--border-color);border-color:var(--theme-color-soft-bdr)}:host(.blind-outline) .blind-header{background-color:var(--theme-color-ghost)}:host(.blind-outline) .blind-header .blind-header-title-label{color:var(--theme-color-std-text)}:host(.blind-outline) .blind-header .blind-header-title-sublabel{color:var(--theme-color-soft-text)}:host(.blind-outline) .blind-header:not(.disabled):not(:disabled).hover,:host(.blind-outline) .blind-header:not(.disabled):not(:disabled):hover{background-color:var(--theme-ghost--background--hover)}:host(.blind-outline) .blind-header:not(.disabled):not(:disabled).active,:host(.blind-outline) .blind-header:not(.disabled):not(:disabled):active{background-color:var(--theme-ghost--background--active)}";
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
  onHeaderClick(e) {
    if (e.target.closest(".header-actions")) {
      return;
    }
    e.preventDefault();
    e.stopImmediatePropagation();
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
    return h(Host, { class: {
      [`blind-${this.variant}`]: true
    } }, h("button", { class: {
      "blind-header": true,
      [`blind-${this.variant}`]: true,
      closed: this.collapsed
    }, type: "button", "aria-labelledby": `ix-blind-header-title-${this.blindId}`, "aria-controls": `ix-blind-content-section-${this.blindId}`, "aria-expanded": a11yBoolean(!this.collapsed), onClick: (e) => this.onHeaderClick(e) }, h("ix-icon", { class: "collapse-icon", name: "chevron-right-small", color: this.variant === "insight" || this.variant === "outline" ? "color-primary" : `color-${this.variant}--contrast`, ref: (ref) => this.chevronRef = ref }), h("div", { class: "blind-header-title", id: `ix-blind-header-title-${this.blindId}` }, this.label !== void 0 ? h("span", { class: "blind-header-title-basic" }, h("div", { class: "blind-header-title-col" }, this.icon !== void 0 ? h("ix-icon", { name: this.icon, color: this.variant === "insight" || this.variant === "outline" ? "color-std-text" : `color-${this.variant}--contrast` }) : "", h("ix-typography", { title: this.label, format: "label-lg", bold: true }, h("div", { class: "blind-header-title-label", title: this.label }, this.label))), h("div", { class: "blind-header-title-col" }, this.sublabel !== void 0 ? h("ix-typography", { title: this.sublabel }, h("div", { class: "blind-header-title-sublabel" }, this.sublabel)) : "", h("span", { class: "header-actions", onClick: (e) => e.stopImmediatePropagation() }, h("slot", { name: "header-actions" })))) : h("slot", { name: "custom-header" }))), h("section", { id: `ix-blind-content-section-${this.blindId}`, "aria-labelledby": `ix-blind-header-title-${this.blindId}` }, h("div", { class: {
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
