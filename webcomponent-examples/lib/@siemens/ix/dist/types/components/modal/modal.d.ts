import { EventEmitter } from '../../stencil-public-runtime';
import { NotificationColor } from '../utils/notification-color';
export declare class Modal {
  hostElement: HTMLIxModalElement;
  /**
   * Should the modal be animtated
   */
  animation: boolean;
  /**
   *
   */
  ariaDescribedBy: string;
  /**
   *
   */
  ariaLabelledBy: string;
  /**
   * Adds a dimming layer to the modal.
   * This should only be used when it it necessary to focus the user's attention to the dialog content (e.g. errors, warnings, complex tasks).
   */
  backdrop: boolean | 'static';
  /**
   * Backdrop class
   */
  backdropClass: string;
  /**
   * BeforeDismiss callback
   */
  beforeDismiss: (reason?: any) => boolean | Promise<boolean>;
  /**
   * Centered modal
   */
  centered: boolean;
  /**
   * Content of modal
   */
  content: HTMLElement | string;
  /**
   * ESC close modal dialog
   */
  keyboard: boolean;
  /**
   * Optional icon displayed next to the title
   */
  icon: string;
  /**
   * Color of the header {@link icon}
   */
  iconColor: NotificationColor;
  /**
   * Modal dialog class
   */
  modalDialogClass: string;
  /**
   * Modal scollable
   */
  scrollable: boolean;
  /**
   * Modal size
   */
  size: 'sm' | 'lg' | 'xl';
  /**
   * Header title
   */
  headerTitle: string;
  /**
   * Window class
   */
  windowClass: string;
  /**
   * Modal closed
   */
  closed: EventEmitter;
  /**
   * Modal dismissed
   */
  dismissed: EventEmitter;
  private readonly onKeydown;
  get modal(): Element;
  get modalDialog(): Element;
  get modalContent(): Element;
  get modalBackdrop(): Element;
  private slideDown;
  private slideUp;
  componentDidLoad(): void;
  private handleKeydown;
  disconnectedCallback(): void;
  /**
   * Dismiss modal instance
   * @param reason
   */
  dismiss(reason?: any): Promise<void>;
  /**
   * Close modal
   * @param result
   */
  close(result: any): Promise<void>;
  render(): any;
}
