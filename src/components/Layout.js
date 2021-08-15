import React from 'react';
import './Layout.css';

export const Layout = props => {
  const toolbar = props.children[0];
  const content = props.children[2];
  const status = props.children[3];
  const activitybar = props.children[1]
  return (
    <div className="app-layout">
      <div className="app-toolbar">{toolbar}</div>
      <div className="app-activitybar">{activitybar}</div>
      <div className="app-content">{content}</div>
      <div className="app-statusbar">{status}</div>
    </div>
  );
};
