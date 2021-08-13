import React from 'react';
import {useRef,useEffect} from 'react';

export const Canvas = props => {
  const refCanvas = useRef(null);
  useEffect(()=>{
    const canvas = refCanvas.current;
    const ctx = canvas.getContext('2d');
    console.log({canvas,ctx});
  });
  
  return (
    <>
      <div>canvas</div>
      <canvas ref={refCanvas} />
      <pre></pre>
    </>
  );
};
