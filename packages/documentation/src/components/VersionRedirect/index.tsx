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
import { useMemo } from 'react';

export default function VersionRedirect() {
  const context = useDocusaurusContext();
  const versionDeployment = context.siteConfig.customFields
    .versionDeployment as any;

  const { currentVersion } = versionDeployment;

  const hasVersions = useMemo(() => {
    return versionDeployment.versions.length !== 1;
  }, [versionDeployment]);

  const selected = versionDeployment.versions.find(
    (version) => version.id === currentVersion
  );

  function routeToVersion(link: string) {
    if (typeof window !== 'undefined') {
      window.location.href = link;
    }
  }

  if (!hasVersions) {
    return <></>;
  }

  return (
    <IxDropdownButton style={{ marginRight: '1rem' }} label={selected.label}>
      {versionDeployment.versions.map((version) => (
        <IxDropdownItem
          key={version.id}
          label={version.label}
          checked={version.id === currentVersion}
          onClick={() =>
            version.id === currentVersion || routeToVersion(version.href)
          }
        ></IxDropdownItem>
      ))}
    </IxDropdownButton>
  );
}
