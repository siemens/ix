import { Component, Element, Host, Prop, h } from '@stencil/core';
import { IxComponent } from '../utils/internal';
import { HelperTextWrapper } from '../utils/field';

@Component({
  tag: 'ix-custom-field',
  styleUrl: 'custom-field.scss',
  shadow: true,
})
export class CustomField implements IxComponent, HelperTextWrapper {
  @Element() hostElement: HTMLIxCustomFieldElement;
  /**
   * Show text below the field component
   */
  @Prop() helperText: string;

  /**
   * Label for the field component
   */
  @Prop() label: string;

  /**
   * tbd
   *
   * TODO validation observer needed
   */
  @Prop({ reflect: true }) errorText: string;

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
        <ix-helper-text-wrapper helperText={this.helperText} label={this.label}>
          <slot></slot>
        </ix-helper-text-wrapper>
      </Host>
    );
  }
}
