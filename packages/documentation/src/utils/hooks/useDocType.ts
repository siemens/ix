/*
 * COPYRIGHT (c) Siemens AG 2018-2024 ALL RIGHTS RESERVED.
 */
import { useDoc } from '@docusaurus/plugin-content-docs/client';

export function useDocType():
  | 'default'
  | 'banner'
  | 'tabs'
  | 'tab-item'
  | undefined {
  const { metadata } = useDoc();

  return metadata.frontMatter['doc-type'] as any;
}
