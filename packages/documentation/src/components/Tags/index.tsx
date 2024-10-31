import './LegacyTag.css';
import { IxIcon } from '@siemens/ix-react';

export default function LegacyTag(
  props: Readonly<{
    url: string;
    hasDeprecatedAncestor: boolean;
    deprecationVersion?: string;
  }>
) {
  return (
    <div className="TagsContainer d-flex gap-2 align-items-center">
      {!props.hasDeprecatedAncestor && (
        <span className="Api__Table Docs__Tag Docs__Tag__Deprecated">
          Deprecated since {props.deprecationVersion}
        </span>
      )}
      <a href={props.url} target="_blank" className="TagContainer">
        <IxIcon name="open-external" color="color-primary" size="16"></IxIcon>
        {props.hasDeprecatedAncestor
          ? 'Show deprecated version'
          : 'Show latest version'}
      </a>
    </div>
  );
}
