import React, { useMemo } from 'react';
import Link from '@docusaurus/Link';
import type { Props } from '@theme/TOCItems/Tree';
import type { TOCTreeNode } from '@docusaurus/theme-common/internal';
import { useLocation } from '@docusaurus/router';
import { DocsTabQueryString } from '@site/src/components/LinkableDocsTabs';

type IxProps = Props & {
  parent: readonly TOCTreeNode[];
};

// Recursive component rendering the toc tree
function TOCItemTree({
  toc,
  className,
  linkClassName,
  isChild,
  parent,
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
        parent?.forEach((tab) => {
          tab.children.forEach((child) => {
            if (child.id === heading.id) {
              searchParams.set(DocsTabQueryString, tab.id);
              tabId = tab.id;
            }
          });
        });

        if (tabId === '' && !parent) {
          const tab = toc.find((tab) => tab.id === heading.id);
          tabId = tab?.id ?? '';
        }

        const queryParam = `?${DocsTabQueryString}=${tabId}`;
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
              parent={isChild ? parent : toc}
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
