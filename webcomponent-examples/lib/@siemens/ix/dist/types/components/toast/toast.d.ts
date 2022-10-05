import { EventEmitter } from '../../stencil-public-runtime';
import { ToastType } from './toast-utils';
export declare class Toast {
  /**
   * Toast type
   */
  type: ToastType;
  /**
   * Toast title
   */
  toastTitle: string;
  /**
   * Autoclose title after delay
   */
  autoCloseDelay: number;
  /**
   * Autoclose behavior
   */
  autoClose: boolean;
  /**
   * Icon of toast
   */
  icon: string;
  /**
   * Icon color of toast
   */
  iconColor: string;
  /**
   * Toast closed
   */
  closeToast: EventEmitter;
  progress: number;
  isRunning: boolean;
  touched: boolean;
  host: HTMLIxToastElement;
  private getIcon;
  private close;
  render(): any;
}
