import { Component, h, Host, Prop } from '@stencil/core';

function CardListTitle(props: {
  label: string;
  isCollapsed: boolean;
  onClick: (e: MouseEvent) => void;
}) {
  if (props.label === '') {
    return null;
  }

  return (
    <div class="CardList_Title">
      <ix-icon-button
        ghost
        icon="chevron-down"
        onClick={props.onClick}
        color="color-primary"
        class={{
          CardList__Title__Button: true,
          CardList__Title__Button__Collapsed: props.isCollapsed,
        }}
      ></ix-icon-button>
      <ix-typography variant="large-single">{props.label}</ix-typography>
    </div>
  );
}

@Component({
  tag: 'ix-card-list',
  styleUrl: 'card-list.scss',
  scoped: true,
})
export class CardList {
  /**
   * Name the card list
   */
  @Prop() label: string;

  /**
   * Collapse the list
   */
  @Prop({ mutable: true }) collapsed = false;

  private onCardListVisibilityToggle() {
    this.collapsed = !this.collapsed;
  }

  render() {
    return (
      <Host>
        <CardListTitle
          isCollapsed={this.collapsed}
          label={this.label}
          onClick={() => this.onCardListVisibilityToggle()}
        ></CardListTitle>
        <div
          class={{
            CardList__Content: true,
            CardList__Content__Collapsed: this.collapsed,
          }}
        >
          <slot></slot>
        </div>
      </Host>
    );
  }
}
