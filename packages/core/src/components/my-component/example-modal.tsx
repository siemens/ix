import { Component, Event, EventEmitter, h, Host } from '@stencil/core';

@Component({
  tag: 'cw-modal-example',
})
export class ModalExample {
  /**
   * Emit close modal
   */
  @Event() close: EventEmitter;

  private closeClick() {
    console.log('close');
    this.close.emit();
  }

  render() {
    return (
      <Host>
        <div>
          <div class="modal-header">
            Message headline
            <cw-icon-button ghost icon="close" onClick={() => this.closeClick()}></cw-icon-button>
          </div>
          <div class="modal-body">Message text lorem ipsum</div>
          <div class="modal-footer">
            <cw-button outline onClick={() => this.closeClick()}>
              Cancel
            </cw-button>
            <cw-button>OK</cw-button>
          </div>
        </div>
      </Host>
    );
  }
}
