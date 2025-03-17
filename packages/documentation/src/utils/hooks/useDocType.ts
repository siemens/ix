/*
 * COPYRIGHT (c) Siemens AG 2018-2024 ALL RIGHTS RESERVED.
 */
import { useDoc } from '@docusaurus/plugin-content-docs/client';

export function useDocType(): 'default' | 'component' | undefined {
  const { metadata } = useDoc();
  if (
    metadata.frontMatter['component-tabs'] &&
    Array.isArray(metadata.frontMatter['component-tabs'])
  ) {
    return metadata.frontMatter['doc-type'] as any;
  }

  return;
}
