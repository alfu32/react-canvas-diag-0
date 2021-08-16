import React, { useState,useLayoutEffect } from 'react';
import { Layout } from './components/Layout';
import { ActivityBar} from './components/ActivityBar';
import { Toolbar } from './components/Toolbar';
import { Canvas } from './components/Canvas';
import { StatusBar } from './components/StatusBar';
import { point } from './drawables/point';
import { rectangle } from './drawables/rectangle';
import './style.css';
const round= (v,n)=>{
  if(isNaN(v)) return NaN
  if(v ===null) return 'null';
  return new Number(v).toFixed(n);
}
const iniState = 
    new Array(1).fill(0).map( (v,i,a) =>
    point({x:Math.random()*100+10, y:Math.random()*100+20}),
  )
function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}
export default function App() {
  const [drawables, setDrawables] = useState(iniState);
  const [metrics,setMetrics] = useState({count:drawables.length,avg:1});
  let [width, height] = useWindowSize();
  width-=20;height-=20;
  const u=5;
  const w=48;
  const extras = [
    rectangle({x:1,y:1,width:width-3*u-w-4,height:height-4*u-2*w-4})
  ];
  const addDrawable = (ev,synth) => {
    console.log({ev,synth});
    setDrawables([...drawables,point(synth.model)]);
    setMetrics({...metrics,a:(new Date()).getTime(),count:metrics.count + 1})
  };
  return (
    <>
    <Layout width={width} height={height}
      margin={u} thickness={w}>
      <Toolbar>Canvas App</Toolbar>
      <ActivityBar></ActivityBar>
      <Canvas
        width={width-2*u-w-2}
        height={height-3*u-2*w-2}
        drawables={[...drawables,...extras]}
        onRenderEnd={() => {
          metrics.b = (new Date()).getTime();
          metrics.delta = metrics.b - metrics.a;
          metrics.avg = ((metrics.avg||1) * (metrics.count - 1) + metrics.delta) / (metrics.count)
        } }
        onClick={addDrawable}
      />
      <StatusBar>{metrics.count} objs in {round(metrics.avg,2)} ms</StatusBar>
      
    </Layout>
    </>
  );
}
