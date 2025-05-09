/*
 * COPYRIGHT (c) Siemens AG 2018-2024 ALL RIGHTS RESERVED.
 */
import useBaseUrl from '@docusaurus/useBaseUrl';
import { iconOpenExternal } from '@siemens/ix-icons/icons';
import { FrameworkTypes } from '@site/src/hooks/use-framework';
import { usePlaygroundThemeVariant } from '@site/src/hooks/use-playground-theme';
import CodeBlock from '@theme/CodeBlock';
import clsx from 'clsx';
import React, { useContext, useEffect, useRef, useState } from 'react';
import CodePreview, { CodePreviewFiles, SourceFiles } from '../CodePreview';
import FrameworkSelection from '../UI/FrameworkSelection';
import OpenStackblitz from '../UI/OpenStackblitz';
import Pill from '../UI/Pill';
import ThemeSelection, { useDefaultTheme } from '../UI/ThemeSelection';
import ThemeVariantToggle from '../UI/ThemeVariantToggle';
import styles from './styles.module.css';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { PlaygroundContext } from '@site/src/context/playground-context';

const ColorContainerFix = ({ children }) => {
  const { theme, variant } = useContext(PlaygroundContext);
  const themeContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const themeContainer = themeContainerRef.current;
    if (!themeContainer) {
      return;
    }

    if (theme === 'brand') {
      themeContainer.classList.remove('color-table-classic-dark');
      themeContainer.classList.remove('color-table-classic-light');
      themeContainer.setAttribute('data-ix-theme', 'brand');
      themeContainer.setAttribute('data-ix-variant', variant);
    } else {
      themeContainer.removeAttribute('data-ix-theme');
      themeContainer.removeAttribute('data-ix-variant');
      themeContainer.className = `color-table-${theme}-${variant}`;
    }
  }, [theme, variant]);

  return <div ref={themeContainerRef}>{children}</div>;
};

function PreviewActions(
  props: Readonly<{
    openExternalUrl: string;
    onChangeTheme: (theme: string) => void;
  }>
) {
  return (
    <>
      <a
        href={props.openExternalUrl}
        target="_blank"
        className={clsx(
          'flex gap-1 text-[var(--theme-color-soft-text)] flex-nowrap text-nowrap pr-2',
          styles.openExternal
        )}
      >
        {React.createElement('ix-icon', {
          name: iconOpenExternal,
          size: '16',
        })}
        <span className="ButtonText">Full preview</span>
      </a>
      <ThemeSelection onThemeChange={props.onChangeTheme} />
      <ThemeVariantToggle />
    </>
  );
}

function CodeActions(
  props: Readonly<{
    mount: string;
    hideFrameworkSelection: boolean;
    framework: FrameworkTypes;
    files: Record<string, string>;
    onFrameworkChange: (framework: FrameworkTypes) => void;
  }>
) {
  return (
    <>
      <div className="DesktopOnly">
        <OpenStackblitz
          framework={props.framework}
          files={props.files}
          mount={props.mount}
        />
      </div>
      {!props.hideFrameworkSelection && (
        <FrameworkSelection onFrameworkChange={props.onFrameworkChange} />
      )}
    </>
  );
}

export type PlaygroundProps = Readonly<{
  name: string;
  files: CodePreviewFiles;
  source: SourceFiles;
  height?: string;
  noPreview?: boolean;
  onlyFramework?: FrameworkTypes;
}>;

function Playground(props: PlaygroundProps) {
  const defaultTheme = useDefaultTheme();
  const { playgroundThemeVariant } = usePlaygroundThemeVariant();
  const [isDark, setIsDark] = useState(playgroundThemeVariant === 'dark');
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
    <CodeBlock>Nothing to see here 🥸</CodeBlock>
  ));

  useEffect(() => {
    setIsDark(playgroundThemeVariant === 'dark');
  }, [playgroundThemeVariant]);

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

        <div className={styles.toolbar__right}>
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
      </div>
      <div
        className={clsx(styles.preview, {
          [styles.code]: isPreview,
        })}
        style={{ ['--preview-height']: props.height } as any}
      >
        {isPreview ? (
          <iframe
            title={`Preview for ${props.name}`}
            src={iframeSrc}
            className={styles.iframe}
          ></iframe>
        ) : (
          <SourceCode />
        )}
      </div>
    </div>
  );
}

export default function (props: PlaygroundProps) {
  return (
    <BrowserOnly>
      {() => (
        <ColorContainerFix>
          <Playground {...props} />
        </ColorContainerFix>
      )}
    </BrowserOnly>
  );
}
