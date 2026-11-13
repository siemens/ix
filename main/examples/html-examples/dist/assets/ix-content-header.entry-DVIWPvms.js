import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./index-CgUi6DzV-DfH3Z96w.js";
import { h as iconMoreMenu, r as iconArrowLeft } from "./index-CZ_u3Y0s-B1dE3kOK.js";
import { g as getDeepActiveElement } from "./focus-trap-wdvfXiKy-B0gJlu0v.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { r as requestAnimationFrameNoNgZone } from "./requestAnimationFrame-BEuV0Xpe-CBtvTq-Q.js";
import { g as generateUUID } from "./uuid-C-rWQraY-B1UcM45z.js";
import { w as waitForElement } from "./waitForElement-2Q-9pN1C-BYEnc4va.js";
import { a as applicationLayoutService } from "./service-C3ifmVz8-BWlcCSeE.js";
import "./preload-helper-UZRgTS1n.js";
import "./focus-utilities-6ZxKp7Jn-DqvT-65C.js";
import "./breakpoints-CngdN1zi-CCrbHAVS.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
const contentHeaderCss = () => `@charset "UTF-8";:host{--ix-content-header-title-group--margin-right:var(--si-sys-sizing-spacing-x-40);--ix-content-header-header-slot--margin-left:var(--si-sys-sizing-spacing-x-40);--ix-content-header-secondary--padding:var(--si-sys-sizing-spacing-y-20) 0;--ix-content-header-back-button--margin-right:var(--si-sys-sizing-spacing-x-40);--ix-content-header-overflow-button--margin-left:var(--si-sys-sizing-spacing-x-40);--ix-content-header-actions--gap:var(--si-sys-sizing-spacing-x-20)}:host{display:flex;flex-direction:row;flex-wrap:wrap;align-items:flex-start;padding:0}:host .titleGroup{display:flex;flex-direction:column;flex:1 1 0;min-width:0;margin-right:var(--ix-content-header-title-group--margin-right)}:host .titleGroup .headerText{min-width:0;overflow-wrap:anywhere}:host .titleGroup .headerText.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .titleGroup .header-title{font:inherit;margin:0;padding:0}:host .titleGroup .header-title.secondary{padding:var(--ix-content-header-secondary--padding)}:host .titleGroup .header-title.truncate ix-typography{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .titleGroup .headerTitleRow{display:flex}:host .titleGroup .headerTitleRow .headerText{flex:0 1 auto}:host .titleGroup .headerTitleRow .headerSlot{display:inline-flex;flex:0 0 auto;align-self:flex-start;margin-left:var(--ix-content-header-header-slot--margin-left)}:host .backButton{margin-right:var(--ix-content-header-back-button--margin-right)}:host .buttons{flex:0 0 auto;display:flex;align-items:flex-start;flex-wrap:wrap;max-width:100%}:host .buttons.inline-secondary-actions{-moz-column-gap:var(--ix-content-header-actions--gap);column-gap:var(--ix-content-header-actions--gap)}:host .primaryActions,:host .secondaryActions{display:flex;gap:var(--ix-content-header-actions--gap)}:host .primaryActions{flex-wrap:wrap;max-width:100%}:host .primaryActions ::slotted(*){max-width:100%}:host .secondaryActions{width:-moz-max-content;width:max-content}:host .secondaryActions.collapsed{position:fixed;top:0;right:100%;visibility:hidden;pointer-events:none}:host .overflowButton{margin-left:var(--ix-content-header-overflow-button--margin-left)}`;
const ContentHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.backButtonClick = createEvent(this, "backButtonClick", 7);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Variant of content header
   */
  variant = "primary";
  /**
   * Title of Header
   */
  headerTitle;
  /**
   * Subtitle of Header
   */
  headerSubtitle = void 0;
  /**
   * Controls how the title and subtitle handle limited horizontal space.
   * Ellipsis visually truncates the text without adding a tooltip.
   *
   * @since 6.0.0
   */
  textOverflow = "wrap";
  /**
   * Display a back button
   */
  hasBackButton = false;
  /**
   * Accessible label for the secondary actions overflow menu.
   *
   * @since 6.0.0
   */
  ariaLabelMoreActions = "More actions";
  /**
   * Triggered when back button is clicked
   */
  backButtonClick;
  actionsOverflow = false;
  secondaryActions = [];
  primaryActionsElement;
  secondaryActionsElement;
  resizeObserver;
  actionsObserver;
  breakpointSubscription;
  animationFrame;
  hasLoaded = false;
  focusAfterRender;
  overflowTrigger = makeRef();
  overflowId = `content-header-actions-${generateUUID()}`;
  connectedCallback() {
    if (this.hasLoaded) {
      this.observeActions();
    }
  }
  componentDidLoad() {
    this.hasLoaded = true;
    this.observeActions();
  }
  componentDidRender() {
    this.scheduleLayout();
    const focusTarget = this.focusAfterRender;
    this.focusAfterRender = void 0;
    if (focusTarget === "overflow") {
      this.getOverflowTrigger().then((trigger) => trigger.focus());
    } else if (focusTarget) {
      focusTarget.shadowRoot.querySelector("button, a").focus();
    }
  }
  disconnectedCallback() {
    this.resizeObserver?.disconnect();
    this.actionsObserver?.disconnect();
    this.breakpointSubscription?.dispose();
    if (this.animationFrame !== void 0) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = void 0;
    }
  }
  onResize() {
    this.updateActions();
  }
  observeActions() {
    this.resizeObserver = new ResizeObserver(this.scheduleLayout);
    this.resizeObserver.observe(this.hostElement);
    if (this.primaryActionsElement) {
      this.resizeObserver.observe(this.primaryActionsElement);
    }
    if (this.secondaryActionsElement) {
      this.resizeObserver.observe(this.secondaryActionsElement);
    }
    this.actionsObserver = new MutationObserver(this.updateActions);
    this.breakpointSubscription = applicationLayoutService.onChange.on(this.scheduleLayout);
    this.updateActions();
  }
  updateActions = () => {
    this.secondaryActions = Array.from(this.hostElement.querySelectorAll(':scope > ix-button[slot="secondary-actions"], :scope > ix-icon-button[slot="secondary-actions"]')).filter((action) => !action.hidden && getComputedStyle(action).display !== "none");
    this.actionsObserver?.disconnect();
    for (const target of [
      this.hostElement,
      ...this.secondaryActions.map((action) => action.shadowRoot)
    ]) {
      if (target) {
        this.actionsObserver?.observe(target, {
          attributes: true,
          characterData: true,
          childList: true,
          subtree: true
        });
      }
    }
    this.scheduleLayout();
  };
  scheduleLayout = () => {
    if (this.animationFrame !== void 0) {
      return;
    }
    this.animationFrame = requestAnimationFrameNoNgZone(() => {
      this.animationFrame = void 0;
      this.updateOverflow();
    });
  };
  updateOverflow() {
    if (!this.primaryActionsElement || !this.secondaryActionsElement) {
      return;
    }
    const titleGroup = this.hostElement.shadowRoot.querySelector(".titleGroup");
    const backButton = this.hostElement.shadowRoot.querySelector(".backButton");
    titleGroup.style.flex = "0 0 auto";
    titleGroup.style.width = "max-content";
    const titleWidth = titleGroup.getBoundingClientRect().width;
    titleGroup.style.removeProperty("flex");
    titleGroup.style.removeProperty("width");
    const requiredWidth = this.primaryActionsElement.scrollWidth + this.secondaryActionsElement.getBoundingClientRect().width + parseFloat(getComputedStyle(this.secondaryActionsElement).columnGap) + (backButton ? backButton.getBoundingClientRect().width + parseFloat(getComputedStyle(backButton).marginRight) : 0) + titleWidth + parseFloat(getComputedStyle(titleGroup).marginRight);
    const actionsOverflow = this.secondaryActions.length > 0 && (applicationLayoutService.breakpoint === "sm" || requiredWidth > this.hostElement.clientWidth);
    if (actionsOverflow !== this.actionsOverflow) {
      const active = getDeepActiveElement();
      if (actionsOverflow && this.secondaryActions.some((action) => active && action.shadowRoot?.contains(active))) {
        this.focusAfterRender = "overflow";
      } else if (!actionsOverflow && active && (this.overflowTrigger.current?.shadowRoot?.contains(active) || this.hostElement.shadowRoot.querySelector(".overflowButton")?.contains(active))) {
        const items = Array.from(this.hostElement.shadowRoot.querySelectorAll("ix-dropdown-item"));
        this.focusAfterRender = this.secondaryActions[Math.max(0, items.findIndex((item) => item === active))];
      }
    }
    this.actionsOverflow = actionsOverflow;
  }
  getActionLabel(action) {
    return action.getAttribute("aria-label") || action.shadowRoot?.querySelector("button, a")?.getAttribute("aria-label") || action.textContent?.trim() || action.getAttribute("title") || "";
  }
  activateAction(action) {
    if (action.disabled || action.loading) {
      return;
    }
    action.shadowRoot.querySelector("button, a").click();
  }
  async getOverflowTrigger() {
    const element = await this.overflowTrigger.waitForCurrent();
    return waitForElement("button", element.shadowRoot);
  }
  render() {
    return h(Host, { key: "5ebda83755b787ea7ea8c3781d43222c47ac1ae7" }, this.hasBackButton ? h("ix-icon-button", { class: "backButton", variant: "tertiary", icon: iconArrowLeft, onClick: () => this.backButtonClick.emit() }) : null, h("div", { key: "a657afea03176ae441624b8d18ac953144779702", class: "titleGroup" }, h("div", { key: "a632205f1593976420c5fe8678b3821c6d7a6ec5", class: "headerTitleRow" }, this.headerTitle && h("h2", { key: "a82068bd5b77559f18f1afe708eb361f8f7939e8", class: {
      "header-title": true,
      secondary: this.variant === "secondary",
      headerText: true,
      truncate: this.textOverflow === "ellipsis"
    } }, h("ix-typography", { key: "6437f922a4d3ee732ff066b6beeef60632cc28c5", format: this.variant === "secondary" ? "h4" : "h3", class: {
      headerText: true,
      truncate: this.textOverflow === "ellipsis"
    } }, this.headerTitle)), h("div", { key: "7892973579d44d1c1af5e20c99c927a42ba14aad", class: "headerSlot" }, h("slot", { key: "cb1f8c0bb90a0b6b702779be5fb2f3d1387b0fe0", name: "header" }))), !!this.headerSubtitle && h("ix-typography", { key: "77bc4afc4aef0948eb42d49c8d746680dc8c7441", format: "h6", "text-color": "secondary", class: {
      subtitle: this.variant === "secondary",
      headerText: true,
      truncate: this.textOverflow === "ellipsis"
    } }, this.headerSubtitle)), h("div", { key: "8f8b907f8f8223159fe52aa85e5b535dcfe0c503", class: {
      buttons: true,
      "inline-secondary-actions": this.secondaryActions.length > 0 && !this.actionsOverflow
    } }, h("div", { key: "1d1a80f1b6b50f394a24ac91e8440944cd0b820a", class: {
      secondaryActions: true,
      collapsed: this.actionsOverflow
    }, inert: this.actionsOverflow, ref: (element) => this.secondaryActionsElement = element }, h("slot", { key: "46f25ae117b2a678acfb7b33434b0ed85ddaa7d2", name: "secondary-actions", onSlotchange: this.updateActions })), h("div", { key: "247797fbc4f2af859ce186c230bd0d4a7cc6f205", class: "primaryActions", ref: (element) => this.primaryActionsElement = element }, h("slot", { key: "8a18feffe3d7d58b63ed151a28db2017c95148e0", onSlotchange: this.scheduleLayout })), this.actionsOverflow && h("div", { key: "dd26288046a798341f9998229c11e30cb2b735e5", class: "overflowButton" }, h("ix-icon-button", { key: "0ba4c0317c8e0051650fc09b91a5ec8ed7edc77c", ref: this.overflowTrigger, icon: iconMoreMenu, variant: "tertiary", "aria-label": this.ariaLabelMoreActions, "aria-haspopup": "menu", "aria-controls": this.overflowId, "aria-expanded": "false" }), h("ix-dropdown", { key: "2001b31ffdf3011e2675a8861fa0b7847b97e4e7", id: this.overflowId, role: "menu", "aria-label": this.ariaLabelMoreActions, trigger: this.getOverflowTrigger(), navigationMode: "roving-tabindex", placement: "bottom-end", onShowChanged: (event) => {
      this.getOverflowTrigger().then((trigger) => trigger.setAttribute("aria-expanded", String(event.detail)));
    } }, this.secondaryActions.map((action, index) => h("ix-dropdown-item", { key: index, label: this.getActionLabel(action), icon: action.icon, disabled: action.disabled || action.loading, suppressChecked: true, onItemClick: () => this.activateAction(action) }))))));
  }
};
ContentHeader.style = contentHeaderCss();
export {
  ContentHeader as ix_content_header
};
