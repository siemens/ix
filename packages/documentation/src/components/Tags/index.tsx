import './TagDeprecated.css';

export default function DeprecatedTag(props: { message: string }) {
  return (
    <div className="TagDeprecatedContainer">
      <ix-icon name="open-external" color="color-alarm" size={24}></ix-icon>
      <div className="TagDeprecatedTitle">Deprecated {props.message}</div>
    </div>
  );
}
