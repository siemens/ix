/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './preview-examples/styles-auto-gen/global.css';

import { IxApplicationContext } from '@siemens/ix-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import AboutAndLegal from './preview-examples/about-and-legal';
import ActionCard from './preview-examples/action-card';
import AgGrid from './preview-examples/aggrid';
import AvatarImage from './preview-examples/avatar-image';
import AvatarInitials from './preview-examples/avatar-initials';
import Avatar from './preview-examples/avatar';
import BasicNavigationWithoutHeader from './preview-examples/basic-navigation-without-header';
import BasicNavigation from './preview-examples/basic-navigation';
import BlindHeaderActions from './preview-examples/blind-header-actions';
import BlindVariants from './preview-examples/blind-variants';
import Blind from './preview-examples/blind';
import BreadcrumbNextItems from './preview-examples/breadcrumb-next-items';
import BreadcrumbTruncate from './preview-examples/breadcrumb-truncate';
import Breadcrumb from './preview-examples/breadcrumb';
import ButtonGhost from './preview-examples/button-ghost';
import ButtonGreyGhost from './preview-examples/button-grey-ghost';
import ButtonGreySecondary from './preview-examples/button-grey-secondary';
import ButtonGrey from './preview-examples/button-grey';
import ButtonGroup from './preview-examples/button-group';
import ButtonLoading from './preview-examples/button-loading';
import ButtonSecondary from './preview-examples/button-secondary';
import ButtonTextIcon from './preview-examples/button-text-icon';
import ButtonWithIcon from './preview-examples/button-with-icon';
import Buttons from './preview-examples/buttons';
import Card from './preview-examples/card';
import CardList from './preview-examples/card-list';
import CategoryFilterSuggestions from './preview-examples/category-filter-suggestions';
import CategoryFilter from './preview-examples/category-filter';
import CheckboxIndeterminate from './preview-examples/checkbox-indeterminate';
import Checkbox from './preview-examples/checkbox';
import Chip from './preview-examples/chip';
import ContentHeaderNoBack from './preview-examples/content-header-no-back';
import ContentHeader from './preview-examples/content-header';
import DateDropdown from './preview-examples/date-dropdown';
import DateDropdownUserRange from './preview-examples/date-dropdown-user-range';
import DatepickerRange from './preview-examples/datepicker-range';
import Datepicker from './preview-examples/datepicker';
import DatepickerLocale from './preview-examples/datepicker-locale';
import Datetimepicker from './preview-examples/datetimepicker';
import Divider from './preview-examples/divider';
import DrawerFullHeight from './preview-examples/drawer-full-height';
import Drawer from './preview-examples/drawer';
import DropdownButtonIcon from './preview-examples/dropdown-button-icon';
import DropdownButton from './preview-examples/dropdown-button';
import DropdownIcon from './preview-examples/dropdown-icon';
import DropdownQuickActions from './preview-examples/dropdown-quick-actions';
import DropdownSubmenu from './preview-examples/dropdown-submenu';
import Dropdown from './preview-examples/dropdown';
import Echarts from './preview-examples/echarts';
import EmptyStateCompactBreak from './preview-examples/empty-state-compact-break';
import EmptyStateCompact from './preview-examples/empty-state-compact';
import EmptyState from './preview-examples/empty-state';
import EventListCompact from './preview-examples/event-list-compact';
import EventListCustomItemHeight from './preview-examples/event-list-custom-item-height';
import EventListSelected from './preview-examples/event-list-selected';
import EventList from './preview-examples/event-list';
import ExpandingSearch from './preview-examples/expanding-search';
import FlipTile from './preview-examples/flip-tile';
import GridPadding from './preview-examples/grid-padding';
import GridSize from './preview-examples/grid-size';
import Grid from './preview-examples/grid';
import GroupContextMenu from './preview-examples/group-context-menu';
import GroupCustomEntry from './preview-examples/group-custom-entry';
import GroupHeaderSuppressed from './preview-examples/group-header-suppressed';
import Group from './preview-examples/group';
import IconToggleButtonPrimaryGhost from './preview-examples/icon-toggle-button-primary-ghost';
import IconToggleButtonPrimaryOutline from './preview-examples/icon-toggle-button-primary-outline';
import IconToggleButtonSecondaryGhost from './preview-examples/icon-toggle-button-secondary-ghost';
import IconToggleButtonSecondaryOutline from './preview-examples/icon-toggle-button-secondary-outline';
import IconToggleButtonSecondary from './preview-examples/icon-toggle-button-secondary';
import InputDisabled from './preview-examples/input-disabled';
import InputLabels from './preview-examples/input-labels';
import InputReadonly from './preview-examples/input-readonly';
import InputSearch from './preview-examples/input-search';
import InputTypes from './preview-examples/input-types';
import InputWithIcon from './preview-examples/input-with-icon';
import Input from './preview-examples/input';
import KeyValueListStriped from './preview-examples/key-value-list-striped';
import KeyValueListWithCustomValue from './preview-examples/key-value-list-with-custom-value';
import KeyValueListWithIcon from './preview-examples/key-value-list-with-icon';
import KeyValueList from './preview-examples/key-value-list';
import KeyValueWithCustomValue from './preview-examples/key-value-with-custom-value';
import KeyValueWithIcon from './preview-examples/key-value-with-icon';
import KeyValueWithLabelLeft from './preview-examples/key-value-with-label-left';
import KeyValue from './preview-examples/key-value';
import Kpi from './preview-examples/kpi';
import LinkButtonDisabled from './preview-examples/link-button-disabled';
import LinkButton from './preview-examples/link-button';
import MapNavigationOverlay from './preview-examples/map-navigation-overlay';
import MapNavigation from './preview-examples/map-navigation';
import MenuCategory from './preview-examples/menu-category';
import MenuWithBottomTabs from './preview-examples/menu-with-bottom-tabs';
import MessageBar from './preview-examples/message-bar';
import ModalSizes from './preview-examples/modal-sizes';
import Modal from './preview-examples/modal';
import PaginationAdvanced from './preview-examples/pagination-advanced';
import Pagination from './preview-examples/pagination';
import Pill from './preview-examples/pill';
import PillVariants from './preview-examples/pill-variants';
import PopoverNews from './preview-examples/popover-news';
import PushCard from './preview-examples/push-card';
import RadioButton from './preview-examples/radio-button';
import SelectEditable from './preview-examples/select-editable';
import SelectMultiple from './preview-examples/select-multiple';
import Select from './preview-examples/select';
import Settings from './preview-examples/settings';
import SliderError from './preview-examples/slider-error';
import SliderMarker from './preview-examples/slider-marker';
import SliderTrace from './preview-examples/slider-trace';
import Slider from './preview-examples/slider';
import SpinnerLarge from './preview-examples/spinner-large';
import Spinner from './preview-examples/spinner';
import SplitButtonIcons from './preview-examples/split-button-icons';
import SplitButton from './preview-examples/split-button';
import TabsRounded from './preview-examples/tabs-rounded';
import Tabs from './preview-examples/tabs';
import TextareaDisabled from './preview-examples/textarea-disabled';
import TextareaReadonly from './preview-examples/textarea-readonly';
import Textarea from './preview-examples/textarea';
import ThemeSwitcher from './preview-examples/theme-switcher';
import Tile from './preview-examples/tile';
import Timepicker from './preview-examples/timepicker';
import ToastCustom from './preview-examples/toast-custom';
import ToastPosition from './preview-examples/toast-position';
import Toast from './preview-examples/toast';
import ToggleButtonPrimaryGhost from './preview-examples/toggle-button-primary-ghost';
import ToggleButtonPrimaryOutline from './preview-examples/toggle-button-primary-outline';
import ToggleButtonSecondaryGhost from './preview-examples/toggle-button-secondary-ghost';
import ToggleButtonSecondaryOutline from './preview-examples/toggle-button-secondary-outline';
import ToggleButtonSecondary from './preview-examples/toggle-button-secondary';
import ToggleChecked from './preview-examples/toggle-checked';
import ToggleCustomLabel from './preview-examples/toggle-custom-label';
import ToggleDisabled from './preview-examples/toggle-disabled';
import ToggleIndeterminate from './preview-examples/toggle-indeterminate';
import Toggle from './preview-examples/toggle';
import Tooltip from './preview-examples/tooltip';
import TreeCustom from './preview-examples/tree-custom';
import Tree from './preview-examples/tree';
import Upload from './preview-examples/upload';
import Validation from './preview-examples/validation';
import VerticalTabsWithAvatar from './preview-examples/vertical-tabs-with-avatar';
import VerticalTabs from './preview-examples/vertical-tabs';
import WorkflowVertical from './preview-examples/workflow-vertical';
import Workflow from './preview-examples/workflow';
import reportWebVitals from './reportWebVitals';
import { NavigationTest } from './testing/NavigationTest';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <IxApplicationContext>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/preview/about-and-legal" element={<AboutAndLegal />} />
        <Route path="/preview/action-card" element={<ActionCard />} />
        <Route path="/preview/aggrid" element={<AgGrid />} />
        <Route path="/preview/avatar-image" element={<AvatarImage />} />
        <Route path="/preview/avatar-initials" element={<AvatarInitials />} />
        <Route path="/preview/avatar" element={<Avatar />} />
        <Route path="/preview/basic-navigation-without-header" element={<BasicNavigationWithoutHeader />} />
        <Route path="/preview/basic-navigation" element={<BasicNavigation />} />
        <Route path="/preview/blind-header-actions" element={<BlindHeaderActions />} />
        <Route path="/preview/blind-variants" element={<BlindVariants />} />
        <Route path="/preview/blind" element={<Blind />} />
        <Route path="/preview/breadcrumb-next-items" element={<BreadcrumbNextItems />} />
        <Route path="/preview/breadcrumb-truncate" element={<BreadcrumbTruncate />} />
        <Route path="/preview/breadcrumb" element={<Breadcrumb />} />
        <Route path="/preview/button-ghost" element={<ButtonGhost />} />
        <Route path="/preview/button-grey-ghost" element={<ButtonGreyGhost />} />
        <Route path="/preview/button-grey-secondary" element={<ButtonGreySecondary />} />
        <Route path="/preview/button-grey" element={<ButtonGrey />} />
        <Route path="/preview/button-group" element={<ButtonGroup />} />
        <Route path="/preview/button-loading" element={<ButtonLoading />} />
        <Route path="/preview/button-secondary" element={<ButtonSecondary />} />
        <Route path="/preview/button-text-icon" element={<ButtonTextIcon />} />
        <Route path="/preview/button-with-icon" element={<ButtonWithIcon />} />
        <Route path="/preview/buttons" element={<Buttons />} />
        <Route path="/preview/card" element={<Card />} />
        <Route path="/preview/card-list" element={<CardList />} />
        <Route path="/preview/category-filter-suggestions" element={<CategoryFilterSuggestions />} />
        <Route path="/preview/category-filter" element={<CategoryFilter />} />
        <Route path="/preview/checkbox-indeterminate" element={<CheckboxIndeterminate />} />
        <Route path="/preview/checkbox" element={<Checkbox />} />
        <Route path="/preview/chip" element={<Chip />} />
        <Route path="/preview/date-dropdown" element={<DateDropdown/>}/>
        <Route path="/preview/date-dropdown-user-range" element={<DateDropdownUserRange/>}/>
        <Route path="/preview/content-header-no-back" element={<ContentHeaderNoBack />} />
        <Route path="/preview/content-header" element={<ContentHeader />} />
        <Route path="/preview/datepicker-range" element={<DatepickerRange />} />
        <Route path="/preview/datepicker" element={<Datepicker />} />
        <Route
          path="/preview/datepicker-locale"
          element={<DatepickerLocale />}
        />
        <Route path="/preview/datetimepicker" element={<Datetimepicker />} />
        <Route path="/preview/divider" element={<Divider />} />
        <Route path="/preview/drawer-full-height" element={<DrawerFullHeight />} />
        <Route path="/preview/drawer" element={<Drawer />} />
        <Route path="/preview/dropdown-button-icon" element={<DropdownButtonIcon />} />
        <Route path="/preview/dropdown-button" element={<DropdownButton />} />
        <Route path="/preview/dropdown-icon" element={<DropdownIcon />} />
        <Route path="/preview/dropdown-quick-actions" element={<DropdownQuickActions />} />
        <Route path="/preview/dropdown-submenu" element={<DropdownSubmenu />} />
        <Route path="/preview/dropdown" element={<Dropdown />} />
        <Route path="/preview/echarts" element={<Echarts />} />
        <Route path="/preview/empty-state-compact-break" element={<EmptyStateCompactBreak />} />
        <Route path="/preview/empty-state-compact" element={<EmptyStateCompact />} />
        <Route path="/preview/empty-state" element={<EmptyState />} />
        <Route path="/preview/event-list-compact" element={<EventListCompact />} />
        <Route path="/preview/event-list-custom-item-height" element={<EventListCustomItemHeight />} />
        <Route path="/preview/event-list-selected" element={<EventListSelected />} />
        <Route path="/preview/event-list" element={<EventList />} />
        <Route path="/preview/expanding-search" element={<ExpandingSearch />} />
        <Route path="/preview/flip-tile" element={<FlipTile />} />
        <Route path="/preview/grid-padding" element={<GridPadding />} />
        <Route path="/preview/grid-size" element={<GridSize />} />
        <Route path="/preview/grid" element={<Grid />} />
        <Route path="/preview/group-context-menu" element={<GroupContextMenu />} />
        <Route path="/preview/group-custom-entry" element={<GroupCustomEntry />} />
        <Route path="/preview/group-header-suppressed" element={<GroupHeaderSuppressed />} />
        <Route path="/preview/group" element={<Group />} />
        <Route path="/preview/icon-toggle-button-primary-ghost" element={<IconToggleButtonPrimaryGhost />} />
        <Route path="/preview/icon-toggle-button-primary-outline" element={<IconToggleButtonPrimaryOutline />} />
        <Route path="/preview/icon-toggle-button-secondary-ghost" element={<IconToggleButtonSecondaryGhost />} />
        <Route path="/preview/icon-toggle-button-secondary-outline" element={<IconToggleButtonSecondaryOutline />} />
        <Route path="/preview/icon-toggle-button-secondary" element={<IconToggleButtonSecondary />} />
        <Route path="/preview/input-disabled" element={<InputDisabled />} />
        <Route path="/preview/input-labels" element={<InputLabels />} />
        <Route path="/preview/input-readonly" element={<InputReadonly />} />
        <Route path="/preview/input-search" element={<InputSearch />} />
        <Route path="/preview/input-types" element={<InputTypes />} />
        <Route path="/preview/input-with-icon" element={<InputWithIcon />} />
        <Route path="/preview/input" element={<Input />} />
        <Route path="/preview/key-value-list-striped" element={<KeyValueListStriped />} />
        <Route path="/preview/key-value-list-with-custom-value" element={<KeyValueListWithCustomValue />} />
        <Route path="/preview/key-value-list-with-icon" element={<KeyValueListWithIcon />} />
        <Route path="/preview/key-value-list" element={<KeyValueList />} />
        <Route path="/preview/key-value-with-custom-value" element={<KeyValueWithCustomValue />} />
        <Route path="/preview/key-value-with-icon" element={<KeyValueWithIcon />} />
        <Route path="/preview/key-value-with-label-left" element={<KeyValueWithLabelLeft />} />
        <Route path="/preview/key-value" element={<KeyValue />} />
        <Route path="/preview/kpi" element={<Kpi />} />
        <Route path="/preview/link-button-disabled" element={<LinkButtonDisabled />} />
        <Route path="/preview/link-button" element={<LinkButton />} />
        <Route path="/preview/map-navigation-overlay" element={<MapNavigationOverlay />} />
        <Route path="/preview/map-navigation" element={<MapNavigation />} />
        <Route path="/preview/menu-category" element={<MenuCategory />} />
        <Route path="/preview/menu-with-bottom-tabs" element={<MenuWithBottomTabs />} />
        <Route path="/preview/message-bar" element={<MessageBar />} />
        <Route path="/preview/modal-sizes" element={<ModalSizes />} />
        <Route path="/preview/modal" element={<Modal />} />
        <Route path="/preview/pagination-advanced" element={<PaginationAdvanced />} />
        <Route path="/preview/pagination" element={<Pagination />} />
        <Route path="/preview/pill" element={<Pill />} />
        <Route path="/preview/pill-variants" element={<PillVariants />} />
        <Route path="/preview/popover-news" element={<PopoverNews />} />
        <Route path="/preview/push-card" element={<PushCard />} />
        <Route path="/preview/radio-button" element={<RadioButton />} />
        <Route path="/preview/select-editable" element={<SelectEditable />} />
        <Route path="/preview/select-multiple" element={<SelectMultiple />} />
        <Route path="/preview/select" element={<Select />} />
        <Route path="/preview/settings" element={<Settings />} />
        <Route path="/preview/slider-error" element={<SliderError />} />
        <Route path="/preview/slider-marker" element={<SliderMarker />} />
        <Route path="/preview/slider-trace" element={<SliderTrace />} />
        <Route path="/preview/slider" element={<Slider />} />
        <Route path="/preview/spinner-large" element={<SpinnerLarge />} />
        <Route path="/preview/spinner" element={<Spinner />} />
        <Route path="/preview/split-button-icons" element={<SplitButtonIcons />} />
        <Route path="/preview/split-button" element={<SplitButton />} />
        <Route path="/preview/tabs-rounded" element={<TabsRounded />} />
        <Route path="/preview/tabs" element={<Tabs />} />
        <Route path="/preview/textarea-disabled" element={<TextareaDisabled />} />
        <Route path="/preview/textarea-readonly" element={<TextareaReadonly />} />
        <Route path="/preview/textarea" element={<Textarea />} />
        <Route path="/preview/theme-switcher" element={<ThemeSwitcher />} />
        <Route path="/preview/tile" element={<Tile />} />
        <Route path="/preview/timepicker" element={<Timepicker />} />
        <Route path="/preview/toast-custom" element={<ToastCustom />} />
        <Route path="/preview/toast-position" element={<ToastPosition />} />
        <Route path="/preview/toast" element={<Toast />} />
        <Route path="/preview/toggle-button-primary-ghost" element={<ToggleButtonPrimaryGhost />} />
        <Route path="/preview/toggle-button-primary-outline" element={<ToggleButtonPrimaryOutline />} />
        <Route path="/preview/toggle-button-secondary-ghost" element={<ToggleButtonSecondaryGhost />} />
        <Route path="/preview/toggle-button-secondary-outline" element={<ToggleButtonSecondaryOutline />} />
        <Route path="/preview/toggle-button-secondary" element={<ToggleButtonSecondary />} />
        <Route path="/preview/toggle-checked" element={<ToggleChecked />} />
        <Route path="/preview/toggle-custom-label" element={<ToggleCustomLabel />} />
        <Route path="/preview/toggle-disabled" element={<ToggleDisabled />} />
        <Route path="/preview/toggle-indeterminate" element={<ToggleIndeterminate />} />
        <Route path="/preview/toggle" element={<Toggle />} />
        <Route path="/preview/tooltip" element={<Tooltip />} />
        <Route path="/preview/tree-custom" element={<TreeCustom />} />
        <Route path="/preview/tree" element={<Tree />} />
        <Route path="/preview/upload" element={<Upload />} />
        <Route path="/preview/validation" element={<Validation />} />
        <Route path="/preview/vertical-tabs-with-avatar" element={<VerticalTabsWithAvatar />} />
        <Route path="/preview/vertical-tabs" element={<VerticalTabs />} />
        <Route path="/preview/workflow-vertical" element={<WorkflowVertical />} />
        <Route path="/preview/workflow" element={<Workflow />} />
        <Route path="/testing">
          <Route path="navigation" element={<NavigationTest />}>
            <Route
              path="link1"
              element={
                <div>
                  <Buttons />
                </div>
              }
            />
            <Route
              path="link2"
              element={
                <div>
                  <ButtonGroup />
                </div>
              }
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </IxApplicationContext>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
