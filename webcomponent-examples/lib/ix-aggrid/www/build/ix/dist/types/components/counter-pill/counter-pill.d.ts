export declare class CounterPill {
  el: HTMLIxCounterPillElement;
  /**
   * Pill variant
   */
  variant: 'primary' | 'alarm' | 'critical' | 'warning' | 'info' | 'neutral' | 'success' | 'custom';
  /**
   * Show pill as outline
   */
  outline: boolean;
  /**
   * Custom color for pill. Only working for `variant='custom'`
   */
  background: string | undefined;
  /**
   * Custom font color for pill. Only working for `variant='custom'`
   */
  color: string | undefined;
  /**
   * Align pill content left
   */
  alignLeft: boolean;
  render(): any;
}
