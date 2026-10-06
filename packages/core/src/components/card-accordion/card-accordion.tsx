import { iconChevronDownSmall } from '@siemens/ix-icons/icons';
import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import type {
  CardAccordionExpandChangeEvent,
  CardAccordionVariant,
} from './card-accordion.types';

let accordionControlId = 0;
const getAriaControlsId = (prefix: string = 'expand-content') => {
  return [prefix, accordionControlId++].join('-');
};

/**
 * @slot default - Accordion content.
 */
@Component({
  tag: 'ix-card-accordion',
  styleUrl: 'card-accordion.scss',
  shadow: true,
})
export class CardAccordion {
  /**
   * ARIA label for the card's expand button.
   * Will be set as aria-label on the nested HTML button element
   *
   * @since 3.2.0
   */
  @Prop() ariaLabelExpandButton?: string;

  /**
   * Collapse the card
   */
  @Prop() collapse = false;

  /**
   * Accordion status variant (aligned with the parent card)
   *
   * @since 4.0.0
   */
  @Prop() variant: CardAccordionVariant = 'default';

  /**
   * Match the parent card outline mode.
   * When `false`, uses filled accordion chrome.
   *
   * @since 6.0.0
   */
  @Prop() outline: boolean = true;

  @Element() hostElement!: HTMLIxCardAccordionElement;

  /**
   * @internal
   */
  @Event() accordionExpand!: EventEmitter<CardAccordionExpandChangeEvent>;

  @State() expandContent = false;

  @Watch('collapse')
  onInitialExpandChange() {
    this.expandContent = !this.collapse;
  }

  get expandedContent() {
    return this.hostElement.shadowRoot!.querySelector('.expand-content');
  }

  onExpandActionClick(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.expandContent = !this.expandContent;
    this.accordionExpand.emit({
      expand: this.expandContent,
      nativeEvent: event,
    });

    if (this.expandContent) {
      this.scrollExpandedContentIntoView();
    }
  }

  private scrollExpandedContentIntoView() {
    setTimeout(() => {
      if (!this.expandedContent) {
        return;
      }
      const rect = this.expandedContent.getBoundingClientRect();
      if (rect.bottom > window.innerHeight) {
        this.hostElement
          .shadowRoot!.querySelector('.expand-content')!
          .scrollIntoView(false);
      }
    }, 150);
  }

  componentWillLoad() {
    this.onInitialExpandChange();
  }

  render() {
    return (
      <Host
        slot="card-accordion"
        class={{
          outline: this.outline,
          [`variant-${this.variant}`]: true,
        }}
      >
        <button
          tabIndex={0}
          class={{ 'expand-action': true, show: this.expandContent }}
          onClick={(event) => this.onExpandActionClick(event)}
          role="button"
          type="button"
          aria-expanded={this.expandContent}
          aria-controls={getAriaControlsId()}
          aria-label={this.ariaLabelExpandButton}
        >
          <ix-icon
            name={iconChevronDownSmall}
            class={{
              'expand-icon': true,
              show: this.expandContent,
            }}
          ></ix-icon>
        </button>
        <div
          class={{
            'expand-content': true,
            show: this.expandContent,
          }}
        >
          <div class="expand-content-inner">
            <div class="expand-content-body">
              <slot></slot>
            </div>
            <div class="expand-content-footer"></div>
          </div>
        </div>
      </Host>
    );
  }
}
