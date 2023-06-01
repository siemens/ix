import { EventEmitter } from '../../stencil-public-runtime';
import { NotificationColor } from '../utils/notification-color';
export declare class MessageBar {
  /**
   * Specifies the type of the alert.
   */
  type: 'danger' | 'warning' | 'info';
  /**
   * If true, close button is enabled and alert can be dismissed by the user
   */
  dismissible: boolean;
  /**
   * An event emitted when the close button is clicked
   */
  closedChange: EventEmitter;
  icon: 'error' | 'warning' | 'info';
  color: NotificationColor;
  private static readonly duration;
  private divElement?;
  componentWillRender(): void;
  private closeAlert;
  render(): any;
}
