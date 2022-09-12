import clsx from 'clsx';
import React from 'react';
import styles from './Guideline.module.css';

export function Guideline(props: { label: string; do?: boolean }) {
  function getIcon() {
    if (props.do) {
      return (
        <ix-icon name="single-check" size="16" color="color-success"></ix-icon>
      );
    } else {
      return <ix-icon name="close" size="16" color="color-alarm"></ix-icon>;
    }
  }

  return (
    <div className={clsx(styles.Guideline)}>
      <div className={clsx(styles.Icon)}>{getIcon()}</div>
      <div>{props.label}</div>
    </div>
  );
}
