/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { IxDropdown, IxDropdownItem, IxIcon } from '@siemens/ix-react';
import { iconChevronDown } from '@siemens/ix-icons/icons';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { useMemo } from 'react';
import clsx from 'clsx';

import styles from './VersionSelection.module.css';

export default function VersionSelection({ value }) {
  const currentVersion = useMemo(
    () => value.versions.find((v) => v.id === value.currentVersion),
    [value]
  );
  return (
    <BrowserOnly>
      {() => (
        <>
          <span
            id="custom-version-selection"
            className={clsx('navbar__item nav-link', styles.versionSelection)}
          >
            {currentVersion.label}
            <IxIcon name={iconChevronDown} />
          </span>
          <IxDropdown trigger="custom-version-selection">
            {value.versions.map((version) => (
              <IxDropdownItem key={version.id}>
                {currentVersion.id === version.id ? (
                  <span>{currentVersion.label}</span>
                ) : (
                  <a href={version.href} className="all-unset">
                    {version.label}
                  </a>
                )}
              </IxDropdownItem>
            ))}
          </IxDropdown>
        </>
      )}
    </BrowserOnly>
  );
}
