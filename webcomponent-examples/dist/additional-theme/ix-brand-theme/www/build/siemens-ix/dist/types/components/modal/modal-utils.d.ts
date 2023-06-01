import { NotificationColor } from '../utils/notification-color';
import { TypedEvent } from '../utils/typed-event';
export interface ModalConfig<TReason = any> {
  animation?: boolean;
  ariaDescribedBy?: string;
  ariaLabelledBy?: string;
  backdrop?: boolean | 'static';
  backdropClass?: string;
  beforeDismiss?: (reason?: TReason) => boolean | Promise<boolean>;
  centered?: boolean;
  container?: string | HTMLElement;
  content: string | HTMLElement;
  keyboard?: boolean;
  modalDialogClass?: string;
  scrollable?: boolean;
  size?: 'sm' | 'lg' | 'xl';
  title: string;
  windowClass?: string;
  icon?: string;
  iconColor?: NotificationColor;
}
export interface ModalInstance<TReason = any> {
  htmlElement: HTMLIxModalElement;
  onClose: TypedEvent<TReason>;
  onDismiss: TypedEvent<TReason>;
}
export declare function modal<TReson = any>(config: ModalConfig<TReson>): Promise<ModalInstance<TReson>>;
export declare function closeModal<TClose = any>(element: Element, closeResult: TClose): void;
export declare function dismissModal(element: Element, dismissResult?: any): void;
