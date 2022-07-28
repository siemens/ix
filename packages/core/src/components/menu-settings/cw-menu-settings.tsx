/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { Component, Element, Event, EventEmitter, forceUpdate, h, Host, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'cw-menu-settings',
  styleUrl: 'cw-menu-settings.scss',
  scoped: true,
})
export class CwMenuAbout {
  /**
   * active tab
   */
  @Prop({ mutable: true }) activeTabLabel: string;

  /**
   * Label
   */
  @Prop() label = 'Settings';

  /**
   * Internal
   */
  @Prop() show = false;

  @Element() el!: HTMLCwMenuSettingsElement;

  /**
   * Popover closed
   */
  @Event() close: EventEmitter<MouseEvent>;

  get settingsItems(): HTMLCwMenuSettingsItemElement[] {
    return Array.from(this.el.querySelectorAll('cw-menu-settings-item'));
  }

  private setTab(label: string) {
    this.activeTabLabel = label;
    this.settingsItems.forEach(i => {
      i.style.display = 'none';

      if (i.label === this.activeTabLabel) {
        i.style.display = 'block';
      }
    });
  }

  componentWillLoad() {
    if (this.settingsItems.length) {
      this.setTab(this.activeTabLabel || this.settingsItems[0].label);
    }
  }

  componentDidLoad() {
    forceUpdate(this.el);
  }

  @Watch('activeTabLabel')
  watchActiveTabLabel(value: string) {
    this.setTab(value);
  }

  private getTabLabels() {
    return this.settingsItems.map(({ label }) => {
      return (
        <li class="nav-item">
          <a
            onClick={() => this.setTab(label)}
            class={{
              'nav-link': true,
              'active': label === this.activeTabLabel,
            }}
          >
            {label}
          </a>
        </li>
      );
    });
  }

  render() {
    return (
      <Host
        class={{
          animate__animated: true,
          animate__fadeInLeft: this.show,
          animate__fadeOutLeft: !this.show,
        }}
      >
        <div class="settings-header">
          <h2 class="text-h2">{this.label}</h2>
          <cw-icon-button ghost size="24" icon="close" onClick={e => this.close.emit(e)}></cw-icon-button>
        </div>
        <ul class="settings-tabs nav nav-primary-tab">{this.getTabLabels()}</ul>
        <div class="settings-items">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
