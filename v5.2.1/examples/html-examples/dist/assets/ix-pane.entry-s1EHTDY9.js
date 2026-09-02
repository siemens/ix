import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-Do6maBom.js";
import { R as iconDoubleChevronDown, S as iconDoubleChevronRight, T as iconDoubleChevronUp, U as iconDoubleChevronLeft, K as iconClose } from "./index-BeX6RWvV-CXzUIwMU.js";
import { a as animate } from "./anime.esm-DhE1t8Qh-cS95-bBh.js";
import { A as Animation } from "./animation-BqeSHO6C-CazTJry4.js";
import { m as matchBreakpoint } from "./breakpoints-D_Hmobxf-DBbixPq4.js";
import { a as addDisposableEventListener } from "./disposable-event-listener-CKoABG1h-D5kNsG5G.js";
import { r as requestAnimationFrameNoNgZone } from "./requestAnimationFrame-BEuV0Xpe-CBtvTq-Q.js";
import { a as addFocusTrap } from "./focus-trap-IK9ialav-eKMhumbj.js";
import { a as a11yBoolean } from "./a11y-DD206pTM-BiwZPW5s.js";
import { a as applicationLayoutService } from "./service-CEglFEKY-CaUBmgY_.js";
import "./make-ref-Djkc69iv-BpP6uHEs.js";
import "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
const paneCss = () => `@charset "UTF-8";:host{--ix-pane-title--gap:var(--theme-space-1);--ix-pane-header--gap:var(--theme-space-1);--ix-pane-top-bottom-title--margin-block:var(--theme-space--1);--ix-pane-top-bottom-title--margin-inline:var(--theme-space-2);--ix-pane-title-finished--margin:var(--theme-space-2);--ix-pane-title-collapsed--margin:var(--theme-space-2);--ix-pane-left-right-title--margin-block:var(--theme-space-2);--ix-pane-left-right-title--margin-inline:var(--theme-space--1);--ix-pane-mobile-title--margin-block:var(--theme-space-1);--ix-pane-mobile-title--margin-inline:var(--theme-space-2);--ix-pane-content--padding-block-start:var(--theme-space-1);--ix-pane-content--padding-inline:var(--theme-space-2);--ix-pane-content--padding-block-end:var(--theme-space-3);--ix-pane--border-width:var(--theme-border-width-default);--ix-pane-floating--background:var(--si-sys-background-1);--ix-pane-floating--border-color:var(--si-sys-border-4);--ix-pane-floating--box-shadow:var(--si-sys-effects-shadow-2);--ix-pane-floating--color:var(--si-sys-text-primary);--ix-pane-inline--background:var(--si-sys-background-0);--ix-pane-inline--border-color:var(--si-sys-border-3);--ix-pane-inline--box-shadow:none;--ix-pane-inline--color:var(--si-sys-text-primary)}:host(.floating-pane){--ix-pane--background:var(--ix-pane-floating--background);--ix-pane--border-color:var(--ix-pane-floating--border-color);--ix-pane--color:var(--ix-pane-floating--color);--ix-pane--box-shadow:var(--ix-pane-floating--box-shadow)}:host(.inline-pane){--ix-pane--background:var(--ix-pane-inline--background);--ix-pane--border-color:var(--ix-pane-inline--border-color);--ix-pane--color:var(--ix-pane-inline--color);--ix-pane--box-shadow:var(--ix-pane-inline--box-shadow)}:host{display:flex;position:relative;overflow:hidden;box-sizing:border-box;box-shadow:var(--ix-pane--box-shadow);background-color:var(--ix-pane--background)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-border-4);--ix-scrollbar-background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host aside{width:100%;height:100%}:host .pane-icon{color:var(--ix-pane--color)}:host .slot-header-content{display:inline-block;position:relative;max-height:2rem}:host .title-text{display:flex;align-items:center;gap:var(--ix-pane-title--gap);overflow:hidden}:host .title-text .title-text-overflow{width:100%;height:100%;display:contents}:host .title-text .title-text-overflow *{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host .header-gap{gap:var(--ix-pane-header--gap)}:host .top-bottom-pane{display:flex;flex-direction:column;flex-grow:1}:host .top-bottom-pane .title{display:flex;flex-direction:row;align-items:center;margin:var(--ix-pane-top-bottom-title--margin-block) var(--ix-pane-top-bottom-title--margin-inline)}:host .top-bottom-pane .title-finished{padding:0 !important;margin:var(--ix-pane-title-finished--margin)}:host .top-bottom-pane .title-expanded{display:flex;flex-direction:row}:host .top-bottom-pane .title-hide-on-collapse{display:flex;flex-direction:row-reverse;justify-content:space-between;padding:0 !important;margin:var(--ix-pane-title-collapsed--margin)}:host .left-right-pane{display:flex;flex-grow:1}:host .left-right-pane .title{display:flex;flex-direction:column;align-items:center;margin:var(--ix-pane-left-right-title--margin-block) var(--ix-pane-left-right-title--margin-inline)}:host .left-right-pane .title .title-text{flex-direction:row-reverse;justify-content:start;flex-direction:row}:host .left-right-pane .title .rotate{writing-mode:vertical-lr;text-orientation:mixed;transform:rotate(180deg);flex-direction:row-reverse}:host .left-right-pane .title .rotate ix-icon{transform:rotate(90deg)}:host .left-right-pane .title-finished{padding:0 !important;margin:var(--ix-pane-title-finished--margin)}:host .left-right-pane .title-expanded{display:flex;flex-direction:row}:host .left-right-pane .title-hide-on-collapse{display:flex;flex-direction:row-reverse;justify-content:space-between;padding:0 !important;margin:var(--ix-pane-title-collapsed--margin)}:host .left-right-pane.expanded{flex-direction:column}:host .mobile-pane{display:flex;flex-direction:column;flex-grow:1}:host .mobile-pane .title-mobile{display:flex;flex-direction:row-reverse;justify-content:space-between;margin:var(--ix-pane-mobile-title--margin-block) var(--ix-pane-mobile-title--margin-inline)}:host .side-pane-content{padding:var(--ix-pane-content--padding-block-start) var(--ix-pane-content--padding-inline) var(--ix-pane-content--padding-block-end);overflow:auto;height:100%;width:100%}:host .side-pane-content.no-padding{padding-inline:0;padding-block-end:0}:host .slot-header{max-height:2rem;max-width:unset}:host .slot-header.rotate{max-height:unset;max-width:2rem}:host(.not-visible){display:none}:host(.nav-left-border){border-left:var(--ix-pane--border-width) solid var(--ix-pane--border-color)}:host(.left-pane-border){border-right:var(--ix-pane--border-width) solid var(--ix-pane--border-color)}:host(.right-pane-border){border-left:var(--ix-pane--border-width) solid var(--ix-pane--border-color)}:host(.top-pane-border){border-bottom:var(--ix-pane--border-width) solid var(--ix-pane--border-color)}:host(.bottom-pane-border){border-top:var(--ix-pane--border-width) solid var(--ix-pane--border-color)}:host(.mobile-overlay){width:100%;position:absolute;z-index:100 !important}:host(.mobile-overlay) .side-pane-content{height:calc(100% - 2.5rem)}:host(.mobile-border-top){border-bottom:var(--ix-pane--border-width) solid var(--ix-pane--border-color)}:host(.mobile-border-bottom){border-top:var(--ix-pane--border-width) solid var(--ix-pane--border-color)}:host(.top-expanded){top:0}:host(.bottom-expanded){bottom:0}:host(.left-right-pane){height:100%}:host(.top-bottom-pane){width:100%}`;
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
    let animation = animate(this.hostElement, {
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
    let animation = animate(this.hostElement, {
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
    animate(this.hostElement.shadowRoot.querySelector("#title-div"), {
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
    let animation = animate(this.hostElement.shadowRoot.querySelector("#title-div"), {
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
    let animation = animate(this.hostElement.shadowRoot.querySelector("#title-div"), {
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
    return h(Host, { key: "3fc38e0470da9c72ee18badf668267afd42e991f", class: {
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
    }, "aria-expanded": a11yBoolean(this.expanded) }, h("aside", { key: "5a0cf4a70ed93b965ebcd0d896e4d7a33c0ff203", id: `pane-${this.composition}`, class: {
      "top-bottom-pane": this.isBottomTopPane && !this.isMobile,
      "left-right-pane": this.isLeftRightPane && !this.isMobile,
      "mobile-pane": this.isMobile,
      expanded: this.expanded
    } }, h("div", { key: "f7d484a018f94d64fa608def713c5dfd85da4577", id: "title-div", class: {
      title: !this.isMobile && !this.hideOnCollapse && !this.showContent,
      "title-finished": !this.isMobile && !this.hideOnCollapse && this.showContent,
      "title-expanded": !this.isMobile && !this.hideOnCollapse && this.expanded,
      "title-hide-on-collapse": !this.isMobile && this.hideOnCollapse,
      "title-mobile": this.isMobile,
      "header-gap": !this.isMobile && !this.hideOnCollapse
    } }, h("ix-icon-button", { key: "5c96b60dc19c6cc726d91656fbbceacc75850100", class: "title-icon", size: "24", icon: this.expanded ? this.isMobile || this.hideOnCollapse ? iconClose : this.expandIcon : this.minimizeIcon, iconColor: this.expanded && (this.isMobile || this.hideOnCollapse) ? "--si-sys-text-secondary" : void 0, variant: "subtle-tertiary", onClick: () => this.dispatchExpandedChangedEvent(), "aria-controls": `pane-${this.composition}`, "aria-label": paneButtonAriaLabel }), h("div", { key: "f9627bd580e8bece81c09660d6b06465c7880386", class: {
      "title-text": true,
      rotate
    } }, this.icon && h("ix-icon", { key: "c9806e5f244580bd85ab84dc2a53217eadd7d5d6", class: "pane-icon", size: "24", name: this.icon, "aria-label": this.ariaLabelIcon }), h("div", { key: "dcaebdb51efd361a2be93e7299ccfd0ab81b3fd8", class: "title-text-overflow" }, h("ix-typography", { key: "7eefa114a4ad079936c9fd780e176f591187c7dc", format: "h4" }, this.heading)), this.expanded && h("div", { key: "c2aea95320a569b4441c7f24a97b95d69addf922", class: "slot-header" }, h("slot", { key: "18fb0052bedc491ebb73c346be6d3488c5c4d4a5", name: "header" })))), h("div", { key: "871621e4c916d3c4fc02a9252751f60757185ffb", class: {
      "side-pane-content": true,
      "no-padding": this.noPadding
    }, hidden: !this.showContent }, h("slot", { key: "915807fc549eb592b1b647838b2608c0a4b285bf" }))));
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
