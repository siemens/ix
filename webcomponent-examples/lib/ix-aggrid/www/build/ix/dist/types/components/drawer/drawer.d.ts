import { EventEmitter } from '../../stencil-public-runtime';
export declare class Drawer {
  /**
   * Show or hide the drawer
   */
  show: boolean;
  /**
   * Fired in case of an outside click during drawer showed state
   */
  closeOnClickOutside: boolean;
  /**
   * Render the drawer with maximum height
   */
  fullHeight: boolean;
  /**
   * Min width interpreted as REM
   */
  minWidth: number;
  /**
   * Max width interpreted as REM
   */
  maxWidth: number;
  /**
   * Width interpreted as REM if not set to 'auto'
   */
  width: number | 'auto';
  /**
   * Fire event after drawer is open
   */
  open: EventEmitter;
  /**
   * Fire event after drawer is close
   */
  drawerClose: EventEmitter;
  private static duration;
  private callback;
  private divElement?;
  onShowChanged(newValue: boolean): void;
  /**
   * Toggle or define show state of drawer
   * @param show Overwrite toggle state with boolean
   */
  toggleDrawer(show: boolean): Promise<void>;
  private onCloseClicked;
  private clickedOutside;
  private slideOutRight;
  private slideInRight;
  render(): any;
}
