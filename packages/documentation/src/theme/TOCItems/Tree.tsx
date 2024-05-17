import React from 'react';
import Link from '@docusaurus/Link';
import type { Props } from '@theme/TOCItems/Tree';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const codeTabRegex = /code-tab-.*/i;
const styleTabRegex = /style-tab-.*/i;

// Recursive component rendering the toc tree
function TOCItemTree({
  toc,
  className,
  linkClassName,
  isChild,
}: Props): JSX.Element | null {
  if (!toc.length) {
    return null;
  }


  return (
    <ul className={isChild ? undefined : className}>
      {toc.map((heading) => {
        let queryParam = '';

        if (codeTabRegex.test(heading.id)) {
          queryParam = `?current-tab=code`
        } else if (styleTabRegex.test(heading.id)) {
          queryParam = `?current-tab=style`
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
              className={className}
              linkClassName={linkClassName}
            />
          </li>
        )
      })}
    </ul>
  );
}

// Memo only the tree root is enough
export default React.memo(TOCItemTree);
