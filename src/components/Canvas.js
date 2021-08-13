import React from 'react';
import {useRef} from 'react';

export const Canvas = props => {
  const refCanvas = useRef(null);
  console.log(ref);
  return (
    <>
      <canvas ref={refCanvas} />
      <pre />
    </>
  );
};
