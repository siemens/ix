/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { DateTimeCardCorners } from '../date-time-card/date-time-card.types';

export interface IxDatePickerComponent {
  /**
   * Annotate with @Prop() decorator
   */
  format: string;

  /**
   * Annotate with @Prop() decorator
   */
  range: boolean;

  /**
   * Annotate with @Prop() decorator
   */
  corners: DateTimeCardCorners;

  /**
   * Annotate with @Prop() decorator
   */
  from?: string;

  /**
   * Annotate with @Prop() decorator
   */
  to?: string;

  /**
   * Annotate with @Prop() decorator
   */
  minDate?: string;

  /**
   * Annotate with @Prop() decorator
   */
  maxDate?: string;

  /**
   * Annotate with @Prop({ attribute: 'i18n-done' }) decorator
   */
  i18nDone: string;

  /**
   * Annotate with @Prop() decorator
   */
  weekStartIndex: number;

  /**
   * Annotate with @Prop() decorator
   */
  locale?: string;

  /**
   * Annotate with @Prop() decorator
   */
  showWeekNumbers: boolean;
}
