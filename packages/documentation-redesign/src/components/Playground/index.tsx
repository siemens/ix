/*
 * COPYRIGHT (c) Siemens AG 2018-2024 ALL RIGHTS RESERVED.
 */
import useBaseUrl from '@docusaurus/useBaseUrl';
import { iconOpenExternal } from '@siemens/ix-icons/icons';
import React, { useState } from 'react';
import CodePreview, { CodePreviewFiles, SourceFiles } from '../CodePreview';
import Pill from '../UI/Pill';
import ThemeVariantToggle from '../UI/ThemeVariantToggle';
import styles from './styles.module.css';
import ThemeSelection from '../UI/ThemeSelection';
import CodeBlock from '@theme/CodeBlock';
import FrameworkSelection from '../UI/FrameworkSelection';
import { FrameworkTypes } from '@site/src/hooks/use-framework';
import OpenStackblitz from '../UI/OpenStackblitz';

function PreviewActions(props: {
  openExternalUrl: string;
  onChangeColorMode: () => void;
}) {
  return (
    <>
      <a
        href={props.openExternalUrl}
        target="_blank"
        className="flex gap-1 text-[var(--theme-color-soft-text)]"
      >
        {React.createElement('ix-icon', {
          name: iconOpenExternal,
        })}
        Full preview
      </a>
      <ThemeSelection />
      <ThemeVariantToggle onChangeColorMode={props.onChangeColorMode} />
    </>
  );
}

function CodeActions(props: {
  framework: FrameworkTypes;
  files: Record<string, string>;
  onFrameworkChange: (framework: FrameworkTypes) => void;
}) {
  return (
    <>
      <OpenStackblitz framework={props.framework} files={props.files} />
      <FrameworkSelection onFrameworkChange={props.onFrameworkChange} />
    </>
  );
}

export default function Playground(props: {
  name: string;
  files: CodePreviewFiles;
  source: SourceFiles;
  height?: string;
}) {
  const [isDark, setIsDark] = useState(true);
  const [isPreview, setIsPreview] = useState(true);
  const iframeSrc = useBaseUrl(
    `/demo/v2/preview/html/preview-examples/${
      props.name
    }.html?no-margin=true&theme=theme-brand-${isDark ? 'dark' : 'light'}`
  );
  const [framework, setFramework] = useState<FrameworkTypes>('angular');
  const [SourceCode, setSourceCode] = useState<React.FC>(() => () => (
    <CodeBlock children={['Nothing to see here 🥸']}></CodeBlock>
  ));

  return (
    <div className={styles.playground} style={{ height: props.height }}>
      <div className={styles.toolbar}>
        <Pill onClick={() => setIsPreview(true)} active={isPreview}>
          Preview
        </Pill>
        <Pill onClick={() => setIsPreview(false)} active={!isPreview}>
          Code
        </Pill>

        <div className={styles.spacer}></div>

        {!isPreview && (
          <CodePreview
            selectedFramework={framework}
            name={props.name}
            files={props.files}
            source={props.source}
            onShowSource={(source) => {
              setSourceCode(() => source);
            }}
          ></CodePreview>
        )}

        <div className={styles.toolbar__actions}>
          {isPreview ? (
            <PreviewActions
              openExternalUrl={iframeSrc}
              onChangeColorMode={() => setIsDark(!isDark)}
            />
          ) : (
            <CodeActions
              onFrameworkChange={setFramework}
              framework={framework}
              files={props.files[framework]}
            />
          )}
        </div>
      </div>
      <div className={styles.preview}>
        {isPreview ? (
          <iframe src={iframeSrc} className={styles.iframe}></iframe>
        ) : (
          <SourceCode />
        )}
      </div>
    </div>
  );
}
