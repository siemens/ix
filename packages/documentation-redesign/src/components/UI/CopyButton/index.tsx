/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { iconCopy } from '@siemens/ix-icons/icons';
import { IxTooltip } from '@siemens/ix-react';
import React, { useRef } from 'react';
import Button from '../Button';

const CopyButton = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const tooltipRef = useRef<HTMLIxTooltipElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    tooltipRef.current?.showTooltip(buttonRef.current);
    setTimeout(() => {
      tooltipRef.current?.hideTooltip();
    }, 750);
  };

  return (
    <div className={className}>
      <input type="text" defaultValue={text} style={{ display: 'none' }} />
      <Button onClick={handleCopy} ref={buttonRef}>
        {React.createElement('ix-icon', {
          name: iconCopy,
        })}
        Copy
      </Button>
      <IxTooltip ref={tooltipRef}>✅ Copied to clipboard</IxTooltip>
    </div>
  );
};

export default CopyButton;
