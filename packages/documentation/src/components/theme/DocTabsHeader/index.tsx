/*
 * COPYRIGHT (c) Siemens AG 2018-2024 ALL RIGHTS RESERVED.
 */
import type { PropSidebarItemLink } from '@docusaurus/plugin-content-docs';
import { useHistory, useLocation } from '@docusaurus/router';
import { useScrollPosition } from '@docusaurus/theme-common/internal';
import { DeprecatedTag, RedirectTag } from '@site/src/components/UI/Tags';
import clsx from 'clsx';
import { useCallback, useState } from 'react';
import styles from './styles.module.css';

function Tabs({ children }) {
  const [isScrolling, setIsScrolling] = useState(false);
  useScrollPosition(({ scrollY }) => {
    setIsScrolling(scrollY > 50);
  }, []);

  return (
    <div
      className={clsx(styles.Tabs, {
        [styles.Scrolled]: isScrolling,
      })}
    >
      {children}
    </div>
  );
}

function Tab(props: Readonly<{ label: string; value: string }>) {
  const location = useLocation();
  const history = useHistory();

  const onNavigate = useCallback(() => {
    history.push(props.value);
  }, [props.value, history]);

  return (
    <button
      className={clsx('all-unset', styles.Tab, {
        [styles['Tab--active']]: location.pathname.includes(props.value),
      })}
      onClick={onNavigate}
    >
      {props.label}
    </button>
  );
}

export default function DocTabsHeader(
  props: Readonly<{
    id: string;
    title: string;
    description: string;
    tabs: PropSidebarItemLink[];
    frontMatter: any;
  }>
) {
  const { description, tabs, title, frontMatter, id } = props;

  return (
    <>
      <h1 className={styles.sticky_h1}>
        {title}

        <a
          href={`#${id.replaceAll('/', '-')}`}
          className="hash-link"
          aria-label={title}
          title={title}
        ></a>
      </h1>

      {description && (
        <div className={clsx(styles.componentHeroHeader, 'HeroHeader')}>
          <p className={styles.Description}>{description}</p>
          <div className={styles.Tags}>
            {frontMatter.deprecated &&
              Array.from(frontMatter.deprecated) &&
              frontMatter.deprecated.map(
                (
                  link: string | { type: string; message: string; href: string }
                ) => {
                  if (typeof link === 'string') {
                    return (
                      <RedirectTag key={link} link={link}>
                        Show deprecated version
                      </RedirectTag>
                    );
                  }

                  if (link.type === 'deprecated') {
                    return (
                      <DeprecatedTag
                        key={link.message}
                        message={link.message}
                      ></DeprecatedTag>
                    );
                  }
                }
              )}
          </div>
        </div>
      )}

      <Tabs>
        {tabs.map((tab) => {
          return <Tab value={tab.href} label={tab.label} key={tab.docId} />;
        })}
      </Tabs>
    </>
  );
}
