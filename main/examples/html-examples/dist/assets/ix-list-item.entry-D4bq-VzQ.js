import { M as Mixin, r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./index-CgUi6DzV-fQJuTF8s.js";
import { O as iconDragGripper } from "./index-CYGHrGrm-D-7vpgvu.js";
import { a as a11yBoolean } from "./a11y-BjBGvZyE-DCMEdep1.js";
import { D as DefaultMixins } from "./component-CxWIPGez-55aCZ0ep.js";
import { I as InheritAriaAttributesMixin } from "./inherit-aria-attributes.mixin-BZzEjNbh-CRL_j5LG.js";
import { C as ComponentIdMixin } from "./id.mixin-CUbYLenp-DR0VgaO1.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import "./preload-helper-UZRgTS1n.js";
import "./condition-checks-B3dDrNFs-BiqvZF_l.js";
import "./focus-utilities-6ZxKp7Jn-DqvT-65C.js";
import "./shadow-dom-cGv1zHOb-DvI9lJZX.js";
const listItemCss = () => `@charset "UTF-8";:host{--ix-list-item--min-height:var(--si-sys-sizing-size-90);--ix-list-item--padding:var(--si-sys-sizing-spacing-y-20)     var(--si-sys-sizing-spacing-x-60);--ix-list-item--gap:var(--si-sys-sizing-spacing-x-40);--ix-list-item--border-width:var(--si-sys-sizing-border-width-default);--ix-list-item--border-radius:var(--si-sys-sizing-border-radius-sm);--ix-list-item--outline-width--focus:var(--si-sys-sizing-border-width-default);--ix-list-item-primary-action--min-height:var(--si-sys-sizing-size-80);--ix-list-item-drag-gripper--width:var(--si-sys-sizing-size-50);--ix-list-item-drag-gripper--height:var(--si-sys-sizing-size-80);--ix-list-item-drag-gripper--focus-ring-offset:var(--si-sys-sizing-focus-ring-offset);--ix-list-item-drag-gripper--icon-size:var(--si-sys-sizing-icon-sm);--ix-list-item--padding-left--draggable:var(--si-sys-sizing-spacing-x-20);--ix-list-item-selection-checkbox--size:var(--si-sys-sizing-size-60);--ix-list-item-selection-checkbox--margin-right:var(--si-sys-sizing-spacing-x-30);--ix-list-item-label--font:var(--si-sys-typography-body-paragraph);--ix-list-item-description--font:var(--si-sys-typography-body-sm);--ix-list-item--color:var(--si-sys-color-text-primary);--ix-list-item--color--disabled:var(--si-sys-color-text-disabled);--ix-list-item-description--color:var(--si-sys-color-text-secondary);--ix-list-item--background:var(--si-sys-color-background-accent-secondary);--ix-list-item--background--filled:var(--si-sys-color-background-1);--ix-list-item--background--selected:var(--si-sys-color-background-active);--ix-list-item--background--hover:var(--si-sys-color-background-hover);--ix-list-item--border-color--outline:var(--si-sys-color-border-3);--ix-list-item--border-color--divider:var(--si-sys-color-border-3);--ix-list-item--outline-color--focus:var(--si-sys-color-effects-focus)}:host{display:block;width:100%;min-width:0;color:var(--ix-list-item--color);outline:none}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .item-surface{display:flex;align-items:center;position:relative;width:100%;min-height:var(--ix-list-item--min-height);padding:var(--ix-list-item--padding);gap:var(--ix-list-item--gap);box-sizing:border-box;border:var(--ix-list-item--border-width) solid transparent;border-radius:var(--ix-list-item--border-radius);background-color:var(--ix-list-item--background)}:host .primary-action{display:flex;align-items:center;gap:var(--ix-list-item--gap);flex:1 1 auto;min-width:0;min-height:var(--ix-list-item-primary-action--min-height);padding:0;border:0;outline:0;color:inherit;background:transparent;text-align:start}:host .primary-action:focus-visible::after{position:absolute;inset:0;border:var(--ix-list-item--outline-width--focus) solid var(--ix-list-item--outline-color--focus);border-radius:var(--ix-list-item--border-radius);content:"";pointer-events:none}:host .drag-gripper{display:none;order:-2;position:relative;flex:0 0 var(--ix-list-item-drag-gripper--width);width:var(--ix-list-item-drag-gripper--width);height:var(--ix-list-item-drag-gripper--height);padding:0;border:0;outline:0;color:inherit;background:transparent;cursor:grab;touch-action:none}:host .drag-gripper:focus-visible::after{position:absolute;inset:calc(-1 * var(--ix-list-item-drag-gripper--focus-ring-offset));border:var(--ix-list-item--outline-width--focus) solid var(--ix-list-item--outline-color--focus);border-radius:var(--ix-list-item--border-radius);content:"";pointer-events:none}:host .drag-gripper ix-icon{width:var(--ix-list-item-drag-gripper--icon-size);height:var(--ix-list-item-drag-gripper--icon-size)}:host .drag-announcement{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip-path:inset(50%);border:0;white-space:nowrap}:host .standard-content{display:flex;align-items:center;min-width:0;gap:var(--ix-list-item--gap)}:host [hidden]{display:none}:host .selection-checkbox{order:-1;flex:0 0 var(--ix-list-item-selection-checkbox--size);margin-right:var(--ix-list-item-selection-checkbox--margin-right)}:host .item-icon{flex:0 0 auto}:host .text-content{display:flex;flex:1 1 auto;min-width:0;flex-direction:column}:host .label,:host .description{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .label{font:var(--ix-list-item-label--font)}:host .description{font:var(--ix-list-item-description--font);color:var(--ix-list-item-description--color)}:host .action{display:flex;align-items:center;align-self:stretch;flex:0 0 auto}:host(.active:not(.disabled)) .item-surface,:host(.active:not(.disabled)) .primary-action{cursor:pointer}:host([variant=outline]) .item-surface{border-color:var(--ix-list-item--border-color--outline)}:host([variant=filled]) .item-surface{background-color:var(--ix-list-item--background--filled)}:host(.selected) .item-surface{background-color:var(--ix-list-item--background--selected)}:host(.active:not(.disabled)) .item-surface:hover{background-color:var(--ix-list-item--background--hover)}:host(.active:not(.disabled)) .item-surface:active:not(:has(.drag-gripper:active,.selection-checkbox:active,.action:active)){background-color:var(--ix-list-item--background--selected)}:host([variant=filled].active:not(.disabled):not(.selected)) .item-surface:hover{background-color:var(--ix-list-item--background--hover)}:host([variant=filled].active:not(.disabled):not(.selected)) .item-surface:active:not(:has(.drag-gripper:active,.selection-checkbox:active,.action:active)){background-color:var(--ix-list-item--background--selected)}:host(.active.selected:not(.disabled)) .item-surface:hover,:host(.active.selected:not(.disabled)) .item-surface:active:not(:has(.drag-gripper:active,.selection-checkbox:active,.action:active)){background-color:var(--ix-list-item--background--hover)}:host([variant=ghost].divider) .item-surface{border-bottom-color:var(--ix-list-item--border-color--divider);border-bottom-left-radius:0;border-bottom-right-radius:0}:host([data-list-draggable]) .drag-gripper{display:flex;align-items:center;justify-content:center}:host([data-list-draggable]) .item-surface{padding-left:var(--ix-list-item--padding-left--draggable)}:host(.dragging) .item-surface{background-color:var(--ix-list-item--background--selected)}:host(.dragging) .drag-gripper{cursor:grabbing}:host(:has(.drag-gripper:focus-visible)) .primary-action:focus-visible::after{display:none}:host(.pointer-dragging) .primary-action:focus-visible::after,:host(.pointer-dragging) .drag-gripper:focus-visible::after{display:none}:host([action-slot-alignment=start]) .action{align-items:start}:host(.disabled){color:var(--ix-list-item--color--disabled);cursor:default}:host(.disabled) .item-surface{pointer-events:none}:host(.disabled) .description,:host(.disabled) .label{color:var(--ix-list-item--color--disabled)}@media (hover: hover) and (pointer: fine){:host([action-on-hover]) .action{visibility:hidden}:host([action-on-hover]) .item-surface:hover .action,:host([action-on-hover]) .item-surface:focus-within .action{visibility:visible}}`;
const interactiveElementSelector = [
  "a[href]",
  "button",
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
const ListItem = class extends Mixin(...DefaultMixins, ComponentIdMixin, InheritAriaAttributesMixin) {
  constructor(hostRef) {
    super();
    registerInstance(this, hostRef);
    this.itemClick = createEvent(this, "itemClick", 7);
    this.selectedChange = createEvent(this, "selectedChange", 7);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Visual variant of the item.
   * @since 6.0.0
   */
  variant = "filled";
  /**
   * Label displayed by the standard item layout.
   * @since 6.0.0
   */
  label;
  /**
   * Supporting text displayed below the label.
   * @since 6.0.0
   */
  description;
  /**
   * Icon displayed by the standard item layout.
   * @since 6.0.0
   */
  icon;
  /**
   * Accessible label for the item icon.
   * @since 6.0.0
   */
  ariaLabelIcon;
  /**
   * Accessible label for the drag gripper.
   * @since 6.0.0
   */
  ariaLabelDragGripper = "Reorder list item";
  /**
   * Accessible label for the selection checkbox.
   * @since 6.0.0
   */
  ariaLabelCheckbox = "Select list item";
  /**
   * Show the item as selected.
   * @since 6.0.0
   */
  selected = false;
  /**
   * Enable activation of the primary item surface.
   * @since 6.0.0
   */
  active = false;
  /**
   * Disable item activation and action controls.
   * @since 6.0.0
   */
  disabled = false;
  /**
   * Display selection with checkbox semantics.
   * @since 6.0.0
   */
  checkbox = false;
  /**
   * Display a divider below this item when its variant is `ghost`.
   * @since 6.0.0
   */
  divider = false;
  /**
   * Show action slot content only when the item is hovered or focused.
   * @since 6.0.0
   */
  actionOnHover = false;
  /**
   * Vertical alignment of the action slot content.
   * @since 6.0.0
   */
  actionSlotAlignment = "center";
  /**
   * Emitted when the primary item surface is activated.
   * @since 6.0.0
   */
  itemClick;
  /**
   * Requests a controlled selection update when a checkbox item is activated.
   * @since 6.0.0
   */
  selectedChange;
  reordering = false;
  primaryActionRef = makeRef();
  getDragGripper() {
    return this.hostElement.shadowRoot?.querySelector(".drag-gripper");
  }
  getSelectionCheckbox() {
    return this.hostElement.shadowRoot?.querySelector(".selection-checkbox")?.shadowRoot?.querySelector('input[type="checkbox"]');
  }
  getPrimaryControlElements() {
    const dragGripper = this.getDragGripper();
    const selectionCheckbox = this.getSelectionCheckbox();
    return [
      this.hostElement.hasAttribute("data-list-draggable") && dragGripper && !dragGripper.disabled ? dragGripper : void 0,
      selectionCheckbox && !selectionCheckbox.disabled ? selectionCheckbox : void 0
    ].filter((element) => Boolean(element));
  }
  getActionElements() {
    const slotElements = Array.from(this.hostElement.querySelectorAll(':scope > [slot="action"]'));
    return slotElements.flatMap((element) => {
      if (element.matches(interactiveElementSelector)) {
        return [element];
      }
      return Array.from(element.querySelectorAll(interactiveElementSelector));
    }).filter((element) => {
      const disableableElement = element;
      return !disableableElement.disabled;
    });
  }
  setElementTabIndex(element, tabIndex) {
    element.tabIndex = tabIndex;
    const shadowFocusTargets = Array.from(element.shadowRoot?.querySelectorAll(interactiveElementSelector) ?? []);
    shadowFocusTargets.forEach((target, index) => {
      this.setElementTabIndex(target, index === 0 ? tabIndex : -1);
    });
  }
  focusGroupElement(elements, index) {
    const target = elements[index];
    if (!target) {
      return;
    }
    elements.forEach((element) => {
      this.setElementTabIndex(element, element === target ? 0 : -1);
    });
    target.focus();
  }
  handleFocusGroupNavigationKey(event, elements, currentIndex) {
    if (currentIndex === -1 || event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
      return false;
    }
    event.preventDefault();
    const offset = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (currentIndex + offset + elements.length) % elements.length;
    this.focusGroupElement(elements, nextIndex);
    return true;
  }
  handleKeyDown(event) {
    if (this.disabled) {
      return;
    }
    const eventPath = event.composedPath();
    const primaryAction = this.primaryActionRef.current;
    const primaryControlElements = this.getPrimaryControlElements();
    const primaryControlIndex = primaryControlElements.findIndex((element) => eventPath.includes(element));
    const actionElements = this.getActionElements();
    const actionIndex = actionElements.findIndex((element) => eventPath.includes(element));
    if (primaryAction && eventPath.includes(primaryAction)) {
      if (event.key !== "ArrowRight") {
        return;
      }
      const targetGroup = primaryControlElements.length ? primaryControlElements : actionElements;
      if (!targetGroup.length) {
        return;
      }
      event.preventDefault();
      this.focusGroupElement(targetGroup, 0);
      return;
    }
    if (this.handleFocusGroupNavigationKey(event, primaryControlElements, primaryControlIndex)) {
      return;
    }
    this.handleFocusGroupNavigationKey(event, actionElements, actionIndex);
  }
  hasStandardContent() {
    return !!(this.icon || this.label || this.description);
  }
  getIgnoredAriaAttributes() {
    return ["role", "aria-checked", "aria-disabled", "aria-pressed"];
  }
  componentDidLoad() {
    super.componentDidLoad?.();
    if (!this.hostElement.hasAttribute("tabindex")) {
      this.hostElement.tabIndex = 0;
    }
    const primaryAction = this.primaryActionRef.current;
    if (primaryAction) {
      primaryAction.tabIndex = this.disabled ? -1 : this.hostElement.tabIndex;
    }
  }
  handleReorderStateChange(event) {
    this.reordering = event.detail;
  }
  activateItem(event) {
    if (!this.active || this.disabled || event.composedPath().some((element) => {
      return element instanceof HTMLElement && element !== this.hostElement && element !== this.primaryActionRef.current && element.matches(interactiveElementSelector);
    })) {
      return;
    }
    this.itemClick.emit(this.hostElement);
  }
  handleSelectedChange(event) {
    this.selectedChange.emit(event.detail);
  }
  renderStandardContent(labelId) {
    if (!this.hasStandardContent()) {
      return null;
    }
    return h("div", { class: "standard-content" }, this.icon ? h("ix-icon", { class: "item-icon", name: this.icon, "aria-label": this.ariaLabelIcon, "aria-hidden": a11yBoolean(!this.ariaLabelIcon) }) : null, h("span", { class: "text-content" }, this.label ? h("span", { id: labelId, class: "label" }, this.label) : null, this.description ? h("span", { class: "description" }, this.description) : null));
  }
  render() {
    const hostId = this.getHostElementId();
    const labelId = `${hostId}-label`;
    const hasInheritedLabel = !!this.inheritAriaAttributes["aria-label"] || !!this.inheritAriaAttributes["aria-labelledby"];
    return h(Host, { key: "39d21233f529dc0b2ae40ccd7ea13417a43602a5", id: hostId, role: "listitem", "aria-disabled": a11yBoolean(this.disabled), onClick: (event) => this.activateItem(event), onKeydown: (event) => this.handleKeyDown(event), class: {
      active: this.active,
      disabled: this.disabled,
      selected: this.selected,
      dragging: this.reordering,
      checkbox: this.checkbox,
      divider: this.divider
    } }, h("div", { key: "f871342ead36961b5d27dcea2e13dce25ca8ea0e", class: "item-surface" }, h("button", { key: "8379701f0f7be1c29632a65a5dcebfdf59d35f05", ...this.inheritAriaAttributes, ref: this.primaryActionRef, class: "primary-action", type: "button", tabindex: -1, disabled: this.disabled, "aria-pressed": this.checkbox ? void 0 : a11yBoolean(this.selected), "aria-labelledby": !hasInheritedLabel && this.label ? labelId : void 0 }, this.renderStandardContent(labelId), h("slot", { key: "c7a93e05fccdaa6ed89a0109f4b4957d3aff1ad7" })), h("button", { key: "77ccc5205423d9271fc40443c604101504173ca4", class: "drag-gripper", type: "button", tabindex: -1, disabled: this.disabled, "aria-pressed": a11yBoolean(this.reordering), "aria-label": this.ariaLabelDragGripper }, h("ix-icon", { key: "334ee9b7643acb930ecae0d1bd6b11bc03a54ee2", name: iconDragGripper, "aria-hidden": "true" })), this.checkbox ? h("ix-checkbox", { class: "selection-checkbox", checked: this.selected, disabled: this.disabled, "aria-label": this.ariaLabelCheckbox, onCheckedChange: (event) => this.handleSelectedChange(event) }) : null, h("div", { key: "4e09d0102d3fa4f68356df4d5668a8bf91e3ddef", class: "action", inert: this.disabled }, h("slot", { key: "770950d5a5d4ded6b89da1f6f5dbff4729b1c2a5", name: "action" }))), h("div", { key: "10830695c5b78745d7ac9fd5abae10b0ae864128", class: "drag-announcement", "aria-live": "polite", "aria-atomic": "true" }));
  }
  static get delegatesFocus() {
    return true;
  }
};
ListItem.style = listItemCss();
export {
  ListItem as ix_list_item
};
