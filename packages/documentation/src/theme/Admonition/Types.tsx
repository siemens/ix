import React, { ReactElement, ReactNode } from 'react';
import DefaultAdmonitionTypes from '@theme-original/Admonition/Types';
import styles from './styles.module.css';
import { IxIcon } from '@siemens/ix-react';

interface LayoutProps {
  readonly children: ReactNode;
}

function Layout({ children }: LayoutProps): JSX.Element {
  return <div className={`${styles.layout}`}>{children}</div>;
}

const ICON_CONFIG: Record<string, { name: string; color: string }> = {
  do: { name: 'success', color: 'color-success' },
  dont: { name: 'cancelled', color: 'color-alarm' },
  doGradient: { name: 'success', color: 'color-success' },
  dontGradient: { name: 'cancelled', color: 'color-alarm' },
  default: { name: null, color: null },
};

interface ColProps {
  readonly children: ReactElement | ReactElement[];
}

function Col({ children }: ColProps): JSX.Element {
  const fragmentElements = React.Children.toArray(children);

  const processContent = (content: any): string[] => {
    if (!content) return [];

    if (typeof content === 'string') {
      return content.split('\n').filter((line) => line.trim());
    }

    if (Array.isArray(content)) {
      return content.flatMap(processContent);
    }

    if (content.props?.children) {
      return processContent(content.props.children);
    }

    return [];
  };

  const contentItems = processContent(fragmentElements);

  const variantRegex = /\[!(do|dont|info)(-gradient)?]/;
  let variant: string | undefined = undefined;

  const displayItems = contentItems.filter((item) => {
    const match = variantRegex.exec(item);
    if (match) {
      variant = match[1] + (match[2] || '');
      return false;
    }
    return true;
  });

  const variantClassName = variant ? styles[variant] : '';
  const iconProps = variant ? ICON_CONFIG[variant] : undefined;

  return (
    <div className={`${styles.col} ${variantClassName}`}>
      {displayItems.map((item) => (
        <div key={item} className={styles.item}>
          {iconProps && (
            <IxIcon name={iconProps.name} color={iconProps.color} size="24" />
          )}
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
}

const AdmonitionTypes = {
  ...DefaultAdmonitionTypes,
  layout: Layout,
  col: Col,
};

export default AdmonitionTypes;
