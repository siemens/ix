export declare type ToastType = 'info' | 'success' | 'error' | 'warning';
export interface ToastConfig {
  title?: string;
  message: string | HTMLElement;
  type?: ToastType;
  autoClose?: boolean;
  autoCloseDelay?: number;
  icon?: string;
  iconColor?: string;
}
declare function toast(config: ToastConfig): Promise<{
  onClose: import("../utils/typed-event").TypedEvent<any>;
  close: (result?: any) => void;
}>;
declare namespace toast {
  var info: (config: ToastConfig) => Promise<{
    onClose: import("../utils/typed-event").TypedEvent<any>;
    close: (result?: any) => void;
  }>;
  var error: (config: ToastConfig) => Promise<{
    onClose: import("../utils/typed-event").TypedEvent<any>;
    close: (result?: any) => void;
  }>;
  var success: (config: ToastConfig) => Promise<{
    onClose: import("../utils/typed-event").TypedEvent<any>;
    close: (result?: any) => void;
  }>;
  var warning: (config: ToastConfig) => Promise<{
    onClose: import("../utils/typed-event").TypedEvent<any>;
    close: (result?: any) => void;
  }>;
}
export { toast };
