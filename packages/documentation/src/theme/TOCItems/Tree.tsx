import React, { useMemo } from 'react';
import Link from '@docusaurus/Link';
import type { Props } from '@theme/TOCItems/Tree';
import type { TOCTreeNode } from '@docusaurus/theme-common/internal';
import { useLocation } from '@docusaurus/router';
import {
  developmentTabValue,
  docsTabQueryString,
  guidelinesTabValue,
} from '@site/src/components/LinkableDocsTabs';

type IxProps = Props & {
  parentTocItems: readonly TOCTreeNode[];
};

// Recursive component rendering the toc tree
function TOCItemTree({
  toc,
  className,
  linkClassName,
  isChild,
  parentTocItems,
}: IxProps): JSX.Element | null {
  const _location = useLocation();
  if (!toc.length) {
    return null;
  }

  return (
    <ul className={isChild ? undefined : className}>
      {toc.map((heading) => {
        const searchParams = new URLSearchParams(_location.search);

        let tabId = '';
        parentTocItems?.forEach((tab) => {
          tab.children.forEach((child) => {
            if (child.id === heading.id) {
              searchParams.set(docsTabQueryString, tab.id);
              tabId = tab.id;
            }
          });
        });

        if (tabId === '' && !parentTocItems) {
          const tab = toc.find(
            (firstLevelHeading) => firstLevelHeading.id === heading.id
          );
          tabId = tab?.id ?? '';
        }

        let queryParam = '';
        if (tabId === guidelinesTabValue || tabId === developmentTabValue) {
          queryParam = `?${docsTabQueryString}=${tabId}`;
        }

        return (
          <li key={heading.id}>
            <Link
              to={`${queryParam}#${heading.id}`}
              className={linkClassName ?? undefined}
              // Developer provided the HTML, so assume it's safe.
              dangerouslySetInnerHTML={{ __html: heading.value }}
            />
            <TOCItemTree
              isChild
              toc={heading.children}
              parentTocItems={isChild ? parentTocItems : toc}
              className={className}
              linkClassName={linkClassName}
            />
          </li>
        );
      })}
    </ul>
  );
}

// Memo only the tree root is enough
export default React.memo(TOCItemTree);
