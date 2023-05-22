'use client';

import { useEffect, useState } from 'react';
import './StretchBackground.scss';

interface Props {
  imageWidth: number;
}

function calcScaleX(imageWidth: number): number {
  return document.body.clientWidth / imageWidth;
}

export default function StretchBackground(props: Props) {
  const [scaleX, setScaleX] = useState(calcScaleX(props.imageWidth));

  useEffect(() => {
    const interval = setInterval(() => {
      setScaleX(calcScaleX(props.imageWidth));
    }, 100);

    return () => clearInterval(interval);
  }, [props]);

  return <div className="stretch-background" style={{ transform: `scaleX(${scaleX})` }}></div>;
}
