'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import './ScrollUp.scss';

export default function ScrollUp() {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    function onWindowScroll(event: Event) {
      setIsShow(window.scrollY > 400);
    }

    window.addEventListener('scroll', onWindowScroll);

    return () => {
      window.removeEventListener('scroll', onWindowScroll);
    };
  });

  function scrollUp() {
    window.scrollTo(0, 0);
  }

  return (
    isShow && (
      <button className="scrollup" onClick={scrollUp}>
        <Image src="/img/icon-arrow-up.svg" width={24} height={24} alt="Arrow up icon" />
      </button>
    )
  );
}
