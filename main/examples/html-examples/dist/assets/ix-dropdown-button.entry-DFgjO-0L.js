import { M as Mixin, r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-CU4RCWGK.js";
import { G as iconChevronUpSmall, t as iconChevronDownSmall } from "./index-BeX6RWvV-CXzUIwMU.js";
import { c as a11yHostAttributes, a as a11yBoolean, f as forceTabIndex } from "./a11y-DD206pTM-BiwZPW5s.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { D as DEFAULT_BUTTON_ICON_SIZE } from "./base-button.types-CAnyVyxc-CKNxtuf9.js";
import { D as DefaultMixins } from "./component-BP5Ot-Ed-DlnqSJRp.js";
import { A as AriaActiveDescendantMixin } from "./aria-activedescendant.mixin-CM-NUHTW-CwKLvkpN.js";
import { C as ComponentIdMixin } from "./id.mixin-CUbYLenp-DR0VgaO1.js";
import { c as closestPassShadow } from "./shadow-dom-C7UpA3Tm-CtINZypD.js";
import "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
const dropdownButtonCss = () => `@charset "UTF-8";:host{--ix-button--outline-color--focus:var(--si-sys-color-effects-focus);--ix-button-danger-primary--background:var(--si-sys-color-background-danger);--ix-button-danger-primary--background--active:var(--si-sys-color-background-danger-active);--ix-button-danger-primary--background--disabled:var(--si-sys-color-background-1);--ix-button-danger-primary--background--hover:var(--si-sys-color-background-danger-hover);--ix-button-danger-primary--border-color:rgba(0, 0, 0, 0);--ix-button-danger-primary--border-color--active:rgba(0, 0, 0, 0);--ix-button-danger-primary--border-color--disabled:rgba(0, 0, 0, 0);--ix-button-danger-primary--border-color--hover:rgba(0, 0, 0, 0);--ix-button-danger-primary--color:var(--si-sys-color-text-on-danger);--ix-button-danger-primary--color--active:var(--si-sys-color-text-on-danger);--ix-button-danger-primary--color--disabled:var(--si-sys-color-text-disabled);--ix-button-danger-primary--color--hover:var(--si-sys-color-text-on-danger);--ix-button-danger-secondary--background:rgba(0, 0, 0, 0);--ix-button-danger-secondary--background--active:var(--si-sys-color-background-danger-active);--ix-button-danger-secondary--background--disabled:rgba(0, 0, 0, 0);--ix-button-danger-secondary--background--hover:var(--si-sys-color-background-danger-hover);--ix-button-danger-secondary--border-color:var(--si-sys-color-text-danger);--ix-button-danger-secondary--border-color--active:var(--si-sys-color-border-danger);--ix-button-danger-secondary--border-color--disabled:var(--si-sys-color-border-3);--ix-button-danger-secondary--border-color--hover:var(--si-sys-color-border-danger);--ix-button-danger-secondary--color:var(--si-sys-color-text-danger);--ix-button-danger-secondary--color--active:var(--si-sys-color-text-on-danger);--ix-button-danger-secondary--color--disabled:var(--si-sys-color-text-disabled);--ix-button-danger-secondary--color--hover:var(--si-sys-color-text-on-danger);--ix-button-danger-tertiary--background:rgba(0, 0, 0, 0);--ix-button-danger-tertiary--background--active:var(--si-sys-color-background-danger-active);--ix-button-danger-tertiary--background--disabled:rgba(0, 0, 0, 0);--ix-button-danger-tertiary--background--hover:var(--si-sys-color-background-danger-hover);--ix-button-danger-tertiary--border-color:rgba(0, 0, 0, 0);--ix-button-danger-tertiary--border-color--active:rgba(0, 0, 0, 0);--ix-button-danger-tertiary--border-color--disabled:rgba(0, 0, 0, 0);--ix-button-danger-tertiary--border-color--hover:rgba(0, 0, 0, 0);--ix-button-danger-tertiary--color:var(--si-sys-color-text-danger);--ix-button-danger-tertiary--color--active:var(--si-sys-color-text-on-danger);--ix-button-danger-tertiary--color--disabled:var(--si-sys-color-text-disabled);--ix-button-danger-tertiary--color--hover:var(--si-sys-color-text-on-danger);--ix-button-primary--background:var(--si-sys-color-background-accent);--ix-button-primary--background--active:var(--si-sys-color-background-accent-active);--ix-button-primary--background--disabled:var(--si-sys-color-background-1);--ix-button-primary--background--hover:var(--si-sys-color-background-accent-hover);--ix-button-primary--background--pressed:var(--si-sys-color-background-accent-hover);--ix-button-primary--background--pressed-active:var(--si-sys-color-background-accent-active);--ix-button-primary--background--pressed-hover:var(--si-sys-color-background-accent-hover);--ix-button-primary--border-color:rgba(0, 0, 0, 0);--ix-button-primary--border-color--active:rgba(0, 0, 0, 0);--ix-button-primary--border-color--disabled:rgba(0, 0, 0, 0);--ix-button-primary--border-color--hover:rgba(0, 0, 0, 0);--ix-button-primary--border-color--pressed:rgba(0, 0, 0, 0);--ix-button-primary--border-color--pressed-hover:rgba(0, 0, 0, 0);--ix-button-primary--border-color--pressed-hover-active:rgba(0, 0, 0, 0);--ix-button-primary--color:var(--si-sys-color-text-on-accent);--ix-button-primary--color--active:var(--si-sys-color-text-on-accent);--ix-button-primary--color--disabled:var(--si-sys-color-text-disabled);--ix-button-primary--color--hover:var(--si-sys-color-text-on-accent);--ix-button-primary--color--pressed:var(--si-sys-color-text-on-accent);--ix-button-primary--color--pressed-active:var(--si-sys-color-text-on-accent);--ix-button-primary--color--pressed-hover:var(--si-sys-color-text-on-accent);--ix-button-secondary--background:var(--si-sys-color-background-accent-secondary);--ix-button-secondary--background--active:var(--si-sys-color-background-accent-secondary-active);--ix-button-secondary--background--disabled:rgba(0, 0, 0, 0);--ix-button-secondary--background--hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button-secondary--background--pressed:var(--si-sys-color-background-accent-secondary-active);--ix-button-secondary--background--pressed-active:var(--si-sys-color-background-accent-secondary-active);--ix-button-secondary--background--pressed-hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button-secondary--border-color:var(--si-sys-color-border-accent);--ix-button-secondary--border-color--active:var(--si-sys-color-border-accent-active);--ix-button-secondary--border-color--disabled:var(--si-sys-color-border-3);--ix-button-secondary--border-color--hover:var(--si-sys-color-border-accent-hover);--ix-button-secondary--border-color--pressed:var(--si-sys-color-border-accent-hover);--ix-button-secondary--border-color--pressed-active:var(--si-sys-color-border-accent-active);--ix-button-secondary--border-color--pressed-hover:var(--si-sys-color-border-accent-hover);--ix-button-secondary--color:var(--si-sys-color-text-accent);--ix-button-secondary--color--active:var(--si-sys-color-text-accent-active);--ix-button-secondary--color--disabled:var(--si-sys-color-text-disabled);--ix-button-secondary--color--hover:var(--si-sys-color-text-accent-hover);--ix-button-secondary--color--pressed:var(--si-sys-color-text-accent-hover);--ix-button-secondary--color--pressed-active:var(--si-sys-color-text-accent-active);--ix-button-secondary--color--pressed-hover:var(--si-sys-color-text-accent-hover);--ix-button-subtle-primary--background:var(--si-sys-color-background-2);--ix-button-subtle-primary--background--active:var(--si-sys-color-background-selected);--ix-button-subtle-primary--background--disabled:var(--si-sys-color-background-1);--ix-button-subtle-primary--background--hover:var(--si-sys-color-background-hover);--ix-button-subtle-primary--background--pressed:var(--si-sys-color-background-accent-secondary-active);--ix-button-subtle-primary--background--pressed-active:var(--si-sys-color-background-accent-secondary-active);--ix-button-subtle-primary--background--pressed-hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button-subtle-primary--border-color:rgba(0, 0, 0, 0);--ix-button-subtle-primary--border-color--active:rgba(0, 0, 0, 0);--ix-button-subtle-primary--border-color--disabled:rgba(0, 0, 0, 0);--ix-button-subtle-primary--border-color--hover:rgba(0, 0, 0, 0);--ix-button-subtle-primary--border-color--pressed:rgba(0, 0, 0, 0);--ix-button-subtle-primary--border-color--pressed-active:rgba(0, 0, 0, 0);--ix-button-subtle-primary--border-color--pressed-hover:rgba(0, 0, 0, 0);--ix-button-subtle-primary--color:var(--si-sys-color-text-primary);--ix-button-subtle-primary--color--active:var(--si-sys-color-text-primary);--ix-button-subtle-primary--color--disabled:var(--si-sys-color-text-disabled);--ix-button-subtle-primary--color--hover:var(--si-sys-color-text-primary);--ix-button-subtle-primary--color--pressed:var(--si-sys-color-text-accent-hover);--ix-button-subtle-primary--color--pressed-active:var(--si-sys-color-text-accent-hover);--ix-button-subtle-primary--color--pressed-hover:var(--si-sys-color-text-accent-hover);--ix-button-subtle-secondary--background:rgba(0, 0, 0, 0);--ix-button-subtle-secondary--background--active:var(--si-sys-color-background-selected);--ix-button-subtle-secondary--background--disabled:rgba(0, 0, 0, 0);--ix-button-subtle-secondary--background--hover:var(--si-sys-color-background-hover);--ix-button-subtle-secondary--background--pressed:var(--si-sys-color-background-accent-secondary-active);--ix-button-subtle-secondary--background--pressed-active:var(--si-sys-color-background-accent-secondary-active);--ix-button-subtle-secondary--background--pressed-hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button-subtle-secondary--border-color:var(--si-sys-color-border-2);--ix-button-subtle-secondary--border-color--active:var(--si-sys-color-border-2);--ix-button-subtle-secondary--border-color--disabled:var(--si-sys-color-border-3);--ix-button-subtle-secondary--border-color--hover:var(--si-sys-color-border-2);--ix-button-subtle-secondary--border-color--pressed:var(--si-sys-color-border-2);--ix-button-subtle-secondary--border-color--pressed-active:var(--si-sys-color-border-2);--ix-button-subtle-secondary--border-color--pressed-hover:var(--si-sys-color-border-2);--ix-button-subtle-secondary--color:var(--si-sys-color-text-primary);--ix-button-subtle-secondary--color--active:var(--si-sys-color-text-primary);--ix-button-subtle-secondary--color--disabled:var(--si-sys-color-text-disabled);--ix-button-subtle-secondary--color--hover:var(--si-sys-color-text-primary);--ix-button-subtle-secondary--color--pressed:var(--si-sys-color-text-accent-hover);--ix-button-subtle-secondary--color--pressed-active:var(--si-sys-color-text-accent-hover);--ix-button-subtle-secondary--color--pressed-hover:var(--si-sys-color-text-accent-hover);--ix-button-subtle-tertiary--background:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--background--active:var(--si-sys-color-background-selected);--ix-button-subtle-tertiary--background--disabled:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--background--hover:var(--si-sys-color-background-hover);--ix-button-subtle-tertiary--background--pressed:var(--si-sys-color-background-accent-secondary-active);--ix-button-subtle-tertiary--background--pressed-active:var(--si-sys-color-background-accent-secondary-active);--ix-button-subtle-tertiary--background--pressed-hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button-subtle-tertiary--border-color:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--border-color--active:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--border-color--disabled:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--border-color--hover:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--border-color--pressed:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--border-color--pressed-active:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--border-color--pressed-hover:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--color:var(--si-sys-color-text-primary);--ix-button-subtle-tertiary--color--active:var(--si-sys-color-text-primary);--ix-button-subtle-tertiary--color--disabled:var(--si-sys-color-text-disabled);--ix-button-subtle-tertiary--color--hover:var(--si-sys-color-text-primary);--ix-button-subtle-tertiary--color--pressed:var(--si-sys-color-text-accent-hover);--ix-button-subtle-tertiary--color--pressed-active:var(--si-sys-color-text-accent-hover);--ix-button-subtle-tertiary--color--pressed-hover:var(--si-sys-color-text-accent-hover);--ix-button-tertiary--background:rgba(0, 0, 0, 0);--ix-button-tertiary--background--active:var(--si-sys-color-background-accent-secondary-active);--ix-button-tertiary--background--disabled:rgba(0, 0, 0, 0);--ix-button-tertiary--background--hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button-tertiary--background--pressed:var(--si-sys-color-background-accent-secondary-active);--ix-button-tertiary--background--pressed-active:var(--si-sys-color-background-accent-secondary-active);--ix-button-tertiary--background--pressed-hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button-tertiary--border-color:rgba(0, 0, 0, 0);--ix-button-tertiary--border-color--active:rgba(0, 0, 0, 0);--ix-button-tertiary--border-color--disabled:rgba(0, 0, 0, 0);--ix-button-tertiary--border-color--hover:rgba(0, 0, 0, 0);--ix-button-tertiary--border-color--pressed:rgba(0, 0, 0, 0);--ix-button-tertiary--border-color--pressed-active:rgba(0, 0, 0, 0);--ix-button-tertiary--border-color--pressed-hover:rgba(0, 0, 0, 0);--ix-button-tertiary--color:var(--si-sys-color-text-accent);--ix-button-tertiary--color--active:var(--si-sys-color-text-accent-active);--ix-button-tertiary--color--disabled:var(--si-sys-color-text-disabled);--ix-button-tertiary--color--hover:var(--si-sys-color-text-accent-hover);--ix-button-tertiary--color--pressed:var(--si-sys-color-text-accent-hover);--ix-button-tertiary--color--pressed-active:var(--si-sys-color-text-accent-active);--ix-button-tertiary--color--pressed-hover:var(--si-sys-color-text-accent-hover)}:host{--ix-button--border-radius:var(--si-sys-sizing-border-radius-xs);--ix-button--border-width:var(--si-sys-sizing-border-width-default);--ix-button--outline-width--focus:var(--si-sys-sizing-border-width-default);--ix-button--focus--outline-offset:var(--si-sys-sizing-focus-ring-offset);--ix-button--padding:0 var(--si-sys-sizing-spacing-x-40);--ix-button--height:var(--si-sys-sizing-size-80);--ix-button--margin-right:var(--si-sys-sizing-spacing-x-20);--ix-button-icon--margin-right:var(--si-sys-sizing-spacing-x-20);--ix-button-icon-right--margin-left:var(--si-sys-sizing-spacing-x-20);--ix-button--min-width:var(--si-sys-sizing-size-120)}:host{--ix-dropdown-button-border-radius-left:var(--ix-button--border-radius);--ix-dropdown-button-border-radius-right:var(--ix-button--border-radius);--ix-dropdown-button--height:var(--si-sys-sizing-size-80);--ix-dropdown-button-dropdown-icon--margin-right:var(--si-sys-sizing-spacing-x-20);--ix-dropdown-button-host-context-date-picker--max-height:calc(     var(--si-sys-sizing-size-140) * 2 + var(--si-sys-sizing-spacing-y-40) + var(--si-sys-sizing-spacing-y-10)   );--ix-dropdown-button-triangle--edge-inset:calc(     var(--si-sys-sizing-spacing-x-10) * 1.5   );--ix-dropdown-button-triangle--margin-inline-start:calc(     var(--ix-dropdown-button--height) -       var(--ix-dropdown-button-triangle--border-width) -       var(--ix-dropdown-button-triangle--edge-inset)   );--ix-dropdown-button-triangle--margin-block-start:calc(     0px - var(--ix-dropdown-button-triangle--border-width) -       var(--ix-dropdown-button-triangle--edge-inset)   );--ix-dropdown-button-triangle--border-width:var(--si-sys-sizing-border-width-emphasis);--ix-dropdown-button--outline-width--focus:var(--si-sys-sizing-border-width-default)}:host{display:inline-block;position:relative;height:var(--ix-dropdown-button--height);width:auto;border-top-left-radius:var(--ix-dropdown-button-border-radius-left);border-bottom-left-radius:var(--ix-dropdown-button-border-radius-left);border-top-right-radius:var(--ix-dropdown-button-border-radius-right);border-bottom-right-radius:var(--ix-dropdown-button-border-radius-right)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .hide{display:none}:host ix-button,:host ix-icon-button{--ix-button-border-radius-left:var(     --ix-dropdown-button-border-radius-left   );--ix-button-border-radius-right:var(     --ix-dropdown-button-border-radius-right   )}:host .dropdown-button{display:block;position:relative;width:100%;height:100%;cursor:pointer}:host .dropdown-button>ix-button{width:100%;height:100%}:host .dropdown-button .button-label{margin-right:auto;min-width:0px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}:host .dropdown-button .dropdown-icon{margin-right:var(--ix-dropdown-button-dropdown-icon--margin-right)}:host .triangle{position:absolute;margin-inline-start:var(--ix-dropdown-button-triangle--margin-inline-start);margin-block-start:var(--ix-dropdown-button-triangle--margin-block-start);border-right:0 solid transparent;border-left:var(--ix-dropdown-button-triangle--border-width) solid transparent;border-top:0 solid transparent;border-bottom:var(--ix-dropdown-button-triangle--border-width) solid;color:var(--ix-button-primary--color)}:host .triangle.primary{color:var(--ix-button-primary--color)}:host .triangle.secondary{color:var(--ix-button-secondary--color)}:host .triangle.tertiary{color:var(--ix-button-tertiary--color)}:host .triangle.primary.disabled{color:var(--ix-button-primary--color--disabled)}:host .triangle.secondary.disabled{color:var(--ix-button-secondary--color--disabled)}:host .triangle.tertiary.disabled{color:var(--ix-button-tertiary--color--disabled)}:host .triangle.subtle-primary{color:var(--ix-button-subtle-primary--color)}:host .triangle.subtle-secondary{color:var(--ix-button-subtle-secondary--color)}:host .triangle.subtle-tertiary{color:var(--ix-button-subtle-tertiary--color)}:host .triangle.subtle-primary.disabled{color:var(--ix-button-subtle-primary--color--disabled)}:host .triangle.subtle-secondary.disabled{color:var(--ix-button-subtle-secondary--color--disabled)}:host .triangle.subtle-tertiary.disabled{color:var(--ix-button-subtle-tertiary--color--disabled)}:host .triangle.danger-primary{color:var(--ix-button-danger-primary--color)}:host .triangle.danger-secondary{color:var(--ix-button-danger-secondary--color)}:host .triangle.danger-tertiary{color:var(--ix-button-danger-tertiary--color)}:host .triangle.danger-primary.disabled{color:var(--ix-button-danger-primary--color--disabled)}:host .triangle.danger-secondary.disabled{color:var(--ix-button-danger-secondary--color--disabled)}:host .triangle.danger-tertiary.disabled{color:var(--ix-button-danger-tertiary--color--disabled)}:host .content{display:flex;align-items:center}:host .remove-button-min-width{min-width:0px}:host(.host-context-date-picker) .internal-button,:host(.host-context-breadcrumb) .internal-button{min-width:0px;padding:0}:host(.icon-only){width:var(--ix-dropdown-button--height)}:host(.host-context-date-picker) ix-dropdown{max-height:var(--ix-dropdown-button-host-context-date-picker--max-height);overflow-y:scroll}:host(:focus-visible){outline:var(--ix-dropdown-button--outline-width--focus) solid var(--ix-button--outline-color--focus);outline-offset:var(--ix-button--focus--outline-offset)}:host([aria-expanded=true]){--ix-button-primary--color:var(--ix-button-primary--color--active);--ix-button-secondary--color:var(--ix-button-secondary--color--active);--ix-button-tertiary--color:var(--ix-button-tertiary--color--active);--ix-button-subtle-primary--color:var(--ix-button-subtle-primary--color--active);--ix-button-subtle-secondary--color:var(--ix-button-subtle-secondary--color--active);--ix-button-subtle-tertiary--color:var(--ix-button-subtle-tertiary--color--active);--ix-button-danger-primary--color:var(--ix-button-danger-primary--color--active);--ix-button-danger-secondary--color:var(--ix-button-danger-secondary--color--active);--ix-button-danger-tertiary--color:var(--ix-button-danger-tertiary--color--active)}:host([aria-expanded=true]:focus-visible){outline:none}:host(.disabled){pointer-events:none}`;
const DropdownButton = class extends Mixin(...DefaultMixins, ComponentIdMixin, AriaActiveDescendantMixin) {
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
   * Button variant
   */
  variant = "primary";
  /**
   * Disable button
   */
  disabled = false;
  /**
   * Set label text.
   * An empty or omitted label renders an icon-only trigger.
   * Set to `null` to keep the standard trigger layout for custom `button-label` slot content.
   */
  label;
  /**
   * Button icon
   */
  icon;
  /**
   * Controls if the dropdown will be closed in response to a click event depending on the position of the event relative to the dropdown.
   */
  closeBehavior = "both";
  /**
   * Placement of the dropdown
   */
  placement;
  /**
   * ARIA label for the dropdown button.
   * Set as `aria-label` on the host, which is the interactive control.
   * The nested button is inert and is not exposed to assistive technology.
   *
   * @since 3.2.0
   */
  ariaLabelDropdownButton;
  /**
   * If true, the dropdown will try to focus checked items first when opened via keyboard, otherwise it will always focus the first focusable item.
   *
   * @since 5.0.0
   */
  focusCheckedItem = false;
  /**
   * Controls how keyboard navigation moves focus between dropdown items.
   *
   * - `active-descendant`: DOM focus stays on the dropdown button while a visual
   *   focus indicator moves between the items, exposed via `aria-activedescendant`.
   * - `roving-tabindex`: real DOM focus is moved to each item using a roving
   *   `tabindex` (`0` for the active item, `-1` for the others). No
   *   `aria-activedescendant` is used because the focused item is announced
   *   directly.
   *
   * @since 5.2.0
   */
  navigationMode = "active-descendant";
  /**
   * Enable Popover API rendering for dropdown.
   *
   * @default false
   * @since 4.3.0
   */
  enableTopLayer = false;
  /**
   * Suppress the use of the aria-activedescendant attribute and related focus proxy functionality.
   *
   * @internal
   * */
  suppressAriaActiveDescendant = false;
  /**
   * Fire event before visibility of dropdown has changed, preventing event will cancel showing dropdown
   */
  showChange;
  /**
   * Fire event after visibility of dropdown has changed
   */
  showChanged;
  dropdownShow = false;
  inheritAriaAttributes = {};
  hostAriaLabel;
  buttonLabelSlotText;
  ariaLabelObserver;
  buttonLabelObserver;
  hasConnected = false;
  renderedAriaLabel;
  renderedAriaLabelMutation;
  dropdownButtonId = this.getHostElementId();
  dropdownAnchor = makeRef();
  dropdownRef = makeRef();
  hostContext;
  getTextLabel() {
    if (typeof this.label !== "string") {
      return void 0;
    }
    return this.label.trim() || void 0;
  }
  isIconOnly() {
    return this.label !== null && this.getTextLabel() === void 0;
  }
  getButtonLabelSlotText(nodes = []) {
    const slottedNodes = nodes.length > 0 ? nodes : Array.from(this.hostElement.children).filter((element) => element.getAttribute("slot") === "button-label");
    const text = slottedNodes.map((node) => node.textContent).join(" ").replace(/\s+/g, " ").trim();
    return text || void 0;
  }
  getTriangle() {
    return h("div", { class: {
      triangle: true,
      [this.variant]: true,
      hide: !this.isIconOnly(),
      disabled: this.disabled
    } });
  }
  onDropdownShowChanged = (event) => {
    if (this.disabled && event.detail) {
      return;
    }
    this.dropdownShow = event.detail;
  };
  connectedCallback() {
    if (super.connectedCallback) {
      super.connectedCallback();
    }
    const hostAriaLabel = this.getHostAriaLabel();
    if (!this.hasConnected || hostAriaLabel !== this.renderedAriaLabel) {
      this.hostAriaLabel = hostAriaLabel;
    }
    this.hasConnected = true;
    this.buttonLabelSlotText = this.getButtonLabelSlotText();
    if (hostAriaLabel === void 0 && this.hostElement.hasAttribute("aria-label")) {
      this.hostElement.setAttribute("aria-label", this.getFallbackAriaLabel());
    }
    if (typeof MutationObserver === "undefined") {
      return;
    }
    this.ariaLabelObserver ??= new MutationObserver(() => {
      const ariaLabel = this.hostElement.getAttribute("aria-label") ?? void 0;
      if (this.renderedAriaLabelMutation !== void 0 && ariaLabel === this.renderedAriaLabelMutation) {
        this.renderedAriaLabelMutation = void 0;
        return;
      }
      const normalizedAriaLabel = this.getHostAriaLabel();
      if (normalizedAriaLabel === void 0) {
        this.hostAriaLabel = void 0;
        const fallbackAriaLabel = this.getFallbackAriaLabel();
        this.renderedAriaLabelMutation = fallbackAriaLabel;
        this.hostElement.setAttribute("aria-label", fallbackAriaLabel);
        return;
      }
      this.hostAriaLabel = normalizedAriaLabel;
    });
    this.ariaLabelObserver.observe(this.hostElement, {
      attributes: true,
      attributeFilter: ["aria-label"]
    });
    this.buttonLabelObserver ??= new MutationObserver(() => {
      this.buttonLabelSlotText = this.getButtonLabelSlotText();
    });
    this.buttonLabelObserver.observe(this.hostElement, {
      attributes: true,
      attributeFilter: ["slot"],
      characterData: true,
      childList: true,
      subtree: true
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.ariaLabelObserver?.disconnect();
    this.buttonLabelObserver?.disconnect();
  }
  getHostAriaLabel() {
    const ariaLabel = this.hostElement.getAttribute("aria-label");
    return ariaLabel?.trim() ? ariaLabel : void 0;
  }
  getLabelAriaLabel() {
    const configuredAriaLabel = typeof this.ariaLabelDropdownButton === "string" ? this.ariaLabelDropdownButton.trim() || void 0 : void 0;
    return configuredAriaLabel || this.getTextLabel() || (this.label === null ? this.buttonLabelSlotText : void 0);
  }
  getFallbackAriaLabel() {
    return this.getLabelAriaLabel() || (this.dropdownShow ? "Close dropdown" : "Open dropdown");
  }
  getMenuAriaLabel() {
    return this.hostAriaLabel || this.getLabelAriaLabel() || "Menu";
  }
  getAriaLabel() {
    return this.hostAriaLabel !== void 0 ? this.hostAriaLabel : this.getFallbackAriaLabel();
  }
  componentDidLoad() {
    this.inheritAriaAttributes = a11yHostAttributes(this.hostElement, [
      "aria-label",
      "aria-activedescendant",
      "aria-haspopup",
      "aria-controls",
      "aria-disabled",
      "aria-expanded",
      "aria-current",
      "role"
    ]);
  }
  componentWillRender() {
    const ariaLabel = this.getAriaLabel();
    this.renderedAriaLabelMutation = this.hostElement.getAttribute("aria-label") !== ariaLabel ? ariaLabel : void 0;
    this.renderedAriaLabel = ariaLabel;
    this.hostContext = {
      breadcrumb: !!closestPassShadow(this.hostElement, "ix-breadcrumb"),
      datePicker: !!closestPassShadow(this.hostElement, "ix-date-picker"),
      splitButton: !!closestPassShadow(this.hostElement, "ix-split-button"),
      tabs: !!closestPassShadow(this.hostElement, "ix-tabs")
    };
  }
  getControllingAriaElement() {
    return this.hostElement;
  }
  isAriaActiveDescendantActive() {
    return !this.suppressAriaActiveDescendant && this.dropdownShow && this.navigationMode !== "roving-tabindex";
  }
  getAriaActiveDescendantProxyItemId() {
    return false;
  }
  /**@internal */
  async getDropdownReference() {
    return this.dropdownRef.waitForCurrent();
  }
  render() {
    const isIconOnly = this.isIconOnly();
    const ariaLabel = this.getAriaLabel();
    const ariaAttributes = {
      ...this.inheritAriaAttributes,
      "aria-label": ariaLabel,
      "aria-haspopup": "true",
      "aria-disabled": a11yBoolean(this.disabled),
      "aria-expanded": a11yBoolean(this.dropdownShow),
      role: "button"
    };
    if (!this.inheritAriaAttributes["aria-controls"]) {
      ariaAttributes["aria-controls"] = `dropdown-button-menu-${this.dropdownButtonId}`;
    }
    const commonProperties = {
      id: `dropdown-button-${this.dropdownButtonId}`,
      disabled: this.disabled,
      variant: this.variant
    };
    const hideChevron = this.hostContext?.breadcrumb || this.hostContext?.datePicker || this.hostContext?.splitButton || this.hostContext?.tabs;
    return h(Host, { key: "9374ebb884230c108dfdd05d0adc200055e33f71", class: {
      disabled: this.disabled,
      "icon-only": isIconOnly,
      "host-context-breadcrumb": !!this.hostContext?.breadcrumb,
      "host-context-date-picker": !!this.hostContext?.datePicker,
      "host-context-tabs": !!this.hostContext?.tabs
    }, ref: this.dropdownAnchor, tabIndex: this.disabled ? -1 : 0, ...ariaAttributes }, h("div", { key: "2b7d242ed520e120712427cfa674dfd7e2aef6c1", class: "dropdown-button" }, !isIconOnly ? h("ix-button", { ...commonProperties, class: {
      "internal-button": true,
      active: this.dropdownShow
    }, alignment: "start", "aria-hidden": "true", inert: true, ref: (ref) => forceTabIndex(ref, -1) }, h("div", { class: "content" }, this.icon ? h("ix-icon", { "aria-hidden": "true", name: this.icon, class: "dropdown-icon" }) : null, h("div", { class: "button-label" }, this.label), h("slot", { name: "button-label" }), !hideChevron && h("ix-icon", { "aria-hidden": "true", name: this.dropdownShow ? iconChevronUpSmall : iconChevronDownSmall, size: "24" }))) : h("div", null, h("ix-icon-button", { ...commonProperties, class: { active: this.dropdownShow }, icon: this.icon, size: this.hostContext?.splitButton ? DEFAULT_BUTTON_ICON_SIZE : "24", "aria-hidden": "true", inert: true, ref: (ref) => forceTabIndex(ref, -1) }), !hideChevron && this.getTriangle())), h("ix-dropdown", { key: "8de0760e2c08644864b91ef77d929efbcbac883c", role: "menu", ref: this.dropdownRef, id: `dropdown-button-menu-${this.dropdownButtonId}`, "aria-label": this.getMenuAriaLabel(), trigger: this.dropdownAnchor.waitForCurrent(), placement: this.placement, closeBehavior: this.closeBehavior, enableTopLayer: this.enableTopLayer, disableFocusTrap: true, focusCheckedItem: this.focusCheckedItem, navigationMode: this.navigationMode, onShowChanged: (event) => this.onDropdownShowChanged(event), onScroll: (event) => {
      const scrollEvent = new CustomEvent("scroll", {
        bubbles: event.bubbles,
        cancelable: event.cancelable,
        detail: event.detail
      });
      this.hostElement.dispatchEvent(scrollEvent);
    } }, h("slot", { key: "9b01ddaf5e2d3a5907812148420f3f6e52421ac7" })));
  }
};
DropdownButton.style = dropdownButtonCss();
export {
  DropdownButton as ix_dropdown_button
};
