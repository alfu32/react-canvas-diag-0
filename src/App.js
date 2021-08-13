import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Canvas } from './components/Canvas';
import { point } from './drawables/point';
import './style.css';

const iniState = 
    new Array(1000).fill(0).map( (v,i,a) =>
    point({x:Math.random()*100+10, y:Math.random()*100+20}),
  )

export default function App() {
  const [drawables, setDrawables] = useState(iniState);
  const [metrics,setMetrics] = useState({count:drawables.length,avg:1})
  const addDrawable = (ev,synth) => {
    console.log({ev,synth});
    setDrawables([...drawables,point(synth.model)]);
    setMetrics({...metrics,a:(new Date()).getTime(),count:metrics.count + 1})
  };
  return (
    <Layout>
      <div>Canvas App</div>
      <Canvas
        drawables={drawables}
        onRenderEnd={() => {
          metrics.b = (new Date()).getTime();
          metrics.delta = metrics.b - metrics.a;
          metrics.avg = ((metrics.avg||1) * (metrics.count - 1) + metrics.delta) / (metrics.count)
        } }
        onClick={addDrawable}
      />
      <pre>{JSON.stringify(metrics,null," ")}</pre>
    </Layout>
  );
}
