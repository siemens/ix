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
import AGGrid from './preview-examples/aggrid.vue';
import BasicNavigationWithoutHeader from './preview-examples/basic-navigation-without-header.vue';
import BasicNavigation from './preview-examples/basic-navigation.vue';
import Blind from './preview-examples/blind.vue';
import BreadcrumbNextItems from './preview-examples/breadcrumb-next-items.vue';
import BreadcrumbTruncate from './preview-examples/breadcrumb-truncate.vue';
import Breadcrumb from './preview-examples/breadcrumb.vue';
import ButtonGroup from './preview-examples/button-group.vue';
import ButtonSelected from './preview-examples/button-selected.vue';
import ButtonWithIcon from './preview-examples/button-with-icon.vue';
import Buttons from './preview-examples/buttons.vue';
import CheckboxIndeterminate from './preview-examples/checkbox-indeterminate.vue';
import Checkbox from './preview-examples/checkbox.vue';
import Chip from './preview-examples/chip.vue';
import DatepickerRange from './preview-examples/datepicker-range.vue';
import Datepicker from './preview-examples/datepicker.vue';
import Datetimepicker from './preview-examples/datetimepicker.vue';
import DrawerFullHeight from './preview-examples/drawer-full-height.vue';
import DropdownIcon from './preview-examples/dropdown-icon.vue';
import Dropdown from './preview-examples/dropdown.vue';
import EventListCompact from './preview-examples/event-list-compact.vue';
import EventListCustomHeight from './preview-examples/event-list-custom-item-height.vue';
import EventListSelected from './preview-examples/event-list-selected.vue';
import EventList from './preview-examples/event-list.vue';
import ExpandingSearch from './preview-examples/expanding-search.vue';
import FlipTile from './preview-examples/flip-tile.vue';
import GroupContextMenu from './preview-examples/group-context-menu.vue';
import GroupCustomEntry from './preview-examples/group-custom-entry.vue';
import GroupHeaderSuppressed from './preview-examples/group-header-suppressed.vue';
import Group from './preview-examples/group.vue';
import InputDisabled from './preview-examples/input-disabled.vue';
import InputReadonly from './preview-examples/input-readonly.vue';
import InputWithIcon from './preview-examples/input-with-icon.vue';
import Input from './preview-examples/input.vue';
import Kpi from './preview-examples/kpi.vue';
import MapNavigationOverlay from './preview-examples/map-navigation-overlay.vue';
import MapNavigation from './preview-examples/map-navigation.vue';
import MessageBar from './preview-examples/message-bar.vue';
import ModalExample from './preview-examples/modal.vue';
import Pill from './preview-examples/pill.vue';
import PopoverNews from './preview-examples/popover-news.vue';
import RadioButton from './preview-examples/radio-button.vue';
import SelectEditable from './preview-examples/select-editable.vue';
import SelectMultiple from './preview-examples/select-multiple.vue';
import Select from './preview-examples/select.vue';
import Settings from './preview-examples/settings.vue';
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
import Toast from './preview-examples/toast.vue';
import ToggleColor from './preview-examples/toggle-color.vue';
import ToggleCustomLabel from './preview-examples/toggle-custom-label.vue';
import ToggleDisabled from './preview-examples/toggle-disabled.vue';
import Toggle from './preview-examples/toggle.vue';
import TreeCustom from './preview-examples/tree-custom.vue';
import Tree from './preview-examples/tree.vue';
import Validation from './preview-examples/validation.vue';
import WorkflowVertical from './preview-examples/workflow-vertical.vue';
import Workflow from './preview-examples/workflow.vue';
import NavigationTest from './testing/NavigationTest.vue';

const routes: any = {
  '/': App,
  '/preview/checkbox': Checkbox,
  '/preview/checkbox-indeterminate': CheckboxIndeterminate,
  '/preview/buttons': Buttons,
  '/preview/button-with-icon': ButtonWithIcon,
  '/preview/button-selected': ButtonSelected,
  '/preview/button-group': ButtonGroup,
  '/preview/blind': Blind,
  '/preview/breadcrumb': Breadcrumb,
  '/preview/breadcrumb-next-items': BreadcrumbNextItems,
  '/preview/breadcrumb-truncate': BreadcrumbTruncate,
  '/preview/about-and-legal': AboutAndLegal,
  '/preview/aggrid': AGGrid,
  '/preview/chip': Chip,
  '/preview/datepicker': Datepicker,
  '/preview/datepicker-range': DatepickerRange,
  '/preview/datetimepicker': Datetimepicker,
  '/preview/drawer-full-height': DrawerFullHeight,
  '/preview/dropdown': Dropdown,
  '/preview/dropdown-icon': DropdownIcon,
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
  '/preview/radio-button': RadioButton,
  '/preview/select': Select,
  '/preview/select-editable': SelectEditable,
  '/preview/select-multiple': SelectMultiple,
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
  '/preview/validation': Validation,
  '/preview/workflow': Workflow,
  '/preview/workflow-vertical': WorkflowVertical,
  '/preview/basic-navigation': BasicNavigation,
  '/preview/basic-navigation-without-header': BasicNavigationWithoutHeader,
  '/preview/map-navigation': MapNavigation,
  '/preview/map-navigation-overlay': MapNavigationOverlay,
  '/testing/navigation': NavigationTest,
  '/testing/navigation/link1': NavigationTest,
  '/testing/navigation/link2': NavigationTest,
};

const currentPath = ref(window.location.pathname);

const currentView = computed(() => {
  return routes[currentPath.value || '/'] || App;
});
</script>

<template>
  <component :is="currentView"></component>
</template>
