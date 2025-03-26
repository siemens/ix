import React, { ReactElement, ReactNode } from 'react';
import styles from './styles.module.css';
import { iconCancelled, iconSuccess } from '@siemens/ix-icons/icons';
import { IxIcon } from '@siemens/ix-react';

interface ComponentProps {
  children: ReactNode;
}

interface IconConfig {
  icon: string | null;
  iconColor: string | null;
}

const ICON_CONFIG: Record<string, IconConfig> = {
  do: { icon: iconSuccess, iconColor: 'color-success' },
  dont: { icon: iconCancelled, iconColor: 'color-alarm' },
  'do-gradient': { icon: iconSuccess, iconColor: 'color-success' },
  'dont-gradient': { icon: iconCancelled, iconColor: 'color-alarm' },
  default: { icon: null, iconColor: null },
};

export function Layout(props: ComponentProps): ReactElement {
  return React.createElement('div', { className: styles.layout }, props.children);
}

export function Item(props: ComponentProps): ReactElement {
  return React.createElement('div', { className: styles.item }, props.children);
}

export function Col(props: ComponentProps): ReactElement {
  let fragmentElements: ReactNode[] = React.isValidElement(props.children) && props.children.props?.children
    ? React.Children.toArray(props.children.props.children)
    : React.Children.toArray(props.children);
  const variantRegex = /\[!(do|dont|info)(-gradient)?]/;
  let variant: string | undefined = undefined;

  fragmentElements = fragmentElements.filter((element) => {
    if (React.isValidElement(element)) {
      const match = variantRegex.exec(element.props.children);
      if (match) {
        variant = match[1] + (match[2] || '');
        return false;
      }
    }
    return true;
  });

  const variantClassName = variant ? styles[variant] : '';
  const iconProps = variant ? ICON_CONFIG[variant] : undefined;

  return (
    <div className={`${styles.col} ${variantClassName}`}>
      {fragmentElements.map((el) => {
        return (
          <div className={styles.entry}>
            <IxIcon name={iconProps.icon} color={iconProps.iconColor} size="24"  />
            {el}
          </div>
        );
      })}
    </div>
  );
}
