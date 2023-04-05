import { Component, Event, EventEmitter, h, Host, State } from '@stencil/core';

let accordingControlId = 0;
const getAriaControlsId = (prefix: string = 'expand-content') => {
  return [prefix, accordingControlId++].join('-');
};

@Component({
  tag: 'ix-card-accordion',
  styleUrl: 'card-accordion.scss',
  scoped: true,
})
export class CardAccordion {
  /**
   * @internal
   */
  @Event() cardAccordingExpandChanged: EventEmitter<boolean>;

  @State() expandContent = false;

  onExpandActionClick(event: Event) {
    event.preventDefault();
    this.expandContent = !this.expandContent;
    this.cardAccordingExpandChanged.emit(this.expandContent);
  }

  render() {
    return (
      <Host
        slot="card-accordion"
        class={{
          show: this.expandContent,
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
        >
          <ix-icon
            name="chevron-right-small"
            class={{
              'expand-icon': true,
              show: this.expandContent,
            }}
            color={this.expandContent ? 'color-dynamic' : 'color-primary'}
          ></ix-icon>
        </button>
        <div
          class={{
            'expand-content': true,
            show: this.expandContent,
          }}
        >
          <div class={'expand-content-body'}>
            <slot></slot>
          </div>
          <div class={'expand-content-footer'}></div>
        </div>
      </Host>
    );
  }
}
