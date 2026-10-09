import { M as Mixin, r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-CU4RCWGK.js";
import { X as iconContextMenu } from "./index-BeX6RWvV-CXzUIwMU.js";
import { P as PROXY_LISTITEM_ID_SUFFIX, u as updateFocusProxyList, a as PROXY_LIST_ID_SUFFIX, F as FocusProxy } from "./focus-proxy-DWM2Y8PO-DMKuorxf.js";
import { D as DefaultMixins } from "./component-BP5Ot-Ed-DlnqSJRp.js";
import { A as AriaActiveDescendantMixin } from "./aria-activedescendant.mixin-CM-NUHTW-CwKLvkpN.js";
import "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
import "./shadow-dom-C7UpA3Tm-CtINZypD.js";
const splitButtonCss = () => `@charset "UTF-8";:host{--ix-split-button-left-button--width:calc(     100% - var(--si-sys-sizing-size-80)   );--ix-split-button-right-button--width:var(--si-sys-sizing-size-80);--ix-split-button-left-button-border--border-top-width:var(--si-sys-sizing-border-width-selected);--ix-split-button-left-button-border--border-left-width:var(--si-sys-sizing-border-width-selected);--ix-split-button-left-button-border--border-bottom-width:var(--si-sys-sizing-border-width-selected);--ix-split-button-left-button-border--margin-right:var(--si-sys-sizing-spacing-x-10)}:host{position:relative;display:inline-flex;vertical-align:middle}:host .left-button{width:var(--ix-split-button-left-button--width);--ix-button-border-radius-right:0}:host .right-button{width:var(--ix-split-button-right-button--width);--ix-dropdown-button-border-radius-left:0}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .left-button-border{border-top-width:var(--ix-split-button-left-button-border--border-top-width);border-right-width:0;border-left-width:var(--ix-split-button-left-button-border--border-left-width);border-bottom-width:var(--ix-split-button-left-button-border--border-bottom-width);margin-right:var(--ix-split-button-left-button-border--margin-right)}:host .proxy-list{all:unset;position:absolute;left:0px;top:0px;overflow:hidden;color:transparent;opacity:0;pointer-events:all;z-index:1000}:host .proxy-list li{height:2px;width:2px;pointer-events:all}`;
const SplitButton = class extends Mixin(...DefaultMixins, AriaActiveDescendantMixin) {
  constructor(hostRef) {
    super();
    registerInstance(this, hostRef);
    this.buttonClick = createEvent(this, "buttonClick", 7);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Color variant of button
   */
  variant = "primary";
  /**
   * Controls if the dropdown will be closed in response to a click event depending on the position of the event relative to the dropdown.
   */
  closeBehavior = "both";
  /**
   * Button label
   */
  label;
  /**
   * ARIA label for the button (use if no label and icon button)
   *
   * @since 3.2.0
   */
  ariaLabelButton;
  /**
   * Button icon
   */
  icon;
  /**
   * Icon of the button on the right
   */
  splitIcon;
  /**
   * ARIA label for the split icon button
   *
   * @since 3.2.0
   */
  ariaLabelSplitIconButton;
  /**
   * Disabled
   */
  disabled = false;
  /**
   * Disables only the main button while keeping the dropdown trigger enabled
   *
   *  @since 4.1.0
   */
  disableButton = false;
  /**
   * Disables only the dropdown trigger while keeping the main button enabled
   *
   * @since 4.1.0
   */
  disableDropdownButton = false;
  /**
   * Enable Popover API rendering for dropdown.
   *
   * @default false
   * @since 4.3.0
   */
  enableTopLayer = false;
  /**
   * Button clicked
   */
  buttonClick;
  showDropdown = false;
  internalId = "ix-split-button";
  observeChildrenChange;
  componentDidLoad() {
    super.componentDidLoad();
    this.observeChildrenChange = new MutationObserver(() => {
      this.updateProxyList();
    });
    this.observeChildrenChange.observe(this.hostElement, {
      childList: true,
      subtree: true
    });
    this.updateProxyList();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.observeChildrenChange?.disconnect();
  }
  get isDisabledButton() {
    return this.disabled || this.disableButton;
  }
  get isDisabledIcon() {
    return this.disabled || this.disableDropdownButton;
  }
  getControllingAriaElement() {
    return this.hostElement.shadowRoot.querySelector(`.right-button`);
  }
  isAriaActiveDescendantActive() {
    return this.showDropdown;
  }
  getAriaActiveDescendantProxyItemId() {
    return PROXY_LISTITEM_ID_SUFFIX;
  }
  updateProxyList() {
    const items = this.hostElement.querySelectorAll("ix-dropdown-item");
    const proxyList = this.hostElement.shadowRoot.querySelector(".proxy-list");
    if (!proxyList) {
      return;
    }
    updateFocusProxyList(proxyList, Array.from(items), (item, proxyElement) => {
      proxyElement.role = "menuitem";
      proxyElement.innerText = item.label ?? item.textContent ?? "";
      proxyElement.ariaLabel = item.ariaLabel ?? item.label ?? item.textContent ?? "";
    });
  }
  render() {
    const hasOutline = this.variant.toLocaleLowerCase().includes("secondary");
    const baseAttributes = {
      variant: this.variant
    };
    const buttonAttributes = {
      ...baseAttributes,
      disabled: this.isDisabledButton,
      class: {
        "left-button": true,
        "left-button-border": !hasOutline
      }
    };
    return h(Host, { key: "7c5b0ab6f0e7f702f9e163b4d547a051b9bc671b" }, this.label ? h("ix-button", { ...buttonAttributes, icon: this.icon, onClick: (e) => this.buttonClick.emit(e), "aria-label": this.ariaLabelButton }, this.label) : h("ix-icon-button", { ...buttonAttributes, icon: this.icon, onClick: (e) => this.buttonClick.emit(e), "aria-label": this.ariaLabelButton }), h("ix-dropdown-button", { key: "4b88d7cc808745f1b45fa365b97d528eb29d733a", class: "right-button", "aria-label": this.ariaLabelSplitIconButton, icon: this.splitIcon ?? iconContextMenu, enableTopLayer: this.enableTopLayer, closeBehavior: this.closeBehavior, disabled: this.isDisabledIcon, suppressAriaActiveDescendant: true, onShowChanged: ({ detail }) => this.showDropdown = detail, "aria-controls": `${this.internalId}-${PROXY_LIST_ID_SUFFIX}` }, h(FocusProxy, { key: "4b08a2ebf5f52bf631a5386639e3de6824517925", hostId: this.internalId, otherProps: { role: "presentation" } }), h("slot", { key: "d15626b64f9e9ef363f366e9a2012e673e97ecfa" })));
  }
};
SplitButton.style = splitButtonCss();
export {
  SplitButton as ix_split_button
};
