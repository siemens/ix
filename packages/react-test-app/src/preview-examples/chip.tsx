/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { IxChip } from '@siemens/ix-react';
import React, { CSSProperties } from 'react';

export const Chip: React.FC = () => {
  const styled: CSSProperties = {
    width: '10rem',
  };
  return (
    <div className="example">
      <IxChip closable outline>
        Primary
      </IxChip>
      <IxChip icon="print">Primary with icon</IxChip>
      <IxChip icon="print" style={styled} closable>
        Primary
      </IxChip>

      <IxChip variant="critical" closable outline>
        Alarm
      </IxChip>
      <IxChip variant="alarm" icon="print">
        Alarm with icon
      </IxChip>
      <IxChip variant="alarm" icon="print" style={styled} closable>
        Alarm
      </IxChip>
      <IxChip variant="warning" icon="print" style={styled} closable>
        Alarm
      </IxChip>
      <IxChip
        background="purple"
        color="green"
        variant="custom"
        icon="print"
        style={styled}
        closable
      >
        Custom
      </IxChip>
    </div>
  );
};
