import React from 'react';

export const Layout = props => {
  const toolbar = props.children[0];
  const content = props.children[1];
  const status = props.children[2];
  const activitybar = props.children[3]
  return (
    <div className="app-layout">
      <div className="app-toolbar">{toolbar}</div>
      <div className="app-activitybar">{activitybar}</div>
      <div className="app-content">{content}</div>
      <div className="app-statusbar" >{status}</div>
    </div>
  );
};
