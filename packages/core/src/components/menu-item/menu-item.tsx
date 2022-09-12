import { Component, Element, h, Host, Prop, State } from '@stencil/core';

@Component({
  tag: 'ix-menu-item',
  styleUrl: 'menu-item.scss',
  scoped: false,
})
export class MenuItem {
  /**
   * Move the Tab to a top position.
   */
  @Prop() home = false;

  /**
   * Place tab on bottom
   */
  @Prop() bottom = false;

  /**
   * Icon name from @siemens/ix-icons
   */
  @Prop() tabIcon = 'document';

  /**
   * Show notification cound on tab
   */
  @Prop() notifications: number;

  /**
   * State to display active
   */
  @Prop() active: boolean;

  /**
   * Disable tab and remove event handlers
   */
  @Prop() disabled: boolean;

  @Element() hostElement: HTMLIxMenuItemElement;

  @State() title: string;

  get tabLabel() {
    return this.hostElement.querySelector('.tab-text');
  }

  componentDidRender() {
    const spanElement = this.tabLabel;
    const newTitle = spanElement.innerHTML.replace('&amp;', '&');
    if (this.title !== newTitle) {
      this.title = newTitle;
    }
  }

  render() {
    return (
      <Host
        class={{
          disabled: this.disabled,
          'home-tab': this.home,
          'bottom-tab': this.bottom,
          active: this.active,
        }}
      >
        <li class="tab" title={this.title}>
          <i class={`glyph glyph-${this.tabIcon}`}>
            <div class="notification">
              {this.notifications ? (
                <div class="pill">{this.notifications}</div>
              ) : null}
            </div>
          </i>
          <span class="tab-text text-default">
            <slot></slot>
          </span>
        </li>
      </Host>
    );
  }
}
