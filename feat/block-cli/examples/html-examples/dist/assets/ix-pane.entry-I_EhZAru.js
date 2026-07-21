import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-CRrZCTD3.js";
import { G as iconDoubleChevronDown, H as iconDoubleChevronRight, I as iconDoubleChevronUp, J as iconDoubleChevronLeft, y as iconClose } from "./index-DgUGsIlh-CLxQRaVd.js";
import { m as modulesExports } from "./index-CE4sJ-mE-CmD1XbUn.js";
import { A as Animation } from "./animation-DNIQ2C1K-BYpQk_MF.js";
import { m as matchBreakpoint } from "./breakpoints-D_Hmobxf-DBbixPq4.js";
import { a as addDisposableEventListener } from "./disposable-event-listener-CKoABG1h-D5kNsG5G.js";
import { r as requestAnimationFrameNoNgZone } from "./requestAnimationFrame-BEuV0Xpe-CBtvTq-Q.js";
import { a as addFocusTrap } from "./focus-trap-IK9ialav-CffRa992.js";
import { a as a11yBoolean } from "./a11y-C21npbUc-CU_Bg8RX.js";
import { a as applicationLayoutService } from "./service-CEglFEKY-CaUBmgY_.js";
import "./make-ref-Djkc69iv-BpP6uHEs.js";
import "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
const paneCss = () => `:host(.floating-pane){--ix-pane--background:var(--theme-pane-floating--background);--ix-pane--border-color:var(--theme-pane-floating--border-color);--ix-pane--color:var(--theme-pane-floating--color);--ix-pane--box-shadow:var(--theme-pane-floating--box-shadow)}:host(.inline-pane){--ix-pane--background:var(--theme-pane-inline--background);--ix-pane--border-color:var(--theme-pane-inline--border-color);--ix-pane--color:var(--theme-pane-inline--color);--ix-pane--box-shadow:var(--theme-pane-inline--box-shadow)}:host{display:flex;position:relative;overflow:hidden;box-sizing:border-box;box-shadow:var(--ix-pane--box-shadow);background-color:var(--ix-pane--background)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host aside{width:100%;height:100%}:host .pane-icon{color:var(--ix-pane--color)}:host .slot-header-content{display:inline-block;position:relative;max-height:2rem}:host .title-text{display:flex;align-items:center;gap:var(--theme-space-1);overflow:hidden}:host .title-text .title-text-overflow{width:100%;height:100%;display:contents}:host .title-text .title-text-overflow *{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host .header-gap{gap:var(--theme-space-1)}:host .top-bottom-pane{display:flex;flex-direction:column;flex-grow:1}:host .top-bottom-pane .title{display:flex;flex-direction:row;align-items:center;margin:var(--theme-space--1) var(--theme-space-2) var(--theme-space--1) var(--theme-space-2)}:host .top-bottom-pane .title-finished{padding:0 !important;margin:var(--theme-space-2) var(--theme-space-2) var(--theme-space-2) var(--theme-space-2)}:host .top-bottom-pane .title-expanded{display:flex;flex-direction:row}:host .top-bottom-pane .title-hide-on-collapse{display:flex;flex-direction:row-reverse;justify-content:space-between;padding:0 !important;margin:var(--theme-space-2) var(--theme-space-2) var(--theme-space-2) var(--theme-space-2)}:host .left-right-pane{display:flex;flex-grow:1}:host .left-right-pane .title{display:flex;flex-direction:column;align-items:center;margin:var(--theme-space-2) var(--theme-space--1) var(--theme-space-2) var(--theme-space--1)}:host .left-right-pane .title .title-text{flex-direction:row-reverse;justify-content:start;flex-direction:row}:host .left-right-pane .title .rotate{writing-mode:vertical-lr;text-orientation:mixed;transform:rotate(180deg);flex-direction:row-reverse}:host .left-right-pane .title .rotate ix-icon{transform:rotate(90deg)}:host .left-right-pane .title-finished{padding:0 !important;margin:var(--theme-space-2) var(--theme-space-2) var(--theme-space-2) var(--theme-space-2)}:host .left-right-pane .title-expanded{display:flex;flex-direction:row}:host .left-right-pane .title-hide-on-collapse{display:flex;flex-direction:row-reverse;justify-content:space-between;padding:0 !important;margin:var(--theme-space-2) var(--theme-space-2) var(--theme-space-2) var(--theme-space-2)}:host .left-right-pane.expanded{flex-direction:column}:host .mobile-pane{display:flex;flex-direction:column;flex-grow:1}:host .mobile-pane .title-mobile{display:flex;flex-direction:row-reverse;justify-content:space-between;margin:var(--theme-space-1) var(--theme-space-2)}:host .side-pane-content{padding:var(--theme-space-1) var(--theme-space-2) var(--theme-space-3) var(--theme-space-2);overflow:auto;height:100%;width:100%}:host .side-pane-content.no-padding{padding-inline:0;padding-block-end:0}:host .slot-header{max-height:2rem;max-width:unset}:host .slot-header.rotate{max-height:unset;max-width:2rem}:host(.not-visible){display:none}:host(.nav-left-border){border-left:var(--theme-app-header--border-width) solid var(--ix-pane--border-color)}:host(.left-pane-border){border-right:var(--theme-app-header--border-width) solid var(--ix-pane--border-color)}:host(.right-pane-border){border-left:var(--theme-app-header--border-width) solid var(--ix-pane--border-color)}:host(.top-pane-border){border-bottom:var(--theme-app-header--border-width) solid var(--ix-pane--border-color)}:host(.bottom-pane-border){border-top:var(--theme-app-header--border-width) solid var(--ix-pane--border-color)}:host(.mobile-overlay){width:100%;position:absolute;z-index:100 !important}:host(.mobile-overlay) .side-pane-content{height:calc(100% - 2.5rem)}:host(.mobile-border-top){border-bottom:var(--theme-app-header--border-width) solid var(--ix-pane--border-color)}:host(.mobile-border-bottom){border-top:var(--theme-app-header--border-width) solid var(--ix-pane--border-color)}:host(.top-expanded){top:0}:host(.bottom-expanded){bottom:0}:host(.left-right-pane){height:100%}:host(.top-bottom-pane){width:100%}`;
const Pane = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.expandedChanged = createEvent(this, "expandedChanged", 7);
    this.variantChanged = createEvent(this, "variantChanged", 7);
    this.borderlessChanged = createEvent(this, "borderlessChanged", 7);
    this.hideOnCollapseChanged = createEvent(this, "hideOnCollapseChanged", 7);
    this.slotChanged = createEvent(this, "slotChanged", 7);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Title of the side panel
   */
  heading;
  /**
   * Variant of the side pane.
   * Defaults to the variant attribute of the pane layout. If used standalone it defaults to inline.
   */
  variant = "inline";
  /**
   * Define if the pane should have a collapsed state
   */
  hideOnCollapse = false;
  /**
   * The maximum size of the sidebar, when it is expanded
   */
  size = "240px";
  /**
   * Toggle the border of the pane.
   * Defaults to the borderless attribute of the pane layout. If used standalone it defaults to false.
   */
  borderless = false;
  /**
   * Remove the padding of the content area.
   * If set to `true` the left, right and bottom padding of the content area is removed.
   *
   * @since 5.1.0
   */
  noPadding = false;
  /**
   * State of the pane
   */
  expanded = false;
  /**
   * Defines the position of the pane inside it's container.
   * Inside a pane layout this property will automatically be set to the name of slot the pane is assigned to.
   */
  composition = "top";
  /**
   * Name of the icon
   */
  icon;
  /**
   * If true, the pane will close when clicking outside of it
   */
  closeOnClickOutside = false;
  /**
   * ARIA label for the icon
   */
  ariaLabelIcon;
  /**
   * ARIA label close or collapse button
   */
  ariaLabelCollapseCloseButton;
  /**
   * @internal
   * Prevents overwriting of the variant and borderless property when used inside layout
   */
  ignoreLayoutSettings = false;
  /**
   * @internal
   */
  isMobile = false;
  /**
   * This event is triggered when the pane either expands or contracts
   */
  expandedChanged;
  /**
   * This event is triggered when the variant of the pane is changed
   */
  variantChanged;
  /**
   * This event is triggered when the variant of the pane is changed
   */
  borderlessChanged;
  /**
   * @internal
   */
  hideOnCollapseChanged;
  /**
   * @internal
   */
  slotChanged;
  expandIcon = "";
  showContent = false;
  minimizeIcon = "";
  floating = false;
  parentWidthPx = 0;
  parentHeightPx = 0;
  static validPositions = ["top", "left", "bottom", "right"];
  static collapsedPane = "40px";
  static collapsedPaneMobile = "48px";
  animations = /* @__PURE__ */ new Map();
  animationCounter = 0;
  mutationObserver;
  resizeObserver;
  disposableWindowClick;
  disposableKeydown;
  focusTrap;
  focusReturnElement;
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
  disconnectedCallback() {
    this.mutationObserver?.disconnect();
    this.resizeObserver?.disconnect();
    this.disposableWindowClick?.();
    this.disposableKeydown?.();
    this.focusTrap?.destroy();
  }
  async onExpandedChange() {
    if (!this.closeOnClickOutside || !this.expanded) {
      this.disposableWindowClick?.();
    } else {
      this.disposableWindowClick = addDisposableEventListener(window, "click", (event) => {
        const path = event.composedPath?.() || [];
        if (!path.includes(this.hostElement)) {
          this.dispatchExpandedChangedEvent();
        }
      });
    }
    this.registerEscapeListener();
    if (!this.floating) {
      return;
    }
    if (this.expanded) {
      const activeElement = document.activeElement;
      this.focusReturnElement = activeElement instanceof HTMLElement ? activeElement : void 0;
      this.focusTrap = await addFocusTrap(this.hostElement, {
        trapFocusInShadowDom: "both"
      });
    } else {
      this.focusTrap?.destroy();
      this.focusTrap = void 0;
      requestAnimationFrameNoNgZone(() => {
        const elementToFocus = this.focusReturnElement;
        this.focusReturnElement = void 0;
        if (elementToFocus && typeof elementToFocus.focus === "function") {
          elementToFocus.focus();
        }
      });
    }
  }
  componentWillLoad() {
    this.onExpandedChange();
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
    this.setIcons();
    this.mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "slot") {
          const newSlot = this.currentSlot;
          const oldSlot = mutation.oldValue;
          if (newSlot !== oldSlot) {
            this.slotChanged.emit({
              slot: oldSlot ?? "",
              newSlot: newSlot ?? ""
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
    let animation = modulesExports.animate(this.hostElement, {
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
        this.onAnimationComplete(key);
      }
    });
    this.animations.set(key, animation);
  }
  animateHorizontalFadeIn(size) {
    let key = this.getKey();
    let animation = modulesExports.animate(this.hostElement, {
      duration: Animation.mediumTime,
      height: size,
      easing: "easeInOutSine",
      delay: 0,
      onBegin: () => {
        if (!this.expanded) {
          this.showContent = false;
          if (!this.isMobile)
            this.animateHorizontalPadding("0px");
        } else {
          if (!this.isMobile)
            this.animateHorizontalPadding("8px");
        }
      },
      onComplete: () => {
        this.onAnimationComplete(key);
      }
    });
    this.animations.set(key, animation);
  }
  onAnimationComplete(key) {
    if (this.expanded) {
      this.showContent = true;
      if (this.floating) {
        requestAnimationFrameNoNgZone(() => {
          this.focusFirstSlottedElement();
        });
      }
    }
    this.animations.delete(key);
  }
  removePadding() {
    modulesExports.animate(this.hostElement.shadowRoot.querySelector("#title-div"), {
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
    let animation = modulesExports.animate(this.hostElement.shadowRoot.querySelector("#title-div"), {
      duration,
      paddingTop: size,
      paddingBottom: size,
      easing: "easeInOutSine",
      delay: 0,
      onComplete: () => {
        this.animations.delete(key);
      }
    });
    this.animations.set(key, animation);
  }
  animateVerticalPadding(size, duration = Animation.mediumTime) {
    let key = this.getKey();
    let animation = modulesExports.animate(this.hostElement.shadowRoot.querySelector("#title-div"), {
      duration,
      paddingLeft: size,
      paddingRight: size,
      easing: "easeInOutSine",
      delay: 0,
      onComplete: () => {
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
    this.onParentSizeChange();
    this.hideOnCollapseChanged.emit({
      slot: this.currentSlot ?? "",
      hideOnCollapse: value
    });
  }
  onVariantChange(value) {
    this.floating = value === "floating";
    this.variantChanged.emit({
      slot: this.currentSlot ?? "",
      variant: value
    });
    if (value !== "floating") {
      this.focusTrap?.destroy();
      this.focusTrap = void 0;
    }
    this.registerEscapeListener();
  }
  onBorderlessChange(value) {
    this.borderlessChanged.emit({
      slot: this.currentSlot ?? "",
      borderless: value
    });
  }
  focusFirstSlottedElement() {
    const autofocusEl = this.hostElement.querySelector("[autofocus]");
    if (autofocusEl) {
      autofocusEl.focus();
      return;
    }
    const closeBtn = this.hostElement.shadowRoot?.querySelector(".title-icon");
    if (closeBtn) {
      closeBtn.focus();
    }
  }
  registerEscapeListener() {
    this.disposableKeydown?.();
    this.disposableKeydown = void 0;
    if (!this.floating || !this.expanded) {
      return;
    }
    this.disposableKeydown = addDisposableEventListener(this.hostElement, "keydown", (event) => {
      if (event.key !== "Escape") {
        return;
      }
      this.dispatchExpandedChangedEvent();
    });
  }
  dispatchExpandedChangedEvent() {
    const newExpandedValue = !this.expanded;
    const event = this.expandedChanged.emit({
      slot: this.currentSlot ?? "",
      expanded: newExpandedValue
    });
    if (!event.defaultPrevented) {
      this.expanded = newExpandedValue;
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
    const rotate = !this.expanded && !this.isMobile && this.isLeftRightPane;
    let paneButtonAriaLabel;
    if (this.ariaLabelCollapseCloseButton) {
      paneButtonAriaLabel = this.ariaLabelCollapseCloseButton;
    } else if (this.expanded) {
      paneButtonAriaLabel = this.isMobile || this.hideOnCollapse ? "Close pane" : "Collapse pane";
    } else {
      paneButtonAriaLabel = "Expand pane";
    }
    return h(Host, { key: "a663c4aab73d5d4de1dceaff1a6098aa9f034f2e", class: {
      "floating-pane": this.floating,
      "inline-pane": !this.floating,
      "mobile-overlay": this.expanded && this.isMobile,
      "top-expanded": this.expanded && this.isMobileTop && this.isMobile,
      "bottom-expanded": this.expanded && !this.isMobileTop && this.isMobile,
      "top-bottom-pane": this.isBottomTopPane && !this.isMobile,
      "left-right-pane": this.isLeftRightPane && !this.isMobile,
      [`${this.composition}-pane-border`]: !this.borderless && !this.isMobile && !this.floating,
      "nav-left-border": !this.borderless && !this.isMobile && this.composition !== "right" && this.floating,
      "mobile-border-top": !this.borderless && this.isMobileTop && this.isMobile && !this.expanded && !this.floating,
      "mobile-border-bottom": !this.borderless && !this.isMobileTop && this.isMobile && !this.expanded && !this.floating,
      "not-visible": this.hideOnCollapse && !this.expanded
    }, "aria-expanded": a11yBoolean(this.expanded) }, h("aside", { key: "81e6182afdec0c67490ef1a8c0910e8eb8abf384", id: `pane-${this.composition}`, class: {
      "top-bottom-pane": this.isBottomTopPane && !this.isMobile,
      "left-right-pane": this.isLeftRightPane && !this.isMobile,
      "mobile-pane": this.isMobile,
      expanded: this.expanded
    } }, h("div", { key: "c8750fa25f5ad207ae32700d09116e36aef786fd", id: "title-div", class: {
      title: !this.isMobile && !this.hideOnCollapse && !this.showContent,
      "title-finished": !this.isMobile && !this.hideOnCollapse && this.showContent,
      "title-expanded": !this.isMobile && !this.hideOnCollapse && this.expanded,
      "title-hide-on-collapse": !this.isMobile && this.hideOnCollapse,
      "title-mobile": this.isMobile,
      "header-gap": !this.isMobile && !this.hideOnCollapse
    } }, h("ix-icon-button", { key: "5770ef0d66b6522d3472ee43ea1e89a2913d8d0f", class: "title-icon", size: "24", icon: this.expanded ? this.isMobile || this.hideOnCollapse ? iconClose : this.expandIcon : this.minimizeIcon, iconColor: this.expanded && (this.isMobile || this.hideOnCollapse) ? "color-soft-text" : void 0, variant: "subtle-tertiary", onClick: () => this.dispatchExpandedChangedEvent(), "aria-controls": `pane-${this.composition}`, "aria-label": paneButtonAriaLabel }), h("div", { key: "49756b631fba15ef475d837992ab3d24f2e4bb00", class: {
      "title-text": true,
      rotate
    } }, this.icon && h("ix-icon", { key: "b66e5f7f4e72adb1697ffcbd9b08e4b3f38ce626", class: "pane-icon", size: "24", name: this.icon, "aria-label": this.ariaLabelIcon }), h("div", { key: "1fb60a99b6ef5c8bcfd084c4d0db67c7fce25bc6", class: "title-text-overflow" }, h("ix-typography", { key: "d7a112ecd48dbca65da98792a77ff8057f8dcf8b", format: "h4" }, this.heading)), this.expanded && h("div", { key: "cd3185303c7cef4c4ec8fc543933479bdfe3db5a", class: "slot-header" }, h("slot", { key: "347d049df428376ef423be23ff30ccceae225263", name: "header" })))), h("div", { key: "55da48bf93fa566058e52166a7ebbfa3fac59f56", class: {
      "side-pane-content": true,
      "no-padding": this.noPadding
    }, hidden: !this.showContent }, h("slot", { key: "e53ac2da7f753fa1f5ba246dd6067fddb9e45466" }))));
  }
  static get watchers() {
    return {
      "expanded": [{
        "onExpandedChange": 0
      }, {
        "onSizeChange": 0
      }],
      "isMobile": [{
        "onMobileChange": 0
      }],
      "composition": [{
        "onPositionChange": 0
      }],
      "hideOnCollapse": [{
        "onHideOnCollapseChange": 0
      }],
      "variant": [{
        "onVariantChange": 0
      }],
      "borderless": [{
        "onBorderlessChange": 0
      }],
      "parentHeightPx": [{
        "onParentSizeChange": 0
      }],
      "parentWidthPx": [{
        "onParentSizeChange": 0
      }],
      "size": [{
        "onSizeChange": 0
      }]
    };
  }
};
Pane.style = paneCss();
export {
  Pane as ix_pane
};
