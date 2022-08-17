import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'ix-tab-item',
  styleUrl: 'tab-item.scss',
  scoped: false,
})
export class TabItem {
  /**
   * Set selected tab
   */
  @Prop() selected = false;

  /**
   * Set disabled tab
   */
  @Prop() disabled = false;

  /**
   * Set small size tab
   */
  @Prop() small = false;

  /**
   * Set icon only tab
   */
  @Prop() icon = false;

  /**
   * Set layout width style
   */
  @Prop() layout: 'auto' | 'stretched' = 'auto';

  /**
   * Set selected placement
   */
  @Prop() placement: 'bottom' | 'top' = 'bottom';

  private tabItemClasses(props: {
    selected: boolean;
    disabled: boolean;
    small: boolean;
    icon: boolean;
    layout: 'auto' | 'stretched';
    placement: 'bottom' | 'top';
  }) {
    return {
      selected: props.selected,
      disabled: props.disabled,
      'small-tab': props.small,
      icon: props.small,
      stretched: props.layout === 'stretched',
      bottom: props.placement === 'bottom',
      top: props.placement === 'top',
    };
  }

  render() {
    return (
      <Host
        class={this.tabItemClasses({
          selected: this.selected,
          disabled: this.disabled,
          small: this.small,
          icon: this.icon,
          layout: this.layout,
          placement: this.placement,
        })}
        tabindex="0"
      >
        <div class="text">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
