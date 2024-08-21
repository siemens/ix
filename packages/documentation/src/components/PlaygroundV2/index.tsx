/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import useBaseUrl from '@docusaurus/useBaseUrl';
import { themeSwitcher } from '@siemens/ix';
import { IxIconButton, IxSpinner, IxTabItem, IxTabs } from '@siemens/ix-react';
import CodeBlock from '@theme/CodeBlock';
import { useEffect, useState } from 'react';
import { TargetFramework } from './framework-types';
import Demo, { DemoProps } from './../Demo';
import styles from './styles.module.css';
import {
  replaceStyleFilepath,
  SourceFile,
  getBranchPath,
  stripComments,
  openStackBlitz,
} from './utils';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function extractCodePart(code: string, limiter: RegExp) {
  const limiterMatches = code.match(limiter);

  if (limiterMatches && limiterMatches.length === 2) {
    const [_, intermediate] = code.split(limiter);

    return stripComments(
      intermediate
        .split('\n')
        .map((line) => line.replace(/[ ]{4}/, ''))
        .join('\n')
        .trim()
    );
  }

  return '';
}

function sliceCode(code: string) {
  const previewCode = extractCodePart(code, /<!-- Preview code -->/g);

  if (previewCode) {
    const headerSources = extractCodePart(code, /<!-- Sources -->/g);

    if (headerSources) {
      return (
        '<!-- Include in header -->\n' +
        headerSources +
        '\n<!-- Include in header -->\n\n' +
        previewCode
      );
    }

    return previewCode;
  }

  return stripComments(code);
}

function adaptCode(code: string) {
  return replaceStyleFilepath(sliceCode(code), true).source;
}

async function fetchSource(path: string) {
  const response = await fetch(`${path}`);
  const source = await response.text();

  // Docusaurus don' throw a classic 404 if a sub route is not found
  // Check if the response is the bootstrap code of docusaurus
  // If this is the case the resource is not existing
  if (
    !source ||
    source?.includes('<div id="__docusaurus"></div>') ||
    source?.includes('Page Not Found')
  ) {
    return null;
  }

  return source;
}

async function fetchHTMLSource(
  path: string,
  framework: TargetFramework,
  files: string[]
) {
  let frameworkPath = 'web-components';

  if (framework === TargetFramework.ANGULAR) {
    frameworkPath = 'angular';
  }

  if (framework === TargetFramework.REACT) {
    frameworkPath = 'react';
  }

  if (framework === TargetFramework.VUE) {
    frameworkPath = 'vue';
  }

  return Promise.all(
    files.map(async (file) => {
      try {
        const source = await fetchSource(
          getLanguage(file) === 'css'
            ? `${path}/previews/styles/${file}`
            : `${path}/previews/${frameworkPath}/${file}`
        );

        if (!source) {
          return null;
        }

        return {
          filename: file,
          source: adaptCode(source),
          raw: source,
        };
      } catch (e) {
        console.warn(e);
      }
    })
  );
}

function getLanguage(filename: string) {
  if (filename.endsWith('.html')) {
    return 'html';
  }

  if (filename.endsWith('.ts')) {
    return 'ts';
  }

  if (filename.endsWith('.tsx')) {
    return 'tsx';
  }

  if (filename.endsWith('.vue')) {
    return 'tsx';
  }

  if (filename.endsWith('.css')) {
    return 'css';
  }
}

type PlaygroundV2Props = {
  files: Record<TargetFramework, string[]>;
  includeCssFile?: boolean;
  examplesByName?: boolean;
  disableStackBlitz?: boolean;
} & DemoProps;

function SourceCodePreview(props: {
  framework: TargetFramework;
  name: string;
  files?: Record<TargetFramework, string[]>;
  includeCssFile?: boolean;
  examplesByName?: boolean;
  onSourceCodeFetched: (files: SourceFile[]) => void;
}) {
  const [isFetching, setFetching] = useState(true);

  const baseUrl = useBaseUrl('/auto-generated');

  const [files, setFiles] = useState<SourceFile[]>([]);
  const [selectedFile, setSelectedFile] = useState<number>(0);

  useEffect(() => {
    if (props.examplesByName) {
      const filesToFetch = [];

      if (props.framework === TargetFramework.ANGULAR) {
        filesToFetch.push(...[`${props.name}.html`, `${props.name}.ts`]);
      }

      if (props.framework === TargetFramework.JAVASCRIPT) {
        filesToFetch.push(`${props.name}.html`);
      }

      if (props.framework === TargetFramework.REACT) {
        filesToFetch.push(`${props.name}.tsx`);
      }

      if (props.framework === TargetFramework.VUE) {
        filesToFetch.push(`${props.name}.vue`);
      }

      if (props.includeCssFile) {
        filesToFetch.push(`${props.name}.css`);
      }

      setFetching(true);
      fetchHTMLSource(baseUrl, props.framework, filesToFetch).then((files) => {
        setSelectedFile(0);
        setFiles(files.filter((f) => f));
        setFetching(false);
      });
      return;
    }
    if (props.files && props.files[props.framework]) {
      const filesToFetch = props.files[props.framework];

      setFetching(true);
      fetchHTMLSource(baseUrl, props.framework, filesToFetch).then((files) => {
        setSelectedFile(0);
        setFiles(files.filter((f) => f));
        setFetching(false);
      });
    }
  }, [props.framework]);

  useEffect(() => {
    props.onSourceCodeFetched(files);
  }, [files]);

  if (isFetching) {
    return <IxSpinner></IxSpinner>;
  }

  if (files.length === 0) {
    return (
      <div
        style={{
          padding: '1rem',
        }}
      >
        There is no example code yet 😱
      </div>
    );
  }

  if (files.length === 1) {
    return (
      <CodeBlock language={getLanguage(files[0].filename)}>
        {files[0].source}
      </CodeBlock>
    );
  }

  return (
    <>
      <IxTabs>
        {files.map((file, index) => (
          <IxTabItem
            key={file.filename + '.' + index}
            onClick={() => setSelectedFile(index)}
          >
            {file.filename}
          </IxTabItem>
        ))}
      </IxTabs>
      <CodeBlock language={getLanguage(files[selectedFile].filename)}>
        {files[selectedFile].source}
      </CodeBlock>
    </>
  );
}

export default function PlaygroundV2(props: PlaygroundV2Props) {
  const [tab, setTab] = useState<TargetFramework>(TargetFramework.PREVIEW);
  const baseUrl = useBaseUrl('/');
  const baseUrlAssets = useBaseUrl('/img');
  const iframe = useBaseUrl('/webcomponent-examples/dist/preview-examples');
  const [files, setFiles] = useState<SourceFile[]>([]);
  const context = useDocusaurusContext();
  const versionDeployment = context.siteConfig.customFields
    .playgroundVersion as 'latest' | (string & {});

  const isTabVisible = (framework: TargetFramework) => {
    if (props.examplesByName) {
      return true;
    }

    return !!props.files[framework];
  };

  return (
    <div>
      <IxTabs>
        <IxTabItem onClick={() => setTab(TargetFramework.PREVIEW)}>
          Preview
        </IxTabItem>
        {isTabVisible(TargetFramework.ANGULAR) && (
          <IxTabItem onClick={() => setTab(TargetFramework.ANGULAR)}>
            Angular
          </IxTabItem>
        )}
        {isTabVisible(TargetFramework.REACT) && (
          <IxTabItem onClick={() => setTab(TargetFramework.REACT)}>
            React
          </IxTabItem>
        )}
        {isTabVisible(TargetFramework.VUE) && (
          <IxTabItem onClick={() => setTab(TargetFramework.VUE)}>Vue</IxTabItem>
        )}
        {isTabVisible(TargetFramework.JAVASCRIPT) && (
          <IxTabItem onClick={() => setTab(TargetFramework.JAVASCRIPT)}>
            Javascript
          </IxTabItem>
        )}

        <div className={styles.Files_Toolbar}>
          {tab === TargetFramework.PREVIEW ? (
            <IxIconButton
              ghost
              size="16"
              icon={`open-external`}
              onClick={() => {
                const theme: string = themeSwitcher.getCurrentTheme();
                const noMargin: string = props.noMargin
                  ? '&no-margin=true'
                  : '';

                window.open(
                  `${iframe}/${props.name}.html?theme=${theme}${noMargin}`
                );
              }}
            ></IxIconButton>
          ) : (
            <>
              {!props.disableStackBlitz && (
                <IxIconButton
                  ghost
                  size="16"
                  icon={`${baseUrlAssets}/stackblitz.svg`}
                  onClick={() => {
                    openStackBlitz({
                      baseUrl: baseUrl,
                      files: files,
                      framework: tab,
                      name: props.name,
                      version: versionDeployment,
                    });
                  }}
                ></IxIconButton>
              )}

              <IxIconButton
                ghost
                size="16"
                icon={`${baseUrlAssets}/github.svg`}
                onClick={() => {
                  window.open(`https://github.com/${getBranchPath(tab)}`);
                }}
              ></IxIconButton>
            </>
          )}
        </div>
      </IxTabs>
      {tab === TargetFramework.PREVIEW ? <Demo {...props}></Demo> : null}
      {tab !== TargetFramework.PREVIEW ? (
        <SourceCodePreview
          onSourceCodeFetched={(files) => setFiles(files)}
          framework={tab}
          name={props.name}
          files={props.files}
          includeCssFile={props.includeCssFile}
          examplesByName={props.examplesByName}
        ></SourceCodePreview>
      ) : null}
    </div>
  );
}
