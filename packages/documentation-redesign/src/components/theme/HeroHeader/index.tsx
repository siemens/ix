/*
 * COPYRIGHT (c) Siemens AG 2018-2024 ALL RIGHTS RESERVED.
 */
import styles from './styles.module.css';
import clsx from 'clsx';
import { useHistory, useLocation } from '@docusaurus/router';
import useSearchParams from '@site/src/utils/hooks/useSearchParams';
import ReadMore from '@site/src/components/ReadMore';
import { useCallback, useEffect, useState } from 'react';

function Tabs({ children }) {
  return <div className={styles.Tabs}>{children}</div>;
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
}) {
  const { description, tabs, title } = props;
  return (
    <>
      <h1 className={styles.sticky_h1}>{title}</h1>

      <div className={clsx(styles.componentHeroHeader, 'HeroHeader')}>
          <ReadMore>{description}</ReadMore>
      </div>

      {tabs.length > 0 && (
        <Tabs>
          {tabs.map((tab) => (
            <Tab value={tab} label={tab} key={tab} />
          ))}
        </Tabs>
      )}
    </>
  );
}
