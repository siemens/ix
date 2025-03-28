/*
 * COPYRIGHT (c) Siemens AG 2018-2024 ALL RIGHTS RESERVED.
 */
import useBaseUrl from '@docusaurus/useBaseUrl';
import { FrameworkTypes } from '@site/src/hooks/use-framework';
import CodeBlock from '@theme/CodeBlock';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import Pill from '../UI/Pill';
import styles from './styles.module.css';
import {
  IxDropdown,
  IxDropdownButton,
  IxDropdownItem,
} from '@siemens/ix-react';
import Button from '../UI/Button';
import React from 'react';
import { iconChevronDownSmall } from '@siemens/ix-icons/icons';

export async function docusaurusFetch(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    throw `Error fetching code from ${url}`;
  }

  const text = await response.text();

  // Check if the response is empty or contains a 404 page
  if (
    !text ||
    text?.includes('<div id="__docusaurus"></div>') ||
    text?.includes('Page Not Found')
  ) {
    throw `Error fetching code from ${url}`;
  }

  return text;
}

function stripComments(code: string) {
  return code
    .replace(/\/\*[^]*?\*\//g, '')
    .replace(/<!--[^]*?-->/g, '')
    .trim();
}

export type CodePreviewFiles = {
  angular?: Record<string, string>;
  react?: Record<string, string>;
  vue?: Record<string, string>;
  html?: Record<string, string>;
};

export type SourceFiles = {
  angular?: Record<string, JSX.Element>;
  react?: Record<string, JSX.Element>;
  vue?: Record<string, JSX.Element>;
  html?: Record<string, JSX.Element>;
};

export type CodePreviewProps = {
  files: CodePreviewFiles;
  source: SourceFiles;
  name: string;
  selectedFramework: FrameworkTypes;
  onShowSource: (source: React.FC) => void;
};

export default function CodePreview(props: CodePreviewProps) {
  // const [selectedFramework, setSelectedFramework] = useState('angular');
  const { selectedFramework } = props;
  const [selectedFile, setSelectedFile] = useState<string>('');
  const [SourceCode, setSourceCode] = useState<React.FC>(() => () => (
    <CodeBlock children={['Test']}></CodeBlock>
  ));
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (props.files && props.files[selectedFramework]) {
      const file = Object.keys(props.files[selectedFramework])[0];
      setSelectedFile(file);
      setSourceCode(() => props.source[selectedFramework][file]);
    }
  }, [selectedFramework]);

  useEffect(() => {
    props.onShowSource(SourceCode);
  }, [SourceCode]);

  return (
    <div className={styles.CodePreview}>
      {props.source && props.source[selectedFramework] && (
        <>
          <Button ref={ref}>
            {selectedFile}
            {React.createElement('ix-icon', {
              name: iconChevronDownSmall,
            })}
          </Button>
          {ref.current && (
            <IxDropdown trigger={ref.current}>
              {Object.keys(props.source[selectedFramework]).map((name) => {
                return (
                  <IxDropdownItem
                    key={name}
                    checked={selectedFile === name}
                    onClick={() => {
                      setSelectedFile(name);
                      setSourceCode(
                        () => props.source[selectedFramework][name]
                      );
                    }}
                  >
                    {name}
                  </IxDropdownItem>
                );
              })}
            </IxDropdown>
          )}
        </>
      )}
    </div>
  );
}
