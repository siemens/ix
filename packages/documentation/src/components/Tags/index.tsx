import './LegacyTag.css';
import { IxIcon } from '@siemens/ix-react';

export default function LegacyTag(props: { isDeprecated: boolean }) {
  return (
    <div
      className={`TagContainer ${
        props.isDeprecated ? 'TagDeprecatedContainer' : ''
      }`}
    >
      <IxIcon
        name="open-external"
        color={props.isDeprecated ? 'color-alarm' : 'color-primary'}
        size="24"
      ></IxIcon>
      <div
        className={`Title ${props.isDeprecated ? 'TagDeprecatedTitle' : ''}`}
      >
        {props.isDeprecated ? 'Show deprecated version' : 'Show latest version'}
      </div>
    </div>
  );
}
