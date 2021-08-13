import React from 'react';
import { useRef, useState, useEffect } from 'react';

const getPoints = ({canvas,point}) => {
  const rect = canvas.getBoundingClientRect();
  console.log(rect);
  return {model:{x:point.x-rect.x,y:point.y-rect.y},
  layer:{x:point.x-rect.x,y:point.y-rect.y}};
}

export const Canvas = props => {
  const refCanvas = useRef(null);
  const dwg = props.drawables || [];
  useEffect(() => {
    (props.onRenderStart||(()=>{}))()
    const canvas = refCanvas.current;
    const ctx = canvas.getContext('2d');
    console.log({ canvas, ctx });
    //ctx.strokeRect(10,10,100,100);
    dwg.forEach(d => {
      d(ctx);
    });
    ctx.stroke();
    ctx.fill();
    (props.onRenderEnd||(()=>{}))()
  });
  const dispatchEvent = (id,react) => {
    console.log(id,react);
    if(props[id]) {
      const d = 
      props[id](react,getPoints({canvas:react.target,point:{x:react.clientX,y:react.clientY}}))
    }
  }
  return (
    <>
      <div>canvas</div>
      <canvas
        ref={refCanvas}
        onClick={(e) => dispatchEvent("onClick",e)} />
      <pre />
    </>
  );
};
