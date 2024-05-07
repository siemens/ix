import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'ix-chat-message',
  styleUrl: 'chat-message.scss',
  shadow: true,
})
export class IxChatMessage {
  /**
   * The sender of the message
   */
  @Prop() sender: string;

  /**
   * The icon color
   */
  @Prop() iconColor: string;

  /**
   * The icon representing the sender
   */
  @Prop() icon: string;

  render() {
    return (
      <Host>
        <div class="sender">
          <ix-icon name={this.icon} color={this.iconColor}></ix-icon>
          <ix-typography bold format="label-lg">
            {this.sender}
          </ix-typography>
        </div>
        <div class="content-container">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
