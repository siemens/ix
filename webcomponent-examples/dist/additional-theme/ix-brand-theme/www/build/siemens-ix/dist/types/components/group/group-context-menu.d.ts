export declare class GroupContextMenu {
  host: HTMLIxGroupContextMenuElement;
  showContextMenu: boolean;
  private observer;
  get dropdownElement(): HTMLIxDropdownElement;
  get groupDropdownItem(): NodeListOf<HTMLIxGroupDropdownItemElement>;
  private configureDropdown;
  componentWillRender(): void;
  disconnectedCallback(): void;
  render(): any;
}
