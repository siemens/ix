import { IxButton } from '@siemens/ix-react';
import React from 'react';

export const Buttons: React.FC = () => {
  return (
    <>
      <IxButton className="m-1" variant="Primary">
        Webcomponents button
      </IxButton>
      <IxButton className="m-1" variant="Secondary">
        Webcomponents button
      </IxButton>
      <IxButton className="m-1" outline>
        Webcomponents button
      </IxButton>
      <IxButton className="m-1" invisible>
        Webcomponents button
      </IxButton>
    </>
  );
};
