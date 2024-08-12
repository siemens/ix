import { r as registerInstance, f as forceUpdate, h, H as Host, g as getElement } from "./global.9430376f.js";
import { a as applicationLayoutService } from "./service-c7fc628b.ff41f9d5.js";
import { m as matchBreakpoint } from "./breakpoints-d5c2f627.f0d6212d.js";
import "./typed-event-ad6484c5.eb731a3b.js";
const paneLayoutCss = ":host{display:flex;position:absolute;width:100%;height:100%}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .side-panes-wrapper{height:100%;width:100%}:host .row{height:100%;width:100%;overflow:hidden;display:flex;flex-direction:row;justify-content:space-between;position:relative}:host .col{height:100%;width:100%;overflow:hidden;display:flex;flex-direction:column;justify-content:space-between;position:relative}:host .content{width:100%;height:100%;overflow:auto}:host .absolute-top{width:100%;position:absolute;top:0}:host .absolute-bottom{width:100%;position:absolute;bottom:0}:host .absolute-left{height:100%;position:absolute;left:0}:host .absolute-right{height:100%;position:absolute;right:0}:host .padding-top{padding-top:2.5rem}:host .padding-bottom{padding-bottom:2.5rem}:host .padding-left{padding-left:2.5rem}:host .padding-right{padding-right:2.5rem}";
const IxPaneLayoutStyle0 = paneLayoutCss;
const Panes = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.panes = [];
    this.layout = "full-vertical";
    this.variant = "inline";
    this.borderless = false;
    this.isMobile = false;
    this.paneElements = 0;
  }
  get currentPanes() {
    return this.hostElement.querySelectorAll("ix-pane");
  }
  componentWillLoad() {
    this.paneElements = this.currentPanes.length;
    this.observer = new MutationObserver((mutations) => {
      var _a, _b;
      if (((_a = mutations[0].addedNodes.item(0)) === null || _a === void 0 ? void 0 : _a.nodeName) === "IX-PANE") {
        this.paneElements += 1;
      } else if (((_b = mutations[0].removedNodes.item(0)) === null || _b === void 0 ? void 0 : _b.nodeName) === "IX-PANE") {
        this.paneElements -= 1;
      }
    });
    this.observer.observe(this.hostElement, {
      childList: true
    });
    this.isMobile = matchBreakpoint("sm");
    applicationLayoutService.onChange.on(() => {
      this.isMobile = matchBreakpoint("sm");
    });
  }
  componentDidLoad() {
    this.setPanes(this.currentPanes);
  }
  disconnectedCallback() {
    var _a;
    (_a = this.observer) === null || _a === void 0 ? void 0 : _a.disconnect();
  }
  setPaneVariant(pane) {
    if (!pane.ignoreLayoutSettings) {
      pane.variant = this.variant;
    }
  }
  setPaneBorder(pane) {
    if (!pane.ignoreLayoutSettings) {
      if (this.borderless) {
        pane.borderless = true;
      } else {
        const hasVisibleLeftPane = !!this.panes.find((pane2) => pane2.slot === "left" && !pane2.hideOnCollapse);
        if (pane.variant === "floating" && this.layout === "full-vertical" && hasVisibleLeftPane && (pane.composition === "top" || pane.composition === "bottom")) {
          pane.borderless = true;
        } else {
          pane.borderless = false;
        }
      }
    }
  }
  setPaneZIndex(pane) {
    const isTop = pane.slot === "top";
    const isBottom = pane.slot === "bottom";
    const isLeft = pane.slot === "left";
    const isRight = pane.slot === "right";
    let zIndex = 1;
    if (this.isMobile) {
      if (isBottom || isTop) {
        zIndex = 3;
      }
    } else {
      if (this.layout === "full-vertical") {
        if (isLeft || isRight) {
          zIndex = 3;
        }
      } else {
        if (isBottom || isTop) {
          zIndex = 3;
        }
      }
    }
    pane.style.zIndex = zIndex.toString();
  }
  setPanes(panes) {
    this.panes = [];
    panes.forEach((pane) => {
      this.panes.push({
        slot: pane.slot,
        hideOnCollapse: pane.hideOnCollapse,
        floating: pane.variant === "floating"
      });
    });
  }
  closeFloatingPanes() {
    this.currentPanes.forEach((pane) => {
      if (pane.expanded && pane.variant === "floating") {
        pane.expanded = false;
      }
    });
  }
  configurePanes() {
    let topCount = 0;
    let bottomCount = 0;
    let leftCount = 0;
    let rightCount = 0;
    this.currentPanes.forEach((pane) => {
      const isTop = pane.slot === "top";
      const isBottom = pane.slot === "bottom";
      const isLeft = pane.slot === "left";
      const isRight = pane.slot === "right";
      if (isLeft) {
        if (leftCount) {
          pane.slot = void 0;
          return;
        }
        leftCount++;
      } else if (isRight) {
        if (rightCount) {
          pane.slot = void 0;
          return;
        }
        rightCount++;
      } else if (isTop) {
        if (topCount) {
          pane.slot = void 0;
          return;
        }
        topCount++;
      } else if (isBottom) {
        if (bottomCount) {
          pane.slot = void 0;
          return;
        }
        bottomCount++;
      } else {
        pane.slot = void 0;
        return;
      }
      this.setPaneVariant(pane);
      this.setPaneBorder(pane);
      this.setPaneZIndex(pane);
    });
    this.setPanes(this.currentPanes);
    forceUpdate(this.hostElement);
  }
  onSlotChanged() {
    this.configurePanes();
  }
  onCollapsibleChanged(event) {
    const { slot, hideOnCollapse } = event.detail;
    this.panes.forEach((currentSlot) => {
      if (currentSlot.slot === slot) {
        currentSlot.hideOnCollapse = hideOnCollapse;
      }
    });
    forceUpdate(this.hostElement);
  }
  onVariantChanged(event) {
    const { slot, variant } = event.detail;
    this.panes.forEach((currentSlot) => {
      if (currentSlot.slot === slot) {
        currentSlot.floating = variant === "floating";
      }
    });
    forceUpdate(this.hostElement);
  }
  onPaneElementsChange() {
    this.configurePanes();
  }
  onVariableChange() {
    this.currentPanes.forEach((pane) => {
      this.setPaneVariant(pane);
      this.setPaneBorder(pane);
    });
    this.setPanes(this.currentPanes);
    forceUpdate(this.hostElement);
  }
  onBorderChange() {
    this.currentPanes.forEach((pane) => {
      this.setPaneBorder(pane);
    });
  }
  onLayoutChange() {
    this.currentPanes.forEach((pane) => {
      this.setPaneBorder(pane);
      this.setPaneZIndex(pane);
    });
  }
  onMobileChange() {
    this.currentPanes.forEach((pane) => {
      this.setPaneZIndex(pane);
    });
  }
  hasPadding(composition) {
    const pane = this.panes.find((pane2) => pane2.slot === composition);
    return pane ? !pane.hideOnCollapse && pane.floating : false;
  }
  hasPaddingMobile(composition) {
    const pane = this.panes.find((pane2) => pane2.slot === composition);
    return pane && !pane.hideOnCollapse;
  }
  slotExists(composition) {
    const pane = this.panes.find((pane2) => pane2.slot === composition);
    return !!pane;
  }
  isFloating(composition) {
    const pane = this.panes.find((pane2) => pane2.slot === composition);
    return pane ? pane.floating : false;
  }
  render() {
    return h(Host, { key: "8885c647d0661b05b2ed1b58fd8b61614eda6783" }, !this.isMobile ? this.layout == "full-vertical" ? h("div", { class: "side-panes-wrapper" }, h("div", { class: {
      row: true,
      "padding-left": this.hasPadding("left"),
      "padding-right": this.hasPadding("right")
    } }, h("div", { key: "left", class: { "absolute-left": this.isFloating("left") } }, h("slot", { name: "left" })), h("div", { class: {
      col: true,
      "padding-top": this.hasPadding("top"),
      "padding-bottom": this.hasPadding("bottom")
    } }, h("div", { key: "top", class: { "absolute-top": this.isFloating("top") } }, h("slot", { name: "top" })), h("div", { key: "content", class: "content", onClick: () => this.closeFloatingPanes() }, h("slot", { name: "content" })), h("div", { key: "bottom", class: { "absolute-bottom": this.isFloating("bottom") } }, h("slot", { name: "bottom" }))), h("div", { key: "right", class: { "absolute-right": this.isFloating("right") } }, h("slot", { name: "right" })))) : h("div", { class: "side-panes-wrapper" }, h("div", { class: {
      col: true,
      "padding-top": this.hasPadding("top"),
      "padding-bottom": this.hasPadding("bottom")
    } }, h("div", { key: "top", class: { "absolute-top": this.isFloating("top") } }, h("slot", { name: "top" })), h("div", { class: {
      row: true,
      "padding-left": this.hasPadding("left"),
      "padding-right": this.hasPadding("right")
    } }, h("div", { key: "left", class: { "absolute-left": this.isFloating("left") } }, h("slot", { name: "left" })), h("div", { key: "content", class: "content", onClick: () => this.closeFloatingPanes() }, h("slot", { name: "content" })), h("div", { key: "right", class: { "absolute-right": this.isFloating("right") } }, h("slot", { name: "right" }))), h("div", { key: "bottom", class: { "absolute-bottom": this.isFloating("bottom") } }, h("slot", { name: "bottom" })))) : h("div", { class: "col" }, h("div", { key: "top", style: {
      minHeight: this.hasPaddingMobile("top") ? "48px" : "0",
      display: this.slotExists("top") ? "block" : "none"
    } }, h("slot", { name: "top" })), h("div", { key: "left", style: {
      minHeight: this.hasPaddingMobile("left") ? "48px" : "0",
      display: this.slotExists("left") ? "block" : "none"
    } }, h("slot", { name: "left" })), h("div", { key: "content", class: "content", onClick: () => this.closeFloatingPanes() }, h("slot", { name: "content" })), h("div", { key: "right", style: {
      minHeight: this.hasPaddingMobile("right") ? "48px" : "0",
      display: this.slotExists("right") ? "block" : "none"
    } }, h("slot", { name: "right" })), h("div", { key: "bottom", style: {
      minHeight: this.hasPaddingMobile("bottom") ? "48px" : "0",
      display: this.slotExists("bottom") ? "block" : "none"
    } }, h("slot", { name: "bottom" }))));
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "paneElements": ["onPaneElementsChange"],
      "variant": ["onVariableChange"],
      "borderless": ["onBorderChange"],
      "layout": ["onLayoutChange"],
      "isMobile": ["onMobileChange"]
    };
  }
};
Panes.style = IxPaneLayoutStyle0;
export {
  Panes as ix_pane_layout
};
