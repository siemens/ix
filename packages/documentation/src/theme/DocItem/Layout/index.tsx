import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Layout from '@theme-original/DocItem/Layout';
import type LayoutType from '@theme/DocItem/Layout';
import type { WrapperProps } from '@docusaurus/types';
import { useDocType } from '@site/src/utils/hooks/useDocType';
import clsx from 'clsx';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import DocItemContent from '@theme-original/DocItem/Content';
import DocItemFooter from '@theme-original/DocItem/Footer';
import DocItemPaginator from '@theme-original/DocItem/Paginator';
import HeroHeader from '@site/src/components/theme/HeroHeader';
import { useWindowSize } from '@docusaurus/theme-common';
import DocItemTOCMobile from '@theme/DocItem/TOC/Mobile';
import DocItemTOCDesktop from '@theme/DocItem/TOC/Desktop';
import styles from './styles.module.css';
import { useSubPageHook } from '@site/src/components/theme/QueryStringContent';
import { useHistory } from '@docusaurus/router';
type Props = WrapperProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props): JSX.Element {
  const docType = useDocType();

  if (!docType) {
    return (
      <div className={clsx('docLayoutWrapper', `docLayout--default`)}>
        <Layout {...props} />
      </div>
    );
  }

  if (docType === 'banner') {
    return <BannerDocItemLayout {...props} />;
  }

  return (
    <div className={clsx('docLayoutWrapper', `docLayout--${docType}`)}>
      <ComponentDocItemLayout {...props} />
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
      <HeroHeader
        id={metadata.id}
        title={title}
        description={description}
        tabs={[]}
        frontMatter={{ ...metadata.frontMatter, no_single_tab: false }}
      />
      <div className={styles.Row}>
        <div className={styles.docItemContainer}>
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

export function ComponentDocItemLayout({ children }: Props): JSX.Element {
  const { currentTab, searchParams } = useSubPageHook();
  const history = useHistory();
  const docTOC = useDocTOC();
  const { metadata } = useDoc();
  const [tabs, setTabs] = useState<string[]>([]);
  const { title, description } = metadata;

  useEffect(() => {
    if (
      metadata.frontMatter['component-tabs'] &&
      Array.isArray(metadata.frontMatter['component-tabs'])
    ) {
      setTabs(metadata.frontMatter['component-tabs']);
    }
  }, [metadata.frontMatter]);

  useEffect(() => {
    requestAnimationFrame(() => {
      if (!currentTab && tabs.length > 0) {
        searchParams.set('current-tabs', tabs[0]);
        history.push({ search: searchParams.toString() });
      }
    });
  }, [currentTab, tabs]);

  return (
    <>
      <HeroHeader
        id={metadata.id}
        title={title}
        description={description}
        tabs={tabs}
        frontMatter={metadata.frontMatter}
      />
      <div className={styles.Row}>
        <div className={styles.docItemContainer}>
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
