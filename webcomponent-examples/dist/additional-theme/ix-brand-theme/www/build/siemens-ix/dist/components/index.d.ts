/* SiemensIx custom elements */
export { AnimatedTab as IxAnimatedTab } from '../types/components/animated-tab/animated-tab';
export { AnimatedTabs as IxAnimatedTabs } from '../types/components/animated-tabs/animated-tabs';
export { ApplicationHeader as IxApplicationHeader } from '../types/components/application-header/application-header';
export { BasicNavigation as IxBasicNavigation } from '../types/components/basic-navigation/basic-navigation';
export { Blind as IxBlind } from '../types/components/blind/blind';
export { Breadcrumb as IxBreadcrumb } from '../types/components/breadcrumb/breadcrumb';
export { BreadcrumbItem as IxBreadcrumbItem } from '../types/components/breadcrumb-item/breadcrumb-item';
export { Button as IxButton } from '../types/components/button/button';
export { CategoryFilter as IxCategoryFilter } from '../types/components/category-filter/category-filter';
export { Chip as IxChip } from '../types/components/chip/chip';
export { CounterPill as IxCounterPill } from '../types/components/counter-pill/counter-pill';
export { DatePicker as IxDatePicker } from '../types/components/date-picker/date-picker';
export { DateTimeCard as IxDateTimeCard } from '../types/components/date-time-card/date-time-card';
export { DatePicker as IxDatetimePicker } from '../types/components/datetime-picker/datetime-picker';
export { Drawer as IxDrawer } from '../types/components/drawer/drawer';
export { Dropdown as IxDropdown } from '../types/components/dropdown/dropdown';
export { DropdownButton as IxDropdownButton } from '../types/components/dropdown-button/dropdown-button';
export { DropdownItem as IxDropdownItem } from '../types/components/dropdown-item/dropdown-item';
export { EventList as IxEventList } from '../types/components/event-list/event-list';
export { EventListItem as IxEventListItem } from '../types/components/event-list-item/event-list-item';
export { ExpandingSearch as IxExpandingSearch } from '../types/components/expanding-search/expanding-search';
export { FilterChip as IxFilterChip } from '../types/components/filter-chip/filter-chip';
export { FlipTile as IxFlipTile } from '../types/components/flip-tile/flip-tile';
export { FlipTileContent as IxFlipTileContent } from '../types/components/flip-tile-content/flip-tile-content';
export { Group as IxGroup } from '../types/components/group/group';
export { GroupContextMenu as IxGroupContextMenu } from '../types/components/group/group-context-menu';
export { GroupDropdownItem as IxGroupDropdownItem } from '../types/components/group-dropdown-item/group-dropdown-item';
export { GroupItem as IxGroupItem } from '../types/components/group-item/group-item';
export { Icon as IxIcon } from '../types/components/icon/icon';
export { IconButton as IxIconButton } from '../types/components/icon-button/icon-button';
export { InputGroup as IxInputGroup } from '../types/components/input-group/input-group';
export { Kpi as IxKpi } from '../types/components/kpi/kpi';
export { MapNavigation as IxMapNavigation } from '../types/components/map-navigation/map-navigation';
export { MapNavigationOverlay as IxMapNavigationOverlay } from '../types/components/map-navigation-overlay/map-navigation-overlay';
export { Menu as IxMenu } from '../types/components/menu/menu';
export { MenuAbout as IxMenuAbout } from '../types/components/menu-about/menu-about';
export { MenuAboutItem as IxMenuAboutItem } from '../types/components/menu-about-item/menu-about-item';
export { MenuAboutNews as IxMenuAboutNews } from '../types/components/menu-about-news/menu-about-news';
export { MenuAvatar as IxMenuAvatar } from '../types/components/menu-avatar/menu-avatar';
export { MenuAvatarItem as IxMenuAvatarItem } from '../types/components/menu-avatar-item/menu-avatar-item';
export { MenuItem as IxMenuItem } from '../types/components/menu-item/menu-item';
export { MenuAbout as IxMenuSettings } from '../types/components/menu-settings/menu-settings';
export { MenuSettingsItem as IxMenuSettingsItem } from '../types/components/menu-settings-item/menu-settings-item';
export { MessageBar as IxMessageBar } from '../types/components/message-bar/message-bar';
export { Modal as IxModal } from '../types/components/modal/modal';
export { ModalContainer as IxModalContainer } from '../types/components/modal-container/modal-container';
export { ModalExample as IxModalExample } from '../types/components/my-component/example-modal';
export { Pill as IxPill } from '../types/components/pill/pill';
export { Select as IxSelect } from '../types/components/select/select';
export { SelectItem as IxSelectItem } from '../types/components/select-item/select-item';
export { Spinner as IxSpinner } from '../types/components/spinner/spinner';
export { SplitButton as IxSplitButton } from '../types/components/split-button/split-button';
export { SplitButtonItem as IxSplitButtonItem } from '../types/components/split-button-item/split-button-item';
export { TabItem as IxTabItem } from '../types/components/tab-item/tab-item';
export { Tabs as IxTabs } from '../types/components/tabs/tabs';
export { Tile as IxTile } from '../types/components/tile/tile';
export { TimePicker as IxTimePicker } from '../types/components/time-picker/time-picker';
export { Toast as IxToast } from '../types/components/toast/toast';
export { ToastContainer as IxToastContainer } from '../types/components/toast/toast-container';
export { CuiToggle as IxToggle } from '../types/components/toggle/toggle';
export { Tooltip as IxTooltip } from '../types/components/tooltip/tooltip';
export { Tree as IxTree } from '../types/components/tree/tree';
export { TreeItem as IxTreeItem } from '../types/components/tree-item/tree-item';
export { IxTypography as IxTypography } from '../types/components/typography/typography';
export { Upload as IxUpload } from '../types/components/upload/upload';
export { ValidationTooltip as IxValidationTooltip } from '../types/components/validation-tooltip/validation-tooltip';
export { WorkflowStep as IxWorkflowStep } from '../types/components/workflow-step/workflow-step';
export { WorkflowSteps as IxWorkflowSteps } from '../types/components/workflow-steps/workflow-steps';
export { MyComponent as MyComponent } from '../types/components/my-component/my-component';

/**
 * Used to manually set the base path where assets can be found.
 * If the script is used as "module", it's recommended to use "import.meta.url",
 * such as "setAssetPath(import.meta.url)". Other options include
 * "setAssetPath(document.currentScript.src)", or using a bundler's replace plugin to
 * dynamically set the path at build time, such as "setAssetPath(process.env.ASSET_PATH)".
 * But do note that this configuration depends on how your script is bundled, or lack of
 * bundling, and where your assets can be loaded from. Additionally custom bundling
 * will have to ensure the static assets are copied to its build directory.
 */
export declare const setAssetPath: (path: string) => void;

export interface SetPlatformOptions {
  raf?: (c: FrameRequestCallback) => number;
  ael?: (el: EventTarget, eventName: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions) => void;
  rel?: (el: EventTarget, eventName: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions) => void;
}
export declare const setPlatformOptions: (opts: SetPlatformOptions) => void;
export * from '../types';
