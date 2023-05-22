import { useEffect, useLayoutEffect, useState } from 'react';
import './StretchBackground.scss';

interface Props {
  imageWidth: number;
}

function calcScaleX(imageWidth: number): number {
  if (typeof window !== 'undefined') {
    return document.body.clientWidth / imageWidth;
  } else {
    return 1;
  }
}

export default function StretchBackground(props: Props) {
  const [scaleX, setScaleX] = useState(calcScaleX(props.imageWidth));

  useEffect(() => {
    const interval = setInterval(() => {
      setScaleX(calcScaleX(props.imageWidth));
    }, 200);

    return () => clearInterval(interval);
  }, [props]);

  return <div className="stretch-background" style={{ transform: `scaleX(${scaleX})` }}></div>;
}
