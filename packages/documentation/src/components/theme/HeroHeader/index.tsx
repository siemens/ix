/*
 * COPYRIGHT (c) Siemens AG 2018-2024 ALL RIGHTS RESERVED.
 */
import { useHistory, useLocation } from '@docusaurus/router';
import { useScrollPosition } from '@docusaurus/theme-common/internal';
import { RedirectTag } from '@site/src/components/UI/Tags';
import useSearchParams from '@site/src/utils/hooks/useSearchParams';
import clsx from 'clsx';
import { Fragment, useCallback, useEffect, useState } from 'react';
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

function Tab(props: { label: string; value: string }) {
  const location = useLocation();
  const currentTab = useSearchParams('current-tabs');
  const history = useHistory();

  const [isActive, setIsActive] = useState(false);

  const onNavigate = useCallback(() => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('current-tabs', props.value);
    location.search = searchParams.toString();
    history.push(location);
  }, [props.value, location]);

  useEffect(() => {
    setIsActive(props.value === currentTab);
  }, [location, currentTab]);

  return (
    <div
      className={clsx(styles.Tab, {
        [styles['Tab--active']]: isActive,
      })}
      onClick={onNavigate}
    >
      {props.label}
    </div>
  );
}

export default function HeroHeader(props: {
  title: string;
  description: string;
  tabs: string[];
  frontMatter: any;
}) {
  const { description, tabs, title, frontMatter } = props;
  const noSingleTab = props.frontMatter.no_single_tab;

  return (
    <>
      <h1 className={styles.sticky_h1}>{title}</h1>

      {description && (
        <div className={clsx(styles.componentHeroHeader, 'HeroHeader')}>
          <p>{description}</p>
          {frontMatter.deprecated &&
            Array.from(frontMatter.deprecated) &&
            frontMatter.deprecated.map((link: string) => (
              <RedirectTag key={link} link={link}>
                Show deprecated version
              </RedirectTag>
            ))}
        </div>
      )}

      <Tabs>
        {tabs.map((tab, index) => {
          if (tabs.length > 0 && !noSingleTab) {
            return <Tab value={tab} label={tab} key={tab} />;
          }

          return <Fragment key={index}></Fragment>;
        })}
      </Tabs>
    </>
  );
}
