import { EventEmitter } from '../../stencil-public-runtime';
export declare class Chip {
  el: HTMLIxChipElement;
  /**
   * Chip variant
   */
  variant: 'primary' | 'alarm' | 'critical' | 'warning' | 'info' | 'neutral' | 'success' | 'custom';
  /**
   * Determines if the chip is interactive. If false no user input (e.g. mouse states, keyboard navigation)
   * will be possible and also the close button will not be present.
   */
  active: boolean;
  /**
   * Show close icon
   */
  closable: boolean;
  /**
   * Show icon
   */
  icon: string | undefined;
  /**
   * Custom color for pill. Only working for `variant='custom'`
   */
  background: string | undefined;
  /**
   * Custom font color for pill. Only working for `variant='custom'`
   */
  color: string | undefined;
  /**
   * Show chip with outline style
   */
  outline: boolean;
  /**
   * Fire event if close button is clicked
   */
  close: EventEmitter;
  private getCloseButton;
  render(): any;
}
