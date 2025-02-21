/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { iconCopy } from '@siemens/ix-icons/icons';
import { IxIconButton, IxTooltip } from '@siemens/ix-react';
import { useRef } from 'react';

const CopyButton = ({ text }) => {
  const tooltipRef = useRef<HTMLIxTooltipElement>(null);
  const buttonRef = useRef<HTMLIxIconButtonElement>(null);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    tooltipRef.current?.showTooltip(buttonRef.current!);
    setTimeout(() => {
      tooltipRef.current?.hideTooltip();
    }, 750);
  };

  return (
    <div>
      <input type="text" defaultValue={text} style={{ display: 'none' }} />
      <IxIconButton onClick={handleCopy} icon={iconCopy} ghost ref={buttonRef}>
        Copy Text
      </IxIconButton>
      <IxTooltip ref={tooltipRef}>Copied to clipboard 🎉</IxTooltip>
    </div>
  );
};

export default CopyButton;
