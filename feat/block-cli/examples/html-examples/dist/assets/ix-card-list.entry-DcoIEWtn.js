import { a as registerInstance, c as createEvent, g as getElement, h, H as Host, F as Fragment } from "./global-DUJ9DtiD.js";
import { c as createMutationObserver } from "./mutation-observer-CX81WQtk-DFcmhOTk.js";
import { I as iconMoreMenu, e as iconChevronDown } from "./index-Cl7fhG1I-C77BCFLW.js";
import { r as requestAnimationFrameNoNgZone } from "./requestAnimationFrame-BEuV0Xpe-CBtvTq-Q.js";
const cardListCss = () => `:host{display:flex;position:relative;flex-direction:column;align-items:flex-start;margin:0.5rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .CardList_Title{display:flex;position:relative;height:1.5rem;align-items:center;width:100%;margin-bottom:1rem}:host .CardList_Title__Label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .CardList__Title__Button{margin-right:1rem;transition:var(--theme-default-time) transform ease-in-out}:host .CardList__Title__Button__Collapsed{transform:rotate(-90deg)}:host .CardList__Title__Show__All{align-self:center;margin-left:auto;margin-right:0px;flex-shrink:0}:host .CardList__Content{display:flex;position:relative;height:calc(100% - 1.5rem);width:100%;gap:1.5rem;transition:var(--theme-default-time) ease-in-out;overflow:auto}:host .CardList__Content__Collapsed{min-height:0px;max-height:0px;overflow:hidden;opacity:0}:host .CardList__Style__Flexbox__Scroll{flex-wrap:wrap}:host .CardList__Style__Infinite__Scroll{flex-wrap:nowrap;-ms-overflow-style:none;scrollbar-width:none}:host .CardList__Style__Infinite__Scroll::-webkit-scrollbar{display:none}:host .CardList__Overflow{display:block;position:relative;height:100%;width:100%;pointer-events:all;-webkit-mask-image:var(--ix-card-list-overflow, none);mask-image:var(--ix-card-list-overflow, none)}:host .Show__All__Card{display:flex;position:relative;align-self:flex-start;justify-self:center;max-width:11.25rem;min-width:11.25rem;width:11.25rem;min-height:11.25rem;max-height:11.25rem;height:11.25rem;--ix-card-border-color:var(--theme-color-primary);color:var(--theme-color-primary)}:host .CardList__Style__Infinite__Scroll .Show__All__Card{margin-top:2.375rem}:host .CardList__Style__Flexbox__Scroll .Show__All__Card{margin-bottom:2.375rem}:host .Show__All__Card:hover{background-color:var(--theme-color-ghost--hover)}:host .Show__All__Card:active{background-color:var(--theme-color-ghost--active)}:host .Show__All__Card__Content{display:flex;justify-content:center;align-items:center;height:100%}:host .Show__All__Card__Icon{display:flex;position:absolute;height:4rem;width:4rem;justify-content:center;align-items:center}:host .Show__All__Card__Text{margin-bottom:0px;margin-top:auto}::slotted(.display-none){display:none !important}`;
function CardListTitle(props) {
  if (!props.label) {
    return null;
  }
  return h("div", { class: "CardList_Title" }, h("ix-icon-button", { variant: "tertiary", icon: iconChevronDown, onClick: props.onClick, iconColor: "color-primary", class: {
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
  handleClick(emitter, event) {
    const { defaultPrevented } = emitter.emit({
      nativeEvent: event
    });
    if (defaultPrevented) {
      return;
    }
    this.isShowingAll = !this.isShowingAll;
    this.changeVisibilityOfSlotChildren();
  }
  onShowAllClick(event) {
    this.handleClick(this.showAllClick, event);
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
    return h(Host, { key: "580ab3e8ff3940f1820fb698bc8099c0fbec8454" }, h(CardListTitle, { key: "da36f7190b105ed0a4167047504a91121d89395b", isCollapsed: this.collapse, label: this.label, showAllLabel: this.i18nShowAll, showAllCounter: this.showAllCount === void 0 ? this.numberOfAllChildElements : this.showAllCount, showLess: this.isShowingAll, labelShowLess: this.i18nShowLess, onClick: () => this.onCardListVisibilityToggle(), onShowAllClick: (e) => this.onShowAllClick(e), hideShowAll: this.hideShowAll }), h("div", { key: "70e8784c84b4a5c950ed8bac50e1a1f8ed7a3962", class: {
      CardList__Overflow: true
    }, style: this.computeMaskLayer() }, h("div", { key: "bf40a564ce041f8fc910227fa7f368e0ac5dd4ca", class: {
      CardList__Content: true,
      CardList__Content__Collapsed: this.collapse,
      CardList__Style__Flexbox__Scroll: this.listStyle === "stack",
      CardList__Style__Infinite__Scroll: this.listStyle === "scroll"
    }, onScroll: () => this.onCardListScroll() }, h("slot", { key: "0491a8190c35dbe7b790562180c5e7002303d23d", onSlotchange: () => {
      this.changeVisibilityOfSlotChildren();
    } }), this.isShowMoreCardVisible() ? h("ix-card", { class: {
      Show__All__Card: true
    }, onClick: (event) => {
      this.handleClick(this.showMoreCardClick, event);
    } }, h("ix-card-content", null, h("div", { class: "Show__All__Card__Content" }, h("ix-icon", { name: iconMoreMenu, size: "32", class: "Show__All__Card__Icon" }), h("span", { class: "Show__All__Card__Text" }, this.i18nMoreCards, " (", this.numberOfOverflowingElements, ")")))) : null)));
  }
};
CardList.style = cardListCss();
export {
  CardList as ix_card_list
};
