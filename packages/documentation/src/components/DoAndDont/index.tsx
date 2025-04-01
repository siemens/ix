import React from 'react';
import styles from './styles.module.css';
import { IxIcon } from '@siemens/ix-react';
import { iconCancelled, iconSuccess } from '@siemens/ix-icons/icons';

export type VariantType = 'do' | 'dont' | 'do-gradient' | 'dont-gradient';

export type IconConfig = {
  readonly icon: string | null;
  readonly iconColor: string | null;
};

export type LayoutProps = {
  readonly children: React.ReactNode;
};

export type ItemProps = {
  readonly children: React.ReactNode;
};

export type ColProps = {
  readonly variant?: VariantType;
  readonly children: React.ReactNode;
};

export type VariantComponentProps = {
  readonly children: React.ReactNode;
};

const ICON_CONFIG: Record<string, IconConfig> = {
  do: { icon: iconSuccess, iconColor: 'color-success' },
  dont: { icon: iconCancelled, iconColor: 'color-alarm' },
  'do-gradient': { icon: iconSuccess, iconColor: 'color-success' },
  'dont-gradient': { icon: iconCancelled, iconColor: 'color-alarm' },
  default: { icon: null, iconColor: null },
};

function Layout(props: LayoutProps) {
  return <div className={styles.layout}>{props.children}</div>;
}

function Item(props: ItemProps) {
  return <div>{props.children}</div>;
}

function Col(props: ColProps) {
  const { variant, children } = props;

  const variantClass = variant ? `${styles[variant]}` : '';
  const iconProps = variant ? ICON_CONFIG[variant] : ICON_CONFIG.default;

  return (
    <div className={`${styles.col} ${variantClass}`}>
      {React.Children.map(children, (child) => (
        <div className={styles.entry}>
          {iconProps.icon && (
            <IxIcon
              name={iconProps.icon}
              color={iconProps.iconColor}
              size="24"
            />
          )}
          {child}
        </div>
      ))}
    </div>
  );
}

function Do(props: VariantComponentProps) {
  return <Col variant="do">{props.children}</Col>;
}

function Dont(props: VariantComponentProps) {
  return <Col variant="dont">{props.children}</Col>;
}

function DoGradient(props: VariantComponentProps) {
  return <Col variant="do-gradient">{props.children}</Col>;
}

function DontGradient(props: VariantComponentProps) {
  return <Col variant="dont-gradient">{props.children}</Col>;
}

Layout.Do = Do;
Layout.Dont = Dont;
Layout.DoGradient = DoGradient;
Layout.DontGradient = DontGradient;
Layout.Item = Item;

export default Layout;
