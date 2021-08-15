import React from 'react';
import './Layout.css';

export const Layout = props => {
  const {width,height,children} = props;
  const toolbar = children[0];
  const content = children[2];
  const status = children[3];
  const activitybar = children[1];
  const stlLayout = {
    width:`${width}px`,
    height:`${height}px`
  }
  const stlToolbar={
    top:'10px',
    left:'10px',
    width:`${width-20}px`,
    height:'64px',
  }
  const stlActivityBar = {
    top:'84px',
    left:'10px',
    height:`${height-94}px`,
    width:'64px',
  }
  return (
    <div className="app-layout" style={stlLayout}>
      <div className="app-toolbar" style={stlToolbar}>{toolbar}</div>
      <div className="app-activitybar" style={stlActivityBar}>{activitybar}</div>
      <div className="app-content">{content}</div>
      <div className="app-statusbar">{status}</div>
    </div>
  );
};
