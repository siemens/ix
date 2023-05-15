import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Prop,
  State,
} from '@stencil/core';
import { createMutationObserver } from '../utils/mutation-observer';

function CardListTitle(props: {
  label: string;
  isCollapsed: boolean;
  onClick: (e: MouseEvent) => void;
  onShowMoreClick: (e: MouseEvent) => void;
  showMoreLabel: string;
  showMoreCounter: number;
}) {
  if (props.label === '') {
    return null;
  }

  return (
    <div class="CardList_Title">
      <ix-icon-button
        ghost
        icon="chevron-down"
        onClick={props.onClick}
        color="color-primary"
        class={{
          CardList__Title__Button: true,
          CardList__Title__Button__Collapsed: props.isCollapsed,
        }}
      ></ix-icon-button>
      <ix-typography variant="large-single">{props.label}</ix-typography>
      <ix-button
        class="CardList__Title__Show__More"
        ghost
        onClick={props.onShowMoreClick}
      >
        <span>{props.showMoreLabel}</span>
        <span>
          {!isNaN(props.showMoreCounter) ? `(${props.showMoreCounter})` : null}
        </span>
      </ix-button>
    </div>
  );
}

/**
 * @since 1.6.0
 */
@Component({
  tag: 'ix-card-list',
  styleUrl: 'card-list.scss',
  shadow: true,
})
export class CardList {
  /**
   * Name the card list
   */
  @Prop() label: string;

  /**
   * Collapse the list
   */
  @Prop({ mutable: true }) collapse = false;

  /**
   * List style
   */
  @Prop() listStyle: 'stack' | 'scroll' = 'stack';

  /**
   * Maximal visible cards
   *
   * @internal
   */
  @Prop() maxVisibleCards = 12;

  /**
   * Show more counter
   * */
  @Prop() showMoreCount: number;

  /**
   * Suppress the overflow handling of child elements
   */
  @Prop() suppressOverflowHandling = false;

  /**
   * i18n Show more button
   */
  @Prop() i18nShowMore = 'Show more';

  /**
   * Fire event when the collapse state is changed by the user
   */
  @Event() collapseChanged: EventEmitter<boolean>;

  /**
   * Fire event when the collapse state is changed by the user
   */
  @Event() showMoreClick: EventEmitter<{
    nativeEvent: MouseEvent;
  }>;

  @Element() hostElement: HTMLIxCardListElement;

  @State() private showOverflowRight = false;
  @State() private showOverflowLeft = false;

  private observer: MutationObserver;

  private onCardListVisibilityToggle() {
    this.collapse = !this.collapse;
    this.collapseChanged.emit(this.collapse);
  }

  private onShowMoreClick(event: MouseEvent) {
    this.showMoreClick.emit({
      nativeEvent: event,
    });
  }

  private getListChildren() {
    const slot = this.hostElement.shadowRoot.querySelector(
      '.CardList__Content > slot'
    ) as HTMLSlotElement;
    return slot.assignedElements({ flatten: true });
  }

  private changeVisibilityOfSlotChildren() {
    const childElements = this.getListChildren();
    childElements.forEach((element, index) => {
      if (element instanceof HTMLElement) {
        if (index > this.maxVisibleCards - 1) {
          element.classList.add('d-none');
          return;
        }
        element.classList.remove('d-none');
      }
    });
    this.detectOverflow();
  }

  private registerOverflowHandler() {
    this.observer = createMutationObserver(() => {
      this.changeVisibilityOfSlotChildren();
    });

    this.observer.observe(
      this.hostElement.shadowRoot.querySelector('.CardList__Content'),
      {
        childList: true,
        subtree: true,
      }
    );

    requestAnimationFrame(() => {
      this.changeVisibilityOfSlotChildren();
    });
  }

  private shouldHandleOverflow() {
    if (this.suppressOverflowHandling) {
      return false;
    }
    if (this.listStyle === 'stack' || this.listStyle === 'scroll') {
      return true;
    }
  }

  private get listElement() {
    return this.hostElement.shadowRoot.querySelector('.CardList__Content');
  }

  private onCardListScroll() {
    this.detectOverflow();
  }

  @Listen('resize', { target: 'window' })
  private detectOverflow() {
    console.log(
      this.listElement.clientWidth,
      this.listElement.scrollWidth,
      this.listElement.scrollLeft
    );

    const { clientWidth, scrollWidth, scrollLeft } = this.listElement;

    const isCompleteRightScrolled = scrollWidth - scrollLeft === clientWidth;
    const isScrolling =
      this.listElement.scrollWidth > this.listElement.clientWidth;
    console.log('is right', isCompleteRightScrolled);

    this.showOverflowRight = isScrolling && !isCompleteRightScrolled;
    this.showOverflowLeft = isScrolling && scrollLeft > 0;
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
    return (
      <Host>
        <CardListTitle
          isCollapsed={this.collapse}
          label={this.label}
          showMoreLabel={this.i18nShowMore}
          showMoreCounter={this.showMoreCount}
          onClick={() => this.onCardListVisibilityToggle()}
          onShowMoreClick={(e) => this.onShowMoreClick(e)}
        ></CardListTitle>
        <div
          class={{
            CardList__Overflow: true,
            CardList__Overflow__Right: this.showOverflowRight,
            CardList__Overflow__Left: this.showOverflowLeft,
          }}
        >
          <div
            class={{
              CardList__Content: true,
              CardList__Content__Collapsed: this.collapse,
              CardList__Style__Flexbox__Scroll: this.listStyle === 'stack',
              CardList__Style__Infinite__Scroll: this.listStyle === 'scroll',
            }}
            onScroll={() => this.onCardListScroll()}
          >
            <slot onSlotchange={console.log}></slot>
          </div>
        </div>
      </Host>
    );
  }
}
