import React from 'react';
import {Toolbar} from './Toolbar';
import {ActivityBar} from './ActivityBar';
import {ActivityPanel} from './ActivityPanel';
import {StatusBar} from './StatusBar';
import './Layout.css';

/* GRID
      +-----+------------+-------top------------+
left->|     |            |                      |
      |     |            |                      |
      +-----+------------+-------topContent-----+
      |     |            |                      |
      |     |<-actionLeft|                      |
      |     |            |<-contentLeft         |
      |     |            |                      |
      |     |            |                      |
      |     |            |                      |
      |     |            |             right--->|
      |     |            |                      |
      +-----+------------+-------bottomContent--+
      |     |            |                      |
      |     |            |                      |
      |     |            |                      |
      +-----+------------+-------bottom---------+
*/


export const Layout = ({width,height,children,margin,thickness}) => {
  const u=margin||10;
  const w=thickness||64;
  const toolbar = children.find(n => n.type === Toolbar);
  const content = children.filter(n => n.type !== Toolbar && n.type !== StatusBar && n.type !== ActivityBar);
  const status = children.find(n => n.type === StatusBar);
  const activitybar = children.find(n => n.type === ActivityBar);
  const activityPanel = children.find(n => n.type === ActivityPanel);
  console.log({
    toolbar,
    content,
    status,
    activitybar,
  });
  const top = `${0}px`;
  const topContent = `${w+2*u}px`;
  const bottomContent = `${height-w+2*u}px`;
  const bottom = `${height-w+2*u}px`;
  
  const stlLayout = {
    width:`${width}px`,
    height:`${height}px`,
    maxWidth:`${width}px`,
    minWidth:`${width}px`,
    maxHeight:`${height}px`,
    minHeight:`${height}px`,
  }
  const stlToolbar={
    top:`${u}px`,
    left:`${w+2*u}px`,
    width:`${width-3*u-w}px`,
    height:`${w}px`,
    maxWidth:`${width-3*u-w}px`,
    minWidth:`${width-3*u-w}px`,
    maxHeight:`${w}px`,
    minHeight:`${w}px`,
  }
  const stlActivityBar = {
    top:`${u}px`,
    left:`${u}px`,
    width:`${w}px`,
    height:`${height-2*u}px`,
    maxWidth:`${w}px`,
    minWidth:`${w}px`,
    maxHeight:`${height-2*u}px`,
    minHeight:`${height-2*u}px`,
  }
  const stlActivityPanel = {
    top:`${w+2*u}px`,
    left:`${w+2*u}px`,
    width:`${300}px`,
    height:`${height-2*w-4*u}px`,
    minWidth:`${300}px`,
    maxWidth:`${300}px`,
    minHeight:`${height-2*w-4*u}px`,
    maxHeight:`${height-2*w-4*u}px`,
  };
  const stlContent = {
    top:`${w+2*u}px`,
    left:`${300+w+2*u}px`,
    width:`${width-w-3*u-300}px`,
    height:`${height-2*w-4*u}px`,
    maxWidth:`${width-w-3*u}px`,
    minWidth:`${width-w-3*u}px`,
    maxHeight:`${height-2*w-4*u}px`,
    minHeight:`${height-2*w-4*u}px`,
  }
  const stlStatusBar = {
    top:`${height-w-u}px`,
    left:`${w+2*u}px`,
    height:`${w}px`,
    width:`${width-2*u-w}px`,
    maxWidth:`${width-2*u-w}px`,
    minWidth:`${width-2*u-w}px`,
    maxHeight:`${w}px`,
    minHeight:`${w}px`,
  }
  return (
    <div className="app-layout" style={stlLayout}>
      <div className="app-toolbar" style={stlToolbar}>{toolbar}</div>
      <div className="app-activitybar" style={stlActivityBar}>{activitybar}</div>
      <div className="app-activitypanel" style={stlActivityPanel}>{activityPanel}</div>
      <div className="app-content" style={stlContent}>{content}</div>
      <div className="app-statusbar" style={stlStatusBar}>{status}</div>
    </div>
  );
};
