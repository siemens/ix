import { r as registerInstance, c as createEvent, g as getElement, h, H as Host, F as Fragment } from "./global-Do6maBom.js";
import { c as createMutationObserver } from "./mutation-observer-CX81WQtk-DFcmhOTk.js";
import { e as iconMoreMenu, v as iconChevronUp } from "./index-BeX6RWvV-CXzUIwMU.js";
import { r as requestAnimationFrameNoNgZone } from "./requestAnimationFrame-BEuV0Xpe-CBtvTq-Q.js";
const cardListCss = () => `@charset "UTF-8";:host{--ix-card-list-title-button--transition-duration:var(--theme-default-time);--ix-card-list-content--transition-duration:var(--theme-default-time);--ix-card-list-show-all--border-color:var(--si-sys-text-accent);--ix-card-list-show-all--color:var(--si-sys-text-accent);--ix-card-list-show-all--outline-color--focus:var(--si-sys-effects-focus);--ix-card-list-show-all--focus-outline-offset:var(     --theme-focus-outline-offset   );--ix-card-list-show-all--background--hover:var(--si-sys-background-hover);--ix-card-list-show-all--background--active:var(--si-sys-background-active)}:host{display:flex;position:relative;flex-direction:column;align-items:flex-start;margin:0.5rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-border-4);--ix-scrollbar-background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .CardList_Title{display:flex;position:relative;height:1.5rem;align-items:center;width:100%;margin-bottom:1rem}:host .CardList_Title__Label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .CardList__Title__Button{margin-right:1rem;transition:var(--ix-card-list-title-button--transition-duration) transform ease-in-out}:host .CardList__Title__Button__Collapsed{transform:rotate(-180deg)}:host .CardList__Title__Show__All{align-self:center;margin-left:auto;margin-right:0px;flex-shrink:0}:host .CardList__Content{display:flex;position:relative;height:calc(100% - 1.5rem);width:100%;gap:1.5rem;transition:var(--ix-card-list-content--transition-duration) ease-in-out;overflow:auto}:host .CardList__Content__Collapsed{min-height:0px;max-height:0px;overflow:hidden;opacity:0}:host .CardList__Style__Flexbox__Scroll{flex-wrap:wrap}:host .CardList__Style__Infinite__Scroll{flex-wrap:nowrap;-ms-overflow-style:none;scrollbar-width:none}:host .CardList__Style__Infinite__Scroll::-webkit-scrollbar{display:none}:host .CardList__Overflow{display:block;position:relative;height:100%;width:100%;pointer-events:all;-webkit-mask-image:var(--ix-card-list-overflow, none);mask-image:var(--ix-card-list-overflow, none)}:host .Show__All__Card{display:flex;position:relative;align-self:flex-start;justify-self:center;max-width:11.25rem;min-width:11.25rem;width:11.25rem;min-height:11.25rem;max-height:11.25rem;height:11.25rem;--ix-card-border-color:var(--ix-card-list-show-all--border-color);color:var(--ix-card-list-show-all--color)}:host .Show__All__Card:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--ix-card-list-show-all--outline-color--focus);outline-offset:var(--ix-card-list-show-all--focus-outline-offset)}:host .CardList__Style__Infinite__Scroll .Show__All__Card{margin-top:2.375rem}:host .CardList__Style__Flexbox__Scroll .Show__All__Card{margin-bottom:2.375rem}:host .Show__All__Card:hover{background-color:var(--ix-card-list-show-all--background--hover)}:host .Show__All__Card:active{background-color:var(--ix-card-list-show-all--background--active)}:host .Show__All__Card__Content{display:flex;justify-content:center;align-items:center;height:100%}:host .Show__All__Card__Icon{display:flex;position:absolute;height:4rem;width:4rem;justify-content:center;align-items:center}:host .Show__All__Card__Text{margin-bottom:0px;margin-top:auto}::slotted(.display-none){display:none !important}`;
function CardListTitle(props) {
  if (!props.label) {
    return null;
  }
  return h("div", { class: "CardList_Title" }, h("ix-icon-button", { variant: "subtle-tertiary", icon: iconChevronUp, onClick: props.onClick, iconColor: "--si-sys-text-primary", class: {
    CardList__Title__Button: true,
    CardList__Title__Button__Collapsed: props.isCollapsed
  }, "aria-label": props.ariaLabelExpandButton }), h("ix-typography", { class: "CardList_Title__Label", format: "body-lg" }, props.label), !props.hideShowAll && h("ix-button", { class: "CardList__Title__Show__All", variant: "tertiary", onClick: props.onShowAllClick }, props.showLess ? props.labelShowLess : h(Fragment, null, h("span", null, props.showAllLabel), h("span", null, !isNaN(props.showAllCounter) ? ` (${props.showAllCounter})` : null))));
}
const CardList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.collapseChanged = createEvent(this, "collapseChanged", 7);
    this.showAllClick = createEvent(this, "showAllClick", 7);
    this.showMoreCardClick = createEvent(this, "showMoreCardClick", 7);
  }
  /**
   * ARIA label for the card's expand button.
   * Will be set as aria-label on the nested HTML button element
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
    return h(Host, { key: "d89a5d97fabbc1d69f6c6e625d0bd0a29ffd14b5" }, h(CardListTitle, { key: "1dc3ba38c472b762a285e10717a1de5801042484", isCollapsed: this.collapse, label: this.label, showAllLabel: this.i18nShowAll, showAllCounter: this.showAllCount === void 0 ? this.numberOfAllChildElements : this.showAllCount, showLess: this.isShowingAll, labelShowLess: this.i18nShowLess, onClick: () => this.onCardListVisibilityToggle(), onShowAllClick: (e) => this.onShowAllClick(e), hideShowAll: this.hideShowAll }), h("div", { key: "dd547f27c65b57cb720da965fab1087a3d87788d", class: {
      CardList__Overflow: true
    }, style: this.computeMaskLayer() }, h("div", { key: "b4fb3e461b02bd3f28255158a17ae6b0c949b213", class: {
      CardList__Content: true,
      CardList__Content__Collapsed: this.collapse,
      CardList__Style__Flexbox__Scroll: this.listStyle === "stack",
      CardList__Style__Infinite__Scroll: this.listStyle === "scroll"
    }, onScroll: () => this.onCardListScroll() }, h("slot", { key: "ba3af01cb1e523c09199328a3fc37ae313f1f6b1", onSlotchange: () => {
      this.changeVisibilityOfSlotChildren();
    } }), this.isShowMoreCardVisible() ? h("ix-card", { role: "button", tabindex: "0", "aria-label": `${this.i18nMoreCards} (${this.numberOfOverflowingElements})`, class: {
      Show__All__Card: true
    }, onClick: (event) => this.onShowMoreCardClick(event), onKeyDown: (event) => this.onShowMoreCardClick(event) }, h("ix-card-content", null, h("div", { class: "Show__All__Card__Content" }, h("ix-icon", { name: iconMoreMenu, size: "32", class: "Show__All__Card__Icon" }), h("span", { class: "Show__All__Card__Text" }, this.i18nMoreCards, " (", this.numberOfOverflowingElements, ")")))) : null)));
  }
};
CardList.style = cardListCss();
export {
  CardList as ix_card_list
};
