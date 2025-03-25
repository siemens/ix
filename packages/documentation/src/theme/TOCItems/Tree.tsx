/*
 * COPYRIGHT (c) Siemens AG 2018-2024 ALL RIGHTS RESERVED.
 */
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import Tree from '@theme-original/TOCItems/Tree';
import type TreeType from '@theme/TOCItems/Tree';
import type { WrapperProps } from '@docusaurus/types';
import { useSubPageHook } from '@site/src/components/theme/QueryStringContent';

type Props = WrapperProps<typeof TreeType>;

export default function TreeWrapper(props: Props): JSX.Element {
  const { metadata } = useDoc();
  const toc = props.toc;
  const [nestedToc, setNestedToc] = useState<readonly any[]>(toc);
  const { currentIndex } = useSubPageHook();

  useEffect(() => {
    if (metadata.frontMatter['doc-type'] !== 'component') {
      return;
    }

    let _nestedToc = toc[currentIndex];
    if (_nestedToc) {
      setNestedToc(_nestedToc.children);
    }
  }, [currentIndex, setNestedToc, metadata]);

  return (
    <>
      <Tree {...props} toc={nestedToc} />
    </>
  );
}
