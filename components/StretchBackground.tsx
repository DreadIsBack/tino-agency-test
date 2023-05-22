import { useLayoutEffect, useState } from 'react';
import './StretchBackground.scss';

interface Props {
  imageWidth: number;
}

function calcScaleX(imageWidth: number): number {
  if (window) {
    return window.innerWidth / imageWidth;
  } else {
    return 1;
  }
}

export default function StretchBackground(props: Props) {
  const [scaleX, setScaleX] = useState(calcScaleX(props.imageWidth));

  useLayoutEffect(() => {
    const interval = setInterval(() => {
      setScaleX(calcScaleX(props.imageWidth));
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return <div className="stretch-background" style={{ transform: `scaleX(${scaleX})` }}></div>;
}
