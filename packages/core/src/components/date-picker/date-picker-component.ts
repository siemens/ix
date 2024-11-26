/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { DateTimeCardCorners } from '../date-time-card/date-time-card';

export interface IxDatePickerComponent {
  /**
   * Annotate with @Prop() decorator
   */
  format: string;

  /**
   * Annotae with @Prop() decorator
   */
  range: boolean;

  /**
   * Annotae with @Prop() decorator
   */
  corners: DateTimeCardCorners;

  /**
   * Annotae with @Prop() decorator
   */
  from?: string;

  /**
   * Annotae with @Prop() decorator
   */
  to?: string;

  /**
   * Annotae with @Prop() decorator
   */
  minDate?: string;

  /**
   * Annotae with @Prop() decorator
   */
  maxDate?: string;

  /**
   * Annotate with @Prop({ attribute: 'i18n-done' }) decorator
   */
  i18nDone: string;

  /**
   * Annotae with @Prop() decorator
   */
  weekStartIndex: number;

  /**
   * Annotae with @Prop() decorator
   */
  locale?: string;
}
