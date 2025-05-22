<!--
  SPDX-FileCopyrightText: 2022 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { computed, ref } from 'vue';

import { IxApplicationContext } from "@siemens/ix-vue"


import App from './App.vue';
import AboutAndLegal from './preview-examples/about-and-legal.vue';
import ActionCard from './preview-examples/action-card.vue';
import AddIcons from './preview-examples/add-icons.vue';
import AgGrid from './preview-examples/aggrid.vue';
import ApplicationAppSwitch from './preview-examples/application-app-switch.vue';
import ApplicationBreakpoints from './preview-examples/application-breakpoints.vue';
import ApplicationHeader from './preview-examples/application-header.vue';
import Application from './preview-examples/application.vue';
import AvatarImage from './preview-examples/avatar-image.vue';
import AvatarInitials from './preview-examples/avatar-initials.vue';
import Avatar from './preview-examples/avatar.vue';
import BasicNavigationMigration from './preview-examples/basic-navigation-migration.vue';
import BasicNavigationWithoutHeader from './preview-examples/basic-navigation-without-header.vue';
import BasicNavigation from './preview-examples/basic-navigation.vue';
import BlindHeaderActions from './preview-examples/blind-header-actions.vue';
import BlindVariants from './preview-examples/blind-variants.vue';
import Blind from './preview-examples/blind.vue';
import BreadcrumbNextItems from './preview-examples/breadcrumb-next-items.vue';
import BreadcrumbTruncate from './preview-examples/breadcrumb-truncate.vue';
import Breadcrumb from './preview-examples/breadcrumb.vue';
import ButtonDangerGhost from './preview-examples/button-danger-ghost.vue';
import ButtonDangerOutline from './preview-examples/button-danger-outline.vue';
import ButtonDanger from './preview-examples/button-danger.vue';
import ButtonGhost from './preview-examples/button-ghost.vue';
import ButtonGreyGhost from './preview-examples/button-grey-ghost.vue';
import ButtonGreySecondary from './preview-examples/button-grey-secondary.vue';
import ButtonGrey from './preview-examples/button-grey.vue';
import ButtonGroup from './preview-examples/button-group.vue';
import ButtonLoading from './preview-examples/button-loading.vue';
import ButtonSecondary from './preview-examples/button-secondary.vue';
import ButtonTextIcon from './preview-examples/button-text-icon.vue';
import ButtonWithIcon from './preview-examples/button-with-icon.vue';
import Buttons from './preview-examples/buttons.vue';
import CardList from './preview-examples/card-list.vue';
import Card from './preview-examples/card.vue';
import CategoryFilterSuggestions from './preview-examples/category-filter-suggestions.vue';
import CategoryFilter from './preview-examples/category-filter.vue';
import CheckboxIndeterminate from './preview-examples/checkbox-indeterminate.vue';
import Checkbox from './preview-examples/checkbox.vue';
import Chip from './preview-examples/chip.vue';
import ContentHeaderNoBack from './preview-examples/content-header-no-back.vue';
import ContentHeader from './preview-examples/content-header.vue';
import Content from './preview-examples/content.vue';
import CustomFieldValidation from './preview-examples/custom-field-validation.vue';
import CustomField from './preview-examples/custom-field.vue';
import DateDropdownUserRange from './preview-examples/date-dropdown-user-range.vue';
import DateDropdown from './preview-examples/date-dropdown.vue';
import DateInputWithSlots from './preview-examples/date-input-with-slots.vue';
import DateInput from './preview-examples/date-input.vue';
import DatepickerLocale from './preview-examples/datepicker-locale.vue';
import DatepickerRange from './preview-examples/datepicker-range.vue';
import Datepicker from './preview-examples/datepicker.vue';
import Datetimepicker from './preview-examples/datetimepicker.vue';
import Divider from './preview-examples/divider.vue';
import DrawerFullHeight from './preview-examples/drawer-full-height.vue';
import Drawer from './preview-examples/drawer.vue';
import DropdownButtonIcon from './preview-examples/dropdown-button-icon.vue';
import DropdownButton from './preview-examples/dropdown-button.vue';
import DropdownIcon from './preview-examples/dropdown-icon.vue';
import DropdownQuickActions from './preview-examples/dropdown-quick-actions.vue';
import DropdownSubmenu from './preview-examples/dropdown-submenu.vue';
import Dropdown from './preview-examples/dropdown.vue';
import EchartsBarHorizontalStacked from './preview-examples/echarts-bar-horizontal-stacked.vue';
import EchartsBarSimple from './preview-examples/echarts-bar-simple.vue';
import EchartsCircle from './preview-examples/echarts-circle.vue';
import EchartsEmptyState from './preview-examples/echarts-empty-state.vue';
import EchartsGauge from './preview-examples/echarts-gauge.vue';
import EchartsLineAdvanced from './preview-examples/echarts-line-advanced.vue';
import EchartsLineMultipleYAxis from './preview-examples/echarts-line-multiple-y-axis.vue';
import EchartsLineSimple from './preview-examples/echarts-line-simple.vue';
import EchartsPie from './preview-examples/echarts-pie.vue';
import EchartsProgressArc from './preview-examples/echarts-progress-arc.vue';
import EchartsProgressCircle from './preview-examples/echarts-progress-circle.vue';
import EchartsSpecial3d from './preview-examples/echarts-special-3d.vue';
import EchartsSpecialToolbox from './preview-examples/echarts-special-toolbox.vue';
import EchartsSpecialZoom from './preview-examples/echarts-special-zoom.vue';
import Echarts from './preview-examples/echarts.vue';
import EmptyStateCompactBreak from './preview-examples/empty-state-compact-break.vue';
import EmptyStateCompact from './preview-examples/empty-state-compact.vue';
import EmptyState from './preview-examples/empty-state.vue';
import EventListCompact from './preview-examples/event-list-compact.vue';
import EventListCustomItemHeight from './preview-examples/event-list-custom-item-height.vue';
import EventListSelected from './preview-examples/event-list-selected.vue';
import EventList from './preview-examples/event-list.vue';
import ExpandingSearch from './preview-examples/expanding-search.vue';
import FlipTile from './preview-examples/flip-tile.vue';
import FormCheckboxDisabled from './preview-examples/form-checkbox-disabled.vue';
import FormCheckboxGroupIndeterminate from './preview-examples/form-checkbox-group-indeterminate.vue';
import FormCheckboxGroup from './preview-examples/form-checkbox-group.vue';
import FormCheckboxValidation from './preview-examples/form-checkbox-validation.vue';
import FormCheckbox from './preview-examples/form-checkbox.vue';
import FormLayoutAuto from './preview-examples/form-layout-auto.vue';
import FormLayoutGrid from './preview-examples/form-layout-grid.vue';
import FormValidation from './preview-examples/form-validation.vue';
import GridPadding from './preview-examples/grid-padding.vue';
import GridSize from './preview-examples/grid-size.vue';
import Grid from './preview-examples/grid.vue';
import GroupContextMenu from './preview-examples/group-context-menu.vue';
import GroupCustomEntry from './preview-examples/group-custom-entry.vue';
import GroupHeaderSuppressed from './preview-examples/group-header-suppressed.vue';
import Group from './preview-examples/group.vue';
import IconToggleButtonPrimaryGhost from './preview-examples/icon-toggle-button-primary-ghost.vue';
import IconToggleButtonPrimaryOutline from './preview-examples/icon-toggle-button-primary-outline.vue';
import IconToggleButtonSecondaryGhost from './preview-examples/icon-toggle-button-secondary-ghost.vue';
import IconToggleButtonSecondaryOutline from './preview-examples/icon-toggle-button-secondary-outline.vue';
import IconToggleButtonSecondary from './preview-examples/icon-toggle-button-secondary.vue';
import InputDisabled from './preview-examples/input-disabled.vue';
import InputLabel from './preview-examples/input-label.vue';
import InputLegacyDisabled from './preview-examples/input-legacy-disabled.vue';
import InputLegacyLabels from './preview-examples/input-legacy-labels.vue';
import InputLegacyReadonly from './preview-examples/input-legacy-readonly.vue';
import InputLegacySearch from './preview-examples/input-legacy-search.vue';
import InputLegacyTypes from './preview-examples/input-legacy-types.vue';
import InputLegacyWithIcon from './preview-examples/input-legacy-with-icon.vue';
import InputLegacy from './preview-examples/input-legacy.vue';
import InputPattern from './preview-examples/input-pattern.vue';
import InputReadonly from './preview-examples/input-readonly.vue';
import InputTypes from './preview-examples/input-types.vue';
import InputValidation from './preview-examples/input-validation.vue';
import InputWithSlots from './preview-examples/input-with-slots.vue';
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
import LayoutAutoCustom from './preview-examples/layout-auto-custom.vue';
import LayoutAuto from './preview-examples/layout-auto.vue';
import LinkButtonDisabled from './preview-examples/link-button-disabled.vue';
import LinkButton from './preview-examples/link-button.vue';
import Loading from './preview-examples/loading.vue';
import MapNavigationMigration from './preview-examples/map-navigation-migration.vue';
import MapNavigationOverlay from './preview-examples/map-navigation-overlay.vue';
import MapNavigation from './preview-examples/map-navigation.vue';
import MenuCategory from './preview-examples/menu-category.vue';
import MenuWithBottomTabs from './preview-examples/menu-with-bottom-tabs.vue';
import MessageBar from './preview-examples/message-bar.vue';
import MessageBarRemoval from './preview-examples/message-bar-removal.vue';
import Message from './preview-examples/message.vue';
import ModalSizes from './preview-examples/modal-sizes.vue';
import ModalExample from './preview-examples/modal.vue';
import NumberInputDisabled from './preview-examples/number-input-disabled.vue';
import NumberInputLabel from './preview-examples/number-input-label.vue';
import NumberInputReadOnly from './preview-examples/number-input-readonly.vue';
import NumberInputStepperButton from './preview-examples/number-input-stepper-button.vue';
import NumberInputWithSlots from './preview-examples/number-input-with-slots.vue';
import NumberInput from './preview-examples/number-input.vue';
import PaginationAdvanced from './preview-examples/pagination-advanced.vue';
import Pagination from './preview-examples/pagination.vue';
import PaneLayout from './preview-examples/pane-layout.vue';
import Pane from './preview-examples/pane.vue';
import PillVariants from './preview-examples/pill-variants.vue';
import Pill from './preview-examples/pill.vue';
import PopoverNews from './preview-examples/popover-news.vue';
import PushCard from './preview-examples/push-card.vue';
import RadioButton from './preview-examples/radio-button.vue';
import RadioDisabled from './preview-examples/radio-disabled.vue';
import RadioGroup from './preview-examples/radio-group.vue';
import RadioValidation from './preview-examples/radio-validation.vue';
import Radio from './preview-examples/radio.vue';
import SelectEditable from './preview-examples/select-editable.vue';
import SelectMultiple from './preview-examples/select-multiple.vue';
import SelectValidation from './preview-examples/select-validation.vue';
import Select from './preview-examples/select.vue';
import Settings from './preview-examples/settings.vue';
import SliderError from './preview-examples/slider-error.vue';
import SliderMarker from './preview-examples/slider-marker.vue';
import SliderTrace from './preview-examples/slider-trace.vue';
import Slider from './preview-examples/slider.vue';
import SpinnerLarge from './preview-examples/spinner-large.vue';
import Spinner from './preview-examples/spinner.vue';
import SplitButtonIcons from './preview-examples/split-button-icons.vue';
import SplitButton from './preview-examples/split-button.vue';
import TabsRounded from './preview-examples/tabs-rounded.vue';
import Tabs from './preview-examples/tabs.vue';
import TextareaFieldDisabled from './preview-examples/textarea-disabled.vue';
import TextareaLegacyDisabled from './preview-examples/textarea-legacy-disabled.vue';
import TextareaLegacyReadonly from './preview-examples/textarea-legacy-readonly.vue';
import TextareaLegacy from './preview-examples/textarea-legacy.vue';
import TextareaFieldReadonly from './preview-examples/textarea-readonly.vue';
import TextareaFieldRowsCols from './preview-examples/textarea-rows-cols.vue';
import TextareaFieldValidation from './preview-examples/textarea-validation.vue';
import TextareaField from './preview-examples/textarea.vue';
import ThemeSwitcher from './preview-examples/theme-switcher.vue';
import Tile from './preview-examples/tile.vue';
import Timepicker from './preview-examples/timepicker.vue';
import ToastCustom from './preview-examples/toast-custom.vue';
import ToastPosition from './preview-examples/toast-position.vue';
import Toast from './preview-examples/toast.vue';
import ToggleButtonPrimaryGhost from './preview-examples/toggle-button-primary-ghost.vue';
import ToggleButtonPrimaryOutline from './preview-examples/toggle-button-primary-outline.vue';
import ToggleButtonPrimary from './preview-examples/toggle-button-primary.vue';
import ToggleButtonSecondaryGhost from './preview-examples/toggle-button-secondary-ghost.vue';
import ToggleButtonSecondaryOutline from './preview-examples/toggle-button-secondary-outline.vue';
import ToggleButtonSecondary from './preview-examples/toggle-button-secondary.vue';
import ToggleChecked from './preview-examples/toggle-checked.vue';
import ToggleCustomLabel from './preview-examples/toggle-custom-label.vue';
import ToggleDisabled from './preview-examples/toggle-disabled.vue';
import ToggleIndeterminate from './preview-examples/toggle-indeterminate.vue';
import Toggle from './preview-examples/toggle.vue';
import Tooltip from './preview-examples/tooltip.vue';
import TreeCustom from './preview-examples/tree-custom.vue';
import Tree from './preview-examples/tree.vue';
import Upload from './preview-examples/upload.vue';
import ValidationSelect from './preview-examples/validation-select.vue';
import Validation from './preview-examples/validation.vue';
import VerticalTabsWithAvatar from './preview-examples/vertical-tabs-with-avatar.vue';
import VerticalTabs from './preview-examples/vertical-tabs.vue';
import WorkflowVertical from './preview-examples/workflow-vertical.vue';
import Workflow from './preview-examples/workflow.vue';
import ModalFormIxButtonSubmit from './preview-examples/modal-form-ix-button-submit.vue';

const routes: any = {
  '/': App,
  '/preview/about-and-legal': AboutAndLegal,
  '/preview/action-card': ActionCard,
  '/preview/add-icons': AddIcons,
  '/preview/aggrid': AgGrid,
  '/preview/application': Application,
  '/preview/application-header': ApplicationHeader,
  '/preview/application-breakpoints': ApplicationBreakpoints,
  '/preview/application-app-switch': ApplicationAppSwitch,
  '/preview/content': Content,
  '/preview/avatar-image': AvatarImage,
  '/preview/avatar-initials': AvatarInitials,
  '/preview/avatar': Avatar,
  '/preview/basic-navigation-without-header': BasicNavigationWithoutHeader,
  '/preview/basic-navigation': BasicNavigation,
  '/preview/basic-navigation-migration': BasicNavigationMigration,
  '/preview/blind-header-actions': BlindHeaderActions,
  '/preview/blind-variants': BlindVariants,
  '/preview/blind': Blind,
  '/preview/breadcrumb-next-items': BreadcrumbNextItems,
  '/preview/breadcrumb-truncate': BreadcrumbTruncate,
  '/preview/breadcrumb': Breadcrumb,
  '/preview/button-ghost': ButtonGhost,
  '/preview/button-grey-ghost': ButtonGreyGhost,
  '/preview/button-grey-secondary': ButtonGreySecondary,
  '/preview/button-grey': ButtonGrey,
  '/preview/button-group': ButtonGroup,
  '/preview/button-loading': ButtonLoading,
  '/preview/button-secondary': ButtonSecondary,
  '/preview/button-text-icon': ButtonTextIcon,
  '/preview/button-with-icon': ButtonWithIcon,
  '/preview/buttons': Buttons,
  '/preview/card': Card,
  '/preview/card-list': CardList,
  '/preview/category-filter-suggestions.vue': CategoryFilterSuggestions,
  '/preview/category-filter': CategoryFilter,
  '/preview/checkbox-indeterminate': CheckboxIndeterminate,
  '/preview/form-checkbox-group-indeterminate': FormCheckboxGroupIndeterminate,
  '/preview/checkbox': Checkbox,
  '/preview/chip': Chip,
  '/preview/custom-field': CustomField,
  '/preview/custom-field-validation': CustomFieldValidation,
  '/preview/date-dropdown': DateDropdown,
  '/preview/date-dropdown-user-range': DateDropdownUserRange,
  '/preview/content-header-no-back': ContentHeaderNoBack,
  '/preview/content-header': ContentHeader,
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
  '/preview/echarts-gauge': EchartsGauge,
  '/preview/echarts-line-advanced': EchartsLineAdvanced,
  '/preview/echarts-line-simple': EchartsLineSimple,
  '/preview/echarts-line-multiple-y-axis': EchartsLineMultipleYAxis,
  '/preview/echarts-pie': EchartsPie,
  '/preview/echarts-progress-circle': EchartsProgressCircle,
  '/preview/echarts-progress-arc': EchartsProgressArc,
  '/preview/echarts-special-3d': EchartsSpecial3d,
  '/preview/echarts-special-toolbox': EchartsSpecialToolbox,
  '/preview/echarts-special-zoom': EchartsSpecialZoom,
  '/preview/empty-state-compact-break': EmptyStateCompactBreak,
  '/preview/empty-state-compact': EmptyStateCompact,
  '/preview/empty-state': EmptyState,
  '/preview/event-list-compact': EventListCompact,
  '/preview/event-list-custom-item-height': EventListCustomItemHeight,
  '/preview/event-list-selected': EventListSelected,
  '/preview/event-list': EventList,
  '/preview/expanding-search': ExpandingSearch,
  '/preview/flip-tile': FlipTile,
  '/preview/form-checkbox': FormCheckbox,
  '/preview/form-checkbox-disabled': FormCheckboxDisabled,
  '/preview/form-checkbox-group': FormCheckboxGroup,
  '/preview/form-checkbox-validation': FormCheckboxValidation,
  '/preview/group': Group,
  '/preview/grid-padding': GridPadding,
  '/preview/grid-size': GridSize,
  '/preview/grid': Grid,
  '/preview/group-context-menu': GroupContextMenu,
  '/preview/group-custom-entry': GroupCustomEntry,
  '/preview/group-header-suppressed': GroupHeaderSuppressed,
  '/preview/icon-toggle-button-primary-ghost': IconToggleButtonPrimaryGhost,
  '/preview/icon-toggle-button-primary-outline': IconToggleButtonPrimaryOutline,
  '/preview/icon-toggle-button-secondary-ghost': IconToggleButtonSecondaryGhost,
  '/preview/icon-toggle-button-secondary-outline':
    IconToggleButtonSecondaryOutline,
  '/preview/icon-toggle-button-secondary': IconToggleButtonSecondary,
  '/preview/input-legacy-disabled': InputLegacyDisabled,
  '/preview/input-legacy-labels': InputLegacyLabels,
  '/preview/input-legacy-readonly': InputLegacyReadonly,
  '/preview/input-legacy-search': InputLegacySearch,
  '/preview/input-legacy-types': InputLegacyTypes,
  '/preview/input-legacy-with-icon': InputLegacyWithIcon,
  '/preview/message-bar': MessageBar,
  '/preview/message-bar-removal': MessageBarRemoval,
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
  '/preview/split-button': SplitButton,
  '/preview/split-button-icons': SplitButtonIcons,
  '/preview/tabs': Tabs,
  '/preview/textarea-legacy': TextareaLegacy,
  '/preview/textarea-legacy-disabled': TextareaLegacyDisabled,
  '/preview/textarea-legacy-readonly': TextareaLegacyReadonly,
  '/preview/textarea': TextareaField,
  '/preview/textarea-readonly': TextareaFieldReadonly,
  '/preview/textarea-disabled': TextareaFieldDisabled,
  '/preview/textarea-rows-cols': TextareaFieldRowsCols,
  '/preview/textarea-validation': TextareaFieldValidation,
  '/preview/input': Input,
  '/preview/input-disabled': InputDisabled,
  '/preview/input-label': InputLabel,
  '/preview/input-pattern': InputPattern,
  '/preview/input-readonly': InputReadonly,
  '/preview/input-types': InputTypes,
  '/preview/input-validation': InputValidation,
  '/preview/input-with-slots': InputWithSlots,
  '/preview/tile': Tile,
  '/preview/timepicker': Timepicker,
  '/preview/toast': Toast,
  '/preview/toast-custom': ToastCustom,
  '/preview/toast-position': ToastPosition,
  '/preview/toggle': Toggle,
  '/preview/toggle-disabled': ToggleDisabled,
  '/preview/toggle-custom-toggle': ToggleCustomLabel,
  '/preview/tree': Tree,
  '/preview/tree-custom': TreeCustom,
  '/preview/popover-news': PopoverNews,
  '/preview/settings': Settings,
  '/preview/kpi': Kpi,
  '/preview/modal': ModalExample,
  '/preview/modal-form-ix-button-submit': ModalFormIxButtonSubmit,
  '/preview/number-input': NumberInput,
  '/preview/number-input-disabled': NumberInputDisabled,
  '/preview/number-input-label': NumberInputLabel,
  '/preview/number-input-readonly': NumberInputReadOnly,
  '/preview/number-input-stepper-button': NumberInputStepperButton,
  '/preview/number-input-with-slots': NumberInputWithSlots,
  '/preview/date-input': DateInput,
  '/preview/date-input-with-slots': DateInputWithSlots,
  '/preview/workflow': Workflow,
  '/preview/workflow-vertical': WorkflowVertical,
  '/preview/map-navigation': MapNavigation,
  '/preview/map-navigation-overlay': MapNavigationOverlay,
  '/preview/map-navigation-migration': MapNavigationMigration,
  '/preview/tooltip': Tooltip,
  '/preview/push-card': PushCard,
  '/preview/page-header': ContentHeader,
  '/preview/page-header-no-back': ContentHeaderNoBack,
  '/preview/key-value': KeyValue,
  '/preview/input-legacy': InputLegacy,
  '/preview/key-value-list-striped': KeyValueListStriped,
  '/preview/key-value-list-with-custom-value': KeyValueListWithCustomValue,
  '/preview/key-value-list-with-icon': KeyValueListWithIcon,
  '/preview/key-value-list': KeyValueList,
  '/preview/key-value-with-custom-value': KeyValueWithCustomValue,
  '/preview/key-value-with-icon': KeyValueWithIcon,
  '/preview/key-value-with-label-left': KeyValueWithLabelLeft,
  '/preview/link-button-disabled': LinkButtonDisabled,
  '/preview/link-button': LinkButton,
  '/preview/loading': Loading,
  '/preview/menu-category': MenuCategory,
  '/preview/menu-with-bottom-tabs': MenuWithBottomTabs,
  '/preview/message': Message,
  '/preview/modal-sizes': ModalSizes,
  '/preview/pagination-advanced': PaginationAdvanced,
  '/preview/pagination': Pagination,
  '/preview/slider-error': SliderError,
  '/preview/validation-select': ValidationSelect,
  '/preview/form-validation': FormValidation,
  '/preview/layout-auto': LayoutAuto,
  '/preview/layout-auto-custom': LayoutAutoCustom,
  '/preview/slider-marker': SliderMarker,
  '/preview/slider-trace': SliderTrace,
  '/preview/slider': Slider,
  '/preview/tabs-rounded': TabsRounded,
  '/preview/theme-switcher': ThemeSwitcher,
  '/preview/toggle-button-primary-ghost': ToggleButtonPrimaryGhost,
  '/preview/toggle-button-primary-outline': ToggleButtonPrimaryOutline,
  '/preview/toggle-button-primary': ToggleButtonPrimary,
  '/preview/toggle-button-secondary-ghost': ToggleButtonSecondaryGhost,
  '/preview/toggle-button-secondary-outline': ToggleButtonSecondaryOutline,
  '/preview/toggle-button-secondary': ToggleButtonSecondary,
  '/preview/toggle-checked': ToggleChecked,
  '/preview/toggle-custom-label': ToggleCustomLabel,
  '/preview/toggle-indeterminate': ToggleIndeterminate,
  '/preview/upload': Upload,
  '/preview/validation': Validation,
  '/preview/vertical-tabs-with-avatar': VerticalTabsWithAvatar,
  '/preview/vertical-tabs': VerticalTabs,
  '/preview/button-danger': ButtonDanger,
  '/preview/button-danger-ghost': ButtonDangerGhost,
  '/preview/button-danger-outline': ButtonDangerOutline,
  '/preview/form-layout-auto': FormLayoutAuto,
  '/preview/form-layout-grid': FormLayoutGrid,
};

const currentPath = ref(window.location.pathname);

const currentView = computed(() => {
  return routes[currentPath.value || '/'] || App;
});
</script>

<template>
  <IxApplicationContext>
    <component :is="currentView"></component>
  </IxApplicationContext>
</template>
import layoutAutoVue from './preview-examples/layout-auto.vue';
