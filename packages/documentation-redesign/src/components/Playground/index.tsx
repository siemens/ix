/*
 * COPYRIGHT (c) Siemens AG 2018-2024 ALL RIGHTS RESERVED.
 */
import { useState } from 'react';
import ThemeFrame from '../ThemeFrame';
import styles from './styles.module.css';
import CodePreview, {
  CodePreviewFiles,
  CodePreviewProps,
  SourceFiles,
} from '../CodePreview';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Playground(props: {
  name: string;
  files: CodePreviewFiles;
  source: SourceFiles;
  height?: string;
}) {
  const iframeSrc = useBaseUrl(
    `/demo/v2/preview/html/preview-examples/${props.name}.html?no-margin=true`
  );

  return (
    <div className={styles.playground}>
      <ThemeFrame height={props.height}>
        <iframe src={iframeSrc} className={styles.iframe}></iframe>
      </ThemeFrame>
      <CodePreview
        name={props.name}
        files={props.files}
        source={props.source}
      />
    </div>
  );
}
