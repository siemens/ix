import { M as Mixin, r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-CU4RCWGK.js";
import { f as findElement, i as inline, s as shift, o as offset, b as autoUpdate, d as flip, c as computePosition } from "./find-element-Bxrgt3H_-DtbAzWDK.js";
import { a as addDisposableEventListener } from "./disposable-event-listener-CKoABG1h-D5kNsG5G.js";
import { a as addFocusTrap, s as sortByTabOrder } from "./focus-trap-UgUryLm8-DN5Sb8-s.js";
import { q as queryElements, a as IX_FOCUS_VISIBLE, I as IX_FOCUS_VISIBLE_ACTIVE, c as focusElement, f as focusableQueryString, d as focusFirstDescendant, e as focusLastDescendant, b as focusElementInContext } from "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
import { D as DefaultMixins, r as removeVisibleFocus, h as hasKeyboardMode } from "./component-BP5Ot-Ed-DlnqSJRp.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { r as requestAnimationFrameNoNgZone } from "./requestAnimationFrame-BEuV0Xpe-CBtvTq-Q.js";
import { c as closestPassShadow } from "./shadow-dom-C7UpA3Tm-CtINZypD.js";
import { d as dropdownController, h as hasDropdownItemWrapperImplemented } from "./dropdown-controller-C8s2mHuA-BYHx5hRI.js";
import { a1 as iconSingleCheck, u as iconChevronRightSmall } from "./index-BeX6RWvV-CXzUIwMU.js";
import { a as a11yBoolean } from "./a11y-DD206pTM-BiwZPW5s.js";
import { C as ComponentIdMixin } from "./id.mixin-CUbYLenp-DR0VgaO1.js";
import { F as FocusVisibleMixin } from "./focus-visible.mixin-82Sy1EJj-BNSkEnIy.js";
import "./path-utils-DfQsu85Q-BnoIgQFc.js";
const VALID_FOCUS_ELEMENTS = [
  "ix-dropdown-item",
  "ix-select-item",
  "ix-menu-item",
  "ix-menu-category"
];
const ROVING_ITEM_ATTRIBUTE = "data-ix-roving-item";
const IX_ITEM_SELECTOR = VALID_FOCUS_ELEMENTS.join(", ");
const ROVING_SELECTORS = [
  ...VALID_FOCUS_ELEMENTS,
  `[${ROVING_ITEM_ATTRIBUTE}]`
];
const QUERY_ARROW_ELEMENTS = VALID_FOCUS_ELEMENTS.map((selector) => `${selector}:not([tabindex^="-"]):not([disabled]):not([hidden])`).join(", ");
const QUERY_CURRENT_VISIBLE_FOCUS = VALID_FOCUS_ELEMENTS.map((selector) => `${selector}.${IX_FOCUS_VISIBLE_ACTIVE}:not([tabindex^="-"]):not([disabled]):not([hidden])`).join(", ");
const QUERY_ROVING_ELEMENTS = ROVING_SELECTORS.map((selector) => `${selector}:not([disabled]):not([hidden])`).join(", ");
const QUERY_ROVING_ACTIVE = ROVING_SELECTORS.map((selector) => `${selector}[tabindex="0"]:not([disabled]):not([hidden])`).join(", ");
const rovingTabindexState = /* @__PURE__ */ new WeakMap();
const rememberRovingTabindex = (host, items) => {
  let state = rovingTabindexState.get(host);
  if (!state) {
    state = /* @__PURE__ */ new Map();
    rovingTabindexState.set(host, state);
  }
  items.forEach((item) => {
    if (!state.has(item)) {
      state.set(item, item.getAttribute("tabindex"));
    }
  });
};
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
const focusRovingItem = (host, item) => {
  const items = queryElements(host, QUERY_ROVING_ELEMENTS);
  rememberRovingTabindex(host, items);
  items.forEach((candidate) => {
    if (candidate !== item) {
      candidate.tabIndex = -1;
    }
  });
  item.tabIndex = 0;
  focusItem(item);
};
const createRovingTabindexInteraction = (getItemsHost) => ({
  useCapture: true,
  querySelector: QUERY_ROVING_ELEMENTS,
  activeQuerySelector: QUERY_ROVING_ACTIVE,
  getActiveElement: () => queryElements(getItemsHost(), QUERY_ROVING_ACTIVE)[0] ?? null,
  setItemActive: (item) => focusRovingItem(getItemsHost(), item)
});
const initRovingTabindex = (host, position = "first", options) => {
  const items = queryElements(host, QUERY_ROVING_ELEMENTS);
  if (items.length === 0) {
    return;
  }
  rememberRovingTabindex(host, items);
  items.forEach((item) => {
    item.tabIndex = -1;
  });
  let activeItem;
  if (options?.focusCheckedItem) {
    activeItem = items.find((item) => item.matches("[checked]"));
  }
  if (!activeItem) {
    activeItem = position === "last" ? items[items.length - 1] : items[0];
  }
  activeItem.tabIndex = 0;
  focusItem(activeItem);
};
const clearRovingTabindex = (host) => {
  const state = rovingTabindexState.get(host);
  if (!state) {
    return;
  }
  state.forEach((tabindex, item) => {
    if (tabindex === null) {
      item.removeAttribute("tabindex");
    } else {
      item.setAttribute("tabindex", tabindex);
    }
  });
  rovingTabindexState.delete(host);
};
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
    if (event.key === "Tab") {
      options.onTabKey?.(event);
      return;
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
          if (options.useCapture) {
            event.stopPropagation();
          }
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
      const isNativeRovingElement = !!activeElement && activeElement.hasAttribute(ROVING_ITEM_ATTRIBUTE) && !activeElement.matches(IX_ITEM_SELECTOR);
      if (!isNativeRovingElement) {
        if (options.useCapture) {
          event.stopPropagation();
        }
        options.onItemActivation?.(event, activeElement);
      }
    }
  };
  const listenerTarget = getEventListenerTarget();
  listenerTarget.addEventListener("keydown", callback, options.useCapture);
  return () => listenerTarget.removeEventListener("keydown", callback, options.useCapture);
};
const dropdownCss = () => `@charset "UTF-8";:host{--ix-dropdown--background:var(--si-sys-color-background-3);--ix-dropdown--box-shadow:var(--si-sys-color-effects-shadow-4);--ix-dropdown--color:var(--si-sys-color-text-primary);--ix-dropdown-header--color:var(--si-sys-color-text-secondary)}:host{--ix-dropdown--border-radius:var(--si-sys-sizing-border-radius-sm);--ix-dropdown--z-index:var(--theme-z-index-dropdown);--ix-dropdown--padding:var(--si-sys-sizing-spacing-y-20) 0;--ix-dropdown-header--height:var(--si-sys-sizing-size-90);--ix-dropdown-header--padding:0 var(--si-sys-sizing-spacing-x-60);--ix-dropdown--offset:var(--si-sys-sizing-size-100);--ix-dropdown-dialog--padding:var(--si-sys-sizing-spacing-y-20) 0;--ix-dropdown-overflow--max-height:50vh}:host{background-color:var(--ix-dropdown--background);border-radius:var(--ix-dropdown--border-radius);min-width:0px;z-index:var(--ix-dropdown--z-index);box-shadow:var(--ix-dropdown--box-shadow);padding:var(--ix-dropdown--padding)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .dropdown-header{display:flex;align-items:center;height:var(--ix-dropdown-header--height);color:var(--ix-dropdown-header--color);padding:var(--ix-dropdown-header--padding)}:host(.overflow){max-height:calc(var(--ix-dropdown-overflow--max-height) - var(--ix-dropdown--offset));overflow-y:auto}:host(:not(.show)){display:none !important}.dialog{margin:0;border:none;outline:none;padding:var(--ix-dropdown-dialog--padding);min-width:0;max-width:100vw;width:-moz-max-content;width:max-content;height:-moz-fit-content;height:fit-content;background-color:var(--ix-dropdown--background);border-radius:var(--ix-dropdown--border-radius);box-shadow:var(--ix-dropdown--box-shadow);overflow-x:visible;overflow-y:visible;inset:unset;color-scheme:inherit;color:var(--ix-dropdown--color);box-sizing:border-box}.dialog *,.dialog *::after,.dialog *::before{box-sizing:border-box}.dialog .dropdown-container{display:block;position:relative}.dialog .dropdown-header{display:flex;align-items:center;height:var(--ix-dropdown-header--height);color:var(--ix-dropdown-header--color);padding:var(--ix-dropdown-header--padding)}.dialog.overflow{max-height:calc(var(--ix-dropdown-overflow--max-height) - var(--ix-dropdown--offset));overflow-y:auto}`;
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
   * By default the dropdown gets closed if the trigger is not visible anymore (e.g. due to scrolling). Setting this property prevents that behavior.
   *
   * @since 5.0.0
   */
  suppressTriggerVisibilityCheck = false;
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
   * @default false in v5.x, will default to true in v6.0.0
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
   * Controls how keyboard navigation moves focus between dropdown items.
   *
   * - `active-descendant`: DOM focus stays on the trigger/anchor element while a
   *   visual focus indicator moves between the items. Consumers can expose the
   *   active item through `aria-activedescendant`.
   * - `roving-tabindex`: real DOM focus is moved to each item using a roving
   *   `tabindex` (`0` for the active item, `-1` for the others). No
   *   `aria-activedescendant` is required because the focused item is announced
   *   directly. Besides the built-in item components, arbitrary focusable
   *   elements (e.g. a native `<button>`) can opt into this navigation by adding
   *   the `data-ix-roving-item` attribute; such native elements keep their own
   *   activation (<kbd>Enter</kbd> / <kbd>Space</kbd> fire a real click).
   *
   * @since 5.2.0
   */
  navigationMode = "active-descendant";
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
  /** @internal */
  hostRole;
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
  fallbackPlacement;
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
  dialogRef = makeRef();
  intersectObserverTrigger;
  triggerElement;
  anchorElement;
  forwardQueryElement = null;
  dropdownElementId = `dropdown-${sequenceId++}`;
  assignedSubmenu = [];
  keyboardNavigationCleanup;
  focusUtilities;
  focusTrapSetupId = 0;
  rovingTabindexHosts = /* @__PURE__ */ new Set();
  suppressTriggerFocusOnHide = false;
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
    this.assignedSubmenu = this.assignedSubmenu.filter((id) => dropdownController.getDropdownById(id) !== void 0);
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
  getTriggerElement() {
    return this.triggerElement ?? this.anchorElement;
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
  get isRovingTabindex() {
    return this.navigationMode === "roving-tabindex";
  }
  get itemsHost() {
    return this.forwardQueryElement ?? this.focusHost ?? this.hostElement;
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
      if (!this.show) {
        return;
      }
      if (this.isRovingTabindex) {
        this.initializeRovingTabindex(element, "first", {
          focusCheckedItem: this.focusCheckedItem
        });
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
      if (!this.show) {
        return;
      }
      if (this.isRovingTabindex) {
        this.initializeRovingTabindex(element, "last");
        return;
      }
      focusLastDescendant(element);
    });
    const shouldCloseOnTab = event.key === "Tab" && (this.disableFocusTrap === true || this.isRovingTabindex || dropdownController.hasPopoverAncestor(this));
    if (event.key === "Escape" && this.show) {
      if (!dropdownController.shouldHandleEscape(this)) {
        return;
      }
      event.stopPropagation();
      dropdownController.dismissOnEscape(this);
      return;
    }
    if (shouldCloseOnTab && this.show) {
      if (this.isRovingTabindex || dropdownController.hasPopoverAncestor(this)) {
        this.closeAndReleaseFocus(event);
      } else {
        dropdownController.dismiss(this);
      }
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
    if (this.show) {
      const originatesFromTrigger = event.target === this.triggerElement || event.target === this.anchorElement;
      if (originatesFromTrigger && this.isRovingTabindex && !this.disableFocusHandling && !event.altKey && navigationKeys.includes(event.key)) {
        if (event.key === "ArrowUp" || event.key === "End") {
          focusLast(this.itemsHost);
        } else {
          focusFirst(this.itemsHost);
        }
        event.preventDefault();
      }
      return;
    }
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
    if (!this.triggerElement) {
      return;
    }
    this.addEventListenersFor();
    this.discoverSubmenu();
  }
  addObserverForTriggerVisibility() {
    if (this.intersectObserverTrigger) {
      this.intersectObserverTrigger.disconnect();
    }
    if (this.suppressTriggerVisibilityCheck) {
      return;
    }
    if (!this.triggerElement) {
      return;
    }
    this.intersectObserverTrigger = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          dropdownController.dismiss(this);
          return;
        }
        const isTopHidden = entry.intersectionRect.top > entry.boundingClientRect.top;
        const isBottomHidden = entry.intersectionRect.bottom < entry.boundingClientRect.bottom;
        const isLeftHidden = entry.intersectionRect.left > entry.boundingClientRect.left;
        const isRightHidden = entry.intersectionRect.right < entry.boundingClientRect.right;
        this.fallbackPlacement = void 0;
        if (isTopHidden) {
          this.fallbackPlacement = this.createFallbackPlacement("bottom");
        }
        if (isBottomHidden) {
          this.fallbackPlacement = this.createFallbackPlacement("top");
        }
        if (isLeftHidden) {
          this.fallbackPlacement = this.createFallbackPlacement("right");
        }
        if (isRightHidden) {
          this.fallbackPlacement = this.createFallbackPlacement("left");
        }
      });
    }, {
      threshold: [0, 0.5, 1]
    });
    if (this.anchorElement) {
      this.intersectObserverTrigger.observe(this.anchorElement);
    }
  }
  createFallbackPlacement(side) {
    const alignment = this.placement.endsWith("-end") ? "end" : "start";
    return `${side}-${alignment}`;
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
      dropdownController.didDismiss(this);
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
    dropdownController.didPresent(this);
    this.registerKeyListener();
    this.configureKeyboardNavigation();
    this.configureFocusTrap();
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
    this.addObserverForTriggerVisibility();
    this.applyDropdownPosition();
  }
  changedNavigationMode(newMode, oldMode) {
    if (!this.show || newMode === oldMode) {
      return;
    }
    this.keyboardNavigationCleanup?.();
    this.keyboardNavigationCleanup = void 0;
    this.focusUtilities?.destroy();
    this.focusUtilities = void 0;
    this.focusTrapSetupId++;
    dropdownController.dismissChildren(this.getId());
    this.resetForwardQueryElement();
    if (oldMode === "roving-tabindex") {
      this.clearRovingTabindexState();
    }
    removeVisibleFocus();
    this.configureKeyboardNavigation();
    this.configureFocusTrap();
    requestAnimationFrameNoNgZone(() => {
      if (!this.show || this.navigationMode !== newMode) {
        return;
      }
      if (this.disableFocusHandling || this.callbackFocusElement) {
        return;
      }
      if (newMode === "roving-tabindex") {
        this.initializeRovingTabindex(this.itemsHost, "first", {
          focusCheckedItem: this.focusCheckedItem
        });
        return;
      }
      (this.triggerElement ?? this.anchorElement)?.focus();
    });
  }
  configureKeyboardNavigation() {
    this.keyboardNavigationCleanup?.();
    this.keyboardNavigationCleanup = void 0;
    if (!this.disableFocusHandling && !this.callbackFocusElement) {
      const getItemsHost = () => this.itemsHost;
      if (this.isRovingTabindex) {
        this.rovingTabindexHosts.add(this.itemsHost);
      }
      this.keyboardNavigationCleanup = configureKeyboardInteraction(getItemsHost, {
        // In roving-tabindex mode DOM focus moves onto the items, so keydown
        // events bubble to the items host. In active-descendant mode focus
        // stays on the trigger, so the trigger is the listener target.
        getEventListenerTarget: this.isRovingTabindex ? getItemsHost : () => this.triggerElement ?? this.anchorElement,
        onItemActivation: (event, activeElement) => {
          event.preventDefault();
          activeElement?.click();
        },
        itemTriggerKeys: this.keyboardItemTriggerKeys,
        ...this.isRovingTabindex ? {
          ...createRovingTabindexInteraction(getItemsHost),
          // In roving mode focus lives on the items. Tab must leave the
          // dropdown (native tab order already skips the inactive
          // `tabindex="-1"` items) and close it, instead of being trapped.
          onTabKey: (event) => this.closeAndReleaseFocus(event)
        } : {}
      });
    }
  }
  configureFocusTrap() {
    this.focusUtilities?.destroy();
    this.focusUtilities = void 0;
    const setupId = ++this.focusTrapSetupId;
    if (!this.disableFocusTrap && !this.isRovingTabindex) {
      addFocusTrap(this.focusHost ?? this.hostElement, this.focusTrapOptions).then((focusTrap) => {
        if (setupId !== this.focusTrapSetupId || !this.show || this.disableFocusTrap || this.isRovingTabindex) {
          focusTrap.destroy();
          return;
        }
        this.focusUtilities = focusTrap;
      });
    }
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
  closeAndReleaseFocus(event) {
    const hierarchy = this.getDropdownHierarchy();
    const rootDropdown = hierarchy[hierarchy.length - 1];
    const focusTarget = rootDropdown.getTabExitTarget(event);
    if (focusTarget) {
      event.preventDefault();
    }
    dropdownController.suppressTriggerFocusRestore(rootDropdown);
    dropdownController.dismiss(rootDropdown);
    if (focusTarget) {
      requestAnimationFrameNoNgZone(() => focusElement(focusTarget));
    }
  }
  suppressTriggerFocusRestore() {
    this.suppressTriggerFocusOnHide = true;
  }
  getDropdownHierarchy() {
    const hierarchy = [this];
    let parentId = dropdownController.getParentDropdownId(this.getId());
    while (parentId) {
      const parent = dropdownController.getDropdownById(parentId);
      if (!parent) {
        break;
      }
      hierarchy.push(parent);
      parentId = dropdownController.getParentDropdownId(parent.getId());
    }
    return hierarchy;
  }
  getTabExitTarget(event) {
    const trigger = this.triggerElement ?? this.anchorElement;
    const eventTarget = event.target;
    const leavesFocusedItem = eventTarget !== null && closestPassShadow(eventTarget, "ix-dropdown") !== null;
    if (event.shiftKey && leavesFocusedItem) {
      return trigger;
    }
    const parentFocusTarget = dropdownController.getParentFocusExitTarget(this, trigger, event.shiftKey);
    if (parentFocusTarget) {
      return parentFocusTarget;
    }
    const focusableElements = queryElements(document.body, focusableQueryString).filter((element) => closestPassShadow(element, "ix-dropdown") === null && element.getClientRects().length > 0);
    const tabOrder = sortByTabOrder(focusableElements);
    const triggerIndex = tabOrder.indexOf(trigger);
    if (triggerIndex === -1) {
      return void 0;
    }
    return tabOrder[triggerIndex + (event.shiftKey ? -1 : 1)];
  }
  initializeRovingTabindex(host, position, options) {
    this.rovingTabindexHosts.add(host);
    initRovingTabindex(host, position, options);
  }
  clearRovingTabindexState() {
    this.rovingTabindexHosts.forEach((host) => clearRovingTabindex(host));
    this.rovingTabindexHosts.clear();
  }
  cleanupOnHide() {
    this.intersectObserverTrigger?.disconnect();
    this.destroyAutoUpdate();
    this.keyboardNavigationCleanup?.();
    this.keyboardNavigationCleanup = void 0;
    this.focusUtilities?.destroy();
    this.focusUtilities = void 0;
    this.focusTrapSetupId++;
    this.clearRovingTabindexState();
    this.resetForwardQueryElement();
    removeVisibleFocus();
    if (this.suppressTriggerFocusOnHide) {
      this.suppressTriggerFocusOnHide = false;
    } else if (!this.disableFocusTrap && hasKeyboardMode()) {
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
    let placement = this.placement;
    if (this.suppressTriggerVisibilityCheck === false && this.fallbackPlacement) {
      placement = this.fallbackPlacement;
    }
    positionConfig.placement = isSubmenu ? "right-start" : placement;
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
      this.hostElement.dataset.ixDropdownPlacement = computeResponse.placement;
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
    if (dropdownController.pathIncludesChildOverlay(this, event.composedPath())) {
      const childDropdownTrigger = dropdownController.pathIncludesTrigger(event.composedPath());
      if (childDropdownTrigger && childDropdownTrigger !== this.triggerElement) {
        event.preventDefault();
      }
      return;
    }
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
    const dropdown = dropdownController.getDropdownById(submenuIds[0]);
    if (!dropdown) {
      return;
    }
    event.detail.activeElement.classList.add("ix-dropdown-submenu-trigger-active");
    const submenu = dropdown;
    dropdownController.present(submenu);
    this.forwardQueryElement = submenu.hostElement;
    requestAnimationFrameNoNgZone(() => {
      if (!submenu.isPresent()) {
        return;
      }
      if (submenu.isRovingTabindex && !submenu.disableFocusHandling && !submenu.callbackFocusElement) {
        submenu.initializeRovingTabindex(submenu.itemsHost, "first", {
          focusCheckedItem: submenu.focusCheckedItem
        });
        return;
      }
      focusFirstDescendant(submenu.itemsHost);
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
    } else if (this.hostRole) {
      ariaAttributes["role"] = this.hostRole;
    }
    return h(Host, { key: "25df438aa121b4292cbdc43a6b82f0ea9e9908a0", ...ariaAttributes, "aria-modal": "true", "data-ix-dropdown": this.dropdownElementId, "data-ix-focus-trap": true, class: {
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
      "navigationMode": [{
        "changedNavigationMode": 0
      }],
      "trigger": [{
        "changedTrigger": 0
      }]
    };
  }
};
Dropdown.style = dropdownCss();
const dropdownItemCss = () => `@charset "UTF-8";:host{--ix-dropdown-item-checkmark--color:var(--si-sys-color-text-accent);--ix-dropdown-item-icon--color:var(--si-sys-color-text-primary);--ix-dropdown-item--color--disabled:var(--si-sys-color-text-disabled);--ix-dropdown-item--border-color--focus:var(--si-sys-color-effects-focus);--ix-dropdown-item--outline-color--focus:var(--si-sys-color-effects-focus)}:host{--ix-dropdown-item--item-padding:var(--si-sys-sizing-spacing-x-40);--ix-dropdown-item--item-padding-right:var(--si-sys-sizing-spacing-x-80);--ix-dropdown-item--height:var(--si-sys-sizing-size-90);--ix-dropdown-item-no-checkmark--padding-inline-start:var(--si-sys-sizing-spacing-x-60);--ix-dropdown-item-checked--width:var(--si-sys-sizing-size-50);--ix-dropdown-item-checked--min-width:var(--si-sys-sizing-size-50);--ix-dropdown-item-checked--margin-right:var(--si-sys-sizing-spacing-x-40);--ix-dropdown-item-icon--icon-size:var(--si-sys-sizing-icon-md);--ix-dropdown-item-icon--margin-right:var(--si-sys-sizing-spacing-x-40);--ix-dropdown-item-icon-only--padding-inline:var(--si-sys-sizing-spacing-x-40);--ix-dropdown-item-submenu--padding-inline-end:var(--si-sys-sizing-spacing-x-40);--ix-dropdown-item--border-width--focus:var(--si-sys-sizing-border-width-default);--ix-dropdown-item--inner-height:calc(     100% - 2 * var(--ix-dropdown-item--border-width--focus)   );--ix-dropdown-item--outline-width--focus:var(--si-sys-sizing-border-width-default);--ix-dropdown-item-outline-visible--outline-offset:calc(     0px - var(--ix-dropdown-item--outline-width--focus)   )}:host{display:flex;flex-direction:row;position:relative;height:var(--ix-dropdown-item--height);width:auto;overflow:hidden;cursor:pointer}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .dropdown-item{all:unset;display:flex;flex-direction:row;align-items:center;position:relative;height:var(--ix-dropdown-item--inner-height);border:var(--ix-dropdown-item--border-width--focus) solid transparent;white-space:nowrap;width:calc(100% - var(--ix-dropdown-item--item-padding) - var(--ix-dropdown-item--item-padding-right));padding:0 var(--ix-dropdown-item--item-padding);padding-right:var(--ix-dropdown-item--item-padding-right)}:host .dropdown-item.no-checked-field{width:calc(100% - var(--ix-dropdown-item-no-checkmark--padding-inline-start) - var(--ix-dropdown-item--item-padding-right));padding:0 var(--ix-dropdown-item-no-checkmark--padding-inline-start);padding-right:var(--ix-dropdown-item--item-padding-right)}:host .dropdown-item-checked{display:flex;align-items:center;justify-content:center;position:relative;height:100%;width:var(--ix-dropdown-item-checked--width);min-width:var(--ix-dropdown-item-checked--min-width);margin-right:var(--ix-dropdown-item-checked--margin-right);color:var(--ix-dropdown-item-checkmark--color)}:host .dropdown-item-icon{block-size:var(--ix-dropdown-item-icon--icon-size);inline-size:var(--ix-dropdown-item-icon--icon-size);margin-right:var(--ix-dropdown-item-icon--margin-right);min-block-size:var(--ix-dropdown-item-icon--icon-size);min-inline-size:var(--ix-dropdown-item-icon--icon-size);color:var(--ix-dropdown-item-icon--color)}:host .dropdown-item-text{display:block;position:relative;overflow:hidden;text-overflow:ellipsis;white-space:pre}:host .dropdown-item-end{margin-left:auto}:host(.icon-only) .dropdown-item-icon{margin-right:0}:host(.icon-only) .dropdown-item-checked{display:none}:host(.icon-only) .dropdown-item{width:calc(100% - var(--ix-dropdown-item-icon-only--padding-inline) - var(--ix-dropdown-item-icon-only--padding-inline));padding:0 var(--ix-dropdown-item-icon-only--padding-inline);padding-right:var(--ix-dropdown-item-icon-only--padding-inline)}:host(.submenu) .dropdown-item{width:calc(100% - var(--ix-dropdown-item--item-padding) - var(--ix-dropdown-item-submenu--padding-inline-end));padding:0 var(--ix-dropdown-item--item-padding);padding-right:var(--ix-dropdown-item-submenu--padding-inline-end)}:host(:not(.disabled):not(:disabled).hover),:host(:not(.disabled):not(:disabled):hover){background-color:var(--si-sys-color-background-hover)}:host(:not(.disabled):not(:disabled).active),:host(:not(.disabled):not(:disabled):active){background-color:var(--si-sys-color-background-active)}:host(.disabled){pointer-events:none;color:var(--ix-dropdown-item--color--disabled) !important}:host(.disabled) .dropdown-item-icon{color:var(--ix-dropdown-item--color--disabled) !important}:host(:focus-visible){outline:none}:host(:focus-visible) .dropdown-item{border-color:var(--ix-dropdown-item--border-color--focus)}:host(.ix-focused){outline:none}:host(.ix-focused) .dropdown-item{border-color:var(--ix-dropdown-item--border-color--focus)}:host(.outline-visible){outline:var(--ix-dropdown-item--outline-width--focus) solid var(--ix-dropdown-item--outline-color--focus);outline-offset:var(--ix-dropdown-item-outline-visible--outline-offset)}:host([hidden]){display:none !important}`;
const DropdownItem = class extends Mixin(...DefaultMixins, ComponentIdMixin, FocusVisibleMixin) {
  constructor(hostRef) {
    super();
    registerInstance(this, hostRef);
    this.itemClick = createEvent(this, "itemClick", 7);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Label of dropdown item
   */
  label;
  /**
   * Icon of dropdown item
   */
  icon;
  /**
   * ARIA label for the icon
   */
  ariaLabelIcon;
  /**
   * ARIA label for the item's button
   * Will be set as aria-label for the nested HTML button element
   *
   * @since 3.2.0
   */
  ariaLabelButton;
  /**
   * Display hover state
   */
  hover = false;
  /**
   * Disable item and remove event listeners
   */
  disabled = false;
  /**
   * Whether the item is checked or not. If true a checkmark will mark the item as checked.
   */
  checked = false;
  /**
   * Role of the host surface.
   * Use `option` when the item represents a listbox option (e.g. inside select); use `menuitem` in menus.
   *
   * @since 5.0.0
   */
  itemRole = "menuitem";
  /** @internal */
  isSubMenu = false;
  /** @internal */
  suppressChecked = false;
  /** @internal */
  hasVisualFocus = false;
  /** @internal */
  itemClick;
  /** @internal */
  async emitItemClick() {
    this.itemClick.emit(this.hostElement);
  }
  /** @internal */
  async getDropdownItemElement() {
    return this.hostElement;
  }
  isIconOnly() {
    return this.label === void 0 && this.hostElement.innerText === "" && this.icon !== void 0;
  }
  render() {
    const id = this.getHostElementId();
    let submenuAriaAttributes = {};
    if (this.isSubMenu) {
      submenuAriaAttributes = {
        "aria-haspopup": "menu",
        "aria-expanded": "false"
      };
    }
    return h(Host, { key: "de5fbce24e9e90135f3fac401b9ec485cea0811a", id, role: this.itemRole, disableAriaSelectHandling: this.itemRole !== "option", "aria-disabled": a11yBoolean(this.disabled), "aria-label": this.hostElement.ariaLabel ?? this.ariaLabelButton, class: {
      hover: this.hover,
      "icon-only": this.isIconOnly(),
      disabled: this.disabled,
      submenu: this.isSubMenu,
      [IX_FOCUS_VISIBLE]: !this.disabled,
      "outline-visible": this.hasVisualFocus
    }, onClick: () => {
      if (!this.disabled) {
        this.emitItemClick();
      }
    }, onKeyDown: (event) => {
      if (!this.disabled && (event.key === "Enter" || event.key === " ")) {
        this.emitItemClick();
      }
    }, ...submenuAriaAttributes }, h("div", { key: "17f618118bd9cc7a0c7b98336b2653e6b3138d65", class: {
      "dropdown-item": true,
      "no-checked-field": this.suppressChecked,
      disabled: this.disabled
    } }, !this.suppressChecked ? h("div", { class: "dropdown-item-checked" }, this.checked ? h("ix-icon", { "aria-hidden": "true", class: "checkmark", name: iconSingleCheck, size: "16" }) : null) : null, this.icon ? h("ix-icon", { class: "dropdown-item-icon", name: this.icon, "aria-label": this.ariaLabelIcon }) : null, h("div", { key: "2620265a7ea4018c6654849fe496d79d8611edf6", class: "dropdown-item-text" }, this.label, h("slot", { key: "a6613dc6fa2dea15bf2c78214262bbe77cf7e444" })), h("div", { key: "a5143c2690d72d8c9dd42d1ca2e28ea079026ba8", class: "dropdown-item-end" }, h("slot", { key: "d37276c667568b272e31a70e8b322c08a7403a8e", name: "end" }), this.isSubMenu ? h("ix-icon", { name: iconChevronRightSmall, class: "submenu-icon" }) : null)));
  }
  static get watchers() {
    return {
      "ixFocusVisible": [{
        "$internal_checkAriaSelected": 0
      }]
    };
  }
};
DropdownItem.style = dropdownItemCss();
export {
  Dropdown as ix_dropdown,
  DropdownItem as ix_dropdown_item
};
