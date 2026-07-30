import { r as registerInstance, g as getElement, h, H as Host } from "./global-J1r-v9CX.js";
const layoutAutoCss = () => `:host{display:block;position:relative;margin:0 0.75rem;--ix-layout-grid-gap:1.5rem}:host .container{display:flex;align-items:stretch;flex-wrap:wrap;gap:var(--ix-layout-grid-gap)}:host ::slotted(*){flex-grow:0;flex-shrink:0}`;
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
    return h(Host, { key: "c0b303f1e5a8b123f605f19b3eb86eb4c200a5e8" }, h("div", { key: "ad73919563998a27008356082ee7f0813b23928b", class: "container" }, h("slot", { key: "f71e78827d3e09e66b01094e4ee2a2807fce6791" })));
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
