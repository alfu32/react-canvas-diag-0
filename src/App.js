import React from 'react';
import { Layout } from './components/Layout';
import { Canvas } from './components/Canvas';
import './style.css';

export default function App() {
  return (
    <Layout>
      <div>Canvas App</div>
      <Canvas />
    </Layout>
  );
}
