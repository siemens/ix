import { Component, Host, h, Element, State, Prop } from '@stencil/core';
import {
  ContextConsumerSubscription,
  createContextConsumer,
} from '../utils/context';
import { TabContext } from '../tab-context/context';

@Component({
  tag: 'ix-tab-panel',
  styleUrl: 'tab-panel.scss',
  shadow: true,
})
export class TabPanel {
  @Element() hostElement!: HTMLIxTabPanelElement;

  @Prop() value?: string;

  @State() activeTab?: string;

  private consumer?: ContextConsumerSubscription;

  componentDidLoad() {
    this.consumer = createContextConsumer(
      this.hostElement,
      TabContext,
      (ctx) => {
        this.activeTab = ctx.activeTab;
        console.log(
          `TabPanel connected with activeTab: ${this.value} === ${this.activeTab}`
        );
      },
      true
    );
  }

  disconnectedCallback() {
    if (this.consumer) {
      this.consumer.unsubscribe();
    }
  }

  render() {
    return <Host>{this.activeTab === this.value && <slot></slot>}</Host>;
  }
}
