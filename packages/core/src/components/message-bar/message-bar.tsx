/**
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */

import { Component, Event, EventEmitter, h, Host, Prop, State } from '@stencil/core';
import anime from 'animejs';

@Component({
  tag: 'cw-message-bar',
  styleUrl: 'message-bar.scss',
  scoped: true,
})
export class CwMessageBar {
  /**
   * Specifies the type of the alert.
   */
  @Prop() type: 'danger' | 'warning' | 'info' = 'info';

  /**
   * If true, close button is enabled and alert can be dismissed by the user
   */
  @Prop() dismissible = true;

  /**
   * An event emitted when the close button is clicked
   */
  @Event() closedChange: EventEmitter;

  @State() icon: 'error' | 'warning' | 'info';

  @State() color: string;

  private static readonly duration = 300;

  private divElement?: HTMLElement;

  componentWillRender() {
    if (this.type === 'danger') {
      this.icon = 'error';
      this.color = 'color-alarm';
    }

    if (this.type === 'info') {
      this.icon = 'info';
      this.color = 'color-info';
    }

    if (this.type === 'warning') {
      this.icon = 'warning';
      this.color = 'color-warning';
    }
  }

  private closeAlert(el: HTMLElement) {
    anime({
      targets: el,
      duration: CwMessageBar.duration,
      opacity: [1, 0],
      easing: 'easeOutSine',
      complete: () => {
        this.closedChange.emit();
        el.classList.add('d-none');
      },
    });
  }

  render() {
    return (
      <Host>
        <div class={{ 'message-container': true, [this.type]: true }} role="alert" ref={el => (this.divElement = el as HTMLElement)}>
          <cw-icon color={this.color} name={this.icon}></cw-icon>
          <div class="message-content">
            <slot></slot>
          </div>
          {this.dismissible ? (
            <cw-icon-button
              icon="close"
              size="24"
              ghost={true}
              onClick={() => {
                this.closeAlert(this.divElement);
              }}
              data-testid="close-btn"
            ></cw-icon-button>
          ) : (
            ''
          )}
        </div>
      </Host>
    );
  }
}
