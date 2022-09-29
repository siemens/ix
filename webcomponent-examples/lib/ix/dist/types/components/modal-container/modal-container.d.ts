import { ModalConfig } from '../modal/modal-utils';
import { TypedEvent } from '../utils/typed-event';
export declare class ModalContainer {
  hostElement: HTMLIxModalContainerElement;
  /**
   * Display modal dialog
   *
   * @param config
   */
  showModal(config: ModalConfig): Promise<{
    onClose: TypedEvent<any>;
    onDismiss: TypedEvent<any>;
  }>;
  render(): any;
}
