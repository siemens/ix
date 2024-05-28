/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import 'example-styles/dist/global.css';

import { IxApplicationContext } from '@siemens/ix-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import AboutAndLegal from './preview-examples/about-and-legal';
import ActionCard from './preview-examples/action-card';
import AGGrid from './preview-examples/aggrid';
import Application from './preview-examples/application';
import ApplicationAppSwitch from './preview-examples/application-app-switch';
import ApplicationBreakpoints from './preview-examples/application-breakpoints';
import ApplicationHeader from './preview-examples/application-header';
import BasicNavigation from './preview-examples/basic-navigation';
import BasicNavigationWithoutHeader from './preview-examples/basic-navigation-without-header';
import Blind from './preview-examples/blind';
import Breadcrumb from './preview-examples/breadcrumb';
import BreadcrumbNextItems from './preview-examples/breadcrumb-next-items';
import BreadcrumbTruncate from './preview-examples/breadcrumb-truncate';
import ButtonGroup from './preview-examples/button-group';
import ButtonWithIcon from './preview-examples/button-with-icon';
import Buttons from './preview-examples/buttons';
import Card from './preview-examples/card';
import CardList from './preview-examples/card-list';
import Checkbox from './preview-examples/checkbox';
import CheckboxIndeterminate from './preview-examples/checkbox-indeterminate';
import Chip from './preview-examples/chip';
import Content from './preview-examples/content';
import PageHeader from './preview-examples/content-header';
import DateDropdown from './preview-examples/date-dropdown';
import DateDropdownUserRange from './preview-examples/date-dropdown-user-range';
import Datepicker from './preview-examples/datepicker';
import DatepickerLocale from './preview-examples/datepicker-locale';
import DatepickerRange from './preview-examples/datepicker-range';
import Datetimepicker from './preview-examples/datetimepicker';
import DrawerFullHeight from './preview-examples/drawer-full-height';
import Dropdown from './preview-examples/dropdown';
import DropdownButton from './preview-examples/dropdown-button';
import DropdownIcon from './preview-examples/dropdown-icon';
import DropdownSubmenu from './preview-examples/dropdown-submenu';
import EventList from './preview-examples/event-list';
import EventListCompact from './preview-examples/event-list-compact';
import EventListCustomHeight from './preview-examples/event-list-custom-item-height';
import EventListSelected from './preview-examples/event-list-selected';
import ExpandingSearch from './preview-examples/expanding-search';
import FlipTile from './preview-examples/flip-tile';
import Grid from './preview-examples/grid';
import GridPadding from './preview-examples/grid-padding';
import GridSize from './preview-examples/grid-size';
import Group from './preview-examples/group';
import GroupContextMenu from './preview-examples/group-context-menu';
import GroupCustomEntry from './preview-examples/group-custom-entry';
import GroupHeaderSuppressed from './preview-examples/group-header-suppressed';
import Input from './preview-examples/input';
import InputDisabled from './preview-examples/input-disabled';
import InputReadonly from './preview-examples/input-readonly';
import InputWithIcon from './preview-examples/input-with-icon';
import Kpi from './preview-examples/kpi';
import MapNavigation from './preview-examples/map-navigation';
import MapNavigationOverlay from './preview-examples/map-navigation-overlay';
import MenuCategory from './preview-examples/menu-category';
import MessageBar from './preview-examples/message-bar';
import ModalExample from './preview-examples/modal';
import ModalSizes from './preview-examples/modal-sizes';
import Pane from './preview-examples/pane';
import PaneLayout from './preview-examples/pane-layout';
import Pill from './preview-examples/pill';
import PillVariants from './preview-examples/pill-variants';
import PopoverNews from './preview-examples/popover-news';
import PushCard from './preview-examples/push-card';
import RadioButton from './preview-examples/radio-button';
import Select from './preview-examples/select';
import SelectEditable from './preview-examples/select-editable';
import SelectMultiple from './preview-examples/select-multiple';
import Settings from './preview-examples/settings';
import Slider from './preview-examples/slider';
import SliderError from './preview-examples/slider-error';
import SliderMarker from './preview-examples/slider-marker';
import SliderTrace from './preview-examples/slider-trace';
import Spinner from './preview-examples/spinner';
import SpinnerLarge from './preview-examples/spinner-large';
import Splitbutton from './preview-examples/split-button';
import SplitbuttonIcons from './preview-examples/split-button-icons';
import Tabs from './preview-examples/tabs';
import Textarea from './preview-examples/textarea';
import TextareaDisabled from './preview-examples/textarea-disabled';
import TextareaReadonly from './preview-examples/textarea-readonly';
import ThemeSwitcher from './preview-examples/theme-switcher';
import Tile from './preview-examples/tile';
import Timepicker from './preview-examples/timepicker';
import Toast from './preview-examples/toast';
import ToastCustom from './preview-examples/toast-custom';
import ToastPosition from './preview-examples/toast-position';
import Toggle from './preview-examples/toggle';
import ToggleCustomLabel from './preview-examples/toggle-custom-label';
import ToggleDisabled from './preview-examples/toggle-disabled';
import Tooltip from './preview-examples/tooltip';
import TooltipTitle from './preview-examples/tooltip-title';
import Tree from './preview-examples/tree';
import TreeCustom from './preview-examples/tree-custom';
import Upload from './preview-examples/upload';
import Validation from './preview-examples/validation';
import Workflow from './preview-examples/workflow';
import WorkflowVertical from './preview-examples/workflow-vertical';
import reportWebVitals from './reportWebVitals';
import { NavigationTest } from './testing/NavigationTest';
import Echarts from './preview-examples/echarts';
import ValidationSelect from './preview-examples/validation-select';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <IxApplicationContext>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/preview/upload" element={<Upload />} />
        <Route path="/preview/checkbox" element={<Checkbox />} />
        <Route path="/preview/application" element={<Application />} />
        <Route
          path="/preview/application-breakpoints"
          element={<ApplicationBreakpoints />}
        />
        <Route
          path="/preview/application-app-switch"
          element={<ApplicationAppSwitch />}
        />
        <Route
          path="/preview/application-header"
          element={<ApplicationHeader />}
        />
        <Route path="/preview/content" element={<Content />} />
        <Route
          path="/preview/checkbox-indeterminate"
          element={<CheckboxIndeterminate />}
        />
        <Route path="/preview/checkbox" element={<Checkbox />} />
        <Route
          path="/preview/checkbox-indeterminate"
          element={<CheckboxIndeterminate />}
        />
        <Route path="/preview/buttons" element={<Buttons />} />
        <Route path="/preview/button-with-icon" element={<ButtonWithIcon />} />
        <Route path="/preview/button-group" element={<ButtonGroup />} />

        <Route path="/preview/blind" element={<Blind />} />
        <Route path="/preview/breadcrumb" element={<Breadcrumb />} />
        <Route
          path="/preview/breadcrumb-next-items"
          element={<BreadcrumbNextItems />}
        />
        <Route
          path="/preview/breadcrumb-truncate"
          element={<BreadcrumbTruncate />}
        />
        <Route path="/preview/about-and-legal" element={<AboutAndLegal />} />
        <Route path="/preview/button-with-icon" element={<ButtonWithIcon />} />
        <Route path="/preview/button-group" element={<ButtonGroup />} />

        <Route path="/preview/blind" element={<Blind />} />
        <Route path="/preview/breadcrumb" element={<Breadcrumb />} />
        <Route
          path="/preview/breadcrumb-next-items"
          element={<BreadcrumbNextItems />}
        />
        <Route
          path="/preview/breadcrumb-truncate"
          element={<BreadcrumbTruncate />}
        />
        <Route path="/preview/about-and-legal" element={<AboutAndLegal />} />
        <Route path="/preview/aggrid" element={<AGGrid />} />
        <Route path="/preview/chip" element={<Chip />} />
        <Route path="/preview/date-dropdown" element={<DateDropdown />} />
        <Route
          path="/preview/date-dropdown-user-range"
          element={<DateDropdownUserRange />}
        />
        <Route path="/preview/datepicker" element={<Datepicker />} />
        <Route
          path="/preview/datepicker-locale"
          element={<DatepickerLocale />}
        />
        <Route path="/preview/datepicker-range" element={<DatepickerRange />} />
        <Route path="/preview/datetimepicker" element={<Datetimepicker />} />
        <Route
          path="/preview/drawer-full-height"
          element={<DrawerFullHeight />}
        />
        <Route path="/preview/dropdown" element={<Dropdown />} />
        <Route path="/preview/dropdown-button" element={<DropdownButton />} />
        <Route path="/preview/dropdown-submenu" element={<DropdownSubmenu />} />
        <Route path="/preview/dropdown-icon" element={<DropdownIcon />} />
        <Route path="/preview/echarts" element={<Echarts />} />
        <Route path="/preview/event-list" element={<EventList />} />
        <Route
          path="/preview/event-list-compact"
          element={<EventListCompact />}
        />
        <Route
          path="/preview/event-list-custom-item-height"
          element={<EventListCustomHeight />}
        />
        <Route
          path="/preview/event-list-selected"
          element={<EventListSelected />}
        />
        <Route path="/preview/expanding-search" element={<ExpandingSearch />} />
        <Route path="/preview/flip-tile" element={<FlipTile />} />
        <Route path="/preview/group" element={<Group />} />
        <Route
          path="/preview/group-context-menu"
          element={<GroupContextMenu />}
        />
        <Route
          path="/preview/group-custom-entry"
          element={<GroupCustomEntry />}
        />
        <Route
          path="/preview/group-header-suppressed"
          element={<GroupHeaderSuppressed />}
        />
        <Route path="/preview/input" element={<Input />} />
        <Route path="/preview/input-disabled" element={<InputDisabled />} />
        <Route path="/preview/input-readonly" element={<InputReadonly />} />
        <Route path="/preview/input-with-icon" element={<InputWithIcon />} />
        <Route path="/preview/message-bar" element={<MessageBar />} />
        <Route path="/preview/pill" element={<Pill />} />
        <Route path="/preview/pill-variants" element={<PillVariants />} />
        <Route path="/preview/radio-button" element={<RadioButton />} />
        <Route path="/preview/select" element={<Select />} />
        <Route path="/preview/select-editable" element={<SelectEditable />} />
        <Route path="/preview/select-multiple" element={<SelectMultiple />} />
        <Route path="/preview/pane" element={<Pane />} />
        <Route path="/preview/pane-layout" element={<PaneLayout />} />
        <Route path="/preview/spinner" element={<Spinner />} />
        <Route path="/preview/spinner-large" element={<SpinnerLarge />} />
        <Route path="/preview/split-button" element={<Splitbutton />} />
        <Route
          path="/preview/split-button-icons"
          element={<SplitbuttonIcons />}
        />
        <Route path="/preview/tabs" element={<Tabs />} />
        <Route path="/preview/textarea" element={<Textarea />} />
        <Route
          path="/preview/textarea-disabled"
          element={<TextareaDisabled />}
        />
        <Route
          path="/preview/textarea-readonly"
          element={<TextareaReadonly />}
        />
        <Route path="/preview/tile" element={<Tile />} />
        <Route path="/preview/timepicker" element={<Timepicker />} />
        <Route path="/preview/toast" element={<Toast />} />
        <Route path="/preview/toast-custom" element={<ToastCustom />} />
        <Route path="/preview/toast-position" element={<ToastPosition />} />
        <Route path="/preview/toggle" element={<Toggle />} />
        <Route path="/preview/toggle-disabled" element={<ToggleDisabled />} />
        <Route
          path="/preview/toggle-custom-toggle"
          element={<ToggleCustomLabel />}
        />
        <Route path="/preview/tree" element={<Tree />} />
        <Route path="/preview/theme-switcher" element={<ThemeSwitcher />} />
        <Route path="/preview/tree-custom" element={<TreeCustom />} />
        <Route path="/preview/popover-news" element={<PopoverNews />} />
        <Route path="/preview/settings" element={<Settings />} />
        <Route path="/preview/kpi" element={<Kpi />} />
        <Route path="/preview/modal" element={<ModalExample />} />
        <Route path="/preview/modal-sizes" element={<ModalSizes />} />
        <Route path="/preview/validation" element={<Validation />} />
        <Route path="/preview/workflow" element={<Workflow />} />
        <Route
          path="/preview/workflow-vertical"
          element={<WorkflowVertical />}
        />
        <Route path="/preview/basic-navigation" element={<BasicNavigation />} />
        <Route
          path="/preview/basic-navigation-without-header"
          element={<BasicNavigationWithoutHeader />}
        />
        <Route path="/preview/map-navigation" element={<MapNavigation />} />
        <Route
          path="/preview/map-navigation-overlay"
          element={<MapNavigationOverlay />}
        />
        <Route path="/preview/tooltip" element={<Tooltip />} />
        <Route path="/preview/tooltip-title" element={<TooltipTitle />} />
        <Route path="/preview/push-card" element={<PushCard />} />
        <Route path="/preview/action-card" element={<ActionCard />} />
        <Route path="/preview/card" element={<Card />} />
        <Route path="/preview/card-list" element={<CardList />} />
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
        <Route path="/preview/page-header" element={<PageHeader />} />
        <Route path="/preview/menu-category" element={<MenuCategory />} />
        <Route path="/preview/slider" element={<Slider />} />
        <Route path="/preview/slider-trace" element={<SliderTrace />} />
        <Route path="/preview/slider-marker" element={<SliderMarker />} />
        <Route path="/preview/slider-error" element={<SliderError />} />
        <Route path="/preview/grid" element={<Grid />} />
        <Route path="/preview/grid-size" element={<GridSize />} />
        <Route path="/preview/grid-padding" element={<GridPadding />} />
        <Route
          path="/preview/validation-select"
          element={<ValidationSelect />}
        />
      </Routes>
    </BrowserRouter>
  </IxApplicationContext>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
