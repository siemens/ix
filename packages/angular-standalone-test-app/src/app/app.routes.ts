/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'playground',
    pathMatch: 'full',
  },
  {
    path: 'playground',
    loadComponent: () =>
      import('../playground/playground').then((m) => m.default),
  },
  {
    path: 'preview',
    children: [
      {
        path: 'about-and-legal',
        loadComponent: () =>
          import('../preview-examples/about-and-legal').then((m) => m.default),
      },
      {
        path: 'action-card',
        loadComponent: () =>
          import('../preview-examples/action-card').then((m) => m.default),
      },
      {
        path: 'add-icons',
        loadComponent: () =>
          import('../preview-examples/add-icons').then((m) => m.default),
      },
      {
        path: 'aggrid',
        loadComponent: () =>
          import('../preview-examples/aggrid').then((m) => m.default),
      },
      {
        path: 'application',
        loadComponent: () =>
          import('../preview-examples/application').then((m) => m.default),
      },
      {
        path: 'application-app-switch',
        loadComponent: () =>
          import('../preview-examples/application-app-switch').then(
            (m) => m.default
          ),
      },
      {
        path: 'application-breakpoints',
        loadComponent: () =>
          import('../preview-examples/application-breakpoints').then(
            (m) => m.default
          ),
      },
      {
        path: 'application-header',
        loadComponent: () =>
          import('../preview-examples/application-header').then(
            (m) => m.default
          ),
      },
      {
        path: 'avatar',
        loadComponent: () =>
          import('../preview-examples/avatar').then((m) => m.default),
      },
      {
        path: 'avatar-image',
        loadComponent: () =>
          import('../preview-examples/avatar-image').then((m) => m.default),
      },
      {
        path: 'avatar-initials',
        loadComponent: () =>
          import('../preview-examples/avatar-initials').then((m) => m.default),
      },
      {
        path: 'basic-navigation',
        loadComponent: () =>
          import('../preview-examples/basic-navigation').then((m) => m.default),
      },
      {
        path: 'basic-navigation-migration',
        loadComponent: () =>
          import('../preview-examples/basic-navigation-migration').then(
            (m) => m.default
          ),
      },
      {
        path: 'basic-navigation-without-header',
        loadComponent: () =>
          import('../preview-examples/basic-navigation-without-header').then(
            (m) => m.default
          ),
      },
      {
        path: 'blind',
        loadComponent: () =>
          import('../preview-examples/blind').then((m) => m.default),
      },
      {
        path: 'blind-header-actions',
        loadComponent: () =>
          import('../preview-examples/blind-header-actions').then(
            (m) => m.default
          ),
      },
      {
        path: 'blind-variants',
        loadComponent: () =>
          import('../preview-examples/blind-variants').then((m) => m.default),
      },
      {
        path: 'breadcrumb',
        loadComponent: () =>
          import('../preview-examples/breadcrumb').then((m) => m.default),
      },
      {
        path: 'breadcrumb-next-items',
        loadComponent: () =>
          import('../preview-examples/breadcrumb-next-items').then(
            (m) => m.default
          ),
      },
      {
        path: 'breadcrumb-truncate',
        loadComponent: () =>
          import('../preview-examples/breadcrumb-truncate').then(
            (m) => m.default
          ),
      },
      {
        path: 'button-ghost',
        loadComponent: () =>
          import('../preview-examples/button-ghost').then((m) => m.default),
      },
      {
        path: 'button-grey',
        loadComponent: () =>
          import('../preview-examples/button-grey').then((m) => m.default),
      },
      {
        path: 'button-grey-ghost',
        loadComponent: () =>
          import('../preview-examples/button-grey-ghost').then(
            (m) => m.default
          ),
      },
      {
        path: 'button-grey-secondary',
        loadComponent: () =>
          import('../preview-examples/button-grey-secondary').then(
            (m) => m.default
          ),
      },
      {
        path: 'button-group',
        loadComponent: () =>
          import('../preview-examples/button-group').then((m) => m.default),
      },
      {
        path: 'button-loading',
        loadComponent: () =>
          import('../preview-examples/button-loading').then((m) => m.default),
      },
      {
        path: 'button-secondary',
        loadComponent: () =>
          import('../preview-examples/button-secondary').then((m) => m.default),
      },
      {
        path: 'button-text-icon',
        loadComponent: () =>
          import('../preview-examples/button-text-icon').then((m) => m.default),
      },
      {
        path: 'button-with-icon',
        loadComponent: () =>
          import('../preview-examples/button-with-icon').then((m) => m.default),
      },
      {
        path: 'buttons',
        loadComponent: () =>
          import('../preview-examples/buttons').then((m) => m.default),
      },
      {
        path: 'card',
        loadComponent: () =>
          import('../preview-examples/card').then((m) => m.default),
      },
      {
        path: 'card-list',
        loadComponent: () =>
          import('../preview-examples/card-list').then((m) => m.default),
      },
      {
        path: 'category-filter',
        loadComponent: () =>
          import('../preview-examples/category-filter').then((m) => m.default),
      },
      {
        path: 'category-filter-suggestions',
        loadComponent: () =>
          import('../preview-examples/category-filter-suggestions').then(
            (m) => m.default
          ),
      },
      {
        path: 'checkbox',
        loadComponent: () =>
          import('../preview-examples/checkbox').then((m) => m.default),
      },
      {
        path: 'checkbox-indeterminate',
        loadComponent: () =>
          import('../preview-examples/checkbox-indeterminate').then(
            (m) => m.default
          ),
      },
      {
        path: 'chip',
        loadComponent: () =>
          import('../preview-examples/chip').then((m) => m.default),
      },
      {
        path: 'content',
        loadComponent: () =>
          import('../preview-examples/content').then((m) => m.default),
      },
      {
        path: 'content-header',
        loadComponent: () =>
          import('../preview-examples/content-header').then((m) => m.default),
      },
      {
        path: 'content-header-no-back',
        loadComponent: () =>
          import('../preview-examples/content-header-no-back').then(
            (m) => m.default
          ),
      },
      {
        path: 'custom-field',
        loadComponent: () =>
          import('../preview-examples/custom-field').then((m) => m.default),
      },
      {
        path: 'custom-field-validation',
        loadComponent: () =>
          import('../preview-examples/custom-field-validation').then(
            (m) => m.default
          ),
      },
      {
        path: 'date-dropdown',
        loadComponent: () =>
          import('../preview-examples/date-dropdown').then((m) => m.default),
      },
      {
        path: 'date-dropdown-user-range',
        loadComponent: () =>
          import('../preview-examples/date-dropdown-user-range').then(
            (m) => m.default
          ),
      },
      {
        path: 'date-input',
        loadComponent: () =>
          import('../preview-examples/date-input').then((m) => m.default),
      },
      {
        path: 'date-input-disabled',
        loadComponent: () =>
          import('../preview-examples/date-input-disabled').then(
            (m) => m.default
          ),
      },
      {
        path: 'date-input-label',
        loadComponent: () =>
          import('../preview-examples/date-input-label').then((m) => m.default),
      },
      {
        path: 'date-input-readonly',
        loadComponent: () =>
          import('../preview-examples/date-input-readonly').then(
            (m) => m.default
          ),
      },
      {
        path: 'date-input-validation',
        loadComponent: () =>
          import('../preview-examples/date-input-validation').then(
            (m) => m.default
          ),
      },
      {
        path: 'date-input-with-slots',
        loadComponent: () =>
          import('../preview-examples/date-input-with-slots').then(
            (m) => m.default
          ),
      },
      {
        path: 'datepicker',
        loadComponent: () =>
          import('../preview-examples/datepicker').then((m) => m.default),
      },
      {
        path: 'datepicker-locale',
        loadComponent: () =>
          import('../preview-examples/datepicker-locale').then(
            (m) => m.default
          ),
      },
      {
        path: 'datepicker-range',
        loadComponent: () =>
          import('../preview-examples/datepicker-range').then((m) => m.default),
      },
      {
        path: 'datetimepicker',
        loadComponent: () =>
          import('../preview-examples/datetimepicker').then((m) => m.default),
      },
      {
        path: 'divider',
        loadComponent: () =>
          import('../preview-examples/divider').then((m) => m.default),
      },
      {
        path: 'drawer',
        loadComponent: () =>
          import('../preview-examples/drawer').then((m) => m.default),
      },
      {
        path: 'drawer-full-height',
        loadComponent: () =>
          import('../preview-examples/drawer-full-height').then(
            (m) => m.default
          ),
      },
      {
        path: 'dropdown',
        loadComponent: () =>
          import('../preview-examples/dropdown').then((m) => m.default),
      },
      {
        path: 'dropdown-button',
        loadComponent: () =>
          import('../preview-examples/dropdown-button').then((m) => m.default),
      },
      {
        path: 'dropdown-button-icon',
        loadComponent: () =>
          import('../preview-examples/dropdown-button-icon').then(
            (m) => m.default
          ),
      },
      {
        path: 'dropdown-icon',
        loadComponent: () =>
          import('../preview-examples/dropdown-icon').then((m) => m.default),
      },
      {
        path: 'dropdown-quick-actions',
        loadComponent: () =>
          import('../preview-examples/dropdown-quick-actions').then(
            (m) => m.default
          ),
      },
      {
        path: 'dropdown-submenu',
        loadComponent: () =>
          import('../preview-examples/dropdown-submenu').then((m) => m.default),
      },
      {
        path: 'echarts',
        loadComponent: () =>
          import('../preview-examples/echarts').then((m) => m.default),
      },
      {
        path: 'echarts-bar-horizontal-stacked',
        loadComponent: () =>
          import('../preview-examples/echarts-bar-horizontal-stacked').then(
            (m) => m.default
          ),
      },
      {
        path: 'echarts-bar-simple',
        loadComponent: () =>
          import('../preview-examples/echarts-bar-simple').then(
            (m) => m.default
          ),
      },
      {
        path: 'echarts-circle',
        loadComponent: () =>
          import('../preview-examples/echarts-circle').then((m) => m.default),
      },
      {
        path: 'echarts-empty-state',
        loadComponent: () =>
          import('../preview-examples/echarts-empty-state').then(
            (m) => m.default
          ),
      },
      {
        path: 'echarts-gauge',
        loadComponent: () =>
          import('../preview-examples/echarts-gauge').then((m) => m.default),
      },
      {
        path: 'echarts-line-advanced',
        loadComponent: () =>
          import('../preview-examples/echarts-line-advanced').then(
            (m) => m.default
          ),
      },
      {
        path: 'echarts-line-multiple-y-axis',
        loadComponent: () =>
          import('../preview-examples/echarts-line-multiple-y-axis').then(
            (m) => m.default
          ),
      },
      {
        path: 'echarts-line-simple',
        loadComponent: () =>
          import('../preview-examples/echarts-line-simple').then(
            (m) => m.default
          ),
      },
      {
        path: 'echarts-pie',
        loadComponent: () =>
          import('../preview-examples/echarts-pie').then((m) => m.default),
      },
      {
        path: 'echarts-progress-arc',
        loadComponent: () =>
          import('../preview-examples/echarts-progress-arc').then(
            (m) => m.default
          ),
      },
      {
        path: 'echarts-progress-circle',
        loadComponent: () =>
          import('../preview-examples/echarts-progress-circle').then(
            (m) => m.default
          ),
      },
      {
        path: 'echarts-special-3d',
        loadComponent: () =>
          import('../preview-examples/echarts-special-3d').then(
            (m) => m.default
          ),
      },
      {
        path: 'echarts-special-toolbox',
        loadComponent: () =>
          import('../preview-examples/echarts-special-toolbox').then(
            (m) => m.default
          ),
      },
      {
        path: 'echarts-special-zoom',
        loadComponent: () =>
          import('../preview-examples/echarts-special-zoom').then(
            (m) => m.default
          ),
      },
      {
        path: 'echarts-toolbox',
        loadComponent: () =>
          import('../preview-examples/echarts-special-toolbox').then(
            (m) => m.default
          ),
      },
      {
        path: 'echarts-zoom',
        loadComponent: () =>
          import('../preview-examples/echarts-special-zoom').then(
            (m) => m.default
          ),
      },
      {
        path: 'empty-state',
        loadComponent: () =>
          import('../preview-examples/empty-state').then((m) => m.default),
      },
      {
        path: 'empty-state-compact',
        loadComponent: () =>
          import('../preview-examples/empty-state-compact').then(
            (m) => m.default
          ),
      },
      {
        path: 'empty-state-compact-break',
        loadComponent: () =>
          import('../preview-examples/empty-state-compact-break').then(
            (m) => m.default
          ),
      },
      {
        path: 'event-list',
        loadComponent: () =>
          import('../preview-examples/event-list').then((m) => m.default),
      },
      {
        path: 'event-list-compact',
        loadComponent: () =>
          import('../preview-examples/event-list-compact').then(
            (m) => m.default
          ),
      },
      {
        path: 'event-list-custom-item-height',
        loadComponent: () =>
          import('../preview-examples/event-list-custom-item-height').then(
            (m) => m.default
          ),
      },
      {
        path: 'event-list-selected',
        loadComponent: () =>
          import('../preview-examples/event-list-selected').then(
            (m) => m.default
          ),
      },
      {
        path: 'expanding-search',
        loadComponent: () =>
          import('../preview-examples/expanding-search').then((m) => m.default),
      },
      {
        path: 'flip-tile',
        loadComponent: () =>
          import('../preview-examples/flip-tile').then((m) => m.default),
      },
      {
        path: 'form-checkbox',
        loadComponent: () =>
          import('../preview-examples/form-checkbox').then((m) => m.default),
      },
      {
        path: 'form-checkbox-disabled',
        loadComponent: () =>
          import('../preview-examples/form-checkbox-disabled').then(
            (m) => m.default
          ),
      },
      {
        path: 'form-checkbox-group',
        loadComponent: () =>
          import('../preview-examples/form-checkbox-group').then(
            (m) => m.default
          ),
      },
      {
        path: 'form-checkbox-group-indeterminate',
        loadComponent: () =>
          import('../preview-examples/form-checkbox-group-indeterminate').then(
            (m) => m.default
          ),
      },
      {
        path: 'form-checkbox-validation',
        loadComponent: () =>
          import('../preview-examples/form-checkbox-validation').then(
            (m) => m.default
          ),
      },
      {
        path: 'form-layout-auto',
        loadComponent: () =>
          import('../preview-examples/form-layout-auto').then((m) => m.default),
      },
      {
        path: 'form-layout-grid',
        loadComponent: () =>
          import('../preview-examples/form-layout-grid').then((m) => m.default),
      },
      {
        path: 'form-validation',
        loadComponent: () =>
          import('../preview-examples/form-validation').then((m) => m.default),
      },
      {
        path: 'grid',
        loadComponent: () =>
          import('../preview-examples/grid').then((m) => m.default),
      },
      {
        path: 'grid-padding',
        loadComponent: () =>
          import('../preview-examples/grid-padding').then((m) => m.default),
      },
      {
        path: 'grid-size',
        loadComponent: () =>
          import('../preview-examples/grid-size').then((m) => m.default),
      },
      {
        path: 'group',
        loadComponent: () =>
          import('../preview-examples/group').then((m) => m.default),
      },
      {
        path: 'group-context-menu',
        loadComponent: () =>
          import('../preview-examples/group-context-menu').then(
            (m) => m.default
          ),
      },
      {
        path: 'group-custom-entry',
        loadComponent: () =>
          import('../preview-examples/group-custom-entry').then(
            (m) => m.default
          ),
      },
      {
        path: 'group-header-suppressed',
        loadComponent: () =>
          import('../preview-examples/group-header-suppressed').then(
            (m) => m.default
          ),
      },
      {
        path: 'icon-toggle-button-primary-ghost',
        loadComponent: () =>
          import('../preview-examples/icon-toggle-button-primary-ghost').then(
            (m) => m.default
          ),
      },
      {
        path: 'icon-toggle-button-primary-outline',
        loadComponent: () =>
          import('../preview-examples/icon-toggle-button-primary-outline').then(
            (m) => m.default
          ),
      },
      {
        path: 'icon-toggle-button-secondary',
        loadComponent: () =>
          import('../preview-examples/icon-toggle-button-secondary').then(
            (m) => m.default
          ),
      },
      {
        path: 'icon-toggle-button-secondary-ghost',
        loadComponent: () =>
          import('../preview-examples/icon-toggle-button-secondary-ghost').then(
            (m) => m.default
          ),
      },
      {
        path: 'icon-toggle-button-secondary-outline',
        loadComponent: () =>
          import(
            '../preview-examples/icon-toggle-button-secondary-outline'
          ).then((m) => m.default),
      },
      {
        path: 'input',
        loadComponent: () =>
          import('../preview-examples/input').then((m) => m.default),
      },
      {
        path: 'input-disabled',
        loadComponent: () =>
          import('../preview-examples/input-disabled').then((m) => m.default),
      },
      {
        path: 'input-form-validation',
        loadComponent: () =>
          import('../preview-examples/input-form-validation').then(
            (m) => m.default
          ),
      },
      {
        path: 'input-label',
        loadComponent: () =>
          import('../preview-examples/input-label').then((m) => m.default),
      },
      {
        path: 'input-legacy',
        loadComponent: () =>
          import('../preview-examples/input-legacy').then((m) => m.default),
      },
      {
        path: 'input-legacy-disabled',
        loadComponent: () =>
          import('../preview-examples/input-legacy-disabled').then(
            (m) => m.default
          ),
      },
      {
        path: 'input-legacy-labels',
        loadComponent: () =>
          import('../preview-examples/input-legacy-labels').then(
            (m) => m.default
          ),
      },
      {
        path: 'input-legacy-readonly',
        loadComponent: () =>
          import('../preview-examples/input-legacy-readonly').then(
            (m) => m.default
          ),
      },
      {
        path: 'input-legacy-search',
        loadComponent: () =>
          import('../preview-examples/input-legacy-search').then(
            (m) => m.default
          ),
      },
      {
        path: 'input-legacy-types',
        loadComponent: () =>
          import('../preview-examples/input-legacy-types').then(
            (m) => m.default
          ),
      },
      {
        path: 'input-legacy-with-icon',
        loadComponent: () =>
          import('../preview-examples/input-legacy-with-icon').then(
            (m) => m.default
          ),
      },
      {
        path: 'input-pattern',
        loadComponent: () =>
          import('../preview-examples/input-pattern').then((m) => m.default),
      },
      {
        path: 'input-readonly',
        loadComponent: () =>
          import('../preview-examples/input-readonly').then((m) => m.default),
      },
      {
        path: 'input-types',
        loadComponent: () =>
          import('../preview-examples/input-types').then((m) => m.default),
      },
      {
        path: 'input-validation',
        loadComponent: () =>
          import('../preview-examples/input-validation').then((m) => m.default),
      },
      {
        path: 'input-with-slots',
        loadComponent: () =>
          import('../preview-examples/input-with-slots').then((m) => m.default),
      },
      {
        path: 'key-value',
        loadComponent: () =>
          import('../preview-examples/key-value').then((m) => m.default),
      },
      {
        path: 'key-value-list',
        loadComponent: () =>
          import('../preview-examples/key-value-list').then((m) => m.default),
      },
      {
        path: 'key-value-list-striped',
        loadComponent: () =>
          import('../preview-examples/key-value-list-striped').then(
            (m) => m.default
          ),
      },
      {
        path: 'key-value-list-with-custom-value',
        loadComponent: () =>
          import('../preview-examples/key-value-list-with-custom-value').then(
            (m) => m.default
          ),
      },
      {
        path: 'key-value-list-with-icon',
        loadComponent: () =>
          import('../preview-examples/key-value-list-with-icon').then(
            (m) => m.default
          ),
      },
      {
        path: 'key-value-with-custom-value',
        loadComponent: () =>
          import('../preview-examples/key-value-with-custom-value').then(
            (m) => m.default
          ),
      },
      {
        path: 'key-value-with-icon',
        loadComponent: () =>
          import('../preview-examples/key-value-with-icon').then(
            (m) => m.default
          ),
      },
      {
        path: 'key-value-with-label-left',
        loadComponent: () =>
          import('../preview-examples/key-value-with-label-left').then(
            (m) => m.default
          ),
      },
      {
        path: 'kpi',
        loadComponent: () =>
          import('../preview-examples/kpi').then((m) => m.default),
      },
      {
        path: 'layout-auto',
        loadComponent: () =>
          import('../preview-examples/layout-auto').then((m) => m.default),
      },
      {
        path: 'layout-auto-custom',
        loadComponent: () =>
          import('../preview-examples/layout-auto-custom').then(
            (m) => m.default
          ),
      },
      {
        path: 'link-button',
        loadComponent: () =>
          import('../preview-examples/link-button').then((m) => m.default),
      },
      {
        path: 'link-button-disabled',
        loadComponent: () =>
          import('../preview-examples/link-button-disabled').then(
            (m) => m.default
          ),
      },
      {
        path: 'loading',
        loadComponent: () =>
          import('../preview-examples/loading').then((m) => m.default),
      },
      {
        path: 'map-navigation',
        loadComponent: () =>
          import('../preview-examples/map-navigation').then((m) => m.default),
      },
      {
        path: 'map-navigation-migration',
        loadComponent: () =>
          import('../preview-examples/map-navigation-migration').then(
            (m) => m.default
          ),
      },
      {
        path: 'map-navigation-overlay',
        loadComponent: () =>
          import('../preview-examples/map-navigation-overlay').then(
            (m) => m.default
          ),
      },
      {
        path: 'menu-category',
        loadComponent: () =>
          import('../preview-examples/menu-category').then((m) => m.default),
      },
      {
        path: 'menu-with-bottom-tabs',
        loadComponent: () =>
          import('../preview-examples/menu-with-bottom-tabs').then(
            (m) => m.default
          ),
      },
      {
        path: 'message',
        loadComponent: () =>
          import('../preview-examples/message').then((m) => m.default),
      },
      {
        path: 'message-bar',
        loadComponent: () =>
          import('../preview-examples/message-bar').then((m) => m.default),
      },
      {
        path: 'modal-by-instance',
        loadComponent: () =>
          import('../preview-examples/modal-by-instance').then(
            (m) => m.default
          ),
      },
      {
        path: 'modal-by-template',
        loadComponent: () =>
          import('../preview-examples/modal-by-template').then(
            (m) => m.default
          ),
      },
      {
        path: 'modal-form-ix-button-submit',
        loadComponent: () =>
          import('../preview-examples/modal-form-ix-button-submit').then(
            (m) => m.default
          ),
      },
      {
        path: 'modal-sizes',
        loadComponent: () =>
          import('../preview-examples/modal-sizes').then((m) => m.default),
      },
      {
        path: 'number-input',
        loadComponent: () =>
          import('../preview-examples/number-input').then((m) => m.default),
      },
      {
        path: 'number-input-disabled',
        loadComponent: () =>
          import('../preview-examples/number-input-disabled').then(
            (m) => m.default
          ),
      },
      {
        path: 'number-input-label',
        loadComponent: () =>
          import('../preview-examples/number-input-label').then(
            (m) => m.default
          ),
      },
      {
        path: 'number-input-readonly',
        loadComponent: () =>
          import('../preview-examples/number-input-readonly').then(
            (m) => m.default
          ),
      },
      {
        path: 'number-input-stepper-button',
        loadComponent: () =>
          import('../preview-examples/number-input-stepper-button').then(
            (m) => m.default
          ),
      },
      {
        path: 'number-input-validation',
        loadComponent: () =>
          import('../preview-examples/number-input-validation').then(
            (m) => m.default
          ),
      },
      {
        path: 'number-input-with-slots',
        loadComponent: () =>
          import('../preview-examples/number-input-with-slots').then(
            (m) => m.default
          ),
      },
      {
        path: 'pagination',
        loadComponent: () =>
          import('../preview-examples/pagination').then((m) => m.default),
      },
      {
        path: 'pagination-advanced',
        loadComponent: () =>
          import('../preview-examples/pagination-advanced').then(
            (m) => m.default
          ),
      },
      {
        path: 'pane',
        loadComponent: () =>
          import('../preview-examples/pane').then((m) => m.default),
      },
      {
        path: 'pane-layout',
        loadComponent: () =>
          import('../preview-examples/pane-layout').then((m) => m.default),
      },
      {
        path: 'pill',
        loadComponent: () =>
          import('../preview-examples/pill').then((m) => m.default),
      },
      {
        path: 'pill-variants',
        loadComponent: () =>
          import('../preview-examples/pill-variants').then((m) => m.default),
      },
      {
        path: 'popover-news',
        loadComponent: () =>
          import('../preview-examples/popover-news').then((m) => m.default),
      },
      {
        path: 'push-card',
        loadComponent: () =>
          import('../preview-examples/push-card').then((m) => m.default),
      },
      {
        path: 'radio',
        loadComponent: () =>
          import('../preview-examples/radio').then((m) => m.default),
      },
      {
        path: 'radio-button',
        loadComponent: () =>
          import('../preview-examples/radio-button').then((m) => m.default),
      },
      {
        path: 'radio-disabled',
        loadComponent: () =>
          import('../preview-examples/radio-disabled').then((m) => m.default),
      },
      {
        path: 'radio-group',
        loadComponent: () =>
          import('../preview-examples/radio-group').then((m) => m.default),
      },
      {
        path: 'radio-validation',
        loadComponent: () =>
          import('../preview-examples/radio-validation').then((m) => m.default),
      },
      {
        path: 'select',
        loadComponent: () =>
          import('../preview-examples/select').then((m) => m.default),
      },
      {
        path: 'select-editable',
        loadComponent: () =>
          import('../preview-examples/select-editable').then((m) => m.default),
      },
      {
        path: 'select-multiple',
        loadComponent: () =>
          import('../preview-examples/select-multiple').then((m) => m.default),
      },
      {
        path: 'select-ng-model',
        loadComponent: () =>
          import('../preview-examples/select-ng-model').then((m) => m.default),
      },
      {
        path: 'select-validation',
        loadComponent: () =>
          import('../preview-examples/select-validation').then(
            (m) => m.default
          ),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('../preview-examples/settings').then((m) => m.default),
      },
      {
        path: 'slider',
        loadComponent: () =>
          import('../preview-examples/slider').then((m) => m.default),
      },
      {
        path: 'slider-error',
        loadComponent: () =>
          import('../preview-examples/slider-error').then((m) => m.default),
      },
      {
        path: 'slider-marker',
        loadComponent: () =>
          import('../preview-examples/slider-marker').then((m) => m.default),
      },
      {
        path: 'slider-trace',
        loadComponent: () =>
          import('../preview-examples/slider-trace').then((m) => m.default),
      },
      {
        path: 'spinner',
        loadComponent: () =>
          import('../preview-examples/spinner').then((m) => m.default),
      },
      {
        path: 'spinner-large',
        loadComponent: () =>
          import('../preview-examples/spinner-large').then((m) => m.default),
      },
      {
        path: 'split-button',
        loadComponent: () =>
          import('../preview-examples/split-button').then((m) => m.default),
      },
      {
        path: 'split-button-icons',
        loadComponent: () =>
          import('../preview-examples/split-button-icons').then(
            (m) => m.default
          ),
      },
      {
        path: 'tabs',
        loadComponent: () =>
          import('../preview-examples/tabs').then((m) => m.default),
      },
      {
        path: 'tabs-rounded',
        loadComponent: () =>
          import('../preview-examples/tabs-rounded').then((m) => m.default),
      },
      {
        path: 'textarea',
        loadComponent: () =>
          import('../preview-examples/textarea').then((m) => m.default),
      },
      {
        path: 'textarea-disabled',
        loadComponent: () =>
          import('../preview-examples/textarea-disabled').then(
            (m) => m.default
          ),
      },
      {
        path: 'textarea-legacy',
        loadComponent: () =>
          import('../preview-examples/textarea-legacy').then((m) => m.default),
      },
      {
        path: 'textarea-legacy-disabled',
        loadComponent: () =>
          import('../preview-examples/textarea-legacy-disabled').then(
            (m) => m.default
          ),
      },
      {
        path: 'textarea-legacy-readonly',
        loadComponent: () =>
          import('../preview-examples/textarea-legacy-readonly').then(
            (m) => m.default
          ),
      },
      {
        path: 'textarea-rows-cols',
        loadComponent: () =>
          import('../preview-examples/textarea-rows-cols').then(
            (m) => m.default
          ),
      },
      {
        path: 'textarea-validation',
        loadComponent: () =>
          import('../preview-examples/textarea-validation').then(
            (m) => m.default
          ),
      },
      {
        path: 'theme-switcher',
        loadComponent: () =>
          import('../preview-examples/theme-switcher').then((m) => m.default),
      },
      {
        path: 'tile',
        loadComponent: () =>
          import('../preview-examples/tile').then((m) => m.default),
      },
      {
        path: 'timepicker',
        loadComponent: () =>
          import('../preview-examples/timepicker').then((m) => m.default),
      },
      {
        path: 'toast',
        loadComponent: () =>
          import('../preview-examples/toast').then((m) => m.default),
      },
      {
        path: 'toast-custom',
        loadComponent: () =>
          import('../preview-examples/toast-custom').then((m) => m.default),
      },
      {
        path: 'toast-position',
        loadComponent: () =>
          import('../preview-examples/toast-position').then((m) => m.default),
      },
      {
        path: 'toggle',
        loadComponent: () =>
          import('../preview-examples/toggle').then((m) => m.default),
      },
      {
        path: 'toggle-button-primary',
        loadComponent: () =>
          import('../preview-examples/toggle-button-primary').then(
            (m) => m.default
          ),
      },
      {
        path: 'toggle-button-primary-ghost',
        loadComponent: () =>
          import('../preview-examples/toggle-button-primary-ghost').then(
            (m) => m.default
          ),
      },
      {
        path: 'toggle-button-primary-outline',
        loadComponent: () =>
          import('../preview-examples/toggle-button-primary-outline').then(
            (m) => m.default
          ),
      },
      {
        path: 'toggle-button-secondary',
        loadComponent: () =>
          import('../preview-examples/toggle-button-secondary').then(
            (m) => m.default
          ),
      },
      {
        path: 'toggle-button-secondary-ghost',
        loadComponent: () =>
          import('../preview-examples/toggle-button-secondary-ghost').then(
            (m) => m.default
          ),
      },
      {
        path: 'toggle-button-secondary-outline',
        loadComponent: () =>
          import('../preview-examples/toggle-button-secondary-outline').then(
            (m) => m.default
          ),
      },
      {
        path: 'toggle-checked',
        loadComponent: () =>
          import('../preview-examples/toggle-checked').then((m) => m.default),
      },
      {
        path: 'toggle-custom-label',
        loadComponent: () =>
          import('../preview-examples/toggle-custom-label').then(
            (m) => m.default
          ),
      },
      {
        path: 'toggle-disabled',
        loadComponent: () =>
          import('../preview-examples/toggle-disabled').then((m) => m.default),
      },
      {
        path: 'toggle-indeterminate',
        loadComponent: () =>
          import('../preview-examples/toggle-indeterminate').then(
            (m) => m.default
          ),
      },
      {
        path: 'toggle-ng-model',
        loadComponent: () =>
          import('../preview-examples/toggle-ng-model').then((m) => m.default),
      },
      {
        path: 'tooltip',
        loadComponent: () =>
          import('../preview-examples/tooltip').then((m) => m.default),
      },
      {
        path: 'tree',
        loadComponent: () =>
          import('../preview-examples/tree').then((m) => m.default),
      },
      {
        path: 'tree-custom',
        loadComponent: () =>
          import('../preview-examples/tree-custom').then((m) => m.default),
      },
      {
        path: 'upload',
        loadComponent: () =>
          import('../preview-examples/upload').then((m) => m.default),
      },
      {
        path: 'validation',
        loadComponent: () =>
          import('../preview-examples/validation').then((m) => m.default),
      },
      {
        path: 'validation-select',
        loadComponent: () =>
          import('../preview-examples/validation-select').then(
            (m) => m.default
          ),
      },
      {
        path: 'vertical-tabs',
        loadComponent: () =>
          import('../preview-examples/vertical-tabs').then((m) => m.default),
      },
      {
        path: 'vertical-tabs-with-avatar',
        loadComponent: () =>
          import('../preview-examples/vertical-tabs-with-avatar').then(
            (m) => m.default
          ),
      },
      {
        path: 'workflow',
        loadComponent: () =>
          import('../preview-examples/workflow').then((m) => m.default),
      },
      {
        path: 'workflow-vertical',
        loadComponent: () =>
          import('../preview-examples/workflow-vertical').then(
            (m) => m.default
          ),
      },

      {
        path: 'progress-indicator',
        loadComponent: () =>
          import('../preview-examples/progress-indicator').then(
            (m) => m.default
          ),
      },
      {
        path: 'progress-indicator-linear-sizes',
        loadComponent: () =>
          import('../preview-examples/progress-indicator-linear-sizes').then(
            (m) => m.default
          ),
      },
      {
        path: 'progress-indicator-linear-status',
        loadComponent: () =>
          import('../preview-examples/progress-indicator-linear-status').then(
            (m) => m.default
          ),
      },
      {
        path: 'progress-indicator-circular-sizes',
        loadComponent: () =>
          import('../preview-examples/progress-indicator-circular-sizes').then(
            (m) => m.default
          ),
      },
      {
        path: 'progress-indicator-circular-status',
        loadComponent: () =>
          import('../preview-examples/progress-indicator-circular-status').then(
            (m) => m.default
          ),
      },
      {
        path: 'progress-indicator-circular',
        loadComponent: () =>
          import('../preview-examples/progress-indicator-circular').then(
            (m) => m.default
          ),
      },
    ],
  },
];
