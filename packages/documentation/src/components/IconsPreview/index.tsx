/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import ICON_LIST from '@siemens/ix-icons/dist/sample.json';
import clsx from 'clsx';
import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from 'react';
import styles from './Icons.module.css';
import {
  IxCheckbox,
  IxIcon,
  IxIconButton,
  IxInput,
  IxTooltip,
  IxTypography,
} from '@siemens/ix-react';
import { iconClear, iconSearch, iconSuccess } from '@siemens/ix-icons/icons';
import { FrameworkTypes } from '@site/src/hooks/use-framework';
import FrameworkSelection from '../UI/FrameworkSelection';
import CodeBlock from '@theme/CodeBlock';
import { fromKebabCaseToCamelCase } from '@site/src/lib/utils/string-format';
import { debounce } from '@site/src/lib/utils/debounce';
import BrowserOnly from '@docusaurus/BrowserOnly';

function getIconCode(iconName: string, framework: FrameworkTypes) {
  const importedName = 'icon' + fromKebabCaseToCamelCase(iconName);

  switch (framework) {
    case 'angular':
      return `<ix-icon name="${iconName}"></ix-icon>`;
    case 'react':
      return `<IxIcon name={${importedName}}></IxIcon>`;
    case 'vue':
      return `<IxIcon :name="${importedName}"></IxIcon>`;
    default:
      return `<ix-icon name="${iconName}"></ix-icon>`;
  }
}

function getColumnCount(width: number) {
  if (width < 496) {
    return 2;
  } else if (width < 640) {
    return 3;
  } else if (width < 784) {
    return 4;
  } else if (width < 928) {
    return 5;
  } else if (width < 997) {
    return 6;
  } else if (width < 1216) {
    return 4;
  } else if (width < 1360) {
    return 5;
  } else if (width < 1504) {
    return 6;
  } else {
    return 7;
  }
}

const IconTiles: React.FC<{ columnCount: number; iconList: string[] }> = (
  props
) => {
  const [framework, setFramework] = useState<FrameworkTypes>('angular');
  const IconDetails = React.forwardRef<
    HTMLDivElement,
    { iconName: string; columnCount: number }
  >(function (props, ref) {
    const tooltipRef = useRef<HTMLIxTooltipElement>(null);
    const codeBlockContainerRef = useRef<HTMLDivElement>(null);

    async function copyToClipboard(text: string) {
      await navigator.clipboard.writeText(text);
      tooltipRef.current?.showTooltip(codeBlockContainerRef.current);
      setTimeout(() => {
        tooltipRef.current?.hideTooltip();
      }, 750);
    }

    function getWidth() {
      const tileWidth = 128;
      const tileMargin = 16;
      return (
        tileWidth * props.columnCount + tileMargin * (props.columnCount - 1)
      );
    }

    return (
      <div
        ref={ref}
        style={{ width: getWidth() }}
        className={styles.Icon__Details}
      >
        <IxIcon name={props.iconName} size="32" />
        <div className={styles.Icon__FlexContent}>
          <div className={styles.Icon__NameContainer}>
            <IxTypography format="h3">{props.iconName}</IxTypography>
            <a href={`#${props.iconName}`} className="hash-link"></a>
          </div>

          <div
            ref={codeBlockContainerRef}
            className={clsx(
              styles.Icon__CodeContainer,
              'code-block-no-copy',
              'code-block-no-wrap'
            )}
            onClick={() => {
              copyToClipboard(getIconCode(props.iconName, framework));
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                copyToClipboard(getIconCode(props.iconName, framework));
              }
            }}
          >
            <CodeBlock className={styles.Icon__Code} language="html">
              {getIconCode(props.iconName, framework)}
            </CodeBlock>
            <IxTooltip ref={tooltipRef}>
              <div className={styles.TooltipSuccess}>
                <IxIcon
                  name={iconSuccess}
                  color="color-success"
                  size="16"
                ></IxIcon>
                Copied
              </div>
            </IxTooltip>
          </div>
        </div>
        <div className={styles.FrameworkSelectionContainer}>
          <FrameworkSelection onFrameworkChange={(fw) => setFramework(fw)} />
        </div>
      </div>
    );
  });

  const iconDetailsRef = useRef<HTMLDivElement>(null);
  const handleIconClick = useCallback((icon: string) => {
    setSelectedIcon((prev) => (prev === icon ? null : icon));
    setTimeout(() => {
      iconDetailsRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }, 0);
  }, []);

  window.addEventListener('keydown', (e) => {
    if (
      e.key === 'Escape' &&
      iconDetailsRef.current?.contains(document.activeElement)
    ) {
      setSelectedIcon(null);
    }
  });

  const [selectedIcon, setSelectedIcon] = useState<string | null>();
  const iconRows = useMemo(() => {
    const rows = [];
    for (let i = 0; i < props.iconList.length; i += props.columnCount) {
      rows.push(props.iconList.slice(i, i + props.columnCount));
    }
    return rows;
  }, [props.iconList, props.columnCount]);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      handleIconClick(hash);
    }
  }, []);

  return (
    <div className={clsx(styles.Icons)}>
      {iconRows.map((row, rowIndex) => (
        <div key={rowIndex}>
          <div className={styles.Icon__Row}>
            {row.map((icon) => (
              <div
                className={clsx(
                  styles.Icon__Container,
                  props.columnCount > 2 &&
                    row.includes(selectedIcon) &&
                    styles.Icon__ContainerDetails
                )}
                key={icon}
              >
                <div
                  className={clsx(styles.Icon__Tile, {
                    [styles.Selected]: selectedIcon === icon,
                  })}
                  onClick={() => handleIconClick(icon)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleIconClick(icon);
                    }
                  }}
                >
                  {React.createElement('ix-icon', {
                    name: icon,
                  })}
                  <div className={styles.Icon__Name}>
                    <IxTypography tabIndex={0} format="body">
                      {icon}
                    </IxTypography>
                  </div>
                </div>
                {selectedIcon === icon && props.columnCount > 2 && (
                  <IconDetails
                    ref={iconDetailsRef}
                    iconName={selectedIcon}
                    columnCount={props.columnCount}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const Icons: React.FC = () => {
  const [iconFilter, setIconFilter] = useState<string>();
  const [showRegularIcons, setShowRegularIcons] = useState<boolean>(true);
  const [showFilledIcons, setShowFilledIcons] = useState<boolean>(true);
  const [icons] = useState<string[]>(ICON_LIST.icons);
  const [iconList, setIconList] = useState<string[]>(ICON_LIST.icons);
  const [columnCount, setColumnCount] = useState<number>(2);
  const filterInputRef = useRef<HTMLIxInputElement>(null);

  const filteredIcons = useMemo(() => {
    return icons.filter((icon) => {
      const isFilled = icon.endsWith('-filled');
      const matchesFilter =
        !iconFilter || icon.toLowerCase().includes(iconFilter);

      return (
        ((showRegularIcons && !isFilled) || (showFilledIcons && isFilled)) &&
        matchesFilter
      );
    });
  }, [icons, iconFilter, showRegularIcons, showFilledIcons]);

  useEffect(() => {
    setIconList(filteredIcons);
  }, [filteredIcons]);

  useEffect(() => {
    const handleResize = debounce(() => {
      const width = window.innerWidth;
      const count = getColumnCount(width);
      if (count !== columnCount) {
        setColumnCount(count);
      }
    }, 150);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [columnCount]);

  useEffect(() => {
    setColumnCount(getColumnCount(window.innerWidth));
  }, []);

  return (
    <BrowserOnly>
      {() => (
        <div className={styles.IconsPreview}>
          <div className={clsx(styles.Search)}>
            <IxInput
              ref={filterInputRef}
              placeholder="Search Icon"
              onInput={(e) =>
                setIconFilter(
                  (e.target as HTMLInputElement).value.toLocaleLowerCase()
                )
              }
            >
              <IxIcon
                name={iconSearch}
                color="color-dynamic"
                slot="start"
                size="16"
              ></IxIcon>
              {iconFilter && (
                <IxIconButton
                  ghost
                  oval
                  iconColor="color-soft-text"
                  icon={iconClear}
                  slot="end"
                  size="16"
                  onClick={() => {
                    setIconFilter('');
                    filterInputRef.current.value = '';
                  }}
                ></IxIconButton>
              )}
            </IxInput>
            <IxCheckbox
              checked={showRegularIcons}
              label="Show regular icons"
              onCheckedChange={(e) => {
                setShowRegularIcons(e.detail);
              }}
            ></IxCheckbox>
            <IxCheckbox
              checked={showFilledIcons}
              label="Show filled icons"
              onCheckedChange={(e) => {
                setShowFilledIcons(e.detail);
              }}
            ></IxCheckbox>
          </div>

          <IconTiles columnCount={columnCount} iconList={iconList} />

          {iconList.length === 0 && (
            <div className={styles.Search__NoResults}>
              <IxIcon
                className={styles.Search__NoResultsIcon}
                name="search"
                color="color-soft-text"
              ></IxIcon>
              <div className={styles.Search__NoIconsFound}>No icons found</div>
              <div className={styles.Search__AdaptOrRequest}>
                Adapt the filter<br></br> or open an icon request in{' '}
                <a
                  target="_blank"
                  href="https://github.com/siemens/ix-icons/issues"
                >
                  GitHub
                </a>
                .
              </div>
            </div>
          )}
        </div>
      )}
    </BrowserOnly>
  );
};

export default Icons;
