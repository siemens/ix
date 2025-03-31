/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import BrowserOnly from '@docusaurus/BrowserOnly';
import { useLocation } from '@docusaurus/router';
import { useColorMode } from '@docusaurus/theme-common';
import {
  iconChevronDownSmall,
  iconChevronRightSmall,
} from '@siemens/ix-icons/icons';
import { IxIcon } from '@siemens/ix-react';
import ApiTable, { AnchorHeader } from '@site/src/components/ApiTable';
import clsx from 'clsx';
import {
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import CopyButton from '../UI/CopyButton';
import ThemeSelection, { useDefaultTheme } from '../UI/ThemeSelection';
import ThemeVariantToggle from '../UI/ThemeVariantToggle';
import styles from './BorderTable.module.css';

function capitalizeFirstLetter(input: string): string {
  if (input.length === 0) return input;
  return input.charAt(0).toUpperCase() + input.slice(1).toLocaleLowerCase();
}

const ColorContainerFix = forwardRef<
  HTMLDivElement,
  {
    children?: React.ReactNode;
  }
>(({ children }, ref) => {
  const { currentTheme: theme, isDarkColor } = useContext(ThemeContext);
  const themeContainerRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => themeContainerRef.current);

  useEffect(() => {
    const themeContainer = themeContainerRef.current;
    if (!themeContainer) {
      return;
    }

    if (theme === 'brand') {
      themeContainer.classList.remove('color-table-classic-dark');
      themeContainer.classList.remove('color-table-classic-light');
      themeContainer.setAttribute('data-ix-theme', 'brand');
      themeContainer.setAttribute(
        'data-ix-variant',
        isDarkColor ? 'dark' : 'light'
      );
    } else {
      themeContainer.removeAttribute('data-ix-theme');
      themeContainer.removeAttribute('data-ix-variant');
      themeContainer.className = `color-table-${theme}-${
        isDarkColor ? 'dark' : 'light'
      }`;
    }
  }, [theme, isDarkColor]);

  return <div ref={themeContainerRef}>{children}</div>;
});

function BorderRect({ color }) {
  return (
    <div className={styles.borderCircle}>
      <ColorContainerFix>
        <div
          className={styles.borderCircleInner}
          style={{ border: `var(${color})` }}
        ></div>
      </ColorContainerFix>
    </div>
  );
}

type Border = {
  name: string;
  width: string;
  style: string;
  color: string;
};

type BorderContextType = Border & {
  children: (Border & { rawName: string })[];
};

type ThemeContextType = {
  currentTheme: string;
  isDarkColor: boolean;
};

const BorderContext = createContext<BorderContextType>({
  name: '',
  width: '',
  style: '',
  color: '',
  children: [],
});

const ThemeContext = createContext<ThemeContextType>({
  currentTheme: 'brand',
  isDarkColor: true,
});

function BrowserOnlyBorderTable({ children, borderName }) {
  const location = useLocation();

  const [theme, setTheme] = useState(useDefaultTheme());
  const { colorMode } = useColorMode();

  const [isDarkColor, setIsDarkColor] = useState(colorMode === 'dark');

  const [expanded, setExpanded] = useState(
    location.hash === `#border-${borderName}`
  );
  const [border, setBorder] = useState<BorderContextType>({
    name: '',
    width: '',
    color: '',
    style: '',
    children: [],
  });

  const themeRef = useRef<HTMLDivElement>();

  function getCustomCSSValue(name: string) {
    const themeContainer = themeRef.current;
    if (!themeContainer) {
      return;
    }

    const computedStyle = getComputedStyle(themeContainer);
    const colorHex = computedStyle.getPropertyValue(name);

    return colorHex.toUpperCase();
  }

  function getCustomCSSPropertyByPrefix(prefix: string): string[] {
    return Array.from(allCustomCSSProperties)
      .filter((property) => property !== prefix)
      .filter((property) => property.startsWith(prefix + '-'));
  }

  function getAllCustomCSSProperties(): Set<string> {
    const customProperties = new Set<string>();

    for (const styleSheet of Array.from(document.styleSheets)) {
      for (const cssRule of Array.from(styleSheet.cssRules)) {
        if (cssRule instanceof CSSStyleRule) {
          for (const style of Array.from(cssRule.style)) {
            if (style.startsWith('--theme')) {
              customProperties.add(style);
            }
          }
        }
      }
    }

    return customProperties;
  }

  const allCustomCSSProperties: Set<string> = useMemo(
    () => getAllCustomCSSProperties(),
    []
  );

  function changeColorMode() {
    setIsDarkColor(!isDarkColor);
  }

  function generateColorChildren() {
    const name = `--theme-${borderName}`;

    const [_, matchName] = /--theme-(.*)-bdr-(.*)/g.exec(name);
    const children = [
      ...getCustomCSSPropertyByPrefix(`--theme-${matchName}-bdr`),
      ...getCustomCSSPropertyByPrefix(`--theme-${matchName}-dashed-bdr`),
    ];

    const transformChildren = children.map((childName) => {
      const rawBorder = getCustomCSSValue(childName);
      const [width, style, color] = rawBorder.split(' ');

      return {
        rawName: childName.substring('--theme-'.length),
        name: capitalizeFirstLetter(childName.substring(name.length + 2)),
        color: color,
        style: capitalizeFirstLetter(style),
        width: `${parseFloat(width.replace('rem', '')) * 16}px`,
      } as Border;
    });

    return transformChildren;
  }

  useEffect(() => {
    setIsDarkColor(colorMode === 'dark');
  }, [colorMode]);

  function getHexColors() {
    const name = `--theme-${borderName}`;
    const [firstBorder] = getCustomCSSPropertyByPrefix(name);
    const rawBorder = getCustomCSSValue(firstBorder);
    const [width, style, color] = rawBorder.split(' ');

    return {
      name,
      color,
      style,
      width,
      children: generateColorChildren(),
    } as BorderContextType;
  }

  const observerRef = useRef(
    new MutationObserver(() => setBorder(getHexColors()))
  );

  useEffect(() => {
    const children = generateColorChildren() as any;
    setBorder({
      ...getHexColors(),
      children: children,
    });
  }, [borderName, themeRef.current]);

  useLayoutEffect(() => {
    const observer = observerRef.current;
    if (!themeRef.current) {
      return;
    }

    observer.observe(themeRef.current, {
      attributes: true,
    });

    setTimeout(() => {
      setBorder(getHexColors());
    }, 250);

    return () => {
      observer.disconnect();
    };
  }, [isDarkColor, theme]);

  const themeContext = useMemo(
    () => ({ currentTheme: theme, isDarkColor }),
    [theme, isDarkColor]
  );

  return (
    <ApiTable id={`border-${borderName}`}>
      <ThemeContext.Provider value={themeContext}>
        <BorderContext.Provider value={border}>
          <ColorContainerFix ref={themeRef}></ColorContainerFix>
          <AnchorHeader
            noBottomBorder={!expanded}
            onClick={() => setExpanded(!expanded)}
            anchorName={`border-${borderName}`}
            anchorLabel="Direct link to the border"
            right={
              <>
                <div className={styles.DesktopOnly}>
                  <CopyButton text={`var(${borderName})`}></CopyButton>
                </div>
                <ThemeSelection onThemeChange={setTheme}></ThemeSelection>
                <ThemeVariantToggle
                  onChangeColorMode={() => changeColorMode()}
                  isLight={!isDarkColor}
                />
              </>
            }
          >
            <div className={styles.borderRow}>
              <IxIcon
                name={expanded ? iconChevronDownSmall : iconChevronRightSmall}
              ></IxIcon>
              <BorderRect color={border.name}></BorderRect>
              <span className={styles.headColorName}>{border.name}</span>
            </div>
          </AnchorHeader>

          {expanded && children}
        </BorderContext.Provider>
      </ThemeContext.Provider>
    </ApiTable>
  );
}

function Hex() {
  const color = useContext(BorderContext);
  return (
    <ApiTable.Text name="Hex">
      <code>{color.width}</code>
    </ApiTable.Text>
  );
}

function BorderStyle() {
  const color = useContext(BorderContext);
  return color.children
    ?.map((child) => {
      return {
        ...child,
        styleOverview: `${child.style} ${child.width}`,
      };
    })
    .map((child) => (
      <BorderTable.Text
        name={child.styleOverview}
        key={child.name + '_' + child.width}
      >
        <div className={clsx(styles.borderRow)}>
          <div
            className={clsx(styles.borderColumn, styles.borderColumnChildName)}
          >
            <BorderRect color={`--theme-${child.rawName}`}></BorderRect>
            --theme-{child.rawName}
            <CopyButton
              className={clsx('ml-auto', styles.DesktopOnly)}
              text={`var(--theme-${child.rawName})`}
              label=""
            ></CopyButton>
          </div>
          <div className={clsx(styles.borderColumn, styles.borderColumnHex)}>
            <code>{child.color}</code>
          </div>
        </div>
      </BorderTable.Text>
    ));
}

function Text({ children, name }) {
  return (
    <div className={styles.borderTextRow}>
      <div className="px-8 py-4 font-bold w-auto border-solid border-0 border-r border-[var(--theme-color-soft-bdr)]">
        {name}
      </div>
      <div className="w-auto">{children}</div>
    </div>
  );
}

const BorderTable = ({ borderName }) => {
  return (
    <BrowserOnly>
      {() => (
        <BrowserOnlyBorderTable borderName={borderName}>
          <BorderStyle />
        </BrowserOnlyBorderTable>
      )}
    </BrowserOnly>
  );
};

BorderTable.Text = Text;
BorderTable.Hex = Hex;

export default BorderTable;
