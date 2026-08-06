import { r as registerInstance, g as getElement, h, H as Host } from "./global-CSIWS5Ku.js";
import { c as computePosition, s as shift, o as offset, a as arrow, d as flip, h as hide, b as autoUpdate, r as resolveSelector } from "./find-element-wg9fw2rj-DBJU0m-Q.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { b as getSlottedElements } from "./shadow-dom-BClJdFQP-DyvnXMi-.js";
import { b as addDisposableEventListenerAsArray } from "./disposable-event-listener-CKoABG1h-D5kNsG5G.js";
const tooltipCss = () => `.dialog{margin:0;padding:0;border:none;max-width:18.25rem;width:-moz-max-content;width:max-content;background-color:transparent;overflow-wrap:break-word;box-shadow:none;overflow:visible}.tooltip-container{display:block;position:relative;width:auto;height:-moz-fit-content;height:fit-content;background:var(--theme-tootlip--background);color:var(--theme-color-std-text);padding:0.375rem 0.75rem;box-shadow:var(--theme-shadow-4);border-radius:0.25rem}.content-wrapper{overflow:auto}.tooltip-title{display:flex}.tooltip-title ::slotted(ix-icon){margin:0.125rem 0.25rem 0.125rem 0}.arrow,.arrow::before{position:absolute;width:12px;height:12px;background:inherit}.arrow{visibility:hidden}.arrow::before{visibility:visible;content:"";transform:rotate(45deg);background-color:var(--theme-tootlip--background)}`;
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
    let { x, y } = middlewareData.arrow;
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
          eventType: "focus",
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
        element.size = "16";
      }
    }
  }
  render() {
    return h(Host, { key: "9d0db26ddaae6b9e8d1043c1466d0a092882c503", role: "tooltip", class: { visible: this.visible } }, h("dialog", { key: "b5c159c8f9957dad633ce5daf2b784d8b95d4abc", ref: this.dialogRef, id: "tooltip-" + this.instance, class: "dialog", popover: "manual", inert: !this.visible }, h("div", { key: "300ab8ba5c2a72a3f6060de3186c81dd30e94e34", class: "tooltip-container" }, h("div", { key: "0293c71b41aa5f415f556ddba9a9a042f64bb9c2", class: "content-wrapper" }, h("div", { key: "7fa4cb4346c9b8e54cae225fabffbeb805a1b7d5", class: "tooltip-title" }, h("slot", { key: "2d8cfad38403496075982dbd440a6acff798e278", name: "title-icon", onSlotchange: (e) => this.handleTitleIconSlotChange(e) }), h("ix-typography", { key: "944a695e9672d2a2af98effd4bb9300ef784a7ec", format: "h5" }, this.titleContent, h("slot", { key: "cc57f14ee1efbbd222f699cea0541e42bdf235e5", name: "title-content" }))), h("slot", { key: "82cd8b0ceaa10aa7db6492b199b44d6a2899545b" }), h("div", { key: "d3516a3561f3c861859492f81fbcd4fb9e964273", class: "arrow" })))));
  }
};
Tooltip.style = tooltipCss();
export {
  Tooltip as ix_tooltip
};
