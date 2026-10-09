import { r as registerInstance, g as getElement, h, H as Host } from "./global-CU4RCWGK.js";
import { c as computePosition, s as shift, o as offset, a as arrow, d as flip, h as hide, b as autoUpdate, r as resolveSelector } from "./find-element-Bxrgt3H_-DtbAzWDK.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { b as getSlottedElements } from "./shadow-dom-C7UpA3Tm-CtINZypD.js";
import { b as addDisposableEventListenerAsArray } from "./disposable-event-listener-CKoABG1h-D5kNsG5G.js";
const tooltipCss = () => `@charset "UTF-8";:host{--ix-tooltip--color:var(--si-sys-color-text-primary);--ix-tooltip--box-shadow:var(--si-sys-color-effects-shadow-4);--ix-tooltip--background:var(--si-sys-color-background-3)}:host{--ix-tooltip-dialog--max-width:calc(     var(--si-sys-sizing-size-160) + var(--si-sys-sizing-spacing-x-100) + var(--si-sys-sizing-spacing-x-50)   );--ix-tooltip-container--padding:var(--si-sys-sizing-spacing-y-30) var(--si-sys-sizing-spacing-x-50);--ix-tooltip-icon--margin:var(--si-sys-sizing-spacing-y-10) var(--si-sys-sizing-spacing-x-20)     var(--si-sys-sizing-spacing-y-10) 0;--ix-tooltip-container--border-radius:var(--si-sys-sizing-border-radius-sm);--ix-tooltip-arrow--width:12px;--ix-tooltip-arrow--height:12px}.dialog{margin:0;padding:0;border:none;max-width:var(--ix-tooltip-dialog--max-width);width:-moz-max-content;width:max-content;background-color:transparent;overflow-wrap:break-word;box-shadow:none;overflow:visible}.tooltip-container{display:block;position:relative;width:auto;height:-moz-fit-content;height:fit-content;background:var(--ix-tooltip--background);color:var(--ix-tooltip--color);padding:var(--ix-tooltip-container--padding);box-shadow:var(--ix-tooltip--box-shadow);border-radius:var(--ix-tooltip-container--border-radius)}.content-wrapper{overflow:auto}.tooltip-title{display:flex}.tooltip-title ::slotted(ix-icon){margin:var(--ix-tooltip-icon--margin)}.arrow,.arrow::before{position:absolute;width:var(--ix-tooltip-arrow--width);height:var(--ix-tooltip-arrow--height);background:inherit}.arrow{visibility:hidden}.arrow::before{visibility:visible;content:"";transform:rotate(45deg);background-color:var(--ix-tooltip--background)}`;
const ARROW_OFFSET = -6;
const numberToPixel = (value) => value !== null ? `${value}px` : "";
let tooltipInstance = 0;
const Tooltip = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  /**
   * CSS selector for hover trigger element e.g. `for="[data-my-custom-select]"`
   */
  for;
  /**
   * Title of the tooltip
   */
  titleContent;
  /**
   * Define if the user can access the tooltip via mouse.
   */
  interactive = false;
  /**
   * Initial placement of the tooltip.
   * If the selected placement doesn't have enough space, the tooltip will be repositioned to another location.
   */
  placement = "top";
  /** @internal */
  showDelay = 0;
  /** @internal */
  hideDelay = 50;
  /** @internal */
  animationFrame = false;
  get hostElement() {
    return getElement(this);
  }
  visible = false;
  hideTooltipTimeout;
  showTooltipTimeout;
  visibleFor;
  disposeAutoUpdate;
  disposeTriggerListener;
  disposeTooltipListener;
  disposeDomChangeListener;
  hasDisconnected = false;
  instance = tooltipInstance++;
  dialogRef = makeRef();
  get arrowElement() {
    return this.hostElement.shadowRoot.querySelector(".arrow");
  }
  /** @internal */
  async showTooltip(anchorElement) {
    this.clearTimeouts();
    if (this.showTooltipTimeout || this.visibleFor === anchorElement) {
      return;
    }
    const dialog = await this.dialogRef.waitForCurrent();
    this.showTooltipTimeout = setTimeout(() => {
      this.setAnchorElement(anchorElement);
      dialog.showPopover();
      this.applyTooltipPosition(anchorElement, dialog);
      this.registerTooltipListener(dialog);
    }, this.showDelay);
  }
  /** @internal */
  async hideTooltip(hideDelay = this.hideDelay) {
    this.clearTimeouts();
    if (this.hideTooltipTimeout || !this.visible) {
      return;
    }
    if (this.interactive && hideDelay === 50) {
      hideDelay = 150;
    }
    const dialog = await this.dialogRef.waitForCurrent();
    this.hideTooltipTimeout = setTimeout(() => {
      this.setAnchorElement();
      dialog.hidePopover();
      this.disposeAutoUpdate?.();
      this.disposeTooltipListener?.();
    }, hideDelay);
  }
  setAnchorElement(anchorElement) {
    if (!anchorElement) {
      this.visibleFor = void 0;
      this.visible = false;
    } else {
      this.visibleFor = anchorElement;
      this.visible = true;
    }
  }
  computeArrowPosition({ placement, middlewareData }) {
    const arrow2 = middlewareData.arrow;
    if (!arrow2) {
      return void 0;
    }
    let { x, y } = arrow2;
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
        bottom: numberToPixel(ARROW_OFFSET)
      };
    }
    if (placement.startsWith("right")) {
      return {
        ...resetPosition,
        left: numberToPixel(ARROW_OFFSET),
        top: numberToPixel(y)
      };
    }
    if (placement.startsWith("bottom")) {
      return {
        ...resetPosition,
        left: numberToPixel(x),
        top: numberToPixel(ARROW_OFFSET)
      };
    }
    if (placement.startsWith("left")) {
      return {
        ...resetPosition,
        right: numberToPixel(ARROW_OFFSET),
        top: numberToPixel(y)
      };
    }
  }
  async computeTooltipPosition(target, dialog) {
    return computePosition(target, dialog, {
      strategy: "fixed",
      placement: this.placement,
      middleware: [
        shift(),
        offset(12),
        arrow({
          element: this.arrowElement
        }),
        flip({
          fallbackStrategy: "initialPlacement",
          fallbackAxisSideDirection: "end",
          padding: 10
        }),
        hide()
      ]
    });
  }
  applyTooltipArrowPosition(computeResponse) {
    const arrowPosition = this.computeArrowPosition(computeResponse);
    Object.assign(this.arrowElement.style, arrowPosition);
  }
  async applyTooltipPosition(target, dialog) {
    if (!target) {
      return;
    }
    return new Promise((resolve) => {
      this.disposeAutoUpdate?.();
      this.disposeAutoUpdate = autoUpdate(target, dialog, async () => {
        const computeResponse = await this.computeTooltipPosition(target, dialog);
        const isHidden = computeResponse.middlewareData.hide?.referenceHidden;
        if (isHidden) {
          this.hideTooltip(0);
          resolve(computeResponse);
        }
        if (computeResponse.middlewareData.arrow) {
          this.applyTooltipArrowPosition(computeResponse);
        }
        const { x, y } = computeResponse;
        Object.assign(dialog.style, {
          left: numberToPixel(x),
          top: numberToPixel(y)
        });
        resolve(computeResponse);
      }, {
        ancestorResize: true,
        ancestorScroll: true,
        elementResize: true,
        animationFrame: this.animationFrame
      });
    });
  }
  async queryAnchorElements() {
    if (this.for) {
      if (Array.isArray(this.for)) {
        return this.resolveElements(this.for);
      } else {
        return this.resolveElements([this.for]);
      }
    }
  }
  async resolveElements(references) {
    const elements = [];
    await Promise.all(references.map(async (reference) => {
      if (typeof reference === "string") {
        const resolvedElements = await resolveSelector(reference, this.hostElement);
        if (resolvedElements) {
          elements.push(...resolvedElements);
        }
      } else if (reference instanceof HTMLElement) {
        elements.push(reference);
      } else if (reference instanceof Promise) {
        elements.push(await reference);
      }
    }));
    return elements;
  }
  async registerTriggerListener() {
    this.disposeTriggerListener?.();
    const triggerElementList = await this.queryAnchorElements();
    if (!triggerElementList) {
      return;
    }
    const listeners = [];
    triggerElementList.forEach((element) => {
      listeners.push(...[
        {
          element,
          eventType: "mouseenter",
          callback: () => {
            this.showTooltip(element);
          }
        },
        {
          element,
          eventType: "mouseleave",
          callback: () => {
            this.hideTooltip();
          }
        },
        {
          element,
          eventType: "focusin",
          callback: () => {
            this.showTooltip(element);
          }
        },
        {
          element,
          eventType: "focusout",
          callback: () => {
            this.hideTooltip();
          }
        }
      ]);
    });
    this.disposeTriggerListener = addDisposableEventListenerAsArray(listeners);
  }
  registerTooltipListener(dialog) {
    this.disposeTooltipListener?.();
    this.disposeTooltipListener = addDisposableEventListenerAsArray([
      {
        element: dialog,
        eventType: "mouseenter",
        callback: () => {
          if (this.interactive) {
            this.clearHideTimeout();
          }
        }
      },
      {
        element: dialog,
        eventType: "focus",
        callback: () => {
          if (this.interactive) {
            this.clearHideTimeout();
          }
        }
      },
      {
        element: dialog,
        eventType: "mouseleave",
        callback: () => {
          this.hideTooltip();
        }
      },
      {
        element: dialog,
        eventType: "focusout",
        callback: () => {
          this.hideTooltip();
        }
      },
      {
        element: dialog,
        eventType: "click",
        callback: (event) => {
          event.stopPropagation();
        }
      },
      {
        element: document,
        eventType: "keydown",
        callback: (event) => {
          if (event.key === "Escape") {
            this.hideTooltip();
          }
        }
      }
    ]);
  }
  registerDomChangeListener() {
    this.disposeDomChangeListener?.();
    const observer = new MutationObserver(() => {
      this.registerTriggerListener();
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-ix-tooltip"],
      childList: true,
      subtree: true
    });
    this.disposeDomChangeListener = () => {
      observer.disconnect();
    };
  }
  clearHideTimeout() {
    clearTimeout(this.hideTooltipTimeout);
    this.hideTooltipTimeout = void 0;
  }
  clearShowTimeout() {
    clearTimeout(this.showTooltipTimeout);
    this.showTooltipTimeout = void 0;
  }
  clearTimeouts() {
    this.clearHideTimeout();
    this.clearShowTimeout();
  }
  componentWillLoad() {
    this.registerTriggerListener();
  }
  componentDidLoad() {
    this.registerDomChangeListener();
  }
  connectedCallback() {
    if (this.hasDisconnected) {
      this.registerTriggerListener();
      this.registerDomChangeListener();
    }
  }
  disconnectedCallback() {
    this.hasDisconnected = true;
    this.clearTimeouts();
    this.disposeAutoUpdate?.();
    this.disposeTriggerListener?.();
    this.disposeTooltipListener?.();
    this.disposeDomChangeListener?.();
  }
  handleTitleIconSlotChange(e) {
    const slot = e.target;
    const elements = getSlottedElements(slot);
    for (const element of elements) {
      if (element.tagName.toLowerCase() === "ix-icon") {
        element.setAttribute("size", "16");
      }
    }
  }
  render() {
    return h(Host, { key: "e51df65b8c0211f5e1da51593b3b70644c284aaa", role: "tooltip", class: { visible: this.visible } }, h("dialog", { key: "39eb6dd139528fce9ca6130e56bd50d2083eaef5", ref: this.dialogRef, id: "tooltip-" + this.instance, class: "dialog", popover: "manual", inert: !this.visible }, h("div", { key: "d1ec2033e8b1849a715470a736b4994512ad0a10", class: "tooltip-container" }, h("div", { key: "51fdbdffd4d62050c3c05e742be5f74475d9eec6", class: "content-wrapper" }, h("div", { key: "738ee3ad3c370edee30b5fca88d2ce559d55bd8c", class: "tooltip-title" }, h("slot", { key: "8b6f4fc26accc2b69ec07e656f47d2b775631d55", name: "title-icon", onSlotchange: (e) => this.handleTitleIconSlotChange(e) }), h("ix-typography", { key: "f31490c348c5465653fce5cf9f3cb99454b05b02", format: "h5" }, this.titleContent, h("slot", { key: "ada622fd49ce4df01bc75aaf26fd57b0d25dd820", name: "title-content" }))), h("slot", { key: "2a115c15f924927ca0e197dfe91d63f93146dc4e" }), h("div", { key: "6fa6ae3fc1715765283e135e9079d527046bdf72", class: "arrow" })))));
  }
};
Tooltip.style = tooltipCss();
export {
  Tooltip as ix_tooltip
};
