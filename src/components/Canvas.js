import React from 'react';
import {useRef,useEffect} from 'react';

export const Canvas = props => {
  const refCanvas = useRef(null);
  const dwg=props.drawables||[
    {cmd:'strokeRect',args:[10,10,100,100]},
  ];
  useEffect(()=>{
    const canvas = refCanvas.current;
    const ctx = canvas.getContext('2d');
    console.log({canvas,ctx});
    //ctx.strokeRect(10,10,100,100);
    dwg.forEach((d)=>{
      ctx[d.cmd].apply(canvas,d.args)
    });
  });
  
  return (
    <>
      <div>canvas</div>
      <canvas ref={refCanvas} />
      <pre></pre>
    </>
  );
};
