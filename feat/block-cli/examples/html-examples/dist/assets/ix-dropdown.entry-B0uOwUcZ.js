import { M as Mixin, r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-C_dy4gBz.js";
import { i as inline, s as shift, o as offset, a as autoUpdate, f as flip, c as computePosition } from "./floating-ui.dom-CAqtPJ4--DFASu3km.js";
import { a as addDisposableEventListener } from "./disposable-event-listener-CKoABG1h-D5kNsG5G.js";
import { f as findElement } from "./find-element-SH0e-Dn8-DmHANPs3.js";
import { b as addFocusTrap } from "./focus-trap-0-e7_EJl-C_W0MO97.js";
import { q as queryElements, b as focusFirstDescendant, c as focusLastDescendant, d as focusElementInContext, I as IX_FOCUS_VISIBLE_ACTIVE, e as focusElement } from "./focus-utilities-Cft9zvbS-CmL7xuFI.js";
import { D as DefaultMixins, r as removeVisibleFocus, h as hasKeyboardMode } from "./component-YJmg0LbX-Cdi_gd8D.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { r as requestAnimationFrameNoNgZone } from "./requestAnimationFrame-BEuV0Xpe-CBtvTq-Q.js";
import { d as dropdownController, h as hasDropdownItemWrapperImplemented } from "./dropdown-controller-D6Wm2E-0-B2aMR2tH.js";
import "./shadow-dom-T30VMB2R-DtdN3xF2.js";
const VALID_FOCUS_ELEMENTS = [
  "ix-dropdown-item",
  "ix-select-item",
  "ix-menu-item",
  "ix-menu-category"
];
const QUERY_ARROW_ELEMENTS = VALID_FOCUS_ELEMENTS.map((selector) => `${selector}:not([tabindex^="-"]):not([disabled]):not([hidden])`).join(", ");
const QUERY_CURRENT_VISIBLE_FOCUS = VALID_FOCUS_ELEMENTS.map((selector) => `${selector}.${IX_FOCUS_VISIBLE_ACTIVE}:not([tabindex^="-"]):not([disabled]):not([hidden])`).join(", ");
const getIndexOfDropdownItem = (items, item, selector = QUERY_ARROW_ELEMENTS) => {
  if (!item) {
    return -1;
  }
  if (!item.matches(selector)) {
    return -1;
  }
  return items.findIndex((el) => el === item);
};
const getNextFocusableDropdownItem = (items, currentItem, selector = QUERY_CURRENT_VISIBLE_FOCUS) => {
  const currentItemIndex = getIndexOfDropdownItem(items, currentItem, selector);
  const nextIndex = currentItemIndex + 1;
  return items[nextIndex >= items.length ? 0 : nextIndex];
};
const getPreviousFocusableItem = (items, currentItem, selector = QUERY_CURRENT_VISIBLE_FOCUS) => {
  const currentItemIndex = getIndexOfDropdownItem(items, currentItem, selector);
  const prevIndex = currentItemIndex - 1;
  return items[prevIndex < 0 ? items.length - 1 : prevIndex];
};
const focusItem = (item) => {
  requestAnimationFrameNoNgZone(async () => {
    let element = item;
    if (item.matches("ix-menu-category")) {
      element = item.shadowRoot.querySelector(".category-parent");
    }
    if (element) {
      focusElement(element);
      requestAnimationFrameNoNgZone(() => element.scrollIntoView({
        block: "nearest"
      }));
    }
  });
};
const isTriggerElement = (element) => element.hasAttribute("data-ix-dropdown-trigger");
const configureKeyboardInteraction = (getItemsHost, options = {}) => {
  const querySelector = options.querySelector ?? QUERY_ARROW_ELEMENTS;
  const activeQuerySelector = options.activeQuerySelector ?? QUERY_CURRENT_VISIBLE_FOCUS;
  const itemTriggerKeys = options.itemTriggerKeys ?? [
    "ArrowRight",
    "Enter",
    " "
  ];
  const getActiveElement = options.getActiveElement ?? (() => {
    return queryElements(getItemsHost(), activeQuerySelector)[0];
  });
  const setItemActive = options.setItemActive ?? ((item) => focusItem(item));
  const getEventListenerTarget = options.getEventListenerTarget ?? (() => getItemsHost());
  const callback = async (event) => {
    const activeElement = getActiveElement();
    let items = [];
    try {
      if (getItemsHost().querySelectorAll("slot").length > 0) {
        const slotElements = Array.from(getItemsHost().querySelectorAll("slot"));
        items = slotElements.flatMap((slot) => Array.from(slot.assignedElements({ flatten: true })).flatMap((el) => {
          if (el?.matches(querySelector)) {
            return [el];
          }
          return Array.from(el.querySelectorAll(querySelector));
        }));
      }
      items = [
        ...items,
        ...Array.from(getItemsHost().querySelectorAll(querySelector))
      ];
    } catch (e) {
    }
    if (options.beforeKeydown) {
      options.beforeKeydown(event);
    }
    switch (event.key) {
      case "ArrowLeft": {
        getItemsHost().dispatchEvent(new CustomEvent("ix-close-submenu", {
          bubbles: true,
          cancelable: true
        }));
        break;
      }
      case "ArrowDown": {
        if (event.altKey) {
          return;
        }
        event.preventDefault();
        const nextItem = getNextFocusableDropdownItem(items, activeElement, activeQuerySelector);
        if (nextItem !== void 0) {
          setItemActive(nextItem);
        }
        break;
      }
      case "ArrowUp": {
        if (event.altKey) {
          return;
        }
        event.preventDefault();
        const prevItem = getPreviousFocusableItem(items, activeElement, activeQuerySelector);
        if (prevItem !== void 0) {
          setItemActive(prevItem);
        }
        break;
      }
      case "Home": {
        event.preventDefault();
        const firstItem = items[0];
        if (firstItem !== void 0) {
          setItemActive(firstItem);
        }
        break;
      }
      case "End": {
        event.preventDefault();
        const lastItem = items[items.length - 1];
        if (lastItem !== void 0) {
          setItemActive(lastItem);
        }
        break;
      }
      case "ArrowRight":
      case " ":
      case "Enter": {
        if (activeElement && isTriggerElement(activeElement)) {
          const triggerEvent = new CustomEvent("ix-open-submenu", {
            bubbles: true,
            cancelable: true,
            detail: {
              activeElement
            }
          });
          activeElement.dispatchEvent(triggerEvent);
          return;
        }
        break;
      }
    }
    if (itemTriggerKeys.includes(event.key)) {
      options.onItemActivation?.(event, activeElement);
    }
  };
  const listenerTarget = getEventListenerTarget();
  listenerTarget.addEventListener("keydown", callback);
  return () => listenerTarget.removeEventListener("keydown", callback);
};
const dropdownCss = () => `:host{background-color:var(--theme-color-2);border-radius:var(--theme-default-border-radius);min-width:0px;z-index:var(--theme-z-index-dropdown);box-shadow:var(--theme-shadow-4);padding:0.25rem 0px}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .dropdown-header{display:flex;align-items:center;height:2.5rem;color:var(--theme-menu-header--color);padding:0 1rem}:host(.overflow){max-height:calc(50vh - 3rem);overflow-y:auto}:host(:not(.show)){display:none !important}.dialog{margin:0;border:none;outline:none;padding:0.25rem 0px;min-width:0;max-width:100vw;width:-moz-max-content;width:max-content;height:-moz-fit-content;height:fit-content;background-color:var(--theme-color-2);border-radius:var(--theme-default-border-radius);box-shadow:var(--theme-shadow-4);overflow-x:visible;overflow-y:visible;inset:unset;color-scheme:inherit;color:var(--theme-color-std-text);box-sizing:border-box}.dialog *,.dialog *::after,.dialog *::before{box-sizing:border-box}.dialog .dropdown-container{display:block;position:relative}.dialog .dropdown-header{display:flex;align-items:center;height:2.5rem;color:var(--theme-menu-header--color);padding:0 1rem}.dialog.overflow{max-height:calc(50vh - 3rem);overflow-y:auto}`;
let sequenceId = 0;
const Dropdown = class extends Mixin(...DefaultMixins) {
  constructor(hostRef) {
    super();
    registerInstance(this, hostRef);
    this.showChange = createEvent(this, "showChange", 7);
    this.showChanged = createEvent(this, "showChanged", 7);
    this.experimentalRequestFocus = createEvent(this, "experimentalRequestFocus", 7);
    this.experimentalFocusNextElement = createEvent(this, "experimentalFocusNextElement", 7);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Suppress the automatic placement of the dropdown.
   */
  suppressAutomaticPlacement = false;
  /**
   * Show dropdown
   */
  show = false;
  /**
   * Define an element that triggers the dropdown.
   * A trigger can either be a string that will be interpreted as id attribute or a DOM element.
   */
  trigger;
  /**
   * Define an anchor element
   */
  anchor;
  /**
   * Controls if the dropdown will be closed in response to a click event depending on the position of the event relative to the dropdown.
   * If the dropdown is a child of another one, it will be closed with the parent, regardless of its own close behavior.
   */
  closeBehavior = "both";
  /**
   * Placement of the dropdown
   */
  placement = "bottom-start";
  /**
   * Position strategy
   */
  positioningStrategy = "fixed";
  /**
   * An optional header shown at the top of the dropdown
   */
  header;
  /**
   * Suppress automatic focus when the dropdown is shown
   *
   * @since 4.3.0
   */
  disableFocusHandling = false;
  /**
   * Close dropdown when tabbing away, and do not trap focus inside dropdown
   *
   * @since 4.3.0
   */
  disableFocusTrap = false;
  /**
   * Enable Popover API rendering for top-layer positioning.
   *
   * @default false in v4.x, will default to true in v5.0.0
   * @since 4.3.0
   */
  enableTopLayer = false;
  /**
   * If true, the dropdown will try to focus checked items first when opened via keyboard, otherwise it will always focus the first focusable item.
   *
   * @since 5.0.0
   */
  focusCheckedItem = false;
  /**
   * Keys that will open the dropdown when the trigger is focused
   *
   * @internal
   */
  keyboardActivationKeys = [
    "Home",
    "End",
    "ArrowDown",
    "ArrowUp",
    "Enter",
    " "
  ];
  /**
   * Keys that will open the dropdown when the trigger is focused
   *
   * @internal
   */
  keyboardItemTriggerKeys = ["Enter", " "];
  /**
   * Move dropdown along main axis of alignment
   *
   * @internal
   */
  offset;
  /**
   * @internal
   */
  overwriteDropdownStyle;
  /**
   * @internal
   * If initialization of this dropdown is expected to be deferred submenu discovery will have to be re-run globally by the controller.
   * This property indicates the need for that to the controller.
   */
  discoverAllSubmenus = false;
  /** @internal */
  ignoreRelatedSubmenu = false;
  /** @internal */
  suppressOverflowBehavior = false;
  /** @internal */
  focusHost;
  /** @internal */
  focusTrapOptions;
  /**
   * @internal
   * Called instead of the default focus-on-open logic when the dropdown is
   * opened via keyboard. When not set, default behavior is used.
   */
  callbackFocusElement;
  /**
   * Fire event before visibility of dropdown has changed, preventing event will cancel showing dropdown
   */
  showChange;
  /**
   * Fire event after visibility of dropdown has changed
   */
  showChanged;
  /**
   * Will be fired only after dropdown changed visibility to "true"
   *
   * @internal
   */
  experimentalRequestFocus;
  /**
   * @internal
   */
  experimentalFocusNextElement;
  autoUpdateCleanup;
  triggerElement;
  anchorElement;
  forwardQueryElement = null;
  dropdownElementId = `dropdown-${sequenceId++}`;
  assignedSubmenu = [];
  keyboardNavigationCleanup;
  focusUtilities;
  dialogRef = makeRef();
  connectedCallback() {
    dropdownController.connected(this);
    if (this.trigger != void 0) {
      this.registerListener(this.trigger);
    }
  }
  cacheSubmenuId(event) {
    event.stopImmediatePropagation();
    event.preventDefault();
    const { detail } = event;
    if (this.assignedSubmenu.indexOf(detail) === -1) {
      this.assignedSubmenu.push(detail);
    }
  }
  disconnectedCallback() {
    dropdownController.dismiss(this);
    dropdownController.disconnected(this);
    if (this.autoUpdateCleanup) {
      this.autoUpdateCleanup();
      this.autoUpdateCleanup = void 0;
    }
  }
  getAssignedSubmenuIds() {
    return this.assignedSubmenu;
  }
  isPresent() {
    return this.show;
  }
  present() {
    this.show = true;
  }
  dismiss() {
    this.show = false;
  }
  getId() {
    return this.dropdownElementId;
  }
  willDismiss() {
    const { defaultPrevented } = this.showChange.emit(false);
    return !defaultPrevented;
  }
  willPresent() {
    const { defaultPrevented } = this.showChange.emit(true);
    return !defaultPrevented;
  }
  get dropdownItems() {
    return Array.from(this.hostElement.querySelectorAll("ix-dropdown-item"));
  }
  get slotElement() {
    return this.hostElement.shadowRoot.querySelector("slot");
  }
  disposeClickListener;
  disposeKeyListener;
  toggleController() {
    if (!this.isPresent()) {
      dropdownController.present(this);
    } else {
      dropdownController.dismiss(this);
    }
    dropdownController.dismissOthers(this.getId());
  }
  onTriggerClick = (event) => this.handleTriggerClick(event);
  handleTriggerClick(event) {
    if (!event.defaultPrevented) {
      this.toggleController();
    }
  }
  onTriggerKeydown = (event) => this.handleTriggerKeydown(event);
  handleTriggerKeydown(event) {
    const focusFirst = (element) => requestAnimationFrameNoNgZone(async () => {
      let shouldPreventDefault = false;
      if (this.callbackFocusElement) {
        shouldPreventDefault = await this.callbackFocusElement(event) ?? false;
      }
      if (shouldPreventDefault) {
        return;
      }
      focusFirstDescendant(element, void 0, {
        focusCheckedItem: this.focusCheckedItem
      });
    });
    const focusLast = (element) => requestAnimationFrameNoNgZone(async () => {
      let shouldPreventDefault = false;
      if (this.callbackFocusElement) {
        shouldPreventDefault = await this.callbackFocusElement(event) ?? false;
      }
      if (shouldPreventDefault) {
        return;
      }
      focusLastDescendant(element);
    });
    const shouldCloseOnTab = this.disableFocusTrap === true && event.key === "Tab";
    if ((event.key === "Escape" || shouldCloseOnTab) && this.show) {
      dropdownController.dismiss(this);
      return;
    }
    if (this.show) {
      return;
    }
    const navigationKeys = this.keyboardActivationKeys ?? [
      "Home",
      "End",
      "ArrowUp",
      "ArrowDown",
      " ",
      "Enter"
    ];
    if (!navigationKeys.includes(event.key)) {
      return;
    }
    if (!this.isAnchorSubmenu()) {
      if (!event.defaultPrevented) {
        this.toggleController();
      }
      if (this.disableFocusHandling) {
        event.stopImmediatePropagation();
        event.preventDefault();
      } else {
        if (event.altKey) {
          return;
        }
        if (event.key === "ArrowUp" || event.key === "End") {
          focusLast(this.hostElement);
        } else {
          focusFirst(this.hostElement);
        }
      }
    } else if (!this.disableFocusHandling) {
      if (this.callbackFocusElement) {
        this.callbackFocusElement(event);
      } else if (event.key === "ArrowUp" || event.key === "End") {
        focusLast(this.hostElement);
      } else {
        focusFirst(this.hostElement);
      }
    }
    this.experimentalRequestFocus.emit({
      keyEvent: event
    });
    event.preventDefault();
  }
  addEventListenersFor() {
    if (!this.triggerElement) {
      return;
    }
    if (!this.disposeClickListener) {
      this.disposeClickListener = addDisposableEventListener(this.triggerElement, "click", this.onTriggerClick);
    }
    if (!this.disposeKeyListener) {
      this.disposeKeyListener = addDisposableEventListener(this.triggerElement, "keydown", this.onTriggerKeydown);
    }
    this.triggerElement?.setAttribute("data-ix-dropdown-trigger", this.dropdownElementId);
  }
  /** @internal */
  async discoverSubmenu() {
    this.triggerElement?.dispatchEvent(new CustomEvent("ix-assign-sub-menu", {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: this.dropdownElementId
    }));
  }
  registerKeyListener() {
    if (!this.triggerElement) {
      return;
    }
  }
  async registerListener(element) {
    this.triggerElement = await this.resolveElement(element);
    if (this.triggerElement) {
      this.addEventListenersFor();
      this.discoverSubmenu();
    }
  }
  async resolveElement(element) {
    const el = await findElement(element);
    return this.checkForSubmenuAnchor(el);
  }
  async checkForSubmenuAnchor(element) {
    if (!element) {
      return void 0;
    }
    if (hasDropdownItemWrapperImplemented(element)) {
      const dropdownItem = await element.getDropdownItemElement();
      dropdownItem.isSubMenu = true;
      this.hostElement.style.zIndex = `var(--theme-z-index-dropdown)`;
    }
    if (element.tagName === "IX-DROPDOWN-ITEM") {
      element.isSubMenu = true;
      this.hostElement.style.zIndex = `var(--theme-z-index-dropdown)`;
    }
    return element;
  }
  async resolveAnchorElement() {
    if (this.anchor) {
      this.anchorElement = await this.resolveElement(this.anchor);
    } else if (this.trigger) {
      this.anchorElement = await this.resolveElement(this.trigger);
    }
  }
  async changedShow(newShow) {
    if (!newShow) {
      if (this.triggerElement && this.triggerElement.ariaHasPopup === "menu" && this.triggerElement.tagName === "IX-DROPDOWN-ITEM") {
        this.triggerElement.ariaExpanded = "false";
      }
      this.cleanupOnHide();
      if (this.enableTopLayer) {
        await this.hideDialog();
      }
      return;
    }
    await this.resolveAnchorElement();
    this.registerKeyListener();
    if (!this.disableFocusHandling && !this.callbackFocusElement) {
      this.keyboardNavigationCleanup = configureKeyboardInteraction(() => this.forwardQueryElement ?? this.focusHost ?? this.hostElement, {
        getEventListenerTarget: () => this.triggerElement ?? this.anchorElement,
        onItemActivation: (event, activeElement) => {
          event.preventDefault();
          activeElement?.click();
        },
        itemTriggerKeys: this.keyboardItemTriggerKeys
      });
    }
    if (!this.disableFocusTrap) {
      addFocusTrap(this.focusHost ?? this.hostElement, this.focusTrapOptions).then((focusTrap) => {
        this.focusUtilities = focusTrap;
      });
    }
    if (this.triggerElement && this.triggerElement.ariaHasPopup === "menu" && this.triggerElement.tagName === "IX-DROPDOWN-ITEM") {
      this.triggerElement.ariaExpanded = "true";
    }
    if (this.enableTopLayer) {
      const popover = await this.dialogRef.waitForCurrent();
      if (!popover) {
        return;
      }
      popover.showPopover();
    }
    this.applyDropdownPosition();
  }
  async emitShowChanged(newShow) {
    requestAnimationFrameNoNgZone(() => this.showChanged.emit(newShow));
  }
  changedTrigger(newTriggerValue, oldTriggerValue) {
    if (newTriggerValue && newTriggerValue !== oldTriggerValue) {
      this.disposeClickListener?.();
      this.disposeClickListener = void 0;
      this.disposeKeyListener?.();
      this.disposeKeyListener = void 0;
    }
    this.registerListener(newTriggerValue);
  }
  applyFallbackPosition(element) {
    requestAnimationFrameNoNgZone(() => {
      const referenceElement = this.hostElement.parentElement || this.hostElement;
      const refRect = referenceElement.getBoundingClientRect();
      const transform = `translate(${Math.round(refRect.left)}px, ${Math.round(refRect.top)}px)`;
      Object.assign(element.style, {
        top: "0",
        left: "0",
        transform
      });
    });
  }
  async hideDialog() {
    const popover = await this.dialogRef.waitForCurrent();
    if (popover?.matches(":popover-open")) {
      popover.hidePopover();
    }
  }
  cleanupOnHide() {
    this.destroyAutoUpdate();
    this.keyboardNavigationCleanup?.();
    this.focusUtilities?.destroy();
    this.resetForwardQueryElement();
    removeVisibleFocus();
    if (!this.disableFocusTrap && hasKeyboardMode()) {
      requestAnimationFrameNoNgZone(() => {
        this.triggerElement?.focus();
      });
    }
  }
  destroyAutoUpdate() {
    if (this.autoUpdateCleanup) {
      this.autoUpdateCleanup();
      this.autoUpdateCleanup = void 0;
    }
  }
  isAnchorSubmenu() {
    if (!hasDropdownItemWrapperImplemented(this.anchorElement)) {
      return !!this.anchorElement?.closest("ix-dropdown-item");
    }
    return true;
  }
  async applyDropdownPosition() {
    const targetElement = this.enableTopLayer ? await this.dialogRef.waitForCurrent() : this.hostElement;
    if (!this.show) {
      return;
    }
    if (!targetElement) {
      return;
    }
    if (!this.anchorElement) {
      this.applyFallbackPosition(targetElement);
      return;
    }
    const referenceElement = this.anchorElement;
    const isSubmenu = this.isAnchorSubmenu();
    let strategy = this.positioningStrategy;
    if (this.enableTopLayer) {
      strategy = "fixed";
    }
    let positionConfig = {
      strategy,
      middleware: []
    };
    if (!this.suppressAutomaticPlacement) {
      positionConfig.middleware?.push(flip({ fallbackStrategy: "initialPlacement" }));
    }
    positionConfig.placement = isSubmenu ? "right-start" : this.placement;
    positionConfig.middleware = [
      ...positionConfig.middleware?.filter(Boolean) || [],
      inline(),
      shift()
    ];
    if (this.offset) {
      positionConfig.middleware.push(offset(this.offset));
    }
    this.destroyAutoUpdate();
    this.autoUpdateCleanup = autoUpdate(referenceElement, targetElement, async () => {
      const computeResponse = await computePosition(referenceElement, targetElement, positionConfig);
      Object.assign(targetElement.style, {
        top: "0",
        left: "0",
        transform: `translate(${Math.round(computeResponse.x)}px,${Math.round(computeResponse.y)}px)`
      });
      if (this.overwriteDropdownStyle) {
        const overwriteStyle = await this.overwriteDropdownStyle({
          dropdownRef: targetElement,
          triggerRef: this.triggerElement
        });
        Object.assign(targetElement.style, overwriteStyle);
      }
    }, {
      ancestorResize: true,
      ancestorScroll: true,
      elementResize: true
    });
  }
  async componentDidLoad() {
    if (!this.trigger) {
      return;
    }
    this.changedTrigger(this.trigger, void 0);
  }
  async componentDidRender() {
    await this.applyDropdownPosition();
    await this.resolveAnchorElement();
  }
  isTriggerElement(element) {
    const trigger = !!element.hasAttribute("data-ix-dropdown-trigger");
    return trigger;
  }
  onDropdownClick(event) {
    const target = dropdownController.pathIncludesTrigger(event.composedPath());
    if (target) {
      if (target !== this.triggerElement) {
        event.preventDefault();
      }
      if (this.isTriggerElement(target)) {
        if (this.closeBehavior === "outside") {
          event.preventDefault();
        }
        return;
      }
    }
    if (!event.defaultPrevented && (this.closeBehavior === "inside" || this.closeBehavior === "both")) {
      dropdownController.dismissAll([this.getId()], this.ignoreRelatedSubmenu);
      return;
    }
    dropdownController.dismissOthers(this.getId());
  }
  /**
   * Update position of dropdown
   */
  async updatePosition() {
    this.applyDropdownPosition();
  }
  openSubmenu(event) {
    const submenuIds = this.getAssignedSubmenuIds();
    if (submenuIds.length === 0) {
      return;
    }
    event.detail.activeElement.classList.add("ix-dropdown-submenu-trigger-active");
    dropdownController.present(dropdownController.getDropdownById(submenuIds[0]));
    this.forwardQueryElement = dropdownController.getDropdownById(submenuIds[0]).hostElement;
    requestAnimationFrameNoNgZone(() => {
      focusFirstDescendant(dropdownController.getDropdownById(submenuIds[0]).hostElement);
    });
  }
  closeSubmenu() {
    const parent = dropdownController.getParentDropdownId(this.getId());
    if (parent) {
      const parentDropdown = dropdownController.getDropdownById(parent);
      const activeTriggers = queryElements(parentDropdown?.hostElement, ".ix-dropdown-submenu-trigger-active");
      dropdownController.dismissChildren(parent);
      if (parentDropdown && activeTriggers.length > 0) {
        const activeTrigger = activeTriggers[0];
        activeTrigger.classList.remove("ix-dropdown-submenu-trigger-active");
        parentDropdown.hostElement.resetForwardQueryElement();
        requestAnimationFrameNoNgZone(() => {
          focusElementInContext(activeTrigger, parentDropdown.hostElement);
        });
      }
    }
  }
  /**@internal */
  async resetForwardQueryElement() {
    this.forwardQueryElement = null;
  }
  render() {
    const ariaAttributes = {};
    if (this.triggerElement && this.triggerElement.tagName === "IX-DROPDOWN-ITEM") {
      ariaAttributes["aria-labelledby"] = this.triggerElement.id;
      ariaAttributes["aria-owns"] = this.triggerElement.id;
      ariaAttributes["role"] = "menu";
    }
    return h(Host, { key: "315b9009b20926232799d52bd13cc7909be37cab", ...ariaAttributes, "aria-modal": "true", "data-ix-dropdown": this.dropdownElementId, "data-ix-focus-trap": true, class: {
      "dropdown-menu": true,
      show: this.show,
      // overflow handling not needed when using top-layer
      overflow: !this.suppressOverflowBehavior && !this.enableTopLayer
    }, style: this.enableTopLayer ? {} : {
      margin: "0",
      minWidth: "0px",
      position: this.positioningStrategy
    }, onClick: (event) => this.onDropdownClick(event) }, this.enableTopLayer ? h("dialog", { role: "presentation", ref: this.dialogRef, class: {
      dialog: true,
      overflow: !this.suppressOverflowBehavior
    }, popover: "manual", tabindex: -1, onClick: (event) => this.onDropdownClick(event) }, h("div", { class: "dropdown-container" }, this.header && h("div", { class: "dropdown-header" }, this.header), this.show && h("slot", null))) : h("div", { style: { display: "contents" }, role: "presentation" }, this.header && h("div", { class: "dropdown-header" }, this.header), this.show && h("slot", null)));
  }
  static get watchers() {
    return {
      "show": [{
        "changedShow": 0
      }, {
        "emitShowChanged": 0
      }],
      "trigger": [{
        "changedTrigger": 0
      }]
    };
  }
};
Dropdown.style = dropdownCss();
export {
  Dropdown as ix_dropdown
};
