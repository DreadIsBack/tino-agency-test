import dynamic from 'next/dynamic';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

function NoSSR(props: Props) {
  return <React.Fragment>{props.children}</React.Fragment>;
}

export default dynamic(() => Promise.resolve(NoSSR), {
  ssr: false,
});
