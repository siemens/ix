/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { CardVariant } from './../card/card.types';

export type CardAccordionExpandChangeEvent = {
  expand: boolean;
  nativeEvent: Event;
};

export type CardAccordionVariant = CardVariant;
