import { Component, Element, Event, EventEmitter, Host, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'ix-chat',
  styleUrl: 'chat.scss',
  shadow: true,
})
export class IxChat {
  @Element() hostElement!: HTMLIxChatElement;

  /**
   * Placeholder text for the chat input
   */
  @Prop() placeholder: string = 'Ask me anything...';

  /**
   * Allow adding attachments to the chat
   */
  @Prop() allowAttachments: boolean = false;

  /**
   * The disclaimer text that reminds that chat bot responses may not be accurate
   */
  @Prop() i18nAiDiscalimer: string =
    'ChatGPT can make mistakes. Consider checking important information.';

  @State() textAreaValue: string = '';

  /**
   *
   */
  @Event() chatSubmit: EventEmitter<string>;

  handleInputChange(event: Event) {
    this.textAreaValue = (event.target as HTMLTextAreaElement).value;
  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.submit();
    }
  }

  submit() {
    this.chatSubmit.emit(this.textAreaValue);
  }

  get topics() {
    return this.hostElement.querySelectorAll('ix-chat-topic-btn');
  }

  render() {
    return (
      <Host>
        <slot></slot>

        <ix-divider></ix-divider>
        <slot name="topics"></slot>

        <div class="chat-input">
          <textarea
            placeholder={this.placeholder}
            value={this.textAreaValue}
            onInput={(event: Event) => this.handleInputChange(event)}
            onKeyDown={(event: KeyboardEvent) => this.handleKeyDown(event)}
          ></textarea>
          {this.allowAttachments && (
            <ix-icon-button
              class="btn-upload-attachment"
              outline
              icon="attach"
              color="color-primary"
            ></ix-icon-button>
          )}
          <ix-icon-button
            icon="arrow-up"
            onClick={() => this.submit()}
          ></ix-icon-button>
        </div>
        <ix-typography class="ai-disclaimer" color="soft" format="body">
          {this.i18nAiDiscalimer}
        </ix-typography>
      </Host>
    );
  }
}
