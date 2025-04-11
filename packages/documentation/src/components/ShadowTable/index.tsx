/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import BrowserOnly from '@docusaurus/BrowserOnly';
import ApiTable, { AnchorHeader } from '@site/src/components/ApiTable';
import { usePlaygroundThemeVariant } from '@site/src/hooks/use-playground-theme';
import {
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import CopyButton from '../UI/CopyButton';
import ThemeSelection, { useDefaultTheme } from '../UI/ThemeSelection';
import ThemeVariantToggle from '../UI/ThemeVariantToggle';
import styles from './ShadowTable.module.css';

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

function BoxShadowRect({ boxShadow }) {
  return (
    <div className={styles.shadowCircle}>
      <ColorContainerFix>
        <div
          className={styles.shadowCircleInner}
          style={{ boxShadow: `var(--theme-${boxShadow})` }}
        ></div>
      </ColorContainerFix>
    </div>
  );
}

type ThemeContextType = {
  currentTheme: string;
  isDarkColor: boolean;
};

const ThemeContext = createContext<ThemeContextType>({
  currentTheme: 'brand',
  isDarkColor: true,
});

function BrowserOnlyBorderTable({ shadowName }) {
  const [theme, setTheme] = useState(useDefaultTheme());
  const { playgroundThemeVariant } = usePlaygroundThemeVariant();
  const [isDarkColor, setIsDarkColor] = useState(
    playgroundThemeVariant === 'dark'
  );

  const themeRef = useRef<HTMLDivElement>();

  useEffect(() => {
    setIsDarkColor(playgroundThemeVariant === 'dark');
  }, [playgroundThemeVariant]);

  const themeContext = useMemo(
    () => ({ currentTheme: theme, isDarkColor }),
    [theme, isDarkColor]
  );

  return (
    <ThemeContext.Provider value={themeContext}>
      <ColorContainerFix ref={themeRef}>
        <ApiTable id={`shadow-${shadowName}`}>
          <AnchorHeader
            noBottomBorder={true}
            anchorName={`shadow-${shadowName}`}
            anchorLabel="Direct link to the border"
            right={
              <>
                <div className={styles.DesktopOnly}>
                  <CopyButton text={`var(--theme-${shadowName})`}></CopyButton>
                </div>
                <ThemeSelection onThemeChange={setTheme}></ThemeSelection>
                <ThemeVariantToggle />
              </>
            }
          >
            <div className={styles.shadowRow}>
              <BoxShadowRect boxShadow={shadowName}></BoxShadowRect>
              <span className={styles.headColorName}>--theme-{shadowName}</span>
            </div>
          </AnchorHeader>
        </ApiTable>
      </ColorContainerFix>
    </ThemeContext.Provider>
  );
}

const BorderTable = ({ shadowName }) => {
  return (
    <BrowserOnly>
      {() => (
        <BrowserOnlyBorderTable
          shadowName={shadowName}
        ></BrowserOnlyBorderTable>
      )}
    </BrowserOnly>
  );
};

export default BorderTable;
