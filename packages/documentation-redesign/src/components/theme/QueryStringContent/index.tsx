/*
 * COPYRIGHT (c) Siemens AG 2018-2024 ALL RIGHTS RESERVED.
 */
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import { useLocation } from '@docusaurus/router';
import { ReactNode, useEffect, useState } from 'react';
export type QueryStringContentProps = {
  children: JSX.Element[];
};

export function useSubPageHook() {
  const { metadata } = useDoc();
  const location = useLocation();

  const [hasQueryString, setHasQueryString] = useState<null | boolean>(null);
  const [componentTabs, setComponentTabs] = useState<string[] | null>(null);
  const [currentTab, setCurrentTab] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchParams] = useState(new URLSearchParams(location.search));

  useEffect(() => {
    const componentTabs = metadata.frontMatter['component-tabs'] as string[];
    const searchParams = new URLSearchParams(location.search);
    const hasQueryString = searchParams.has('current-tabs');
    const currentTab = searchParams.get('current-tabs');

    setComponentTabs(componentTabs);
    setCurrentTab(currentTab);
    setHasQueryString(hasQueryString);
  }, [location, location.search, metadata]);

  useEffect(() => {
    if (hasQueryString === null || !componentTabs) {
      setCurrentIndex(-1);
      return;
    }
    const index = componentTabs.findIndex((tab) => tab === currentTab);
    setCurrentIndex(index);
  }, [hasQueryString, componentTabs, setCurrentIndex, currentTab]);

  return {
    componentTabs,
    searchParams,
    hasQueryString,
    currentTab,
    currentIndex,
  };
}

export default function QueryStringContent(props: QueryStringContentProps) {
  const { componentTabs, hasQueryString, currentTab } = useSubPageHook();

  let docItem: ReactNode;

  if (hasQueryString === null || !componentTabs) {
    docItem = props.children[0];
    return <div>{docItem}</div>;
  }

  console.log('componentTabs', componentTabs, props.children);
  const index = componentTabs.findIndex((tab) => tab === currentTab);
  docItem = props.children[index];

  if (!Array.isArray(props.children)) {
    return <div>{props.children}</div>;
  }

  if (!docItem) {
    console.warn('No document found to switch for', index);
    docItem = props.children[0];
  }

  return <div>{props.children[index]}</div>;
}
