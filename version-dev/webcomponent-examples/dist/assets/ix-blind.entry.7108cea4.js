import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./index.6063163d.js";
import { a as anime } from "./anime.es-185e9087.87a18bcc.js";
const blindCss = ".sc-ix-blind-h{display:flex;flex-direction:column;background-color:var(--theme-blind-base--background);border:solid var(--theme-blind--border-thickness) var(--theme-blind-base--border-color);border-radius:var(--theme-blind--border-radius);overflow:hidden}.sc-ix-blind-h .blind-header.sc-ix-blind{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;align-items:center;min-height:3rem;height:3rem;border:solid var(--theme-blind--border-thickness) transparent;border-radius:var(--theme-blind--border-radius) var(--theme-blind--border-radius) 0 0;padding-right:1rem;transition:border-radius 150ms;cursor:pointer;z-index:1;color:var(--theme-blind-header-closed--color);background-color:var(--theme-blind-header-closed--background)}.sc-ix-blind-h .blind-header.sc-ix-blind .glyph.sc-ix-blind{color:var(--theme-blind-header-icon-closed--color);padding:0.25rem 0.5rem}.sc-ix-blind-h .blind-header.sc-ix-blind .blind-header-title.sc-ix-blind{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.sc-ix-blind-h .blind-header.sc-ix-blind .blind-header-title.sc-ix-blind .blind-header-title-default.sc-ix-blind{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.sc-ix-blind-h .blind-header.sc-ix-blind:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-blind-h .blind-header.sc-ix-blind:not(.disabled):not(:disabled):hover{background-color:var(--theme-blind-header-open--background--hover)}.sc-ix-blind-h .blind-header.sc-ix-blind:not(.disabled):not(:disabled):hover .glyph.sc-ix-blind{color:var(--theme-blind-header-icon-open--color--hover)}.sc-ix-blind-h .blind-header.sc-ix-blind:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-blind-h .blind-header.sc-ix-blind:not(.disabled):not(:disabled):active{background-color:var(--theme-blind-header-open--background--active)}.sc-ix-blind-h .blind-header.sc-ix-blind:not(.disabled):not(:disabled):active .glyph.sc-ix-blind{color:var(--theme-blind-header-icon-open--color--active)}.sc-ix-blind-h .blind-header.sc-ix-blind:not(.disabled):not(:disabled):focus-visible{border-color:var(--theme-focus--border-color)}.sc-ix-blind-h .blind-header.closed.sc-ix-blind{border-radius:var(--theme-blind--border-radius)}.sc-ix-blind-h .blind-header.closed.sc-ix-blind:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-blind-h .blind-header.closed.sc-ix-blind:not(.disabled):not(:disabled):hover{background-color:var(--theme-blind-header-open--background--hover)}.sc-ix-blind-h .blind-header.closed.sc-ix-blind:not(.disabled):not(:disabled):hover .glyph.sc-ix-blind{color:var(--theme-blind-header-icon-closed--color--hover)}.sc-ix-blind-h .blind-header.closed.sc-ix-blind:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-blind-h .blind-header.closed.sc-ix-blind:not(.disabled):not(:disabled):active{background-color:var(--theme-blind-header-open--background--active)}.sc-ix-blind-h .blind-header.closed.sc-ix-blind:not(.disabled):not(:disabled):active .glyph.sc-ix-blind{color:var(--theme-blind-header-icon-closed--color--active)}.sc-ix-blind-h .blind-custom-header.sc-ix-blind{display:flex;align-items:center}.sc-ix-blind-h .blind-content.sc-ix-blind{display:block;padding:1rem;transition-property:padding;transition-duration:150ms;transition-timing-function:ease-in}.sc-ix-blind-h .blind-content.hide.sc-ix-blind{max-height:0;padding-top:0px;padding-bottom:0px}";
const Blind = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.collapsedChange = createEvent(this, "collapsedChange", 7);
    this.collapsed = false;
    this.label = void 0;
  }
  onHeaderClick(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    this.collapsed = !this.collapsed;
    this.collapsedChange.emit(this.collapsed);
  }
  componentDidLoad() {
    this.animateCollapse(this.collapsed);
  }
  get content() {
    return this.hostElement.querySelector(".blind-content");
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
    return h(Host, null, h("div", { class: {
      "blind-header": true,
      closed: this.collapsed
    }, onClick: (e) => this.onHeaderClick(e) }, h("span", { ref: (ref) => this.chevronRef = ref, class: {
      glyph: true,
      "glyph-chevron-right-small": true
    } }), h("div", { class: "blind-header-title" }, this.label !== void 0 ? h("span", { class: "blind-header-title-default" }, this.label) : h("slot", { name: "custom-header" }))), h("div", { class: {
      "blind-content": true,
      hide: this.collapsed
    } }, h("slot", null)));
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
