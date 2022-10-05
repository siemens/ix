import { EventEmitter } from '../../stencil-public-runtime';
export declare class MenuAvatar {
  hostElement: HTMLIxMenuAvatarElement;
  displayMenu: boolean;
  /**
   * First line of text
   */
  top: string;
  /**
   * Second line of text
   */
  bottom: string;
  /**
   *
   */
  i18nLogout: string;
  /**
   * Logout click
   */
  logoutClick: EventEmitter;
  private outsideListener;
  toggleMenu(): void;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  render(): any;
}
