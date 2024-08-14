/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { IxSpinner, IxTabItem, IxTabs } from '@siemens/ix-react';
import React, { useEffect, useMemo, useState } from 'react';
import './playground.css';
import { TargetFramework } from '../PlaygroundV2/framework-types';
import Demo from '../Demo';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { fetchSourceForAngular } from './angular-snippets';
import { fetchSourceForReact } from './react-snippets';
import { fetchSourceForVue } from './vue-snippets';
import { fetchSourceForHtml } from './html-snippets';
import CodeBlock from '@theme/CodeBlock';

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
  name: string
): [boolean, Record<string, string>] {
  const [isFetching, setIsFetching] = useState(false);
  const [snippets, setSnippets] = useState<Record<string, string>>({});
  const url = useUrlMapper(activeFramework);

  useEffect(() => {
    let fetching$: Promise<Record<string, string>> | null = null;

    if (activeFramework === TargetFramework.PREVIEW) {
      return;
    }

    setIsFetching(true);
    if (activeFramework === TargetFramework.ANGULAR) {
      fetching$ = fetchSourceForAngular(url, name);
    }

    if (activeFramework === TargetFramework.REACT) {
      fetching$ = fetchSourceForReact(url, name);
    }

    if (activeFramework === TargetFramework.VUE) {
      fetching$ = fetchSourceForVue(url, name);
    }

    if (activeFramework === TargetFramework.JAVASCRIPT) {
      fetching$ = fetchSourceForHtml(url, name);
    }

    if (fetching$) {
      fetching$.then((data) => {
        setIsFetching(false);
        setSnippets(data);
      });
    }
  }, [activeFramework, url]);

  return [isFetching, snippets];
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

export default function PlaygroundV3(props: { name: string; height?: string }) {
  const [activeFramework, setActiveFramework] = React.useState<TargetFramework>(
    TargetFramework.PREVIEW
  );

  const [isFetching, snippets] = useSnippetFetcher(activeFramework, props.name);

  function onActiveFrameworkChange(framework: TargetFramework) {
    setActiveFramework(framework);
  }

  const showCode = activeFramework !== TargetFramework.PREVIEW;

  return (
    <div className="Playground">
      <IxTabs>
        <IxTabItem
          onClick={() => onActiveFrameworkChange(TargetFramework.PREVIEW)}
        >
          Preview
        </IxTabItem>
        <IxTabItem
          onClick={() => onActiveFrameworkChange(TargetFramework.ANGULAR)}
        >
          Angular
        </IxTabItem>
        <IxTabItem
          onClick={() => onActiveFrameworkChange(TargetFramework.REACT)}
        >
          React
        </IxTabItem>
        <IxTabItem onClick={() => onActiveFrameworkChange(TargetFramework.VUE)}>
          Vue
        </IxTabItem>
        <IxTabItem
          onClick={() => onActiveFrameworkChange(TargetFramework.JAVASCRIPT)}
        >
          HTML
        </IxTabItem>
      </IxTabs>

      {isFetching && <IxSpinner></IxSpinner>}

      {showCode && !isFetching ? (
        Object.keys(snippets).length === 0 ? (
          <EmptyCodeSnippet />
        ) : (
          <SnippetPreview snippets={snippets} />
        )
      ) : (
        <Demo name={props.name} height={props.height} />
      )}
    </div>
  );
}
