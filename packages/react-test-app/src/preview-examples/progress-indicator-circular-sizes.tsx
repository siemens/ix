
import { IxProgressIndicator } from '@siemens/ix-react';
import './progress-indicator.scoped.css';

export default () => {
  return (
    <>
      <h2 className="example-header">Size - XS</h2>
      <IxProgressIndicator
        type="circular"
        label="Download"
        value={75}
        helper-text="This is a help text for the progress indicator"
        size="xs"
      >
        75%
      </IxProgressIndicator>
      <h2 className="example-header">Size - SM</h2>
      <IxProgressIndicator
        type="circular"
        label="Download"
        value={75}
        helper-text="This is a help text for the progress indicator"
        size="sm"
      >
        75%
      </IxProgressIndicator>
      <h2 className="example-header">Size - MD</h2>
      <IxProgressIndicator
        type="circular"
        label="Download"
        value={75}
        helper-text="This is a help text for the progress indicator"
        size="md"
      >
        75%
      </IxProgressIndicator>
      <h2 className="example-header">Size - LG</h2>
      <IxProgressIndicator
        type="circular"
        label="Download"
        value={75}
        helper-text="This is a help text for the progress indicator"
        size="lg"
      >
        75%
      </IxProgressIndicator>
      <h2 className="example-header">Size - XL</h2>
      <IxProgressIndicator
        type="circular"
        label="Download"
        value={75}
        helper-text="This is a help text for the progress indicator"
        size="xl"
      >
        75%
      </IxProgressIndicator>
    </>
  );
};
