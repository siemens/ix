import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
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

@Component({
  tag: 'ix-card-list',
  styleUrl: 'card-list.scss',
  scoped: true,
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
  @Prop() listStyle: 'flexbox' | 'infinite-scroll' = 'flexbox';

  /**
   * Maximal visible cards
   *
   * @internal
   */
  @Prop() maxVisibleCards = 5;

  /**
   * Show more counter
   * */
  @Prop() showMoreCounter: number;

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
    return Array.from(
      this.hostElement.querySelectorAll('.CardList__Content > *')
    );
  }

  private checkOverflow() {
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
  }

  private registerOverflowHandler() {
    this.observer = createMutationObserver(() => this.checkOverflow());

    this.observer.observe(
      this.hostElement.querySelector('.CardList__Content'),
      {
        childList: true,
        subtree: true,
      }
    );

    this.checkOverflow();
  }

  private shouldHandleOverflow() {
    if (this.suppressOverflowHandling) {
      return false;
    }
    if (this.listStyle === 'infinite-scroll' || this.listStyle === 'flexbox') {
      return true;
    }
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
          showMoreCounter={this.showMoreCounter}
          onClick={() => this.onCardListVisibilityToggle()}
          onShowMoreClick={(e) => this.onShowMoreClick(e)}
        ></CardListTitle>
        <div
          class={{
            CardList__Content: true,
            CardList__Content__Collapsed: this.collapse,
            CardList__Style__Flexbox__Scroll: this.listStyle === 'flexbox',
            CardList__Style__Infinite__Scroll:
              this.listStyle === 'infinite-scroll',
          }}
        >
          <slot></slot>
        </div>
      </Host>
    );
  }
}
