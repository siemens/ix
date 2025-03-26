/*
 * COPYRIGHT (c) Siemens AG 2018-2024 ALL RIGHTS RESERVED.
 */
import { useHistory, useLocation } from '@docusaurus/router';
import { useScrollPosition } from '@docusaurus/theme-common/internal';
import { DeprecatedTag, RedirectTag } from '@site/src/components/UI/Tags';
import useSearchParams from '@site/src/utils/hooks/useSearchParams';
import clsx from 'clsx';
import { Fragment, useCallback, useEffect, useState } from 'react';
import styles from './styles.module.css';

function Separator() {
  const [isScrolling, setIsScrolling] = useState(false);
  useScrollPosition(({ scrollY }) => {
    setIsScrolling(scrollY > 50);
  }, []);

  return (
    <div
      className={clsx(styles.Tabs, {
        [styles.Scrolled]: isScrolling,
      })}
    ></div>
  );
}

export default function DocDefaultHeader(props: {
  id: string;
  title: string;
  description: string;
  tabs: string[];
  frontMatter: any;
}) {
  const { description, tabs, title, frontMatter, id } = props;
  const noSingleTab = props.frontMatter.no_single_tab;

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
          <p>{description}</p>
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

      <Separator />
    </>
  );
}
