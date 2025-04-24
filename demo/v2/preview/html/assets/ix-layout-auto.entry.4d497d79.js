import { r as registerInstance, h, H as Host, g as getElement } from "./global.1f5cc68d.js";
const layoutAutoCss = ":host{display:block;position:relative;margin:0 0.75rem;--ix-layout-grid-gap:1.5rem}:host .container{display:flex;align-items:stretch;flex-wrap:wrap;gap:var(--ix-layout-grid-gap)}:host ::slotted(*){flex-grow:0;flex-shrink:0}";
const LayoutForm = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.layout = [
      { minWidth: "0", columns: 1 },
      { minWidth: "48em", columns: 2 }
    ];
    this.mediaQueryList = [];
    this.observer = new MutationObserver(() => this.calculateGridTemplateColumns());
    this.resizeObserver = new ResizeObserver(() => {
      this.calculateGridTemplateColumns();
    });
  }
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
    return h(Host, { key: "1f8f84938e86f60299fab0e2a5bea7305165b82d" }, h("div", { key: "4df4340902cbc0ec02ef07c9823a94a43039b6f5", class: "container" }, h("slot", { key: "1af475b649df045f95d387129e659e85719dadda" })));
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "layout": ["updateMediaQueryList"]
    };
  }
};
LayoutForm.style = layoutAutoCss;
export {
  LayoutForm as ix_layout_auto
};
