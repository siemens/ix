import { r as registerInstance, g as getElement, h, H as Host } from "./index-CgUi6DzV-fQJuTF8s.js";
import "./preload-helper-UZRgTS1n.js";
const layoutAutoCss = () => `@charset "UTF-8";:host{--ix-layout-auto--margin:0 var(--si-sys-sizing-spacing-x-50);--ix-layout-auto--layout-grid-gap:var(--si-sys-sizing-spacing-x-80)}:host{display:block;position:relative;margin:var(--ix-layout-auto--margin);--ix-layout-grid-gap:var(--ix-layout-auto--layout-grid-gap)}:host .container{display:flex;align-items:stretch;flex-wrap:wrap;gap:var(--ix-layout-grid-gap)}:host ::slotted(*){flex-grow:0;flex-shrink:0}`;
const LayoutForm = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Defines the layout of the form.
   */
  layout = [
    { minWidth: "0", columns: 1 },
    { minWidth: "48em", columns: 2 }
  ];
  mediaQueryList = [];
  observer = new MutationObserver(() => this.calculateGridTemplateColumns());
  resizeObserver = new ResizeObserver(() => {
    this.calculateGridTemplateColumns();
  });
  connectedCallback() {
    this.observer.observe(this.hostElement, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["data-colspan"]
    });
    this.resizeObserver.observe(this.hostElement);
    this.calculateGridTemplateColumns();
  }
  componentWillLoad() {
    this.calculateGridTemplateColumns();
  }
  disconnectedCallback() {
    if (this.observer) {
      this.observer.disconnect();
    }
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }
  updateMediaQueryList() {
    this.mediaQueryList = [];
    this.layout.forEach((layout) => {
      const mediaQuery = window.matchMedia(`(min-width: ${layout.minWidth})`);
      this.mediaQueryList.push({
        mediaQuery,
        layout
      });
    });
  }
  parseNumber(number) {
    if (!number) {
      return 1;
    }
    const result = parseInt(number);
    if (isNaN(result)) {
      return 1;
    }
    return result;
  }
  calculateGridTemplateColumns() {
    this.updateMediaQueryList();
    let layoutColumns = 1;
    let columnSpacing = "var(--ix-layout-grid-gap)";
    this.mediaQueryList.forEach((mediaQuery) => {
      if (mediaQuery.mediaQuery.matches) {
        layoutColumns = mediaQuery.layout.columns;
      }
    });
    Array.from(this.hostElement.children).forEach((child) => {
      let colspan = this.parseNumber(child.getAttribute("data-colspan"));
      colspan = Math.min(colspan, layoutColumns);
      const childRatio = colspan / layoutColumns;
      child.style.width = `calc(${childRatio * 99.9}% - ${1 - childRatio} * ${columnSpacing})`;
    });
  }
  render() {
    return h(Host, { key: "4d3a15ae61f1d760a5424d47bef30f0a79b7f077" }, h("div", { key: "d923fefb161088d2f96cda2f9fa642e42d612ab0", class: "container" }, h("slot", { key: "1821128cda61d682c9a4182f3246a98cb86dae52" })));
  }
  static get watchers() {
    return {
      "layout": [{
        "updateMediaQueryList": 0
      }]
    };
  }
};
LayoutForm.style = layoutAutoCss();
export {
  LayoutForm as ix_layout_auto
};
