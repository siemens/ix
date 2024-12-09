/*
 * COPYRIGHT (c) Siemens AG 2018-2024 ALL RIGHTS RESERVED.
 */
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import Tree from '@theme-original/TOCItems/Tree';
import type TreeType from '@theme/TOCItems/Tree';
import type { WrapperProps } from '@docusaurus/types';
import { useSubPageHook } from '@site/src/components/theme/QueryStringContent';
import { c } from '@site/static/demo/v2/assets/_commonjsHelpers-e557d4a5.97812a83';

type Props = WrapperProps<typeof TreeType>;

export default function TreeWrapper(props: Props): JSX.Element {
  const { metadata } = useDoc();
  const toc = props.toc;
  const [nestedToc, setNestedToc] = useState<readonly any[]>(toc);
  const { currentIndex } = useSubPageHook();
  const [tocOffset, setTocOffset] = useState(0);
  const tocRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (metadata.frontMatter['doc-type'] !== 'component') {
      return;
    }

    let _nestedToc = toc[currentIndex];
    if (_nestedToc) {
      setNestedToc([_nestedToc]);
    }
  }, [currentIndex, setNestedToc, metadata]);

  useLayoutEffect(() => {
    const onscroll = () => {
      const tocElement = tocRef.current;
      if (!tocElement) {
        return;
      }

      const scrollY = window.scrollY;
      const tocHeight = tocElement.offsetHeight;

      const nOffset = (scrollY / window.innerHeight) * 100;
      setTocOffset(Math.max(0, Math.min(100, nOffset)));
    };
    window.addEventListener('scroll', onscroll);

    return () => {
      window.removeEventListener('scroll', onscroll);
    };
  }, []);

  console.log('nestedToc', tocOffset);

  return (
    <div
      ref={tocRef}
      className="toc-indicator"
      style={
        {
          ['--toc-offset']: `${tocOffset}%`,
        } as unknown
      }
    >
      <Tree {...props} toc={nestedToc} />
    </div>
  );
}
