/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { testIds } from 'framework-tests/tests/test-ids';
import { Routes } from '@angular/router';

type AngularComponent = any;

const exampleNames = [...testIds, 'validation'] as const;
type IxPreviewRoutes = {
  [K in (typeof exampleNames)[number] as `preview/${K}`]: AngularComponent;
} & {
  '': AngularComponent;
  'preview/modal-by-instance': AngularComponent;
  'preview/modal-by-template': AngularComponent;
  'preview/select-ng-model': AngularComponent;
  'preview/toggle-ng-model': AngularComponent;
};

export const routePaths: IxPreviewRoutes = {
  '': () => import('../playground/playground').then((m) => m.default),
  'preview/about-and-legal': () =>
    import('../preview-examples/about-and-legal').then((m) => m.default),
  'preview/action-card': () =>
    import('../preview-examples/action-card').then((m) => m.default),
  'preview/add-icons': () =>
    import('../preview-examples/add-icons').then((m) => m.default),
  'preview/aggrid': () =>
    import('../preview-examples/aggrid').then((m) => m.default),
  'preview/application': () =>
    import('../preview-examples/application').then((m) => m.default),
  'preview/application-advanced': () =>
    import('../preview-examples/application-advanced').then((m) => m.default),
  'preview/application-app-switch': () =>
    import('../preview-examples/application-app-switch').then((m) => m.default),
  'preview/application-breakpoints': () =>
    import('../preview-examples/application-breakpoints').then(
      (m) => m.default
    ),
  'preview/application-header': () =>
    import('../preview-examples/application-header').then((m) => m.default),
  'preview/avatar': () =>
    import('../preview-examples/avatar').then((m) => m.default),
  'preview/avatar-image': () =>
    import('../preview-examples/avatar-image').then((m) => m.default),
  'preview/avatar-initials': () =>
    import('../preview-examples/avatar-initials').then((m) => m.default),
  'preview/blind': () =>
    import('../preview-examples/blind').then((m) => m.default),
  'preview/blind-header-actions': () =>
    import('../preview-examples/blind-header-actions').then((m) => m.default),
  'preview/blind-variants': () =>
    import('../preview-examples/blind-variants').then((m) => m.default),
  'preview/breadcrumb': () =>
    import('../preview-examples/breadcrumb').then((m) => m.default),
  'preview/breadcrumb-next-items': () =>
    import('../preview-examples/breadcrumb-next-items').then((m) => m.default),
  'preview/breadcrumb-truncate': () =>
    import('../preview-examples/breadcrumb-truncate').then((m) => m.default),
  'preview/button-tertiary': () =>
    import('../preview-examples/button-tertiary').then((m) => m.default),
  'preview/button-subtle-primary': () =>
    import('../preview-examples/button-subtle-primary').then((m) => m.default),
  'preview/button-subtle-tertiary': () =>
    import('../preview-examples/button-subtle-tertiary').then((m) => m.default),
  'preview/button-subtle-secondary': () =>
    import('../preview-examples/button-subtle-secondary').then((m) => m.default),
  'preview/button-group': () =>
    import('../preview-examples/button-group').then((m) => m.default),
  'preview/button-loading': () =>
    import('../preview-examples/button-loading').then((m) => m.default),
  'preview/button-secondary': () =>
    import('../preview-examples/button-secondary').then((m) => m.default),
  'preview/button-text-icon': () =>
    import('../preview-examples/button-text-icon').then((m) => m.default),
  'preview/button-with-icon': () =>
    import('../preview-examples/button-with-icon').then((m) => m.default),
  'preview/button-with-link': () =>
    import('../preview-examples/button-with-link').then((m) => m.default),
  'preview/buttons': () =>
    import('../preview-examples/buttons').then((m) => m.default),
  'preview/card': () =>
    import('../preview-examples/card').then((m) => m.default),
  'preview/card-list': () =>
    import('../preview-examples/card-list').then((m) => m.default),
  'preview/category-filter': () =>
    import('../preview-examples/category-filter').then((m) => m.default),
  'preview/category-filter-suggestions': () =>
    import('../preview-examples/category-filter-suggestions').then(
      (m) => m.default
    ),
  'preview/checkbox': () =>
    import('../preview-examples/checkbox').then((m) => m.default),
  'preview/checkbox-indeterminate': () =>
    import('../preview-examples/checkbox-indeterminate').then((m) => m.default),
  'preview/chip': () =>
    import('../preview-examples/chip').then((m) => m.default),
  'preview/content': () =>
    import('../preview-examples/content').then((m) => m.default),
  'preview/content-header': () =>
    import('../preview-examples/content-header').then((m) => m.default),
  'preview/content-header-no-back': () =>
    import('../preview-examples/content-header-no-back').then((m) => m.default),
  'preview/content-header-with-slot': () =>
    import('../preview-examples/content-header-with-slot').then(
      (m) => m.default
    ),
  'preview/custom-field': () =>
    import('../preview-examples/custom-field').then((m) => m.default),
  'preview/custom-field-validation': () =>
    import('../preview-examples/custom-field-validation').then(
      (m) => m.default
    ),
  'preview/date-dropdown': () =>
    import('../preview-examples/date-dropdown').then((m) => m.default),
  'preview/date-dropdown-user-range': () =>
    import('../preview-examples/date-dropdown-user-range').then(
      (m) => m.default
    ),
  'preview/date-input': () =>
    import('../preview-examples/date-input').then((m) => m.default),
  'preview/date-input-disabled': () =>
    import('../preview-examples/date-input-disabled').then((m) => m.default),
  'preview/date-input-label': () =>
    import('../preview-examples/date-input-label').then((m) => m.default),
  'preview/date-input-readonly': () =>
    import('../preview-examples/date-input-readonly').then((m) => m.default),
  'preview/date-input-validation': () =>
    import('../preview-examples/date-input-validation').then((m) => m.default),
  'preview/date-input-with-slots': () =>
    import('../preview-examples/date-input-with-slots').then((m) => m.default),
  'preview/datepicker': () =>
    import('../preview-examples/datepicker').then((m) => m.default),
  'preview/datepicker-locale': () =>
    import('../preview-examples/datepicker-locale').then((m) => m.default),
  'preview/datepicker-range': () =>
    import('../preview-examples/datepicker-range').then((m) => m.default),
  'preview/datetimepicker': () =>
    import('../preview-examples/datetimepicker').then((m) => m.default),
  'preview/drawer': () =>
    import('../preview-examples/drawer').then((m) => m.default),
  'preview/drawer-full-height': () =>
    import('../preview-examples/drawer-full-height').then((m) => m.default),
  'preview/dropdown': () =>
    import('../preview-examples/dropdown').then((m) => m.default),
  'preview/dropdown-button': () =>
    import('../preview-examples/dropdown-button').then((m) => m.default),
  'preview/dropdown-button-icon': () =>
    import('../preview-examples/dropdown-button-icon').then((m) => m.default),
  'preview/dropdown-icon': () =>
    import('../preview-examples/dropdown-icon').then((m) => m.default),
  'preview/dropdown-quick-actions': () =>
    import('../preview-examples/dropdown-quick-actions').then((m) => m.default),
  'preview/dropdown-submenu': () =>
    import('../preview-examples/dropdown-submenu').then((m) => m.default),
  'preview/echarts': () =>
    import('../preview-examples/echarts').then((m) => m.default),
  'preview/echarts-bar-horizontal-stacked': () =>
    import('../preview-examples/echarts-bar-horizontal-stacked').then(
      (m) => m.default
    ),
  'preview/echarts-bar-simple': () =>
    import('../preview-examples/echarts-bar-simple').then((m) => m.default),
  'preview/echarts-circle': () =>
    import('../preview-examples/echarts-circle').then((m) => m.default),
  'preview/echarts-empty-state': () =>
    import('../preview-examples/echarts-empty-state').then((m) => m.default),
  'preview/echarts-gauge': () =>
    import('../preview-examples/echarts-gauge').then((m) => m.default),
  'preview/echarts-line-advanced': () =>
    import('../preview-examples/echarts-line-advanced').then((m) => m.default),
  'preview/echarts-line-multiple-y-axis': () =>
    import('../preview-examples/echarts-line-multiple-y-axis').then(
      (m) => m.default
    ),
  'preview/echarts-line-simple': () =>
    import('../preview-examples/echarts-line-simple').then((m) => m.default),
  'preview/echarts-pie': () =>
    import('../preview-examples/echarts-pie').then((m) => m.default),
  'preview/echarts-progress-arc': () =>
    import('../preview-examples/echarts-progress-arc').then((m) => m.default),
  'preview/echarts-progress-circle': () =>
    import('../preview-examples/echarts-progress-circle').then(
      (m) => m.default
    ),
  'preview/echarts-special-3d': () =>
    import('../preview-examples/echarts-special-3d').then((m) => m.default),
  'preview/echarts-special-toolbox': () =>
    import('../preview-examples/echarts-special-toolbox').then(
      (m) => m.default
    ),
  'preview/echarts-special-zoom': () =>
    import('../preview-examples/echarts-special-zoom').then((m) => m.default),
  'preview/empty-state': () =>
    import('../preview-examples/empty-state').then((m) => m.default),
  'preview/empty-state-compact': () =>
    import('../preview-examples/empty-state-compact').then((m) => m.default),
  'preview/empty-state-compact-break': () =>
    import('../preview-examples/empty-state-compact-break').then(
      (m) => m.default
    ),
  'preview/event-list': () =>
    import('../preview-examples/event-list').then((m) => m.default),
  'preview/event-list-compact': () =>
    import('../preview-examples/event-list-compact').then((m) => m.default),
  'preview/event-list-custom-item-height': () =>
    import('../preview-examples/event-list-custom-item-height').then(
      (m) => m.default
    ),
  'preview/event-list-filled': () =>
    import('../preview-examples/event-list-filled').then((m) => m.default),
  'preview/event-list-selected': () =>
    import('../preview-examples/event-list-selected').then((m) => m.default),
  'preview/expanding-search': () =>
    import('../preview-examples/expanding-search').then((m) => m.default),
  'preview/flip-tile': () =>
    import('../preview-examples/flip-tile').then((m) => m.default),
  'preview/form-checkbox': () =>
    import('../preview-examples/form-checkbox').then((m) => m.default),
  'preview/form-checkbox-disabled': () =>
    import('../preview-examples/form-checkbox-disabled').then((m) => m.default),
  'preview/form-checkbox-group': () =>
    import('../preview-examples/form-checkbox-group').then((m) => m.default),
  'preview/form-checkbox-group-indeterminate': () =>
    import('../preview-examples/form-checkbox-group-indeterminate').then(
      (m) => m.default
    ),
  'preview/form-checkbox-validation': () =>
    import('../preview-examples/form-checkbox-validation').then(
      (m) => m.default
    ),
  'preview/form-layout-auto': () =>
    import('../preview-examples/form-layout-auto').then((m) => m.default),
  'preview/form-layout-grid': () =>
    import('../preview-examples/form-layout-grid').then((m) => m.default),
  'preview/form-validation': () =>
    import('../preview-examples/form-validation').then((m) => m.default),
  'preview/grid': () =>
    import('../preview-examples/grid').then((m) => m.default),
  'preview/grid-padding': () =>
    import('../preview-examples/grid-padding').then((m) => m.default),
  'preview/grid-size': () =>
    import('../preview-examples/grid-size').then((m) => m.default),
  'preview/group': () =>
    import('../preview-examples/group').then((m) => m.default),
  'preview/html-table': () =>
    import('../preview-examples/html-table').then((m) => m.default),
  'preview/html-table-striped': () =>
    import('../preview-examples/html-table-striped').then((m) => m.default),
  'preview/group-context-menu': () =>
    import('../preview-examples/group-context-menu').then((m) => m.default),
  'preview/group-custom-entry': () =>
    import('../preview-examples/group-custom-entry').then((m) => m.default),
  'preview/group-header-suppressed': () =>
    import('../preview-examples/group-header-suppressed').then(
      (m) => m.default
    ),
  'preview/icon-toggle-button-tertiary': () =>
    import('../preview-examples/icon-toggle-button-tertiary').then(
      (m) => m.default
    ),
  'preview/icon-toggle-button-subtle-tertiary': () =>
    import('../preview-examples/icon-toggle-button-subtle-tertiary').then(
      (m) => m.default
    ),
  'preview/icon-toggle-button-secondary': () =>
    import('../preview-examples/icon-toggle-button-secondary').then(
      (m) => m.default
    ),
  'preview/icon-toggle-button-subtle-secondary': () =>
    import('../preview-examples/icon-toggle-button-subtle-secondary').then(
      (m) => m.default
    ),
  'preview/icon-toggle-button-subtle-primary': () =>
    import('../preview-examples/icon-toggle-button-subtle-primary').then(
      (m) => m.default
    ),
  'preview/input': () =>
    import('../preview-examples/input').then((m) => m.default),
  'preview/input-disabled': () =>
    import('../preview-examples/input-disabled').then((m) => m.default),
  'preview/input-label': () =>
    import('../preview-examples/input-label').then((m) => m.default),
  'preview/input-legacy': () =>
    import('../preview-examples/input-legacy').then((m) => m.default),
  'preview/input-legacy-disabled': () =>
    import('../preview-examples/input-legacy-disabled').then((m) => m.default),
  'preview/input-legacy-readonly': () =>
    import('../preview-examples/input-legacy-readonly').then((m) => m.default),
  'preview/input-pattern': () =>
    import('../preview-examples/input-pattern').then((m) => m.default),
  'preview/input-readonly': () =>
    import('../preview-examples/input-readonly').then((m) => m.default),
  'preview/input-types': () =>
    import('../preview-examples/input-types').then((m) => m.default),
  'preview/input-validation': () =>
    import('../preview-examples/input-validation').then((m) => m.default),
  'preview/input-with-slots': () =>
    import('../preview-examples/input-with-slots').then((m) => m.default),
  'preview/key-value': () =>
    import('../preview-examples/key-value').then((m) => m.default),
  'preview/key-value-list': () =>
    import('../preview-examples/key-value-list').then((m) => m.default),
  'preview/key-value-list-striped': () =>
    import('../preview-examples/key-value-list-striped').then((m) => m.default),
  'preview/key-value-list-with-custom-value': () =>
    import('../preview-examples/key-value-list-with-custom-value').then(
      (m) => m.default
    ),
  'preview/key-value-list-with-icon': () =>
    import('../preview-examples/key-value-list-with-icon').then(
      (m) => m.default
    ),
  'preview/key-value-with-custom-value': () =>
    import('../preview-examples/key-value-with-custom-value').then(
      (m) => m.default
    ),
  'preview/key-value-with-icon': () =>
    import('../preview-examples/key-value-with-icon').then((m) => m.default),
  'preview/key-value-with-label-left': () =>
    import('../preview-examples/key-value-with-label-left').then(
      (m) => m.default
    ),
  'preview/kpi': () => import('../preview-examples/kpi').then((m) => m.default),
  'preview/layout-auto': () =>
    import('../preview-examples/layout-auto').then((m) => m.default),
  'preview/layout-auto-custom': () =>
    import('../preview-examples/layout-auto-custom').then((m) => m.default),
  'preview/link-button': () =>
    import('../preview-examples/link-button').then((m) => m.default),
  'preview/link-button-disabled': () =>
    import('../preview-examples/link-button-disabled').then((m) => m.default),
  'preview/loading': () =>
    import('../preview-examples/loading').then((m) => m.default),
  'preview/menu-category': () =>
    import('../preview-examples/menu-category').then((m) => m.default),
  'preview/menu-with-bottom-tabs': () =>
    import('../preview-examples/menu-with-bottom-tabs').then((m) => m.default),
  'preview/message': () =>
    import('../preview-examples/message').then((m) => m.default),
  'preview/message-bar': () =>
    import('../preview-examples/message-bar').then((m) => m.default),
  'preview/message-bar-removal': () =>
    import('../preview-examples/message-bar-removal').then((m) => m.default),
  'preview/modal-by-instance': () =>
    import('../preview-examples/modal-by-instance').then((m) => m.default),
  'preview/modal-close': () =>
    import('../preview-examples/modal-close').then((m) => m.default),
  'preview/modal-by-template': () =>
    import('../preview-examples/modal-by-template').then((m) => m.default),
  'preview/modal-form-ix-button-submit': () =>
    import('../preview-examples/modal-form-ix-button-submit').then(
      (m) => m.default
    ),
  'preview/modal-sizes': () =>
    import('../preview-examples/modal-sizes').then((m) => m.default),
  'preview/number-input': () =>
    import('../preview-examples/number-input').then((m) => m.default),
  'preview/number-input-disabled': () =>
    import('../preview-examples/number-input-disabled').then((m) => m.default),
  'preview/number-input-label': () =>
    import('../preview-examples/number-input-label').then((m) => m.default),
  'preview/number-input-readonly': () =>
    import('../preview-examples/number-input-readonly').then((m) => m.default),
  'preview/number-input-stepper-button': () =>
    import('../preview-examples/number-input-stepper-button').then(
      (m) => m.default
    ),
  'preview/number-input-validation': () =>
    import('../preview-examples/number-input-validation').then(
      (m) => m.default
    ),
  'preview/number-input-with-slots': () =>
    import('../preview-examples/number-input-with-slots').then(
      (m) => m.default
    ),
  'preview/pagination': () =>
    import('../preview-examples/pagination').then((m) => m.default),
  'preview/pagination-advanced': () =>
    import('../preview-examples/pagination-advanced').then((m) => m.default),
  'preview/pane': () =>
    import('../preview-examples/pane').then((m) => m.default),
  'preview/pane-layout': () =>
    import('../preview-examples/pane-layout').then((m) => m.default),
  'preview/pill': () =>
    import('../preview-examples/pill').then((m) => m.default),
  'preview/pill-variants': () =>
    import('../preview-examples/pill-variants').then((m) => m.default),
  'preview/popover-news': () =>
    import('../preview-examples/popover-news').then((m) => m.default),
  'preview/push-card': () =>
    import('../preview-examples/push-card').then((m) => m.default),
  'preview/radio': () =>
    import('../preview-examples/radio').then((m) => m.default),
  'preview/radio-button': () =>
    import('../preview-examples/radio-button').then((m) => m.default),
  'preview/radio-disabled': () =>
    import('../preview-examples/radio-disabled').then((m) => m.default),
  'preview/radio-group': () =>
    import('../preview-examples/radio-group').then((m) => m.default),
  'preview/radio-validation': () =>
    import('../preview-examples/radio-validation').then((m) => m.default),
  'preview/select': () =>
    import('../preview-examples/select').then((m) => m.default),
  'preview/select-editable': () =>
    import('../preview-examples/select-editable').then((m) => m.default),
  'preview/select-multiple': () =>
    import('../preview-examples/select-multiple').then((m) => m.default),
  'preview/select-ng-model': () =>
    import('../preview-examples/select-ng-model').then((m) => m.default),
  'preview/select-validation': () =>
    import('../preview-examples/select-validation').then((m) => m.default),
  'preview/settings': () =>
    import('../preview-examples/settings').then((m) => m.default),
  'preview/slider': () =>
    import('../preview-examples/slider').then((m) => m.default),
  'preview/slider-error': () =>
    import('../preview-examples/slider-error').then((m) => m.default),
  'preview/slider-marker': () =>
    import('../preview-examples/slider-marker').then((m) => m.default),
  'preview/slider-trace': () =>
    import('../preview-examples/slider-trace').then((m) => m.default),
  'preview/spinner': () =>
    import('../preview-examples/spinner').then((m) => m.default),
  'preview/spinner-large': () =>
    import('../preview-examples/spinner-large').then((m) => m.default),
  'preview/split-button': () =>
    import('../preview-examples/split-button').then((m) => m.default),
  'preview/split-button-icons': () =>
    import('../preview-examples/split-button-icons').then((m) => m.default),
  'preview/tabs': () =>
    import('../preview-examples/tabs').then((m) => m.default),
  'preview/tabs-rounded': () =>
    import('../preview-examples/tabs-rounded').then((m) => m.default),
  'preview/textarea': () =>
    import('../preview-examples/textarea').then((m) => m.default),
  'preview/textarea-disabled': () =>
    import('../preview-examples/textarea-disabled').then((m) => m.default),
  'preview/textarea-legacy': () =>
    import('../preview-examples/textarea-legacy').then((m) => m.default),
  'preview/textarea-legacy-disabled': () =>
    import('../preview-examples/textarea-legacy-disabled').then(
      (m) => m.default
    ),
  'preview/textarea-legacy-readonly': () =>
    import('../preview-examples/textarea-legacy-readonly').then(
      (m) => m.default
    ),
  'preview/textarea-rows-cols': () =>
    import('../preview-examples/textarea-rows-cols').then((m) => m.default),
  'preview/textarea-validation': () =>
    import('../preview-examples/textarea-validation').then((m) => m.default),
  'preview/theme-switcher': () =>
    import('../preview-examples/theme-switcher').then((m) => m.default),
  'preview/tile': () =>
    import('../preview-examples/tile').then((m) => m.default),
  'preview/timepicker': () =>
    import('../preview-examples/timepicker').then((m) => m.default),
  'preview/toast': () =>
    import('../preview-examples/toast').then((m) => m.default),
  'preview/toast-custom': () =>
    import('../preview-examples/toast-custom').then((m) => m.default),
  'preview/toast-position': () =>
    import('../preview-examples/toast-position').then((m) => m.default),
  'preview/toggle': () =>
    import('../preview-examples/toggle').then((m) => m.default),
  'preview/toggle-button-primary': () =>
    import('../preview-examples/toggle-button-primary').then((m) => m.default),
  'preview/toggle-button-tertiary': () =>
    import('../preview-examples/toggle-button-tertiary').then((m) => m.default),
  'preview/toggle-button-subtle-tertiary': () =>
    import('../preview-examples/toggle-button-subtle-tertiary').then(
      (m) => m.default
    ),
  'preview/toggle-button-secondary': () =>
    import('../preview-examples/toggle-button-secondary').then(
      (m) => m.default
    ),
  'preview/toggle-button-subtle-secondary': () =>
    import('../preview-examples/toggle-button-subtle-secondary').then(
      (m) => m.default
    ),
  'preview/toggle-button-subtle-primary': () =>
    import('../preview-examples/toggle-button-subtle-primary').then(
      (m) => m.default
    ),
  'preview/toggle-checked': () =>
    import('../preview-examples/toggle-checked').then((m) => m.default),
  'preview/toggle-custom-label': () =>
    import('../preview-examples/toggle-custom-label').then((m) => m.default),
  'preview/toggle-disabled': () =>
    import('../preview-examples/toggle-disabled').then((m) => m.default),
  'preview/toggle-indeterminate': () =>
    import('../preview-examples/toggle-indeterminate').then((m) => m.default),
  'preview/toggle-ng-model': () =>
    import('../preview-examples/toggle-ng-model').then((m) => m.default),
  'preview/tooltip': () =>
    import('../preview-examples/tooltip').then((m) => m.default),
  'preview/tree': () =>
    import('../preview-examples/tree').then((m) => m.default),
  'preview/tree-custom': () =>
    import('../preview-examples/tree-custom').then((m) => m.default),
  'preview/upload': () =>
    import('../preview-examples/upload').then((m) => m.default),
  'preview/validation': () =>
    import('../preview-examples/validation').then((m) => m.default),
  'preview/validation-select': () =>
    import('../preview-examples/validation-select').then((m) => m.default),
  'preview/vertical-tabs': () =>
    import('../preview-examples/vertical-tabs').then((m) => m.default),
  'preview/vertical-tabs-with-avatar': () =>
    import('../preview-examples/vertical-tabs-with-avatar').then(
      (m) => m.default
    ),
  'preview/workflow': () =>
    import('../preview-examples/workflow').then((m) => m.default),
  'preview/workflow-vertical': () =>
    import('../preview-examples/workflow-vertical').then((m) => m.default),
  'preview/progress-indicator': () =>
    import('../preview-examples/progress-indicator').then((m) => m.default),
  'preview/progress-indicator-linear-sizes': () =>
    import('../preview-examples/progress-indicator-linear-sizes').then(
      (m) => m.default
    ),
  'preview/progress-indicator-linear-status': () =>
    import('../preview-examples/progress-indicator-linear-status').then(
      (m) => m.default
    ),
  'preview/progress-indicator-circular-sizes': () =>
    import('../preview-examples/progress-indicator-circular-sizes').then(
      (m) => m.default
    ),
  'preview/progress-indicator-circular-status': () =>
    import('../preview-examples/progress-indicator-circular-status').then(
      (m) => m.default
    ),
  'preview/progress-indicator-circular': () =>
    import('../preview-examples/progress-indicator-circular').then(
      (m) => m.default
    ),
  'preview/button-danger-primary': () =>
    import('../preview-examples/button-danger-primary').then((m) => m.default),
  'preview/button-danger-tertiary': () =>
    import('../preview-examples/button-danger-tertiary').then((m) => m.default),
  'preview/button-danger-secondary': () =>
    import('../preview-examples/button-danger-secondary').then((m) => m.default),
  'preview/date-input-min-max-date': () =>
    import('../preview-examples/date-input-min-max-date').then(
      (m) => m.default
    ),
  'preview/event-list-custom-item-height-in-number': () =>
    import('../preview-examples/event-list-custom-item-height').then(
      (m) => m.default
    ),
  'preview/modal': () =>
    import('../preview-examples/modal-by-instance').then((m) => m.default),
  'preview/textarea-readonly': () =>
    import('../preview-examples/textarea-readonly').then((m) => m.default),
  'preview/time-input': () =>
    import('../preview-examples/time-input').then((m) => m.default),
  'preview/time-input-disabled': () =>
    import('../preview-examples/time-input-disabled').then((m) => m.default),
  'preview/time-input-label': () =>
    import('../preview-examples/time-input-label').then((m) => m.default),
  'preview/time-input-readonly': () =>
    import('../preview-examples/time-input-readonly').then((m) => m.default),
  'preview/time-input-validation': () =>
    import('../preview-examples/time-input-validation').then((m) => m.default),
  'preview/time-input-with-slots': () =>
    import('../preview-examples/time-input-with-slots').then((m) => m.default),
  'preview/timepicker-format-adjusted': () =>
    import('../preview-examples/timepicker-format-adjusted').then(
      (m) => m.default
    ),
  'preview/timepicker-intervals': () =>
    import('../preview-examples/timepicker-intervals').then((m) => m.default),
  'preview/tooltip-with-icon': () =>
    import('../preview-examples/tooltip-with-icon').then((m) => m.default),
};

export const routes: Routes = Object.entries(routePaths).map(
  ([path, loadComponent]) => ({
    path,
    loadComponent,
  })
);
