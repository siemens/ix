import { Component, Element, Host, Prop, h } from '@stencil/core';
import { DOMTabsContextController, TabsContextController } from './controller';

@Component({
  tag: 'ix-tabs-context',
  shadow: true,
})
export class TabsContext {
  @Element() hostElement!: HTMLIxTabsContextElement;

  /**
   * The controller for managing the tabs context.
   * This can be replaced with a custom controller if needed.
   */
  @Prop() tabsController: TabsContextController =
    new DOMTabsContextController();

  connectedCallback() {}

  componentDidLoad() {
    this.tabsController.connectedCallback(this.hostElement);
  }

  disconnectedCallback() {
    this.tabsController.disconnectedCallback();
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
