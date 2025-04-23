/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { IxIcon } from '@siemens/ix-react';
import styles from './styles.module.css';

const IconTable: React.FC<{
  data: { icon: string; color?: string; name: string; description: string }[];
}> = ({ data }) => {
  return (
    <table className={styles.IconTable}>
      <tbody>
        {data.map((item) => (
          <tr key={item.name}>
            <td className={styles.IconCell}>
              <IxIcon name={item.icon} color={item.color ?? 'color-std-text'} />
            </td>
            <td className={styles.NameCell}>{item.name}</td>
            <td>{item.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default IconTable;

export const IconExamplesClarity = [
  {
    icon: 'home',
    name: 'home',
    description: 'Use for start pages',
  },
  {
    icon: 'search',
    name: 'search',
    description: 'Use for search inputs',
  },
  {
    icon: 'pen',
    name: 'pen',
    description: 'Use for edit modes',
  },
  {
    icon: 'cogwheel',
    name: 'cogwheel',
    description: 'Use for general settings',
  },
  {
    icon: 'trashcan',
    name: 'trashcan',
    description: 'Use for delete actions',
  },
  {
    icon: 'user',
    name: 'user',
    description: 'Use for user menus',
  },
  {
    icon: 'download',
    name: 'download',
    description: 'Use for downloading files',
  },
  {
    icon: 'upload',
    name: 'upload',
    description: 'Use for uploading files',
  },
];

export const IconExamplesStatus = [
  {
    icon: 'alarm',
    color: 'color-alarm',
    name: 'alarm',
    description: 'Use for hazardous states',
  },
  {
    icon: 'error',
    color: 'color-alarm',
    name: 'error',
    description: 'Use for error states',
  },
  {
    icon: 'warning-rhomb',
    color: 'color-critical',
    name: 'warning-rhomb',
    description: 'Use for critical states',
  },
  {
    icon: 'warning',
    color: 'color-warning',
    name: 'warning',
    description: 'Use for warning states',
  },
  {
    icon: 'success',
    color: 'color-success',
    name: 'success',
    description: 'Use for success states',
  },
  {
    icon: 'info',
    color: 'color-info',
    name: 'info',
    description: 'Use for info states',
  },
];
