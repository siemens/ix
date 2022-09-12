import {
    Component,
    Element,
    Event,
    EventEmitter,
    h,
    Prop
} from '@stencil/core';

@Component({
  tag: 'ix-menu-avatar-item',
  styleUrl: 'menu-avatar-item.css',
  scoped: true,
})
export class MenuAvatarItem {
  /**
   * Avatar dropdown icon
   */
  @Prop() icon: string;

  /**
   * Avatar dropdown label
   */
  @Prop() label: string;

  /**
   * Avatar dropdown item clicked
   */
  @Event() itemClick: EventEmitter<MouseEvent>;

  @Element() hostElement: HTMLIxMenuAvatarItemElement;

  render() {
    return (
      <ix-dropdown-item
        icon={this.icon}
        label={this.label}
        onClick={(e) => this.itemClick.emit(e)}
      ></ix-dropdown-item>
    );
  }
}
