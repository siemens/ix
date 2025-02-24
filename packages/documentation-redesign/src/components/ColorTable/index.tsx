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
  useRef,
  useState,
} from 'react';
import ThemeSelection, { useDefaultTheme } from '../UI/ThemeSelection';
import CopyButton from '../UI/CopyButton';
import ThemeVariantToggle from '../UI/ThemeVariantToggle';
import styles from './ColorTable.module.css';
import clsx from 'clsx';
import { useLocation } from '@docusaurus/router';

function capitalizeFirstLetter(input: string): string {
  if (input.length === 0) return input;
  return input.charAt(0).toUpperCase() + input.slice(1);
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

const allCustomCSSProperties: Set<string> = getAllCustomCSSProperties();

const ColorContainerFix = forwardRef<
  HTMLDivElement,
  {
    children?: React.ReactNode;
  }
>(({ children }, ref) => {
  const { currentTheme: theme, isDarkColor } = useContext(ColorContext);
  const themeContainerRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => themeContainerRef.current);

  useEffect(() => {
    const themeContainer = themeContainerRef.current;
    if (!themeContainer) {
      return;
    }

    if (theme === 'brand') {
      themeContainer.className = `theme-${theme}-${
        isDarkColor ? 'dark' : 'light'
      }`;
    } else {
      themeContainer.className = `color-table-${theme}-${
        isDarkColor ? 'dark' : 'light'
      }`;
    }
  }, [theme, isDarkColor]);

  return <div ref={themeContainerRef}>{children}</div>;
});

function ColorCircle({ color }) {
  return (
    <ColorContainerFix>
      <div
        className={styles.colorCircle}
        style={{ backgroundColor: `var(--theme-${color})` }}
      ></div>
    </ColorContainerFix>
  );
}

type Color = {
  name: string;
  hex: string;
};

type ColorContextType = Color & {
  currentTheme: string;
  isDarkColor: boolean;
  children: (Color & { rawName: string })[];
};

const ColorContext = createContext<ColorContextType>({
  name: 'color-primary',
  hex: '#11111',
  children: [],
  currentTheme: 'brand',
  isDarkColor: true,
});

function ColorTable({ children, colorName }) {
  const location = useLocation();

  const [theme, setTheme] = useState(useDefaultTheme());
  const [isDarkColor, setDarkColor] = useState(true);

  const [expanded, setExpanded] = useState(
    location.hash === `#color-${colorName}`
  );
  const [color, setColor] = useState<ColorContextType>({
    name: 'color-primary',
    hex: '#11111',
    children: [],
    currentTheme: theme,
    isDarkColor: isDarkColor,
  });

  const themeRef = useRef<HTMLDivElement>();

  function getCustomCSSValue(name: string) {
    const themeContainer = themeRef.current;
    if (!themeContainer) {
      return;
    }

    const computedStyle = getComputedStyle(themeContainer);
    const colorHex = computedStyle.getPropertyValue(name);

    return colorHex;
  }

  useEffect(() => {
    setTimeout(() => {
      const name = `--theme-${colorName}`;
      const colorHex = getCustomCSSValue(name);

      const children = getCustomCSSPropertyByPrefix(name).map((childName) => {
        const childHex = getCustomCSSValue(childName);
        return {
          rawName: childName.substring('--theme-'.length),
          name: capitalizeFirstLetter(childName.substring(name.length + 2)),
          hex: childHex,
        };
      });

      setColor({
        name: colorName,
        hex: colorHex,
        children: children,
        currentTheme: theme,
        isDarkColor: isDarkColor,
      });
    });
  }, [colorName, isDarkColor, theme]);

  return (
    <ApiTable id={`color-${colorName}`}>
      <ColorContext.Provider value={color}>
        <ColorContainerFix ref={themeRef}></ColorContainerFix>
        <AnchorHeader
          onClick={() => setExpanded(!expanded)}
          anchorName={`color-${colorName}`}
          anchorLabel="Direct link to the color"
          right={
            <>
              <CopyButton text={`var(--theme-${colorName})`}></CopyButton>
              <ThemeSelection onThemeChange={setTheme}></ThemeSelection>
              <ThemeVariantToggle
                onChangeColorMode={() => setDarkColor(!isDarkColor)}
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
            --theme-{colorName}
          </div>
        </AnchorHeader>

        {expanded && children}
      </ColorContext.Provider>
    </ApiTable>
  );
}

function Hex() {
  const color = useContext(ColorContext);
  return (
    <ApiTable.Text name="Hex">
      <code className="p-1">{color.hex}</code>
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
          <code className="p-1 ml-auto">{child.hex}</code>
        </div>
        <div className={clsx(styles.colorColumn, styles.colorColumnCopy)}>
          <CopyButton text={`var(--theme-${child.rawName})`}></CopyButton>
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
    <div className="grid grid-cols-[minmax(100px,20%)_1fr] gap-2 border-solid border-0 border-b border-[var(--theme-color-soft-bdr)]">
      <div className="px-8 py-4 font-bold w-auto border-solid border-0 border-r border-[var(--theme-color-soft-bdr)]">
        {name}
      </div>
      <div className="w-auto">{children}</div>
    </div>
  );
}

ColorTable.Text = Text;
ColorTable.Hex = Hex;
ColorTable.Children = Children;

ColorTable.WithChildren = ColorTableWithChildren;

export default ColorTable;
