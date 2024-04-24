import { Component, Element, Host, getElement, h } from '@stencil/core';
import { IxComponent } from '../utils/internal';

@Component({
  tag: 'ix-custom-field',
  styleUrl: 'custom-field.scss',
  shadow: true,
})
export class CustomField implements IxComponent {
  @Element() hostElement: HTMLIxCustomFieldElement;
  private mutationObserver: MutationObserver;

  constructor() {
    this.mutationObserver = new MutationObserver(() => this.onMutation());
  }

  private onMutation() {
    Array.from(this.hostElement.children).forEach((child) => {
      if (child.tagName === 'IX-DATE-FIELD') {
        const nextSibling = child.nextElementSibling;
        if (nextSibling && nextSibling.tagName === 'IX-DATE-FIELD') {
          (child as HTMLIxDateFieldElement).combineDateStart = true;
          (nextSibling as HTMLIxDateFieldElement).combineDateEnd = true;
        }
      }
    });
  }

  componentDidLoad(): void {
    this.onMutation();
  }

  connectedCallback() {
    this.mutationObserver.observe(this.hostElement, {
      childList: true,
    });
  }

  disconnectedCallback() {
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
    }
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
