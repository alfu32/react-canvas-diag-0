import React from 'react';

export const Layout = props => {
  return (
    <div className="app-layout">
      <div className="app-toolbar">{props.children[0]||(<div/>)}</div>
      <div className="app-content">{props.children[1]||(<div/>)}</div>
      <div className="app-statusbar" >{props.children[2]||<div/>}</div>
    </div>
  );
};
