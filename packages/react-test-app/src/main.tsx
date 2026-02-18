/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './preview-examples/global.css';

import { testIds } from 'framework-tests/tests/test-ids';
import { IxApplicationContext } from '@siemens/ix-react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import AboutAndLegal from './preview-examples/about-and-legal';
import ActionCard from './preview-examples/action-card';
import AddIcons from './preview-examples/add-icons';
import AgGrid from './preview-examples/aggrid';
import Application from './preview-examples/application';
import ApplicationAdvanced from './preview-examples/application-advanced';
import ApplicationAppSwitch from './preview-examples/application-app-switch';
import ApplicationBreakpoints from './preview-examples/application-breakpoints';
import ApplicationHeader from './preview-examples/application-header';
import Avatar from './preview-examples/avatar';
import AvatarImage from './preview-examples/avatar-image';
import AvatarInitials from './preview-examples/avatar-initials';
import Blind from './preview-examples/blind';
import BlindHeaderActions from './preview-examples/blind-header-actions';
import BlindVariants from './preview-examples/blind-variants';
import Breadcrumb from './preview-examples/breadcrumb';
import BreadcrumbNextItems from './preview-examples/breadcrumb-next-items';
import BreadcrumbTruncate from './preview-examples/breadcrumb-truncate';
import ButtonTertiary from './preview-examples/button-tertiary';
import ButtonSubtlePrimary from './preview-examples/button-subtle-primary';
import ButtonSubtleTertiary from './preview-examples/button-subtle-tertiary';
import ButtonSubtleSecondary from './preview-examples/button-subtle-secondary';
import ButtonGroup from './preview-examples/button-group';
import ButtonLoading from './preview-examples/button-loading';
import ButtonSecondary from './preview-examples/button-secondary';
import ButtonTextIcon from './preview-examples/button-text-icon';
import ButtonWithIcon from './preview-examples/button-with-icon';
import ButtonWithLink from './preview-examples/button-with-link.tsx';
import Buttons from './preview-examples/buttons';
import Card from './preview-examples/card';
import CardList from './preview-examples/card-list';
import CategoryFilter from './preview-examples/category-filter';
import CategoryFilterSuggestions from './preview-examples/category-filter-suggestions';
import Checkbox from './preview-examples/checkbox';
import CheckboxIndeterminate from './preview-examples/checkbox-indeterminate';
import Chip from './preview-examples/chip';
import Content from './preview-examples/content';
import ContentHeader from './preview-examples/content-header';
import ContentHeaderNoBack from './preview-examples/content-header-no-back';
import ContentHeaderWithSlot from './preview-examples/content-header-with-slot';
import CustomField from './preview-examples/custom-field';
import CustomFieldValidation from './preview-examples/custom-field-validation';
import DateDropdown from './preview-examples/date-dropdown';
import DateDropdownUserRange from './preview-examples/date-dropdown-user-range';
import DateInput from './preview-examples/date-input';
import DateInputWithSlots from './preview-examples/date-input-with-slots';
import Datepicker from './preview-examples/datepicker';
import DatetimeInput from './preview-examples/datetime-input';
import DatetimeInputDisabled from './preview-examples/datetime-input-disabled';
import DatetimeInputLabel from './preview-examples/datetime-input-label';
import DatetimeInputMinMaxDate from './preview-examples/datetime-input-min-max-date';
import DatetimeInputReadonly from './preview-examples/datetime-input-readonly';
import DatetimeInputValidation from './preview-examples/datetime-input-validation';
import DatetimeInputWithSlots from './preview-examples/datetime-input-with-slots';
import DatepickerLocale from './preview-examples/datepicker-locale';
import DatepickerRange from './preview-examples/datepicker-range';
import Datetimepicker from './preview-examples/datetimepicker';
import Divider from './preview-examples/divider';
import Drawer from './preview-examples/drawer';
import DrawerFullHeight from './preview-examples/drawer-full-height';
import Dropdown from './preview-examples/dropdown';
import DropdownButton from './preview-examples/dropdown-button';
import DropdownButtonIcon from './preview-examples/dropdown-button-icon';
import DropdownIcon from './preview-examples/dropdown-icon';
import DropdownQuickActions from './preview-examples/dropdown-quick-actions';
import DropdownSubmenu from './preview-examples/dropdown-submenu';
import Echarts from './preview-examples/echarts';
import EchartsBarHorizontalStacked from './preview-examples/echarts-bar-horizontal-stacked';
import EchartsBarSimple from './preview-examples/echarts-bar-simple';
import EchartsCircle from './preview-examples/echarts-circle';
import EchartsEmptyState from './preview-examples/echarts-empty-state';
import EchartsGauge from './preview-examples/echarts-gauge';
import EchartsLineAdvanced from './preview-examples/echarts-line-advanced';
import EchartsLineMultipleYAxis from './preview-examples/echarts-line-multiple-y-axis';
import EchartsLineSimple from './preview-examples/echarts-line-simple';
import EchartsPie from './preview-examples/echarts-pie';
import EchartsProgressArc from './preview-examples/echarts-progress-arc';
import EchartsProgressCircle from './preview-examples/echarts-progress-circle';
import EchartsSpecial3d from './preview-examples/echarts-special-3d';
import EchartsSpecialToolbox from './preview-examples/echarts-special-toolbox';
import EchartsZoom from './preview-examples/echarts-special-zoom';
import EmptyState from './preview-examples/empty-state';
import EmptyStateCompact from './preview-examples/empty-state-compact';
import EmptyStateCompactBreak from './preview-examples/empty-state-compact-break';
import EventList from './preview-examples/event-list';
import EventListCompact from './preview-examples/event-list-compact';
import EventListCustomItemHeight from './preview-examples/event-list-custom-item-height';
import EventListFilled from './preview-examples/event-list-filled';
import EventListSelected from './preview-examples/event-list-selected';
import ExpandingSearch from './preview-examples/expanding-search';
import FlipTile from './preview-examples/flip-tile';
import FormCheckbox from './preview-examples/form-checkbox';
import FormCheckboxDisabled from './preview-examples/form-checkbox-disabled';
import FormCheckboxGroup from './preview-examples/form-checkbox-group';
import FormCheckboxGroupIndeterminate from './preview-examples/form-checkbox-group-indeterminate';
import FormCheckboxValidation from './preview-examples/form-checkbox-validation';
import FormLayoutAuto from './preview-examples/form-layout-auto';
import FormLayoutGrid from './preview-examples/form-layout-grid';
import FormValidation from './preview-examples/form-validation';
import Grid from './preview-examples/grid';
import GridPadding from './preview-examples/grid-padding';
import GridSize from './preview-examples/grid-size';
import Group from './preview-examples/group';
import GroupContextMenu from './preview-examples/group-context-menu';
import GroupCustomEntry from './preview-examples/group-custom-entry';
import GroupHeaderSuppressed from './preview-examples/group-header-suppressed';
import HtmlTable from './preview-examples/html-table';
import HtmlTableStriped from './preview-examples/html-table-striped';
import IconToggleButtonTertiary from './preview-examples/icon-toggle-button-tertiary';
import IconToggleButtonSubtleTertiary from './preview-examples/icon-toggle-button-subtle-tertiary';
import IconToggleButtonSecondary from './preview-examples/icon-toggle-button-secondary';
import IconToggleButtonSubtleSecondary from './preview-examples/icon-toggle-button-subtle-secondary';
import IconToggleButtonSubtlePrimary from './preview-examples/icon-toggle-button-subtle-primary';
import Input from './preview-examples/input';
import InputDisabled from './preview-examples/input-disabled';
import InputLabel from './preview-examples/input-label';
import InputLegacy from './preview-examples/input-legacy';
import InputLegacyDisabled from './preview-examples/input-legacy-disabled';
import InputLegacyReadonly from './preview-examples/input-legacy-readonly';
import InputPattern from './preview-examples/input-pattern';
import InputReadonly from './preview-examples/input-readonly';
import InputTypes from './preview-examples/input-types';
import InputValidation from './preview-examples/input-validation';
import InputWithSlots from './preview-examples/input-with-slots';
import KeyValue from './preview-examples/key-value';
import KeyValueList from './preview-examples/key-value-list';
import KeyValueListStriped from './preview-examples/key-value-list-striped';
import KeyValueListWithCustomValue from './preview-examples/key-value-list-with-custom-value';
import KeyValueListWithIcon from './preview-examples/key-value-list-with-icon';
import KeyValueWithCustomValue from './preview-examples/key-value-with-custom-value';
import KeyValueWithIcon from './preview-examples/key-value-with-icon';
import KeyValueWithLabelLeft from './preview-examples/key-value-with-label-left';
import Kpi from './preview-examples/kpi';
import LayoutAuto from './preview-examples/layout-auto';
import LayoutAutoCustom from './preview-examples/layout-auto-custom';
import LinkButton from './preview-examples/link-button';
import LinkButtonDisabled from './preview-examples/link-button-disabled';
import Loading from './preview-examples/loading';
import MenuCategory from './preview-examples/menu-category';
import MenuWithBottomTabs from './preview-examples/menu-with-bottom-tabs';
import Message from './preview-examples/message';
import MessageBar from './preview-examples/message-bar';
import MessageBarRemoval from './preview-examples/message-bar-removal.tsx';
import Modal from './preview-examples/modal';
import ModalClose from './preview-examples/modal-close.tsx';
import ModalFormIxButtonSubmit from './preview-examples/modal-form-ix-button-submit.tsx';
import ModalSizes from './preview-examples/modal-sizes';
import NumberInput from './preview-examples/number-input';
import NumberInputDisabled from './preview-examples/number-input-disabled';
import NumberInputLabel from './preview-examples/number-input-label';
import NumberInputReadonly from './preview-examples/number-input-readonly';
import NumberInputStepperButton from './preview-examples/number-input-stepper-button';
import NumberInputValidation from './preview-examples/number-input-validation';
import NumberInputWithSlots from './preview-examples/number-input-with-slots';
import Pagination from './preview-examples/pagination';
import PaginationAdvanced from './preview-examples/pagination-advanced';
import Pane from './preview-examples/pane';
import PaneLayout from './preview-examples/pane-layout';
import Pill from './preview-examples/pill';
import PillVariants from './preview-examples/pill-variants';
import PopoverNews from './preview-examples/popover-news';
import ProgressIndicatorCircularSizes from './preview-examples/progress-indicator-circular-sizes.tsx';
import ProgressIndicatorCircularStatus from './preview-examples/progress-indicator-circular-status.tsx';
import ProgressIndicatorCircular from './preview-examples/progress-indicator-circular.tsx';
import ProgressIndicatorLinearSizes from './preview-examples/progress-indicator-linear-sizes.tsx';
import ProgressIndicatorLinearStatus from './preview-examples/progress-indicator-linear-status.tsx';
import ProgressIndicator from './preview-examples/progress-indicator.tsx';
import PushCard from './preview-examples/push-card';
import Radio from './preview-examples/radio';
import RadioButton from './preview-examples/radio-button';
import RadioDisabled from './preview-examples/radio-disabled';
import RadioGroup from './preview-examples/radio-group';
import RadioValidation from './preview-examples/radio-validation';
import Select from './preview-examples/select';
import SelectEditable from './preview-examples/select-editable';
import SelectMultiple from './preview-examples/select-multiple';
import SelecValidation from './preview-examples/select-validation';
import Settings from './preview-examples/settings';
import Slider from './preview-examples/slider';
import SliderError from './preview-examples/slider-error';
import SliderMarker from './preview-examples/slider-marker';
import SliderTrace from './preview-examples/slider-trace';
import Spinner from './preview-examples/spinner';
import SpinnerLarge from './preview-examples/spinner-large';
import SplitButton from './preview-examples/split-button';
import SplitButtonIcons from './preview-examples/split-button-icons';
import Tabs from './preview-examples/tabs';
import TabsRounded from './preview-examples/tabs-rounded';
import Textarea from './preview-examples/textarea';
import TextareaDisabled from './preview-examples/textarea-disabled';
import TextareaLegacy from './preview-examples/textarea-legacy';
import TextareaLegacyDisabled from './preview-examples/textarea-legacy-disabled';
import TextareaLegacyReadonly from './preview-examples/textarea-legacy-readonly';
import TextareaReadonly from './preview-examples/textarea-readonly';
import TextareaRowCols from './preview-examples/textarea-rows-cols';
import TextareaValidation from './preview-examples/textarea-validation';
import ThemeSwitcher from './preview-examples/theme-switcher';
import Tile from './preview-examples/tile';
import Timepicker from './preview-examples/timepicker';
import Toast from './preview-examples/toast';
import ToastCustom from './preview-examples/toast-custom';
import ToastPosition from './preview-examples/toast-position';
import Toggle from './preview-examples/toggle';
import ToggleButtonTertiary from './preview-examples/toggle-button-tertiary';
import ToggleButtonSubtlePrimary from './preview-examples/toggle-button-subtle-primary';
import ToggleButtonSecondary from './preview-examples/toggle-button-secondary';
import ToggleButtonSubtleSecondary from './preview-examples/toggle-button-subtle-secondary';
import ToggleButtonSubtleTertiary from './preview-examples/toggle-button-subtle-tertiary';
import TooltipWithIcon from './preview-examples/tooltip-with-icon';
import ToggleChecked from './preview-examples/toggle-checked';
import ToggleCustomLabel from './preview-examples/toggle-custom-label';
import ToggleDisabled from './preview-examples/toggle-disabled';
import ToggleIndeterminate from './preview-examples/toggle-indeterminate';
import Tooltip from './preview-examples/tooltip';
import Tree from './preview-examples/tree';
import TreeCustom from './preview-examples/tree-custom';
import Upload from './preview-examples/upload';
import Validation from './preview-examples/validation';
import ValidationSelect from './preview-examples/validation-select';
import VerticalTabs from './preview-examples/vertical-tabs';
import VerticalTabsWithAvatar from './preview-examples/vertical-tabs-with-avatar';
import Workflow from './preview-examples/workflow';
import WorkflowVertical from './preview-examples/workflow-vertical';
import reportWebVitals from './reportWebVitals';
import buttonDangerPrimary from './preview-examples/button-danger-primary.tsx';
import buttonDangerTertiary from './preview-examples/button-danger-tertiary.tsx';
import buttonDangerSecondary from './preview-examples/button-danger-secondary.tsx';
import dateInputDisabled from './preview-examples/date-input-disabled.tsx';
import dateInputLabel from './preview-examples/date-input-label.tsx';
import dateInputMinMaxDate from './preview-examples/date-input-min-max-date.tsx';
import dateInputReadonly from './preview-examples/date-input-readonly.tsx';
import dateInputValidation from './preview-examples/date-input-validation.tsx';
import eventListCustomItemHeightInNumber from './preview-examples/event-list-custom-item-height-in-number.tsx';
import timeInput from './preview-examples/time-input.tsx';
import timeInputDisabled from './preview-examples/time-input-disabled.tsx';
import timeInputLabel from './preview-examples/time-input-label.tsx';
import timeInputReadonly from './preview-examples/time-input-readonly.tsx';
import timeInputValidation from './preview-examples/time-input-validation.tsx';
import timeInputWithSlots from './preview-examples/time-input-with-slots.tsx';
import timepickerFormatAdjusted from './preview-examples/timepicker-format-adjusted.tsx';
import timepickerIntervals from './preview-examples/timepicker-intervals.tsx';
import toggleButtonPrimary from './preview-examples/toggle-button-primary.tsx';

const exampleNames = [...testIds, ...'validation'] as const;
type IxPreviewRoutes = {
  '/': React.ComponentType;
} & {
  [K in (typeof exampleNames)[number] as `/preview/${K}`]: React.ComponentType;
};

const routes: IxPreviewRoutes = {
  '/': App,
  '/preview/grid-padding': GridPadding,
  '/preview/grid-size': GridSize,
  '/preview/grid': Grid,
  '/preview/about-and-legal': AboutAndLegal,
  '/preview/action-card': ActionCard,
  '/preview/add-icons': AddIcons,
  '/preview/aggrid': AgGrid,
  '/preview/application': Application,
  '/preview/application-advanced': ApplicationAdvanced,
  '/preview/application-breakpoints': ApplicationBreakpoints,
  '/preview/application-app-switch': ApplicationAppSwitch,
  '/preview/application-header': ApplicationHeader,
  '/preview/avatar-image': AvatarImage,
  '/preview/avatar-initials': AvatarInitials,
  '/preview/avatar': Avatar,
  '/preview/blind-header-actions': BlindHeaderActions,
  '/preview/blind-variants': BlindVariants,
  '/preview/blind': Blind,
  '/preview/breadcrumb-next-items': BreadcrumbNextItems,
  '/preview/breadcrumb-truncate': BreadcrumbTruncate,
  '/preview/breadcrumb': Breadcrumb,
  '/preview/button-tertiary': ButtonTertiary,
  '/preview/button-subtle-tertiary': ButtonSubtleTertiary,
  '/preview/button-subtle-secondary': ButtonSubtleSecondary,
  '/preview/button-subtle-primary': ButtonSubtlePrimary,
  '/preview/button-group': ButtonGroup,
  '/preview/button-loading': ButtonLoading,
  '/preview/button-secondary': ButtonSecondary,
  '/preview/button-text-icon': ButtonTextIcon,
  '/preview/button-with-icon': ButtonWithIcon,
  '/preview/buttons': Buttons,
  '/preview/card': Card,
  '/preview/card-list': CardList,
  '/preview/category-filter-suggestions': CategoryFilterSuggestions,
  '/preview/category-filter': CategoryFilter,
  '/preview/checkbox-indeterminate': CheckboxIndeterminate,
  '/preview/checkbox': Checkbox,
  '/preview/custom-field': CustomField,
  '/preview/custom-field-validation': CustomFieldValidation,
  '/preview/chip': Chip,
  '/preview/content': Content,
  '/preview/date-dropdown': DateDropdown,
  '/preview/date-dropdown-user-range': DateDropdownUserRange,
  '/preview/content-header-no-back': ContentHeaderNoBack,
  '/preview/content-header': ContentHeader,
  '/preview/content-header-with-slot': ContentHeaderWithSlot,
  '/preview/datepicker-range': DatepickerRange,
  '/preview/datepicker': Datepicker,
  '/preview/datepicker-locale': DatepickerLocale,
  '/preview/datetimepicker': Datetimepicker,
  '/preview/divider': Divider,
  '/preview/drawer-full-height': DrawerFullHeight,
  '/preview/drawer': Drawer,
  '/preview/dropdown-button-icon': DropdownButtonIcon,
  '/preview/dropdown-button': DropdownButton,
  '/preview/dropdown-icon': DropdownIcon,
  '/preview/dropdown-quick-actions': DropdownQuickActions,
  '/preview/dropdown-submenu': DropdownSubmenu,
  '/preview/dropdown': Dropdown,
  '/preview/echarts': Echarts,
  '/preview/echarts-bar-horizontal-stacked': EchartsBarHorizontalStacked,
  '/preview/echarts-bar-simple': EchartsBarSimple,
  '/preview/echarts-circle': EchartsCircle,
  '/preview/echarts-empty-state': EchartsEmptyState,
  '/preview/echarts-line-multiple-y-axis': EchartsLineMultipleYAxis,
  '/preview/echarts-gauge': EchartsGauge,
  '/preview/echarts-line-simple': EchartsLineSimple,
  '/preview/echarts-line-advanced': EchartsLineAdvanced,
  '/preview/echarts-special-3d': EchartsSpecial3d,
  '/preview/echarts-special-toolbox': EchartsSpecialToolbox,
  '/preview/echarts-pie': EchartsPie,
  '/preview/echarts-progress-circle': EchartsProgressCircle,
  '/preview/echarts-progress-arc': EchartsProgressArc,
  '/preview/empty-state-compact-break': EmptyStateCompactBreak,
  '/preview/empty-state-compact': EmptyStateCompact,
  '/preview/empty-state': EmptyState,
  '/preview/event-list-compact': EventListCompact,
  '/preview/event-list-custom-item-height': EventListCustomItemHeight,
  '/preview/event-list': EventList,
  '/preview/event-list-filled': EventListFilled,
  '/preview/event-list-selected': EventListSelected,
  '/preview/expanding-search': ExpandingSearch,
  '/preview/flip-tile': FlipTile,
  '/preview/form-checkbox': FormCheckbox,
  '/preview/form-checkbox-disabled': FormCheckboxDisabled,
  '/preview/form-checkbox-group': FormCheckboxGroup,
  '/preview/form-checkbox-validation': FormCheckboxValidation,
  '/preview/form-checkbox-group-indeterminate': FormCheckboxGroupIndeterminate,
  '/preview/group-context-menu': GroupContextMenu,
  '/preview/group-custom-entry': GroupCustomEntry,
  '/preview/group-header-suppressed': GroupHeaderSuppressed,
  '/preview/group': Group,
  '/preview/html-table': HtmlTable,
  '/preview/html-table-striped': HtmlTableStriped,
  '/preview/icon-toggle-button-tertiary': IconToggleButtonTertiary,
  '/preview/icon-toggle-button-subtle-tertiary': IconToggleButtonSubtleTertiary,
  '/preview/icon-toggle-button-subtle-secondary':
    IconToggleButtonSubtleSecondary,
  '/preview/icon-toggle-button-subtle-primary': IconToggleButtonSubtlePrimary,
  '/preview/icon-toggle-button-secondary': IconToggleButtonSecondary,
  '/preview/input-legacy-disabled': InputLegacyDisabled,
  '/preview/input-legacy-readonly': InputLegacyReadonly,
  '/preview/input-legacy': InputLegacy,
  '/preview/key-value-list-striped': KeyValueListStriped,
  '/preview/key-value-list-with-custom-value': KeyValueListWithCustomValue,
  '/preview/key-value-list-with-icon': KeyValueListWithIcon,
  '/preview/key-value-list': KeyValueList,
  '/preview/key-value-with-custom-value': KeyValueWithCustomValue,
  '/preview/key-value-with-icon': KeyValueWithIcon,
  '/preview/key-value-with-label-left': KeyValueWithLabelLeft,
  '/preview/key-value': KeyValue,
  '/preview/kpi': Kpi,
  '/preview/link-button-disabled': LinkButtonDisabled,
  '/preview/link-button': LinkButton,
  '/preview/loading': Loading,
  '/preview/menu-category': MenuCategory,
  '/preview/menu-with-bottom-tabs': MenuWithBottomTabs,
  '/preview/message': Message,
  '/preview/message-bar': MessageBar,
  '/preview/message-bar-removal': MessageBarRemoval,
  '/preview/radio-button': RadioButton,
  '/preview/radio': Radio,
  '/preview/radio-disabled': RadioDisabled,
  '/preview/radio-group': RadioGroup,
  '/preview/radio-validation': RadioValidation,
  '/preview/select': Select,
  '/preview/select-editable': SelectEditable,
  '/preview/select-multiple': SelectMultiple,
  '/preview/select-validation': SelecValidation,
  '/preview/modal-sizes': ModalSizes,
  '/preview/modal-form-ix-button-submit': ModalFormIxButtonSubmit,
  '/preview/modal': Modal,
  '/preview/modal-close': ModalClose,
  '/preview/pagination-advanced': PaginationAdvanced,
  '/preview/pagination': Pagination,
  '/preview/pane': Pane,
  '/preview/pane-layout': PaneLayout,
  '/preview/pill': Pill,
  '/preview/pill-variants': PillVariants,
  '/preview/popover-news': PopoverNews,
  '/preview/push-card': PushCard,
  '/preview/settings': Settings,
  '/preview/slider-error': SliderError,
  '/preview/slider-marker': SliderMarker,
  '/preview/slider-trace': SliderTrace,
  '/preview/slider': Slider,
  '/preview/spinner-large': SpinnerLarge,
  '/preview/spinner': Spinner,
  '/preview/split-button-icons': SplitButtonIcons,
  '/preview/split-button': SplitButton,
  '/preview/tabs-rounded': TabsRounded,
  '/preview/tabs': Tabs,
  '/preview/textarea-legacy-disabled': TextareaLegacyDisabled,
  '/preview/textarea-legacy-readonly': TextareaLegacyReadonly,
  '/preview/textarea': Textarea,
  '/preview/textarea-disabled': TextareaDisabled,
  '/preview/textarea-readonly': TextareaReadonly,
  '/preview/textarea-rows-cols': TextareaRowCols,
  '/preview/textarea-validation': TextareaValidation,
  '/preview/input': Input,
  '/preview/input-disabled': InputDisabled,
  '/preview/input-label': InputLabel,
  '/preview/input-pattern': InputPattern,
  '/preview/input-readonly': InputReadonly,
  '/preview/input-types': InputTypes,
  '/preview/input-validation': InputValidation,
  '/preview/input-with-slots': InputWithSlots,
  '/preview/textarea-legacy': TextareaLegacy,
  '/preview/theme-switcher': ThemeSwitcher,
  '/preview/tile': Tile,
  '/preview/timepicker': Timepicker,
  '/preview/toast-custom': ToastCustom,
  '/preview/toast-position': ToastPosition,
  '/preview/toast': Toast,
  '/preview/toggle-button-tertiary': ToggleButtonTertiary,
  '/preview/toggle-button-subtle-primary': ToggleButtonSubtlePrimary,
  '/preview/toggle-button-subtle-secondary': ToggleButtonSubtleSecondary,
  '/preview/toggle-button-subtle-tertiary': ToggleButtonSubtleTertiary,
  '/preview/toggle-checked': ToggleChecked,
  '/preview/toggle-custom-label': ToggleCustomLabel,
  '/preview/toggle-disabled': ToggleDisabled,
  '/preview/toggle-indeterminate': ToggleIndeterminate,
  '/preview/toggle': Toggle,
  '/preview/tooltip': Tooltip,
  '/preview/tooltip-with-icon': TooltipWithIcon,
  '/preview/tree-custom': TreeCustom,
  '/preview/number-input': NumberInput,
  '/preview/number-input-with-slots': NumberInputWithSlots,
  '/preview/number-input-disabled': NumberInputDisabled,
  '/preview/number-input-label': NumberInputLabel,
  '/preview/number-input-readonly': NumberInputReadonly,
  '/preview/number-input-stepper-button': NumberInputStepperButton,
  '/preview/number-input-validation': NumberInputValidation,
  '/preview/date-input': DateInput,
  '/preview/date-input-with-slots': DateInputWithSlots,
  '/preview/datetime-input': DatetimeInput,
  '/preview/datetime-input-disabled': DatetimeInputDisabled,
  '/preview/datetime-input-label': DatetimeInputLabel,
  '/preview/datetime-input-min-max-date': DatetimeInputMinMaxDate,
  '/preview/datetime-input-readonly': DatetimeInputReadonly,
  '/preview/datetime-input-validation': DatetimeInputValidation,
  '/preview/datetime-input-with-slots': DatetimeInputWithSlots,
  '/preview/tree': Tree,
  '/preview/upload': Upload,
  '/preview/validation': Validation,
  '/preview/vertical-tabs-with-avatar': VerticalTabsWithAvatar,
  '/preview/vertical-tabs': VerticalTabs,
  '/preview/workflow-vertical': WorkflowVertical,
  '/preview/validation-select': ValidationSelect,
  '/preview/form-validation': FormValidation,
  '/preview/layout-auto': LayoutAuto,
  '/preview/layout-auto-custom': LayoutAutoCustom,
  '/preview/workflow': Workflow,
  '/preview/form-layout-auto': FormLayoutAuto,
  '/preview/form-layout-grid': FormLayoutGrid,
  '/preview/progress-indicator-linear-status': ProgressIndicatorLinearStatus,
  '/preview/progress-indicator-circular-status':
    ProgressIndicatorCircularStatus,
  '/preview/progress-indicator-linear-sizes': ProgressIndicatorLinearSizes,
  '/preview/progress-indicator-circular-sizes': ProgressIndicatorCircularSizes,
  '/preview/progress-indicator-circular': ProgressIndicatorCircular,
  '/preview/progress-indicator': ProgressIndicator,
  '/preview/button-danger-primary': buttonDangerPrimary,
  '/preview/button-danger-tertiary': buttonDangerTertiary,
  '/preview/button-danger-secondary': buttonDangerSecondary,
  '/preview/button-with-link': ButtonWithLink,
  '/preview/date-input-disabled': dateInputDisabled,
  '/preview/date-input-label': dateInputLabel,
  '/preview/date-input-min-max-date': dateInputMinMaxDate,
  '/preview/date-input-readonly': dateInputReadonly,
  '/preview/date-input-validation': dateInputValidation,
  '/preview/event-list-custom-item-height-in-number':
    eventListCustomItemHeightInNumber,
  '/preview/time-input': timeInput,
  '/preview/time-input-disabled': timeInputDisabled,
  '/preview/time-input-label': timeInputLabel,
  '/preview/time-input-readonly': timeInputReadonly,
  '/preview/time-input-validation': timeInputValidation,
  '/preview/time-input-with-slots': timeInputWithSlots,
  '/preview/timepicker-format-adjusted': timepickerFormatAdjusted,
  '/preview/timepicker-intervals': timepickerIntervals,
  '/preview/toggle-button-primary': toggleButtonPrimary,
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <IxApplicationContext>
    <BrowserRouter>
      <Routes>
        {Object.entries(routes).map(([path, Component]) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </BrowserRouter>
  </IxApplicationContext>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
