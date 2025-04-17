/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { iconCopy, iconSuccess } from '@siemens/ix-icons/icons';
import { IxIcon, IxTooltip } from '@siemens/ix-react';
import React, { useRef } from 'react';
import Button from '../Button';
import clsx from 'clsx';
import styles from './CopyButton.module.css';

const CopyButton = ({
  text,
  className,
  label,
  preview,
}: {
  text: string;
  className?: string;
  label?: string;
  preview?: any;
}) => {
  const tooltipRef = useRef<HTMLIxTooltipElement>(null);
  const previewTooltipRef = useRef<HTMLIxTooltipElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleCopy = async () => {
    if (previewTooltipRef.current) {
      await previewTooltipRef.current.hideTooltip();
    }
    await navigator.clipboard.writeText(text);
    tooltipRef.current?.showTooltip(buttonRef.current);
    setTimeout(() => {
      tooltipRef.current?.hideTooltip();
    }, 750);
  };

  return (
    <div className={clsx(styles.CopyButtonContainer, className)}>
      <input type="text" defaultValue={text} style={{ display: 'none' }} />
      <Button
        onClick={handleCopy}
        ref={buttonRef}
        className={styles.CopyButton}
      >
        {React.createElement('ix-icon', {
          name: iconCopy,
        })}
        {label ?? 'Copy'}
      </Button>
      {preview && (
        <IxTooltip
          for={buttonRef.current}
          ref={previewTooltipRef}
          interactive
          showDelay={150}
          hideDelay={50}
        >
          {preview}
        </IxTooltip>
      )}
      <IxTooltip ref={tooltipRef}>
        <div className={styles.TooltipSuccess}>
          <IxIcon name={iconSuccess} color="color-success" size="16"></IxIcon>
          Copied
        </div>
      </IxTooltip>
    </div>
  );
};

export default CopyButton;
