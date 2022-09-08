/**
 * COPYRIGHT (c) Siemens AG
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import {
    createPopper,
    Instance as PopperInstance,
    Placement
} from '@popperjs/core';
import {
    Component,
    Element,
    Event,
    EventEmitter,
    h,
    Host,
    Prop,
    State
} from '@stencil/core';
import { getButtonClasses } from '../button/base-button';
import { Buttons } from '../utils/button-variants';

@Component({
  tag: 'ix-split-button',
  styleUrl: 'split-button.scss',
  scoped: true,
})
export class CwSplitButton {
  @Element() hostElement: HTMLIxSplitButtonElement;

  /**
   * Color variant of button
   */
  @Prop() variant: Buttons = 'Primary';

  /**
   * Button outline variant
   */
  @Prop() outline = false;

  /**
   * Button invisible
   *
   * @deprecated use ghost property
   */
  @Prop() invisible = false;

  /**
   * Button invisible
   */
  @Prop() ghost = false;

  /**
   * Button label
   */
  @Prop() label: string;

  /**
   * Button icon
   */
  @Prop() icon = '';

  /**
   * Splitbutton icon
   */
  @Prop() splitIcon = 'context-menu';

  /**
   * Disabled
   */
  @Prop() disabled = false;

  /**
   * Placement of the dropdown
   */
  @Prop() placement: Placement = 'bottom-start';

  @State() toggle = false;

  /**
   * Button clicked
   */
  @Event() buttonClick: EventEmitter<MouseEvent>;

  private popover: HTMLIxDropdownElement;
  private popperInstance: PopperInstance;

  get splitItems() {
    return Array.from(
      this.hostElement.querySelectorAll('ix-split-button-item')
    );
  }

  private clickOutside(e: Event) {
    if (!this.hostElement.contains(e.target as HTMLElement)) {
      this.toggle = false;
    }
  }

  componentDidLoad() {
    const element = this.hostElement.querySelector('.anchor');
    this.popover = this.hostElement.querySelector('ix-dropdown');
    this.popperInstance = createPopper(element, this.popover, {
      strategy: 'fixed',
      placement: this.placement,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 0],
          },
        },
        {
          name: 'flip',
          options: {
            padding: 8,
          },
        },
      ],
    });

    window.addEventListener('click', this.clickOutside.bind(this));
  }

  disconnectedCallback() {
    this.popperInstance?.destroy();
    window.removeEventListener('click', this.clickOutside.bind(this));
  }

  private toggleDropdown() {
    this.toggle = !this.toggle;
  }

  render() {
    return (
      <Host class="btn-group">
        <button
          class={getButtonClasses(
            this.variant,
            this.outline,
            this.ghost || this.invisible,
            !this.label,
            false,
            false,
            this.disabled
          )}
          onClick={(e) => this.buttonClick.emit(e)}
        >
          {this.icon ? <ix-icon name={this.icon} /> : null} {this.label}
        </button>
        <button
          class={{
            ...getButtonClasses(
              this.variant,
              this.outline,
              this.ghost || this.invisible,
              true,
              false,
              false,
              this.disabled
            ),
            ...{
              anchor: true,
            },
          }}
          onClick={() => this.toggleDropdown()}
        >
          <ix-icon name={this.splitIcon} />
          <ix-dropdown show={this.toggle}>
            <slot></slot>
          </ix-dropdown>
        </button>
      </Host>
    );
  }
}
