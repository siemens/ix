/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { IxModule } from '@siemens/ix-angular';
import { AgGridModule } from 'ag-grid-angular';
import { NgxEchartsModule } from 'ngx-echarts';
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
import ContentHeader from 'src/preview-examples/content-header';
import ContentHeaderNoBack from 'src/preview-examples/content-header-no-back';
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
import ModalByInstanceExample from 'src/preview-examples/modal-by-instance-content';
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
import ThemeSwitcherExample from 'src/preview-examples/theme-switcher';
import Tile from 'src/preview-examples/tile';
import Timepicker from 'src/preview-examples/timepicker';
import Toast from 'src/preview-examples/toast';
import ToastCustom from 'src/preview-examples/toast-custom';
import ToastPosition from 'src/preview-examples/toast-position';
import Toggle from 'src/preview-examples/toggle';
import ToggleButtonPrimary from 'src/preview-examples/toggle-button-primary';
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

@NgModule({
  declarations: [
    ApplicationExample,
    ApplicationBreakpointExample,
    ApplicationAppSwitchExample,
    ApplicationHeaderExample,
    AppComponent,
    ContentExample,
    Buttons,
    ButtonGroup,
    AGGrid,
    BasicNavigation,
    Modal,
    Toast,
    ToastCustom,
    ToastPosition,
    Tree,
    TreeCustom,
    AboutAndLegal,
    BasicNavigationWithOutHeader,
    Blind,
    BreadcrumbNextItems,
    BreadcrumbTruncate,
    Breadcrumb,
    NavigationTestComponent,
    ButtonWithIcon,
    CategoryFilterSuggestions,
    CategoryFilter,
    CheckboxIndeterminate,
    Checkbox,
    Chip,
    DateDropdown,
    DateDropdownUserRange,
    Datepicker,
    Datetimepicker,
    DrawerFullHeight,
    Drawer,
    DropdownButton,
    DropdownButtonIcon,
    DropdownIcon,
    Dropdown,
    DropdownQuickActions,
    DropdownSubmenu,
    Echarts,
    EventListCompact,
    EventListCustomItemHeight,
    EventListSelected,
    EventList,
    ExpandingSearch,
    FlipTile,
    GroupContextMenu,
    GroupCustomEntry,
    GroupHeaderSuppressed,
    Group,
    IconToggleButtonPrimaryGhost,
    IconToggleButtonPrimaryOutline,
    IconToggleButtonSecondary,
    IconToggleButtonSecondaryGhost,
    IconToggleButtonSecondaryOutline,
    InputDisabled,
    InputReadonly,
    InputWithIcon,
    Input,
    Kpi,
    MessageBar,
    Pagination,
    Pill,
    PillVariants,
    PopoverNews,
    Radiobutton,
    SelectEditable,
    SelectMultiple,
    SelectNgModel,
    Select,
    Settings,
    Pane,
    PaneLayout,
    Spinner,
    SpinnerLarge,
    SplitButtonIcons,
    SplitButton,
    Tabs,
    Textarea,
    TextareaReadonly,
    TextareaDisabled,
    ThemeSwitcherExample,
    Tile,
    Timepicker,
    ToggleButtonPrimary,
    ToggleButtonPrimaryGhost,
    ToggleButtonPrimaryOutline,
    ToggleButtonSecondary,
    ToggleButtonSecondaryGhost,
    ToggleButtonSecondaryOutline,
    ToggleDisabled,
    ToggleCustomLabel,
    ToggleNgModel,
    Toggle,
    Upload,
    VerticalTabsWithAvatar,
    VerticalTabs,
    Validation,
    Workflow,
    WorkflowVertical,
    MapNavigation,
    MapNavigationOverlay,
    TabsRounded,
    DatepickerRange,
    Tooltip,
    TooltipTitle,
    ModalByInstance,
    ModalByInstanceExample,
    PushCard,
    ActionCard,
    Card,
    CardList,
    EmptyState,
    EmptyStateCompact,
    EmptyStateCompactBreak,
    KeyValue,
    KeyValueWithCustomValue,
    KeyValueWithIcon,
    KeyValueWithLabelLeft,
    KeyValueList,
    KeyValueListWithCustomValue,
    KeyValueListWithIcon,
    KeyValueListStriped,
    ContentHeader,
    ContentHeaderNoBack,
    MenuCategory,
    Slider,
    SliderTrace,
    SliderMarker,
    SliderError,
    Grid,
    GridSize,
    GridPadding,
    ModalSizes,
    DatepickerLocale,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IxModule.forRoot(),
    AgGridModule,
    FormsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
