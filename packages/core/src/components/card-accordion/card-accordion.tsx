import { Component, h, Host, State } from '@stencil/core';

const SPACE_KEY = ' ';
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
  @State() expandContent = false;

  onExpandActionClick(event: Event) {
    event.preventDefault();
    this.expandContent = !this.expandContent;
  }

  render() {
    return (
      <Host
        slot="card-accordion"
        class={{
          show: this.expandContent,
        }}
      >
        <div
          tabIndex={0}
          class={{ 'expand-action': true, show: this.expandContent }}
          onClick={(event) => this.onExpandActionClick(event)}
          onKeyPress={(event) => {
            event.key === SPACE_KEY && this.onExpandActionClick(event);
          }}
          role="button"
          aria-expanded={this.expandContent}
          aria-controls={getAriaControlsId()}
        >
          <ix-icon
            name="chevron-down-small"
            class={{
              'expand-icon': true,
              show: this.expandContent,
            }}
            color="color-primary"
          ></ix-icon>
        </div>
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
