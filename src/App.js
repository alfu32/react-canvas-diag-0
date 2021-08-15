import React, { useState,useLayoutEffect } from 'react';
import { Layout } from './components/Layout';
import { ActivityBar} from './components/ActivityBar';
import { Toolbar } from './components/Toolbar';
import { Canvas } from './components/Canvas';
import { StatusBar } from './components/StatusBar';
import { point } from './drawables/point';
import { rectangle } from './drawables/rectangle';
import './style.css';

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
  // width-=114;height-=188;
  const extras = [
    rectangle({x:0,y:0,width,height})
  ];
  const addDrawable = (ev,synth) => {
    console.log({ev,synth});
    setDrawables([...drawables,point(synth.model)]);
    setMetrics({...metrics,a:(new Date()).getTime(),count:metrics.count + 1})
  };
  const u=5;
  const w=48;
  return (
    <>
    <Layout width={width} height={height}
      margin={5} thickness={48}>
      <Toolbar>Canvas App</Toolbar>
      <ActivityBar></ActivityBar>
      <Canvas
        width={width-114}
        height={height-168}
        drawables={[...drawables,...extras]}
        onRenderEnd={() => {
          metrics.b = (new Date()).getTime();
          metrics.delta = metrics.b - metrics.a;
          metrics.avg = ((metrics.avg||1) * (metrics.count - 1) + metrics.delta) / (metrics.count)
        } }
        onClick={addDrawable}
      />
      <StatusBar><pre>{JSON.stringify(metrics,null,"")}</pre></StatusBar>
      
    </Layout>
    </>
  );
}
