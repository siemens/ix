import { EventEmitter } from '../../stencil-public-runtime';
export declare class Group {
  /**
   * Prevent header from being selectable
   */
  suppressHeaderSelection: boolean;
  /**
   * Group header
   */
  header: string;
  /**
   * Group header subtitle
   */
  subHeader: string;
  /**
   * Whether the group is collapsed or expanded. Defaults to true.
   */
  collapsed: boolean;
  /**
   * Whether the group is selected.
   */
  selected: boolean;
  /**
   * The index of the selected group entry.
   * If undefined no group item is selected.
   */
  index: number;
  /**
   * Expand the group if the header is clicked
   */
  expandOnHeaderClick: boolean;
  /**
   * Emits when whole group gets selected.
   */
  selectGroup: EventEmitter<boolean>;
  /**
   * Emits when group item gets selected.
   */
  selectItem: EventEmitter<number>;
  /**
   * Group collapsed
   */
  collapsedChanged: EventEmitter<boolean>;
  hostElement: HTMLIxGroupElement;
  get dropdownItems(): HTMLIxGroupDropdownItemElement[];
  get groupItems(): Array<HTMLIxGroupItemElement>;
  get groupContent(): Element;
  get footer(): Element;
  dropdownTriggerRef: HTMLElement;
  constructor();
  onKeyDown(event: KeyboardEvent): Promise<void>;
  private onExpandClick;
  private onHeaderClick;
  private onItemClick;
  private setGroupSelection;
  componentWillRender(): void;
  componentDidLoad(): void;
  render(): any;
}
