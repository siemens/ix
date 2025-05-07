/*
 * COPYRIGHT (c) Siemens AG 2018-2024 ALL RIGHTS RESERVED.
 */

import BrowserOnly from '@docusaurus/BrowserOnly';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  iconArrowRight,
  iconChevronDown,
  iconSingleCheck,
} from '@siemens/ix-icons/icons';
import { IxIcon } from '@siemens/ix-react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React, { useEffect } from 'react';
import styles from './index.module.css';
import Link from '@docusaurus/Link';

function parallax(id: string, min: number, max: number, translateMax: number) {
  let counter = 0;
  var lastScrollTop = 0;

  function translateY(el: HTMLElement, value: string) {
    el.setAttribute('style', `transform:translateY(${value})`);
  }

  window.addEventListener('scroll', (event) => {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    const isMin = counter < 0;
    const isMax = counter > translateMax;
    const parent = document.getElementById(id)?.getBoundingClientRect();

    if (!parent) return;

    if (st > lastScrollTop && !isMax && parent.y < max) {
      //scroll down
      counter += 0.5;
    }
    if (st < lastScrollTop && !isMin && parent.bottom > min) {
      //scroll up
      counter -= 0.5;
    }
    lastScrollTop = st <= 0 ? 0 : st;
    translateY(document.getElementById(id), counter + 'px');
  });
}

function Headline({
  title,
  subtitle,
  description,
  dark = false,
  size = 'h2',
  text = 'light',
  noLine = false,
  description_width = '500px',
}) {
  const headlineSize = `headline_${size}`;
  return (
    <>
      <div
        className={clsx(
          styles.headline,
          styles[headlineSize],
          noLine ? styles.no_line : ''
        )}
      >
        <div
          className={clsx(
            styles.line,
            dark ? styles.dark : '',
            noLine ? styles.hidden : ''
          )}
        ></div>
        <div className={clsx(styles.content)}>
          <div
            className={dark || text === 'dark' ? styles.text_dark : ''}
            style={{ opacity: 0.75 }}
          >
            {title}
          </div>
          <div
            className={clsx(
              styles.bold,
              dark || text === 'dark' ? styles.text_dark : ''
            )}
          >
            {subtitle}
          </div>
        </div>
      </div>

      <div
        className={clsx(styles.text_2, styles.description)}
        style={{ width: description_width }}
      >
        {description}
      </div>
    </>
  );
}

function Homepage() {
  const context = useDocusaurusContext();

  useEffect(() => {
    const withBrandTheme = context.siteConfig.customFields.withBrandTheme;
    document.body.className = withBrandTheme
      ? 'theme-brand-dark'
      : 'theme-classic-dark';
  }, [context]);

  return (
    <div className={clsx(styles.container, styles.industrial_experience)}>
      <div className={styles.content}>
        <div className={styles.introduction_container}>
          <div className={styles.introduction_content}>
            <div className={styles.logo}>
              <svg
                width="120"
                height="120"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">

                <rect
                  width="70"
                  height="70"
                  rx="3.28125"
                  fill="#00C1B6"/>

                <path d="M24.7357 54.9094L38.837 34.6929L25.4338 15.342H33.5036L43.1931 29.4154L53.1338 15.342H60.9802L47.1861 34.7208L61.2595 54.9094H52.9383L42.9697 40.3334L32.8335 54.9094H24.7357Z" fill="#000028"/>
                <path d="M19.1332 16.5439C18.37 15.7621 17.3834 15.3711 16.1734 15.3711C14.982 15.3711 13.9953 15.7621 13.2135 16.5439C12.4316 17.3258 12.0407 18.3124 12.0407 19.5038C12.0407 20.751 12.4223 21.7749 13.1856 22.5753C13.9674 23.3572 14.9727 23.7481 16.2013 23.7481C17.3927 23.7481 18.37 23.3572 19.1332 22.5753C19.9151 21.7749 20.306 20.7696 20.306 19.5596C20.306 18.331 19.9151 17.3258 19.1332 16.5439Z" fill="#000028"/>
                <path d="M12.8259 54.9094V28.1653H19.4996V54.9094H12.8259Z" fill="#000028"/>
              </svg>
            </div>
            <Headline
              size="h1"
              title="Siemens"
              subtitle="Industrial Experience"
              description="Siemens Industrial Experience is an open-source design system for designers and developers to consistently create the perfect digital experience for partners and customers"
              noLine
            ></Headline>

            <CallToActions />
          </div>

          <div className={styles.Card_Box}>
            <div className={styles.Card_Info}>
              <div className={styles.Card_Line}>
                <IxIcon
                  name={iconSingleCheck}
                  className={clsx(styles.Card_Icon)}
                ></IxIcon>
                Open-source community contributions welcome
              </div>
              <div className={styles.Card_Line}>
                <IxIcon
                  name={iconSingleCheck}
                  className={clsx(styles.Card_Icon)}
                ></IxIcon>
                Web-based system requiring no installation
              </div>
              <div className={styles.Card_Line}>
                <IxIcon
                  name={iconSingleCheck}
                  className={clsx(styles.Card_Icon)}
                ></IxIcon>
                Shape your own corporate design with theming
              </div>
              <div className={styles.Card_Line}>
                <IxIcon
                  name={iconSingleCheck}
                  className={clsx(styles.Card_Icon)}
                ></IxIcon>
                Designed for complex UI and Data Analytics
              </div>
              <div className={styles.Card_Line}>
                <IxIcon
                  name={iconSingleCheck}
                  className={clsx(styles.Card_Icon)}
                ></IxIcon>
                Delivered as framework agnostic
              </div>
              <div className={styles.Card_Line}>
                <IxIcon
                  name={iconSingleCheck}
                  className={clsx(styles.Card_Icon)}
                ></IxIcon>
                Timeless visual design with intuitive UX
              </div>
              <div className={styles.Card_Line}>
                <IxIcon
                  name={iconSingleCheck}
                  className={clsx(styles.Card_Icon)}
                ></IxIcon>
                Built by Siemens UX/UI experts
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button(props: {
  icon: string;
  label: string;
  style: string;
  link: string;
}) {
  return (
    <Link
      href={props.link}
      className={clsx(
        styles.Button,
        props.style === 'primary' ? styles.Primary : '',
        props.style === 'secondary' ? styles.Secondary : '',
        props.icon === '' ? styles.Justify : ''
      )}
    >
      <div
        className={clsx(styles.IconDiv, props.icon === '' ? styles.hidden : '')}
      >
        <IxIcon
          name={props.icon}
          className={clsx(
            styles.Icon,
            props.style === 'primary' ? styles.Primary : '',
            props.style === 'secondary' ? styles.Secondary : '',
            props.style === 'grey' ? styles.Grey : ''
          )}
        ></IxIcon>
      </div>
      <div
        className={clsx(
          styles.Label,
          props.style === 'primary' ? styles.Primary : '',
          props.style === 'secondary' ? styles.Secondary : '',
          props.style === 'grey' ? styles.Grey : ''
        )}
      >
        {props.label}
      </div>
    </Link>
  );
}

function CallToActions() {
  return (
    <div className={clsx(styles.container, styles.call_to_actions)}>
      <div className={styles.lines}>
        <Button
          link={useBaseUrl('/docs/home/overview')}
          icon={iconArrowRight}
          label="Getting started"
          style="primary"
        />
      </div>
    </div>
  );
}

const Home: React.FC = () => {
  // const { siteConfig } = useDocusaurusContext();
  return (
    <BrowserOnly>
      {() => (
        <Layout>
          <Homepage />
        </Layout>
      )}
    </BrowserOnly>
  );
};

export default Home;
