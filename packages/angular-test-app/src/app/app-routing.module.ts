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
import AboutAndLegal from 'src/preview-examples/about-and-legal';
import ActionCard from 'src/preview-examples/action-card';
import AGGrid from 'src/preview-examples/aggrid';
import ApplicationExample from 'src/preview-examples/application';
import ApplicationAppSwitchExample from 'src/preview-examples/application-app-switch';
import ApplicationBreakpointExample from 'src/preview-examples/application-breakpoints';
import ApplicationHeaderExample from 'src/preview-examples/application-header';
import BasicNavigation from 'src/preview-examples/basic-navigation';
import BasicNavigationWithOutHeader from 'src/preview-examples/basic-navigation-without-header';
import Blind from 'src/preview-examples/blind';
import Breadcrumb from 'src/preview-examples/breadcrumb';
import BreadcrumbNextItems from 'src/preview-examples/breadcrumb-next-items';
import BreadcrumbTruncate from 'src/preview-examples/breadcrumb-truncate';
import ButtonGroup from 'src/preview-examples/button-group';
import ButtonWithIcon from 'src/preview-examples/button-with-icon';
import Buttons from 'src/preview-examples/buttons';
import Card from 'src/preview-examples/card';
import CardList from 'src/preview-examples/card-list';
import CategoryFilter from 'src/preview-examples/category-filter';
import CategoryFilterSuggestions from 'src/preview-examples/category-filter-suggestions';
import Checkbox from 'src/preview-examples/checkbox';
import CheckboxIndeterminate from 'src/preview-examples/checkbox-indeterminate';
import Chip from 'src/preview-examples/chip';
import ContentExample from 'src/preview-examples/content';
import PageHeader from 'src/preview-examples/content-header';
import PageHeaderNoBack from 'src/preview-examples/content-header-no-back';
import DateDropdown from 'src/preview-examples/date-dropdown';
import DateDropdownUserRange from 'src/preview-examples/date-dropdown-user-range';
import Datepicker from 'src/preview-examples/datepicker';
import DatepickerLocale from 'src/preview-examples/datepicker-locale';
import DatepickerRange from 'src/preview-examples/datepicker-range';
import Datetimepicker from 'src/preview-examples/datetimepicker';
import Drawer from 'src/preview-examples/drawer';
import DrawerFullHeight from 'src/preview-examples/drawer-full-height';
import Dropdown from 'src/preview-examples/dropdown';
import DropdownButton from 'src/preview-examples/dropdown-button';
import DropdownButtonIcon from 'src/preview-examples/dropdown-button-icon';
import DropdownIcon from 'src/preview-examples/dropdown-icon';
import DropdownQuickActions from 'src/preview-examples/dropdown-quick-actions';
import DropdownSubmenu from 'src/preview-examples/dropdown-submenu';
import EmptyState from 'src/preview-examples/empty-state';
import EmptyStateCompact from 'src/preview-examples/empty-state-compact';
import EmptyStateCompactBreak from 'src/preview-examples/empty-state-compact-break';
import EventList from 'src/preview-examples/event-list';
import EventListCompact from 'src/preview-examples/event-list-compact';
import EventListCustomItemHeight from 'src/preview-examples/event-list-custom-item-height';
import EventListSelected from 'src/preview-examples/event-list-selected';
import ExpandingSearch from 'src/preview-examples/expanding-search';
import FlipTile from 'src/preview-examples/flip-tile';
import Grid from 'src/preview-examples/grid';
import GridPadding from 'src/preview-examples/grid-padding';
import GridSize from 'src/preview-examples/grid-size';
import Group from 'src/preview-examples/group';
import GroupContextMenu from 'src/preview-examples/group-context-menu';
import GroupCustomEntry from 'src/preview-examples/group-custom-entry';
import GroupHeaderSuppressed from 'src/preview-examples/group-header-suppressed';
import IconToggleButtonPrimaryGhost from 'src/preview-examples/icon-toggle-button-primary-ghost';
import IconToggleButtonPrimaryOutline from 'src/preview-examples/icon-toggle-button-primary-outline';
import IconToggleButtonSecondary from 'src/preview-examples/icon-toggle-button-secondary';
import IconToggleButtonSecondaryGhost from 'src/preview-examples/icon-toggle-button-secondary-ghost';
import IconToggleButtonSecondaryOutline from 'src/preview-examples/icon-toggle-button-secondary-outline';
import Input from 'src/preview-examples/input';
import InputDisabled from 'src/preview-examples/input-disabled';
import InputReadonly from 'src/preview-examples/input-readonly';
import InputWithIcon from 'src/preview-examples/input-with-icon';
import KeyValue from 'src/preview-examples/key-value';
import KeyValueList from 'src/preview-examples/key-value-list';
import KeyValueListStriped from 'src/preview-examples/key-value-list-striped';
import KeyValueListWithCustomValue from 'src/preview-examples/key-value-list-with-custom-value';
import KeyValueListWithIcon from 'src/preview-examples/key-value-list-with-icon';
import KeyValueWithCustomValue from 'src/preview-examples/key-value-with-custom-value';
import KeyValueWithIcon from 'src/preview-examples/key-value-with-icon';
import KeyValueWithLabelLeft from 'src/preview-examples/key-value-with-label-left';
import Kpi from 'src/preview-examples/kpi';
import MapNavigation from 'src/preview-examples/map-navigation';
import MapNavigationOverlay from 'src/preview-examples/map-navigation-overlay';
import MenuCategory from 'src/preview-examples/menu-category';
import MessageBar from 'src/preview-examples/message-bar';
import ModalByInstance from 'src/preview-examples/modal-by-instance';
import Modal from 'src/preview-examples/modal-by-template';
import ModalSizes from 'src/preview-examples/modal-sizes';
import Pagination from 'src/preview-examples/pagination';
import Pill from 'src/preview-examples/pill';
import PillVariants from 'src/preview-examples/pill-variants';
import PopoverNews from 'src/preview-examples/popover-news';
import PushCard from 'src/preview-examples/push-card';
import Radiobutton from 'src/preview-examples/radio-button';
import Select from 'src/preview-examples/select';
import SelectEditable from 'src/preview-examples/select-editable';
import SelectMultiple from 'src/preview-examples/select-multiple';
import SelectNgModel from 'src/preview-examples/select-ng-model';
import Settings from 'src/preview-examples/settings';
import Slider from 'src/preview-examples/slider';
import SliderError from 'src/preview-examples/slider-error';
import SliderMarker from 'src/preview-examples/slider-marker';
import SliderTrace from 'src/preview-examples/slider-trace';
import Spinner from 'src/preview-examples/spinner';
import SpinnerLarge from 'src/preview-examples/spinner-large';
import SplitButton from 'src/preview-examples/split-button';
import SplitButtonIcons from 'src/preview-examples/split-button-icons';
import Tabs from 'src/preview-examples/tabs';
import TabsRounded from 'src/preview-examples/tabs-rounded';
import Textarea from 'src/preview-examples/textarea';
import TextareaDisabled from 'src/preview-examples/textarea-disabled';
import TextareaReadonly from 'src/preview-examples/textarea-readonly';
import ThemeService from 'src/preview-examples/theme-switcher';
import Tile from 'src/preview-examples/tile';
import Timepicker from 'src/preview-examples/timepicker';
import Toast from 'src/preview-examples/toast';
import ToastCustom from 'src/preview-examples/toast-custom';
import ToastPosition from 'src/preview-examples/toast-position';
import Toggle from 'src/preview-examples/toggle';
import ToggleButtonPrimaryGhost from 'src/preview-examples/toggle-button-primary-ghost';
import ToggleButtonPrimaryOutline from 'src/preview-examples/toggle-button-primary-outline';
import ToggleButtonSecondary from 'src/preview-examples/toggle-button-secondary';
import ToggleButtonSecondaryGhost from 'src/preview-examples/toggle-button-secondary-ghost';
import ToggleButtonSecondaryOutline from 'src/preview-examples/toggle-button-secondary-outline';
import ToggleCustomLabel from 'src/preview-examples/toggle-custom-label';
import ToggleDisabled from 'src/preview-examples/toggle-disabled';
import ToggleNgModel from 'src/preview-examples/toggle-ng-model';
import Tooltip from 'src/preview-examples/tooltip';
import TooltipTitle from 'src/preview-examples/tooltip-title';
import Tree from 'src/preview-examples/tree';
import TreeCustom from 'src/preview-examples/tree-custom';
import Upload from 'src/preview-examples/upload';
import Validation from 'src/preview-examples/validation';
import VerticalTabs from 'src/preview-examples/vertical-tabs';
import VerticalTabsWithAvatar from 'src/preview-examples/vertical-tabs-with-avatar';
import Workflow from 'src/preview-examples/workflow';
import WorkflowVertical from 'src/preview-examples/workflow-vertical';
import Pane from '../preview-examples/pane';
import PaneLayout from '../preview-examples/pane-layout';
import { NavigationTestComponent } from './components/navigation-test.component';
import Echarts from 'src/preview-examples/echarts';
import ValidationSelect from 'src/preview-examples/validation-select';

const routes: Routes = [
  {
    path: 'testing',
    children: [
      {
        path: 'navigation',
        component: NavigationTestComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'link1',
          },
          {
            path: 'link1',
            component: Buttons,
          },
          {
            path: 'link2',
            component: ButtonGroup,
          },
        ],
      },
    ],
  },
  {
    path: 'preview',
    children: [
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
        path: 'buttons',
        component: Buttons,
      },
      {
        path: 'button-group',
        component: ButtonGroup,
      },
      {
        path: 'aggrid',
        component: AGGrid,
      },
      {
        path: 'basic-navigation',
        component: BasicNavigation,
      },
      {
        path: 'modal',
        component: Modal,
      },
      {
        path: 'toast',
        component: Toast,
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
        path: 'tree',
        component: Tree,
      },
      {
        path: 'tree-custom',
        component: TreeCustom,
      },
      {
        path: 'about-and-legal',
        component: AboutAndLegal,
      },
      {
        path: 'basic-navigation-without-header',
        component: BasicNavigationWithOutHeader,
      },
      {
        path: 'blind',
        component: Blind,
      },
      { path: 'breadcrumb-next-items', component: BreadcrumbNextItems },
      { path: 'breadcrumb-truncate', component: BreadcrumbTruncate },
      { path: 'breadcrumb', component: Breadcrumb },
      { path: 'button-with-icon', component: ButtonWithIcon },
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
        path: 'datepicker',
        component: Datepicker,
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
        path: 'datetimepicker',
        component: Datetimepicker,
      },
      {
        path: 'drawer-full-height',
        component: DrawerFullHeight,
      },
      {
        path: 'drawer',
        component: Drawer,
      },
      { path: 'dropdown-button', component: DropdownButton },
      { path: 'dropdown-button-icon', component: DropdownButtonIcon },
      { path: 'dropdown-icon', component: DropdownIcon },

      { path: 'dropdown', component: Dropdown },
      { path: 'dropdown-quick-actions', component: DropdownQuickActions },
      { path: 'dropdown-submenu', component: DropdownSubmenu },
      { path: 'echarts', component: Echarts },
      { path: 'event-list-compact', component: EventListCompact },
      {
        path: 'event-list-custom-item-height',
        component: EventListCustomItemHeight,
      },
      { path: 'event-list-selected', component: EventListSelected },
      { path: 'event-list', component: EventList },
      { path: 'expanding-search', component: ExpandingSearch },
      { path: 'flip-tile', component: FlipTile },
      { path: 'group-context-menu', component: GroupContextMenu },
      { path: 'group-custom-entry', component: GroupCustomEntry },
      { path: 'group-header-suppressed', component: GroupHeaderSuppressed },
      { path: 'group', component: Group },
      {
        path: 'icon-toggle-button-secondary',
        component: IconToggleButtonSecondary,
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
        path: 'icon-toggle-button-primary-ghost',
        component: IconToggleButtonPrimaryGhost,
      },
      {
        path: 'icon-toggle-button-primary-outline',
        component: IconToggleButtonPrimaryOutline,
      },
      { path: 'input-disabled', component: InputDisabled },
      { path: 'input-readonly', component: InputReadonly },
      { path: 'input-with-icon', component: InputWithIcon },
      { path: 'input', component: Input },
      { path: 'kpi', component: Kpi },
      { path: 'message-bar', component: MessageBar },
      { path: 'pagination', component: Pagination },
      { path: 'pane', component: Pane },
      { path: 'pane-layout', component: PaneLayout },
      { path: 'pill', component: Pill },
      { path: 'pill-variants', component: PillVariants },
      { path: 'popover-news', component: PopoverNews },
      { path: 'radio-button', component: Radiobutton },
      { path: 'select-editable', component: SelectEditable },
      { path: 'select-multiple', component: SelectMultiple },
      { path: 'select-ng-model', component: SelectNgModel },
      { path: 'select', component: Select },
      { path: 'settings', component: Settings },
      { path: 'spinner', component: Spinner },
      { path: 'spinner-large', component: SpinnerLarge },
      { path: 'split-button-icons', component: SplitButtonIcons },
      { path: 'split-button', component: SplitButton },
      { path: 'tabs', component: Tabs },
      { path: 'tabs-rounded', component: TabsRounded },
      { path: 'textarea', component: Textarea },
      { path: 'textarea-disabled', component: TextareaDisabled },
      { path: 'textarea-readonly', component: TextareaReadonly },
      { path: 'theme-switcher', component: ThemeService },
      { path: 'tile', component: Tile },
      { path: 'timepicker', component: Timepicker },
      { path: 'toggle-button-secondary', component: ToggleButtonSecondary },
      {
        path: 'toggle-button-secondary-ghost',
        component: ToggleButtonSecondaryGhost,
      },
      {
        path: 'toggle-button-secondary-outline',
        component: ToggleButtonSecondaryOutline,
      },
      {
        path: 'toggle-button-primary-ghost',
        component: ToggleButtonPrimaryGhost,
      },
      {
        path: 'toggle-button-primary-outline',
        component: ToggleButtonPrimaryOutline,
      },
      { path: 'toggle-disabled', component: ToggleDisabled },
      { path: 'toggle-custom-label', component: ToggleCustomLabel },
      { path: 'toggle-ng-model', component: ToggleNgModel },
      { path: 'toggle', component: Toggle },
      { path: 'upload', component: Upload },
      { path: 'vertical-tabs-with-avatar', component: VerticalTabsWithAvatar },
      { path: 'vertical-tabs', component: VerticalTabs },
      { path: 'validation', component: Validation },
      { path: 'workflow', component: Workflow },
      { path: 'workflow-vertical', component: WorkflowVertical },
      { path: 'map-navigation', component: MapNavigation },
      { path: 'map-navigation-overlay', component: MapNavigationOverlay },
      { path: 'tooltip', component: Tooltip },
      { path: 'tooltip-title', component: TooltipTitle },
      { path: 'modal-by-instance', component: ModalByInstance },
      { path: 'push-card', component: PushCard },
      { path: 'action-card', component: ActionCard },
      { path: 'card', component: Card },
      { path: 'card-list', component: CardList },
      { path: 'page-header', component: PageHeader },
      { path: 'page-header-no-back', component: PageHeaderNoBack },
      { path: 'empty-state', component: EmptyState },
      { path: 'empty-state-compact', component: EmptyStateCompact },
      { path: 'empty-state-compact-break', component: EmptyStateCompactBreak },
      { path: 'key-value', component: KeyValue },
      {
        path: 'key-value-with-custom-value',
        component: KeyValueWithCustomValue,
      },
      { path: 'key-value-with-icon', component: KeyValueWithIcon },
      { path: 'key-value-with-label-left', component: KeyValueWithLabelLeft },
      { path: 'key-value-list', component: KeyValueList },
      {
        path: 'key-value-list-with-custom-value',
        component: KeyValueListWithCustomValue,
      },
      { path: 'key-value-list-with-icon', component: KeyValueListWithIcon },
      { path: 'key-value-list-striped', component: KeyValueListStriped },
      { path: 'menu-category', component: MenuCategory },
      { path: 'slider', component: Slider },
      { path: 'slider-trace', component: SliderTrace },
      { path: 'slider-marker', component: SliderMarker },
      { path: 'slider-error', component: SliderError },
      { path: 'grid', component: Grid },
      { path: 'grid-size', component: GridSize },
      { path: 'grid-padding', component: GridPadding },
      { path: 'modal-sizes', component: ModalSizes },
      { path: 'validation-select', component: ValidationSelect },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
