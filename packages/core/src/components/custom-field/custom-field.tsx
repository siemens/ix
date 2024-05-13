import { Component, Element, Host, Prop, State, h } from '@stencil/core';
import { IxComponent } from '../utils/internal';
import { HelperText, checkFieldClasses } from '../utils/field';

@Component({
  tag: 'ix-custom-field',
  styleUrl: 'custom-field.scss',
  shadow: true,
})
export class CustomField implements IxComponent, HelperText {
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
   */
  @Prop({ reflect: true }) errorText: string;

  @State() isInvalid: boolean;

  private mutationObserver: MutationObserver;

  constructor() {
    this.mutationObserver = new MutationObserver(() => this.onMutation());
  }

  private onMutation() {
    Array.from(this.hostElement.children).forEach((child) => {
      const { isInvalid } = checkFieldClasses(child as HTMLElement);
      this.isInvalid = isInvalid;
      console.log(child, isInvalid);
    });
  }

  componentDidLoad(): void {
    this.onMutation();
  }

  connectedCallback() {
    this.mutationObserver.observe(this.hostElement, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class'],
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
        <ix-helper-text-wrapper
          errorText={this.errorText}
          helperText={this.helperText}
          label={this.label}
          isInvalid={this.isInvalid}
        >
          <slot></slot>
        </ix-helper-text-wrapper>
      </Host>
    );
  }
}
