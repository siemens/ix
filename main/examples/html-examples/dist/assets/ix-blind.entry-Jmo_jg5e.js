import { g as getElement, r as registerInstance, c as createEvent, h, F as Fragment, H as Host } from "./global-EB1NlL0D.js";
import { a as animate, E as Easing } from "./animate-BQARm6pw-B-wfC2r4.js";
import { a as a11yBoolean } from "./a11y-BjBGvZyE-DCMEdep1.js";
import { x as iconChevronDownSmall } from "./index-Bj5Kmzp6-B1fOSLOf.js";
import { A as Animation } from "./animation-C2bTHF7D-HeOCyL6m.js";
import "./condition-checks-B3dDrNFs-BiqvZF_l.js";
const blindCss = () => `@charset "UTF-8";:host{--ix-blind-header--color:var(--si-sys-color-text-primary);--ix-blind-header-sublabel--color:var(--si-sys-color-text-secondary);--ix-blind-header-actions--color:var(--si-sys-color-text-accent);--ix-blind-outline--border-color:var(--si-sys-color-border-3);--ix-blind--outline-color--focus:var(--si-sys-color-effects-focus);--ix-blind--outline-width--focus:var(--si-sys-sizing-border-width-default);--ix-blind--focus--outline-offset:calc(     -1 * var(--si-sys-sizing-focus-ring-offset)   );--ix-blind--background:var(--si-sys-color-background-1);--ix-blind--surface:transparent;--ix-blind--border-color:var(--si-sys-color-border-3);--ix-blind-status-color:transparent;--ix-blind--strip-width:var(--si-sys-sizing-border-width-emphasis)}:host(.blind-danger){--ix-blind-status-color:var(--si-sys-color-border-danger)}:host(.blind-warning){--ix-blind-status-color:var(--si-sys-color-border-warning)}:host(.blind-caution){--ix-blind-status-color:var(--si-sys-color-border-caution)}:host(.blind-information){--ix-blind-status-color:var(--si-sys-color-border-information)}:host(.blind-accent){--ix-blind-status-color:var(--si-sys-color-border-accent)}:host(.blind-critical){--ix-blind-status-color:var(--si-sys-color-border-critical)}:host(.blind-success){--ix-blind-status-color:var(--si-sys-color-border-success)}:host(.blind-neutral){--ix-blind-status-color:var(--si-sys-color-border-neutral)}:host{--ix-blind-content--transition-duration:var(--theme-default-time);--ix-blind--border-radius:var(--si-sys-sizing-border-radius-sm);--ix-blind--border-width:var(--si-sys-sizing-border-width-default);--ix-blind-icon--icon-size:var(--si-sys-sizing-icon-md);--ix-blind-header-wrapper--min-height:calc(     var(--si-sys-sizing-size-100) - 2 * var(--si-sys-sizing-border-width-default)   );--ix-blind-header-wrapper--height:calc(     var(--si-sys-sizing-size-100) - 2 * var(--si-sys-sizing-border-width-default)   );--ix-blind-header-content--padding-left:calc(     var(--si-sys-sizing-spacing-x-40) - var(--si-sys-sizing-border-width-default)   );--ix-blind-content--padding-left:calc(     var(--si-sys-sizing-spacing-x-60) - var(--si-sys-sizing-border-width-default)   );--ix-blind-header-title--margin-right:var(--si-sys-sizing-spacing-x-40);--ix-blind-collapse-icon--margin-right:var(--si-sys-sizing-spacing-x-40);--ix-blind-header--padding-left:calc(     var(--ix-blind-header-content--padding-left) + var(--ix-blind-icon--icon-size) + var(--ix-blind-collapse-icon--margin-right)   );--ix-blind-header-title-col--width:calc(     100% - var(--si-sys-sizing-spacing-x-60)   );--ix-blind-header-title-label--padding-inline-end:var(--si-sys-sizing-spacing-x-40);--ix-blind-header-title-sublabel--padding-inline:var(--si-sys-sizing-spacing-x-40);--ix-blind-content--padding:var(--si-sys-sizing-spacing-y-60) var(--si-sys-sizing-spacing-x-60)}:host(:not([collapsed])){--ix-blind-header-wrapper--min-height:calc(     var(--si-sys-sizing-size-100) - var(--si-sys-sizing-border-width-default)   );--ix-blind-header-wrapper--height:calc(     var(--si-sys-sizing-size-100) - var(--si-sys-sizing-border-width-default)   )}:host(:not(.outline)){--ix-blind-header-wrapper--min-height:var(--si-sys-sizing-size-100);--ix-blind-header-wrapper--height:var(--si-sys-sizing-size-100);--ix-blind-header-content--padding-left:var(--si-sys-sizing-spacing-x-40);--ix-blind-content--padding-left:var(--si-sys-sizing-spacing-x-60)}:host{display:flex;flex-direction:column;position:relative;align-self:flex-start;box-sizing:border-box;border:none;border-radius:var(--ix-blind--border-radius)}:host ix-icon:not([size]){block-size:var(--ix-blind-icon--icon-size);inline-size:var(--ix-blind-icon--icon-size);min-block-size:var(--ix-blind-icon--icon-size);min-inline-size:var(--ix-blind-icon--icon-size)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .blind-chrome{display:flex;flex-direction:column;width:100%;box-sizing:border-box;border:var(--ix-blind--border-width) solid var(--ix-blind--border-color);border-radius:inherit;overflow:hidden;background-color:var(--ix-blind--surface)}:host .blind-header-wrapper{position:relative;min-height:var(--ix-blind-header-wrapper--min-height);height:var(--ix-blind-header-wrapper--height);overflow:hidden}:host .blind-header-content{display:flex;position:relative;align-items:center;justify-content:flex-start;width:100%;height:100%;pointer-events:none;padding-left:var(--ix-blind-header-content--padding-left)}:host .blind-header-title{display:flex;position:relative;align-items:center;flex-grow:1;margin-right:var(--ix-blind-header-title--margin-right)}:host .blind-header{all:unset;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block;position:absolute;box-sizing:border-box;top:0px;left:0px;pointer-events:all;padding-left:var(--ix-blind-header--padding-left);width:100%;height:100%;border:none;border-radius:var(--ix-blind--border-radius) var(--ix-blind--border-radius) 0 0;cursor:pointer;background-color:transparent}:host .blind-header:not(.disabled):not(:disabled).hover,:host .blind-header:not(.disabled):not(:disabled):hover{background-color:var(--si-sys-color-background-hover)}:host .blind-header:not(.disabled):not(:disabled).active,:host .blind-header:not(.disabled):not(:disabled):active{background-color:var(--si-sys-color-background-active)}:host .blind-header:not(.disabled):not(:disabled):focus-visible{outline:var(--ix-blind--outline-width--focus) solid var(--ix-blind--outline-color--focus);outline-offset:var(--ix-blind--focus--outline-offset)}:host .blind-header-title-label,:host .blind-header-title-icon,:host .collapse-icon{color:var(--ix-blind-header--color)}:host .blind-header-title-sublabel{color:var(--ix-blind-header-sublabel--color)}:host .header-actions{--ix-icon-button-color:var(--ix-blind-header-actions--color)}:host .blind-header-title-icon,:host .collapse-icon{margin-right:var(--ix-blind-collapse-icon--margin-right)}:host .blind-header-title-row{display:flex;flex-grow:1;overflow:hidden}:host .blind-header-title-col{display:inline-flex;align-items:center;width:var(--ix-blind-header-title-col--width);overflow:hidden}:host .blind-header-title-col:not(:first-of-type){justify-content:flex-end}:host ix-typography{flex-grow:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .blind-header-title-label{padding-inline-end:var(--ix-blind-header-title-label--padding-inline-end);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .blind-header-title-sublabel{padding-inline:var(--ix-blind-header-title-sublabel--padding-inline);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .blind-header-title{display:flex;align-items:center;flex-grow:1;height:100%;min-width:0}:host .blind-header-labels{display:inline-flex;flex-grow:1;min-width:0}:host .blind-content{display:block;padding:var(--ix-blind-content--padding);padding-left:var(--ix-blind-content--padding-left);transition-property:padding;transition-duration:var(--ix-blind-content--transition-duration);transition-timing-function:ease-in}:host .blind-content.hide{max-height:0;padding-top:0px;padding-bottom:0px;border-width:0}:host .header-actions{pointer-events:all;margin-left:auto}:host(:not(.outline)){--ix-blind--surface:var(--ix-blind--background);--ix-blind--border-width:0}:host(.outline){--ix-blind--surface:transparent;--ix-blind--border-color:var(--ix-blind-outline--border-color)}:host(.outline) .blind-header{border-radius:0}:host(:not(.blind-base))::before{content:"";position:absolute;top:0;bottom:0;left:0;width:var(--ix-blind--strip-width);border-radius:var(--ix-blind--border-radius) 0 0 var(--ix-blind--border-radius);z-index:1;pointer-events:none;background-color:var(--ix-blind-status-color)}`;
let sequentialInstanceId = 0;
const Blind = class {
  /**
   * Collapsed state
   */
  collapsed = false;
  /**
   * Label of blind
   */
  label;
  /**
   * Secondary label inside blind header
   */
  sublabel;
  /**
   * Optional icon to be displayed next to the header label
   */
  icon;
  /**
   * Blind status variant
   */
  variant = "base";
  /**
   * Show the blind with outline chrome.
   * When omitted, outline chrome is used (`true`).
   * When `false`, uses a filled surface.
   * A non-base status shows a left status strip.
   *
   * @since 6.0.0
   */
  outline;
  /**
   * Collapsed state changed
   */
  collapsedChange;
  get hostElement() {
    return getElement(this);
  }
  chevronRef;
  blindId = ++sequentialInstanceId;
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.collapsedChange = createEvent(this, "collapsedChange", 7);
  }
  get isOutline() {
    return this.outline !== false;
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
    this.animateChevron(180, 1);
  }
  rotateChevronDown() {
    this.animateChevron(0, 0);
  }
  animateChevron(rotation, contentOpacity) {
    const chevron = this.chevronRef;
    const content = this.content;
    if (!chevron || !content) {
      return;
    }
    const options = {
      duration: Animation.defaultTime,
      easing: Easing.easeOutQuad
    };
    animate(chevron, [{ transform: `rotateZ(${rotation}deg)` }], options);
    animate(content, [{ opacity: contentOpacity }], options);
  }
  render() {
    return h(Host, { key: "cefb4a9a526732319398dcd8a85247cd7ef38098", class: {
      outline: this.isOutline,
      [`blind-${this.variant}`]: true
    } }, h("div", { key: "43ed382c5923568e9750d710dc832da02221b522", class: "blind-chrome" }, h("div", { key: "18bc5401f31510368eefdc9e2424b24875fba1e0", class: "blind-header-wrapper" }, h("button", { key: "913e2fdeac980a0341ba6209026e039f6e4c8e8e", class: {
      "blind-header": true,
      closed: this.collapsed
    }, type: "button", "aria-labelledby": `ix-blind-header-title-${this.blindId}`, "aria-controls": `ix-blind-content-section-${this.blindId}`, "aria-expanded": a11yBoolean(!this.collapsed), onClick: () => this.onHeaderClick() }, h("slot", { key: "2aeae791790af36bd23fb7c7e2597b71f146f251", name: "custom-header" })), h("div", { key: "74dbeab58e160e4b34514feaebc88fbe41d094b8", class: "blind-header-content" }, h("ix-icon", { key: "aa4b1e01d0944d9defc59292b87493d1d1e86fad", class: "collapse-icon", name: iconChevronDownSmall, "aria-hidden": "true", ref: (ref) => this.chevronRef = ref }), h("div", { key: "44135559bcd021336362b340f6d263e2ea0e3a2d", class: "blind-header-title", id: `ix-blind-header-title-${this.blindId}` }, this.label !== void 0 ? h(Fragment, null, this.icon && h("ix-icon", { class: "blind-header-title-icon", name: this.icon, "aria-hidden": "true" }), h("div", { class: "blind-header-title-row" }, h("div", { class: "blind-header-title-col" }, h("ix-typography", { title: this.label, format: "body-lg", bold: true }, h("div", { class: "blind-header-title-label", title: this.label }, this.label))), this.sublabel && h("div", { class: "blind-header-title-col" }, h("ix-typography", { title: this.sublabel }, h("div", { class: "blind-header-title-sublabel" }, this.sublabel)))), h("div", { class: "header-actions" }, h("slot", { name: "header-actions" }))) : null))), h("section", { key: "5520238154d170477a61d5bd426ccf3c109a8ced", id: `ix-blind-content-section-${this.blindId}`, "aria-labelledby": `ix-blind-header-title-${this.blindId}` }, h("div", { key: "ba312fef73913c8bb4620a50d0b2f2e5a1bdbc8b", class: {
      "blind-content": true,
      hide: this.collapsed
    } }, !this.collapsed ? h("slot", null) : null))));
  }
  static get watchers() {
    return {
      "collapsed": [{
        "animation": 0
      }]
    };
  }
};
Blind.style = blindCss();
export {
  Blind as ix_blind
};
