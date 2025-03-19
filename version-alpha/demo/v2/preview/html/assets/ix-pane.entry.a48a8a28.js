import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global.aa474cf6.js";
import { a as anime } from "./anime.es-Ou74PMQs.d39ae9b1.js";
import { A as Animation } from "./animation-Dp15M30K.7b5f0f8a.js";
import { a as applicationLayoutService } from "./service-Ca8OHh45.7722d505.js";
import { m as matchBreakpoint } from "./breakpoints-D6vSVaHq.92ad4801.js";
import { D as iconDoubleChevronDown, E as iconDoubleChevronRight, F as iconDoubleChevronUp, G as iconDoubleChevronLeft, l as iconClose } from "./index-CrTP-icT.451e0ae2.js";
import "./typed-event-BdCnOrqW.51d2f30a.js";
const paneCss = ":host{background-color:var(--theme-color-2);display:flex;position:relative;overflow:hidden;box-sizing:border-box}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host aside{width:100%;height:100%}:host .title-text{display:flex;align-items:center;gap:var(--theme-space-1);overflow:hidden}:host .title-text .title-text-overflow{width:100%;height:100%;display:contents}:host .title-text .title-text-overflow *{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host .header-gap{gap:var(--theme-space-1)}:host .top-bottom-pane{display:flex;flex-direction:column;flex-grow:1}:host .top-bottom-pane .title{display:flex;flex-direction:row;align-items:center;margin:var(--theme-space--1) var(--theme-space-2) var(--theme-space--1) var(--theme-space-2)}:host .top-bottom-pane .title-finished{padding:0 !important;margin:var(--theme-space-2) var(--theme-space-2) var(--theme-space-2) var(--theme-space-2)}:host .top-bottom-pane .title-expanded{display:flex;flex-direction:row}:host .top-bottom-pane .title-hide-on-collapse{display:flex;flex-direction:row-reverse;justify-content:space-between;padding:0 !important;margin:var(--theme-space-2) var(--theme-space-2) var(--theme-space-2) var(--theme-space-2)}:host .left-right-pane{display:flex;flex-grow:1}:host .left-right-pane .title{display:flex;flex-direction:column;align-items:center;margin:var(--theme-space-2) var(--theme-space--1) var(--theme-space-2) var(--theme-space--1)}:host .left-right-pane .title .title-text{flex-direction:row-reverse;justify-content:start;flex-direction:row}:host .left-right-pane .title .rotate{writing-mode:vertical-lr;text-orientation:mixed;transform:rotate(180deg);flex-direction:row-reverse}:host .left-right-pane .title .rotate ix-icon{transform:rotate(90deg)}:host .left-right-pane .title-finished{padding:0 !important;margin:var(--theme-space-2) var(--theme-space-2) var(--theme-space-2) var(--theme-space-2)}:host .left-right-pane .title-expanded{display:flex;flex-direction:row}:host .left-right-pane .title-hide-on-collapse{display:flex;flex-direction:row-reverse;justify-content:space-between;padding:0 !important;margin:var(--theme-space-2) var(--theme-space-2) var(--theme-space-2) var(--theme-space-2)}:host .left-right-pane.expanded{flex-direction:column}:host .mobile-pane{display:flex;flex-direction:column;flex-grow:1}:host .mobile-pane .title-mobile{display:flex;flex-direction:row-reverse;justify-content:space-between;margin:var(--theme-space-1) var(--theme-space-2)}:host .side-pane-content{padding:var(--theme-space-1) var(--theme-space-2);overflow:auto;height:100%;width:100%}:host(.not-visible){display:none}:host(.inline-color){background-color:var(--theme-color-1)}:host(.box-shadow){box-shadow:0 0 1rem black}:host(.nav-left-border){border-left:var(--theme-app-header--border-width) solid var(--theme-color-weak-bdr)}:host(.left-pane-border){border-right:var(--theme-app-header--border-width) solid var(--theme-color-soft-bdr)}:host(.right-pane-border){border-left:var(--theme-app-header--border-width) solid var(--theme-color-soft-bdr)}:host(.top-pane-border){border-bottom:var(--theme-app-header--border-width) solid var(--theme-color-soft-bdr)}:host(.bottom-pane-border){border-top:var(--theme-app-header--border-width) solid var(--theme-color-soft-bdr)}:host(.mobile-overlay){width:100%;position:absolute;z-index:100 !important}:host(.mobile-overlay) .side-pane-content{height:calc(100% - 2.5rem)}:host(.mobile-border-top){border-bottom:var(--theme-app-header--border-width) solid var(--theme-color-soft-bdr)}:host(.mobile-border-bottom){border-top:var(--theme-app-header--border-width) solid var(--theme-color-soft-bdr)}:host(.top-expanded){top:0}:host(.bottom-expanded){bottom:0}:host(.left-right-pane){height:100%}:host(.top-bottom-pane){width:100%}";
const Pane = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.expandedChanged = createEvent(this, "expandedChanged", 7);
    this.variantChanged = createEvent(this, "variantChanged", 7);
    this.borderlessChanged = createEvent(this, "borderlessChanged", 7);
    this.hideOnCollapseChanged = createEvent(this, "hideOnCollapseChanged", 7);
    this.slotChanged = createEvent(this, "slotChanged", 7);
    this.variant = "inline";
    this.hideOnCollapse = false;
    this.size = "240px";
    this.borderless = false;
    this.expanded = false;
    this.composition = "top";
    this.ignoreLayoutSettings = false;
    this.isMobile = false;
    this.expandIcon = "";
    this.showContent = false;
    this.minimizeIcon = "";
    this.floating = false;
    this.parentWidthPx = 0;
    this.parentHeightPx = 0;
    this.animations = /* @__PURE__ */ new Map();
    this.animationCounter = 0;
  }
  get currentSlot() {
    return this.hostElement.getAttribute("slot");
  }
  get isBottomTopPane() {
    return this.composition === "bottom" || this.composition === "top";
  }
  get isLeftRightPane() {
    return this.composition === "left" || this.composition === "right";
  }
  get isMobileTop() {
    return this.composition === "top" || this.composition === "left";
  }
  componentWillLoad() {
    this.setIcons();
    this.floating = this.variant === "floating";
    if (this.expanded) {
      this.onParentSizeChange();
    }
    this.isMobile = matchBreakpoint("sm");
    applicationLayoutService.onChange.on(() => {
      this.isMobile = matchBreakpoint("sm");
    });
    if (this.currentSlot) {
      this.setPosition(this.currentSlot);
    }
    this.mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "slot") {
          const newSlot = this.currentSlot;
          const oldSlot = mutation.oldValue;
          if (newSlot !== oldSlot) {
            this.slotChanged.emit({
              slot: oldSlot !== null && oldSlot !== void 0 ? oldSlot : "",
              newSlot: newSlot !== null && newSlot !== void 0 ? newSlot : ""
            });
            if (newSlot) {
              this.setPosition(newSlot);
            }
          }
        }
      });
    });
    this.mutationObserver.observe(this.hostElement, {
      attributes: true,
      attributeOldValue: true
    });
    const parentElement = this.hostElement.parentElement;
    this.resizeObserver = new ResizeObserver((entries) => {
      this.parentWidthPx = entries[0].borderBoxSize[0].inlineSize;
      this.parentHeightPx = entries[0].borderBoxSize[0].blockSize;
    });
    if (parentElement)
      this.resizeObserver.observe(parentElement);
  }
  disconnectedCallback() {
    var _a, _b;
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    (_b = this.resizeObserver) === null || _b === void 0 ? void 0 : _b.disconnect();
  }
  setPosition(value) {
    if (Pane.validPositions.includes(value)) {
      this.composition = value;
    }
  }
  getExpandPaneSize() {
    let expandPaneSize;
    if (this.isBottomTopPane) {
      if (this.size.includes("px")) {
        const referenceValue = Math.round(this.parentHeightPx / 2);
        const currentValue = Number(this.size.replace("px", ""));
        if (referenceValue && referenceValue < currentValue) {
          expandPaneSize = `${referenceValue}px`;
        } else {
          expandPaneSize = `${currentValue}px`;
        }
      } else {
        if (this.size === "50%") {
          expandPaneSize = `${Math.round(this.parentHeightPx / 2)}px`;
        } else {
          expandPaneSize = `${Math.round(this.parentHeightPx / 3)}px`;
        }
      }
    } else {
      if (this.size.includes("px")) {
        const referenceValue = Math.round(this.parentWidthPx / 2);
        const currentValue = Number(this.size.replace("px", ""));
        if (referenceValue && referenceValue < currentValue) {
          expandPaneSize = `${referenceValue}px`;
        } else {
          expandPaneSize = `${currentValue}px`;
        }
      } else {
        if (this.size === "50%") {
          expandPaneSize = `${Math.round(this.parentWidthPx / 2)}px`;
        } else {
          expandPaneSize = `${Math.round(this.parentWidthPx / 3)}px`;
        }
      }
    }
    return expandPaneSize;
  }
  setIcons() {
    const { expandIcon, minimizeIcon } = this.getIconNames();
    this.expandIcon = expandIcon;
    this.minimizeIcon = minimizeIcon;
  }
  getIconNames() {
    let expandIcon = "";
    let minimizeIcon = "";
    switch (this.composition) {
      case "left":
        expandIcon = this.isMobile ? iconDoubleChevronUp : iconDoubleChevronLeft;
        minimizeIcon = this.isMobile ? iconDoubleChevronDown : iconDoubleChevronRight;
        break;
      case "right":
        expandIcon = this.isMobile ? iconDoubleChevronDown : iconDoubleChevronRight;
        minimizeIcon = this.isMobile ? iconDoubleChevronUp : iconDoubleChevronLeft;
        break;
      case "bottom":
        expandIcon = iconDoubleChevronDown;
        minimizeIcon = iconDoubleChevronUp;
        break;
      case "top":
        expandIcon = iconDoubleChevronUp;
        minimizeIcon = iconDoubleChevronDown;
        break;
    }
    return { expandIcon, minimizeIcon };
  }
  getKey() {
    return (this.animationCounter++).toString();
  }
  animateVerticalFadeIn(size) {
    let key = this.getKey();
    let animation = anime({
      targets: this.hostElement,
      duration: Animation.mediumTime,
      width: size,
      easing: "easeInOutSine",
      delay: 0,
      begin: () => {
        if (!this.expanded) {
          this.showContent = false;
          this.animateVerticalPadding("0px");
        } else {
          this.animateVerticalPadding("8px");
        }
      },
      complete: () => {
        if (this.expanded) {
          this.showContent = true;
        }
        this.animations.delete(key);
      }
    });
    this.animations.set(key, animation);
  }
  animateHorizontalFadeIn(size) {
    let key = this.getKey();
    let animation = anime({
      targets: this.hostElement,
      duration: Animation.mediumTime,
      height: size,
      easing: "easeInOutSine",
      delay: 0,
      begin: () => {
        if (!this.expanded) {
          this.showContent = false;
          if (!this.isMobile)
            this.animateHorizontalPadding("0px");
        } else {
          if (!this.isMobile)
            this.animateHorizontalPadding("8px");
        }
      },
      complete: () => {
        if (this.expanded) {
          this.showContent = true;
        }
        this.animations.delete(key);
      }
    });
    this.animations.set(key, animation);
  }
  removePadding() {
    anime({
      targets: this.hostElement.shadowRoot.querySelector("#title-div"),
      duration: 0,
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
      delay: 0
    });
  }
  animateHorizontalPadding(size, duration = Animation.mediumTime) {
    let key = this.getKey();
    let animation = anime({
      targets: this.hostElement.shadowRoot.querySelector("#title-div"),
      duration,
      paddingTop: size,
      paddingBottom: size,
      easing: "easeInOutSine",
      delay: 0,
      complete: () => {
        this.animations.delete(key);
      }
    });
    this.animations.set(key, animation);
  }
  animateVerticalPadding(size, duration = Animation.mediumTime) {
    let key = this.getKey();
    let animation = anime({
      targets: this.hostElement.shadowRoot.querySelector("#title-div"),
      duration,
      paddingLeft: size,
      paddingRight: size,
      easing: "easeInOutSine",
      delay: 0,
      complete: () => {
        this.animations.delete(key);
      }
    });
    this.animations.set(key, animation);
  }
  clearAnimations() {
    this.animations.forEach((animation) => animation.pause());
    this.animations.clear();
    this.animationCounter = 0;
  }
  onMobileChange() {
    this.setIcons();
    this.hostElement.style.removeProperty("width");
    this.hostElement.style.removeProperty("height");
    this.hostElement.style.removeProperty("min-height");
    this.onParentSizeChange();
  }
  onPositionChange() {
    this.setIcons();
    this.hostElement.style.removeProperty("width");
    this.hostElement.style.removeProperty("height");
    this.onParentSizeChange();
  }
  onHideOnCollapseChange(value) {
    var _a;
    this.onParentSizeChange();
    this.hideOnCollapseChanged.emit({
      slot: (_a = this.currentSlot) !== null && _a !== void 0 ? _a : "",
      hideOnCollapse: value
    });
  }
  onVariantChange(value) {
    var _a;
    this.floating = value === "floating";
    this.variantChanged.emit({
      slot: (_a = this.currentSlot) !== null && _a !== void 0 ? _a : "",
      variant: value
    });
  }
  onBorderlessChange(value) {
    var _a;
    this.borderlessChanged.emit({
      slot: (_a = this.currentSlot) !== null && _a !== void 0 ? _a : "",
      borderless: value
    });
  }
  dispatchExpandedChangedEvent() {
    var _a;
    const event = this.expandedChanged.emit({
      slot: (_a = this.currentSlot) !== null && _a !== void 0 ? _a : "",
      expanded: !this.expanded
    });
    if (!event.defaultPrevented) {
      this.expanded = !this.expanded;
    }
  }
  onParentSizeChange() {
    this.clearAnimations();
    this.removePadding();
    if (this.expanded) {
      if (this.isMobile) {
        this.hostElement.style.height = "100%";
      } else {
        const expandPaneSize = this.getExpandPaneSize();
        if (this.isBottomTopPane) {
          this.hostElement.style.height = expandPaneSize;
          this.animateHorizontalPadding("8px", 0);
        } else {
          this.hostElement.style.width = expandPaneSize;
          this.animateVerticalPadding("8px", 0);
        }
      }
      this.showContent = true;
    } else {
      this.showContent = false;
      if (this.isMobile) {
        this.hostElement.style.height = this.hideOnCollapse ? "0" : Pane.collapsedPaneMobile;
      } else {
        if (this.isBottomTopPane) {
          this.hostElement.style.height = this.hideOnCollapse ? "0" : Pane.collapsedPane;
        } else {
          this.hostElement.style.width = this.hideOnCollapse ? "0" : Pane.collapsedPane;
        }
      }
    }
  }
  onSizeChange() {
    if (this.expanded) {
      if (this.isMobile) {
        this.hostElement.style.minHeight = this.hideOnCollapse ? "0" : Pane.collapsedPaneMobile;
        this.animateHorizontalFadeIn("100%");
      } else {
        const expandPaneSize = this.getExpandPaneSize();
        if (this.isBottomTopPane) {
          this.hostElement.style.height = this.hideOnCollapse ? "0" : Pane.collapsedPane;
          this.animateHorizontalFadeIn(expandPaneSize);
        } else {
          this.hostElement.style.width = this.hideOnCollapse ? "0" : Pane.collapsedPane;
          this.animateVerticalFadeIn(expandPaneSize);
        }
      }
    } else {
      this.showContent = false;
      if (this.isMobile) {
        this.hostElement.style.height = Pane.collapsedPaneMobile;
      } else {
        if (this.isBottomTopPane) {
          this.animateHorizontalFadeIn(Pane.collapsedPane);
        } else {
          this.animateVerticalFadeIn(Pane.collapsedPane);
        }
      }
    }
  }
  render() {
    return h(Host, { key: "48aefc1145058d559cb713356c94b112f9b6c236", class: {
      "inline-color": !this.floating,
      "mobile-overlay": this.expanded && this.isMobile,
      "top-expanded": this.expanded && this.isMobileTop && this.isMobile,
      "bottom-expanded": this.expanded && !this.isMobileTop && this.isMobile,
      "top-bottom-pane": this.isBottomTopPane && !this.isMobile,
      "left-right-pane": this.isLeftRightPane && !this.isMobile,
      [`${this.composition}-pane-border`]: !this.borderless && !this.isMobile && !this.floating,
      "nav-left-border": !this.borderless && !this.isMobile && this.composition !== "right" && this.floating,
      "mobile-border-top": !this.borderless && this.isMobileTop && this.isMobile && !this.expanded && !this.floating,
      "mobile-border-bottom": !this.borderless && !this.isMobileTop && this.isMobile && !this.expanded && !this.floating,
      "box-shadow": this.floating,
      "aria-expanded": this.expanded,
      "not-visible": this.hideOnCollapse && !this.expanded
    } }, h("aside", { key: "373c760c22f98edff6f27e3c6c161d2c1d90c527", id: `pane-${this.composition}`, class: {
      "top-bottom-pane": this.isBottomTopPane && !this.isMobile,
      "left-right-pane": this.isLeftRightPane && !this.isMobile,
      "mobile-pane": this.isMobile,
      expanded: this.expanded
    } }, h("div", { key: "2fcbd2bc94f9c3e518e41ce42be7d8c56daa91b4", id: "title-div", class: {
      title: !this.isMobile && !this.hideOnCollapse && !this.showContent,
      "title-finished": !this.isMobile && !this.hideOnCollapse && this.showContent,
      "title-expanded": !this.isMobile && !this.hideOnCollapse && this.expanded,
      "title-hide-on-collapse": !this.isMobile && this.hideOnCollapse,
      "title-mobile": this.isMobile,
      "header-gap": !this.isMobile && !this.hideOnCollapse
    } }, h("ix-icon-button", { key: "cbb99e9885a41c88a66d839c45d4f67f37d37f80", class: "title-icon", size: "24", icon: this.expanded ? this.isMobile || this.hideOnCollapse ? iconClose : this.expandIcon : this.minimizeIcon, ghost: true, onClick: () => this.dispatchExpandedChangedEvent(), "aria-controls": `pane-${this.composition}` }), h("span", { key: "edc04216716b06e9c13dbf94500225e71099e6d5", class: {
      "title-text": true,
      rotate: !this.expanded && !this.isMobile && this.isLeftRightPane
    } }, this.icon ? h("ix-icon", { size: "24", name: this.icon }) : null, h("div", { key: "2a1f686a93e3aee1b4374405df12b79c9b5f787b", class: "title-text-overflow" }, h("ix-typography", { key: "b0a42df1078d4360d2058262ac07551220fed513", format: "h4" }, this.heading)))), h("div", { key: "5c4f24e9e0dee32bfb1d5502f487fdaf6b4c9859", class: "side-pane-content", hidden: !this.showContent }, h("slot", { key: "f28c9aa0dde2a4d14cf16f0849ec31025a80c37b" }))));
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "isMobile": ["onMobileChange"],
      "composition": ["onPositionChange"],
      "hideOnCollapse": ["onHideOnCollapseChange"],
      "variant": ["onVariantChange"],
      "borderless": ["onBorderlessChange"],
      "parentHeightPx": ["onParentSizeChange"],
      "parentWidthPx": ["onParentSizeChange"],
      "expanded": ["onSizeChange"],
      "size": ["onSizeChange"]
    };
  }
};
Pane.validPositions = ["top", "left", "bottom", "right"];
Pane.collapsedPane = "40px";
Pane.collapsedPaneMobile = "48px";
Pane.style = paneCss;
export {
  Pane as ix_pane
};
