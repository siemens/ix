import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'checkbox-group',
  styleUrl: 'checkbox-group.css',
  shadow: true,
})
export class CheckboxGroup {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
