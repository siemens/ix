import { TypedEvent } from '../utils/typed-event';
import { ToastConfig } from './toast-utils';
export declare class ToastContainer {
  host: HTMLIxToastContainerElement;
  /**
   */
  containerId: string;
  /**
   */
  containerClass: string;
  /**
   */
  position: string;
  get hostContainer(): HTMLElement;
  componentDidLoad(): void;
  /**
   * Display a toast message
   * @param config
   */
  showToast(config: ToastConfig): Promise<{
    onClose: TypedEvent<any>;
    close: (result?: any) => void;
  }>;
  render(): any;
}
