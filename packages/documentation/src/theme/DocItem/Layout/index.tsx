import {
  useCurrentSidebarCategory,
  useDoc,
  useDocById,
} from '@docusaurus/plugin-content-docs/client';
import { useHistory } from '@docusaurus/router';
import { useWindowSize } from '@docusaurus/theme-common';

import { PropSidebarItemLink } from '@docusaurus/plugin-content-docs';
import type { WrapperProps } from '@docusaurus/types';
import DocDefaultHeader from '@site/src/components/theme/DocDefaultHeader';
import DocTabsHeader from '@site/src/components/theme/DocTabsHeader';
import { useDocType } from '@site/src/utils/hooks/useDocType';
import DocItemContent from '@theme-original/DocItem/Content';
import DocItemFooter from '@theme-original/DocItem/Footer';
import Layout from '@theme-original/DocItem/Layout';
import DocItemPaginator from '@theme-original/DocItem/Paginator';
import ContentVisibility from '@theme/ContentVisibility';
import type LayoutType from '@theme/DocItem/Layout';
import DocItemTOCDesktop from '@theme/DocItem/TOC/Desktop';
import DocItemTOCMobile from '@theme/DocItem/TOC/Mobile';
import DocVersionBanner from '@theme/DocVersionBanner';
import clsx from 'clsx';
import { useEffect } from 'react';
import styles from './styles.module.css';

type Props = WrapperProps<typeof LayoutType>;

export default function LayoutWrapper(props: Readonly<Props>): JSX.Element {
  const docType = useDocType();

  if (docType === 'banner') {
    return <BannerDocItemLayout {...props} />;
  }

  if (docType === 'tabs') {
    return <DocItemTabsLayout />;
  }

  if (docType === 'tab-item') {
    return <DocItemTabItemLayout {...props} />;
  }

  return (
    <div className={clsx('docLayoutWrapper', `docLayout--default`)}>
      <Layout {...props} />
    </div>
  );
}

function useDocTOC() {
  const { frontMatter, toc } = useDoc();
  const windowSize = useWindowSize();

  const hidden = frontMatter.hide_table_of_contents;
  const canRender = !hidden && toc.length > 0;

  const mobile = canRender ? <DocItemTOCMobile /> : undefined;

  const desktop =
    canRender && (windowSize === 'desktop' || windowSize === 'ssr') ? (
      <DocItemTOCDesktop />
    ) : undefined;

  return {
    hidden,
    mobile,
    desktop,
  };
}

export function BannerDocItemLayout({ children }: Props): JSX.Element {
  const docTOC = useDocTOC();
  const { metadata } = useDoc();
  const { title, description } = metadata;

  return (
    <>
      <DocDefaultHeader
        id={metadata.id}
        title={title}
        description={description}
        tabs={[]}
        frontMatter={{ ...metadata.frontMatter, no_single_tab: false }}
      />
      <div
        className={clsx(
          styles.Row,
          metadata.frontMatter.hide_table_of_contents && styles.RowHideToc
        )}
      >
        <div className={styles.docItemContainer}>
          <ContentVisibility metadata={metadata} />
          <DocVersionBanner />
          <article>
            {docTOC.mobile}

            <div className={styles.docContent}>
              <DocItemContent>{children}</DocItemContent>
            </div>
          </article>
          <DocItemFooter />
          <DocItemPaginator />
        </div>
        <div className={clsx('col', styles.toc)}>{docTOC.desktop}</div>
      </div>
    </>
  );
}

export function DocItemTabsLayout(): JSX.Element {
  const history = useHistory();
  const { metadata } = useDoc();

  const sidebar = useCurrentSidebarCategory() as { items: { href: string }[] };

  useEffect(() => {
    if (sidebar.items.length > 0) {
      history.push(sidebar.items[0].href);
    }
  }, [sidebar]);

  return (
    <>
      <ContentVisibility metadata={metadata} />
      <DocVersionBanner />
    </>
  );
}

export function DocItemTabItemLayout({ children }: Props): JSX.Element {
  const docTOC = useDocTOC();
  const doc = useDoc();
  const { metadata } = doc;

  const sidebar = useCurrentSidebarCategory();

  const parentId = metadata.id.split('/').splice(0, 2).join('/') + '/index';
  const parentDoc = useDocById(parentId);

  return (
    <>
      <DocTabsHeader
        id={metadata.id}
        title={parentDoc.title}
        description={parentDoc.description}
        frontMatter={metadata.frontMatter}
        tabs={sidebar.items as PropSidebarItemLink[]}
      />
      <div className={styles.Row}>
        <div className={styles.docItemContainer}>
          <ContentVisibility metadata={metadata} />
          <DocVersionBanner />
          <article>
            {docTOC.mobile}

            <div
              className={clsx(styles.docContent, styles.docContentComponent)}
            >
              <DocItemContent>{children}</DocItemContent>
            </div>
          </article>
          <DocItemFooter />
          <DocItemPaginator />
        </div>
        <div className={clsx('col', styles.toc)}>{docTOC.desktop}</div>
      </div>
    </>
  );
}
