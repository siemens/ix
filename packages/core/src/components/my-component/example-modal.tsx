import { Component, Event, EventEmitter, h, Host } from '@stencil/core';

@Component({
  tag: 'ix-modal-example',
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
            <ix-icon-button
              ghost
              icon="close"
              onClick={() => this.closeClick()}
            ></ix-icon-button>
          </div>
          <div class="modal-body">Message text lorem ipsum</div>
          <div class="modal-footer">
            <ix-button outline onClick={() => this.closeClick()}>
              Cancel
            </ix-button>
            <ix-button>OK</ix-button>
          </div>
        </div>
      </Host>
    );
  }
}
