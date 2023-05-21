import Image from 'next/image';
import './Card.scss';

interface Props {
  iconSrc: string;
  iconAlt: string;
  header: string;
  children: React.ReactNode;
}

export default function Card(props: Props) {
  return (
    <div className="card">
      <Image src={props.iconSrc} width={40} height={40} alt={props.iconAlt} />
      <p className="card__header">{props.header}</p>
      {props.children}
    </div>
  );
}
