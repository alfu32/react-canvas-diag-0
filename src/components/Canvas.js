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
      switch(d.cmd){
        case 'strokeRect':
          ctx.strokeRect(...d.args);
        break;
        case 'fillText':
          ctx.fillText(...d.args);
        break;
      }
    });
  });
  
  return (
    <>
      <div>canvas</div>
      <canvas ref={refCanvas} 
        onClick={(props.onClick||(()=>{}))}/>
      <pre></pre>
    </>
  );
};
