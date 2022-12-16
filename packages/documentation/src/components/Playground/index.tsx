/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { useLocation } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { IxTabItem, IxTabs } from '@siemens/ix-react';
import GitHubImage from '@site/static/img/github.svg';
import StackBlitzImage from '@site/static/img/stackblitz.svg';
import React, { useEffect, useState } from 'react';
import Demo, { DemoProps } from '../Demo';
import { isTargetFramework, TargetFramework } from './framework-types';
import './playground.scss';
import { openGitHubFile, openStackBlitz } from './utils';

type MdxContent = ({}) => {};

function ButtonOpenGithub({
  name,
  framework,
}: {
  name: string;
  framework: TargetFramework;
}) {
  return (
    <button
      className="btn-icon-s btn btn-invisible-primary btn-icon btn-oval"
      onClick={() =>
        openGitHubFile({
          name,
          framework,
        })
      }
    >
      <GitHubImage />
    </button>
  );
}

function ButtonOpenStackBlitz({
  name,
  files,
  framework,
  baseUrl,
}: {
  name: string;
  baseUrl: string;
  files: string[];
  framework: TargetFramework;
}) {
  return (
    <button
      className="btn-icon-s btn btn-invisible-primary btn-icon btn-oval"
      onClick={() =>
        openStackBlitz({
          name,
          files,
          framework,
          baseUrl,
        })
      }
    >
      <StackBlitzImage />
    </button>
  );
}

function ButtonToggleCode({
  onClick,
  showCode,
}: {
  showCode: boolean;
  onClick: React.MouseEventHandler<HTMLIxIconButtonElement>;
}) {
  return (
    <ix-button onClick={onClick} ghost>
      {showCode ? 'Hide Code' : 'Show Code'}
    </ix-button>
  );
}

interface PlaygroundProps {
  hideInitalCodePreview?: boolean;
  frameworks?: {
    react?: Record<string, MdxContent> | MdxContent;
    angular?: Record<string, MdxContent> | MdxContent;
    webcomponents?: Record<string, MdxContent> | MdxContent;
  };
}

function getPathId(pathname: string) {
  return `docusaurus.playground${pathname.replace(/\//g, '.')}`;
}

function FileTabs(props: {
  files: {
    filename: string;
    node: React.ReactNode;
  }[];
}) {
  const [selectedTab, setSelectedTab] = useState(props.files[0].filename);
  const changeTab = (filename: string) => setSelectedTab(filename);

  function getCode() {
    const SourceNode = props.files.find((f) => f.filename === selectedTab)
      ?.node as any;

    if (!SourceNode) {
      return null;
    }

    return <SourceNode></SourceNode>;
  }

  return (
    <>
      <IxTabs>
        {props.files.map((source) => {
          const SourceNode = source.node as any;
          return (
            <IxTabItem
              key={source.filename}
              onClick={() => changeTab(source.filename)}
            >
              {source.filename}
            </IxTabItem>
          );
        })}
      </IxTabs>
      {getCode()}
    </>
  );
}

export default function Playground({
  name,
  height,
  noMargin,
  theme,
  frameworks,
  hideInitalCodePreview,
}: DemoProps & PlaygroundProps) {
  const { pathname } = useLocation();
  const baseUrl = useBaseUrl('/');
  const [showCode, setShowCode] = useState<boolean>(!hideInitalCodePreview);

  const [targetFramework, setTargetFramework] = useState<TargetFramework>(
    TargetFramework.ANGULAR
  );

  const [sourceCodeSnippets, setSourceCodeSnippets] = useState<
    Record<
      TargetFramework,
      Array<{
        filename: string;
        node: React.ReactNode;
      }>
    >
  >();

  useEffect(() => {
    const id = getPathId(pathname);
    const localStorageItem = localStorage.getItem(id);
    if (localStorageItem && isTargetFramework(localStorageItem)) {
      setTargetFramework(localStorageItem);
    }
  }, []);

  useEffect(() => {
    const snippets: Record<
      TargetFramework,
      Array<{
        filename: string;
        node: React.ReactNode;
      }>
    > = {} as any;
    Object.keys(frameworks).forEach((framework) => {
      if (typeof frameworks[framework] === 'function') {
        let filename = name;
        if (framework === TargetFramework.REACT) {
          filename = filename.concat('.tsx');
        }
        if (framework === TargetFramework.JAVASCRIPT) {
          filename = filename.concat('.html');
        }
        if (framework === TargetFramework.ANGULAR) {
          filename = filename.concat('.ts');
        }

        snippets[framework] = [
          {
            filename,
            node: frameworks[framework]({}),
          },
        ];
      }

      if (typeof frameworks[framework] === 'object') {
        if (!snippets[framework]) {
          snippets[framework] = [];
        }

        Object.keys(frameworks[framework]).forEach((fileName) => {
          snippets[framework].push({
            filename: fileName,
            node: frameworks[framework][fileName],
          });
        });
      }
    });
    setSourceCodeSnippets(snippets);
  }, [frameworks, setSourceCodeSnippets]);

  const changeFramework = (framework: TargetFramework) => {
    setTargetFramework(framework);
    if (pathname) {
      localStorage.setItem(
        `docusaurus.playground${pathname.replace(/\//g, '.')}`,
        framework
      );
    }
  };

  function renderSourceCodeSnippet(): React.ReactNode {
    if (!sourceCodeSnippets || !sourceCodeSnippets[targetFramework]) {
      return null;
    }
    if (sourceCodeSnippets[targetFramework].length === 1) {
      const [{ node }] = sourceCodeSnippets[targetFramework];
      return node;
    }

    return <FileTabs files={sourceCodeSnippets[targetFramework]} />;
  }

  function getFileNames() {
    if (!sourceCodeSnippets) {
      return [];
    }

    return sourceCodeSnippets[targetFramework].map((file) => file.filename);
  }

  return (
    <div className="Playground">
      <div className="Playground__Toolbar Location__Top">
        <div className="Playground__Toolbar__Actions">
          <ButtonToggleCode
            onClick={() => setShowCode(!showCode)}
            showCode={showCode}
          />
        </div>
      </div>
      <Demo name={name} height={height} noMargin={noMargin} theme={theme} />
      {showCode ? (
        <>
          <div className="Playground__Toolbar Location__Bottom">
            <ix-button
              ghost={targetFramework !== TargetFramework.ANGULAR}
              onClick={() => changeFramework(TargetFramework.ANGULAR)}
            >
              Angular
            </ix-button>
            <ix-button
              ghost={targetFramework !== TargetFramework.REACT}
              onClick={() => changeFramework(TargetFramework.REACT)}
            >
              React
            </ix-button>
            <ix-button
              ghost={targetFramework !== TargetFramework.JAVASCRIPT}
              onClick={() => changeFramework(TargetFramework.JAVASCRIPT)}
            >
              JavaScript
            </ix-button>
            <div className="Playground__Toolbar__Actions">
              <ButtonOpenGithub name={name} framework={targetFramework} />
              <ButtonOpenStackBlitz
                name={name}
                framework={targetFramework}
                baseUrl={baseUrl}
                files={getFileNames()}
              />
            </div>
          </div>
          {renderSourceCodeSnippet()}
        </>
      ) : null}
    </div>
  );
}
