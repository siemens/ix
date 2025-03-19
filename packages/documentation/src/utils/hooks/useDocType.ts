/*
 * COPYRIGHT (c) Siemens AG 2018-2024 ALL RIGHTS RESERVED.
 */
import { useDoc } from '@docusaurus/plugin-content-docs/client';

export function useDocType(): 'default' | 'component' | 'banner' | undefined {
  const { metadata } = useDoc();

  return metadata.frontMatter['doc-type'] as any;
}
