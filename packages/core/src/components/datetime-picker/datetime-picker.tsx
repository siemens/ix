
import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'ix-datetime-picker',
  styleUrl: 'datetime-picker.scss',
  scoped: true,
})
export class DatePicker {
  /**
   * Set range size
   */
  @Prop() range = true;

  /**
   * Show Hour Input
   */
  @Prop() showHour = false;

  /**
   * Show Minutes Input
   */
  @Prop() showMinutes = false;

  /**
   * Show Seconds Input
   */
  @Prop() showSeconds = false;

  /**
   * Show Time Reference Input
   */
  @Prop() showTimeReference = false;

  private date!: string;
  private time!: string;

  /**
   * Time event
   */
  @Event() done: EventEmitter<string>;

  private doneEvent() {
    console.log(this.date + ' ' + this.time);
    this.done.emit(this.date + ' ' + this.time);
  }

  render() {
    return (
      <Host>
        <div class="flex">
          <ix-date-picker
            corners="left"
            individual={false}
            range={this.range}
            onDateChange={(date) => (this.date = date.detail)}
          ></ix-date-picker>
          <ix-time-picker
            corners="right"
            individual={false}
            showHour={this.showHour}
            showMinutes={this.showMinutes}
            showSeconds={this.showSeconds}
            showTimeReference={this.showTimeReference}
            onTimeChange={(time) => (this.time = time.detail)}
          ></ix-time-picker>
        </div>
        <div class="done">
          <ix-button onClick={() => this.doneEvent()}>Done</ix-button>
        </div>
      </Host>
    );
  }
}
