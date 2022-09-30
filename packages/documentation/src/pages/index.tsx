/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */

import BrowserOnly from '@docusaurus/BrowserOnly';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import Anime from 'react-anime';
import styles from './index.module.scss';


function parallax(id: string, min: number, max: number, translateMax: number) {
  let counter = 0;
  var lastScrollTop = 0;

  function translateY(el: HTMLElement, value: string) {
    el.setAttribute("style", `transform:translateY(${value})`)
  }

  window.addEventListener("scroll", (event) => {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    const isMin = counter < 0
    const isMax = counter > translateMax
    const parent = document.getElementById(id)?.getBoundingClientRect()

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
    translateY(document.getElementById(id), counter + "px");

  })
}


function Video() {
  return (
    <video className={styles.intro} muted autoPlay>
      <source src={useBaseUrl('/img/iX_Intro_clean.mp4')} type="video/mp4" />
    </video>
  )
}

function Headline({ title, subtitle, description, dark = false, size = "h2", text = "light", noLine = false, description_width = "500px" }) {
  const headlineSize = `headline_${size}`
  return (
    <>
      <div className={clsx(styles.headline, styles[headlineSize], noLine ? styles.no_line : "")}>
        <div className={clsx(styles.line, dark ? styles.dark : "", noLine ? styles.hidden : "")}></div>
        <div className={clsx(styles.content)}>
          <div className={dark || text === "dark" ? styles.text_dark : ""}>{title}</div>
          <div className={clsx("bold", dark || text === "dark" ? styles.text_dark : "")}>{subtitle}</div>
        </div>
      </div>

      <div className={clsx(styles.text_2, styles.description, dark || text === "dark" ? styles.text_dark : "")} style={{ width: description_width }}>{description}</div>
    </>
  )
}

function Homepage() {
  const context = useDocusaurusContext();

  useEffect(() => {
    const withBrandTheme = context.siteConfig.customFields.withBrandTheme;
    document.body.className = withBrandTheme ? 'theme-brand-dark' : 'theme-classic-dark';
  }, [context]);

  return (
    <div className={clsx(styles.container, styles.industrial_experiance)}>
      <div className={styles.content}>
        <Headline
          size='h1'
          title="Siemens"
          subtitle="Industrial Experience"
          description="iX is Siemens open source design system for designers and developers to consistently create the perfect digital experience for their partners and customers."
          noLine
          description_width='340px'
        ></Headline>

        <div className={styles.Card_Box}>
          <div className={styles.Card_Info}>
            <div className={styles.Card_Line}>
              <i className={clsx('glyph glyph-' + 'single-check', styles.Card_Icon)}></i>
              Open-Source-Contribution by community welcome
            </div>
            <div className={styles.Card_Line}>
              <i className={clsx('glyph glyph-' + 'single-check', styles.Card_Icon)}></i>
              Web based, no installation needed
            </div>
            <div className={styles.Card_Line}>
              <i className={clsx('glyph glyph-' + 'single-check', styles.Card_Icon)}></i>
              Build your own Corporate Design by theming
            </div>
            <div className={styles.Card_Line}>
              <i className={clsx('glyph glyph-' + 'single-check', styles.Card_Icon)}></i>
              Designed for complex User Interface and Data Analytics
            </div>
            <div className={styles.Card_Line}>
              <i className={clsx('glyph glyph-' + 'single-check', styles.Card_Icon)}></i>
              Delivered as framework agnostic
            </div>
            <div className={styles.Card_Line}>
              <i className={clsx('glyph glyph-' + 'single-check', styles.Card_Icon)}></i>
              Intuitive User Experience and timeless Visual Design
            </div>
            <div className={styles.Card_Line}>
              <i className={clsx('glyph glyph-' + 'single-check', styles.Card_Icon)}></i>
              Built by Siemens UX/UI experts
            </div>
          </div>
        </div>

        <i className={clsx('glyph glyph-' + 'chevron-down', styles.scroll_down)}></i>
      </div>
    </div>
  );
}

function Button(props: { icon: string; label: string; style: string; link: string }) {

  return (
    <a href={props.link} className={clsx(styles.Button, props.style === "primary" ? styles.Primary : "", props.style === "secondary" ? styles.Secondary : "", props.style === "grey" ? styles.Grey : "", props.icon === '' ? styles.Justify : "")}>
      <div className={clsx(styles.IconDiv, props.icon === '' ? styles.hidden : "")}>
        <i className={clsx('glyph glyph-' + props.icon, styles.Icon, props.style === "primary" ? styles.Primary : "", props.style === "secondary" ? styles.Secondary : "", props.style === "grey" ? styles.Grey : "")}></i>
      </div>
      <div className={clsx(styles.Label, props.style === "primary" ? styles.Primary : "", props.style === "secondary" ? styles.Secondary : "", props.style === "grey" ? styles.Grey : "")}>
        {props.label}
      </div>
    </a>
  );
}

function CallToActions() {
  return (
    <div className={clsx(styles.container, styles.call_to_actions)}>
      <img src={useBaseUrl('/img/Screen_02_background_image.png')} alt="" className={styles.call_to_actions_background}></img>
      <Button link="./docs/getting-started-for-designer" icon='arrow-right' label='iX for Designers' style="primary" />
      <Button link="./docs/getting-started" icon='arrow-right' label='iX for Developers' style="secondary" />
    </div>
  );
}

function Devices() {
  return (
    <div className={clsx(styles.container, styles.devices)}>
      <div className={styles.content}>
        <img src={useBaseUrl('/img/220804_Keyvisual_Freisteller.png')} alt="" className={styles.image}></img>

        <Headline
          title="Industrial Experience"
          subtitle="for all devices"
          description="Our industry-focused components empower you to design and deliver complex analytic, scientific and industrial ideas simply and consistently across all devices."
        ></Headline>
      </div>
    </div>
  );
}

function UX() {
  parallax("SketchShadow", 170, 550, 20)
  parallax("FigmaShadow", 170, 550, 20)

  return (
    <div className={clsx(styles.container, styles.ux)}>
      <div className={styles.content}>
        <Headline
          dark
          title="iX design libraries are built"
          subtitle="for UX Designers"
          description="Use our libraries for fast and consistent prototyping. Get into a conversation with your stakeholders and build a bridge to your developers."
        ></Headline>

        <div className={styles.images}>
          <div className={styles.image}>
            <img src={useBaseUrl('/img/sketch-seeklogo.com.png')} alt="" className={styles.main} />
            <img id="SketchShadow" src={useBaseUrl('/img/Screen_04_Image_01.svg')} alt="" className={styles.shadow} />
            <div className={clsx(styles.text_dark, styles.names)}>Sketch</div>
          </div>
          <div className={styles.image}>
            <img src={useBaseUrl('/img/Gruppe 2986.png')} alt="" className={styles.main} />
            <img id="FigmaShadow" src={useBaseUrl('/img/Screen_04_Image_02.svg')} alt="" className={styles.shadow} />
            <div className={clsx(styles.text_dark, styles.names)}>Figma</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Developers() {
  parallax("AngularLogoShadow", 170, 550, 20)
  parallax("WebcomponentLogoShadow", 170, 550, 20)
  parallax("ReactLogoShadow", 170, 550, 20)

  return (
    <div id="developers" className={clsx(styles.container, styles.developers)}>
      <div className={styles.content}>
        <Headline
          dark
          title="iX components are built"
          subtitle="for developers with native web technology"
          description="Use the tech stack you need to build your websites and user interfaces. iX allows you to adopt the major frameworks for seamless integration into your products."
        ></Headline>

        <div className={styles.images}>
          <div className={styles.image}>
            <img src={useBaseUrl('/img/web tecnology/4691504_angular_icon_dark.png')} className={styles.image_main} alt="" />
            <img id="AngularLogoShadow" src={useBaseUrl('/img/web tecnology/4691504_angular_icon.png')} className={styles.image_shadow} alt="" />
            <div className={clsx(styles.text_dark, styles.names)}>Angular</div>
          </div>
          <div className={styles.image}>
            <img src={useBaseUrl('/img/web tecnology/4691425_dot_org_webcomponents_icon_dark.png')} className={styles.image_main} alt="" />
            <img id="WebcomponentLogoShadow" src={useBaseUrl('/img/web tecnology/4691425_dot_org_webcomponents_icon.png')} className={styles.image_shadow} alt="" />
            <div className={clsx(styles.text_dark, styles.names)}>Webcomponent</div>
          </div>
          <div className={styles.image}>
            <img src={useBaseUrl('/img/web tecnology/4691292_react native_react_icon_dark.png')} className={styles.image_main} alt="" />
            <img id="ReactLogoShadow" src={useBaseUrl('/img/web tecnology/4691292_react native_react_icon.png')} className={styles.image_shadow} alt="" />
            <div className={clsx(styles.text_dark, styles.names)}>React</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Icons() {
  const icons = [
    ["y-axis-settings", "xls-document", "version-history", "validate", "upload-success", "trend"],
    ["tree", "touch", "support", "spatial", "radarchart", "open-external"],
    ["map", "maintenance", "hourglass", "hierarchy", "configuration", "calendar-settings"],
    ["attach", "controller-device", "tag", "success", "sound-loud", "rocket"]
  ]

  for (let i = 0; i < icons.length; i++) {
    for (let j = 0; j < icons[i].length; j++) {
      parallax(icons[i][j], 70, 650, 40)
    }
  }


  return (
    <div className={clsx(styles.container, styles.icons)}>
      <div className={styles.content}>
        <Headline
          title="Industrial icon system"
          subtitle="500+ icons"
          description="Integrate our growing and comprehensive icon system for industrial applications using Webfont or svg."
          description_width='538px'
        ></Headline>

        <div>
          <div className={styles.images}>
            {icons.map((iconLine, index) => (
              <div className={styles.row} key={index}>
                {iconLine.map((icon, iKey) => (
                  <div key={iKey + icon}>
                    <i className={clsx('glyph glyph-' + icon, styles.icon_main)}></i>
                    <i id={icon} className={clsx('glyph glyph-' + icon, styles.icon_shadow)}></i>
                  </div>

                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function BrandDesign() {
  const totalSteps = 2;
  let [step, setStep] = useState(1);

  function click(increment: number) {
    let nextStep = step + increment

    if (nextStep > totalSteps) return setStep(totalSteps)
    if (nextStep < 1) return setStep(1)

    setStep(nextStep)
  }

  return (
    <div className={styles.brand_desgin_background_color}>
      <img src={useBaseUrl('/img/Screen_07_background_image.png')} alt="" className={styles.brand_desgin_background_image}></img>
      <div className={clsx(styles.container, styles.brand_design)}>
        <div className={styles.content}>
          <Headline
            title="Always aligned with"
            subtitle="Siemens Brand Design"
            description="Create beautiful products and experiences fully aligned with the latest Siemens Brand guidelines."
          ></Headline>

          <div className={styles.row}>
            <i className={clsx('glyph glyph-chevron-left', styles.arrow)} onClick={() => click(-1)}></i>
            <img src={useBaseUrl('/img/Screen_07_Macbook_01.png')} alt="" className={(step !== 1 ? styles.hidden : "")} />
            <img src={useBaseUrl('/img/Screen_07_Macbook_02.png')} alt="" className={(step !== 2 ? styles.hidden : "")} />
            <i className={clsx('glyph glyph-chevron-right', styles.arrow)} onClick={() => click(1)}></i>
          </div>

          <div className={styles.carousel_indicators}>
            {Array.from(Array(totalSteps), (_, index) => index + 1).map((value, index) => (
              <span key={index} className={clsx(styles.circle, (step === (index + 1) ? styles.selected : ""))}></span>
            ))}
          </div>
        </div>
      </div>
    </div>

  )
}

function Components() {
  return (
    <div className={clsx(styles.container, styles.components)}>
      <div className={styles.content}>
        <Headline
          text="dark"
          title="Flexible components"
          subtitle="in light and dark mode"
          description="Meet the mood and preference of your users with our light and dark modes for every component."
        ></Headline>

        <video className={styles.video} muted autoPlay>
          <source src={useBaseUrl('/img/iX_components.mp4')} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

function InformationCards() {
  const icons = [
    ["maintenance-documents", "bulb", "tree"],
    ["screen", "diamond", "user-management"]
  ]

  const phrases = [
    ["Open-Source-Contribution by community welcome", "Build your own Corporate Design by theming", "Designed for complex User Interface and Data Analytics"],
    ["Delivered as framework agnostic", "Intuitive User Experience and timeless Visual Design", "Build by Siemens UX/UI experts"]
  ]


  return (
    <div>
      <div className={clsx(styles.container, styles.information_cards)}>
        <img src={useBaseUrl('/img/Screen_09_background_image.png')} alt="" className={styles.information_cards_background}></img>
        <div className={styles.content}>
          <div className={clsx(styles.column)}>
            {icons.map((cardLine, index) => (
              <div className={styles.row} key={index}>
                {cardLine.map((icon, iKey) => (
                  <div className={clsx(styles.card)} key={iKey}>
                    <div className={styles.icon_gap}>
                      <i className={clsx('glyph glyph-' + "bulb-filled", icon !== "bulb" ? styles.hidden : "")}></i>
                      <i className={clsx('glyph glyph-' + icon)}></i>
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
      </div >
    </div>

  )
}

function FooterFeatures() {
  return (
    <div className={clsx(styles.container, styles.footer_features)}>
      <div className={styles.row}>
        <div className={styles.col}>
          <img src={useBaseUrl('/img/394px-Sketch_Logo.png')} alt="" />
          <div className={styles.text_gap}>
            <div className={styles.text}>Download our</div>
            <a className={styles.text} href="/files/core_ui_sketch.zip" target="_blank">latest Sketch Library</a>
          </div>
        </div>

        {/* <div className={styles.col}>
          <img src={useBaseUrl('/img/logo-640.png')} alt="" />
          <div className={styles.text_gap}>
            <div className={styles.text}>Siemens Inner Source</div>
            <a className={styles.text} href="" target="_blank">tbd</a>
          </div>
        </div> */}

        <div className={styles.col}>
          <img src={useBaseUrl('/img/webcomponents.png')} alt="" />
          <div className={styles.text_gap}>
            <div className={styles.text}>Powered by </div>
            <div className={styles.text}>Web Components</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FooterButtons() {
  return (
    <div className={clsx(styles.container, styles.footer_buttons)}>
      <Button link="" icon='' label='Start iX now' style="primary" />
      <Button link="" icon='mail' label='Contact Us' style="grey" />
    </div>
  )
}


function Footer() {
  return (
    <div className={clsx(styles.container, styles.footer)}>
      <div className={clsx(styles.column, styles.content)}>
        <div className={styles.top_row}>
          <div>
            Corporate Information
          </div>
          <div>
            Privacy Notice
          </div>
          <div>
            Cookie notice
          </div>
          <div>
            Terms of use
          </div>
          <div>
            Digital ID
          </div>
        </div>
        <div className={styles.bottom_row}>
          <div className={clsx(styles.word_break)}>
            siemens.com Global Website
          </div>
          <div>
            © Siemens 1996 - 2022
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  // const { siteConfig } = useDocusaurusContext();
  return (
    <BrowserOnly>
      {() =>
        <>
          <Video />
          <Anime
            easing='easeInOutExpo'
            delay='1500'
            duration='1500'
            opacity={[0, 1]}>
            <Layout>
              <Homepage />
              <CallToActions />
              <Devices />
              <UX />
              <Developers />
              <Icons />
              <BrandDesign />
              <Components />
              <InformationCards />
              <FooterFeatures />
              <FooterButtons />
              <Footer />
            </Layout>
          </Anime>
        </>
      }
    </BrowserOnly>
  );
}
