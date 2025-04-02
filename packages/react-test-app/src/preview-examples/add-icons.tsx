/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxIcon } from '@siemens/ix-react';
import { addIcons } from '@siemens/ix-icons';
import { iconStar, iconStarFilled } from '@siemens/ix-icons/icons';

import './icon-toggle-button-secondary.scoped.css';

export default () => {
  addIcons({ iconStar, iconStarFilled });

  return (
    <>
      <IxIcon name={iconStar}></IxIcon>
      <IxIcon name="star"></IxIcon>

      <IxIcon name={iconStarFilled}></IxIcon>
      <IxIcon name="starFilled"></IxIcon>
      <IxIcon name="star-filled"></IxIcon>
    </>
  );
};
