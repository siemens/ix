/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxTimePicker } from '@siemens/ix-react';

export default () => {
  return <IxTimePicker minTime="13:00:00" maxTime="17:30:00" time="12:45:00" />;
};
