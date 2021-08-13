import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Canvas } from './components/Canvas';
import { point } from './drawables/point';
import './style.css';

export default function App() {
  const [drawables, setDrawables] = useState([
    point({x:10, y:10}),
  ]);
  const addDrawable = (ev,synth) => {
    console.log({ev,synth});
    setDrawables([...drawables,point(synth.point)]);
  };
  return (
    <Layout>
      <div>Canvas App</div>
      <Canvas drawables={drawables} onClick={addDrawable} />
      <div>status bar</div>
    </Layout>
  );
}
