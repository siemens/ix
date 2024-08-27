import React, { useLayoutEffect } from 'react';
import DocsRoot from '@theme-original/DocsRoot';
import type DocsRootType from '@theme/DocsRoot';
import type { WrapperProps } from '@docusaurus/types';

type Props = WrapperProps<typeof DocsRootType>;

export default function DocsRootWrapper(props: Props): JSX.Element {
  const { history, location } = props;

  useLayoutEffect(() => {
    setTimeout(() => {
      history.push({
        search: location.search,
        hash: location.hash,
      });
    });
  }, [location.search, location.hash]);

  return (
    <>
      <DocsRoot {...props} />
    </>
  );
}
