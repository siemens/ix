export declare class Kpi {
  /**
   *
   */
  label: string;
  /**
   *
   */
  value: string | number;
  /**
   *
   */
  unit: string;
  /**
   *
   */
  state: 'neutral' | 'warning' | 'alarm';
  /**
   *
   */
  orientation: 'horizontal' | 'vertical';
  private getStateIcon;
  private getTooltipText;
  render(): any;
}
