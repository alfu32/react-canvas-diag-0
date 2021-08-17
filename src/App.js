import React, { useState,useLayoutEffect } from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Layout } from './components/Layout';
import { ActivityBar} from './components/ActivityBar';
import {ActivityPanel} from './components/ActivityPanel';
import Hamburger from 'hamburger-react';
import { Toolbar } from './components/Toolbar';
import { Canvas } from './components/Canvas';
import { StatusBar } from './components/StatusBar';
import { ToggleButton } from 'primereact/togglebutton';
import { point } from './drawables/point';
import { rectangle } from './drawables/rectangle';
import './style.css';
const round= (v,n)=>{
  if(isNaN(v)) return NaN
  if(v ===null) return 'null';
  return new Number(v).toFixed(n);
}
const iniState = (w,h) =>
    new Array(1000).fill(0).map( (v,i,a) =>
    point({x:Math.random()*1000+10, y:Math.random()*1000+10}),
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
const defaultExtension={id:"default",button:"ext",panel:"default extension activity"};
export default function App({extensions=[defaultExtension],children}) {
  let [currentExtensionId,setCurrentExtensionId] = useState("default");
  let currentExtension = extensions.find(ex => ex.id = currentExtensionId) || defaultExtension;
  let [width,height] = useWindowSize();
  const u=5;
  const w=64;
  width-=2*u;height-=2*u;
  const [drawables, setDrawables] = useState(iniState(width,height));
  const [metrics,setMetrics] = useState({count:drawables.length,avg:1});
  const [activityPanelWidth,setActivityPanelWidth] = useState(300);
  const extras = [
    rectangle({x:1,y:1,width:width-3*u-w- activityPanelWidth-4,height:height-4*u-2*w-4})
  ];
  const addDrawable = (ev,synth) => {
    console.log({ev,synth});
    setDrawables([...drawables,point(synth.model)]);
    setMetrics({...metrics,a:(new Date()).getTime(),count:metrics.count + 1})
  };
  const toggleActivityPanel=()=>{
    setActivityPanelWidth(
      activityPanelWidth?0:300
    )
  }
  return (
    <>
    <Layout width={width} height={height}
      margin={u} thickness={w}
      activityPanelWidth={activityPanelWidth}>
      <Toolbar>
        Canvas App
      </Toolbar>
      <ActivityBar>
        <Hamburger toggled={activityPanelWidth>0} toggle={toggleActivityPanel}
        size={32} distance='sm' color='#676767'
        style={{minWidth:60,minHeight:60,border:0,background:'#eee',color:'#555'}}/>
        {extensions.map(ex => ex.button||[])}
        {/*<ToggleButton
        onLabel="" offLabel=""
        onIcon="pi pi-angle-double-left" offIcon="pi pi-angle-double-right"
        checked={activityPanelWidth}
        onChange={toggleActivityPanel}
        style={{minWidth:60,minHeight:60,border:0,background:'#eee',color:'#555'}}
        />*/}
      </ActivityBar>
      <ActivityPanel>{currentExtension.panel}</ActivityPanel>
      <Canvas
        width={width-2*u-w-2- activityPanelWidth}
        height={height-3*u-2*w-2}
        drawables={[...drawables,...extras]}
        onRenderEnd={() => {
          metrics.b = (new Date()).getTime();
          metrics.delta = metrics.b - metrics.a;
          metrics.avg = ((metrics.avg||1) * (metrics.count - 1) + metrics.delta) / (metrics.count)
        } }
        onClick={addDrawable}
      />
      <StatusBar>{metrics.count} objs in {round(metrics.delta,2)} ms, avg {round(metrics.avg,2)} ms</StatusBar>
      
    </Layout>
    </>
  );
}
