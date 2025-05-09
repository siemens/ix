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
import { IxIcon, IxTypography } from '@siemens/ix-react';
import ApiTable, { AnchorHeader } from '@site/src/components/ApiTable';
import { useFramework } from '@site/src/hooks/use-framework';
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
import FrameworkSelection from '../UI/FrameworkSelection';
import ThemeSelection, { useDefaultTheme } from '../UI/ThemeSelection';
import styles from './TypographyTable.module.css';
import CodeBlock from '@theme/CodeBlock';
import CopyButton from '../UI/CopyButton';
import { capitalize } from '@site/src/lib/utils/string-format';

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

type Typography = {
  name: string;
  fontFamily: string;
  fontSize: string;
  lineHeight: string;
  fontWeight: string;
  letterSpacing: string;
};

type TypographyContextType = Typography & { displayName: string };

type ThemeContextType = {
  currentTheme: string;
  isDarkColor: boolean;
};

const TypographyContext = createContext<TypographyContextType>({
  name: '',
  fontFamily: '',
  fontSize: '',
  lineHeight: '',
  fontWeight: '',
  letterSpacing: '',
  displayName: '',
});

const ThemeContext = createContext<ThemeContextType>({
  currentTheme: 'brand',
  isDarkColor: true,
});

function useTypographySnippet(format: string) {
  const { framework } = useFramework();
  let snippet = `<ix-typography format="${format}"></ix-typography>`;

  if (framework === 'angular') {
    snippet = `<ix-typography format="${format}"></ix-typography>`;
  }
  if (framework === 'react') {
    snippet = `<IxTypography format="${format}"></IxTypography>`;
  }
  if (framework === 'vue') {
    snippet = `<ix-typography format="${format}"></ix-typography>`;
  }

  return snippet;
}

function TypographyCodeBlock({ format }) {
  const snippet = useTypographySnippet(format);

  return (
    <div className={clsx(styles.CodeBlockPreview, 'code-block-no-copy')}>
      <CodeBlock language="html">{snippet}</CodeBlock>
    </div>
  );
}

function TypographyCopyButton({ format }) {
  return (
    <CopyButton
      text="bla"
      preview={<TypographyCodeBlock format={format}></TypographyCodeBlock>}
    ></CopyButton>
  );
}

function BrowserOnlyTypographyTable({ children, typographyName }) {
  const location = useLocation();

  const [theme, setTheme] = useState(useDefaultTheme());
  const { colorMode } = useColorMode();

  const [isDarkColor, setIsDarkColor] = useState(colorMode === 'dark');

  const [expanded, setExpanded] = useState(
    location.hash === `#typography-${typographyName}`
  );
  const [typography, setTypography] = useState<TypographyContextType>({
    displayName: '',
    name: '',
    fontFamily: '',
    fontSize: '',
    fontWeight: '',
    lineHeight: '',
    letterSpacing: '',
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

  useEffect(() => {
    setIsDarkColor(colorMode === 'dark');
  }, [colorMode]);

  function getHexColors() {
    const name = `--theme-${typographyName}`;
    const [_, fontWeight, fontSize, lineHeight, fontFamily] =
      /(\d*)\s(.*REM)\/(.*)%\s(.*)/g.exec(getCustomCSSValue(name));

    const displayName = capitalize(typographyName, true);

    return {
      displayName,
      name,
      fontFamily,
      fontSize,
      fontWeight,
      lineHeight,
    } as TypographyContextType;
  }

  const observerRef = useRef(
    new MutationObserver(() => setTypography(getHexColors()))
  );

  useEffect(() => {
    setTypography(getHexColors());
  }, [typographyName, themeRef.current]);

  useLayoutEffect(() => {
    const observer = observerRef.current;
    if (!themeRef.current) {
      return;
    }

    observer.observe(themeRef.current, {
      attributes: true,
    });

    setTimeout(() => {
      setTypography(getHexColors());
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
    <ApiTable id={`typography-${typographyName}`}>
      <ThemeContext.Provider value={themeContext}>
        <TypographyContext.Provider value={typography}>
          <ColorContainerFix ref={themeRef}></ColorContainerFix>
          <AnchorHeader
            noBottomBorder={!expanded}
            onClick={() => setExpanded(!expanded)}
            anchorName={`typography-${typographyName}`}
            anchorLabel="Direct link to the typography"
            className={styles.AnchorHeader}
            leftClassName={styles.Header}
            rightClassName={styles.Toolbar}
            right={
              <>
                <TypographyCopyButton format={typographyName} />
                <div className={styles.DesktopOnly}>
                  <ThemeSelection onThemeChange={setTheme}></ThemeSelection>
                </div>
                <FrameworkSelection />
              </>
            }
          >
            <div className={styles.typographyRow}>
              <IxIcon
                name={expanded ? iconChevronDownSmall : iconChevronRightSmall}
              ></IxIcon>
              <span className={styles.headColorName}>
                {typography.displayName}
              </span>
            </div>
          </AnchorHeader>

          {expanded && children}
        </TypographyContext.Provider>
      </ThemeContext.Provider>
    </ApiTable>
  );
}

function TypographyStyle() {
  const typography = useContext(TypographyContext);
  const typographyName = typography.name.slice('--theme-'.length);
  const typographySnippet = useTypographySnippet(typographyName);
  return (
    <>
      <TypographyTable.Text name={'Preview'}>
        <div className={clsx(styles.typographyRow, styles.typographyPreview)}>
          <div
            className={clsx(
              styles.typographyColumn,
              styles.typographyColumnChildName
            )}
          >
            <IxTypography
              format={typography.name.slice('--theme-'.length) as any}
            >
              Lorem ipsum dolor sit amet consectutor.
            </IxTypography>
          </div>
        </div>
      </TypographyTable.Text>

      <TypographyTable.Text name={'Code'}>
        <div className={clsx(styles.typographyRow)}>
          <div
            className={clsx(
              styles.typographyColumn,
              styles.typographyColumnChildName
            )}
          >
            <TypographyCodeBlock
              format={typography.name.slice('--theme-'.length) as any}
            ></TypographyCodeBlock>

            <CopyButton
              label=""
              text={typographySnippet}
              className={styles.typographyRowCopyCode}
            ></CopyButton>
          </div>
        </div>
      </TypographyTable.Text>

      <TypographyTable.Text name={'Font family'}>
        <div className={clsx(styles.typographyRow)}>
          <div
            className={clsx(
              styles.typographyColumn,
              styles.typographyColumnChildName
            )}
          >
            <code>{typography.fontFamily}</code>
          </div>
        </div>
      </TypographyTable.Text>

      <TypographyTable.Text name={'Font size'}>
        <div className={clsx(styles.typographyRow)}>
          <div
            className={clsx(
              styles.typographyColumn,
              styles.typographyColumnChildName
            )}
          >
            <code>{typography.fontSize}</code>
          </div>
        </div>
      </TypographyTable.Text>

      <TypographyTable.Text name={'Line height'}>
        <div className={clsx(styles.typographyRow)}>
          <div
            className={clsx(
              styles.typographyColumn,
              styles.typographyColumnChildName
            )}
          >
            <code>{typography.lineHeight}%</code>
          </div>
        </div>
      </TypographyTable.Text>

      <TypographyTable.Text name={'Font weight'}>
        <div className={clsx(styles.typographyRow)}>
          <div
            className={clsx(
              styles.typographyColumn,
              styles.typographyColumnChildName
            )}
          >
            <code>{typography.fontWeight}</code>
          </div>
        </div>
      </TypographyTable.Text>
    </>
  );
}

function Text({ children, name }) {
  return (
    <div className={styles.typographyTextRow}>
      <div className="px-8 py-4 font-bold w-auto border-solid border-0 border-r border-[var(--theme-color-soft-bdr)]">
        {name}
      </div>
      <div className="w-auto">{children}</div>
    </div>
  );
}

const TypographyTable = ({ typographyName }) => {
  return (
    <BrowserOnly>
      {() => (
        <BrowserOnlyTypographyTable typographyName={typographyName}>
          <TypographyStyle />
        </BrowserOnlyTypographyTable>
      )}
    </BrowserOnly>
  );
};

TypographyTable.Text = Text;

export default TypographyTable;
