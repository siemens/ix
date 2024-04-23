/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
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
import { openStackBlitz, SourceFile } from './utils';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function getBranchPath(framework: TargetFramework) {
  let path = 'html';

  const branch = 'main';

  if (framework === TargetFramework.ANGULAR) {
    path = 'angular';
  }

  if (framework === TargetFramework.REACT) {
    path = 'react';
  }

  if (framework === TargetFramework.VUE) {
    path = 'vue';
  }

  return `siemens/ix/tree/${branch}/packages/${path}-test-app`;
}

function stripHeader(code: string) {
  return code
    .replace(/\/\*[^]*?\*\//gs, '')
    .replace(/<!--[^]*?-->/gs, '')
    .trim();
}

function extractCodePart(code: string, limiter: RegExp) {
  const limiterMatches = code.match(limiter);

  if (limiterMatches && limiterMatches.length === 2) {
    const [_, intermediate] = code.split(limiter);

    return stripHeader(
      intermediate
        .split('\n')
        .map((line) => line.replace(/[ ]{4}/, ''))
        .join('\n')
        .trim()
    );
  }

  return '';
}

function sliceHtmlCode(code: string) {
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

  return stripHeader(code);
}

async function fetchSource(path: string) {
  console.log('FETCH SOURCE FROM', path);
  const response = await fetch(`${path}.txt`);
  const source = await response.text();

  // Docusaurus don' throw a classic 404 if a sub route is not found
  // Check if the response is the bootstrap code of docusaurus
  // If this is the case the resource is not existing
  console.log(source);
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
          `${path}/previews/${frameworkPath}/${file}`
        );

        if (!source) {
          return null;
        }

        return {
          filename: file,
          source: sliceHtmlCode(source),
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
}

type PlaygroundV2Props = {
  files: Record<TargetFramework, string[]>;
  examplesByName?: boolean;
} & DemoProps;

function SourceCodePreview(props: {
  framework: TargetFramework;
  name: string;
  files?: Record<TargetFramework, string[]>;
  examplesByName?: boolean;
  onSourceCodeFetched: (files: SourceFile[]) => void;
}) {
  const [isFetching, setFetching] = useState(true);

  const baseUrl = useBaseUrl('/auto-generated');

  const [files, setFiles] = useState<SourceFile[]>([]);
  const [selectedFile, setSelectedFile] = useState<number>(0);

  useEffect(() => {
    if (props.examplesByName) {
      let filesToFetch = [];

      if (props.framework === TargetFramework.ANGULAR) {
        filesToFetch = [`${props.name}.ts`, `${props.name}.html`];
      }

      if (props.framework === TargetFramework.JAVASCRIPT) {
        filesToFetch = [`${props.name}.html`];
      }

      if (props.framework === TargetFramework.REACT) {
        filesToFetch = [`${props.name}.tsx`];
      }

      if (props.framework === TargetFramework.VUE) {
        filesToFetch = [`${props.name}.vue`];
      }

      setFetching(true);
      fetchHTMLSource(baseUrl, props.framework, filesToFetch).then((files) => {
        setFiles(files.filter((f) => f));
        setFetching(false);
      });
      return;
    }
    if (props.files && props.files[props.framework]) {
      const filesToFetch = props.files[props.framework];

      setFetching(true);
      fetchHTMLSource(baseUrl, props.framework, filesToFetch).then((files) => {
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
          examplesByName={props.examplesByName}
        ></SourceCodePreview>
      ) : null}
    </div>
  );
}
