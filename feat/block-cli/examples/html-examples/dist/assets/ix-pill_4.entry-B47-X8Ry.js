import { M as Mixin, a as registerInstance, g as getElement, h, H as Host, c as createEvent, r as readTask } from "./global-DUJ9DtiD.js";
import { a as a11yBoolean } from "./a11y-C21npbUc-CU_Bg8RX.js";
import { D as DefaultMixins, h as hasKeyboardMode } from "./component-CijOMCrv-wyGBYWjL.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { r as iconClose, I as iconMoreMenu } from "./index-Cl7fhG1I-C77BCFLW.js";
import { C as ComponentIdMixin } from "./id.mixin-CUbYLenp-DR0VgaO1.js";
import { B as BaseTabMixin } from "./tab.mixin-BjAM99yM-8IJAFkSg.js";
import { q as queryElements } from "./focus-utilities-B8qsiZ4M-BHg4MFsh.js";
import { I as InheritAriaAttributesMixin } from "./inherit-aria-attributes.mixin-nCmPujqf-9ZtXFP4p.js";
import { r as requestAnimationFrameNoNgZone } from "./requestAnimationFrame-BEuV0Xpe-CBtvTq-Q.js";
import "./shadow-dom-BIe8Nw9M-DxOF84uP.js";
const pillCss = () => `:host{display:inline-block;position:relative;height:1.25rem;max-height:1.25rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}.container{display:inline-flex;width:inherit;max-width:100%;box-sizing:border-box;position:relative;align-items:center;border-radius:100px;padding:0.5rem;vertical-align:top;height:2rem;max-height:2rem;cursor:default}.container .content-wrapper{display:inline-flex;align-items:center;flex:1;min-width:0}.container .with-icon{margin-right:0.25rem}.container .close-button-container{display:inline-flex;margin-left:auto;padding-left:0.5rem}.container .slot-container{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.container.centerContent .content-wrapper{justify-content:center;text-align:center}.container.outline{padding-left:calc(0.5rem - 0.0625rem)}.container.outline.icon.alarm .with-icon{color:var(--theme-color-alarm)}.container.outline.icon.critical .with-icon{color:var(--theme-color-critical)}.container.outline.icon.warning .with-icon{color:var(--theme-color-warning-text)}.container.outline.icon.info .with-icon{color:var(--theme-color-info)}.container.outline.icon.neutral .with-icon{color:var(--theme-color-neutral)}.container.outline.icon.success .with-icon{color:var(--theme-color-success)}.container.outline.closable:not(.inactive){padding-right:calc(0.25rem - 0.0625rem)}.container.outline.closable.inactive,.container.outline:not(.closable){padding-right:calc(0.5rem - 0.0625rem)}.container:not(.outline){padding-left:0.5rem}.container:not(.outline).closable:not(.inactive){padding-right:0.25rem}.container:not(.outline).closable.inactive,.container:not(.outline):not(.closable){padding-right:0.5rem}.container.primary{background-color:var(--theme-color-primary);color:var(--theme-chip-primary--color)}.container.primary .close-button{color:var(--theme-chip-primary--color);--ix-icon-button-color:var(--theme-chip-primary--color);pointer-events:auto}.container.primary.outline{color:var(--theme-chip-outline--color);background-color:var(--theme-chip-primary-outline--background);border:solid 0.0625rem var(--theme-chip-primary-outline--border-color)}.container.primary.outline .close-button{color:var(--theme-chip-outline--color);--ix-icon-button-color:var(--theme-chip-outline--color)}.container.primary.outline .with-icon{color:var(--theme-color-primary)}.container.outline{border-width:0.0625rem;border-style:solid}.container.alarm{color:var(--theme-color-alarm--contrast)}.container.alarm:not(.outline){background-color:var(--theme-color-alarm)}.container.alarm:not(.outline) .close-button{color:var(--theme-color-alarm--contrast);--ix-icon-button-color:var(--theme-color-alarm--contrast)}.container.alarm.outline{color:var(--theme-chip-outline--color);background-color:var(--theme-chip-outline--background);border-color:var(--theme-color-alarm)}.container.critical{color:var(--theme-color-critical--contrast)}.container.critical:not(.outline){background-color:var(--theme-color-critical)}.container.critical:not(.outline) .close-button{color:var(--theme-color-critical--contrast);--ix-icon-button-color:var(--theme-color-critical--contrast)}.container.critical.outline{color:var(--theme-chip-outline--color);background-color:var(--theme-chip-outline--background);border-color:var(--theme-color-critical)}.container.warning{color:var(--theme-color-warning--contrast)}.container.warning:not(.outline){background-color:var(--theme-color-warning)}.container.warning:not(.outline) .close-button{color:var(--theme-color-warning--contrast);--ix-icon-button-color:var(--theme-color-warning--contrast)}.container.warning.outline{color:var(--theme-chip-outline--color);background-color:var(--theme-chip-outline--background);border-color:var(--theme-color-warning)}.container.info{color:var(--theme-color-info--contrast)}.container.info:not(.outline){background-color:var(--theme-color-info)}.container.info:not(.outline) .close-button{color:var(--theme-color-info--contrast);--ix-icon-button-color:var(--theme-color-info--contrast)}.container.info.outline{color:var(--theme-chip-outline--color);background-color:var(--theme-chip-outline--background);border-color:var(--theme-color-info)}.container.neutral{color:var(--theme-color-neutral--contrast)}.container.neutral:not(.outline){background-color:var(--theme-color-neutral)}.container.neutral:not(.outline) .close-button{color:var(--theme-color-neutral--contrast);--ix-icon-button-color:var(--theme-color-neutral--contrast)}.container.neutral.outline{color:var(--theme-chip-outline--color);background-color:var(--theme-chip-outline--background);border-color:var(--theme-color-neutral)}.container.success{color:var(--theme-color-success--contrast)}.container.success:not(.outline){background-color:var(--theme-color-success)}.container.success:not(.outline) .close-button{color:var(--theme-color-success--contrast);--ix-icon-button-color:var(--theme-color-success--contrast)}.container.success.outline{color:var(--theme-chip-outline--color);background-color:var(--theme-chip-outline--background);border-color:var(--theme-color-success)}:host .container{height:100%;justify-content:center}:host .container .with-icon{margin-right:0}:host .container.outline{background-color:var(--theme-pill-outline--background)}:host .container.outline.icon{padding-left:0.4375rem;padding-right:0.4375rem}:host .container:not(.outline).icon{padding-left:0.5rem;padding-right:0.5rem}:host .with-gap{gap:0.25rem}:host(.align-left) .container{justify-content:flex-start}`;
const Pill = class extends Mixin(...DefaultMixins) {
  constructor(hostRef) {
    super();
    registerInstance(this, hostRef);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Pill variant
   */
  variant = "primary";
  /**
   * Show pill as outline
   */
  outline = false;
  /**
   * Show icon
   */
  icon;
  /**
   * ARIA label for the icon
   *
   * @since 3.2.0
   */
  ariaLabelIcon;
  /**
   * Custom color for pill. Only working for `variant='custom'`
   */
  background;
  /**
   * Custom font color for pill. Only working for `variant='custom'`
   */
  pillColor;
  /**
   * Align pill content left
   */
  alignLeft = false;
  /**
   * Display a tooltip. By default, no tooltip will be displayed.
   * Add the attribute to display the text content of the component as a tooltip or use a string to display a custom text.
   * @since 3.0.0
   */
  tooltipText = false;
  iconOnly = false;
  containerElementRef = makeRef();
  componentWillLoad() {
    this.checkIfContentAvailable();
  }
  checkIfContentAvailable() {
    const hasChildren = this.hostElement.children.length > 0;
    const hasTextContent = !!this.hostElement.textContent;
    this.iconOnly = !hasChildren && !hasTextContent;
  }
  getTooltip() {
    if (!this.tooltipText && !this.hostElement.hasAttribute("tooltip-text")) {
      return null;
    }
    const text = typeof this.tooltipText === "string" && this.tooltipText.trim() ? this.tooltipText : this.hostElement.textContent?.trim();
    return h("ix-tooltip", { for: this.containerElementRef.waitForCurrent(), "aria-label": text || void 0 }, text);
  }
  render() {
    let customStyle = {};
    if (this.variant === "custom") {
      customStyle = {
        color: this.pillColor,
        [this.outline ? "borderColor" : "backgroundColor"]: this.background
      };
    }
    const hasAccessibleName = this.hostElement.hasAttribute("aria-label") || this.hostElement.hasAttribute("aria-labelledby");
    let hostRole = void 0;
    if (this.hostElement.hasAttribute("role")) {
      hostRole = this.hostElement.getAttribute("role") ?? void 0;
    } else if (hasAccessibleName) {
      hostRole = "group";
    }
    const iconIsDecorative = !this.ariaLabelIcon?.trim();
    return h(Host, { key: "38fbe61596f61dfbe86a64f299ab060806c613ea", style: this.variant === "custom" ? {
      "--ix-icon-button-color": this.pillColor
    } : {}, class: {
      "align-left": this.alignLeft
    }, role: hostRole }, h("div", { key: "25f749b13a0b7e389f72632259fdd82b863cb8b4", ref: this.containerElementRef, style: { ...customStyle }, class: {
      container: true,
      outline: this.outline,
      inactive: false,
      alarm: this.variant === "alarm",
      critical: this.variant === "critical",
      info: this.variant === "info",
      neutral: this.variant === "neutral",
      primary: this.variant === "primary",
      success: this.variant === "success",
      warning: this.variant === "warning",
      custom: this.variant === "custom",
      closable: false,
      icon: !!this.icon,
      "with-gap": !this.iconOnly
    } }, this.icon && h("ix-icon", { key: "562ffdcf4a3c851a8096f58145d43fd78a070521", class: {
      "with-icon": true
    }, name: this.icon, size: "16", "aria-label": this.ariaLabelIcon, "aria-hidden": a11yBoolean(iconIsDecorative) }), h("span", { key: "34c8009d7e258114600e6cb420b8ff625bc8e234", class: "slot-container" }, h("slot", { key: "137b8883a3df8ddca49393f1ad1ec9901a3d24f9", onSlotchange: () => this.checkIfContentAvailable() }))), this.getTooltip());
  }
};
Pill.style = pillCss();
const tabItemCss = () => `:host{position:relative;display:flex;align-items:center;justify-content:center;line-height:20px;font-size:14px;font-weight:bold;background-color:var(--theme-tab--background);color:var(--theme-tab--color);touch-action:none;height:2.5rem;min-height:2.5rem;max-height:2.5rem;padding:0.0625rem 1.5rem;gap:0.5rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .text span,:host .text span::before{pointer-events:none}:host .text{vertical-align:middle}:host slot{white-space:nowrap}:host .circle{display:flex;justify-content:center;align-items:center;height:3rem;width:3rem;background-color:var(--theme-animated-tab-circle--background);border-radius:50%;border:2px solid var(--theme-animated-tab-circle--border-color);color:var(--theme-animated-tab-icon--color);cursor:pointer}:host .circle:hover{background-color:var(--theme-animated-tab-circle--background--hover)}:host .circle:active{background-color:var(--theme-animated-tab-circle--background--active)}:host .counter{position:absolute;z-index:1;height:16px;width:auto;background-color:var(--theme-color-1);border:1px solid var(--theme-tab-pill--border-color);border-radius:100px;bottom:6px;display:flex;justify-content:center;align-items:center;padding-left:0.25rem;padding-right:0.25rem;font-size:12px;line-height:14px;color:var(--theme-pill-outline--color);cursor:pointer}:host .counter.selected{border-color:var(--theme-tab-pill--border-color--selected)}:host .counter.disabled{border-color:var(--theme-tab-pill--border-color--disabled);cursor:default}:host .hidden{display:none}:host(:not(.disabled)){cursor:pointer}:host(.circle){height:4.5rem;min-height:4.5rem;max-height:4.5rem}:host(.stretched){flex-basis:100%;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host(.selected:not(.disabled)){background-color:var(--theme-tab--background--selected);color:var(--theme-tab--color--selected)}:host(.selected:not(.disabled))::after{content:"";position:absolute;left:0;width:100%;height:2px;background-color:var(--theme-tab-indicator--background--selected)}:host(.selected:not(.disabled)) .circle{background-color:var(--theme-animated-tab-circle--background--selected);color:var(--theme-animated-tab-icon--color--selected);border-color:var(--theme-animated-tab-circle--border-color--selected)}:host(.selected:not(.disabled)) .circle:hover{background-color:var(--theme-animated-tab-circle--background--selected)}:host(.selected.bottom:not(.disabled)){background-color:var(--theme-tab--background--selected);color:var(--theme-tab--color--selected)}:host(.selected.bottom:not(.disabled))::after{bottom:0px}:host(.selected.top:not(.disabled))::after{top:0px}:host(:hover:not(.circle):not(.disabled)){background-color:var(--theme-tab--background--hover);color:var(--theme-tab-color-hover)}:host(:active:not(.circle):not(.disabled)){background-color:var(--theme-tab--background--active);color:var(--theme-tab-color--active)}:host(.disabled){cursor:default;color:var(--theme-tab--color--disabled);background-color:var(--theme-tab--background--disabled);pointer-events:none}:host(.disabled)::after{background-color:var(--theme-tab-indicator--background--disabled)}:host(.disabled) .circle{background-color:var(--theme-animated-tab-circle--background--disabled);border-color:var(--theme-animated-tab-circle--border-color--disabled);cursor:default}:host(.icon-only){display:flex;justify-content:center;align-items:center;padding:1.5rem 0.5rem}:host(.small-tab){height:2rem;min-height:2rem;max-height:2rem;padding:1rem}:host(.small-tab.icon){padding:1rem 0.25rem}:host(:not(.circle):focus-visible){outline-offset:-0.0625rem;outline:0.0625rem solid var(--theme-color-focus-bdr)}:host(.circle:focus-visible){outline:none}:host(.circle:focus-visible) .circle{outline-offset:0.125rem;outline:0.0625rem solid var(--theme-color-focus-bdr)}`;
const TabItem = class extends Mixin(...DefaultMixins, ComponentIdMixin, BaseTabMixin) {
  constructor(hostRef) {
    super();
    registerInstance(this, hostRef);
    this.tabClick = createEvent(this, "tabClick", 7);
    this.tabClose = createEvent(this, "tabClose", 7);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Set selected tab
   */
  selected = false;
  /**
   * Set disabled tab
   */
  disabled = false;
  /**
   * Set icon of the tab
   *
   * @since 5.0.0
   */
  icon;
  /**
   * Set counter value
   */
  counter;
  /**
   * If the tab can be closed
   *
   * @since 5.0.0
   */
  closable = false;
  /**
   * Tab label
   *
   * @since 5.0.0
   */
  label;
  /**
   * Aria label for the close button, important for accessibility
   *
   * @since 5.0.0
   */
  ariaLabelCloseButton = "Close tab";
  /** @internal */
  placement = "bottom";
  /** @internal */
  rounded = false;
  /** @internal */
  small = false;
  /** @internal */
  layout = "auto";
  /** @internal */
  iconOnly = false;
  /**
   * Emitted when the tab is clicked.
   */
  tabClick;
  /**
   * Emitted when the tab's close button is clicked.
   */
  tabClose;
  onTabSelect(event) {
    if (event.defaultPrevented) {
      return;
    }
    if (this.disabled) {
      event.preventDefault();
      return;
    }
    const clientEvent = this.tabClick.emit({
      tabKey: this.tabKey,
      nativeEvent: event
    });
    if (clientEvent.defaultPrevented) {
      event.stopPropagation();
    }
  }
  render() {
    let variant = "normal";
    const label = this.label || this.hostElement.textContent?.trim();
    if (this.rounded) {
      variant = "rounded";
    } else if (this.icon && (label === void 0 || label === "")) {
      variant = "icon-only";
    } else {
      variant = "normal";
    }
    return h(Host, { key: "3d26a9aac03f366e01800c1f94061118fa84b143", id: this.getHostElementId(), role: "tab", "aria-selected": a11yBoolean(this.selected), tabIndex: this.selected && !this.disabled ? 0 : -1, class: {
      selected: this.selected,
      disabled: this.disabled,
      "small-tab": this.small,
      "icon-only": variant === "icon-only",
      stretched: this.layout === "stretched",
      bottom: this.placement === "bottom",
      top: this.placement === "top",
      circle: this.rounded
    }, onClick: (event) => this.onTabSelect(event), onKeyDown: (event) => {
      if (event.key === "Enter" || event.key === " ") {
        this.onTabSelect(event);
      }
      if (this.closable && event.key === "Delete") {
        event.preventDefault();
        this.tabClose.emit({
          tabKey: this.tabKey,
          nativeEvent: event
        });
      }
    } }, variant === "rounded" && h("div", { key: "82909e2597fac364fa0a7ba48e752c4b6a2f873e", class: {
      circle: true
    } }, this.icon && h("ix-icon", { key: "b8d5ca4310f3ffb2f333e2f7a1f65a462b1e0e3b", name: this.icon, size: "24" }), h("slot", { key: "8922f2fe68d63a53b690ab57b69c1954d5e60990" })), this.icon && variant !== "rounded" && h("ix-icon", { key: "5063d08ee5c8cebf1a2986ca1551e87b8cc8063c", name: this.icon, size: "16", class: "tab-icon" }), variant === "normal" && h("div", { key: "a0097ce7a9a080d6d5dd70464d46f8685dd06a94", class: {
      text: !!this.label,
      selected: this.selected,
      disabled: this.disabled
    } }, this.label, h("slot", { key: "e96d2062c12838b2ac7879768974ebff024de854" })), variant === "rounded" && this.counter !== void 0 && h("div", { key: "2250d85ed40372346c09eb05218ce039be126939", class: {
      counter: true,
      selected: this.selected,
      disabled: this.disabled
    } }, this.counter), this.counter && variant !== "rounded" && h("ix-pill", { key: "5e37202c566ad0580fa6ddac79df3f2ea4528fb2", variant: "primary", outline: true, class: "tab-counter" }, this.counter), this.closable && variant !== "rounded" && h("ix-icon-button", { key: "60a1e7b388612f7fd0e63b8aaf8c5f56a2bfea86", "aria-label": this.ariaLabelCloseButton, class: "close-tab", size: "12", variant: "subtle-tertiary", icon: iconClose, onClick: (event) => {
      event.stopPropagation();
      event.preventDefault();
      this.tabClose.emit({
        tabKey: this.tabKey,
        nativeEvent: event
      });
    } }));
  }
};
TabItem.style = tabItemCss();
const tabSetCss = () => `:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}`;
const TabSet = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  get hostElement() {
    return getElement(this);
  }
  get tabPanels() {
    return Array.from(queryElements(this.hostElement, "ix-tab-panel"));
  }
  get tabList() {
    return this.hostElement?.querySelector("ix-tabs");
  }
  get tabListItems() {
    if (!this.tabList) {
      return [];
    }
    return Array.from(this.tabList.querySelectorAll("ix-tab-item"));
  }
  panelsObserver;
  componentWillLoad() {
    this.panelsObserver = new MutationObserver(() => this.onPanelComponentsChange());
    this.panelsObserver.observe(this.hostElement, {
      childList: true,
      subtree: true
    });
    this.onPanelComponentsChange();
  }
  componentDidLoad() {
    this.onPanelComponentsChange();
  }
  disconnectedCallback() {
    this.panelsObserver?.disconnect();
  }
  onPanelComponentsChange() {
    const tabs = this.tabList;
    const tabItems = this.tabListItems;
    const panels = this.tabPanels;
    if (!tabs || !tabItems || !panels) {
      return;
    }
    const activeTabKey = tabs.activeTabKey;
    if (!activeTabKey) {
      return;
    }
    const activeTabElement = tabItems.find((tab) => tab.tabKey === activeTabKey);
    const activeTabPanel = panels.find((panel) => panel.tabKey === activeTabKey);
    if (!activeTabElement || !activeTabPanel) {
      return;
    }
    const tabId = activeTabElement.getAttribute("id");
    activeTabPanel.setAttribute("aria-labelledby", tabId ?? "");
    const tabPanelId = activeTabPanel.getAttribute("id");
    activeTabElement.setAttribute("aria-controls", tabPanelId ?? "");
    this.checkPanelsVisibility();
  }
  checkPanelsVisibility() {
    const tabs = this.tabList?.querySelectorAll("ix-tab-item");
    const panels = this.tabPanels;
    if (!tabs || !panels) {
      return;
    }
    panels.forEach((panel) => {
      panel.hidden = panel.tabKey === this.tabList?.activeTabKey ? false : true;
    });
  }
  render() {
    return h(Host, { key: "139dd7a9fbd2a12a67de5db64d0731a86ba1c355", onTabChange: () => this.checkPanelsVisibility() }, h("slot", { key: "8feff5e84cf1f1576df78077a022d2832a51b602" }));
  }
};
TabSet.style = tabSetCss();
function emitEvent(action, emitter, rollback) {
  const result = action();
  const { defaultPrevented } = emitter.emit(result.new);
  if (defaultPrevented) {
    rollback(result.old);
  }
  return result;
}
const tabsCss = () => `:host{width:auto;display:flex;align-items:center;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .tabs-container{display:flex;flex-direction:row;position:relative;width:100%;justify-content:space-between;align-items:center}:host .tabs-container.top::before{content:"";position:absolute;background-color:var(--theme-tab-indicator--background);width:100%;height:var(--theme-tab-indicator--height);left:0;bottom:0}:host .tabs-container.top::after{content:"";position:absolute;background-color:var(--theme-tab-indicator--background--selected);width:var(--ix-tab-active-indicator-width);height:var(--theme-tab-indicator--height);left:0;bottom:0;transform:translateX(var(--ix-tab-active-indicator-offset))}:host .tabs-container.top::before,:host .tabs-container.top::after{top:0;bottom:auto}:host .tabs-container.bottom::before{content:"";position:absolute;background-color:var(--theme-tab-indicator--background);width:100%;height:var(--theme-tab-indicator--height);left:0;bottom:0}:host .tabs-container.bottom::after{content:"";position:absolute;background-color:var(--theme-tab-indicator--background--selected);width:var(--ix-tab-active-indicator-width);height:var(--theme-tab-indicator--height);left:0;bottom:0;transform:translateX(var(--ix-tab-active-indicator-offset))}:host .tabs-container.bottom::before,:host .tabs-container.bottom::after{top:auto;bottom:0}:host .tabs{position:relative;display:flex;flex-direction:row;flex-wrap:nowrap;overflow:auto;scroll-behavior:smooth;width:100%;touch-action:pan-y;padding-right:2.75rem;scrollbar-width:none}:host .tabs::-webkit-scrollbar{display:none}:host .tabs.tabs-stretched{padding-right:0px}:host .tabs:focus-visible{outline-offset:-1px;outline:1px solid var(--theme-color-focus-bdr)}:host .tabs-context-menu{margin-right:0.5rem}:host .overflow-shadow-container{display:block;position:relative;height:100%;width:100%;pointer-events:all;overflow:auto}:host .overflow-shadow{-webkit-mask-image:linear-gradient(90deg, black calc(100% - 45px), transparent 100%);mask-image:linear-gradient(90deg, black calc(100% - 45px), transparent 100%)}`;
const Tabs = class extends Mixin(...DefaultMixins, InheritAriaAttributesMixin) {
  constructor(hostRef) {
    super();
    registerInstance(this, hostRef);
    this.tabChange = createEvent(this, "tabChange", 7);
    this.tabClose = createEvent(this, "tabClose", 7);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Set tab items to small size
   */
  small = false;
  /**
   * Set rounded tabs
   */
  rounded = false;
  /**
   * Set layout width style
   */
  layout = "auto";
  /**
   * Set placement style
   */
  placement = "bottom";
  /**
   * Aria label for the overflow menu button.
   *
   * @since 5.0.0
   */
  ariaLabelMoreTabs = "Show all tabs";
  /**
   * Active tab key.
   *
   * @since 5.0.0
   */
  activeTabKey;
  /**
   * Keyboard interaction behavior:
   * automatic:  A tabs widget where tabs are automatically activated and their panel is displayed when they receive focus.
   * manual: A tabs widget where users activate a tab and display its panel by pressing Space or Enter.
   *
   * @since 5.0.0
   */
  keyboardNavigation = "automatic";
  /**
   * Tab selection event. Event detail contains the new active tab key.
   *
   * @since 5.0.0
   */
  tabChange;
  /**
   * Tab close event. Event detail contains the closed tab key.
   *
   * @since 5.0.0
   */
  tabClose;
  isTabsOverflow = false;
  overflowMenuItems = [];
  resizeObserver;
  itemsObserver;
  tabsContainerRef = makeRef();
  tabsRef = makeRef();
  get tabs() {
    return Array.from(this.hostElement.querySelectorAll("ix-tab-item"));
  }
  componentDidLoad() {
    this.itemsObserver = new MutationObserver(() => {
      this.onComponentChildrenChange();
      requestAnimationFrameNoNgZone(() => this.onComponentResize());
    });
    this.itemsObserver.observe(this.hostElement, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true
    });
    this.resizeObserver = new ResizeObserver(() => this.onComponentResize());
    this.resizeObserver.observe(this.hostElement);
    this.onComponentResize();
  }
  componentWillLoad() {
    this.onComponentChildrenChange();
    if (this.activeTabKey) {
      this.setTabActive(this.activeTabKey);
    }
  }
  disconnectedCallback() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    if (this.itemsObserver) {
      this.itemsObserver.disconnect();
    }
  }
  onActiveTabChange(tabKey, oldTabKey) {
    const activeTab = this.tabs.find((tab) => tab.selected);
    if (activeTab?.tabKey === tabKey) {
      return;
    }
    this.emitTabChangeEvent(tabKey, oldTabKey);
  }
  setTabActive(tabKey) {
    const tabs = this.tabs;
    if (tabKey === void 0) {
      tabs.forEach((tab) => tab.selected = false);
      this.onComponentChildrenChange();
      this.activeTabKey = void 0;
      return;
    }
    const newTab = tabs.find((tab) => tab.tabKey === tabKey);
    if (!newTab) {
      return;
    }
    if (newTab.disabled) {
      return;
    }
    tabs.forEach((tab) => tab.selected = false);
    newTab.selected = true;
    this.onComponentChildrenChange();
    this.activeTabKey = newTab.tabKey;
    newTab.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center"
    });
    return this.activeTabKey;
  }
  onComponentChildrenChange() {
    const tabItems = this.tabs;
    tabItems.forEach((tab) => {
      const propertiesToInherit = {
        layout: this.layout,
        small: this.small,
        rounded: this.rounded,
        placement: this.placement,
        iconOnly: tabItems.every((t) => !t.label && !!t.icon)
      };
      Object.assign(tab, propertiesToInherit);
    });
    this.overflowMenuItems = Array.from(tabItems).map((item) => ({
      tabKey: item.tabKey,
      label: item.label || item.textContent || "",
      icon: item.icon,
      disabled: item.disabled
    }));
    const isTabSelected = tabItems.some((tab) => tab.selected);
    if (!isTabSelected && tabItems.length > 0 && hasKeyboardMode()) {
      tabItems[0].focus();
      this.emitTabChangeEvent(tabItems[0].tabKey);
    }
  }
  onComponentResize() {
    const tabContainer = this.tabsRef.current;
    if (!tabContainer) {
      return;
    }
    readTask(() => {
      const isOverflowing = tabContainer.scrollWidth > tabContainer.clientWidth;
      this.isTabsOverflow = isOverflowing;
    });
  }
  onTabClick(event) {
    if (event.defaultPrevented) {
      return;
    }
    if (event.detail.tabKey === void 0) {
      return;
    }
    this.emitTabChangeEvent(event.detail.tabKey);
  }
  emitTabChangeEvent(tabKey, oldTabKey = this.activeTabKey) {
    emitEvent(() => {
      const newKey = this.setTabActive(tabKey);
      return {
        new: newKey,
        old: oldTabKey
      };
    }, this.tabChange, (oldKey) => this.setTabActive(oldKey));
  }
  onTabsNavigate(event) {
    if (event.target instanceof HTMLElement && event.target.getAttribute("role") === "tablist") {
      return;
    }
    const tabs = this.tabs.filter((tab) => !tab.disabled);
    let currentIndex = tabs.findIndex((tab) => tab.selected);
    if (this.keyboardNavigation === "manual") {
      currentIndex = tabs.findIndex((tab) => tab === document.activeElement);
    }
    const activeTab = (tab) => {
      tab.focus();
      if (this.keyboardNavigation === "automatic") {
        this.emitTabChangeEvent(tab.tabKey);
      }
    };
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      event.preventDefault();
      if (currentIndex === -1) {
        return;
      }
      const indexOffset = event.key === "ArrowRight" ? 1 : -1;
      const nextIndex = (currentIndex + indexOffset + tabs.length) % tabs.length;
      const nextTab = tabs[nextIndex];
      activeTab(nextTab);
    }
    if (event.key === "Home") {
      event.preventDefault();
      activeTab(tabs[0]);
    }
    if (event.key === "End") {
      event.preventDefault();
      activeTab(tabs[tabs.length - 1]);
    }
  }
  render() {
    return h(Host, { key: "c210590f18fcf6efd42a139db5ce1eb03296d2f6", onTabClick: (event) => this.onTabClick(event), class: {
      small: this.small
    } }, h("div", { key: "cfec111e5b81dd5fb453c3ee9b2e7117e0fa4251", ref: this.tabsContainerRef, class: {
      "tabs-container": true,
      top: this.placement === "top",
      bottom: this.placement === "bottom"
    } }, h("div", { key: "6bd466e4e158e4a64b0b321557fbd035160be59c", class: {
      "overflow-shadow-container": true,
      "overflow-shadow": this.isTabsOverflow
    } }, h("div", { key: "035ced42c1a8a70c6d29c2779bfef964254bd045", role: "tablist", ...this.inheritAriaAttributes, ref: this.tabsRef, class: {
      tabs: true,
      "tabs-stretched": this.layout === "stretched"
    }, tabIndex: this.isTabsOverflow ? 0 : -1, onKeyDown: (event) => this.onTabsNavigate(event) }, h("slot", { key: "6a9af6871af53b4525d016ffed7a192918d85dbe" }))), this.isTabsOverflow && this.layout !== "stretched" && h("ix-dropdown-button", { key: "bf5ec6ca64618b24ac47eaa99db156628fda462a", ariaLabel: this.ariaLabelMoreTabs, icon: iconMoreMenu, class: {
      "tabs-context-menu": true
    }, variant: "subtle-tertiary" }, this.overflowMenuItems.map((item) => h("ix-dropdown-item", { key: item.tabKey, checked: item.tabKey === this.activeTabKey, icon: item.icon, label: item.label, disabled: item.disabled, onClick: () => this.activeTabKey = item.tabKey })))));
  }
  static get delegatesFocus() {
    return true;
  }
  static get watchers() {
    return {
      "role": [{
        "ariaAttributeChanged": 0
      }],
      "aria-activedescendant": [{
        "ariaAttributeChanged": 0
      }],
      "aria-atomic": [{
        "ariaAttributeChanged": 0
      }],
      "aria-autocomplete": [{
        "ariaAttributeChanged": 0
      }],
      "aria-braillelabel": [{
        "ariaAttributeChanged": 0
      }],
      "aria-brailleroledescription": [{
        "ariaAttributeChanged": 0
      }],
      "aria-busy": [{
        "ariaAttributeChanged": 0
      }],
      "aria-checked": [{
        "ariaAttributeChanged": 0
      }],
      "aria-colcount": [{
        "ariaAttributeChanged": 0
      }],
      "aria-colindex": [{
        "ariaAttributeChanged": 0
      }],
      "aria-colindextext": [{
        "ariaAttributeChanged": 0
      }],
      "aria-colspan": [{
        "ariaAttributeChanged": 0
      }],
      "aria-controls": [{
        "ariaAttributeChanged": 0
      }],
      "aria-current": [{
        "ariaAttributeChanged": 0
      }],
      "aria-describedby": [{
        "ariaAttributeChanged": 0
      }],
      "aria-description": [{
        "ariaAttributeChanged": 0
      }],
      "aria-details": [{
        "ariaAttributeChanged": 0
      }],
      "aria-disabled": [{
        "ariaAttributeChanged": 0
      }],
      "aria-errormessage": [{
        "ariaAttributeChanged": 0
      }],
      "aria-expanded": [{
        "ariaAttributeChanged": 0
      }],
      "aria-flowto": [{
        "ariaAttributeChanged": 0
      }],
      "aria-haspopup": [{
        "ariaAttributeChanged": 0
      }],
      "aria-hidden": [{
        "ariaAttributeChanged": 0
      }],
      "aria-invalid": [{
        "ariaAttributeChanged": 0
      }],
      "aria-keyshortcuts": [{
        "ariaAttributeChanged": 0
      }],
      "aria-label": [{
        "ariaAttributeChanged": 0
      }],
      "aria-labelledby": [{
        "ariaAttributeChanged": 0
      }],
      "aria-level": [{
        "ariaAttributeChanged": 0
      }],
      "aria-live": [{
        "ariaAttributeChanged": 0
      }],
      "aria-multiline": [{
        "ariaAttributeChanged": 0
      }],
      "aria-multiselectable": [{
        "ariaAttributeChanged": 0
      }],
      "aria-orientation": [{
        "ariaAttributeChanged": 0
      }],
      "aria-owns": [{
        "ariaAttributeChanged": 0
      }],
      "aria-placeholder": [{
        "ariaAttributeChanged": 0
      }],
      "aria-posinset": [{
        "ariaAttributeChanged": 0
      }],
      "aria-pressed": [{
        "ariaAttributeChanged": 0
      }],
      "aria-readonly": [{
        "ariaAttributeChanged": 0
      }],
      "aria-relevant": [{
        "ariaAttributeChanged": 0
      }],
      "aria-required": [{
        "ariaAttributeChanged": 0
      }],
      "aria-roledescription": [{
        "ariaAttributeChanged": 0
      }],
      "aria-rowcount": [{
        "ariaAttributeChanged": 0
      }],
      "aria-rowindex": [{
        "ariaAttributeChanged": 0
      }],
      "aria-rowindextext": [{
        "ariaAttributeChanged": 0
      }],
      "aria-rowspan": [{
        "ariaAttributeChanged": 0
      }],
      "aria-selected": [{
        "ariaAttributeChanged": 0
      }],
      "aria-setsize": [{
        "ariaAttributeChanged": 0
      }],
      "aria-sort": [{
        "ariaAttributeChanged": 0
      }],
      "aria-valuemax": [{
        "ariaAttributeChanged": 0
      }],
      "aria-valuemin": [{
        "ariaAttributeChanged": 0
      }],
      "aria-valuenow": [{
        "ariaAttributeChanged": 0
      }],
      "aria-valuetext": [{
        "ariaAttributeChanged": 0
      }],
      "activeTabKey": [{
        "onActiveTabChange": 0
      }]
    };
  }
};
Tabs.style = tabsCss();
export {
  Pill as ix_pill,
  TabItem as ix_tab_item,
  TabSet as ix_tab_set,
  Tabs as ix_tabs
};
