import React from 'react';

export function defaultExtension(hooks){
  return {
    id:'default',
    button: (props) =>{
      return 'ext';
    },
    panel: (props) =>{
      return 'default ext panel';
    },
  }
}