import { r as registerInstance, c as createEvent, g as getElement, h, H as Host, F as Fragment } from "./global-CU4RCWGK.js";
import { c as createMutationObserver } from "./mutation-observer-CX81WQtk-DFcmhOTk.js";
import { e as iconMoreMenu, v as iconChevronUp } from "./index-BeX6RWvV-CXzUIwMU.js";
import { r as requestAnimationFrameNoNgZone } from "./requestAnimationFrame-BEuV0Xpe-CBtvTq-Q.js";
const cardListCss = () => `@charset "UTF-8";:host{--ix-card-list-show-all--border-color:var(--si-sys-color-text-accent);--ix-card-list-show-all--color:var(--si-sys-color-text-accent);--ix-card-list-show-all--outline-color--focus:var(--si-sys-color-effects-focus);--ix-card-list-show-all--background--hover:var(--si-sys-color-background-hover);--ix-card-list-show-all--background--active:var(--si-sys-color-background-selected)}:host{--ix-card-list-title-button--transition-duration:var(--theme-default-time);--ix-card-list-content--transition-duration:var(--theme-default-time);--ix-card-list-show-all--outline-width--focus:var(--si-sys-sizing-border-width-default);--ix-card-list-show-all--focus-outline-offset:var(--si-sys-sizing-focus-ring-offset);--ix-card-list-title--height:var(--si-sys-sizing-size-70);--ix-card-list--margin:var(--si-sys-sizing-spacing-y-40) var(--si-sys-sizing-spacing-x-40);--ix-card-list-title--margin-bottom:var(--si-sys-sizing-spacing-y-60);--ix-card-list-title-button--margin-right:var(--si-sys-sizing-spacing-x-60);--ix-card-list-content--gap:var(--si-sys-sizing-spacing-x-80);--ix-card-list-show-all-card--max-width:calc(     var(--si-sys-sizing-size-150) + var(--si-sys-sizing-spacing-x-70)   );--ix-card-list-show-all-card--min-width:calc(     var(--si-sys-sizing-size-150) + var(--si-sys-sizing-spacing-x-70)   );--ix-card-list-show-all-card--width:calc(     var(--si-sys-sizing-size-150) + var(--si-sys-sizing-spacing-x-70)   );--ix-card-list-show-all-card--min-height:calc(     var(--si-sys-sizing-size-150) + var(--si-sys-sizing-spacing-y-70)   );--ix-card-list-show-all-card--max-height:calc(     var(--si-sys-sizing-size-150) + var(--si-sys-sizing-spacing-y-70)   );--ix-card-list-show-all-card--height:calc(     var(--si-sys-sizing-size-150) + var(--si-sys-sizing-spacing-y-70)   );--ix-card-list-show-all-card--margin-top:calc(     var(--si-sys-sizing-spacing-y-100) - var(--si-sys-sizing-spacing-y-10)   );--ix-card-list-show-all-card--margin-bottom:calc(     var(--si-sys-sizing-spacing-y-100) - var(--si-sys-sizing-spacing-y-10)   );--ix-card-list-show-all-card-icon--icon-size:var(--si-sys-sizing-size-110)}:host{display:flex;position:relative;flex-direction:column;align-items:flex-start;margin:var(--ix-card-list--margin)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .CardList_Title{display:flex;position:relative;height:var(--ix-card-list-title--height);align-items:center;width:100%;margin-bottom:var(--ix-card-list-title--margin-bottom)}:host .CardList_Title__Label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .CardList__Title__Button{margin-right:var(--ix-card-list-title-button--margin-right);transition:var(--ix-card-list-title-button--transition-duration) transform ease-in-out}:host .CardList__Title__Button__Collapsed{transform:rotate(-180deg)}:host .CardList__Title__Show__All{align-self:center;margin-left:auto;margin-right:0px;flex-shrink:0}:host .CardList__Content{display:flex;position:relative;height:calc(100% - var(--ix-card-list-title--height));width:100%;gap:var(--ix-card-list-content--gap);transition:var(--ix-card-list-content--transition-duration) ease-in-out;overflow:auto}:host .CardList__Content__Collapsed{min-height:0px;max-height:0px;overflow:hidden;opacity:0}:host .CardList__Style__Flexbox__Scroll{flex-wrap:wrap}:host .CardList__Style__Infinite__Scroll{flex-wrap:nowrap;-ms-overflow-style:none;scrollbar-width:none}:host .CardList__Style__Infinite__Scroll::-webkit-scrollbar{display:none}:host .CardList__Overflow{display:block;position:relative;height:100%;width:100%;pointer-events:all;-webkit-mask-image:var(--ix-card-list-overflow, none);mask-image:var(--ix-card-list-overflow, none)}:host .Show__All__Card{display:flex;position:relative;align-self:center;justify-self:center;max-width:var(--ix-card-list-show-all-card--max-width);min-width:var(--ix-card-list-show-all-card--min-width);width:var(--ix-card-list-show-all-card--width);min-height:var(--ix-card-list-show-all-card--min-height);max-height:var(--ix-card-list-show-all-card--max-height);height:var(--ix-card-list-show-all-card--height);--ix-card-border-color:var(--ix-card-list-show-all--border-color);color:var(--ix-card-list-show-all--color)}:host .Show__All__Card:not(.disabled):not(:disabled):focus-visible{outline:var(--ix-card-list-show-all--outline-width--focus) solid var(--ix-card-list-show-all--outline-color--focus);outline-offset:var(--ix-card-list-show-all--focus-outline-offset)}:host .Show__All__Card__Content{display:flex;justify-content:center;align-items:center;height:100%}:host .Show__All__Card__Icon{display:flex;position:absolute;height:var(--ix-card-list-show-all-card-icon--icon-size);width:var(--ix-card-list-show-all-card-icon--icon-size);justify-content:center;align-items:center}:host .Show__All__Card__Text{margin-bottom:0;margin-top:auto;text-align:center}:host .CardList__Style__Infinite__Scroll .Show__All__Card{margin-top:var(--ix-card-list-show-all-card--margin-top)}:host ::slotted(.display-none){display:none !important}:host .CardList__Style__Flexbox__Scroll .Show__All__Card{margin-bottom:var(--ix-card-list-show-all-card--margin-bottom)}:host .CardList__Style__Flexbox__Scroll .Show__All__Card .Show__All__Card:hover{background-color:var(--ix-card-list-show-all--background--hover)}:host .CardList__Style__Flexbox__Scroll .Show__All__Card .Show__All__Card:active{background-color:var(--ix-card-list-show-all--background--active)}`;
function CardListTitle(props) {
  const defaultAriaLabel = props.isCollapsed ? "Expand card list" : "Collapse card list";
  const ariaLabel = props.ariaLabelExpandButton?.trim() ? props.ariaLabelExpandButton : defaultAriaLabel;
  if (!props.label && !props.ariaLabelExpandButton?.trim()) {
    return null;
  }
  return h("div", { class: "CardList_Title" }, h("ix-icon-button", { variant: "subtle-tertiary", icon: iconChevronUp, onClick: props.onClick, iconColor: "--si-sys-color-text-primary", class: {
    CardList__Title__Button: true,
    CardList__Title__Button__Collapsed: props.isCollapsed
  }, "aria-label": ariaLabel, ref: props.collapseButtonRef }), h("ix-typography", { class: "CardList_Title__Label", format: "body-lg" }, props.label), !props.hideShowAll && h("ix-button", { class: "CardList__Title__Show__All", variant: "tertiary", onClick: props.onShowAllClick }, props.showLess ? props.labelShowLess : h(Fragment, null, h("span", null, props.showAllLabel), h("span", null, !isNaN(props.showAllCounter) ? ` (${props.showAllCounter})` : null))));
}
const CardList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.collapseChanged = createEvent(this, "collapseChanged", 7);
    this.showAllClick = createEvent(this, "showAllClick", 7);
    this.showMoreCardClick = createEvent(this, "showMoreCardClick", 7);
  }
  /**
   * ARIA label for the card list's expand and collapse button.
   * Defaults to `Collapse card list` when expanded and `Expand card list` when
   * collapsed. A non-empty custom value overrides the label in both states.
   *
   * @since 3.2.0
   */
  ariaLabelExpandButton;
  /**
   * Name the card list
   */
  label;
  /**
   * Collapse the list
   */
  collapse = false;
  /**
   * List style
   */
  listStyle = "stack";
  /**
   * Maximal visible cards
   *
   * @internal
   */
  maxVisibleCards = 12;
  /**
   * Overwrite the default show all count.
   * */
  showAllCount;
  /**
   * Suppress the overflow handling of child elements
   */
  suppressOverflowHandling = false;
  /**
   * Hide the show all button
   */
  hideShowAll = false;
  /**
   * i18n Show all button
   */
  i18nShowAll = "Show all";
  /**
   * i18n show less button
   *
   * @since 5.0.0
   */
  i18nShowLess = "Show less";
  /**
   * i18n More cards available
   */
  i18nMoreCards = "There are more cards available";
  /**
   * Fire event when the collapse state is changed by the user
   */
  collapseChanged;
  /**
   * Fire event when the collapse state is changed by the user
   */
  showAllClick;
  /**
   * Fire event when the show more card is clicked.
   */
  showMoreCardClick;
  get hostElement() {
    return getElement(this);
  }
  isShowingAll = false;
  hasOverflowingElements = false;
  numberOfOverflowingElements = 0;
  numberOfAllChildElements = 0;
  leftScrollDistance = 0;
  rightScrollDistance = 0;
  observer;
  collapseButton;
  handleCollapseChange(isCollapsed) {
    if (isCollapsed && this.hasFocusWithinListContent()) {
      this.collapseButton?.focus();
    }
  }
  hasFocusWithinListContent() {
    return this.listElement?.matches(":focus-within") ?? false;
  }
  onCardListVisibilityToggle() {
    this.collapse = !this.collapse;
    this.collapseChanged.emit(this.collapse);
  }
  findFirstFocusable(root) {
    const focusableSelectors = 'button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const direct = root.querySelector?.(focusableSelectors);
    if (direct)
      return direct;
    for (const child of Array.from(root.querySelectorAll?.("*") ?? [])) {
      const el = child;
      if (el.shadowRoot) {
        const found = this.findFirstFocusable(el.shadowRoot);
        if (found)
          return found;
      }
    }
    return null;
  }
  focusFirstVisibleCard(startIndex = 0) {
    requestAnimationFrameNoNgZone(() => {
      requestAnimationFrameNoNgZone(() => {
        const firstNewlyVisible = this.getListChildren().slice(startIndex).find((el) => el instanceof HTMLElement && !el.classList.contains("display-none"));
        if (!firstNewlyVisible)
          return;
        const internalFocusable = firstNewlyVisible.shadowRoot ? this.findFirstFocusable(firstNewlyVisible.shadowRoot) : null;
        if (internalFocusable) {
          internalFocusable.focus({ preventScroll: false });
          return;
        }
        if (firstNewlyVisible.hasAttribute("tabindex")) {
          firstNewlyVisible.focus({ preventScroll: false });
          return;
        }
        firstNewlyVisible.setAttribute("tabindex", "-1");
        firstNewlyVisible.focus({ preventScroll: false });
        firstNewlyVisible.removeAttribute("tabindex");
      });
    });
  }
  handleClick(emitter, event) {
    const { defaultPrevented } = emitter.emit({
      nativeEvent: event
    });
    if (defaultPrevented) {
      return;
    }
    const wasShowingAll = this.isShowingAll;
    const firstNewCardIndex = this.maxVisibleCards;
    this.isShowingAll = !this.isShowingAll;
    this.changeVisibilityOfSlotChildren();
    if (!wasShowingAll) {
      this.focusFirstVisibleCard(firstNewCardIndex);
    }
  }
  onShowAllClick(event) {
    this.handleClick(this.showAllClick, event);
  }
  onShowMoreCardClick(event) {
    if (event instanceof KeyboardEvent) {
      if (event.key !== "Enter" && event.key !== " ") {
        return;
      }
      event.preventDefault();
    }
    this.handleClick(this.showMoreCardClick, event);
  }
  getListChildren() {
    const slot = this.hostElement.shadowRoot.querySelector(".CardList__Content > slot");
    return slot.assignedElements({ flatten: true });
  }
  changeVisibilityOfSlotChildren() {
    const childElements = this.getListChildren();
    const visibleLimit = this.isShowingAll ? childElements.length : this.maxVisibleCards;
    childElements.forEach((element, index) => {
      if (element instanceof HTMLElement) {
        if (index > visibleLimit - 1) {
          element.classList.add("display-none");
          return;
        }
        element.classList.remove("display-none");
      }
    });
    this.hasOverflowingElements = visibleLimit < childElements.length;
    this.numberOfOverflowingElements = childElements.length - visibleLimit;
    this.numberOfAllChildElements = childElements.length;
    requestAnimationFrameNoNgZone(() => this.detectOverflow());
  }
  registerOverflowHandler() {
    this.observer = createMutationObserver(() => {
      this.changeVisibilityOfSlotChildren();
    });
    this.observer.observe(this.hostElement.shadowRoot.querySelector(".CardList__Content"), {
      childList: true,
      subtree: true
    });
    requestAnimationFrameNoNgZone(() => {
      this.changeVisibilityOfSlotChildren();
    });
  }
  shouldHandleOverflow() {
    if (this.suppressOverflowHandling) {
      return false;
    }
    if (this.listStyle === "stack" || this.listStyle === "scroll") {
      return true;
    }
  }
  get listElement() {
    return this.hostElement.shadowRoot.querySelector(".CardList__Content");
  }
  onCardListScroll() {
    this.detectOverflow();
  }
  isShowMoreCardVisible() {
    return this.suppressOverflowHandling === false && this.hasOverflowingElements;
  }
  getOpacityFromScrollDistance(distance) {
    if (!this.listElement) {
      return 0;
    }
    if (distance === 0) {
      return 0;
    }
    if (distance > 100) {
      return 1;
    }
    return distance / 100;
  }
  computeMaskLayer() {
    const maxOverflowWidth = 80;
    const maskLayer = `linear-gradient(
      90deg,
      transparent 0px,
      black ${maxOverflowWidth * (this.getOpacityFromScrollDistance(this.leftScrollDistance) > 0 ? 1 : 0)}px,
      black calc(100% - ${maxOverflowWidth * (this.getOpacityFromScrollDistance(this.rightScrollDistance) > 0 ? 1 : 0)}px),
      transparent 100%
    )`;
    return {
      "--ix-card-list-overflow": maskLayer
    };
  }
  detectOverflow() {
    if (!this.listElement) {
      return;
    }
    const { clientWidth, scrollWidth, scrollLeft } = this.listElement;
    this.leftScrollDistance = scrollLeft;
    this.rightScrollDistance = scrollWidth - scrollLeft - clientWidth;
  }
  componentDidLoad() {
    if (this.shouldHandleOverflow()) {
      this.registerOverflowHandler();
    }
  }
  disconnectedCallback() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
  render() {
    return h(Host, { key: "742107df99e4bdad07d78635ad00d27f6c4537a5" }, h(CardListTitle, { key: "f9a166361dd71ebc70a397edb96735045e7eb1a5", isCollapsed: this.collapse, label: this.label, ariaLabelExpandButton: this.ariaLabelExpandButton, showAllLabel: this.i18nShowAll, showAllCounter: this.showAllCount === void 0 ? this.numberOfAllChildElements : this.showAllCount, showLess: this.isShowingAll, labelShowLess: this.i18nShowLess, onClick: () => this.onCardListVisibilityToggle(), onShowAllClick: (e) => this.onShowAllClick(e), hideShowAll: this.hideShowAll, collapseButtonRef: (element) => this.collapseButton = element }), h("div", { key: "9d0afd9b227815adfbec2031744d06a07e199239", class: {
      CardList__Overflow: true
    }, style: this.computeMaskLayer() }, h("div", { key: "f2e85a7bf60725acf5893182fa56bf13a205754c", class: {
      CardList__Content: true,
      CardList__Content__Collapsed: this.collapse,
      CardList__Style__Flexbox__Scroll: this.listStyle === "stack",
      CardList__Style__Infinite__Scroll: this.listStyle === "scroll"
    }, onScroll: () => this.onCardListScroll(), inert: this.collapse }, h("slot", { key: "0b5f4542e04008ab4426d7c9c4d24b6d00b656a1", onSlotchange: () => {
      this.changeVisibilityOfSlotChildren();
    } }), this.isShowMoreCardVisible() ? h("ix-card", { role: "button", tabindex: "0", "aria-label": `${this.i18nMoreCards} (${this.numberOfOverflowingElements})`, class: {
      Show__All__Card: true
    }, onClick: (event) => this.onShowMoreCardClick(event), onKeyDown: (event) => this.onShowMoreCardClick(event) }, h("ix-card-content", null, h("div", { class: "Show__All__Card__Content" }, h("ix-icon", { name: iconMoreMenu, size: "32", class: "Show__All__Card__Icon" }), h("span", { class: "Show__All__Card__Text" }, this.i18nMoreCards, " (", this.numberOfOverflowingElements, ")")))) : null)));
  }
  static get watchers() {
    return {
      "collapse": [{
        "handleCollapseChange": 0
      }]
    };
  }
};
CardList.style = cardListCss();
export {
  CardList as ix_card_list
};
