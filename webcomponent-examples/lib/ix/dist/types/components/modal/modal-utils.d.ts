import { NotificationColor } from '../utils/notification-color';
export interface ModalConfig {
  animation?: boolean;
  ariaDescribedBy?: string;
  ariaLabelledBy?: string;
  backdrop?: boolean | 'static';
  backdropClass?: string;
  beforeDismiss?: (reason?: any) => boolean | Promise<boolean>;
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
export declare function modal(config: ModalConfig): Promise<{
  onClose: import("../utils/typed-event").TypedEvent<any>;
  onDismiss: import("../utils/typed-event").TypedEvent<any>;
}>;
export declare function closeModal(element: Element, closeResult: any): void;
export declare function dismissModal(element: Element, dismissResult?: any): void;
