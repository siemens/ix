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
import { IxButton, IxTabItem, IxTabs } from '@siemens/ix-react';
import GitHubImage from '@site/static/img/github.svg';
import StackBlitzImage from '@site/static/img/stackblitz.svg';
import React, { useEffect, useMemo, useState } from 'react';
import Demo, { DemoProps } from '../Demo';
import { TargetFramework } from './framework-types';
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
  availableFrameworks?: TargetFramework[];
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

function getDefaultTargetFramework(availableFrameworks?: TargetFramework[]) {
  if (!availableFrameworks) {
    return TargetFramework.PREVIEW;
  }
  return (
    (availableFrameworks.length !== 0 ? availableFrameworks[0] : undefined) ||
    TargetFramework.PREVIEW
  );
}

export default function Playground({
  name,
  height,
  noMargin,
  theme,
  frameworks,
  availableFrameworks,
}: DemoProps & PlaygroundProps) {
  const { pathname: _pathname } = useLocation();
  const baseUrl = useBaseUrl('/');
  const [showCode, setShowCode] = useState<boolean>(!false);

  const [targetFramework, setTargetFramework] = useState<TargetFramework>(
    getDefaultTargetFramework(availableFrameworks)
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

  const pathname = useMemo(
    () => getPathId(_pathname + name),
    [name, _pathname]
  );

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
  };

  function renderSourceCodeSnippet(): React.ReactNode {
    if (targetFramework === TargetFramework.PREVIEW) {
      return (
        <Demo name={name} height={height} noMargin={noMargin} theme={theme} />
      );
    }
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

    if (targetFramework === TargetFramework.PREVIEW) {
      return [];
    }

    return sourceCodeSnippets[targetFramework].map((file) => file.filename);
  }

  function isFrameworkConfigured(framework: TargetFramework) {
    if (framework === TargetFramework.PREVIEW) {
      return true;
    }
    if (!availableFrameworks) {
      return true;
    }
    return (
      availableFrameworks.length === 0 ||
      availableFrameworks.includes(framework)
    );
  }

  return (
    <div className="Playground">
      {showCode ? (
        <>
          <div className="Playground__Toolbar Location__Bottom">
            <IxButton
              className="Playground__Framework__Button"
              ghost={targetFramework !== TargetFramework.PREVIEW}
              onClick={() => changeFramework(TargetFramework.PREVIEW)}
            >
              Preview
            </IxButton>
            {isFrameworkConfigured(TargetFramework.ANGULAR) ? (
              <IxButton
                className="Playground__Framework__Button"
                ghost={targetFramework !== TargetFramework.ANGULAR}
                onClick={() => changeFramework(TargetFramework.ANGULAR)}
              >
                Angular
              </IxButton>
            ) : null}

            {isFrameworkConfigured(TargetFramework.REACT) ? (
              <IxButton
                className="Playground__Framework__Button"
                ghost={targetFramework !== TargetFramework.REACT}
                onClick={() => changeFramework(TargetFramework.REACT)}
              >
                React
              </IxButton>
            ) : null}

            {isFrameworkConfigured(TargetFramework.JAVASCRIPT) ? (
              <IxButton
                className="Playground__Framework__Button"
                ghost={targetFramework !== TargetFramework.JAVASCRIPT}
                onClick={() => changeFramework(TargetFramework.JAVASCRIPT)}
              >
                JavaScript
              </IxButton>
            ) : null}

            <div className="Playground__Toolbar__Actions">
              {targetFramework !== TargetFramework.PREVIEW ? (
                <>
                  <ButtonOpenGithub name={name} framework={targetFramework} />
                  <ButtonOpenStackBlitz
                    name={name}
                    framework={targetFramework}
                    baseUrl={baseUrl}
                    files={getFileNames()}
                  />
                </>
              ) : null}
            </div>
          </div>
          {renderSourceCodeSnippet()}
        </>
      ) : null}
    </div>
  );
}
