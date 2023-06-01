import { ModalConfig, ModalInstance } from '../modal/modal-utils';
export declare class ModalContainer {
  hostElement: HTMLIxModalContainerElement;
  /**
   * Display modal dialog
   *
   * @param config
   */
  showModal(config: ModalConfig): Promise<ModalInstance>;
  render(): any;
}
