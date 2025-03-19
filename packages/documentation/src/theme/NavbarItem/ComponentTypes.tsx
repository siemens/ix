import DefaultNavbarItem from '@theme/NavbarItem/DefaultNavbarItem';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';
import LocaleDropdownNavbarItem from '@theme/NavbarItem/LocaleDropdownNavbarItem';
import SearchNavbarItem from '@theme/NavbarItem/SearchNavbarItem';
import HtmlNavbarItem from '@theme/NavbarItem/HtmlNavbarItem';
import DocNavbarItem from '@theme/NavbarItem/DocNavbarItem';
import DocSidebarNavbarItem from '@theme/NavbarItem/DocSidebarNavbarItem';
import DocsVersionNavbarItem from '@theme/NavbarItem/DocsVersionNavbarItem';
import DocsVersionDropdownNavbarItem from '@theme/NavbarItem/DocsVersionDropdownNavbarItem';

import type { ComponentTypesObject } from '@theme/NavbarItem/ComponentTypes';
import Link from '@docusaurus/Link';
import { IxDropdown, IxDropdownItem } from '@siemens/ix-react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { useMemo } from 'react';

function NavLink({ value, label }) {
  return (
    <Link className="navbar__item nav-link" to={value}>
      {label}
    </Link>
  );
}

function VersionSelection({ value }) {
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
            className="navbar__item nav-link cursor-pointer"
          >
            {currentVersion.label}
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

const ComponentTypes: ComponentTypesObject = {
  default: DefaultNavbarItem,
  localeDropdown: LocaleDropdownNavbarItem,
  search: SearchNavbarItem,
  dropdown: DropdownNavbarItem,
  html: HtmlNavbarItem,
  doc: DocNavbarItem,
  docSidebar: DocSidebarNavbarItem,
  docsVersion: DocsVersionNavbarItem,
  docsVersionDropdown: DocsVersionDropdownNavbarItem,
  'custom-nav-link': NavLink,
  'custom-version-selection': VersionSelection,
};

export default ComponentTypes;
