import { Component, h, Host, State } from '@stencil/core';

@Component({
  tag: 'ix-card-list',
  styleUrl: 'card-list.scss',
  scoped: true,
})
export class CardList {
  @State() expandContent = false;

  onExpandActionClick(event: Event) {
    event.preventDefault();

    this.expandContent = !this.expandContent;
  }

  render() {
    return (
      <Host slot="expand-list">
        <div
          class={{ 'expand-action': true, show: this.expandContent }}
          onClick={(event) => this.onExpandActionClick(event)}
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
          <slot></slot>
          <div class={'expand-content-footer'}></div>
        </div>
      </Host>
    );
  }
}
