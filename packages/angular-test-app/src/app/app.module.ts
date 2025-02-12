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

import { IxModule } from '@siemens/ix-angular';
import { AgGridModule } from 'ag-grid-angular';
import { NgxEchartsModule } from 'ngx-echarts';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import CustomField from '../preview-examples/custom-field';
import CustomFieldValidation from '../preview-examples/custom-field-validation';
import DateDropdown from '../preview-examples/date-dropdown';
import DateDropdownUserRange from '../preview-examples/date-dropdown-user-range';
import DateInput from '../preview-examples/date-input';
import DateInputDisabled from '../preview-examples/date-input-disabled';
import DateInputLabel from '../preview-examples/date-input-label';
import DateInputReadonly from '../preview-examples/date-input-readonly';
import DateInputValidation from '../preview-examples/date-input-validation';
import DateInputWithSlots from '../preview-examples/date-input-with-slots';
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
import EchartsBarHorizontalStacked from '../preview-examples/echarts-bar-horizontal-stacked';
import EchartsBarSimple from '../preview-examples/echarts-bar-simple';
import EchartsCircle from '../preview-examples/echarts-circle';
import EchartsEmptyState from '../preview-examples/echarts-empty-state';
import EchartsGauge from '../preview-examples/echarts-gauge';
import EchartsLineAdvanced from '../preview-examples/echarts-line-advanced';
import EchartsLineMultipleYAxis from '../preview-examples/echarts-line-multiple-y-axis';
import EchartsLineSimple from '../preview-examples/echarts-line-simple';
import EchartsPie from '../preview-examples/echarts-pie';
import EchartsProgressArc from '../preview-examples/echarts-progress-arc';
import EchartsProgressCircle from '../preview-examples/echarts-progress-circle';
import EchartsSpecial3d from '../preview-examples/echarts-special-3d';
import EchartsSpecialToolbox from '../preview-examples/echarts-special-toolbox';
import EchartsSpecialZoom from '../preview-examples/echarts-special-zoom';
import EmptyState from '../preview-examples/empty-state';
import EmptyStateCompact from '../preview-examples/empty-state-compact';
import EmptyStateCompactBreak from '../preview-examples/empty-state-compact-break';
import EventList from '../preview-examples/event-list';
import EventListCompact from '../preview-examples/event-list-compact';
import EventListCustomItemHeight from '../preview-examples/event-list-custom-item-height';
import EventListSelected from '../preview-examples/event-list-selected';
import ExpandingSearch from '../preview-examples/expanding-search';
import FlipTile from '../preview-examples/flip-tile';
import FormCheckbox from '../preview-examples/form-checkbox';
import FormCheckboxDisabled from '../preview-examples/form-checkbox-disabled';
import FormCheckboxGroup from '../preview-examples/form-checkbox-group';
import FormCheckboxGroupIndeterminate from '../preview-examples/form-checkbox-group-indeterminate';
import FormCheckboxValidation from '../preview-examples/form-checkbox-validation';
import FormLayoutAuto from '../preview-examples/form-layout-auto';
import FormLayoutGrid from '../preview-examples/form-layout-grid';
import FormValidation from '../preview-examples/form-validation';
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
import InputFormValidation from '../preview-examples/input-form-validation';
import InputLabel from '../preview-examples/input-label';
import InputLegacy from '../preview-examples/input-legacy';
import InputLegacyDisabled from '../preview-examples/input-legacy-disabled';
import InputLegacyLabels from '../preview-examples/input-legacy-labels';
import InputLegacyReadonly from '../preview-examples/input-legacy-readonly';
import InputLegacySearch from '../preview-examples/input-legacy-search';
import InputLegacyTypes from '../preview-examples/input-legacy-types';
import InputLegacyWithIcon from '../preview-examples/input-legacy-with-icon';
import InputPattern from '../preview-examples/input-pattern';
import InputReadonly from '../preview-examples/input-readonly';
import InputTypes from '../preview-examples/input-types';
import InputValidation from '../preview-examples/input-validation';
import InputWithSlots from '../preview-examples/input-with-slots';
import KeyValue from '../preview-examples/key-value';
import KeyValueList from '../preview-examples/key-value-list';
import KeyValueListStriped from '../preview-examples/key-value-list-striped';
import KeyValueListWithCustomValue from '../preview-examples/key-value-list-with-custom-value';
import KeyValueListWithIcon from '../preview-examples/key-value-list-with-icon';
import KeyValueWithCustomValue from '../preview-examples/key-value-with-custom-value';
import KeyValueWithIcon from '../preview-examples/key-value-with-icon';
import KeyValueWithLabelLeft from '../preview-examples/key-value-with-label-left';
import Kpi from '../preview-examples/kpi';
import LayoutAuto from '../preview-examples/layout-auto';
import LayoutAutoCustom from '../preview-examples/layout-auto-custom';
import LinkButton from '../preview-examples/link-button';
import LinkButtonDisabled from '../preview-examples/link-button-disabled';
import Loading from '../preview-examples/loading';
import MapNavigation from '../preview-examples/map-navigation';
import MapNavigationOverlay from '../preview-examples/map-navigation-overlay';
import MenuCategory from '../preview-examples/menu-category';
import MenuWithBottomTabs from '../preview-examples/menu-with-bottom-tabs';
import Message from '../preview-examples/message';
import MessageBar from '../preview-examples/message-bar';
import MessageBarRemoval from '../preview-examples/message-bar-removal';
import ModalByInstance from '../preview-examples/modal-by-instance';
import ModalByInstanceContent from '../preview-examples/modal-by-instance-content';
import ModalByTemplate from '../preview-examples/modal-by-template';
import ModalSizes from '../preview-examples/modal-sizes';
import NumberInput from '../preview-examples/number-input';
import NumberInputDisabled from '../preview-examples/number-input-disabled';
import NumberInputLabel from '../preview-examples/number-input-label';
import NumberInputReadonly from '../preview-examples/number-input-readonly';
import NumberInputStepperButton from '../preview-examples/number-input-stepper-button';
import NumberInputValidation from '../preview-examples/number-input-validation';
import NumberInputWithSlots from '../preview-examples/number-input-with-slots';
import Pagination from '../preview-examples/pagination';
import PaginationAdvanced from '../preview-examples/pagination-advanced';
import Pane from '../preview-examples/pane';
import PaneLayout from '../preview-examples/pane-layout';
import Pill from '../preview-examples/pill';
import PillVariants from '../preview-examples/pill-variants';
import PopoverNews from '../preview-examples/popover-news';
import PushCard from '../preview-examples/push-card';
import Radio from '../preview-examples/radio';
import Radiobutton from '../preview-examples/radio-button';
import RadioDisabled from '../preview-examples/radio-disabled';
import RadioGroup from '../preview-examples/radio-group';
import RadioValidation from '../preview-examples/radio-validation';
import Select from '../preview-examples/select';
import SelectEditable from '../preview-examples/select-editable';
import SelectMultiple from '../preview-examples/select-multiple';
import SelectNgModel from '../preview-examples/select-ng-model';
import SelectValidation from '../preview-examples/select-validation';
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
import TextareaLegacy from '../preview-examples/textarea-legacy';
import TextareaLegacyDisabled from '../preview-examples/textarea-legacy-disabled';
import TextareaLegacyReadonly from '../preview-examples/textarea-legacy-readonly';
import TextareaReadonly from '../preview-examples/textarea-readonly';
import TextareaRowsCols from '../preview-examples/textarea-rows-cols';
import TextareaValidation from '../preview-examples/textarea-validation';
import ThemeSwitcher from '../preview-examples/theme-switcher';
import Tile from '../preview-examples/tile';
import Timepicker from '../preview-examples/timepicker';
import Toast from '../preview-examples/toast';
import ToastCustom from '../preview-examples/toast-custom';
import ToastPosition from '../preview-examples/toast-position';
import Toggle from '../preview-examples/toggle';
import ToggleButtonPrimary from '../preview-examples/toggle-button-primary';
import ToggleButtonPrimaryGhost from '../preview-examples/toggle-button-primary-ghost';
import ToggleButtonPrimaryOutline from '../preview-examples/toggle-button-primary-outline';
import ToggleButtonSecondary from '../preview-examples/toggle-button-secondary';
import ToggleButtonSecondaryGhost from '../preview-examples/toggle-button-secondary-ghost';
import ToggleButtonSecondaryOutline from '../preview-examples/toggle-button-secondary-outline';
import ToggleChecked from '../preview-examples/toggle-checked';
import ToggleCustomLabel from '../preview-examples/toggle-custom-label';
import ToggleDisabled from '../preview-examples/toggle-disabled';
import ToggleIndeterminate from '../preview-examples/toggle-indeterminate';
import ToggleNgModel from '../preview-examples/toggle-ng-model';
import Tooltip from '../preview-examples/tooltip';
import Tree from '../preview-examples/tree';
import TreeCustom from '../preview-examples/tree-custom';
import Upload from '../preview-examples/upload';
import Validation from '../preview-examples/validation';
import ValidationSelect from '../preview-examples/validation-select';
import VerticalTabs from '../preview-examples/vertical-tabs';
import VerticalTabsWithAvatar from '../preview-examples/vertical-tabs-with-avatar';
import Workflow from '../preview-examples/workflow';
import WorkflowVertical from '../preview-examples/workflow-vertical';

@NgModule({
  declarations: [
    FormLayoutGrid,
    FormLayoutAuto,
    FormValidation,
    InputFormValidation,
    AppComponent,
    AboutAndLegal,
    ActionCard,
    AgGrid,
    ApplicationExample,
    ApplicationBreakpointExample,
    ApplicationAppSwitchExample,
    ApplicationHeaderExample,
    AvatarImage,
    AvatarInitials,
    Avatar,
    BasicNavigationWithoutHeader,
    BasicNavigation,
    BlindHeaderActions,
    BlindVariants,
    Blind,
    BreadcrumbNextItems,
    BreadcrumbTruncate,
    Breadcrumb,
    ButtonGhost,
    ButtonGreyGhost,
    ButtonGreySecondary,
    ButtonGrey,
    ButtonGroup,
    ButtonLoading,
    ButtonSecondary,
    ButtonTextIcon,
    ButtonWithIcon,
    Buttons,
    Card,
    CardList,
    CategoryFilterSuggestions,
    CategoryFilter,
    CheckboxIndeterminate,
    Checkbox,
    Chip,
    CustomField,
    CustomFieldValidation,
    DateDropdown,
    DateDropdownUserRange,
    DateInput,
    DateInputDisabled,
    DateInputLabel,
    DateInputReadonly,
    DateInputValidation,
    DateInputWithSlots,
    ContentExample,
    DateDropdown,
    DateDropdownUserRange,
    ContentHeaderNoBack,
    ContentHeader,
    DatepickerRange,
    Datepicker,
    DatepickerLocale,
    Datetimepicker,
    Divider,
    DrawerFullHeight,
    Drawer,
    DropdownButtonIcon,
    DropdownButton,
    DropdownIcon,
    DropdownQuickActions,
    DropdownSubmenu,
    Dropdown,
    Echarts,
    EchartsSpecial3d,
    EchartsBarSimple,
    EchartsBarHorizontalStacked,
    EchartsCircle,
    EchartsEmptyState,
    EchartsGauge,
    EchartsLineAdvanced,
    EchartsLineMultipleYAxis,
    EchartsLineSimple,
    EchartsPie,
    EchartsSpecialToolbox,
    EchartsProgressArc,
    EchartsProgressCircle,
    EchartsSpecialZoom,
    EmptyStateCompactBreak,
    EmptyStateCompact,
    EmptyState,
    EventListCompact,
    EventListCustomItemHeight,
    EventListSelected,
    EventList,
    ExpandingSearch,
    FlipTile,
    FormCheckbox,
    FormCheckboxDisabled,
    FormCheckboxValidation,
    FormCheckboxGroup,
    FormCheckboxGroupIndeterminate,
    GridPadding,
    GridSize,
    Grid,
    GroupContextMenu,
    GroupCustomEntry,
    GroupHeaderSuppressed,
    Group,
    IconToggleButtonPrimaryGhost,
    IconToggleButtonPrimaryOutline,
    IconToggleButtonSecondaryGhost,
    IconToggleButtonSecondaryOutline,
    IconToggleButtonSecondary,
    InputLegacyDisabled,
    InputLegacyLabels,
    InputLegacyReadonly,
    InputLegacySearch,
    InputLegacyTypes,
    InputLegacyWithIcon,
    InputLegacy,
    KeyValueListStriped,
    KeyValueListWithCustomValue,
    KeyValueListWithIcon,
    KeyValueList,
    KeyValueWithCustomValue,
    KeyValueWithIcon,
    KeyValueWithLabelLeft,
    KeyValue,
    Kpi,
    LinkButtonDisabled,
    LinkButton,
    Loading,
    MapNavigationOverlay,
    MapNavigation,
    MenuCategory,
    MenuWithBottomTabs,
    Message,
    MessageBar,
    MessageBarRemoval,
    ModalByInstanceContent,
    ModalByInstance,
    ModalByTemplate,
    ModalSizes,
    PaginationAdvanced,
    Pagination,
    Pane,
    PaneLayout,
    Pill,
    PillVariants,
    PopoverNews,
    Radiobutton,
    Radio,
    RadioDisabled,
    RadioGroup,
    RadioValidation,
    PushCard,
    SelectEditable,
    SelectMultiple,
    SelectNgModel,
    SelectValidation,
    Select,
    Settings,
    SliderError,
    SliderMarker,
    SliderTrace,
    Slider,
    SpinnerLarge,
    Spinner,
    SplitButtonIcons,
    SplitButton,
    TabsRounded,
    Tabs,
    TextareaLegacyDisabled,
    Textarea,
    TextareaDisabled,
    TextareaReadonly,
    TextareaRowsCols,
    TextareaValidation,
    Input,
    InputDisabled,
    InputLabel,
    InputReadonly,
    InputTypes,
    InputValidation,
    InputWithSlots,
    InputPattern,
    TextareaLegacyReadonly,
    TextareaLegacy,
    ThemeSwitcher,
    Tile,
    Timepicker,
    ToastCustom,
    ToastPosition,
    Toast,
    ToggleButtonPrimaryGhost,
    ToggleButtonPrimaryOutline,
    ToggleButtonPrimary,
    ToggleButtonSecondaryGhost,
    ToggleButtonSecondaryOutline,
    ToggleButtonSecondary,
    ToggleChecked,
    ToggleCustomLabel,
    ToggleDisabled,
    ToggleIndeterminate,
    ToggleNgModel,
    Toggle,
    Tooltip,
    TreeCustom,
    Tree,
    Upload,
    Validation,
    VerticalTabsWithAvatar,
    VerticalTabs,
    WorkflowVertical,
    MapNavigation,
    MapNavigationOverlay,
    NumberInput,
    NumberInputDisabled,
    NumberInputLabel,
    NumberInputReadonly,
    NumberInputStepperButton,
    NumberInputValidation,
    NumberInputWithSlots,
    TabsRounded,
    DatepickerRange,
    Tooltip,
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
    ValidationSelect,
    LayoutAuto,
    LayoutAutoCustom,
    Workflow,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IxModule.forRoot(),
    AgGridModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
