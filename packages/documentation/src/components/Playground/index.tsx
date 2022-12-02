/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useEffect, useState } from 'react';
import Demo, { DemoProps } from '../Demo';
import { TargetFramework } from './framework-types';
import './playground.scss';
import { openGitHubFile, openStackBlitz } from './utils';

type MdxContent = ({}) => {};

interface PlaygroundProps {
  frameworks?: {
    react?: Record<string, MdxContent> | MdxContent;
    angular?: Record<string, MdxContent> | MdxContent;
    webcomponents?: Record<string, MdxContent> | MdxContent;
  };
}

function ButtonOpenGithub({
  name,
  framework,
}: {
  name: string;
  framework: TargetFramework;
}) {
  return (
    <ix-icon-button
      onClick={() =>
        openGitHubFile({
          name,
          framework,
        })
      }
      icon="rocket"
      size="16"
      ghost
      variant="Primary"
    ></ix-icon-button>
  );
}

function ButtonOpenStackBlitz({
  name,
  framework,
}: {
  name: string;
  framework: TargetFramework;
}) {
  return (
    <ix-icon-button
      onClick={() =>
        openStackBlitz({
          name,
          framework,
        })
      }
      icon="star"
      size="16"
      ghost
      variant="Primary"
    ></ix-icon-button>
  );
}

export default function Playground({
  name,
  height,
  noMargin,
  theme,
  frameworks,
}: DemoProps & PlaygroundProps) {
  const [targetFramework, setTargetFramework] = useState<TargetFramework>(
    TargetFramework.ANGULAR
  );

  const [sourceCodeSnippets, setSourceCodeSnippets] =
    useState<Record<TargetFramework, React.ReactNode>>();

  useEffect(() => {
    const snippets: Record<TargetFramework, React.ReactNode> = {} as any;

    Object.keys(frameworks).forEach((framework) => {
      snippets[framework] = frameworks[framework]({});
    });

    setSourceCodeSnippets(snippets);
  }, [frameworks, setSourceCodeSnippets]);

  function changeFramework(framework: TargetFramework) {
    setTargetFramework(framework);
  }

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
          <ButtonOpenGithub name={name} framework={targetFramework} />
          <ButtonOpenStackBlitz name={name} framework={targetFramework} />
        </div>
      </div>
      <Demo name={name} height={height} noMargin={noMargin} theme={theme} />
      {renderSourceCodeSnippet()}
    </div>
  );
}
