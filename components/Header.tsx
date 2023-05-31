import Image from 'next/image';
import './Header.scss';

export default function Header() {
  return (
    <header className="header">
      <a className="header__logo" href="#">
        <Image src="/img/logo.svg" width={39} height={31} alt="Logo" />
        <span>Sparrow</span>
      </a>
      <a className="header__item" href="#">
        Products
      </a>
      <a className="header__item" href="#">
        Company
      </a>
      <button className="header__sign-in">
        Sign In
        <Image src="/img/icon-arrow-right.svg" width={16} height={16} alt="Arrow right" />
      </button>
    </header>
  );
}
