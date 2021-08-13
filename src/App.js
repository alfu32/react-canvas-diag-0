import React,{useState} from 'react';
import { Layout } from './components/Layout';
import { Canvas } from './components/Canvas';
import './style.css';

export default function App() {
  const [drawables,setDrawables] = useState([
    {cmd:'strokeRect',args:[10,10,100,100]},
  ]);
  const addDrawable = (e) => {
    console.log(e);
  }
  return (
    <Layout>
      <div>Canvas App</div>
      <Canvas
        drawables={drawables}
        onClick={addDrawable}
      />
      <div>status bar</div>
    </Layout>
  );
}
