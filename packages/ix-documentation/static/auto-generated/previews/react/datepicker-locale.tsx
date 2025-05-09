/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxDatePicker, IxSelect, IxSelectItem } from '@siemens/ix-react';
import { useState } from 'react';

export default () => {
  const [locale, setLocale] = useState<'de' | 'en' | (string & {})>('de');

  return (
    <>
      <span style={{ marginRight: '1rem' }}>Language:</span>
      <IxSelect
        value={locale}
        onValueChange={({ detail }) => {
          if (!Array.isArray(detail)) {
            setLocale(detail);
          }
        }}
        style={{
          margin: '1rem 0',
        }}
      >
        <IxSelectItem label="de" value={'de'}></IxSelectItem>
        <IxSelectItem label="en" value={'en'}></IxSelectItem>
      </IxSelect>
      <IxDatePicker locale={locale} />
    </>
  );
};
