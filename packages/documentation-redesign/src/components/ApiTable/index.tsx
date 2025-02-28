/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import styles from './ApiTable.module.css';
import { useFramework } from '@site/src/hooks/use-framework';
import FrameworkSelection from '../UI/FrameworkSelection';
import BrowserOnly from '@docusaurus/BrowserOnly';

export type ApiTableProps = {
  readonly children?: React.ReactNode;
  readonly name: string;
  readonly type?: 'event' | 'property' | 'slot';
};

const toKebabCase = (str: string) => {
  return str
    .split('')
    .map((letter, idx) => {
      return letter.toUpperCase() === letter
        ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
        : letter;
    })
    .join('');
};

function ApiTable({ children, id }) {
  return (
    <BrowserOnly>
      {() => (
        <div className="api-table container mx-auto mb-8" id={id}>
          <div className="bg-[transparent] rounded-lg overflow-hidden border-solid border-[1px] border-[var(--theme-color-soft-bdr)]">
            {children}
          </div>
        </div>
      )}
    </BrowserOnly>
  );
}

function PropertyHeader({ children, name, type }: ApiTableProps) {
  const { framework } = useFramework();

  let propertyName = name;

  if (framework === 'vue' || framework === 'angular' || framework === 'html') {
    propertyName = toKebabCase(name);
  }

  return (
    <div className="flex bg-[var(--theme-color-2)] text-[var(--theme-color-std-text)] p-4 border-solid border-0 border-b border-[var(--theme-color-soft-bdr)] anchor">
      <div className="flex items-center font-bold">
        {propertyName}
        <a
          href={`#${type ?? 'property'}-${name}`}
          className="hash-link"
          aria-label={`Direct link to ${name}`}
          title={`Direct link to ${name}`}
        ></a>
      </div>
      <div className="flex items-center ml-auto gap-2">
        {children}
        <FrameworkSelection />
      </div>
    </div>
  );
}

function EventHeader({ children, name }: ApiTableProps) {
  const { framework } = useFramework();

  let eventName = name;

  if (framework === 'react') {
    eventName = `on${name.charAt(0).toUpperCase()}${name.slice(1)}`;
  }

  return (
    <PropertyHeader name={eventName} type="event">
      {children}
    </PropertyHeader>
  );
}

function SlotHeader({ children, name }: ApiTableProps) {
  return (
    <PropertyHeader name={name} type="slot">
      {children}
    </PropertyHeader>
  );
}

function Text({ children, name }: ApiTableProps) {
  return (
    <div className="grid grid-cols-[minmax(100px,20%)_1fr] gap-2 border-solid border-0 border-b border-[var(--theme-color-soft-bdr)]">
      <div className="px-8 py-4 font-bold w-auto border-solid border-0 border-r border-[var(--theme-color-soft-bdr)]">
        {name}
      </div>
      <div className="w-auto p-4">{children}</div>
    </div>
  );
}

function Code({ children, name }: ApiTableProps) {
  return (
    <Text name={name}>
      <code className="p-1">{children}</code>
    </Text>
  );
}

ApiTable.PropertyHeader = PropertyHeader;
ApiTable.EventHeader = EventHeader;
ApiTable.SlotHeader = SlotHeader;
ApiTable.Text = Text;
ApiTable.Code = Code;

export default ApiTable;

export function AnchorHeader({
  children,
  right,
  anchorName,
  anchorLabel,
  onClick,
}: {
  children: React.ReactNode;
  right?: React.ReactNode;
  anchorName: string;
  anchorLabel: string;
  onClick?: () => void;
}) {
  return (
    <div className="flex bg-[var(--theme-color-2)] text-[var(--theme-color-std-text)] p-4 border-solid border-0 border-b border-[var(--theme-color-soft-bdr)]">
      <div className="flex items-center font-bold w-full">
        <button onClick={onClick} className={styles.AnchorButton}>
          {children}
          <a
            href={`#${anchorName}`}
            className="hash-link"
            aria-label={anchorLabel}
            title={anchorLabel}
          ></a>
        </button>
      </div>
      <div className="flex items-center ml-auto gap-2">{right}</div>
    </div>
  );
}
