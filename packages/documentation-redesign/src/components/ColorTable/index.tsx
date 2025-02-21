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
import ThemeVariantToggle from '../UI/ThemeVariantToggle';
import styles from './ColorTable.module.css';

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
    theme: string;
    isDarkColor: boolean;
  }
>(({ children, theme, isDarkColor }, ref) => {
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

function ColorCircle({ color, theme, isDarkColor }) {
  return (
    <ColorContainerFix theme={theme} isDarkColor={isDarkColor}>
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
  children: (Color & { rawName: string })[];
};

const ColorContext = createContext<ColorContextType>({
  name: 'color-primary',
  hex: '#11111',
  children: [],
});

function ColorTable({ children, colorName }) {
  const [theme, setTheme] = useState(useDefaultTheme());
  const [isDarkColor, setDarkColor] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [color, setColor] = useState<ColorContextType>({
    name: 'color-primary',
    hex: '#11111',
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
      });
    });
  }, [colorName, isDarkColor, theme]);

  return (
    <ApiTable>
      <ColorContainerFix
        ref={themeRef}
        theme={theme}
        isDarkColor={isDarkColor}
      ></ColorContainerFix>
      <AnchorHeader
        onClick={() => setExpanded(!expanded)}
        anchorName={`color-${colorName}`}
        anchorLabel="Direct link to the color"
        right={
          <>
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
          <ColorCircle
            color={colorName}
            isDarkColor={isDarkColor}
            theme={theme}
          ></ColorCircle>
          --theme-{colorName}
        </div>
      </AnchorHeader>

      <ColorContext.Provider value={color}>
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
    <ApiTable.Text name={child.name} key={child.name + '_' + child.hex}>
      <div className={styles.colorRow}>
        <ColorCircle color={child.rawName}></ColorCircle>
        {child.rawName}
        <code className="p-1 ml-auto">{child.hex}</code>
      </div>
    </ApiTable.Text>
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

ColorTable.Text = ApiTable.Text;
ColorTable.Hex = Hex;
ColorTable.Children = Children;

ColorTable.WithChildren = ColorTableWithChildren;

export default ColorTable;
