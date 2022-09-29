import { EventEmitter } from '../../stencil-public-runtime';
export declare class CuiToggle {
  /**
   * Whether the slide-toggle element is checked or not.
   */
  checked: boolean;
  /**
   * Whether the slide-toggle element is disabled or not.
   */
  disabled: boolean;
  /**
   * If true the control is in indeterminate state
   */
  indeterminate: boolean;
  /**
   * Basic and status colors from color palette
   * @deprecated - Has no effect on the rendered control
   */
  color: string;
  /**
   * Text for on state
   */
  textOn: string;
  /**
   * Text for off state
   */
  textOff: string;
  /**
   * Text for indeterminate state
   */
  textIndeterminate: string;
  /**
   * Hide `on` and `off` text
   */
  hideText: boolean;
  /**
   * An event will be dispatched each time the slide-toggle changes its value.
   */
  checkedChange: EventEmitter<boolean>;
  hostElement: HTMLIxToggleElement;
  onKeyDown(event: KeyboardEvent): Promise<void>;
  private emitChange;
  private getText;
  render(): any;
}
