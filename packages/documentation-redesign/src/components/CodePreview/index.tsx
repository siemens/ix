/*
 * COPYRIGHT (c) Siemens AG 2018-2024 ALL RIGHTS RESERVED.
 */
import clsx from 'clsx';
import styles from './styles.module.css';
import CodeBlock from '@theme/CodeBlock';
import { useEffect, useState, useRef, ReactElement } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

function Pill({
  children,
  active,
  alt,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  alt?: boolean;
  onClick?: () => void;
}) {
  return (
    <div
      className={clsx(styles.pill, {
        [styles['pill--alt']]: alt,
        [styles['pill--active']]: active,
      })}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

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

function LazyCodeBlock(props: { framework: string; file: string }) {
  const url = useBaseUrl(`usage/${props.file}`);
  const [source, setSource] = useState('');
  const [fileExtension, setFileExtension] = useState('ts');

  useEffect(() => {
    props.file && setFileExtension(props.file.split('.').pop() || 'ts');
    docusaurusFetch(url)
      .then((source) => setSource(stripComments(source)))
      .catch(() => setSource('no source file yet 🙀'));
  }, [props.framework, props.file]);

  return (
    <CodeBlock
      className={clsx(
        'ixCodePreview',
        styles.code,
        `language-${fileExtension}`
      )}
    >
      {source}
    </CodeBlock>
  );
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
};

export default function CodePreview(props: CodePreviewProps) {
  const [selectedFramework, setSelectedFramework] = useState('angular');
  const [selectedFile, setSelectedFile] = useState<string>('');
  const [SourceCode, setSourceCode] = useState<React.FC>(() => () => (
    <CodeBlock children={['Test']}></CodeBlock>
  ));

  useEffect(() => {
    if (props.files && props.files[selectedFramework]) {
      const file = Object.keys(props.files[selectedFramework])[0];
      setSelectedFile(file);
      setSourceCode(() => props.source[selectedFramework][file]);
    }
  }, [selectedFramework]);

  return (
    <div className={styles.codePreview}>
      <div className={styles.toolbar}>
        <Pill
          active={selectedFramework === 'angular'}
          onClick={() => setSelectedFramework('angular')}
        >
          Angular
        </Pill>
        <Pill
          active={selectedFramework === 'react'}
          onClick={() => setSelectedFramework('react')}
        >
          React
        </Pill>
        <Pill
          active={selectedFramework === 'vue'}
          onClick={() => setSelectedFramework('vue')}
        >
          Vue
        </Pill>
        <Pill
          active={selectedFramework === 'html'}
          onClick={() => setSelectedFramework('html')}
        >
          HTML
        </Pill>
        <div className={styles.spacer}></div>
        {props.source && props.source[selectedFramework] && (
          <>
            {Object.keys(props.source[selectedFramework]).map((name) => {
              return (
                <Pill
                  key={name}
                  alt={selectedFile === name}
                  onClick={() => {
                    setSelectedFile(name);
                    setSourceCode(() => props.source[selectedFramework][name]);
                  }}
                >
                  {name}
                </Pill>
              );
            })}
          </>
        )}
      </div>
      {selectedFramework && selectedFile && SourceCode && (
        <div className="ixCodePreview">
          <SourceCode></SourceCode>
        </div>
      )}
    </div>
  );
}
