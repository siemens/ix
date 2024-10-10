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
  onShowAllClick: (e: MouseEvent) => void;
  showAllLabel: string;
  showAllCounter: number;
  hideShowAll: boolean;
}) {
  if (props.label === '') {
    return null;
  }

  return (
    <div class="CardList_Title">
      <ix-icon-button
        ghost
        icon={'chevron-down'}
        onClick={props.onClick}
        color="color-primary"
        class={{
          CardList__Title__Button: true,
          CardList__Title__Button__Collapsed: props.isCollapsed,
        }}
      ></ix-icon-button>
      <ix-typography class="CardList_Title__Label" format="body-lg">
        {props.label}
      </ix-typography>
      {!props.hideShowAll && (
        <ix-button
          class="CardList__Title__Show__All"
          ghost
          onClick={props.onShowAllClick}
        >
          <span>{props.showAllLabel}</span>
          <span>
            {!isNaN(props.showAllCounter) ? ` (${props.showAllCounter})` : null}
          </span>
        </ix-button>
      )}
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
  @Prop() label?: string;

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
   * Overwrite the default show all count.
   * */
  @Prop() showAllCount?: number;

  /**
   * Suppress the overflow handling of child elements
   */
  @Prop() suppressOverflowHandling = false;

  /**
   * Hide the show all button
   *
   * @since 2.2.0
   */
  @Prop() hideShowAll = false;

  /**
   * i18n Show all button
   */
  @Prop() i18nShowAll = 'Show all';

  /**
   * i18n More cards available
   */
  @Prop() i18nMoreCards = 'There are more cards available';

  /**
   * Fire event when the collapse state is changed by the user
   */
  @Event() collapseChanged!: EventEmitter<boolean>;

  /**
   * Fire event when the collapse state is changed by the user
   */
  @Event() showAllClick!: EventEmitter<{
    nativeEvent: MouseEvent;
  }>;

  /**
   * Fire event when the show more card is clicked.
   */
  @Event() showMoreCardClick!: EventEmitter<{
    nativeEvent: MouseEvent;
  }>;

  @Element() hostElement!: HTMLIxCardListElement;

  @State() private hasOverflowingElements = false;
  @State() private numberOfOverflowingElements = 0;
  @State() private numberOfAllChildElements = 0;
  @State() private leftScrollDistance = 0;
  @State() private rightScrollDistance = 0;

  private observer?: MutationObserver;

  private onCardListVisibilityToggle() {
    this.collapse = !this.collapse;
    this.collapseChanged.emit(this.collapse);
  }

  private onShowAllClick(event: MouseEvent) {
    this.showAllClick.emit({
      nativeEvent: event,
    });
  }

  private getListChildren() {
    const slot = this.hostElement.shadowRoot!.querySelector(
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
    this.hasOverflowingElements = childElements.length > this.maxVisibleCards;
    this.numberOfOverflowingElements =
      childElements.length - this.maxVisibleCards;

    this.numberOfAllChildElements = childElements.length;
    this.detectOverflow();
  }

  private registerOverflowHandler() {
    this.observer = createMutationObserver(() => {
      this.changeVisibilityOfSlotChildren();
    });

    this.observer.observe(
      this.hostElement.shadowRoot!.querySelector('.CardList__Content')!,
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
    return this.hostElement.shadowRoot!.querySelector('.CardList__Content');
  }

  private onCardListScroll() {
    this.detectOverflow();
  }

  private isShowMoreCardVisible() {
    return (
      this.suppressOverflowHandling === false && this.hasOverflowingElements
    );
  }

  private getOpacityFromScrollDistance(distance: number) {
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

  private computeMaskLayer() {
    const maxOverflowWidth = 80;
    const maskLayer = `linear-gradient(
      90deg,
      transparent 0px,
      black ${
        maxOverflowWidth *
        (this.getOpacityFromScrollDistance(this.leftScrollDistance) > 0 ? 1 : 0)
      }px,
      black calc(100% - ${
        maxOverflowWidth *
        (this.getOpacityFromScrollDistance(this.rightScrollDistance) > 0
          ? 1
          : 0)
      }px),
      transparent 100%
    )`;
    return {
      '--ix-card-list-overflow': maskLayer,
    };
  }

  @Listen('resize', { target: 'window' })
  private detectOverflow() {
    const { clientWidth, scrollWidth, scrollLeft } = this.listElement!;

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
    return (
      <Host>
        <CardListTitle
          isCollapsed={this.collapse}
          label={this.label || ''}
          showAllLabel={this.i18nShowAll}
          showAllCounter={
            this.showAllCount === undefined
              ? this.numberOfAllChildElements
              : this.showAllCount
          }
          onClick={() => this.onCardListVisibilityToggle()}
          onShowAllClick={(e) => this.onShowAllClick(e)}
          hideShowAll={this.hideShowAll}
        ></CardListTitle>
        <div
          class={{
            CardList__Overflow: true,
          }}
          style={this.computeMaskLayer()}
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
            <slot
              onSlotchange={() => this.changeVisibilityOfSlotChildren()}
            ></slot>
            {this.isShowMoreCardVisible() ? (
              <ix-card
                class={{
                  Show__All__Card: true,
                }}
                onClick={(event) =>
                  this.showMoreCardClick.emit({
                    nativeEvent: event,
                  })
                }
              >
                <ix-card-content class="Show__All__Card__Content">
                  <ix-icon
                    name={'more-menu'}
                    size={'32'}
                    class={'Show__All__Card__Icon'}
                  ></ix-icon>
                  <span class="Show__All__Card__Text">
                    {this.i18nMoreCards} ({this.numberOfOverflowingElements})
                  </span>
                </ix-card-content>
              </ix-card>
            ) : null}
          </div>
        </div>
      </Host>
    );
  }
}
