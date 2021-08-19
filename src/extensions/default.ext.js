import React from 'react';

export default function defaultExtension(hooks){
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