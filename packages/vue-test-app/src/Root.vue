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
import Pane from './preview-examples/pane.vue';
import PaneLayout from './preview-examples/pane-layout.vue';
import PillVariants from './preview-examples/pill-variants.vue';
import Pill from './preview-examples/pill.vue';
import PopoverNews from './preview-examples/popover-news.vue';
import PushCard from './preview-examples/push-card.vue';
import RadioButton from './preview-examples/radio-button.vue';
import SelectEditable from './preview-examples/select-editable.vue';
import SelectMultiple from './preview-examples/select-multiple.vue';
import Select from './preview-examples/select.vue';
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
import TextareaDisabled from './preview-examples/textarea-disabled.vue';
import TextareaReadonly from './preview-examples/textarea-readonly.vue';
import Textarea from './preview-examples/textarea.vue';
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
import EchartsGauge from './preview-examples/echarts-gauge.vue';
import EchartsBarHorizontalStacked from './preview-examples/echarts-bar-horizontal-stacked.vue';
import EchartsBarSimple from './preview-examples/echarts-bar-simple.vue';
import EchartsCircle from './preview-examples/echarts-circle.vue';
import EchartsLineAdvanced from "./preview-examples/echarts-line-advanced.vue";
import EchartsLineMultipleYAxis from "./preview-examples/echarts-line-multiple-y-axis.vue";
import EchartsLineSimple from './preview-examples/echarts-line-simple.vue';
import EchartsPie from './preview-examples/echarts-pie.vue';
import EchartsProgressCircle from './preview-examples/echarts-progress-circle.vue';
import EchartsProgressArc from './preview-examples/echarts-progress-arc.vue';
import EchartsSpecial3d from './preview-examples/echarts-special-3d.vue';
import EchartsSpecialToolbox from './preview-examples/echarts-special-toolbox.vue';
import EchartsSpecialZoom from './preview-examples/echarts-special-zoom.vue';

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
  '/preview/echarts-bar-horizontal-stacked': EchartsBarHorizontalStacked,
  '/preview/echarts-bar-simple': EchartsBarSimple,
  '/preview/echarts-circle': EchartsCircle,
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
  '/preview/event-list': EventList,
  '/preview/event-list-compact': EventListCompact,
  '/preview/event-list-custom-item-height': EventListCustomHeight,
  '/preview/event-list-selected': EventListSelected,
  '/preview/expanding-search': ExpandingSearch,
  '/preview/flip-tile': FlipTile,
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
  '/preview/select': Select,
  '/preview/select-editable': SelectEditable,
  '/preview/select-multiple': SelectMultiple,
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
};

const currentPath = ref(window.location.pathname);

const currentView = computed(() => {
  return routes[currentPath.value || '/'] || App;
});
</script>

<template>
  <component :is="currentView"></component>
</template>
