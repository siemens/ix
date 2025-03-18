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
import styles from './index.module.scss';
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
        className={clsx(
          styles.text_2,
          styles.description,
          dark || text === 'dark' ? styles.text_dark : ''
        )}
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
                xmlns="http://www.w3.org/2000/svg"
                width="120"
                height="120"
                viewBox="0 0 70 70"
              >
                <g fill="none" fillRule="evenodd">
                  <rect width="70" height="70" fill="#333353" />
                  <path
                    fill="#00BEDC"
                    fillRule="nonzero"
                    d="M12.0848633,54 L12.0848633,28.562891 L18.5033203,28.562891 L18.5033203,54 L12.0848633,54 Z M15.3075195,16.130566 C16.4712565,16.130566 17.4246257,16.5065429 18.167627,17.258496 C18.9106283,18.0104491 19.2821289,18.9772464 19.2821289,20.158887 C19.2821289,21.322624 18.9106283,22.2849451 18.167627,23.04585 C17.4246257,23.8067549 16.4802083,24.187207 15.334375,24.187207 C14.1527344,24.187207 13.1904134,23.8067549 12.4474121,23.04585 C11.7044108,22.2849451 11.3329102,21.3047203 11.3329102,20.105176 C11.3329102,18.9593427 11.7088867,18.0104491 12.4608398,17.258496 C13.212793,16.5065429 14.1616862,16.130566 15.3075195,16.130566 Z"
                  />
                  <polygon
                    fill="#00BEDC"
                    fillRule="nonzero"
                    points="23.874 54 37.436 34.557 24.546 15.946 32.307 15.946 41.626 29.481 51.186 15.946 58.733 15.946 45.466 34.583 59.001 54 50.998 54 41.411 39.981 31.662 54"
                  />
                </g>
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
        props.style === 'grey' ? styles.Grey : '',
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
