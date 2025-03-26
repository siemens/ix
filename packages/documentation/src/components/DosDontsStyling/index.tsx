import React from 'react';
import styles from './styles.module.css';
import { IxIcon } from '@siemens/ix-react';
import { iconCancelled, iconSuccess } from '@siemens/ix-icons/icons';

export type VariantType = 'do' | 'dont' | 'do-gradient' | 'dont-gradient' | undefined;

export interface IconConfig {
  readonly icon: string | null;
  readonly iconColor: string | null;
}

export interface LayoutProps {
  readonly children: React.ReactNode;
}

export interface ItemProps {
  readonly children: React.ReactNode;
}

export interface ColProps {
  readonly variant?: VariantType;
  readonly children: React.ReactNode;
}

export interface VariantComponentProps {
  readonly children: React.ReactNode;
}

const ICON_CONFIG: Record<string, IconConfig> = {
  do: { icon: iconSuccess, iconColor: 'color-success' },
  dont: { icon: iconCancelled, iconColor: 'color-alarm' },
  'do-gradient': { icon: iconSuccess, iconColor: 'color-success' },
  'dont-gradient': { icon: iconCancelled, iconColor: 'color-alarm' },
  default: { icon: null, iconColor: null },
};

export function Layout(props: LayoutProps) {
  return (
    <div className={`${styles.layout}`}>
      {props.children}
    </div>
  );
}

export function Item(props: ItemProps) {
  return (
    <div>
      {props.children}
    </div>
  );
}

export function Col(props: ColProps) {
  const { variant, children } = props;

  const variantClass = variant ? `${styles[variant]}` : '';
  const iconProps = variant ? ICON_CONFIG[variant] : ICON_CONFIG.default;

  return (
    <div className={`${styles.col} ${variantClass}`}>
      {React.Children.map(children, child => (
        <div className={styles.entry}>
          {iconProps.icon && (
            <IxIcon name={iconProps.icon} color={iconProps.iconColor} size="24" />
          )}
          {child}
        </div>
      ))}
    </div>
  );
}

export function Do(props: VariantComponentProps) {
  return <Col variant="do">{props.children}</Col>;
}

export function Dont(props: VariantComponentProps) {
  return <Col variant="dont">{props.children}</Col>;
}

export function DoGradient(props: VariantComponentProps) {
  return <Col variant="do-gradient">{props.children}</Col>;
}

export function DontGradient(props: VariantComponentProps) {
  return <Col variant="dont-gradient">{props.children}</Col>;
}
