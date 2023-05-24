'use client';

import DropUsALineForm from '@/components/DropUsALineForm';
import Card from '@/components/Card';
import NoSSR from '@/components/NoSSR';
import './page.scss';

export default function Home() {
  return (
    <NoSSR>
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
    </NoSSR>
  );
}
