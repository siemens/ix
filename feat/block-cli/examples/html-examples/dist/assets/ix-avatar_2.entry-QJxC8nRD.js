import { M as Mixin, r as registerInstance, g as getElement, a as readTask, h, F as Fragment, H as Host, c as createEvent } from "./global-C_dy4gBz.js";
import { B as BaseButton } from "./base-button-Blr8QCqk-DKoBlT2G.js";
import { b as a11yHostAttributes, a as a11yBoolean } from "./a11y-B5k8YVR0-BOSd6BQK.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { b as closestElement, h as hasSlottedElements } from "./shadow-dom-T30VMB2R-DtdN3xF2.js";
import { P as PROXY_LISTITEM_ID_SUFFIX, u as updateFocusProxyList, F as FocusProxy } from "./focus-proxy-CcbkfXUH-B7UnXfX9.js";
import { D as DefaultMixins } from "./component-YJmg0LbX-Cdi_gd8D.js";
import { C as ComponentIdMixin } from "./id.mixin-CUbYLenp-DR0VgaO1.js";
import { A as AriaActiveDescendantMixin } from "./aria-activedescendant.mixin-CM-NUHTW-CwKLvkpN.js";
import "./focus-utilities-Cft9zvbS-CmL7xuFI.js";
const avatarCss = () => `:host{display:flex;position:relative;width:-moz-fit-content;width:fit-content}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .avatar{display:flex;align-items:center}:host .avatar>.avatar-image{height:2rem;width:2rem;min-height:2rem;min-width:2rem;border-radius:100px}:host .avatar>.avatar-initials{display:flex;align-items:center;justify-content:center;height:2rem;width:2rem;min-height:2rem;min-width:2rem;border-radius:100px;background-color:var(--theme-avatar--background);color:var(--theme-avatar--color)}:host .avatar>.avatar-initials>ix-typography{margin-top:1px}:host .avatar #avatar-path-background{fill:var(--theme-avatar--background)}:host .avatar #avatar-path-person{fill:var(--theme-avatar--color)}:host .user-info{display:flex;flex-direction:row;position:relative;height:2.5rem;padding:1rem;width:12.75rem;min-width:12.75rem;max-width:12.75rem;gap:1rem}:host .user-info .avatar{width:2rem;pointer-events:none}:host .user-info .user{display:flex;position:relative;flex-direction:column;justify-content:center;max-width:10rem;width:100%;overflow:hidden}:host .user-info .username{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}:host .user-info .extra{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}:host(.avatar-button) button{border-radius:100px !important;all:unset;box-sizing:border-box;display:inline-flex;flex-direction:row;flex-wrap:nowrap;overflow:hidden;align-items:center;justify-content:center;width:100%;height:100%;padding:0 0.5rem}:host(.avatar-button) button{padding:0px}:host(.avatar-button) .btn-tertiary{text-align:start;border-top-left-radius:var(--ix-button-border-radius-left);border-bottom-left-radius:var(--ix-button-border-radius-left);border-top-right-radius:var(--ix-button-border-radius-right);border-bottom-right-radius:var(--ix-button-border-radius-right)}:host(.avatar-button) .btn-tertiary{background-color:var(--theme-btn-tertiary--background);color:var(--theme-btn-tertiary--color);--ix-button-color:var(--theme-btn-tertiary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-tertiary--border-color);border-style:solid}:host(.avatar-button) .btn-tertiary.selected{background-color:var(--theme-btn-tertiary--background--pressed);color:var(--theme-btn-tertiary--color--pressed)}:host(.avatar-button) .btn-tertiary.selected:not(.disabled):not(:disabled){cursor:pointer}:host(.avatar-button) .btn-tertiary.selected:not(.disabled):not(:disabled):hover,:host(.avatar-button) .btn-tertiary.selected:not(.disabled):not(:disabled).hover{background-color:var(--theme-btn-tertiary--background--pressed-hover);color:var(--theme-btn-tertiary--color--pressed-hover)}:host(.avatar-button) .btn-tertiary.selected:not(.disabled):not(:disabled){cursor:pointer}:host(.avatar-button) .btn-tertiary.selected:not(.disabled):not(:disabled):active,:host(.avatar-button) .btn-tertiary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-btn-tertiary--background--pressed-hover);color:var(--theme-btn-tertiary--color--pressed-active)}:host(.avatar-button) .btn-tertiary:not(.disabled):not(:disabled){cursor:pointer}:host(.avatar-button) .btn-tertiary:not(.disabled):not(:disabled):hover,:host(.avatar-button) .btn-tertiary:not(.disabled):not(:disabled).hover{border-color:var(--theme-btn-tertiary--border-color--hover);background-color:var(--theme-btn-tertiary--background--hover);color:var(--theme-btn-tertiary--color--hover)}:host(.avatar-button) .btn-tertiary:not(.disabled):not(:disabled){cursor:pointer}:host(.avatar-button) .btn-tertiary:not(.disabled):not(:disabled):active,:host(.avatar-button) .btn-tertiary:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-tertiary--border-color--active);background-color:var(--theme-btn-tertiary--background--active);color:var(--theme-btn-tertiary--color--active)}:host(.avatar-button) button:focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host(.avatar-button) .avatar{transform:scale(0.8)}:host(.avatar-button) .proxy-list{all:unset;position:absolute;left:0px;top:0px;overflow:hidden;color:transparent;opacity:0;pointer-events:all;z-index:1000}:host(.avatar-button) .proxy-list li{height:2px;width:2px;pointer-events:all}`;
function DefaultAvatar(props) {
  const { initials } = props;
  if (initials) {
    return h("div", { class: "avatar-initials" }, h("ix-typography", { format: "label-lg" }, initials));
  }
  return h("svg", { class: "avatar-image", xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 32 32", "aria-label": props.a11yLabel }, h("g", { fill: "none", "fill-rule": "evenodd" }, h("path", { id: "avatar-path-background", d: "M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163\n          16-16c0-4.243-1.686-8.313-4.686-11.314C24.314 1.686 20.244 0 16 0z" }), h("path", { id: "avatar-path-person", d: "M17.897 17.91c3.8-.018 7.358 1.875 9.485 5.046-2.417 3.999-6.734 6.434-11.382\n        6.42-4.648.014-8.965-2.421-11.382-6.42 2.127-3.171 5.685-5.064\n        9.485-5.045h3.794zM15.821 2.129c3.682 0 6.667 2.984 6.667 6.666 0 3.682-2.985\n        6.667-6.667 6.667s-6.667-2.985-6.667-6.667 2.985-6.666 6.667-6.666z" })));
}
function AvatarImage(props) {
  return h("div", { class: "avatar" }, props.image ? h("img", { src: props.image, class: "avatar-image", "aria-label": props.a11yLabel }) : h(DefaultAvatar, { initials: props.initials, a11yLabel: props.a11yLabel }));
}
function UserInfo(props) {
  return h(Fragment, null, h("div", { class: "user-info", onClick: (event) => event.preventDefault() }, h(AvatarImage, { image: props.image, initials: props.initials, a11yLabel: props.a11yLabel }), h("div", { class: "user" }, h("div", { class: "username" }, props.userName), props.extra && h("ix-typography", { class: "extra", "text-color": "soft" }, props.extra))));
}
const Avatar = class extends Mixin(...DefaultMixins, ComponentIdMixin, AriaActiveDescendantMixin) {
  constructor(hostRef) {
    super();
    registerInstance(this, hostRef);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Accessibility label for the image
   * Will be set as aria-label on the nested HTML img element
   *
   * @deprecated Set the native `aria-label` on the ix-avatar host element. Will be removed in 5.0.0
   */
  a11yLabel;
  /**
   * Display an avatar image
   *
   */
  image;
  /**
   * Display the initials of the user. Will be overwritten by image
   *
   */
  initials;
  /**
   * If set an info card displaying the username will be placed inside the dropdown.
   * Note: Only working if avatar is part of the ix-application-header
   */
  username;
  /**
   * Optional description text that will be displayed underneath the username.
   * Note: Only working if avatar is part of the ix-application-header
   */
  extra;
  /**
   * Text to display in a tooltip when hovering over the avatar
   *
   * @since 4.0.0
   */
  tooltipText;
  /**
   * aria-label for the tooltip
   *
   * @since 4.0.0
   */
  ariaLabelTooltip;
  isClosestApplicationHeader = false;
  dropdownShow = false;
  hasSlottedElements = false;
  slotElement;
  dropdownElement;
  observeChildrenChange;
  tooltipRef = makeRef();
  a11yAttributes = {};
  get items() {
    return Array.from(this.hostElement.querySelectorAll("ix-dropdown-item"));
  }
  componentWillLoad() {
    this.a11yAttributes = a11yHostAttributes(this.hostElement);
    const closest = closestElement("ix-application-header", this.hostElement);
    this.isClosestApplicationHeader = closest !== null;
    this.observeChildrenChange = new MutationObserver(() => {
      this.updateProxyList();
    });
    this.observeChildrenChange.observe(this.hostElement, {
      childList: true,
      subtree: true
    });
  }
  componentDidLoad() {
    this.updateProxyList();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.observeChildrenChange?.disconnect();
  }
  async slottedChanged() {
    this.hasSlottedElements = hasSlottedElements(this.slotElement);
  }
  resolveAvatarTrigger() {
    return new Promise((resolve, reject) => {
      readTask(() => {
        const button = this.hostElement.shadowRoot.querySelector("button");
        if (button) {
          resolve(button);
        } else {
          reject(new Error("ix-avatar - trigger element not found"));
        }
      });
    });
  }
  onDropdownClick(event) {
    if (event.target === this.dropdownElement) {
      event.preventDefault();
    }
  }
  getControllingAriaElement() {
    return this.hostElement.shadowRoot.querySelector(`[aria-controls="${this.getHostElementId()}-proxy-listbox"]`);
  }
  isAriaActiveDescendantActive() {
    return this.dropdownShow;
  }
  getAriaActiveDescendantProxyItemId() {
    return PROXY_LISTITEM_ID_SUFFIX;
  }
  updateProxyList() {
    const items = this.items;
    const proxyList = this.hostElement.shadowRoot.querySelector(".proxy-list");
    if (!proxyList) {
      return;
    }
    updateFocusProxyList(proxyList, items, (item, proxyElement) => {
      proxyElement.role = "menuitem";
      proxyElement.innerText = item.label ?? item.textContent ?? "";
      proxyElement.ariaLabel = item.ariaLabel ?? item.label ?? item.textContent ?? "";
    });
  }
  render() {
    const a11yLabel = this.a11yAttributes["aria-label"];
    const tooltipText = this.tooltipText || this.username;
    const ariaHidden = tooltipText === this.username;
    const Avatar2 = h(Fragment, null, h(AvatarImage, { image: this.image, initials: this.initials, a11yLabel: a11yLabel ?? this.a11yLabel }), !!tooltipText && h("ix-tooltip", { ref: this.tooltipRef, for: this.hostElement, "aria-hidden": a11yBoolean(ariaHidden), "aria-label": this.ariaLabelTooltip }, tooltipText));
    if (this.isClosestApplicationHeader) {
      return h(Host, { slot: "ix-application-header-avatar", class: "avatar-button" }, h(BaseButton, { disabled: false, iconOval: false, icon: void 0, iconOnly: false, loading: false, selected: false, type: "button", variant: "tertiary", ariaAttributes: {
        role: "menu",
        "aria-controls": `${this.getHostElementId()}-proxy-listbox`,
        "aria-expanded": a11yBoolean(this.dropdownShow),
        "aria-haspopup": "menu"
      } }, Avatar2), h("ix-dropdown", { ref: (ref) => this.dropdownElement = ref, trigger: this.resolveAvatarTrigger(), class: "avatar-dropdown", onClick: (e) => this.onDropdownClick(e), onShowChanged: (event) => {
        this.dropdownShow = event.detail;
        if (event.detail && this.tooltipRef.current) {
          this.tooltipRef.current.hideTooltip(0);
        }
      }, disableFocusTrap: true, focusHost: this.hostElement }, h(FocusProxy, { hostId: this.getHostElementId(), otherProps: {} }), this.username && h(Fragment, null, h(UserInfo, { extra: this.extra, image: this.image, initials: this.initials, userName: this.username, a11yLabel: a11yLabel ?? this.a11yLabel }), this.hasSlottedElements && h("ix-divider", { onClick: (e) => e.preventDefault() })), h("slot", { onSlotchange: () => this.slottedChanged(), ref: (ref) => this.slotElement = ref })));
    }
    return h(Host, null, Avatar2);
  }
};
Avatar.style = avatarCss();
const menuAvatarItemCss = () => `:host{display:block;color:var(--theme-color-std-text)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}`;
const MenuAvatarItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.itemClick = createEvent(this, "itemClick", 7);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Avatar dropdown icon
   */
  icon;
  /**
   * Avatar dropdown label
   */
  label;
  /**
   * Avatar dropdown item clicked
   */
  itemClick;
  dropdownItemRef = makeRef();
  /** @internal */
  async getDropdownItemElement() {
    return this.dropdownItemRef.waitForCurrent();
  }
  render() {
    return h("ix-dropdown-item", { key: "4a25c0768a9afad6b18bf3019c8998cc51fa134a", ref: this.dropdownItemRef, icon: this.icon, label: this.label, onClick: (e) => this.itemClick.emit(e) });
  }
};
MenuAvatarItem.style = menuAvatarItemCss();
export {
  Avatar as ix_avatar,
  MenuAvatarItem as ix_menu_avatar_item
};
