import React from 'react';
import './Layout.css';

export const Layout = ({width,height,children,margin,thickness}) => {
  const u=margin||10;
  const w=thickness||64;
  const toolbar = children[0];
  const content = children[2];
  const status = children[3];
  const activitybar = children[1];
  const stlLayout = {
    width:`${width}px`,
    height:`${height}px`
  }
  const stlToolbar={
    top:`${u}px`,
    left:`${w+2*u}px`,
    width:`${width-3*u-w}px`,
    height:`${w}px`,
  }
  const stlActivityBar = {
    top:`${u}px`,
    left:`${u}px`,
    width:`${w}px`,
    height:`${height-2*u}px`,
  }
  const stlContent = {
    top:`${w+2*u}px`,
    left:`${w+2*u}px`,
    width:`${width-w-3*u}px`,
    height:`${height-2*w-4*u}px`,
  }
  const stlStatusBar = {
    top:`${height-w-u}px`,
    left:`${w+2*u}px`,
    height:`${w}px`,
    width:`${width-2*u-w}px`,
  }
  return (
    <div className="app-layout" style={stlLayout}>
      <div className="app-toolbar" style={stlToolbar}>{toolbar}</div>
      <div className="app-activitybar" style={stlActivityBar}>{activitybar}</div>
      <div className="app-content" style={stlContent}>{content}</div>
      <div className="app-statusbar" style={stlStatusBar}>{status}</div>
    </div>
  );
};
