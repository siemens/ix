/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import clsx from 'clsx';
import React from 'react';
import styles from './Guideline.module.css';

export function Guideline(props: { label: string; do?: boolean }) {
  function getIcon() {
    if (props.do) {
      return <cw-icon name="single-check" size="16" color="color-success"></cw-icon>;
    } else {
      return <cw-icon name="close" size="16" color="color-alarm"></cw-icon>;
    }
  }

  return (
    <div className={ clsx(styles.Guideline)}>
      <div className={ clsx(styles.Icon)}>{getIcon()}</div>
      <div>{props.label}</div>
    </div>
  );
}
