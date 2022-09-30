import { EventEmitter } from '../../stencil-public-runtime';
export declare class Chip {
  el: HTMLIxChipElement;
  /**
   * Chip variant
   */
  variant: 'primary' | 'alarm' | 'critical' | 'warning' | 'info' | 'neutral' | 'success' | 'custom';
  /**
   * Display chip in active state. Only working witht `variant="primary"`
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
