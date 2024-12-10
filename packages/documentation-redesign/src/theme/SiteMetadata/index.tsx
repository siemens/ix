import React, { useEffect, useLayoutEffect } from 'react';
import SiteMetadata from '@theme-original/SiteMetadata';
import type SiteMetadataType from '@theme/SiteMetadata';
import type { WrapperProps } from '@docusaurus/types';
import { defineCustomElements } from '@siemens/ix-icons/loader';
type Props = WrapperProps<typeof SiteMetadataType>;

export default function SiteMetadataWrapper(props: Props): JSX.Element {
  useEffect(() => {
    document.documentElement.setAttribute('data-ix-theme', 'brand-dark');
    const observer = new MutationObserver(() => {
      document.documentElement.setAttribute(
        'data-ix-theme',
        `brand-${document.documentElement.getAttribute('data-theme')}`
      );
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useLayoutEffect(() => {
    defineCustomElements();
  }, []);

  return (
    <>
      <SiteMetadata {...props} />
    </>
  );
}
