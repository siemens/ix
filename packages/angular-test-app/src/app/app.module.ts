/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
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
import AboutAndLegal from 'src/preview-examples/about-and-legal';
import AGGrid from 'src/preview-examples/aggrid';
import BasicNavigation from 'src/preview-examples/basic-navigation';
import BasicNavigationWithOutHeader from 'src/preview-examples/basic-navigation-without-header';
import Blind from 'src/preview-examples/blind';
import Breadcrumb from 'src/preview-examples/breadcrumb';
import BreadcrumbNextItems from 'src/preview-examples/breadcrumb-next-items';
import BreadcrumbTrucate from 'src/preview-examples/breadcrumb-truncate';
import ButtonGroup from 'src/preview-examples/button-group';
import ButtonSelected from 'src/preview-examples/button-selected';
import ButtonWithIcon from 'src/preview-examples/button-with-icon';
import Buttons from 'src/preview-examples/buttons';
import CategoryFilter from 'src/preview-examples/category-filter';
import CategoryFilterSuggestions from 'src/preview-examples/category-filter-suggestions';
import Checkbox from 'src/preview-examples/checkbox';
import CheckboxIndeterminate from 'src/preview-examples/checkbox-indeterminate';
import Chip from 'src/preview-examples/chip';
import Datepicker from 'src/preview-examples/datepicker';
import DatepickerRange from 'src/preview-examples/datepicker-range';
import Datetimepicker from 'src/preview-examples/datetimepicker';
import Drawer from 'src/preview-examples/drawer';
import DrawerFullHeight from 'src/preview-examples/drawer-full-height';
import Dropdown from 'src/preview-examples/dropdown';
import DropdownIcon from 'src/preview-examples/dropdown-icon';
import EmptyState from 'src/preview-examples/empty-state';
import EmptyStateCompact from 'src/preview-examples/empty-state-compact';
import EmptyStateCompactBreak from 'src/preview-examples/empty-state-compact-break';
import EventList from 'src/preview-examples/event-list';
import EventListCompact from 'src/preview-examples/event-list-compact';
import EventListCustomItemHeight from 'src/preview-examples/event-list-custom-item-height';
import EventListSelected from 'src/preview-examples/event-list-selected';
import ExpandingSearch from 'src/preview-examples/expanding-search';
import FlipTile from 'src/preview-examples/flip-tile';
import Group from 'src/preview-examples/group';
import GroupContextMenu from 'src/preview-examples/group-context-menu';
import GroupCustomEntry from 'src/preview-examples/group-custom-entry';
import GroupHeaderSuppressed from 'src/preview-examples/group-header-suppressed';
import Input from 'src/preview-examples/input';
import InputDisabled from 'src/preview-examples/input-disabled';
import InputReadonly from 'src/preview-examples/input-readonly';
import InputWithIcon from 'src/preview-examples/input-with-icon';
import Kpi from 'src/preview-examples/kpi';
import MapNavigation from 'src/preview-examples/map-navigation';
import MapNavigationOverlay from 'src/preview-examples/map-navigation-overlay';
import MessageBar from 'src/preview-examples/message-bar';
import Modal from 'src/preview-examples/modal';
import ModalByInstance from 'src/preview-examples/modal-by-instance';
import ModalByInstanceExample from 'src/preview-examples/modal-by-instance-content';
import PageHeader from 'src/preview-examples/page-header';
import Pill from 'src/preview-examples/pill';
import PopoverNews from 'src/preview-examples/popover-news';
import Radiobutton from 'src/preview-examples/radio-button';
import Select from 'src/preview-examples/select';
import SelectEditable from 'src/preview-examples/select-editable';
import SelectMultiple from 'src/preview-examples/select-multiple';
import Settings from 'src/preview-examples/settings';
import Spinner from 'src/preview-examples/spinner';
import SpinnerLarge from 'src/preview-examples/spinner-large';
import SplitButton from 'src/preview-examples/split-button';
import SplitButtonIcons from 'src/preview-examples/split-button-icons';
import Tabs from 'src/preview-examples/tabs';
import TabsRounded from 'src/preview-examples/tabs-rounded';
import Textarea from 'src/preview-examples/textarea';
import TextareaDisabled from 'src/preview-examples/textarea-disabled';
import TextareaReadonly from 'src/preview-examples/textarea-readonly';
import ThemeSwitcherService from 'src/preview-examples/theme-switcher';
import Tile from 'src/preview-examples/tile';
import Timepicker from 'src/preview-examples/timepicker';
import Toast from 'src/preview-examples/toast';
import ToastCustom from 'src/preview-examples/toast-custom';
import Toggle from 'src/preview-examples/toggle';
import ToggleCustomLabel from 'src/preview-examples/toggle-custom-label';
import ToggleCustomDisabled from 'src/preview-examples/toggle-disabled';
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
import { NavigationTestComponent } from './components/navigation-test.component';

@NgModule({
  declarations: [
    AppComponent,
    Buttons,
    ButtonGroup,
    AGGrid,
    BasicNavigation,
    Modal,
    Toast,
    ToastCustom,
    Tree,
    TreeCustom,
    AboutAndLegal,
    BasicNavigationWithOutHeader,
    Blind,
    BreadcrumbNextItems,
    BreadcrumbTrucate,
    Breadcrumb,
    NavigationTestComponent,
    ButtonSelected,
    ButtonWithIcon,
    CategoryFilterSuggestions,
    CategoryFilter,
    CheckboxIndeterminate,
    Checkbox,
    Chip,
    Datepicker,
    Datetimepicker,
    DrawerFullHeight,
    Drawer,
    DropdownIcon,
    Dropdown,
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
    InputDisabled,
    InputReadonly,
    InputWithIcon,
    Input,
    Kpi,
    MessageBar,
    Pill,
    PopoverNews,
    Radiobutton,
    SelectEditable,
    SelectMultiple,
    Select,
    Settings,
    Spinner,
    SpinnerLarge,
    SplitButtonIcons,
    SplitButton,
    Tabs,
    Textarea,
    TextareaReadonly,
    TextareaDisabled,
    ThemeSwitcherService,
    Tile,
    Timepicker,
    ToggleCustomDisabled,
    ToggleCustomLabel,
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
    PageHeader,
    EmptyState,
    EmptyStateCompact,
    EmptyStateCompactBreak,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IxModule.forRoot(),
    AgGridModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
