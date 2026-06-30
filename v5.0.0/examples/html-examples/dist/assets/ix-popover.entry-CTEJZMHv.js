import { M as Mixin, r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-F68Qu5y3.js";
import { f as findElement, a as arrow, h as hide, c as computePosition, b as autoUpdate, o as offset, d as flip, s as shift } from "./find-element-Bxrgt3H_-DtbAzWDK.js";
import { b as addDisposableEventListenerAsArray } from "./disposable-event-listener-CKoABG1h-D5kNsG5G.js";
import { a as addFocusTrap, g as getFocusTrapFocusables, f as focusFirstFocusTrapElement } from "./focus-trap-IK9ialav-CffRa992.js";
import { D as DefaultMixins, r as removeVisibleFocus } from "./component-DqJSHc3A-D5InBSMm.js";
import { I as InheritAriaAttributesMixin } from "./inherit-aria-attributes.mixin-nCmPujqf-BcHNlwum.js";
import { C as ComponentIdMixin } from "./id.mixin-CUbYLenp-DR0VgaO1.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { r as requestAnimationFrameNoNgZone } from "./requestAnimationFrame-BEuV0Xpe-CBtvTq-Q.js";
import { N as NestedOverlayStack, p as pathIncludesTrigger } from "./path-utils-CNLoALIl-DdIsPRiD.js";
import "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
import "./shadow-dom-BClJdFQP-DyvnXMi-.js";
import "./a11y-C21npbUc-CU_Bg8RX.js";
class PopoverController {
  stack = new NestedOverlayStack({
    blocksOutsideDismiss: (popover) => !popover.closeOnClickOutside
  }, (popover) => this.dismiss(popover));
  /** LIFO order of popovers opened through {@link presentAndWait}. */
  presentationOrder = [];
  isWindowListenerActive = false;
  connected(popover) {
    if (!this.isWindowListenerActive) {
      this.addOverlayListeners();
    }
    this.stack.connect(popover);
  }
  disconnected(popover) {
    this.removeFromPresentationOrder(popover.getId());
    this.stack.disconnect(popover);
  }
  removeFromNestedPopoverIds(id) {
    this.stack.removeFromHierarchy(id);
  }
  /** Keeps stack parent→child links aligned with host {@link PopoverInterface.getNestedPopoverIds}. */
  syncNestedPopoverIds(popover) {
    this.stack.setChildIds(popover.getId(), popover.getNestedPopoverIds());
  }
  present(popover) {
    void this.presentAndWait(popover);
  }
  async presentAndWait(popover) {
    if (!popover.isPresent() && popover.willPresent?.()) {
      this.dismissOthers(popover.getId());
      this.syncNestedPopoverIds(popover);
      await popover.present();
      this.recordPresented(popover.getId());
    }
  }
  dismissChildren(uid) {
    this.dismissChildrenWithFocus(uid);
  }
  dismiss(popover, closeFocus = "restore-trigger") {
    const isPresent = popover.isPresent();
    const willDismiss = popover.willDismiss?.() ?? true;
    if (!isPresent || !willDismiss) {
      return;
    }
    this.dismissChildrenWithFocus(popover.getId(), closeFocus);
    popover.dismiss(closeFocus);
    this.stack.deleteChildIdsEntry(popover.getId());
    this.removeFromPresentationOrder(popover.getId());
  }
  dismissChildrenWithFocus(uid, closeFocus = "restore-trigger") {
    for (const childId of this.stack.getChildIds(uid)) {
      const child = this.stack.get(childId);
      if (child) {
        this.dismiss(child, closeFocus);
      }
    }
  }
  dismissAll(ignoreCloseOnClickOutside = false) {
    this.stack.dismissAll(ignoreCloseOnClickOutside ? { ignorePolicyForIds: this.stack.keys() } : void 0);
  }
  dismissTopmost() {
    const topmost = this.getTopmostForEscape();
    if (topmost) {
      this.dismiss(topmost);
    }
  }
  dismissOthers(uid) {
    this.stack.dismissOthers(uid);
  }
  pathIncludesTrigger(eventTargets) {
    return pathIncludesTrigger(eventTargets, "data-ix-popover-trigger");
  }
  recordPresented(id) {
    this.removeFromPresentationOrder(id);
    this.presentationOrder.push(id);
  }
  removeFromPresentationOrder(id) {
    const index = this.presentationOrder.indexOf(id);
    if (index > -1) {
      this.presentationOrder.splice(index, 1);
    }
  }
  /** Whether this host is the active (topmost) popover for keyboard focus. */
  isTopmostPresentedHost(host) {
    return this.getTopmostForEscape()?.hostElement === host;
  }
  getTopmostForEscape() {
    for (let index = this.presentationOrder.length - 1; index >= 0; index--) {
      const popover = this.stack.get(this.presentationOrder[index]);
      if (popover?.isPresent()) {
        return popover;
      }
    }
    let fallback;
    this.stack.forEach((popover) => {
      if (popover.isPresent()) {
        fallback = popover;
      }
    });
    return fallback;
  }
  getPopoverDialog(host) {
    return host.shadowRoot?.querySelector("dialog") ?? null;
  }
  pathIncludesPopover(eventTargets) {
    for (const eventTarget of eventTargets) {
      if (!(eventTarget instanceof HTMLElement)) {
        continue;
      }
      if (eventTarget.tagName === "IX-POPOVER") {
        return true;
      }
      for (const popover of this.stack.values()) {
        if (eventTarget === popover.hostElement) {
          return true;
        }
        const panel = this.getPopoverDialog(popover.hostElement);
        if (panel && eventTarget === panel) {
          return true;
        }
      }
    }
    return false;
  }
  dismissAllFromOutsideClick() {
    this.stack.forEach((instance) => {
      if (!instance.closeOnClickOutside || !instance.isPresent()) {
        return;
      }
      this.dismiss(instance, "release");
    });
  }
  addOverlayListeners() {
    this.isWindowListenerActive = true;
    window.addEventListener("click", (event) => {
      const hasTrigger = this.pathIncludesTrigger(event.composedPath());
      const hasPopover = this.pathIncludesPopover(event.composedPath());
      if (!hasTrigger && !hasPopover) {
        this.dismissAllFromOutsideClick();
      }
    });
    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        this.dismissTopmost();
      }
    });
  }
}
const popoverController = new PopoverController();
const popoverCss = () => `:host{--theme-popover--background:var(--theme-color-2);--theme-popover--border-color:transparent;--theme-popover--color:var(--theme-color-std-text);--theme-popover--elevation-filter:drop-shadow(0 0 2px var(--theme-color-shadow-2))     drop-shadow(0 4px 8px var(--theme-color-shadow-3))     drop-shadow(0 12px 18px var(--theme-color-shadow-3));--theme-popover-close--color:var(--theme-color-soft-text);--theme-popover-close-btn--background:transparent;--theme-popover-close-btn--background--active:var(--theme-color-ghost--active);--theme-popover-close-btn--background--hover:var(--theme-color-ghost--hover)}:host dialog.dialog{margin:0;padding:0;border:none;background-color:transparent;box-shadow:none;overflow:visible;position:fixed;inset:unset;width:25rem;min-width:15rem;max-width:37.5rem;max-height:calc(100vh - 2rem)}:host .popover-container{display:flex;flex-direction:column;position:relative;width:100%;max-height:calc(100vh - 2rem);background:var(--theme-popover--background);color:var(--theme-popover--color);border:1px solid var(--theme-popover--border-color);box-shadow:var(--theme-shadow-4);border-radius:var(--theme-default-border-radius);overflow:visible}:host .popover-body{position:relative;z-index:1;display:block;width:100%}:host .popover-container:has(.spike){box-shadow:none;filter:var(--theme-popover--elevation-filter)}:host .spike,:host .spike::before{position:absolute;width:12px;height:12px;background:inherit}:host .spike{visibility:hidden;z-index:0;pointer-events:none}:host .spike::before{visibility:visible;content:"";transform:rotate(45deg);background-color:var(--theme-popover--background)}`;
const SPIKE_OFFSET = -6;
const POPOVER_OFFSET = 12;
const HOVER_HIDE_DELAY_MS = 150;
const numberToPixel = (value) => value == null ? "" : `${value}px`;
const Popover = class extends Mixin(...DefaultMixins, InheritAriaAttributesMixin, ComponentIdMixin) {
  constructor(hostRef) {
    super();
    registerInstance(this, hostRef);
    this.showChange = createEvent(this, "showChange", 7);
    this.showChanged = createEvent(this, "showChanged", 7);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Element that toggles the popover.
   * String values are resolved as the trigger element `id`, not as CSS selectors.
   * Also accepts a DOM element reference.
   *
   * @since 5.1.0
   */
  trigger;
  /**
   * Show/hide state
   *
   * @since 5.1.0
   */
  show = false;
  /**
   * Preferred placement relative to trigger
   *
   * @since 5.1.0
   */
  placement = "bottom";
  /**
   * Show the spike pointing at the trigger
   *
   * @since 5.1.0
   */
  hasSpike = false;
  /**
   * Interaction that opens the popover
   *
   * @since 5.1.0
   */
  triggerMode = "click";
  /**
   * Dismiss when clicking outside the popover and trigger
   *
   * @since 5.1.0
   */
  closeOnClickOutside = false;
  /**
   * Fires before visibility changes. Cancel to prevent.
   *
   * @since 5.1.0
   */
  showChange;
  /**
   * Fires after visibility has changed
   *
   * @since 5.1.0
   */
  showChanged;
  dialogRef = makeRef();
  triggerElement;
  disposeAutoUpdate;
  disposeTriggerListener;
  disposeDialogListener;
  focusTrap;
  hideTimeout;
  assignedNestedPopoverIds = [];
  hasFocusableContent = false;
  suppressShowWatch = false;
  isOpeningPopover = false;
  closeFocus = "restore-trigger";
  hasDisconnected = false;
  triggerRegistryId = 0;
  /**
   * Hover mode: skip `present()` on the trigger `focus` handler while
   * `schedulePostCloseFocus()` refocuses the trigger (e.g. after Escape).
   */
  suppressFocusPresent = false;
  get spikeElement() {
    return this.hostElement.shadowRoot.querySelector(".spike");
  }
  getFocusTrapOptions() {
    return {
      trapFocusInShadowDom: "both",
      listenOnDocument: true,
      shouldDeferTabTrap: (trapHost) => !popoverController.isTopmostPresentedHost(trapHost)
    };
  }
  /** Top-layer dialog id; kept separate from host `id` when the host has a custom id. */
  get popoverPanelId() {
    return `ix-component-ix-popover-${this.$internal_id}`;
  }
  getId() {
    return this.getHostElementId();
  }
  getNestedPopoverIds() {
    return this.assignedNestedPopoverIds;
  }
  cacheNestedPopoverId(event) {
    const { detail } = event;
    if (detail !== this.getId() && !this.assignedNestedPopoverIds.includes(detail)) {
      this.assignedNestedPopoverIds.push(detail);
      popoverController.syncNestedPopoverIds(this);
      event.stopImmediatePropagation();
      event.preventDefault();
    }
  }
  isPresent() {
    return this.show;
  }
  willPresent() {
    const event = this.showChange.emit(true);
    return !event.defaultPrevented;
  }
  willDismiss() {
    const event = this.showChange.emit(false);
    return !event.defaultPrevented;
  }
  present() {
    return this.openPopover();
  }
  dismiss(closeFocus = "restore-trigger") {
    this.closeFocus = closeFocus;
    void this.closePopover();
  }
  /**
   * Open the popover programmatically
   *
   * @since 5.1.0
   */
  async showPopover() {
    await popoverController.presentAndWait(this);
  }
  /**
   * Close the popover programmatically
   *
   * @since 5.1.0
   */
  async hidePopover() {
    popoverController.dismiss(this);
  }
  onTriggerChange(newTrigger, oldTrigger) {
    if (newTrigger !== oldTrigger) {
      void this.registerTriggerListener();
    }
  }
  onTriggerModeChange() {
    this.registerTriggerListener();
  }
  onShowChange(newValue) {
    if (this.suppressShowWatch) {
      return;
    }
    if (newValue) {
      void this.openPopover({ fromShowWatch: true });
    } else {
      void this.closePopover({ fromShowWatch: true });
    }
  }
  connectedCallback() {
    if (this.hasDisconnected) {
      popoverController.connected(this);
      void this.initializePopover();
    }
  }
  componentDidLoad() {
    popoverController.connected(this);
    void this.initializePopover();
  }
  async initializePopover() {
    await this.registerTriggerListener();
    if (this.show) {
      await this.openPopover({ fromShowWatch: true });
    }
  }
  componentDidRender() {
    if (this.trigger && !this.triggerElement) {
      void this.registerTriggerListener();
    }
  }
  disconnectedCallback() {
    this.hasDisconnected = true;
    this.clearHideTimeout();
    this.disposeAutoUpdate?.();
    this.disposeTriggerListener?.();
    this.disposeDialogListener?.();
    this.focusTrap?.destroy();
    popoverController.disconnected(this);
    this.clearTriggerAria();
  }
  async openPopover(options) {
    if (this.isOpeningPopover) {
      return;
    }
    if (!options?.fromShowWatch && this.show) {
      return;
    }
    this.isOpeningPopover = true;
    try {
      const dialog = await this.dialogRef.waitForCurrent();
      if (!dialog || !this.hostElement.isConnected) {
        return;
      }
      this.suppressShowWatch = true;
      this.show = true;
      this.suppressShowWatch = false;
      dialog.showPopover();
      this.registerHoverDialogListener(dialog);
      this.detectFocusableContent();
      if (!this.triggerElement && this.trigger) {
        await this.registerTriggerListener();
      }
      if (this.triggerElement) {
        await this.applyPopoverPosition(this.triggerElement, dialog);
        this.updateTriggerAria(true);
      }
      if (this.hasFocusableContent) {
        const trap = await addFocusTrap(this.hostElement, this.getFocusTrapOptions());
        if (!this.hostElement.isConnected || !this.show) {
          trap.destroy();
        } else {
          this.focusTrap = trap;
          if (this.triggerMode !== "hover") {
            this.focusFirstElement();
          }
        }
      }
      requestAnimationFrameNoNgZone(() => {
        this.showChanged.emit(true);
      });
    } finally {
      this.isOpeningPopover = false;
    }
  }
  async closePopover(options) {
    if (!options?.fromShowWatch && !this.show) {
      return;
    }
    const dialog = await this.dialogRef.waitForCurrent();
    if (!dialog || !this.hostElement.isConnected) {
      return;
    }
    this.disposeAutoUpdate?.();
    this.disposeAutoUpdate = void 0;
    this.disposeDialogListener?.();
    this.disposeDialogListener = void 0;
    this.focusTrap?.destroy();
    this.focusTrap = void 0;
    this.applyCloseFocus();
    dialog.hidePopover();
    if (this.closeFocus === "release") {
      this.blurTriggerElement();
    }
    this.schedulePostCloseFocus();
    this.suppressShowWatch = true;
    this.show = false;
    this.suppressShowWatch = false;
    this.closeFocus = "restore-trigger";
    this.updateTriggerAria(false);
    requestAnimationFrameNoNgZone(() => {
      this.showChanged.emit(false);
    });
  }
  detectFocusableContent() {
    this.hasFocusableContent = getFocusTrapFocusables(this.hostElement, this.getFocusTrapOptions()).length > 0;
  }
  focusFirstElement() {
    const focusTrapOptions = this.getFocusTrapOptions();
    requestAnimationFrameNoNgZone(() => {
      focusFirstFocusTrapElement(this.hostElement, focusTrapOptions);
    });
  }
  applyCloseFocus() {
    if (!this.hasFocusableContent || !this.triggerElement) {
      return;
    }
    if (this.triggerMode === "hover" && this.closeFocus === "release") {
      this.releasePopoverFocus();
      return;
    }
    removeVisibleFocus();
  }
  /**
   * Run after `hidePopover()` so browser popover focus restoration can be
   * corrected (pointer dismiss) or overridden (keyboard dismiss).
   */
  schedulePostCloseFocus() {
    if (!this.hasFocusableContent || !this.triggerElement) {
      return;
    }
    if (this.triggerMode === "hover" && this.closeFocus === "release") {
      return;
    }
    const restoreTriggerFocus = this.closeFocus === "restore-trigger";
    requestAnimationFrameNoNgZone(() => {
      if (restoreTriggerFocus) {
        if (this.triggerMode === "hover") {
          this.suppressFocusPresent = true;
        }
        this.triggerElement?.focus();
        requestAnimationFrameNoNgZone(() => {
          this.suppressFocusPresent = false;
        });
        return;
      }
      this.releasePopoverFocus();
      requestAnimationFrameNoNgZone(() => {
        this.blurTriggerElement();
      });
    });
  }
  /** Pointer-driven dismiss: avoid a focus ring on the trigger. */
  releasePopoverFocus() {
    const active = document.activeElement;
    if (active instanceof HTMLElement && this.containsPopoverTarget(active)) {
      active.blur();
    }
    this.blurTriggerElement();
  }
  blurTriggerElement() {
    if (!this.triggerElement) {
      return;
    }
    const innerButton = this.triggerElement.shadowRoot?.querySelector('button, a[role="button"]');
    innerButton?.blur();
    if (this.triggerElement !== innerButton) {
      this.triggerElement.blur();
    }
  }
  async registerTriggerListener() {
    this.disposeTriggerListener?.();
    this.clearTriggerAria();
    if (!this.trigger) {
      return;
    }
    const registryId = ++this.triggerRegistryId;
    const currentTrigger = this.trigger;
    const currentTriggerMode = this.triggerMode;
    try {
      const el = await findElement(currentTrigger, this.hostElement);
      if (registryId !== this.triggerRegistryId || this.trigger !== currentTrigger || this.triggerMode !== currentTriggerMode || !this.hostElement.isConnected) {
        return;
      }
      this.triggerElement = el;
      el.dataset.ixPopoverTrigger = "";
      this.updateTriggerAria(this.show);
      this.discoverNestedPopover();
      if (this.triggerMode === "click") {
        this.disposeTriggerListener = addDisposableEventListenerAsArray([
          {
            element: el,
            eventType: "click",
            callback: () => this.togglePopover()
          },
          {
            element: el,
            eventType: "keydown",
            callback: (event) => {
              const key = event.key;
              if (key === "Enter" || key === " ") {
                event.preventDefault();
                this.togglePopover();
              }
            }
          }
        ]);
      } else {
        this.disposeTriggerListener = addDisposableEventListenerAsArray([
          {
            element: el,
            eventType: "mouseenter",
            callback: () => {
              this.clearHideTimeout();
              if (!this.show) {
                popoverController.present(this);
              }
            }
          },
          {
            element: el,
            eventType: "mouseleave",
            callback: (event) => this.scheduleHideFromTrigger(event)
          },
          {
            element: el,
            eventType: "focus",
            callback: () => {
              this.clearHideTimeout();
              if (!this.show) {
                if (this.suppressFocusPresent) {
                  return;
                }
                popoverController.present(this);
              }
            }
          },
          {
            element: el,
            eventType: "focusout",
            callback: (event) => this.scheduleHideFromTrigger(event)
          }
        ]);
      }
    } catch {
    }
  }
  discoverNestedPopover() {
    this.triggerElement?.dispatchEvent(new CustomEvent("ix-assign-sub-popover", {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: this.getId()
    }));
  }
  togglePopover() {
    if (this.show) {
      popoverController.dismiss(this);
    } else {
      popoverController.present(this);
    }
  }
  containsPopoverTarget(target) {
    if (!(target instanceof Node)) {
      return false;
    }
    if (target === this.hostElement) {
      return true;
    }
    if (this.hostElement.contains(target)) {
      return true;
    }
    const shadowRoot = this.hostElement.shadowRoot;
    if (shadowRoot?.contains(target)) {
      return true;
    }
    return false;
  }
  scheduleHideFromTrigger(event) {
    const related = event.relatedTarget;
    if (this.containsPopoverTarget(related)) {
      return;
    }
    if (event.type === "focusout") {
      requestAnimationFrameNoNgZone(() => {
        if (this.containsPopoverTarget(document.activeElement)) {
          return;
        }
        this.scheduleHide();
      });
      return;
    }
    this.scheduleHide();
  }
  scheduleHide() {
    this.clearHideTimeout();
    this.hideTimeout = setTimeout(() => {
      if (this.show) {
        popoverController.dismiss(this, "release");
      }
    }, HOVER_HIDE_DELAY_MS);
  }
  clearHideTimeout() {
    if (this.hideTimeout !== void 0) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = void 0;
    }
  }
  getTriggerAriaTarget() {
    const el = this.triggerElement;
    if (!el) {
      return void 0;
    }
    if (el.tagName === "IX-BUTTON" || el.tagName === "IX-ICON-BUTTON") {
      const inner = el.shadowRoot?.querySelector('button, a[role="button"]');
      if (inner) {
        return inner;
      }
    }
    return el;
  }
  clearTriggerAriaAttributes(element) {
    element.removeAttribute("aria-expanded");
    element.removeAttribute("aria-controls");
    element.removeAttribute("aria-haspopup");
  }
  updateTriggerAria(expanded) {
    const triggerElement = this.triggerElement;
    const target = this.getTriggerAriaTarget();
    if (!triggerElement || !target) {
      return;
    }
    target.setAttribute("aria-haspopup", "dialog");
    target.setAttribute("aria-expanded", String(expanded));
    target.setAttribute("aria-controls", this.popoverPanelId);
    if (target !== triggerElement) {
      this.clearTriggerAriaAttributes(triggerElement);
    }
  }
  clearTriggerAria() {
    if (!this.triggerElement) {
      return;
    }
    this.clearTriggerAriaAttributes(this.triggerElement);
    const inner = this.triggerElement.shadowRoot?.querySelector('button, a[role="button"]');
    if (inner) {
      this.clearTriggerAriaAttributes(inner);
    }
    delete this.triggerElement.dataset.ixPopoverTrigger;
    this.triggerElement = void 0;
  }
  computeSpikePosition({ placement, middlewareData }) {
    if (!middlewareData.arrow) {
      return void 0;
    }
    const { x, y } = middlewareData.arrow;
    const resetPosition = {
      top: "unset",
      right: "unset",
      bottom: "unset",
      left: "unset"
    };
    if (placement.startsWith("top")) {
      return {
        ...resetPosition,
        left: numberToPixel(x),
        bottom: numberToPixel(SPIKE_OFFSET)
      };
    }
    if (placement.startsWith("right")) {
      return {
        ...resetPosition,
        left: numberToPixel(SPIKE_OFFSET),
        top: numberToPixel(y)
      };
    }
    if (placement.startsWith("bottom")) {
      return {
        ...resetPosition,
        left: numberToPixel(x),
        top: numberToPixel(SPIKE_OFFSET)
      };
    }
    if (placement.startsWith("left")) {
      return {
        ...resetPosition,
        right: numberToPixel(SPIKE_OFFSET),
        top: numberToPixel(y)
      };
    }
  }
  async computePopoverPosition(target, dialog) {
    const middleware = [
      offset(POPOVER_OFFSET),
      flip({ fallbackStrategy: "initialPlacement" }),
      shift({ padding: 10 })
    ];
    if (this.hasSpike && this.spikeElement) {
      middleware.push(arrow({ element: this.spikeElement }));
    }
    middleware.push(hide());
    return computePosition(target, dialog, {
      strategy: "fixed",
      placement: this.placement,
      middleware
    });
  }
  async applyPopoverPosition(target, dialog) {
    this.disposeAutoUpdate?.();
    const updatePosition = async () => {
      if (!this.show) {
        return;
      }
      const result = await this.computePopoverPosition(target, dialog);
      if (!this.show) {
        return;
      }
      const isHidden = result.middlewareData.hide?.referenceHidden;
      if (isHidden) {
        popoverController.dismiss(this, "release");
        return result;
      }
      if (this.hasSpike && result.middlewareData.arrow) {
        const spikePos = this.computeSpikePosition(result);
        if (spikePos && this.spikeElement) {
          Object.assign(this.spikeElement.style, spikePos);
        }
      }
      Object.assign(dialog.style, {
        left: numberToPixel(result.x),
        top: numberToPixel(result.y)
      });
      return result;
    };
    await updatePosition();
    if (!this.show || !this.hostElement.isConnected) {
      return;
    }
    this.disposeAutoUpdate = autoUpdate(target, dialog, updatePosition, {
      ancestorResize: true,
      ancestorScroll: true,
      elementResize: true
    });
  }
  registerHoverDialogListener(dialog) {
    this.disposeDialogListener?.();
    if (this.triggerMode !== "hover") {
      return;
    }
    this.disposeDialogListener = addDisposableEventListenerAsArray([
      {
        element: dialog,
        eventType: "click",
        callback: (event) => {
          event.stopPropagation();
        }
      }
    ]);
  }
  onDialogMouseEnter() {
    if (this.triggerMode === "hover") {
      this.clearHideTimeout();
    }
  }
  onDialogMouseLeave() {
    if (this.triggerMode === "hover") {
      this.scheduleHide();
    }
  }
  render() {
    return h(Host, { key: "c7a49b53d681f9505c1ed2bbb3103b68c7fba1dd", class: { visible: this.show }, "data-ix-popover": this.popoverPanelId }, h("dialog", { key: "63b572c6dedf96e83ff199802de9804ae15c3ef4", ref: this.dialogRef, id: this.popoverPanelId, class: "dialog", popover: "manual", inert: !this.show, ...this.inheritAriaAttributes, role: this.inheritAriaAttributes["role"] ?? "dialog", onMouseEnter: () => this.onDialogMouseEnter(), onMouseLeave: () => this.onDialogMouseLeave() }, h("div", { key: "8524362b916de6be099acd470212b8078dce247c", class: "popover-container" }, h("div", { key: "a2bbabfe783e7de5a8e8793fa2401bc189a771b2", class: "popover-body" }, h("slot", { key: "121edffa278e4b9b32bc1d991d01d538f4655128" })), this.hasSpike ? h("div", { class: "spike" }) : null)));
  }
  static get watchers() {
    return {
      "role": [{
        "ariaAttributeChanged": 0
      }],
      "aria-activedescendant": [{
        "ariaAttributeChanged": 0
      }],
      "aria-atomic": [{
        "ariaAttributeChanged": 0
      }],
      "aria-autocomplete": [{
        "ariaAttributeChanged": 0
      }],
      "aria-braillelabel": [{
        "ariaAttributeChanged": 0
      }],
      "aria-brailleroledescription": [{
        "ariaAttributeChanged": 0
      }],
      "aria-busy": [{
        "ariaAttributeChanged": 0
      }],
      "aria-checked": [{
        "ariaAttributeChanged": 0
      }],
      "aria-colcount": [{
        "ariaAttributeChanged": 0
      }],
      "aria-colindex": [{
        "ariaAttributeChanged": 0
      }],
      "aria-colindextext": [{
        "ariaAttributeChanged": 0
      }],
      "aria-colspan": [{
        "ariaAttributeChanged": 0
      }],
      "aria-controls": [{
        "ariaAttributeChanged": 0
      }],
      "aria-current": [{
        "ariaAttributeChanged": 0
      }],
      "aria-describedby": [{
        "ariaAttributeChanged": 0
      }],
      "aria-description": [{
        "ariaAttributeChanged": 0
      }],
      "aria-details": [{
        "ariaAttributeChanged": 0
      }],
      "aria-disabled": [{
        "ariaAttributeChanged": 0
      }],
      "aria-errormessage": [{
        "ariaAttributeChanged": 0
      }],
      "aria-expanded": [{
        "ariaAttributeChanged": 0
      }],
      "aria-flowto": [{
        "ariaAttributeChanged": 0
      }],
      "aria-haspopup": [{
        "ariaAttributeChanged": 0
      }],
      "aria-hidden": [{
        "ariaAttributeChanged": 0
      }],
      "aria-invalid": [{
        "ariaAttributeChanged": 0
      }],
      "aria-keyshortcuts": [{
        "ariaAttributeChanged": 0
      }],
      "aria-label": [{
        "ariaAttributeChanged": 0
      }],
      "aria-labelledby": [{
        "ariaAttributeChanged": 0
      }],
      "aria-level": [{
        "ariaAttributeChanged": 0
      }],
      "aria-live": [{
        "ariaAttributeChanged": 0
      }],
      "aria-multiline": [{
        "ariaAttributeChanged": 0
      }],
      "aria-multiselectable": [{
        "ariaAttributeChanged": 0
      }],
      "aria-orientation": [{
        "ariaAttributeChanged": 0
      }],
      "aria-owns": [{
        "ariaAttributeChanged": 0
      }],
      "aria-placeholder": [{
        "ariaAttributeChanged": 0
      }],
      "aria-posinset": [{
        "ariaAttributeChanged": 0
      }],
      "aria-pressed": [{
        "ariaAttributeChanged": 0
      }],
      "aria-readonly": [{
        "ariaAttributeChanged": 0
      }],
      "aria-relevant": [{
        "ariaAttributeChanged": 0
      }],
      "aria-required": [{
        "ariaAttributeChanged": 0
      }],
      "aria-roledescription": [{
        "ariaAttributeChanged": 0
      }],
      "aria-rowcount": [{
        "ariaAttributeChanged": 0
      }],
      "aria-rowindex": [{
        "ariaAttributeChanged": 0
      }],
      "aria-rowindextext": [{
        "ariaAttributeChanged": 0
      }],
      "aria-rowspan": [{
        "ariaAttributeChanged": 0
      }],
      "aria-selected": [{
        "ariaAttributeChanged": 0
      }],
      "aria-setsize": [{
        "ariaAttributeChanged": 0
      }],
      "aria-sort": [{
        "ariaAttributeChanged": 0
      }],
      "aria-valuemax": [{
        "ariaAttributeChanged": 0
      }],
      "aria-valuemin": [{
        "ariaAttributeChanged": 0
      }],
      "aria-valuenow": [{
        "ariaAttributeChanged": 0
      }],
      "aria-valuetext": [{
        "ariaAttributeChanged": 0
      }],
      "trigger": [{
        "onTriggerChange": 0
      }],
      "triggerMode": [{
        "onTriggerModeChange": 0
      }],
      "show": [{
        "onShowChange": 0
      }]
    };
  }
};
Popover.style = popoverCss();
export {
  Popover as ix_popover
};
