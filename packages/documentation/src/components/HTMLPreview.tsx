import { useDocsPreferredVersion } from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import CodeBlock from '@theme/CodeBlock';
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
import clsx from 'clsx';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { DEFAULT_THEME } from './config';
import styles from './HTMLPreview.module.css';
import { PreviewProps } from './previewProps';

const CODE_SPLIT = '<!-- Preview code -->\n';

export default function HTMLPreview(props: PreviewProps) {
  const [error, setError] = useState(false);
  const [html, setHtml] = useState<string>('No code found!');
  // const base = useBaseUrl(`/webcomponent-examples/${props.name}.html`);

  const baseUrl = useBaseUrl('');
  const [base, setBase] = useState('');

  const [theme, setTheme] = useState<string>(DEFAULT_THEME);

  const { preferredVersion } = useDocsPreferredVersion();

  useEffect(() => {
    // setBase(baseUrl + `/webcomponent-examples/${props.name}.html`);
    const currentVersion: string = preferredVersion?.name;

    if (currentVersion === undefined || currentVersion === 'current') {
      setBase(baseUrl + `/webcomponent-examples/${props.name}.html`);
    } else {
      setBase(
        baseUrl +
          `/versioned_examples/version-${currentVersion}/webcomponent-examples/${props.name}.html`
      );
    }
  }, [baseUrl, preferredVersion?.name, props.name]);

  useEffect(() => {
    if (!preferredVersion?.name) {
      return;
    }
    const currentVersion: string = preferredVersion.name;

    try {
      let htmlContent = '';

      console.info('Load examples for version', currentVersion);

      if (currentVersion === 'current') {
        htmlContent =
          require(`!!raw-loader!@site/static/webcomponent-examples/${props.name}.html`)
            .default as string;
      } else {
        htmlContent =
          require(`!!raw-loader!@site/static/versioned_examples/version-${currentVersion}/webcomponent-examples/${props.name}.html`)
            .default as string;
      }

      const splitHtmlContent = htmlContent.split(CODE_SPLIT);
      if (splitHtmlContent?.length === 3) {
        setHtml(
          splitHtmlContent[1]
            .split('\n')
            .map((line) => line.replace(/[ ]{4}/, ''))
            .join('\n')
        );
      } else {
        setHtml(htmlContent);
      }
    } catch (er) {
      console.warn(er);
      setError(true);
      setHtml(
        `No component preview found for ${props.name} in version ${currentVersion}`
      );
    }
  }, [preferredVersion?.name]);

  useLayoutEffect(() => {
    const applyDefaultTheme = () => {
      let newTheme = DEFAULT_THEME;
      document.body.classList.forEach((className) => {
        if (className.includes('theme-')) {
          newTheme = className;
        }
      });
      setTheme(newTheme);
    };

    const mutationObserver = new MutationObserver(applyDefaultTheme);

    mutationObserver.observe(document.body, {
      attributeFilter: ['class'],
      attributes: true,
    });

    applyDefaultTheme();

    return () => {
      mutationObserver.disconnect();
    };
  });

  return (
    <>
      {!error ? (
        <>
          <Tabs defaultValue={props?.activeTab ?? 'Preview'}>
            <TabItem value="Preview">
              <iframe
                src={`${base}?theme=${props.theme ? props.theme : theme}`}
                className={clsx(styles.preview)}
                style={{
                  height: `${props.height}`,
                }}
              ></iframe>
            </TabItem>
            <TabItem value="HTML">
              <CodeBlock className="language-html">{html}</CodeBlock>
            </TabItem>
          </Tabs>
        </>
      ) : (
        <span>
          No component preview found for {props.name} in version{' '}
          {preferredVersion?.name}
        </span>
      )}
    </>
  );
}
