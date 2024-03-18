/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { IxDropdownButton, IxDropdownItem } from '@siemens/ix-react';

export default function VersionRedirect() {
  const context = useDocusaurusContext();
  const versionMeta = context.siteConfig.customFields.versions as any;

  console.log(versionMeta);

  const { currentVersion } = versionMeta;
  const selected = versionMeta.versions.find(
    (version) => version.id === currentVersion
  );

  function routeToVersion(link: string) {
    if (typeof window !== 'undefined') {
      window.location.href = link;
    }
  }

  return (
    <IxDropdownButton style={{ marginRight: '1rem' }} label={selected.label}>
      {versionMeta.versions.map((version) => (
        <IxDropdownItem
          key={version.id}
          label={version.label}
          checked={version.id === currentVersion}
          onClick={() => routeToVersion(version.href)}
        ></IxDropdownItem>
      ))}
    </IxDropdownButton>
  );
}
