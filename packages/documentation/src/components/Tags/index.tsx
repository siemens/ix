import './LegacyTag.css';
import { IxIcon } from '@siemens/ix-react';

export default function LegacyTag(props: {
  url: string;
  hasDeprecatedAncestor: boolean;
  deprecationVersion?: string;
}) {
  return (
    <div className="TagsContainer d-flex gap-2 align-items-center">
      {!props.hasDeprecatedAncestor && (
        <span className="Api__Table Docs__Tag Docs__Tag__Deprecated">
          Deprecated since {props.deprecationVersion}
        </span>
      )}
      <a
        href={props.url}
        target="_blank"
        className={`TagContainer ${
          props.hasDeprecatedAncestor ? 'TagDeprecatedContainer' : ''
        }`}
      >
        <IxIcon
          name="open-external"
          color={props.hasDeprecatedAncestor ? 'color-alarm' : 'color-primary'}
          size="16"
        ></IxIcon>
        <div
          className={`Title ${
            props.hasDeprecatedAncestor ? 'TagDeprecatedTitle' : ''
          }`}
        >
          {props.hasDeprecatedAncestor
            ? 'Show deprecated version'
            : 'Show latest version'}
        </div>
      </a>
    </div>
  );
}
