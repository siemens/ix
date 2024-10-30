import './LegacyTag.css';
import { IxIcon } from '@siemens/ix-react';

export default function LegacyTag(props: {url: string, isDeprecated: boolean }) {

  return (
    <a
      href={props.url}
      target="_blank"
      className={`TagContainer ${
        props.isDeprecated ? 'TagDeprecatedContainer' : ''
      }`}
    >
      <IxIcon
        name="open-external"
        color={props.isDeprecated ? 'color-alarm' : 'color-primary'}
        size="16"
      ></IxIcon>
      <div
        className={`Title ${props.isDeprecated ? 'TagDeprecatedTitle' : ''}`}
      >
        {props.isDeprecated ? 'Show deprecated version' : 'Show latest version'}
      </div>
    </a>
  );
}
