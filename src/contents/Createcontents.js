import React from 'react';

const Createcontents=(props)=>{
  return(
    <div>
      <h1>create</h1>
      <form action='/create_contents' method='post' 
      onSubmit={(e)=>{
        e.preventDefault();
        props.onSubmit(
          e.target.title.value,
          e.target.desc.value
        )
      }}
      >
        <p><input type='text' name='title'></input></p>
        <p><textarea name='desc'></textarea></p>
        <p><input type='submit'></input></p>
      </form>
    </div>
  );
}

export default Createcontents;