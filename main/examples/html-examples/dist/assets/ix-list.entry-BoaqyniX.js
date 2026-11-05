import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./index-CgUi6DzV-fQJuTF8s.js";
import { c as createMutationObserver } from "./mutation-observer-CX81WQtk-DFcmhOTk.js";
import "./preload-helper-UZRgTS1n.js";
const listCss = () => `@charset "UTF-8";:host{--ix-list--item-gap--sm:var(--si-sys-sizing-spacing-y-20);--ix-list--item-gap--md:var(--si-sys-sizing-spacing-y-40);--ix-list--item-gap--lg:var(--si-sys-sizing-spacing-y-50);--ix-list-drag--box-shadow:var(--si-sys-color-effects-shadow-40);--ix-list-drag-placeholder--border-width:var(--si-sys-sizing-border-width-default);--ix-list-drag-placeholder--border-radius:var(--si-sys-sizing-border-radius-sm);--ix-list-drag-placeholder--height--divider:var(--si-sys-sizing-size-20);--ix-list-drag-placeholder--border-color--divider:var(--si-sys-color-border-2);--ix-list-drag-placeholder--border-color--separator:var(--si-sys-color-border-1)}:host{display:block;width:100%;max-height:inherit}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .list{position:relative;display:flex;width:100%;max-height:inherit;flex-direction:column;gap:var(--ix-list-item-gap, 0);overflow-y:auto}:host ::slotted(.ix-list-drag-placeholder){display:block;flex:0 0 auto;width:100%;border-radius:var(--ix-list-drag-placeholder--border-radius)}:host ::slotted(ix-list-item.pointer-dragging){position:fixed;z-index:1;top:var(--ix-list-drag-top);left:var(--ix-list-drag-left);width:var(--ix-list-drag-width);box-shadow:var(--ix-list-drag--box-shadow);cursor:grabbing;pointer-events:none;transform:translate(var(--ix-list-drag-x, 0), var(--ix-list-drag-y, 0))}:host(.divider) ::slotted(.ix-list-drag-placeholder){height:var(--ix-list-drag-placeholder--height--divider) !important;border-top:var(--ix-list-drag-placeholder--border-width) solid var(--ix-list-drag-placeholder--border-color--divider);border-radius:0}:host ::slotted(.ix-list-drag-placeholder.separator){position:absolute;z-index:1;top:var(--ix-list-drag-separator-top, 0);right:0;left:0;height:0 !important;margin:0;border-top:var(--ix-list-drag-placeholder--border-width) solid var(--ix-list-drag-placeholder--border-color--separator);border-radius:0}`;
const listItemGap = {
  none: "0",
  sm: "var(--ix-list--item-gap--sm)",
  md: "var(--ix-list--item-gap--md)",
  lg: "var(--ix-list--item-gap--lg)"
};
const actionFocusableSelector = [
  "button",
  "a[href]",
  "input",
  "select",
  "textarea",
  "[contenteditable]",
  "[tabindex]",
  "ix-button",
  "ix-checkbox",
  "ix-dropdown-button",
  "ix-icon-button",
  "ix-split-button",
  "ix-toggle"
].join(",");
const inheritedItemProperties = [
  { property: "variant", attribute: "variant" },
  { property: "active", attribute: "active" },
  { property: "disabled", attribute: "disabled" },
  { property: "checkbox", attribute: "checkbox" },
  { property: "actionOnHover", attribute: "action-on-hover" },
  {
    property: "actionSlotAlignment",
    attribute: "action-slot-alignment"
  },
  { property: "divider", attribute: "divider" }
];
const itemPropertyDefaults = {
  variant: "filled",
  active: false,
  disabled: false,
  checkbox: false,
  actionOnHover: false,
  actionSlotAlignment: "center",
  divider: false
};
const List = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.itemOrderChange = createEvent(this, "itemOrderChange", 7);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Display dividers between direct list items with the `ghost` variant.
   * @since 6.0.0
   */
  divider = false;
  /**
   * Space between direct list items.
   * @since 6.0.0
   */
  itemGap = "sm";
  /**
   * Default visual variant for list items that do not define their own variant.
   * @since 6.0.0
   */
  variant;
  /**
   * Enable activation for list items that do not define their own setting.
   * @since 6.0.0
   */
  active;
  /**
   * Default disabled state for list items that do not define their own state.
   * @since 6.0.0
   */
  disabled;
  /**
   * Display selection checkboxes on list items that do not define their own setting.
   * @since 6.0.0
   */
  checkbox;
  /**
   * Show action content on hover or focus for list items that do not define their own setting.
   * @since 6.0.0
   */
  actionOnHover;
  /**
   * Default action slot alignment for list items that do not define their own setting.
   * @since 6.0.0
   */
  actionSlotAlignment;
  /**
   * Enable drag-and-drop reordering of direct list items.
   * @since 6.0.0
   */
  // eslint-disable-next-line @stencil-community/reserved-member-names -- Public API intentionally follows the native draggable name.
  draggable = false;
  /**
   * Visual behavior used while dragging a list item.
   * @since 6.0.0
   */
  dragBehavior = "dynamic";
  /**
   * i18n fallback label for list items without a label.
   * @since 6.0.0
   */
  i18nListItem = "List item";
  /**
   * i18n announcement when a list item is lifted for reordering.
   * Use `{item}` for the item label.
   * @since 6.0.0
   */
  i18nReorderLifted = "{item} lifted. Use arrow keys to move, Enter or Space to drop, and Escape to cancel.";
  /**
   * i18n announcement when a list item changes position.
   * Use `{item}`, `{position}`, and `{total}` placeholders.
   * @since 6.0.0
   */
  i18nReorderPosition = "{item}, position {position} of {total}";
  /**
   * i18n announcement when a reordered list item is dropped.
   * Use `{item}`, `{position}`, and `{total}` placeholders.
   * @since 6.0.0
   */
  i18nReorderDropped = "{item} dropped at position {position} of {total}.";
  /**
   * i18n announcement when list item reordering is cancelled.
   * Use `{item}` for the item label.
   * @since 6.0.0
   */
  i18nReorderCancelled = "{item} reorder cancelled.";
  /**
   * Emitted after a list item has been reordered.
   * @since 6.0.0
   */
  itemOrderChange;
  activeItem;
  draggedItem;
  dragMode;
  dragOriginalIndex = -1;
  dragOriginalNextSibling = null;
  dragPlaceholder;
  dragPointerId;
  dragStartY = 0;
  dragViewportToLocal = {
    xx: 1,
    xy: 0,
    yx: 0,
    yy: 1
  };
  itemsSynchronized = false;
  inheritedItemValues = /* @__PURE__ */ new WeakMap();
  overriddenItemProperties = /* @__PURE__ */ new WeakMap();
  itemFocusStates = /* @__PURE__ */ new WeakMap();
  mutationObserver = createMutationObserver(() => {
    if (this.itemsSynchronized) {
      this.synchronizeItems();
    }
  });
  connectedCallback() {
    this.mutationObserver.observe(this.hostElement, {
      attributeFilter: [
        "action-on-hover",
        "action-slot-alignment",
        "active",
        "checkbox",
        "disabled",
        "divider",
        "hidden",
        "slot",
        "variant"
      ],
      attributes: true,
      childList: true,
      subtree: true
    });
  }
  componentDidLoad() {
    this.synchronizeItems();
    this.mutationObserver.takeRecords();
    this.itemsSynchronized = true;
  }
  disconnectedCallback() {
    this.mutationObserver.disconnect();
  }
  draggableChanged() {
    if (!this.draggable && this.draggedItem) {
      this.cancelReorder();
    }
    this.synchronizeItems();
  }
  dragBehaviorChanged() {
    if (this.draggedItem) {
      this.cancelReorder();
    }
  }
  itemDefaultsChanged() {
    this.synchronizeItems();
  }
  get items() {
    return Array.from(this.hostElement.children).filter((element) => element.tagName === "IX-LIST-ITEM");
  }
  get enabledItems() {
    return this.items.filter((item) => !item.disabled && !item.hidden);
  }
  getItemFromEvent(event) {
    return event.composedPath().find((element) => element instanceof HTMLElement && element.tagName === "IX-LIST-ITEM" && element.parentElement === this.hostElement);
  }
  getPrimaryAction(item) {
    return item.shadowRoot?.querySelector(".primary-action");
  }
  getDragGripper(item) {
    return item.shadowRoot?.querySelector(".drag-gripper");
  }
  getSelectionCheckbox(item) {
    return item.shadowRoot?.querySelector(".selection-checkbox")?.shadowRoot?.querySelector('input[type="checkbox"]');
  }
  announce(item, message) {
    const announcement = item.shadowRoot?.querySelector(".drag-announcement");
    if (announcement) {
      announcement.textContent = message;
    }
  }
  setItemReorderState(item, reordering) {
    item.dispatchEvent(new CustomEvent("ixListItemReorderStateChange", {
      detail: reordering
    }));
  }
  getPrimaryControlElements(item) {
    const dragGripper = this.getDragGripper(item);
    const selectionCheckbox = this.getSelectionCheckbox(item);
    return [
      dragGripper && !dragGripper.disabled ? dragGripper : void 0,
      selectionCheckbox && !selectionCheckbox.disabled ? selectionCheckbox : void 0
    ].filter((element) => Boolean(element));
  }
  getActionElements(item) {
    const slotElements = Array.from(item.querySelectorAll(':scope > [slot="action"]'));
    return slotElements.flatMap((element) => {
      if (element.matches(actionFocusableSelector)) {
        return [element];
      }
      return Array.from(element.querySelectorAll(actionFocusableSelector));
    }).filter((element) => {
      const disableableElement = element;
      return !disableableElement.disabled;
    });
  }
  setElementTabIndex(element, tabIndex) {
    element.tabIndex = tabIndex;
    const shadowFocusTargets = Array.from(element.shadowRoot?.querySelectorAll(actionFocusableSelector) ?? []);
    shadowFocusTargets.forEach((target, index) => {
      this.setElementTabIndex(target, index === 0 ? tabIndex : -1);
    });
  }
  setFocusGroupTabOrder(item, group, elements, isActive) {
    let focusState = this.itemFocusStates.get(item);
    if (!focusState) {
      focusState = {};
      this.itemFocusStates.set(item, focusState);
    }
    if (!focusState[group] || !elements.includes(focusState[group])) {
      focusState[group] = elements[0];
    }
    elements.forEach((element) => {
      this.setElementTabIndex(element, isActive && element === focusState[group] ? 0 : -1);
    });
  }
  applyItemDefaults(item) {
    let overriddenProperties = this.overriddenItemProperties.get(item);
    let inheritedValues = this.inheritedItemValues.get(item);
    if (!overriddenProperties) {
      overriddenProperties = new Set(inheritedItemProperties.filter(({ attribute }) => item.hasAttribute(attribute)).map(({ property }) => property));
      this.overriddenItemProperties.set(item, overriddenProperties);
    }
    if (!inheritedValues) {
      inheritedValues = {};
      this.inheritedItemValues.set(item, inheritedValues);
    }
    inheritedItemProperties.forEach(({ property }) => {
      if (overriddenProperties.has(property)) {
        return;
      }
      const inheritedValue = inheritedValues[property];
      if (inheritedValue !== void 0 && item[property] !== inheritedValue) {
        overriddenProperties.add(property);
        delete inheritedValues[property];
        return;
      }
      const listValue = this[property];
      if (listValue === void 0) {
        if (inheritedValue !== void 0) {
          const defaultValue = itemPropertyDefaults[property];
          if (item[property] !== defaultValue) {
            item[property] = defaultValue;
          }
          delete inheritedValues[property];
        }
        return;
      }
      if (item[property] !== listValue) {
        item[property] = listValue;
      }
      inheritedValues[property] = listValue;
    });
  }
  synchronizeItems() {
    this.items.forEach((item) => this.applyItemDefaults(item));
    const enabledItems = this.enabledItems;
    if (!this.activeItem || !enabledItems.includes(this.activeItem)) {
      this.activeItem = enabledItems[0];
    }
    this.items.forEach((item) => {
      const isActive = item === this.activeItem && !item.disabled && !item.hidden;
      item.toggleAttribute("data-list-draggable", this.draggable);
      item.tabIndex = isActive ? 0 : -1;
      const primaryAction = this.getPrimaryAction(item);
      if (primaryAction) {
        primaryAction.tabIndex = isActive ? 0 : -1;
      }
      const gripper = this.getDragGripper(item);
      if (gripper) {
        const isGripperEnabled = Boolean(this.draggable && !item.disabled && !item.hidden);
        gripper.disabled = !isGripperEnabled;
      }
      this.setFocusGroupTabOrder(item, "primaryControls", this.getPrimaryControlElements(item), isActive);
      this.setFocusGroupTabOrder(item, "actions", this.getActionElements(item), isActive);
    });
  }
  getItemLabel(item) {
    return item.label || this.i18nListItem;
  }
  formatI18n(template, placeholders) {
    return Object.entries(placeholders).reduce((message, [placeholder, value]) => message.split(`{${placeholder}}`).join(String(value)), template);
  }
  announcePosition(item) {
    const position = this.items.indexOf(item) + 1;
    this.announce(item, this.formatI18n(this.i18nReorderPosition, {
      item: this.getItemLabel(item),
      position,
      total: this.items.length
    }));
  }
  beginReorder(item, mode) {
    if (!this.draggable || item.disabled || item.hidden || this.draggedItem) {
      return false;
    }
    this.draggedItem = item;
    this.dragMode = mode;
    this.dragOriginalIndex = this.items.indexOf(item);
    this.dragOriginalNextSibling = item.nextSibling;
    this.setItemReorderState(item, true);
    this.announce(item, this.formatI18n(this.i18nReorderLifted, {
      item: this.getItemLabel(item)
    }));
    if (mode === "keyboard") {
      this.getDragGripper(item)?.focus({ preventScroll: true });
    }
    return true;
  }
  createDragPlaceholder(item, clientY) {
    const itemBounds = item.getBoundingClientRect();
    const itemWidth = item.offsetWidth;
    const placeholder = document.createElement("div");
    placeholder.className = "ix-list-drag-placeholder";
    placeholder.setAttribute("aria-hidden", "true");
    placeholder.classList.toggle("separator", this.dragBehavior === "separator");
    if (this.dragBehavior === "dynamic") {
      placeholder.style.height = `${itemBounds.height}px`;
    }
    this.hostElement.insertBefore(placeholder, item);
    this.dragPlaceholder = placeholder;
    if (this.dragBehavior === "dynamic") {
      item.style.setProperty("--ix-list-drag-left", "0px");
      item.style.setProperty("--ix-list-drag-top", "0px");
      item.style.setProperty("--ix-list-drag-width", `${itemWidth}px`);
      item.classList.add("pointer-dragging");
      const origin = item.getBoundingClientRect();
      item.style.setProperty("--ix-list-drag-left", "1px");
      const localX = item.getBoundingClientRect();
      item.style.setProperty("--ix-list-drag-left", "0px");
      item.style.setProperty("--ix-list-drag-top", "1px");
      const localY = item.getBoundingClientRect();
      const xAxisX = localX.left - origin.left;
      const xAxisY = localX.top - origin.top;
      const yAxisX = localY.left - origin.left;
      const yAxisY = localY.top - origin.top;
      const determinant = xAxisX * yAxisY - yAxisX * xAxisY;
      if (Math.abs(determinant) > Number.EPSILON) {
        this.dragViewportToLocal = {
          xx: yAxisY / determinant,
          xy: -yAxisX / determinant,
          yx: -xAxisY / determinant,
          yy: xAxisX / determinant
        };
      }
      const initialPosition = this.getLocalDragCoordinates(itemBounds.left - origin.left, itemBounds.top - origin.top);
      item.style.setProperty("--ix-list-drag-left", `${initialPosition.x}px`);
      item.style.setProperty("--ix-list-drag-top", `${initialPosition.y}px`);
    } else {
      this.movePlaceholder(clientY);
    }
  }
  getLocalDragCoordinates(viewportX, viewportY) {
    const { xx, xy, yx, yy } = this.dragViewportToLocal;
    return {
      x: xx * viewportX + xy * viewportY,
      y: yx * viewportX + yy * viewportY
    };
  }
  movePlaceholder(clientY) {
    const item = this.draggedItem;
    const placeholder = this.dragPlaceholder;
    if (!item || !placeholder) {
      return;
    }
    const candidates = this.items.filter((candidate) => candidate !== item && !candidate.hidden);
    const beforeItem = candidates.find((candidate) => {
      const bounds = candidate.getBoundingClientRect();
      return clientY < bounds.top + bounds.height / 2;
    });
    if (beforeItem) {
      this.hostElement.insertBefore(placeholder, beforeItem);
    } else {
      this.hostElement.appendChild(placeholder);
    }
    if (this.dragBehavior === "separator") {
      const list = this.hostElement.shadowRoot?.querySelector(".list");
      if (!list) {
        return;
      }
      const visibleItems = this.items.filter((candidate) => !candidate.hidden);
      const beforeIndex = beforeItem ? visibleItems.indexOf(beforeItem) : visibleItems.length;
      const previousItem = visibleItems[beforeIndex - 1];
      const listBounds = list.getBoundingClientRect();
      const beforeBounds = beforeItem?.getBoundingClientRect();
      const previousBounds = previousItem?.getBoundingClientRect();
      const boundary = beforeBounds ? previousBounds ? (previousBounds.bottom + beforeBounds.top) / 2 : beforeBounds.top : previousBounds?.bottom ?? listBounds.top;
      const top = boundary - listBounds.top + list.scrollTop;
      const containedTop = Math.min(Math.max(top, 0), Math.max(list.scrollHeight - 1, 0));
      placeholder.style.setProperty("--ix-list-drag-separator-top", `${containedTop}px`);
    }
  }
  moveKeyboardItem(item, offset) {
    const items = this.items;
    const currentIndex = items.indexOf(item);
    const newIndex = Math.min(Math.max(currentIndex + offset, 0), items.length - 1);
    const target = items[newIndex];
    if (!target || target === item) {
      return;
    }
    if (offset < 0) {
      this.hostElement.insertBefore(item, target);
    } else {
      this.hostElement.insertBefore(item, target.nextSibling);
    }
    this.activeItem = item;
    this.synchronizeItems();
    this.getDragGripper(item)?.focus({ preventScroll: true });
    item.scrollIntoView({ block: "nearest" });
    this.announcePosition(item);
  }
  cleanupReorder() {
    const item = this.draggedItem;
    if (item) {
      item.classList.remove("pointer-dragging");
      this.setItemReorderState(item, false);
      item.style.removeProperty("--ix-list-drag-left");
      item.style.removeProperty("--ix-list-drag-top");
      item.style.removeProperty("--ix-list-drag-width");
      item.style.removeProperty("--ix-list-drag-x");
      item.style.removeProperty("--ix-list-drag-y");
    }
    this.dragViewportToLocal = { xx: 1, xy: 0, yx: 0, yy: 1 };
    this.dragPlaceholder?.remove();
    this.draggedItem = void 0;
    this.dragMode = void 0;
    this.dragPlaceholder = void 0;
    this.dragPointerId = void 0;
  }
  finishReorder() {
    const item = this.draggedItem;
    if (!item) {
      return;
    }
    const shouldRestoreFocus = this.dragMode === "keyboard";
    if (this.dragPlaceholder) {
      this.hostElement.insertBefore(item, this.dragPlaceholder);
    }
    const oldIndex = this.dragOriginalIndex;
    const newIndex = this.items.indexOf(item);
    this.cleanupReorder();
    this.activeItem = item;
    this.synchronizeItems();
    if (shouldRestoreFocus) {
      this.getDragGripper(item)?.focus({ preventScroll: true });
    }
    if (oldIndex !== newIndex) {
      this.itemOrderChange.emit({ item, oldIndex, newIndex });
    }
    this.announce(item, this.formatI18n(this.i18nReorderDropped, {
      item: this.getItemLabel(item),
      position: newIndex + 1,
      total: this.items.length
    }));
  }
  cancelReorder(restoreFocus = true) {
    const item = this.draggedItem;
    if (!item) {
      return;
    }
    const shouldRestoreFocus = restoreFocus && this.dragMode === "keyboard";
    const nextSibling = this.dragOriginalNextSibling;
    if (nextSibling?.parentNode === this.hostElement) {
      this.hostElement.insertBefore(item, nextSibling);
    } else {
      this.hostElement.appendChild(item);
    }
    this.cleanupReorder();
    this.activeItem = item;
    this.synchronizeItems();
    if (shouldRestoreFocus) {
      this.getDragGripper(item)?.focus({ preventScroll: true });
    }
    this.announce(item, this.formatI18n(this.i18nReorderCancelled, {
      item: this.getItemLabel(item)
    }));
  }
  handlePointerDown(event) {
    const gripper = event.composedPath().find((element) => element instanceof HTMLButtonElement && element.classList.contains("drag-gripper"));
    const item = this.getItemFromEvent(event);
    if (!gripper || !item || event.button !== 0) {
      return;
    }
    if (!this.beginReorder(item, "pointer")) {
      return;
    }
    event.preventDefault();
    this.dragPointerId = event.pointerId;
    this.dragStartY = event.clientY;
    this.createDragPlaceholder(item, event.clientY);
    gripper.setPointerCapture(event.pointerId);
  }
  handlePointerMove(event) {
    const item = this.draggedItem;
    if (!item || this.dragMode !== "pointer" || event.pointerId !== this.dragPointerId) {
      return;
    }
    event.preventDefault();
    if (this.dragBehavior === "dynamic") {
      const dragOffset = this.getLocalDragCoordinates(0, event.clientY - this.dragStartY);
      item.style.setProperty("--ix-list-drag-x", `${dragOffset.x}px`);
      item.style.setProperty("--ix-list-drag-y", `${dragOffset.y}px`);
    }
    this.movePlaceholder(event.clientY);
  }
  handlePointerEnd(event) {
    if (this.dragMode !== "pointer" || event.pointerId !== this.dragPointerId) {
      return;
    }
    this.finishReorder();
  }
  handlePointerCancel(event) {
    if (this.dragMode !== "pointer" || event.pointerId !== this.dragPointerId) {
      return;
    }
    this.cancelReorder();
  }
  focusItem(item) {
    this.activeItem = item;
    this.synchronizeItems();
    this.getPrimaryAction(item)?.focus({ preventScroll: true });
    item.scrollIntoView({ block: "nearest" });
  }
  focusRelativeItem(item, offset) {
    const items = this.enabledItems;
    const currentIndex = items.indexOf(item);
    const nextIndex = Math.min(Math.max(currentIndex + offset, 0), items.length - 1);
    const nextItem = items[nextIndex];
    if (nextItem) {
      this.focusItem(nextItem);
    }
  }
  handleFocusIn(event) {
    const item = this.getItemFromEvent(event);
    if (!item || item.disabled || item.hidden) {
      return;
    }
    const eventPath = event.composedPath();
    const focusGroups = [
      ["primaryControls", this.getPrimaryControlElements(item)],
      ["actions", this.getActionElements(item)]
    ];
    focusGroups.forEach(([group, elements]) => {
      const focusedElement = elements.find((element) => eventPath.includes(element));
      if (focusedElement) {
        const focusState = this.itemFocusStates.get(item) ?? {};
        focusState[group] = focusedElement;
        this.itemFocusStates.set(item, focusState);
      }
    });
    if (item === this.activeItem) {
      return;
    }
    this.activeItem = item;
    this.synchronizeItems();
  }
  handleFocusOut() {
    if (!this.draggedItem) {
      return;
    }
    queueMicrotask(() => {
      if (this.draggedItem && !this.hostElement.matches(":focus-within")) {
        this.cancelReorder(false);
      }
    });
  }
  isActivationKey(event) {
    return event.key === "Enter" || event.key === " " || event.key === "Spacebar" || event.code === "Space";
  }
  handleKeyboardReorderKey(event, item, isDragGripper, isPrimaryAction) {
    if (this.draggedItem !== item || this.dragMode !== "keyboard" || !isDragGripper && !isPrimaryAction) {
      return false;
    }
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      this.moveKeyboardItem(item, event.key === "ArrowDown" ? 1 : -1);
      return true;
    }
    if (this.isActivationKey(event)) {
      event.preventDefault();
      this.finishReorder();
      return true;
    }
    if (event.key === "Escape") {
      event.preventDefault();
      this.cancelReorder();
      return true;
    }
    return false;
  }
  handleDragGripperKey(event, item) {
    if (this.isActivationKey(event)) {
      event.preventDefault();
      this.beginReorder(item, "keyboard");
      return true;
    }
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      this.focusRelativeItem(item, event.key === "ArrowDown" ? 1 : -1);
      return true;
    }
    return false;
  }
  handleItemNavigationKey(event, item) {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      this.focusRelativeItem(item, event.key === "ArrowDown" ? 1 : -1);
      return true;
    }
    if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      const target = event.key === "Home" ? this.enabledItems[0] : this.enabledItems.at(-1);
      if (target) {
        this.focusItem(target);
      }
      return true;
    }
    return false;
  }
  handleKeyDown(event) {
    const item = this.getItemFromEvent(event);
    if (!item || item.disabled) {
      return;
    }
    const eventPath = event.composedPath();
    const primaryAction = this.getPrimaryAction(item);
    const dragGripper = this.getDragGripper(item);
    const isDragGripper = !!dragGripper && (eventPath.includes(dragGripper) || item.shadowRoot?.activeElement === dragGripper);
    const isPrimaryAction = !!primaryAction && (eventPath.includes(primaryAction) || item.shadowRoot?.activeElement === primaryAction);
    if (this.handleKeyboardReorderKey(event, item, isDragGripper, isPrimaryAction)) {
      return;
    }
    if (isDragGripper && this.handleDragGripperKey(event, item)) {
      return;
    }
    this.handleItemNavigationKey(event, item);
  }
  render() {
    return h(Host, { key: "340a7430ae75a940b6df626b9554a48e0b1ac9c7", role: "list", onFocusin: (event) => this.handleFocusIn(event), onFocusout: () => this.handleFocusOut(), onKeydown: (event) => this.handleKeyDown(event), onPointerDown: (event) => this.handlePointerDown(event), onPointerMove: (event) => this.handlePointerMove(event), onPointerUp: (event) => this.handlePointerEnd(event), onPointerCancel: (event) => this.handlePointerCancel(event), onDragStart: (event) => event.preventDefault(), class: {
      divider: this.divider,
      draggable: this.draggable
    }, style: {
      "--ix-list-item-gap": listItemGap[this.itemGap]
    } }, h("div", { key: "6ace018cc996e5872f6fdd528c49afb432abbe49", class: "list" }, h("slot", { key: "52b144cda0c5a938ceb564801d38ff5442dca728", onSlotchange: () => this.synchronizeItems() })));
  }
  static get watchers() {
    return {
      "draggable": [{
        "draggableChanged": 0
      }],
      "dragBehavior": [{
        "dragBehaviorChanged": 0
      }],
      "variant": [{
        "itemDefaultsChanged": 0
      }],
      "active": [{
        "itemDefaultsChanged": 0
      }],
      "disabled": [{
        "itemDefaultsChanged": 0
      }],
      "checkbox": [{
        "itemDefaultsChanged": 0
      }],
      "actionOnHover": [{
        "itemDefaultsChanged": 0
      }],
      "actionSlotAlignment": [{
        "itemDefaultsChanged": 0
      }],
      "divider": [{
        "itemDefaultsChanged": 0
      }]
    };
  }
};
List.style = listCss();
export {
  List as ix_list
};
