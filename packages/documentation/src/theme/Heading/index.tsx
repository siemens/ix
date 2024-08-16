import React from 'react';
import clsx from 'clsx';
import { translate } from '@docusaurus/Translate';
import { useThemeConfig } from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';
import useBrokenLinks from '@docusaurus/useBrokenLinks';
import type { Props } from '@theme/Heading';

import styles from './styles.module.css';
import { useLocation } from '@docusaurus/router';
import { DocsTabQueryString } from '@site/src/components/LinkableDocsTabs';

export default function Heading({ as: As, id, ...props }: Props): JSX.Element {
  const location = useLocation();
  const brokenLinks = useBrokenLinks();
  const {
    navbar: { hideOnScroll },
  } = useThemeConfig();

  const searchParams = new URLSearchParams(location.search);
  const currentTab = searchParams.get(DocsTabQueryString);

  // H1 headings do not need an id because they don't appear in the TOC.
  if (As === 'h1' || !id) {
    return <As {...props} id={undefined} />;
  }

  brokenLinks.collectAnchor(id);

  const anchorTitle = translate(
    {
      id: 'theme.common.headingLinkTitle',
      message: 'Direct link to {heading}',
      description: 'Title for link to heading',
    },
    {
      heading: typeof props.children === 'string' ? props.children : id,
    }
  );

  let link = `#${id}`;

  if (currentTab === 'development' || currentTab === 'guidelines') {
    link = `?${DocsTabQueryString}=${currentTab}${link}`;
  }

  return (
    <As
      {...props}
      className={clsx(
        'anchor',
        hideOnScroll
          ? styles.anchorWithHideOnScrollNavbar
          : styles.anchorWithStickyNavbar,
        props.className
      )}
      id={id}
    >
      {props.children}
      <Link
        className="hash-link"
        to={link}
        aria-label={anchorTitle}
        title={anchorTitle}
      >
        &#8203;
      </Link>
    </As>
  );
}
