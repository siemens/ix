/*
 * COPYRIGHT (c) Siemens AG 2018-2024 ALL RIGHTS RESERVED.
 */
import {
  IxButton,
  IxCol,
  IxContent,
  IxContentHeader,
  IxEmptyState,
  IxEventList,
  IxEventListItem,
  IxIcon,
  IxLayoutGrid,
  IxRow,
  IxSlider,
  IxToggle,
  IxTypography,
} from '@siemens/ix-react';
import classNames from 'classnames';
import { useState } from 'react';
import styles from './Demo.module.css';
import { iconAdd } from '@siemens/ix-icons/icons';

function EmptyExample() {
  return (
    <div className={styles.Example}>
      <IxEmptyState
        header="No elements available"
        subHeader="Create an element first"
        icon={iconAdd}
        action="Create element"
      ></IxEmptyState>
    </div>
  );
}

function SliderExample() {
  return (
    <div className={classNames(styles.Example, styles.SliderExample)}>
      <IxSlider
        trace
        trace-reference={50}
        marker={[0, 25, 50, 75, 100]}
        value={25}
      >
        <span slot="label-start">0</span>
        <span slot="label-end">100</span>
      </IxSlider>

      <IxSlider
        min={0}
        max={50}
        value={20}
        step={10}
        trace
        trace-reference={10}
        marker={[0, 10, 20, 30, 40, 50]}
      >
        <span slot="label-start">0</span>
        <span slot="label-end">100</span>
      </IxSlider>

      <IxSlider trace trace-reference={50} marker={[0, 25, 50, 75, 100]} error>
        <span slot="label-start">0</span>
        <span slot="label-end">100</span>
      </IxSlider>
    </div>
  );
}

function EventListExample() {
  return (
    <div className={styles.Example}>
      <IxEventList compact>
        <IxEventListItem color="color-primary">Text 1</IxEventListItem>
        <IxEventListItem color="color-primary">Text 2</IxEventListItem>
        <IxEventListItem color="color-primary">Text 3</IxEventListItem>
        <IxEventListItem color="color-primary">Text 4</IxEventListItem>
      </IxEventList>
    </div>
  );
}

function ToggleExample() {
  return (
    <div className={classNames(styles.Example)}>
      <IxToggle className={styles.Toggle}></IxToggle>
      <IxToggle className={styles.Toggle} checked></IxToggle>
      <IxToggle className={styles.Toggle} disabled></IxToggle>
      <IxToggle className={styles.Toggle} checked disabled></IxToggle>
    </div>
  );
}

function ButtonExample() {
  return (
    <div className={classNames(styles.Example, styles.ButtonExample)}>
      <IxButton>Button primary</IxButton>
      <IxButton variant="secondary">Button primary</IxButton>
      <IxButton outline>Button primary</IxButton>
      <IxButton outline variant="secondary">
        Button primary
      </IxButton>
      <IxButton ghost>Button primary</IxButton>
      <IxButton ghost variant="secondary">
        Button primary
      </IxButton>
      <IxButton disabled>Button primary</IxButton>
      <IxButton disabled variant="secondary">
        Button primary
      </IxButton>
    </div>
  );
}

function TypographyExample() {
  return (
    <div className={classNames(styles.Example, styles.TypographyExample)}>
      <IxTypography format="h1">Block H1</IxTypography>
      <IxTypography format="h2">Block H2</IxTypography>
      <IxTypography format="display">Block Display</IxTypography>
      <IxTypography format="body">Block Body</IxTypography>
      <IxTypography format="label-sm">Block Label</IxTypography>
    </div>
  );
}

function IconExamples() {
  const [icons] = useState([
    ['app-menu', 'rocket', 'calendar', 'capacity'],
    ['backup', 'bar-code', 'battery-full', 'clock'],
    ['cloud', 'code', 'cogwheel', 'database'],
  ]);

  return (
    <div className={classNames(styles.Example, styles.IconsExample)}>
      <IxLayoutGrid>
        {icons.map((iconRow, row) => (
          <IxRow key={row}>
            {iconRow.map((icon, col) => (
              <IxCol
                key={`${row}_${col}_${icon}`}
                size="3"
                class={styles.IconCol}
              >
                <IxIcon name={icon}></IxIcon>
              </IxCol>
            ))}
          </IxRow>
        ))}
      </IxLayoutGrid>
    </div>
  );
}

const Demo: React.FC = () => {
  return (
    <IxContent>
      <IxContentHeader
        slot="header"
        headerTitle="Other"
        headerSubtitle="Explain what this page is about"
      ></IxContentHeader>
      <IxLayoutGrid noMargin>
        <IxRow>
          <IxCol>
            <IconExamples />
          </IxCol>
        </IxRow>
        <IxRow>
          <IxCol>
            <EmptyExample />
          </IxCol>
        </IxRow>
        <IxRow>
          <IxCol>
            <TypographyExample />
          </IxCol>
          <IxCol>
            <ToggleExample />
          </IxCol>
          <IxCol>
            <ButtonExample />
          </IxCol>
        </IxRow>
        <IxRow>
          <IxCol>
            <SliderExample />
          </IxCol>
        </IxRow>
        <IxRow>
          <IxCol>
            <EventListExample />
          </IxCol>
        </IxRow>
      </IxLayoutGrid>
    </IxContent>
  );
};

export default Demo;
