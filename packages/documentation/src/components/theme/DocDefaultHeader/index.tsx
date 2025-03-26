/*
 * COPYRIGHT (c) Siemens AG 2018-2024 ALL RIGHTS RESERVED.
 */
import { useScrollPosition } from '@docusaurus/theme-common/internal';
import { DeprecatedTag, RedirectTag } from '@site/src/components/UI/Tags';
import clsx from 'clsx';
import { useState } from 'react';
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
  const { description, title, frontMatter, id } = props;

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
