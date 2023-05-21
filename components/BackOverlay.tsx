import './BackOverlay.scss';

interface Props {
  onClick?: () => void;
}

export default function BackOverlay(props: Props) {
  return <div className="backoverlay" onClick={props.onClick}></div>;
}
