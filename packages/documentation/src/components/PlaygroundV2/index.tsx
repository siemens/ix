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
  fetchSourceFilesByFileName,
  fetchSourceFilesFromExample,
  getLanguage,
  openStackBlitz,
  getBranchPath,
  SourceFile,
} from './utils';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

type PlaygroundV2Props = {
  files: Record<TargetFramework, string[]>;
  includeCssFile?: boolean;
  examplesByName?: boolean;
  disableStackBlitz?: boolean;
  showOnly?: TargetFramework[];
} & DemoProps;

export function SourceCodePreview(props: {
  framework: TargetFramework;
  name: string;
  files?: Record<TargetFramework, string[]>;
  includeCssFile?: boolean;
  examplesByName?: boolean;
  onSourceCodeFetched?: (files: SourceFile[]) => void;
}) {
  const [isFetching, setFetching] = useState(true);

  const baseUrl = useBaseUrl('/auto-generated');

  const [files, setFiles] = useState<SourceFile[]>([]);
  const [selectedFile, setSelectedFile] = useState<number>(0);

  useEffect(() => {
    if (props.examplesByName) {
      fetchSourceFilesFromExample(
        baseUrl,
        props.name,
        props.framework,
        props.includeCssFile
      ).then((files) => {
        setSelectedFile(0);
        setFiles(files.filter((f) => f));
        setFetching(false);
      });
      return;
    }
    if (props.files && props.files[props.framework]) {
      const filesToFetch = props.files[props.framework];

      setFetching(true);
      fetchSourceFilesByFileName(baseUrl, props.framework, filesToFetch).then(
        (files) => {
          setSelectedFile(0);
          setFiles(files.filter((f) => f));
          setFetching(false);
        }
      );
    }
  }, [props.framework]);

  useEffect(() => {
    if (props.onSourceCodeFetched) {
      props.onSourceCodeFetched(files);
    }
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
  const [tabs] = useState([
    {
      id: TargetFramework.ANGULAR,
      label: 'Angular',
    },
    {
      id: TargetFramework.REACT,
      label: 'React',
    },
    {
      id: TargetFramework.VUE,
      label: 'Vue',
    },
    {
      id: TargetFramework.JAVASCRIPT,
      label: 'Javascript',
    },
  ]);

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
        {tabs
          .filter((tab) => {
            if (props.showOnly?.length > 0) {
              return props.showOnly.includes(tab.id);
            }

            return true;
          })
          .map((tab) => {
            if (isTabVisible(tab.id)) {
              return (
                <IxTabItem key={tab.id} onClick={() => setTab(tab.id)}>
                  {tab.label}
                </IxTabItem>
              );
            }
          })}

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
