import {
  Component,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
  State,
} from '@stencil/core';

export type ClickEvent = {
  clicks: number;
};

@Component({
  tag: 'test-component',
  styleUrl: 'test-component.scss',
  shadow: true,
})
export class TestComponent {
  /**
   * If true the button is disabled.
   */
  @Prop() disabled: boolean = false;

  @State() clickCount: number = 0;

  /**
   * Button is clicked.
   */
  @Event() buttonClicked: EventEmitter<ClickEvent>;

  private onClick() {
    this.clickCount += 1;

    this.buttonClicked.emit({
      clicks: this.clickCount,
    });
  }

  render() {
    return (
      <Host>
        <button disabled={this.disabled} onClick={() => this.onClick()}>
          <slot></slot>
        </button>
      </Host>
    );
  }
}
