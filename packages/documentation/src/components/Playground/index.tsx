/*
 * COPYRIGHT (c) Siemens AG 2018-2024 ALL RIGHTS RESERVED.
 */
import { useColorMode } from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { iconOpenExternal } from '@siemens/ix-icons/icons';
import { FrameworkTypes } from '@site/src/hooks/use-framework';
import CodeBlock from '@theme/CodeBlock';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import CodePreview, { CodePreviewFiles, SourceFiles } from '../CodePreview';
import FrameworkSelection from '../UI/FrameworkSelection';
import OpenStackblitz from '../UI/OpenStackblitz';
import Pill from '../UI/Pill';
import ThemeSelection, { useDefaultTheme } from '../UI/ThemeSelection';
import ThemeVariantToggle from '../UI/ThemeVariantToggle';
import styles from './styles.module.css';

function PreviewActions(props: {
  colorModeLight: boolean;
  openExternalUrl: string;
  onChangeColorMode: () => void;
  onChangeTheme: (theme: string) => void;
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
      <ThemeSelection onThemeChange={props.onChangeTheme} />
      <ThemeVariantToggle
        isLight={props.colorModeLight}
        onChangeColorMode={props.onChangeColorMode}
      />
    </>
  );
}

function CodeActions(props: {
  mount: string;
  hideFrameworkSelection: boolean;
  framework: FrameworkTypes;
  files: Record<string, string>;
  onFrameworkChange: (framework: FrameworkTypes) => void;
}) {
  return (
    <>
      <OpenStackblitz
        framework={props.framework}
        files={props.files}
        mount={props.mount}
      />
      {!props.hideFrameworkSelection && (
        <FrameworkSelection onFrameworkChange={props.onFrameworkChange} />
      )}
    </>
  );
}

export default function Playground(props: {
  name: string;
  files: CodePreviewFiles;
  source: SourceFiles;
  height?: string;
  noPreview?: boolean;
  onlyFramework?: FrameworkTypes;
}) {
  const defaultTheme = useDefaultTheme();
  const { colorMode } = useColorMode();
  const [isDark, setIsDark] = useState(colorMode === 'dark');
  const [isPreview, setIsPreview] = useState(!props.noPreview);
  const [theme, setTheme] = useState(defaultTheme);
  const iframeSrc = useBaseUrl(
    `/demo/v2/preview/html/preview-examples/${
      props.name
    }.html?no-margin=true&theme=theme-${theme}-${isDark ? 'dark' : 'light'}`
  );
  const [framework, setFramework] = useState<FrameworkTypes>(
    props.onlyFramework ?? 'angular'
  );
  const [SourceCode, setSourceCode] = useState<React.FC>(() => () => (
    <CodeBlock children={['Nothing to see here 🥸']}></CodeBlock>
  ));

  useEffect(() => {
    setIsDark(colorMode === 'dark');
  }, [colorMode]);

  return (
    <div className={styles.playground}>
      <div className={styles.toolbar}>
        {!props.noPreview && (
          <>
            <Pill onClick={() => setIsPreview(true)} active={isPreview}>
              Preview
            </Pill>
            <Pill onClick={() => setIsPreview(false)} active={!isPreview}>
              Code
            </Pill>
            <div className={styles.spacer}></div>
          </>
        )}

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
              colorModeLight={!isDark}
              openExternalUrl={iframeSrc}
              onChangeColorMode={() => setIsDark(!isDark)}
              onChangeTheme={setTheme}
            />
          ) : (
            <CodeActions
              mount={props.name}
              hideFrameworkSelection={!!props.onlyFramework}
              onFrameworkChange={setFramework}
              framework={framework}
              files={props.files[framework]}
            />
          )}
        </div>
      </div>
      <div
        className={clsx(styles.preview, {
          [styles.code]: isPreview,
        })}
        style={{ ['--preview-height']: props.height } as any}
      >
        {isPreview ? (
          <iframe src={iframeSrc} className={styles.iframe}></iframe>
        ) : (
          <SourceCode />
        )}
      </div>
    </div>
  );
}
