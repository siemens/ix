/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxTimePicker } from '@siemens/ix-react';

export default () => {
  return (
    <IxTimePicker
      time="01:15:10 AM"
      format="hh:mm:ss a"
      hourInterval={2}
      minuteInterval={15}
      secondInterval={10}
    />
  );
};
