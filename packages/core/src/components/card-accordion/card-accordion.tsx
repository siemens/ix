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

let accordionControlId = 0;
const getAriaControlsId = (prefix: string = 'expand-content') => {
  return [prefix, accordionControlId++].join('-');
};

export type CardAccordionExpandChangeEvent = {
  expand: boolean;
  nativeEvent: Event;
};

/**
 * @since 1.6.0
 */
@Component({
  tag: 'ix-card-accordion',
  styleUrl: 'card-accordion.scss',
  shadow: true,
})
export class CardAccordion {
  /**
   * Collapse the card
   * @since 2.1.0
   */
  @Prop() collapse = false;

  @Element() hostElement: HTMLIxCardAccordionElement;

  /**
   * @internal
   */
  @Event() accordionExpand: EventEmitter<CardAccordionExpandChangeEvent>;

  @State() expandContent = false;

  @Watch('collapse')
  onInitialExpandChange() {
    this.expandContent = !this.collapse;
  }

  get expandedContent() {
    return this.hostElement.shadowRoot.querySelector('.expand-content');
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
      const rect = this.expandedContent.getBoundingClientRect();
      if (rect.bottom > window.innerHeight) {
        this.hostElement.shadowRoot
          .querySelector('.expand-content')
          .scrollIntoView(false);
      }
    }, 150);
  }

  componentWillLoad() {
    this.onInitialExpandChange();
  }

  render() {
    return (
      <Host slot="card-accordion">
        <button
          tabIndex={0}
          class={{ 'expand-action': true, show: this.expandContent }}
          onClick={(event) => this.onExpandActionClick(event)}
          role="button"
          type="button"
          aria-expanded={this.expandContent}
          aria-controls={getAriaControlsId()}
        >
          <ix-icon
            name={'chevron-right-small'}
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
