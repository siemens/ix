import { M as Mixin, r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-C_dy4gBz.js";
import { I as iconContextMenu } from "./index-DFdo1y_u-D_8X33yw.js";
import { P as PROXY_LISTITEM_ID_SUFFIX, u as updateFocusProxyList, a as PROXY_LIST_ID_SUFFIX, F as FocusProxy } from "./focus-proxy-CcbkfXUH-B7UnXfX9.js";
import { D as DefaultMixins } from "./component-YJmg0LbX-Cdi_gd8D.js";
import { A as AriaActiveDescendantMixin } from "./aria-activedescendant.mixin-CM-NUHTW-CwKLvkpN.js";
import "./focus-utilities-Cft9zvbS-CmL7xuFI.js";
import "./shadow-dom-T30VMB2R-DtdN3xF2.js";
const splitButtonCss = () => `.btn-group ix-button:first-child .btn{border-top-right-radius:0px;border-bottom-right-radius:0px;border-right:0px}.btn-group ix-button:last-child .btn{border-top-left-radius:0px;border-bottom-left-radius:0px}.btn-group ix-button:not(:first-child):not(:last-child) .btn{border-radius:0px;border-right:0px}:host{position:relative;display:inline-flex;vertical-align:middle}:host .left-button{width:calc(100% - 2rem);--ix-button-border-radius-right:0}:host .right-button{width:2rem;--ix-dropdown-button-border-radius-left:0}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .left-button-border{border-top-width:0.125rem;border-right-width:0;border-left-width:0.125rem;border-bottom-width:0.125rem;margin-right:0.125rem}:host .proxy-list{all:unset;position:absolute;left:0px;top:0px;overflow:hidden;color:transparent;opacity:0;pointer-events:all;z-index:1000}:host .proxy-list li{height:2px;width:2px;pointer-events:all}`;
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
   * Placement of the dropdown
   */
  placement = "bottom-start";
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
    return h(Host, { key: "c5b57417e7d1799516a1a03464e81ca7130aba4c" }, this.label ? h("ix-button", { ...buttonAttributes, icon: this.icon, onClick: (e) => this.buttonClick.emit(e), "aria-label": this.ariaLabelButton }, this.label) : h("ix-icon-button", { ...buttonAttributes, icon: this.icon, onClick: (e) => this.buttonClick.emit(e), "aria-label": this.ariaLabelButton }), h("ix-dropdown-button", { key: "ebdb4a95751a625fecae321e7c505717d8b9fd31", class: "right-button", "aria-label": this.ariaLabelSplitIconButton, icon: this.splitIcon ?? iconContextMenu, enableTopLayer: this.enableTopLayer, closeBehavior: this.closeBehavior, disabled: this.isDisabledIcon, suppressAriaActiveDescendant: true, onShowChanged: ({ detail }) => this.showDropdown = detail, "aria-controls": `${this.internalId}-${PROXY_LIST_ID_SUFFIX}` }, h(FocusProxy, { key: "9d3234009f3e70b88853d30589fe3c8298bc4930", hostId: this.internalId, otherProps: {} }), h("slot", { key: "065a920c26dad71cc00cf4a6768064aaccedf17f" })));
  }
};
SplitButton.style = splitButtonCss();
export {
  SplitButton as ix_split_button
};
