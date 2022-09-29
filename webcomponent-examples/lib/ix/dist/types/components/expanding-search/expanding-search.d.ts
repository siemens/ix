import { EventEmitter } from '../../stencil-public-runtime';
export declare class ExpandingSearch {
  /**
   * Search icon
   */
  icon: string;
  /**
   * Placeholder text
   */
  placeholder: string;
  /**
   * Default value
   */
  value: string;
  isFieldChanged: boolean;
  expanded: boolean;
  hasFocus: boolean;
  /**
   * Value changed
   */
  valueChange: EventEmitter<string>;
  private expandInput;
  private collapseInput;
  private clearInput;
  private onChange;
  private textInput?;
  constructor();
  private focusTextInput;
  private clearClicked;
  render(): any;
}
