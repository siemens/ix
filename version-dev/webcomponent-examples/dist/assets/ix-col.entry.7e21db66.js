import { r as registerInstance, f as forceUpdate, h, H as Host } from "./index.7d4aafcf.js";
import { m as matchBreakpoint } from "./breakpoints-b8d59fd9.085d9a48.js";
const colCss = ":host{box-sizing:border-box;position:relative;flex-basis:0;flex-grow:1;width:100%;max-width:100%;min-height:1px;padding-left:calc(var(--ix-layout-grid-gutter) * 0.5);padding-right:calc(var(--ix-layout-grid-gutter) * 0.5)}";
const Col = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.size = void 0;
    this.sizeSm = void 0;
    this.sizeMd = void 0;
    this.sizeLg = void 0;
  }
  onResize() {
    forceUpdate(this);
  }
  getSize(breakpoint) {
    if (breakpoint === "") {
      return this.size;
    }
    if (breakpoint === "sm") {
      return this.sizeSm;
    }
    if (breakpoint === "md") {
      return this.sizeMd;
    }
    if (breakpoint === "lg") {
      return this.sizeLg;
    }
  }
  getColumnSize() {
    let size;
    Col.Breakpoints.forEach((breakpoint) => {
      const isMediaQueryActive = breakpoint !== "" ? matchBreakpoint(breakpoint) : true;
      if (!isMediaQueryActive) {
        return;
      }
      const currentSize = this.getSize(breakpoint);
      if (currentSize) {
        size = currentSize;
      }
    });
    return size;
  }
  getColumnSizeStyling() {
    const size = this.getColumnSize();
    if (!size) {
      return;
    }
    if (size === "auto") {
      return {
        flex: "0 0 auto",
        width: "auto",
        "max-width": "auto"
      };
    }
    const colSize = `calc(calc(${size} / var(--ix-layout-grid-columns)) * 100%)`;
    return {
      flex: `0 0 ${colSize}`,
      width: `${colSize}`,
      "max-width": `${colSize}`
    };
  }
  render() {
    return h(Host, { style: Object.assign({}, this.getColumnSizeStyling()) }, h("slot", null));
  }
};
Col.Breakpoints = ["", "sm", "md", "lg"];
Col.style = colCss;
export {
  Col as ix_col
};
