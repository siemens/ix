/*
 * COPYRIGHT (c) Siemens AG 2018-2024 ALL RIGHTS RESERVED.
 */

import BrowserOnly from '@docusaurus/BrowserOnly';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { IxIcon } from '@siemens/ix-react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import Anime from 'react-anime';
import styles from './index.module.scss';

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
                  name="single-check"
                  className={clsx(styles.Card_Icon)}
                ></IxIcon>
                Open-source community contributions welcome
              </div>
              <div className={styles.Card_Line}>
                <IxIcon
                  name="single-check"
                  className={clsx(styles.Card_Icon)}
                ></IxIcon>
                Web-based system requiring no installation
              </div>
              <div className={styles.Card_Line}>
                <IxIcon
                  name="single-check"
                  className={clsx(styles.Card_Icon)}
                ></IxIcon>
                Shape your own corporate design with theming
              </div>
              <div className={styles.Card_Line}>
                <IxIcon
                  name="single-check"
                  className={clsx(styles.Card_Icon)}
                ></IxIcon>
                Designed for complex UI and Data Analytics
              </div>
              <div className={styles.Card_Line}>
                <IxIcon
                  name="single-check"
                  className={clsx(styles.Card_Icon)}
                ></IxIcon>
                Delivered as framework agnostic
              </div>
              <div className={styles.Card_Line}>
                <IxIcon
                  name="single-check"
                  className={clsx(styles.Card_Icon)}
                ></IxIcon>
                Timeless visual design with intuitive UX
              </div>
              <div className={styles.Card_Line}>
                <IxIcon
                  name="single-check"
                  className={clsx(styles.Card_Icon)}
                ></IxIcon>
                Built by Siemens UX/UI experts
              </div>
            </div>
          </div>
        </div>

        <a
          href="#getting-started"
          className={clsx(
            styles.scroll_down,
            'animate__animated animate__shakeY'
          )}
        >
          <IxIcon name="chevron-down"></IxIcon>
        </a>
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
    <a
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
    </a>
  );
}

function CallToActions() {
  return (
    <div className={clsx(styles.container, styles.call_to_actions)}>
      <div className={styles.lines}>
        <Button
          link={useBaseUrl('/docs/getting-started-for-designers')}
          icon="arrow-right"
          label="iX for Designers"
          style="primary"
        />
        <Button
          link={useBaseUrl('/docs/getting-started')}
          icon="arrow-right"
          label="iX for Developers"
          style="primary"
        />
      </div>
    </div>
  );
}

function Devices() {
  return (
    <div className={clsx(styles.container, styles.devices)}>
      <div className={styles.content}>
        <img
          src={useBaseUrl('/img/220804_Keyvisual_Freisteller.png')}
          alt=""
          className={styles.image}
        ></img>

        <div className={styles.device_headline}>
          <Headline
            title="Industrial Experience"
            subtitle="for all devices"
            description="Our industry-focused components empower you to design and deliver complex analytic, scientific and industrial ideas simply and consistently across all devices"
          ></Headline>
        </div>
      </div>
    </div>
  );
}

function UX() {
  parallax('SketchShadow', 170, 550, 20);
  parallax('FigmaShadow', 170, 550, 20);

  return (
    <div className={clsx(styles.container, styles.ux)}>
      <div className={styles.content}>
        <Headline
          dark
          title="iX design libraries are built"
          subtitle="for UX designers"
          description="Rapidly create consistent prototypes using our libraries to support the exchange of ideas with your stakeholders and developers"
        ></Headline>

        <div className={styles.images}>
          <div className={styles.image}>
            <img
              src={useBaseUrl('/img/sketch-seeklogo.com.png')}
              alt=""
              className={styles.main}
            />
            <img
              id="SketchShadow"
              src={useBaseUrl('/img/Screen_04_Image_01.svg')}
              alt=""
              className={styles.shadow}
            />
            <div className={clsx(styles.text_dark, styles.names)}>Sketch</div>
          </div>
          <div className={styles.image}>
            <img
              src={useBaseUrl('/img/Gruppe 2986.png')}
              alt=""
              className={styles.main}
            />
            <img
              id="FigmaShadow"
              src={useBaseUrl('/img/Screen_04_Image_02.svg')}
              alt=""
              className={styles.shadow}
            />
            <div className={clsx(styles.text_dark, styles.names)}>Figma</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Developers() {
  parallax('AngularLogoShadow', 170, 550, 20);
  parallax('WebcomponentLogoShadow', 170, 550, 20);
  parallax('ReactLogoShadow', 170, 550, 20);

  return (
    <div id="developers" className={clsx(styles.container, styles.developers)}>
      <div className={styles.content}>
        <Headline
          dark
          title="iX components are built"
          subtitle="for developers with native web technology"
          description="Adopt the major frameworks for seamless integration into your products and use the tech stack you need to build your UI and websites"
        ></Headline>

        <div className={styles.images}>
          <div className={styles.image}>
            <img
              src={useBaseUrl(
                '/img/web tecnology/4691504_angular_icon_dark.png'
              )}
              className={styles.image_main}
              alt=""
            />
            <img
              id="AngularLogoShadow"
              src={useBaseUrl('/img/web tecnology/4691504_angular_icon.png')}
              className={styles.image_shadow}
              alt=""
            />
            <div className={clsx(styles.text_dark, styles.names)}>Angular</div>
          </div>
          <div className={styles.image}>
            <img
              src={useBaseUrl(
                '/img/web tecnology/4691425_dot_org_webcomponents_icon_dark.png'
              )}
              className={styles.image_main}
              alt=""
            />
            <img
              id="WebcomponentLogoShadow"
              src={useBaseUrl(
                '/img/web tecnology/4691425_dot_org_webcomponents_icon.png'
              )}
              className={styles.image_shadow}
              alt=""
            />
            <div className={clsx(styles.text_dark, styles.names)}>
              Web Components
            </div>
          </div>
          <div className={styles.image}>
            <img
              src={useBaseUrl(
                '/img/web tecnology/4691292_react native_react_icon_dark.png'
              )}
              className={styles.image_main}
              alt=""
            />
            <img
              id="ReactLogoShadow"
              src={useBaseUrl(
                '/img/web tecnology/4691292_react native_react_icon.png'
              )}
              className={styles.image_shadow}
              alt=""
            />
            <div className={clsx(styles.text_dark, styles.names)}>React</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icons() {
  const icons = [
    [
      'y-axis-settings',
      'xls-document',
      'version-history',
      'checkbox',
      'upload-success',
      'trend',
    ],
    ['tree', 'touch', 'support', 'spatial', 'radarchart', 'open-external'],
    [
      'map',
      'maintenance',
      'hourglass',
      'hierarchy',
      'configuration',
      'calendar-settings',
    ],
    ['attach', 'controller-device', 'tag', 'success', 'sound-loud', 'rocket'],
  ];

  for (let i = 0; i < icons.length; i++) {
    for (let j = 0; j < icons[i].length; j++) {
      parallax(icons[i][j], 70, 650, 40);
    }
  }

  return (
    <div className={clsx(styles.container, styles.icons)}>
      <div className={styles.content}>
        <Headline
          title="Industrial icon system"
          subtitle="500+ icons"
          description="Integrate our growing and comprehensive icon system for industrial applications using web fonts or SVG"
          description_width="538px"
        ></Headline>

        <div>
          <div className={styles.images}>
            {icons.map((iconLine, index) => (
              <div className={styles.row} key={index}>
                {iconLine.map((icon, iKey) => (
                  <div key={iKey + icon}>
                    <IxIcon
                      name={icon}
                      className={clsx(styles.icon_main)}
                    ></IxIcon>
                    <IxIcon
                      id={icon}
                      name={icon}
                      className={clsx(styles.icon_shadow)}
                    ></IxIcon>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function BrandDesign() {
  const totalSteps = 2;
  let [step, setStep] = useState(1);

  function click(increment: number) {
    let nextStep = step + increment;

    if (nextStep > totalSteps) return setStep(totalSteps);
    if (nextStep < 1) return setStep(1);

    setStep(nextStep);
  }

  return (
    <div className={styles.brand_desgin_background_color}>
      <img
        src={useBaseUrl('/img/Screen_07_background_image.png')}
        alt=""
        className={styles.brand_desgin_background_image}
      ></img>
      <div className={clsx(styles.container, styles.brand_design)}>
        <div className={styles.content}>
          <Headline
            title="Always aligned with"
            subtitle="Siemens Brand Design"
            description="Create beautiful products and experiences fully aligned with the latest Siemens Brand guidelines"
          ></Headline>

          <div className={styles.row}>
            <IxIcon
              name="chevron-left"
              className={clsx(styles.arrow)}
              onClick={() => click(-1)}
            ></IxIcon>
            <img
              src={useBaseUrl('/img/Screen_07_Macbook_01.png')}
              alt=""
              className={step !== 1 ? styles.hidden : ''}
            />
            <img
              src={useBaseUrl('/img/Screen_07_Macbook_02.png')}
              alt=""
              className={step !== 2 ? styles.hidden : ''}
            />
            <IxIcon
              name="chevron-right"
              className={clsx(styles.arrow)}
              onClick={() => click(1)}
            ></IxIcon>
          </div>

          <div className={styles.carousel_indicators}>
            {Array.from(Array(totalSteps), (_, index) => index + 1).map(
              (value, index) => (
                <span
                  key={index}
                  className={clsx(
                    styles.circle,
                    step === index + 1 ? styles.selected : ''
                  )}
                ></span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Components() {
  return (
    <div className={clsx(styles.container, styles.components)}>
      <div className={styles.content}>
        <Headline
          text="dark"
          title="Flexible components"
          subtitle="in light and dark mode"
          description="Meet the mood and preference of your users with our light and dark modes for every component"
        ></Headline>

        <video className={styles.video} muted autoPlay>
          <source src={useBaseUrl('/img/iX_components.mp4')} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

function InformationCards() {
  const icons = [
    ['maintenance-documents', 'bulb', 'tree'],
    ['screen', 'diamond', 'user-management'],
  ];

  const phrases = [
    [
      'Open-Source-Contribution by community welcome',
      'Build your own Corporate Design by theming',
      'Designed for complex User Interface and Data Analytics',
    ],
    [
      'Delivered as framework agnostic',
      'Intuitive User Experience and timeless Visual Design',
      'Built by Siemens UX/UI experts',
    ],
  ];

  return (
    <div>
      <div className={clsx(styles.container, styles.information_cards)}>
        <img
          src={useBaseUrl('/img/Screen_09_background_image.png')}
          alt=""
          className={styles.information_cards_background}
        ></img>
        <div className={styles.content}>
          <div className={clsx(styles.column)}>
            {icons.map((cardLine, index) => (
              <div className={styles.row} key={index}>
                {cardLine.map((icon, iKey) => (
                  <div className={clsx(styles.card)} key={iKey}>
                    <div className={styles.icon_gap}>
                      <IxIcon
                        name="bulb-filled"
                        className={clsx(icon !== 'bulb' ? styles.hidden : '')}
                      ></IxIcon>
                      <IxIcon name={icon}></IxIcon>
                    </div>

                    <div className={clsx(styles.text)}>
                      {phrases[index][iKey]}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FooterButtons() {
  return (
    <div className={clsx(styles.container, styles.footer_buttons)}>
      <div className={styles.lines}>
        <Button
          link={useBaseUrl('/docs/getting-started-for-designers')}
          icon="rocket"
          label="Start iX now"
          style="primary"
        />
        <Button
          link={useBaseUrl('/docs/contact-us')}
          icon="heart"
          label="Meet the team"
          style="secondary"
        />
      </div>
      <div className={styles.lines}>
        <Button
          link={'https://community.siemens.com/c/ix/'}
          icon="user-management"
          label="iX Community"
          style="secondary"
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
        <>
          <Anime
            easing="easeInOutExpo"
            duration="2000"
            opacity={[0, 1]}
          ></Anime>

          <Layout>
            <Homepage />
            <Devices />
            <UX />
            <Developers />
            <Icons />
            <BrandDesign />
            <Components />
            <InformationCards />
            <FooterButtons />
          </Layout>
        </>
      )}
    </BrowserOnly>
  );
};

export default Home;
