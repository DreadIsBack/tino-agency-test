'use client';

import Image from 'next/image';
import DropUsALineForm from '@/components/DropUsALineForm';
import Card from '@/components/Card';
import StretchBackground from '@/components/StretchBackground';

export default function Home() {
  return (
    <div className="wrap">
      <StretchBackground imageWidth={1440} />
      <div className="background-lines">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

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

      <main className="main">
        <div>
          <h1>Get in touch with our team</h1>
          <p>Reach out and let us know how we can help.</p>
          <div className="main__cards">
            <Card iconSrc="/img/icon-address.svg" iconAlt="Address icon" header="Address">
              <address className="card__text">
                Sparrow Labs Inc.
                <br />
                169 Madison Ave #2313
                <br />
                New York, NY 10016
              </address>
            </Card>
            <Card iconSrc="/img/icon-phone.svg" iconAlt="Phone icon" header="Contact phone">
              <p className="card__text">+1 (646) 980-4056</p>
            </Card>
          </div>
        </div>
        <DropUsALineForm />
      </main>

      <footer className="footer"></footer>
    </div>
  );
}
