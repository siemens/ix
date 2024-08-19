/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import useBaseUrl from '@docusaurus/useBaseUrl';
import { IxIconButton, IxSpinner, IxTabItem, IxTabs } from '@siemens/ix-react';
import { useTheme } from '@site/src/utils/hooks/useTheme';
import CodeBlock from '@theme/CodeBlock';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import Demo, { DemoProps } from '../Demo';
import { getDisplay, TargetFramework } from '../PlaygroundV2/framework-types';
import {
  fetchSourceForAngular,
  getAngularTestAppGithubPath,
} from './angular-snippets';
import {
  fetchSourceForHtml,
  getJavascriptTestAppGithubPath,
} from './html-snippets';
import './playground.css';
import {
  fetchSourceForReact,
  getReactTestAppGithubPath,
} from './react-snippets';
import { fetchSourceForVue, getVueTestAppGithubPath } from './vue-snippets';
import { docusaurusFetch } from './fetching';

function EmptyCodeSnippet() {
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

function useUrlMapper(activeFramework: TargetFramework) {
  const baseUrl = useBaseUrl('auto-generated/previews');
  if (activeFramework === TargetFramework.ANGULAR) {
    return `${baseUrl}/angular`;
  }

  if (activeFramework === TargetFramework.REACT) {
    return `${baseUrl}/react`;
  }

  if (activeFramework === TargetFramework.VUE) {
    return `${baseUrl}/vue`;
  }

  if (activeFramework === TargetFramework.JAVASCRIPT) {
    return `${baseUrl}/web-components`;
  }
}

function useSnippetFetcher(
  activeFramework: TargetFramework,
  name: string,
  alternativeSnippets?: Record<TargetFramework, string[]>,
  preventDefaultExample?: boolean
): {
  isFetching: boolean;
  hasError: boolean;
  snippets: Record<string, string>;
} {
  const [isFetching, setIsFetching] = useState(false);
  const [hasError] = useState(false);
  const [snippets, setSnippets] = useState<Record<string, string>>({});
  const url = useUrlMapper(activeFramework);

  useEffect(() => {
    let fetchExamplePreview$: Promise<Record<string, string>> | null = null;
    let fetchAdditionalFiles$: Promise<Record<string, string>> | null = null;
    if (activeFramework === TargetFramework.PREVIEW) {
      return;
    }

    setIsFetching(true);

    if (!preventDefaultExample) {
      if (activeFramework === TargetFramework.ANGULAR) {
        fetchExamplePreview$ = fetchSourceForAngular(url, name);
      }

      if (activeFramework === TargetFramework.REACT) {
        fetchExamplePreview$ = fetchSourceForReact(url, name);
      }

      if (activeFramework === TargetFramework.VUE) {
        fetchExamplePreview$ = fetchSourceForVue(url, name);
      }

      if (activeFramework === TargetFramework.JAVASCRIPT) {
        fetchExamplePreview$ = fetchSourceForHtml(url, name);
      }

      if (!fetchExamplePreview$) {
        fetchExamplePreview$ = Promise.resolve({});
      }
    }

    if (alternativeSnippets && alternativeSnippets[activeFramework]) {
      fetchAdditionalFiles$ = new Promise((resolve, reject) => {
        const _snippets: Record<string, string> = {};
        Promise.all(
          alternativeSnippets[activeFramework].map(async (file) => {
            try {
              const data = await docusaurusFetch(`${url}/${file}`);
              _snippets[file] = data;
            } catch (error) {
              reject(error);
            }
          })
        ).then(() => {
          resolve(_snippets);
        });
      });
    } else {
      fetchAdditionalFiles$ = Promise.resolve({});
    }

    Promise.all([fetchExamplePreview$, fetchAdditionalFiles$]).then(
      ([data1, data2]) => {
        setIsFetching(false);
        setSnippets({
          ...data1,
          ...data2,
        });
      }
    );
  }, [activeFramework, url, alternativeSnippets, preventDefaultExample]);

  return {
    isFetching,
    snippets,
    hasError,
  };
}

function SnippetPreview(props: { snippets: Record<string, string> }) {
  const [activeFile, setActiveFile] = useState<string | null>(
    Object.keys(props.snippets)[0]
  );

  const language = useMemo(() => {
    const _language = activeFile.split('.').pop();
    if (!_language) {
      return 'ts';
    }
    if (_language === 'vue') {
      return 'tsx';
    }

    return _language;
  }, [activeFile]);

  const code = useMemo(() => {
    return props.snippets[activeFile] || '';
  }, [activeFile, props.snippets]);

  useEffect(() => {
    setActiveFile(Object.keys(props.snippets)[0]);
  }, [props.snippets, setActiveFile]);

  return (
    <>
      <IxTabs>
        {Object.keys(props.snippets).map((key, i) => (
          <IxTabItem
            key={key}
            selected={i === 0}
            onClick={() => setActiveFile(key)}
          >
            {key}
          </IxTabItem>
        ))}
      </IxTabs>
      <CodeBlock language={language}>{code}</CodeBlock>
    </>
  );
}

function ToolbarButtons(props: {
  name: string;
  activeFramework: TargetFramework;
  noMargin: boolean;
  snippets: Record<string, string>;
}) {
  const theme = useTheme();
  const baseUrl = useBaseUrl('/');
  const baseUrlAssets = useBaseUrl('/img');
  const iframe = useBaseUrl('/webcomponent-examples/dist/preview-examples');

  return (
    <>
      {props.activeFramework === TargetFramework.PREVIEW ? (
        <IxIconButton
          ghost
          size="16"
          icon={`open-external`}
          onClick={() => {
            const noMargin: string = props.noMargin ? '&no-margin=true' : '';
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
            icon={`${baseUrlAssets}/github.svg`}
            onClick={() => {
              if (props.activeFramework === TargetFramework.ANGULAR) {
                window.open(
                  `https://github.com/${getAngularTestAppGithubPath(
                    props.name
                  )}`
                );
              }

              if (props.activeFramework === TargetFramework.REACT) {
                window.open(
                  `https://github.com/${getReactTestAppGithubPath(props.name)}`
                );
              }

              if (props.activeFramework === TargetFramework.VUE) {
                window.open(
                  `https://github.com/${getVueTestAppGithubPath(props.name)}`
                );
              }

              if (props.activeFramework === TargetFramework.JAVASCRIPT) {
                window.open(
                  `https://github.com/${getJavascriptTestAppGithubPath(
                    props.name
                  )}`
                );
              }
            }}
          ></IxIconButton>
        </>
      )}
    </>
  );
}

function CodePreview(props: {
  isFetching: boolean;
  hasError?: boolean;
  snippets: Record<string, string>;
}) {
  if (props.hasError) {
    return <EmptyCodeSnippet />;
  }
  if (props.isFetching || Object.keys(props.snippets).length === 0) {
    return <IxSpinner></IxSpinner>;
  }

  return <SnippetPreview snippets={props.snippets} />;
}

export type PlaygroundV3Props = {
  frameworks?: TargetFramework[];
  preventDefaultExample?: boolean;
  additionalFiles?: Record<TargetFramework, string[]>;
} & DemoProps;

export default function PlaygroundV3(props: PlaygroundV3Props) {
  const [activeFramework, setActiveFramework] = React.useState<TargetFramework>(
    TargetFramework.PREVIEW
  );

  const { isFetching, hasError, snippets } = useSnippetFetcher(
    activeFramework,
    props.name,
    props.additionalFiles,
    props.preventDefaultExample
  );

  function onActiveFrameworkChange(framework: TargetFramework) {
    setActiveFramework(framework);
  }

  const showCode = activeFramework !== TargetFramework.PREVIEW;

  return (
    <div className="Playground">
      <div className="Toolbar">
        <IxTabs>
          <IxTabItem
            onClick={() => onActiveFrameworkChange(TargetFramework.PREVIEW)}
          >
            Preview
          </IxTabItem>
          {[
            TargetFramework.ANGULAR,
            TargetFramework.REACT,
            TargetFramework.VUE,
            TargetFramework.JAVASCRIPT,
          ]
            .filter((framework) => {
              if (!props.frameworks) {
                return true;
              }

              if (props.frameworks.length === 0) {
                return true;
              }

              return props.frameworks.includes(framework);
            })
            .map((framework) => {
              return (
                <IxTabItem
                  key={framework}
                  onClick={() => onActiveFrameworkChange(framework)}
                >
                  {getDisplay(framework)}
                </IxTabItem>
              );
            })}
        </IxTabs>

        <div className="Interaction">
          <ToolbarButtons
            name={props.name}
            activeFramework={activeFramework}
            noMargin={false}
            snippets={snippets}
          ></ToolbarButtons>
        </div>
      </div>

      {activeFramework === TargetFramework.PREVIEW ? (
        <Demo {...props} />
      ) : (
        <CodePreview
          isFetching={isFetching}
          hasError={hasError}
          snippets={snippets}
        ></CodePreview>
      )}
    </div>
  );
}
