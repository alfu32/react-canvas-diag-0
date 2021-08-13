import React from 'react';
import {useRef} from 'react';

export const Canvas = props => {
  const refCanvas = useRef(null);
  console.log({refCanvas});
  return (
    <>
      <div>canvas</div>
      <canvas ref={refCanvas} />
      <pre></pre>
    </>
  );
};
