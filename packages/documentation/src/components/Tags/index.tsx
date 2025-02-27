import './LegacyTag.css';
import { IxIcon } from '@siemens/ix-react';
import { iconOpenExternal } from '@siemens/ix-icons/icons';

export default function LegacyTag(
  props: Readonly<{
    url: string;
    hasDeprecatedAncestor: boolean;
    deprecationVersion?: string;
    ancestorName?: string;
  }>
) {
  return (
    <div className="TagsContainer">
      {!props.hasDeprecatedAncestor && (
        <span className="Api__Table Docs__Tag Docs__Tag__Deprecated">
          Deprecated since {props.deprecationVersion}
        </span>
      )}
      <a href={props.url} target="_blank" className="TagContainer">
        <IxIcon name={iconOpenExternal} color="color-primary" size="16"></IxIcon>
        {props.hasDeprecatedAncestor
          ? 'Show deprecated ' + (props.ancestorName || 'version')
          : 'Show latest version'}
      </a>
    </div>
  );
}
