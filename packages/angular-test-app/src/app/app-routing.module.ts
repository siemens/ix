/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import AboutAndLegal from '../preview-examples/about-and-legal';
import ActionCard from '../preview-examples/action-card';
import AgGrid from '../preview-examples/aggrid';
import ApplicationExample from '../preview-examples/application';
import ApplicationAppSwitchExample from '../preview-examples/application-app-switch';
import ApplicationBreakpointExample from '../preview-examples/application-breakpoints';
import ApplicationHeaderExample from '../preview-examples/application-header';
import Avatar from '../preview-examples/avatar';
import AvatarImage from '../preview-examples/avatar-image';
import AvatarInitials from '../preview-examples/avatar-initials';
import BasicNavigation from '../preview-examples/basic-navigation';
import BasicNavigationWithoutHeader from '../preview-examples/basic-navigation-without-header';
import Blind from '../preview-examples/blind';
import BlindHeaderActions from '../preview-examples/blind-header-actions';
import BlindVariants from '../preview-examples/blind-variants';
import Breadcrumb from '../preview-examples/breadcrumb';
import BreadcrumbNextItems from '../preview-examples/breadcrumb-next-items';
import BreadcrumbTruncate from '../preview-examples/breadcrumb-truncate';
import ButtonGhost from '../preview-examples/button-ghost';
import ButtonGrey from '../preview-examples/button-grey';
import ButtonGreyGhost from '../preview-examples/button-grey-ghost';
import ButtonGreySecondary from '../preview-examples/button-grey-secondary';
import ButtonGroup from '../preview-examples/button-group';
import ButtonLoading from '../preview-examples/button-loading';
import ButtonSecondary from '../preview-examples/button-secondary';
import ButtonTextIcon from '../preview-examples/button-text-icon';
import ButtonWithIcon from '../preview-examples/button-with-icon';
import Buttons from '../preview-examples/buttons';
import Card from '../preview-examples/card';
import CardList from '../preview-examples/card-list';
import CategoryFilter from '../preview-examples/category-filter';
import CategoryFilterSuggestions from '../preview-examples/category-filter-suggestions';
import Checkbox from '../preview-examples/checkbox';
import CheckboxIndeterminate from '../preview-examples/checkbox-indeterminate';
import Chip from '../preview-examples/chip';
import ContentExample from '../preview-examples/content';
import ContentHeader from '../preview-examples/content-header';
import ContentHeaderNoBack from '../preview-examples/content-header-no-back';
import DateDropdown from '../preview-examples/date-dropdown';
import DateDropdownUserRange from '../preview-examples/date-dropdown-user-range';
import Datepicker from '../preview-examples/datepicker';
import DatepickerLocale from '../preview-examples/datepicker-locale';
import DatepickerRange from '../preview-examples/datepicker-range';
import Datetimepicker from '../preview-examples/datetimepicker';
import Divider from '../preview-examples/divider';
import Drawer from '../preview-examples/drawer';
import DrawerFullHeight from '../preview-examples/drawer-full-height';
import Dropdown from '../preview-examples/dropdown';
import DropdownButton from '../preview-examples/dropdown-button';
import DropdownButtonIcon from '../preview-examples/dropdown-button-icon';
import DropdownIcon from '../preview-examples/dropdown-icon';
import DropdownQuickActions from '../preview-examples/dropdown-quick-actions';
import DropdownSubmenu from '../preview-examples/dropdown-submenu';
import Echarts from '../preview-examples/echarts';
import EchartsSpecial3d from '../preview-examples/echarts-special-3d';
import EchartsBarHorizontalStacked from '../preview-examples/echarts-bar-horizontal-stacked';
import EchartsBarSimple from '../preview-examples/echarts-bar-simple';
import EchartsCircle from '../preview-examples/echarts-circle';
import EchartsEmptyState from '../preview-examples/echarts-empty-state';
import EchartsGauge from '../preview-examples/echarts-gauge';
import EchartsLineAdvanced from '../preview-examples/echarts-line-advanced';
import EchartsLineMultipleYAxis from '../preview-examples/echarts-line-multiple-y-axis';
import EchartsLineSimple from '../preview-examples/echarts-line-simple';
import EchartsSpecialToolbox from '../preview-examples/echarts-special-toolbox';
import EchartsSpecialZoom from '../preview-examples/echarts-special-zoom';
import EchartsPie from '../preview-examples/echarts-pie';
import EchartsProgressCircle from '../preview-examples/echarts-progress-circle';
import EchartsProgressArc from '../preview-examples/echarts-progress-arc';
import EmptyState from '../preview-examples/empty-state';
import EmptyStateCompact from '../preview-examples/empty-state-compact';
import EmptyStateCompactBreak from '../preview-examples/empty-state-compact-break';
import EventList from '../preview-examples/event-list';
import EventListCompact from '../preview-examples/event-list-compact';
import EventListCustomItemHeight from '../preview-examples/event-list-custom-item-height';
import EventListSelected from '../preview-examples/event-list-selected';
import ExpandingSearch from '../preview-examples/expanding-search';
import FlipTile from '../preview-examples/flip-tile';
import Grid from '../preview-examples/grid';
import GridPadding from '../preview-examples/grid-padding';
import GridSize from '../preview-examples/grid-size';
import Group from '../preview-examples/group';
import GroupContextMenu from '../preview-examples/group-context-menu';
import GroupCustomEntry from '../preview-examples/group-custom-entry';
import GroupHeaderSuppressed from '../preview-examples/group-header-suppressed';
import IconToggleButtonPrimaryGhost from '../preview-examples/icon-toggle-button-primary-ghost';
import IconToggleButtonPrimaryOutline from '../preview-examples/icon-toggle-button-primary-outline';
import IconToggleButtonSecondary from '../preview-examples/icon-toggle-button-secondary';
import IconToggleButtonSecondaryGhost from '../preview-examples/icon-toggle-button-secondary-ghost';
import IconToggleButtonSecondaryOutline from '../preview-examples/icon-toggle-button-secondary-outline';
import Input from '../preview-examples/input';
import InputDisabled from '../preview-examples/input-disabled';
import InputLabels from '../preview-examples/input-labels';
import InputReadonly from '../preview-examples/input-readonly';
import InputSearch from '../preview-examples/input-search';
import InputTypes from '../preview-examples/input-types';
import InputWithIcon from '../preview-examples/input-with-icon';
import KeyValue from '../preview-examples/key-value';
import KeyValueList from '../preview-examples/key-value-list';
import KeyValueListStriped from '../preview-examples/key-value-list-striped';
import KeyValueListWithCustomValue from '../preview-examples/key-value-list-with-custom-value';
import KeyValueListWithIcon from '../preview-examples/key-value-list-with-icon';
import KeyValueWithCustomValue from '../preview-examples/key-value-with-custom-value';
import KeyValueWithIcon from '../preview-examples/key-value-with-icon';
import KeyValueWithLabelLeft from '../preview-examples/key-value-with-label-left';
import Kpi from '../preview-examples/kpi';
import MapNavigation from '../preview-examples/map-navigation';
import MapNavigationOverlay from '../preview-examples/map-navigation-overlay';
import MenuCategory from '../preview-examples/menu-category';
import MessageBar from '../preview-examples/message-bar';
import ModalByInstance from '../preview-examples/modal-by-instance';
import ModalSizes from '../preview-examples/modal-sizes';
import Pagination from '../preview-examples/pagination';
import Pane from '../preview-examples/pane';
import PaneLayout from '../preview-examples/pane-layout';
import Pill from '../preview-examples/pill';
import PillVariants from '../preview-examples/pill-variants';
import PopoverNews from '../preview-examples/popover-news';
import PushCard from '../preview-examples/push-card';
import Select from '../preview-examples/select';
import SelectEditable from '../preview-examples/select-editable';
import SelectMultiple from '../preview-examples/select-multiple';
import SelectNgModel from '../preview-examples/select-ng-model';
import Settings from '../preview-examples/settings';
import Slider from '../preview-examples/slider';
import SliderError from '../preview-examples/slider-error';
import SliderMarker from '../preview-examples/slider-marker';
import SliderTrace from '../preview-examples/slider-trace';
import Spinner from '../preview-examples/spinner';
import SpinnerLarge from '../preview-examples/spinner-large';
import SplitButton from '../preview-examples/split-button';
import SplitButtonIcons from '../preview-examples/split-button-icons';
import Tabs from '../preview-examples/tabs';
import TabsRounded from '../preview-examples/tabs-rounded';
import Textarea from '../preview-examples/textarea';
import TextareaDisabled from '../preview-examples/textarea-disabled';
import TextareaReadonly from '../preview-examples/textarea-readonly';
import ThemeService from '../preview-examples/theme-switcher';
import Tile from '../preview-examples/tile';
import Timepicker from '../preview-examples/timepicker';
import Toast from '../preview-examples/toast';
import ToastCustom from '../preview-examples/toast-custom';
import ToastPosition from '../preview-examples/toast-position';
import Toggle from '../preview-examples/toggle';
import ToggleButtonPrimaryGhost from '../preview-examples/toggle-button-primary-ghost';
import ToggleButtonPrimaryOutline from '../preview-examples/toggle-button-primary-outline';
import ToggleButtonSecondary from '../preview-examples/toggle-button-secondary';
import ToggleButtonSecondaryGhost from '../preview-examples/toggle-button-secondary-ghost';
import ToggleButtonSecondaryOutline from '../preview-examples/toggle-button-secondary-outline';
import ToggleCustomLabel from '../preview-examples/toggle-custom-label';
import ToggleDisabled from '../preview-examples/toggle-disabled';
import ToggleNgModel from '../preview-examples/toggle-ng-model';
import Tooltip from '../preview-examples/tooltip';
import Tree from '../preview-examples/tree';
import TreeCustom from '../preview-examples/tree-custom';
import Upload from '../preview-examples/upload';
import Validation from '../preview-examples/validation';
import VerticalTabs from '../preview-examples/vertical-tabs';
import VerticalTabsWithAvatar from '../preview-examples/vertical-tabs-with-avatar';
import Workflow from '../preview-examples/workflow';
import WorkflowVertical from '../preview-examples/workflow-vertical';

import LinkButton from '../preview-examples/link-button';
import LinkButtonDisabled from '../preview-examples/link-button-disabled';
import Loading from '../preview-examples/loading';
import MenuWithBottomTabs from '../preview-examples/menu-with-bottom-tabs';
import Message from '../preview-examples/message';
import ModalByInstanceContent from '../preview-examples/modal-by-instance-content';
import ModalByTemplate from '../preview-examples/modal-by-template';
import PaginationAdvanced from '../preview-examples/pagination-advanced';
import RadioButton from '../preview-examples/radio-button';
import ToggleChecked from '../preview-examples/toggle-checked';
import ToggleIndeterminate from '../preview-examples/toggle-indeterminate';

const routes: Routes = [
  {
    path: 'preview',
    children: [
      {
        path: 'about-and-legal',
        component: AboutAndLegal,
      },
      {
        path: 'action-card',
        component: ActionCard,
      },
      {
        path: 'application',
        component: ApplicationExample,
      },
      {
        path: 'application-breakpoints',
        component: ApplicationBreakpointExample,
      },
      {
        path: 'application-app-switch',
        component: ApplicationAppSwitchExample,
      },
      {
        path: 'application-header',
        component: ApplicationHeaderExample,
      },
      {
        path: 'content',
        component: ContentExample,
      },
      {
        path: 'aggrid',
        component: AgGrid,
      },
      {
        path: 'avatar-image',
        component: AvatarImage,
      },
      {
        path: 'avatar-initials',
        component: AvatarInitials,
      },
      {
        path: 'avatar',
        component: Avatar,
      },
      {
        path: 'basic-navigation-without-header',
        component: BasicNavigationWithoutHeader,
      },
      {
        path: 'basic-navigation',
        component: BasicNavigation,
      },
      {
        path: 'blind-header-actions',
        component: BlindHeaderActions,
      },
      {
        path: 'blind-variants',
        component: BlindVariants,
      },
      {
        path: 'blind',
        component: Blind,
      },
      {
        path: 'breadcrumb-next-items',
        component: BreadcrumbNextItems,
      },
      {
        path: 'breadcrumb-truncate',
        component: BreadcrumbTruncate,
      },
      {
        path: 'breadcrumb',
        component: Breadcrumb,
      },
      {
        path: 'button-ghost',
        component: ButtonGhost,
      },
      {
        path: 'button-grey-ghost',
        component: ButtonGreyGhost,
      },
      {
        path: 'button-grey-secondary',
        component: ButtonGreySecondary,
      },
      {
        path: 'button-grey',
        component: ButtonGrey,
      },
      {
        path: 'button-group',
        component: ButtonGroup,
      },
      {
        path: 'button-loading',
        component: ButtonLoading,
      },
      {
        path: 'button-secondary',
        component: ButtonSecondary,
      },
      {
        path: 'button-text-icon',
        component: ButtonTextIcon,
      },
      {
        path: 'button-with-icon',
        component: ButtonWithIcon,
      },
      {
        path: 'buttons',
        component: Buttons,
      },
      { path: 'card', component: Card },
      {
        path: 'card-list',
        component: CardList,
      },
      {
        path: 'category-filter-suggestions',
        component: CategoryFilterSuggestions,
      },
      {
        path: 'category-filter',
        component: CategoryFilter,
      },
      {
        path: 'checkbox-indeterminate',
        component: CheckboxIndeterminate,
      },
      {
        path: 'checkbox',
        component: Checkbox,
      },
      {
        path: 'chip',
        component: Chip,
      },
      {
        path: 'date-dropdown',
        component: DateDropdown,
      },
      {
        path: 'date-dropdown-user-range',
        component: DateDropdownUserRange,
      },
      {
        path: 'content-header-no-back',
        component: ContentHeaderNoBack,
      },
      {
        path: 'content-header',
        component: ContentHeader,
      },
      {
        path: 'datepicker-locale',
        component: DatepickerLocale,
      },
      {
        path: 'datepicker-range',
        component: DatepickerRange,
      },
      {
        path: 'datepicker',
        component: Datepicker,
      },
      {
        path: 'datetimepicker',
        component: Datetimepicker,
      },
      {
        path: 'divider',
        component: Divider,
      },
      {
        path: 'drawer-full-height',
        component: DrawerFullHeight,
      },
      {
        path: 'drawer',
        component: Drawer,
      },
      {
        path: 'dropdown-button-icon',
        component: DropdownButtonIcon,
      },
      {
        path: 'dropdown-button',
        component: DropdownButton,
      },
      {
        path: 'dropdown-icon',
        component: DropdownIcon,
      },
      {
        path: 'dropdown-quick-actions',
        component: DropdownQuickActions,
      },
      {
        path: 'dropdown-submenu',
        component: DropdownSubmenu,
      },
      {
        path: 'dropdown',
        component: Dropdown,
      },
      {
        path: 'echarts',
        component: Echarts,
      },
      {
        path: 'echarts-special-3d',
        component: EchartsSpecial3d,
      },
      { path: 'echarts-bar-simple', component: EchartsBarSimple },
      {
        path: 'echarts-bar-horizontal-stacked',
        component: EchartsBarHorizontalStacked,
      },
      { path: 'echarts-circle', component: EchartsCircle },
      { path: 'echarts-empty-state', component: EchartsEmptyState },
      { path: 'echarts-gauge', component: EchartsGauge },
      {
        path: 'echarts-line-multiple-y-axis',
        component: EchartsLineMultipleYAxis,
      },
      { path: 'echarts-line-advanced', component: EchartsLineAdvanced },
      { path: 'echarts-line-simple', component: EchartsLineSimple },
      { path: 'echarts-toolbox', component: EchartsSpecialToolbox },
      { path: 'echarts-pie', component: EchartsPie },
      { path: 'echarts-progress-arc', component: EchartsProgressArc },
      { path: 'echarts-progress-circle', component: EchartsProgressCircle },
      { path: 'echarts-zoom', component: EchartsSpecialZoom },
      {
        path: 'empty-state-compact-break',
        component: EmptyStateCompactBreak,
      },
      {
        path: 'empty-state-compact',
        component: EmptyStateCompact,
      },
      {
        path: 'empty-state',
        component: EmptyState,
      },
      {
        path: 'event-list-compact',
        component: EventListCompact,
      },
      {
        path: 'event-list-custom-item-height',
        component: EventListCustomItemHeight,
      },
      {
        path: 'event-list-selected',
        component: EventListSelected,
      },
      {
        path: 'event-list',
        component: EventList,
      },
      {
        path: 'expanding-search',
        component: ExpandingSearch,
      },
      {
        path: 'flip-tile',
        component: FlipTile,
      },
      {
        path: 'grid-padding',
        component: GridPadding,
      },
      {
        path: 'grid-size',
        component: GridSize,
      },
      {
        path: 'grid',
        component: Grid,
      },
      {
        path: 'group-context-menu',
        component: GroupContextMenu,
      },
      {
        path: 'group-custom-entry',
        component: GroupCustomEntry,
      },
      {
        path: 'group-header-suppressed',
        component: GroupHeaderSuppressed,
      },
      {
        path: 'group',
        component: Group,
      },
      {
        path: 'icon-toggle-button-primary-ghost',
        component: IconToggleButtonPrimaryGhost,
      },
      {
        path: 'icon-toggle-button-primary-outline',
        component: IconToggleButtonPrimaryOutline,
      },
      {
        path: 'icon-toggle-button-secondary-ghost',
        component: IconToggleButtonSecondaryGhost,
      },
      {
        path: 'icon-toggle-button-secondary-outline',
        component: IconToggleButtonSecondaryOutline,
      },
      {
        path: 'icon-toggle-button-secondary',
        component: IconToggleButtonSecondary,
      },
      {
        path: 'input-disabled',
        component: InputDisabled,
      },
      {
        path: 'input-labels',
        component: InputLabels,
      },
      {
        path: 'input-readonly',
        component: InputReadonly,
      },
      {
        path: 'input-search',
        component: InputSearch,
      },
      {
        path: 'input-types',
        component: InputTypes,
      },
      {
        path: 'input-with-icon',
        component: InputWithIcon,
      },
      {
        path: 'input',
        component: Input,
      },
      {
        path: 'key-value-list-striped',
        component: KeyValueListStriped,
      },
      {
        path: 'key-value-list-with-custom-value',
        component: KeyValueListWithCustomValue,
      },
      {
        path: 'key-value-list-with-icon',
        component: KeyValueListWithIcon,
      },
      {
        path: 'key-value-list',
        component: KeyValueList,
      },
      {
        path: 'key-value-with-custom-value',
        component: KeyValueWithCustomValue,
      },
      {
        path: 'key-value-with-icon',
        component: KeyValueWithIcon,
      },
      {
        path: 'key-value-with-label-left',
        component: KeyValueWithLabelLeft,
      },
      {
        path: 'key-value',
        component: KeyValue,
      },
      {
        path: 'kpi',
        component: Kpi,
      },
      {
        path: 'link-button-disabled',
        component: LinkButtonDisabled,
      },
      {
        path: 'link-button',
        component: LinkButton,
      },
      {
        path: 'loading',
        component: Loading,
      },
      {
        path: 'map-navigation-overlay',
        component: MapNavigationOverlay,
      },
      {
        path: 'map-navigation',
        component: MapNavigation,
      },
      {
        path: 'menu-category',
        component: MenuCategory,
      },
      {
        path: 'menu-with-bottom-tabs',
        component: MenuWithBottomTabs,
      },
      {
        path: 'message',
        component: Message,
      },
      {
        path: 'message-bar',
        component: MessageBar,
      },
      {
        path: 'modal-by-instance-content',
        component: ModalByInstanceContent,
      },
      {
        path: 'modal-by-instance',
        component: ModalByInstance,
      },
      {
        path: 'modal-by-template',
        component: ModalByTemplate,
      },
      {
        path: 'modal-sizes',
        component: ModalSizes,
      },
      {
        path: 'pagination-advanced',
        component: PaginationAdvanced,
      },
      {
        path: 'pagination',
        component: Pagination,
      },
      { path: 'pane', component: Pane },
      { path: 'pane-layout', component: PaneLayout },
      {
        path: 'pill',
        component: Pill,
      },
      { path: 'pill-variants', component: PillVariants },
      {
        path: 'popover-news',
        component: PopoverNews,
      },
      {
        path: 'push-card',
        component: PushCard,
      },
      {
        path: 'radio-button',
        component: RadioButton,
      },
      {
        path: 'select-editable',
        component: SelectEditable,
      },
      {
        path: 'select-multiple',
        component: SelectMultiple,
      },
      {
        path: 'select-ng-model',
        component: SelectNgModel,
      },
      {
        path: 'select',
        component: Select,
      },
      {
        path: 'settings',
        component: Settings,
      },
      {
        path: 'slider-error',
        component: SliderError,
      },
      {
        path: 'slider-marker',
        component: SliderMarker,
      },
      {
        path: 'slider-trace',
        component: SliderTrace,
      },
      {
        path: 'slider',
        component: Slider,
      },
      {
        path: 'spinner-large',
        component: SpinnerLarge,
      },
      {
        path: 'spinner',
        component: Spinner,
      },
      {
        path: 'split-button-icons',
        component: SplitButtonIcons,
      },
      {
        path: 'split-button',
        component: SplitButton,
      },
      {
        path: 'tabs-rounded',
        component: TabsRounded,
      },
      {
        path: 'tabs',
        component: Tabs,
      },
      {
        path: 'textarea-disabled',
        component: TextareaDisabled,
      },
      {
        path: 'textarea-readonly',
        component: TextareaReadonly,
      },
      {
        path: 'textarea',
        component: Textarea,
      },
      {
        path: 'theme-switcher',
        component: ThemeService,
      },
      {
        path: 'tile',
        component: Tile,
      },
      {
        path: 'timepicker',
        component: Timepicker,
      },
      {
        path: 'toast-custom',
        component: ToastCustom,
      },
      {
        path: 'toast-position',
        component: ToastPosition,
      },
      {
        path: 'toast',
        component: Toast,
      },
      {
        path: 'toggle-button-primary-ghost',
        component: ToggleButtonPrimaryGhost,
      },
      {
        path: 'toggle-button-primary-outline',
        component: ToggleButtonPrimaryOutline,
      },
      {
        path: 'toggle-button-secondary-ghost',
        component: ToggleButtonSecondaryGhost,
      },
      {
        path: 'toggle-button-secondary-outline',
        component: ToggleButtonSecondaryOutline,
      },
      {
        path: 'toggle-button-secondary',
        component: ToggleButtonSecondary,
      },
      {
        path: 'toggle-checked',
        component: ToggleChecked,
      },
      {
        path: 'toggle-custom-label',
        component: ToggleCustomLabel,
      },
      {
        path: 'toggle-disabled',
        component: ToggleDisabled,
      },
      {
        path: 'toggle-indeterminate',
        component: ToggleIndeterminate,
      },
      {
        path: 'toggle-ng-model',
        component: ToggleNgModel,
      },
      {
        path: 'toggle',
        component: Toggle,
      },
      {
        path: 'tooltip',
        component: Tooltip,
      },
      {
        path: 'tree-custom',
        component: TreeCustom,
      },
      {
        path: 'tree',
        component: Tree,
      },
      {
        path: 'upload',
        component: Upload,
      },
      {
        path: 'validation',
        component: Validation,
      },
      {
        path: 'vertical-tabs-with-avatar',
        component: VerticalTabsWithAvatar,
      },
      {
        path: 'vertical-tabs',
        component: VerticalTabs,
      },
      {
        path: 'workflow-vertical',
        component: WorkflowVertical,
      },
      {
        path: 'workflow',
        component: Workflow,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
