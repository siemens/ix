<!--
  SPDX-FileCopyrightText: 2022 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { computed, ref } from 'vue';
import App from './App.vue';

import AboutAndLegal from './preview-examples/about-and-legal.vue';
import ActionCard from './preview-examples/action-card.vue';
import AGGrid from './preview-examples/aggrid.vue';
import ApplicationAppSwitch from './preview-examples/application-app-switch.vue';
import ApplicationBreakpoints from './preview-examples/application-breakpoints.vue';
import ApplicationHeader from './preview-examples/application-header.vue';
import Application from './preview-examples/application.vue';
import BasicNavigationWithoutHeader from './preview-examples/basic-navigation-without-header.vue';
import BasicNavigation from './preview-examples/basic-navigation.vue';
import Blind from './preview-examples/blind.vue';
import BreadcrumbNextItems from './preview-examples/breadcrumb-next-items.vue';
import BreadcrumbTruncate from './preview-examples/breadcrumb-truncate.vue';
import Breadcrumb from './preview-examples/breadcrumb.vue';
import ButtonGroup from './preview-examples/button-group.vue';
import ButtonWithIcon from './preview-examples/button-with-icon.vue';
import Buttons from './preview-examples/buttons.vue';
import Card from './preview-examples/card.vue';
import CheckboxIndeterminate from './preview-examples/checkbox-indeterminate.vue';
import Checkbox from './preview-examples/checkbox.vue';
import Chip from './preview-examples/chip.vue';
import ContentHeaderNoBack from './preview-examples/content-header-no-back.vue';
import ContentHeader from './preview-examples/content-header.vue';
import content from './preview-examples/content.vue';
import DateDropdownUserRange from './preview-examples/date-dropdown-user-range.vue';
import DateDropdown from './preview-examples/date-dropdown.vue';
import DatepickerLocale from './preview-examples/datepicker-locale.vue';
import DatepickerRange from './preview-examples/datepicker-range.vue';
import Datepicker from './preview-examples/datepicker.vue';
import Datetimepicker from './preview-examples/datetimepicker.vue';
import DrawerFullHeight from './preview-examples/drawer-full-height.vue';
import DropdownIcon from './preview-examples/dropdown-icon.vue';
import Dropdown from './preview-examples/dropdown.vue';
import EmptyStateCompactBreak from './preview-examples/empty-state-compact-break.vue';
import EmptyStateCompact from './preview-examples/empty-state-compact.vue';
import EmptyState from './preview-examples/empty-state.vue';
import EventListCompact from './preview-examples/event-list-compact.vue';
import EventListCustomHeight from './preview-examples/event-list-custom-item-height.vue';
import EventListSelected from './preview-examples/event-list-selected.vue';
import EventList from './preview-examples/event-list.vue';
import ExpandingSearch from './preview-examples/expanding-search.vue';
import FlipTile from './preview-examples/flip-tile.vue';
import FormCheckbox from './preview-examples/form-checkbox.vue';
import FormCheckboxDisabled from './preview-examples/form-checkbox-disabled.vue';
import FormCheckboxGroup from './preview-examples/form-checkbox-group.vue';
import GridPadding from './preview-examples/grid-padding.vue';
import GridSize from './preview-examples/grid-size.vue';
import Grid from './preview-examples/grid.vue';
import GroupContextMenu from './preview-examples/group-context-menu.vue';
import GroupCustomEntry from './preview-examples/group-custom-entry.vue';
import GroupHeaderSuppressed from './preview-examples/group-header-suppressed.vue';
import Group from './preview-examples/group.vue';
import InputDisabled from './preview-examples/input-disabled.vue';
import InputReadonly from './preview-examples/input-readonly.vue';
import InputWithIcon from './preview-examples/input-with-icon.vue';
import Input from './preview-examples/input.vue';
import KeyValueListStriped from './preview-examples/key-value-list-striped.vue';
import KeyValueListWithCustomValue from './preview-examples/key-value-list-with-custom-value.vue';
import KeyValueListWithIcon from './preview-examples/key-value-list-with-icon.vue';
import KeyValueList from './preview-examples/key-value-list.vue';
import KeyValueWithCustomValue from './preview-examples/key-value-with-custom-value.vue';
import KeyValueWithIcon from './preview-examples/key-value-with-icon.vue';
import KeyValueWithLabelLeft from './preview-examples/key-value-with-label-left.vue';
import KeyValue from './preview-examples/key-value.vue';
import Kpi from './preview-examples/kpi.vue';
import MapNavigationOverlay from './preview-examples/map-navigation-overlay.vue';
import MapNavigation from './preview-examples/map-navigation.vue';
import MenuCategory from './preview-examples/menu-category.vue';
import MessageBar from './preview-examples/message-bar.vue';
import ModalExample from './preview-examples/modal.vue';
import NumberField from './preview-examples/number-field.vue';
import NumberFieldLabel from './preview-examples/number-field-label.vue';
import NumberFieldDisabled from './preview-examples/number-field-disabled.vue';
import NumberFieldReadOnly from './preview-examples/number-field-readonly.vue';
import NumberFieldStepperButton from './preview-examples/number-field-stepper-button.vue';
import Pane from './preview-examples/pane.vue';
import PaneLayout from './preview-examples/pane-layout.vue';
import PillVariants from './preview-examples/pill-variants.vue';
import Pill from './preview-examples/pill.vue';
import PopoverNews from './preview-examples/popover-news.vue';
import PushCard from './preview-examples/push-card.vue';
import RadioButton from './preview-examples/radio-button.vue';
import Radio from './preview-examples/radio.vue';
import RadioDisabled from './preview-examples/radio-disabled.vue';
import RadioGroup from './preview-examples/radio-group.vue';
import RadioValidation from './preview-examples/radio-validation.vue';
import Select from './preview-examples/select.vue';
import SelectEditable from './preview-examples/select-editable.vue';
import SelectMultiple from './preview-examples/select-multiple.vue';
import SelectValidation from './preview-examples/select-validation.vue';
import Settings from './preview-examples/settings.vue';
import SliderError from './preview-examples/slider-error.vue';
import SliderMarker from './preview-examples/slider-marker.vue';
import SliderTrace from './preview-examples/slider-trace.vue';
import Slider from './preview-examples/slider.vue';
import SpinnerLarge from './preview-examples/spinner-large.vue';
import Spinner from './preview-examples/spinner.vue';
import SplitbuttonIcons from './preview-examples/split-button-icons.vue';
import Splitbutton from './preview-examples/split-button.vue';
import Tabs from './preview-examples/tabs.vue';
import Textarea from './preview-examples/textarea.vue';
import TextareaDisabled from './preview-examples/textarea-disabled.vue';
import TextareaReadonly from './preview-examples/textarea-readonly.vue';
import TextareaField from './preview-examples/textarea-field.vue';
import TextareaFieldDisabled from './preview-examples/textarea-field-disabled.vue';
import TextareaFieldReadonly from './preview-examples/textarea-field-readonly.vue';
import TextareaFieldRowsCols from './preview-examples/textarea-field-rows-cols.vue';
import TextareaFieldValidation from './preview-examples/textarea-field-validation.vue';
import TextField from './preview-examples/text-field.vue';
import TextFieldDisabled from './preview-examples/text-field-disabled.vue';
import TextFieldLabel from './preview-examples/text-field-label.vue';
import TextFieldPattern from './preview-examples/text-field-pattern.vue';
import TextFieldReadonly from './preview-examples/text-field-readonly.vue';
import TextFieldTypes from './preview-examples/text-field-types.vue';
import TextFieldValidation from './preview-examples/text-field-validation.vue';
import Tile from './preview-examples/tile.vue';
import Timepicker from './preview-examples/timepicker.vue';
import ToastCustom from './preview-examples/toast-custom.vue';
import ToastPosition from './preview-examples/toast-position.vue';
import Toast from './preview-examples/toast.vue';
import ToggleColor from './preview-examples/toggle-color.vue';
import ToggleCustomLabel from './preview-examples/toggle-custom-label.vue';
import ToggleDisabled from './preview-examples/toggle-disabled.vue';
import Toggle from './preview-examples/toggle.vue';
import Tooltip from './preview-examples/tooltip.vue';
import TreeCustom from './preview-examples/tree-custom.vue';
import Tree from './preview-examples/tree.vue';
import WorkflowVertical from './preview-examples/workflow-vertical.vue';
import Workflow from './preview-examples/workflow.vue';
import NavigationTest from './testing/NavigationTest.vue';
import Echarts from './preview-examples/echarts.vue';
import ValidationSelect from './preview-examples/validation-select.vue';
import FormValidation from './preview-examples/form-validation.vue';

const routes: any = {
  '/': App,
  '/preview/application': Application,
  '/preview/application-header': ApplicationHeader,
  '/preview/application-breakpoints': ApplicationBreakpoints,
  '/preview/application-app-switch': ApplicationAppSwitch,
  '/preview/card': Card,
  '/preview/content': content,
  '/preview/checkbox': Checkbox,
  '/preview/checkbox-indeterminate': CheckboxIndeterminate,
  '/preview/buttons': Buttons,
  '/preview/button-with-icon': ButtonWithIcon,
  '/preview/button-group': ButtonGroup,
  '/preview/blind': Blind,
  '/preview/breadcrumb': Breadcrumb,
  '/preview/breadcrumb-next-items': BreadcrumbNextItems,
  '/preview/breadcrumb-truncate': BreadcrumbTruncate,
  '/preview/about-and-legal': AboutAndLegal,
  '/preview/aggrid': AGGrid,
  '/preview/chip': Chip,
  '/preview/date-dropdown': DateDropdown,
  '/preview/date-dropdown-user-range': DateDropdownUserRange,
  '/preview/datepicker': Datepicker,
  '/preview/datepicker-locale': DatepickerLocale,
  '/preview/datepicker-range': DatepickerRange,
  '/preview/datetimepicker': Datetimepicker,
  '/preview/drawer-full-height': DrawerFullHeight,
  '/preview/dropdown': Dropdown,
  '/preview/dropdown-icon': DropdownIcon,
  '/preview/echarts': Echarts,
  '/preview/event-list': EventList,
  '/preview/event-list-compact': EventListCompact,
  '/preview/event-list-custom-item-height': EventListCustomHeight,
  '/preview/event-list-selected': EventListSelected,
  '/preview/expanding-search': ExpandingSearch,
  '/preview/flip-tile': FlipTile,
  '/preview/form-checkbox': FormCheckbox,
  '/preview/form-checkbox-disabled': FormCheckboxDisabled,
  '/preview/form-checkbox-group': FormCheckboxGroup,
  '/preview/group': Group,
  '/preview/group-context-menu': GroupContextMenu,
  '/preview/group-custom-entry': GroupCustomEntry,
  '/preview/group-header-suppressed': GroupHeaderSuppressed,
  '/preview/input': Input,
  '/preview/input-disabled': InputDisabled,
  '/preview/input-readonly': InputReadonly,
  '/preview/input-with-icon': InputWithIcon,
  '/preview/message-bar': MessageBar,
  '/preview/pill': Pill,
  '/preview/pill-variants': PillVariants,
  '/preview/radio-button': RadioButton,
  '/preview/radio': Radio,
  '/preview/radio-disabled': RadioDisabled,
  '/preview/radio-group': RadioGroup,
  '/preview/radio-validation': RadioValidation,
  '/preview/select': Select,
  '/preview/select-editable': SelectEditable,
  '/preview/select-multiple': SelectMultiple,
  '/preview/select-validation': SelectValidation,
  '/preview/pane': Pane,
  '/preview/pane-layout': PaneLayout,
  '/preview/spinner': Spinner,
  '/preview/spinner-large': SpinnerLarge,
  '/preview/split-button': Splitbutton,
  '/preview/split-button-icons': SplitbuttonIcons,
  '/preview/tabs': Tabs,
  '/preview/textarea': Textarea,
  '/preview/textarea-disabled': TextareaDisabled,
  '/preview/textarea-readonly': TextareaReadonly,
  '/preview/textarea-field': TextareaField,
  '/preview/textarea-field-readonly': TextareaFieldReadonly,
  '/preview/textarea-field-disabled': TextareaFieldDisabled,
  '/preview/textarea-field-rows-cols': TextareaFieldRowsCols,
  '/preview/textarea-field-validation': TextareaFieldValidation,
  '/preview/text-field': TextField,
  '/preview/text-field-disabled': TextFieldDisabled,
  '/preview/text-field-label': TextFieldLabel,
  '/preview/text-field-pattern': TextFieldPattern,
  '/preview/text-field-readonly': TextFieldReadonly,
  '/preview/text-field-types': TextFieldTypes,
  '/preview/text-field-validation': TextFieldValidation,
  '/preview/tile': Tile,
  '/preview/timepicker': Timepicker,
  '/preview/toast': Toast,
  '/preview/toast-custom': ToastCustom,
  '/preview/toast-position': ToastPosition,
  '/preview/toggle': Toggle,
  '/preview/toggle-disabled': ToggleDisabled,
  '/preview/toggle-color': ToggleColor,
  '/preview/toggle-custom-toggle': ToggleCustomLabel,
  '/preview/tree': Tree,
  '/preview/tree-custom': TreeCustom,
  '/preview/popover-news': PopoverNews,
  '/preview/settings': Settings,
  '/preview/kpi': Kpi,
  '/preview/modal': ModalExample,
  '/preview/number-field': NumberField,
  '/preview/number-field-disabled': NumberFieldDisabled,
  '/preview/number-field-label': NumberFieldLabel,
  '/preview/number-field-readonly': NumberFieldReadOnly,
  '/preview/number-field-stepper-button': NumberFieldStepperButton,
  '/preview/workflow': Workflow,
  '/preview/workflow-vertical': WorkflowVertical,
  '/preview/basic-navigation': BasicNavigation,
  '/preview/basic-navigation-without-header': BasicNavigationWithoutHeader,
  '/preview/map-navigation': MapNavigation,
  '/preview/map-navigation-overlay': MapNavigationOverlay,
  '/preview/tooltip': Tooltip,
  '/preview/push-card': PushCard,
  '/preview/action-card': ActionCard,
  '/preview/page-header': ContentHeader,
  '/preview/page-header-no-back': ContentHeaderNoBack,
  '/preview/empty-state': EmptyState,
  '/preview/empty-state-compact': EmptyStateCompact,
  '/preview/empty-state-compact-break': EmptyStateCompactBreak,
  '/preview/key-value': KeyValue,
  '/preview/key-value-with-custom-value': KeyValueWithCustomValue,
  '/preview/key-value-with-icon': KeyValueWithIcon,
  '/preview/key-value-with-label-left': KeyValueWithLabelLeft,
  '/preview/key-value-list': KeyValueList,
  '/preview/key-value-list-with-custom-value': KeyValueListWithCustomValue,
  '/preview/key-value-list-with-icon': KeyValueListWithIcon,
  '/preview/key-value-list-striped': KeyValueListStriped,
  '/testing/navigation': NavigationTest,
  '/testing/navigation/link1': NavigationTest,
  '/testing/navigation/link2': NavigationTest,
  '/preview/menu-category': MenuCategory,
  '/preview/slider': Slider,
  '/preview/slider-trace': SliderTrace,
  '/preview/slider-marker': SliderMarker,
  '/preview/slider-error': SliderError,
  '/preview/grid': Grid,
  '/preview/grid-size': GridSize,
  '/preview/grid-padding': GridPadding,
  '/preview/validation-select': ValidationSelect,
  '/preview/form-validation': FormValidation,
};

const currentPath = ref(window.location.pathname);

const currentView = computed(() => {
  return routes[currentPath.value || '/'] || App;
});
</script>

<template>
  <component :is="currentView"></component>
</template>
