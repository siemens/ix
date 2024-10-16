/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxButton, showToast } from '../../';

const Index = () => {
  return (
    <>
      <IxButton
        onClick={async () => {
          await showToast({
            icon: 'star',
            message: 'Foobar',
          });
        }}
      >
        Hallo
      </IxButton>
    </>
  );
};

export default Index;
