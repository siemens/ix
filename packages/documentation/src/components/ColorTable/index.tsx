/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import {
  iconChevronDownSmall,
  iconChevronRightSmall,
} from '@siemens/ix-icons/icons';
import { IxIcon } from '@siemens/ix-react';
import ApiTable, { AnchorHeader } from '@site/src/components/ApiTable';
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
import ThemeSelection, { useDefaultTheme } from '../UI/ThemeSelection';
import CopyButton from '../UI/CopyButton';
import ThemeVariantToggle from '../UI/ThemeVariantToggle';
import styles from './ColorTable.module.css';
import clsx from 'clsx';
import { useLocation } from '@docusaurus/router';
import { useColorMode } from '@docusaurus/theme-common';
import BrowserOnly from '@docusaurus/BrowserOnly';

function capitalizeFirstLetter(input: string): string {
  if (input.length === 0) return input;
  return input.charAt(0).toUpperCase() + input.slice(1);
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

function ColorCircle({ color }) {
  console.log(`var(--theme-${color})`);
  return (
    <div className={styles.colorCircle}>
      <ColorContainerFix>
        <div
          className={styles.colorCircleInner}
          style={{ backgroundColor: `var(--theme-${color})` }}
        ></div>
      </ColorContainerFix>
    </div>
  );
}

type Color = {
  name: string;
  hex: string;
};

type ColorContextType = Color & {
  children: (Color & { rawName: string })[];
};

type ThemeContextType = {
  currentTheme: string;
  isDarkColor: boolean;
};

const ColorContext = createContext<ColorContextType>({
  name: '',
  hex: '',
  children: [],
});

const ThemeContext = createContext<ThemeContextType>({
  currentTheme: 'brand',
  isDarkColor: true,
});

function BrowserOnlyColorTable({ children, colorName }) {
  const location = useLocation();

  const [theme, setTheme] = useState(useDefaultTheme());
  const { colorMode } = useColorMode();

  const [isDarkColor, setIsDarkColor] = useState(colorMode === 'dark');

  const [expanded, setExpanded] = useState(
    location.hash === `#color-${colorName}`
  );
  const [color, setColor] = useState<ColorContextType>({
    name: '',
    hex: '',
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
      .filter((property) => property.startsWith(prefix + '--'));
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
    const name = `--theme-${colorName}`;

    const children = getCustomCSSPropertyByPrefix(name).map((childName) => {
      const childHex = getCustomCSSValue(childName);
      return {
        rawName: childName.substring('--theme-'.length),
        name: capitalizeFirstLetter(childName.substring(name.length + 2)),
        hex: childHex,
      };
    });

    return children;
  }

  useEffect(() => {
    setIsDarkColor(colorMode === 'dark');
  }, [colorMode]);

  function getHexColors() {
    const name = `--theme-${colorName}`;
    const colorHex = getCustomCSSValue(name);
    const children = generateColorChildren();

    return {
      name: colorName,
      hex: colorHex,
      children: children,
    };
  }

  const observerRef = useRef(
    new MutationObserver(() => setColor(getHexColors()))
  );

  useEffect(() => {
    const children = generateColorChildren();
    setColor({
      ...getHexColors(),
      children: children,
    });
  }, [colorName, themeRef.current]);

  useLayoutEffect(() => {
    const observer = observerRef.current;
    if (!themeRef.current) {
      return;
    }

    observer.observe(themeRef.current, {
      attributes: true,
    });

    setTimeout(() => {
      setColor(getHexColors());
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
    <ThemeContext.Provider value={themeContext}>
      <ColorContext.Provider value={color}>
        <ColorContainerFix ref={themeRef}>
          <ApiTable id={`color-${colorName}`}>
            <AnchorHeader
              noBottomBorder={!expanded}
              onClick={() => setExpanded(!expanded)}
              anchorName={`color-${colorName}`}
              anchorLabel="Direct link to the color"
              right={
                <>
                  <div className={styles.DesktopOnly}>
                    <CopyButton text={`var(--theme-${colorName})`}></CopyButton>
                  </div>
                  <ThemeSelection onThemeChange={setTheme}></ThemeSelection>
                  <ThemeVariantToggle
                    onChangeColorMode={() => changeColorMode()}
                    isLight={!isDarkColor}
                  />
                </>
              }
            >
              <div className={styles.colorRow}>
                <IxIcon
                  name={expanded ? iconChevronDownSmall : iconChevronRightSmall}
                ></IxIcon>
                <ColorCircle color={colorName}></ColorCircle>
                <span className={styles.headColorName}>
                  --theme-{colorName}
                </span>
              </div>
            </AnchorHeader>

            {expanded && children}
          </ApiTable>
        </ColorContainerFix>
      </ColorContext.Provider>
    </ThemeContext.Provider>
  );
}

function Hex() {
  const color = useContext(ColorContext);
  return (
    <ApiTable.Text name="Hex">
      <code>{color.hex}</code>
    </ApiTable.Text>
  );
}

function Children() {
  const color = useContext(ColorContext);
  return color.children?.map((child) => (
    <ColorTable.Text name={child.name} key={child.name + '_' + child.hex}>
      <div className={clsx(styles.colorRow)}>
        <div className={clsx(styles.colorColumn, styles.colorColumnChildName)}>
          <ColorCircle color={child.rawName}></ColorCircle>
          {child.rawName}
          <CopyButton
            className={clsx('ml-auto', styles.DesktopOnly)}
            text={`var(--theme-${child.rawName})`}
            label=""
          ></CopyButton>
        </div>
        <div className={clsx(styles.colorColumn, styles.colorColumnHex)}>
          <code>{child.hex}</code>
        </div>
      </div>
    </ColorTable.Text>
  ));
}

function ColorTableWithChildren({ colorName }) {
  return (
    <ColorTable colorName={colorName}>
      <Hex></Hex>
      <Children></Children>
    </ColorTable>
  );
}

function Text({ children, name }) {
  return (
    <div className={clsx(styles.colorTextRow, 'api-row')}>
      <div className="px-8 py-4 font-bold w-auto border-solid border-0 border-r border-[var(--theme-color-soft-bdr)]">
        {name}
      </div>
      <div className="w-auto">{children}</div>
    </div>
  );
}

const ColorTable = ({ children, colorName }) => {
  return (
    <BrowserOnly>
      {() => (
        <BrowserOnlyColorTable colorName={colorName}>
          {children}
        </BrowserOnlyColorTable>
      )}
    </BrowserOnly>
  );
};

ColorTable.Text = Text;
ColorTable.Hex = Hex;
ColorTable.Children = Children;

ColorTable.WithChildren = ColorTableWithChildren;

export default ColorTable;
