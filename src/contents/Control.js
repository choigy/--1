import React from 'react';

const Control=(props)=>{
  return(
    <div>
      <li><a 
      href='/create'
      onClick={(e)=>{
        e.preventDefault();
        props.onChange('create')
      }}
      >create</a></li>
      <li><a 
      href='/update'
      onClick={(e)=>{
        e.preventDefault();
        props.onChange('update')
      }}
      >update</a></li>
      <li><input type='button' value='delete' 
      onClick={(e)=>{
        e.preventDefault();
        props.onChange('delete')
      }}  
      ></input></li>
    </div>
  );
}

export default Control;