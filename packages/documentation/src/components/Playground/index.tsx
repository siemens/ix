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
  framework,
  baseUrl,
}: {
  baseUrl: string;
  name: string;
  framework: TargetFramework;
}) {
  return (
    <button
      className="btn-icon-s btn btn-invisible-primary btn-icon btn-oval"
      onClick={() =>
        openStackBlitz({
          name,
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
}: {
  onClick: React.MouseEventHandler<HTMLIxIconButtonElement>;
}) {
  return (
    <ix-icon-button
      onClick={onClick}
      icon="document-reference"
      oval
      ghost
      size="16"
    ></ix-icon-button>
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

  const [sourceCodeSnippets, setSourceCodeSnippets] =
    useState<Record<TargetFramework, React.ReactNode>>();

  useEffect(() => {
    const id = getPathId(pathname);
    const localStorageItem = localStorage.getItem(id);
    if (localStorageItem && isTargetFramework(localStorageItem)) {
      setTargetFramework(localStorageItem);
    }
  }, []);

  useEffect(() => {
    const snippets: Record<TargetFramework, React.ReactNode> = {} as any;

    Object.keys(frameworks).forEach((framework) => {
      snippets[framework] = frameworks[framework]({});
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

  function renderSourceCodeSnippet() {
    if (!sourceCodeSnippets || !sourceCodeSnippets[targetFramework]) {
      return null;
    }

    return sourceCodeSnippets[targetFramework];
  }

  return (
    <div className="Playground">
      <div className="Playground__Toolbar">
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
          <ButtonToggleCode onClick={() => setShowCode(!showCode)} />
          <ButtonOpenGithub name={name} framework={targetFramework} />
          <ButtonOpenStackBlitz
            name={name}
            framework={targetFramework}
            baseUrl={baseUrl}
          />
        </div>
      </div>
      <Demo name={name} height={height} noMargin={noMargin} theme={theme} />
      {showCode ? renderSourceCodeSnippet() : null}
    </div>
  );
}
