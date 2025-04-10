import React, { useEffect } from 'react';
import SiteMetadata from '@theme-original/SiteMetadata';
import type SiteMetadataType from '@theme/SiteMetadata';
import type { WrapperProps } from '@docusaurus/types';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
type Props = WrapperProps<typeof SiteMetadataType>;

export default function SiteMetadataWrapper(props: Props): JSX.Element {
  const context = useDocusaurusContext();
  const isDevelopedWithoutBrandTheme =
    !context.siteConfig.customFields.withBrandTheme;

  useEffect(() => {
    document.documentElement.setAttribute('data-ix-theme', `brand`);
    document.documentElement.setAttribute('data-ix-variant', 'dark');
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-ix-theme', 'brand-dark');
    const observer = new MutationObserver(() => {
      const variant = document.documentElement.getAttribute('data-theme');

      if (isDevelopedWithoutBrandTheme) {
        console.log('development theme');
        document
          .getElementById('__docusaurus')
          .classList.remove('theme-classic-dark');
        document
          .getElementById('__docusaurus')
          .classList.remove('theme-classic-light');
        document
          .getElementById('__docusaurus')
          .classList.add(`theme-classic-${variant}`);

        return;
      }

      document.documentElement.setAttribute('data-ix-theme', `brand`);
      document.documentElement.setAttribute('data-ix-variant', variant);
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <SiteMetadata {...props} />
    </>
  );
}
