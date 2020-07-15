import React from 'react';

const Updatecontents=(props)=>{
  const [state, setState] = React.useState({
    id:props.data.id,
    title:props.data.title,
    desc:props.data.desc
  })


  const inPutHandler=(e)=>{
    setState({
      ...state,
      [e.target.name]:e.target.value
    })
  }
  
  console.log(state.title, state.desc);

  return(
    <div>
      <h1>update</h1>
      <form action='/update_contents' method='post' 
      onSubmit={(e)=>{
        e.preventDefault();
        props.onSubmit(
          state.id,
          state.title,
          state.desc
        )
      }}
      >
        <input 
        type='hidden' 
        name='id' 
        value={state.id}
        ></input>
        <p><input 
        type='text' 
        name='title'
        value={state.title}
        onChange={inPutHandler}
        ></input></p>
        <p><textarea name='desc' value={state.desc}
        onChange={inPutHandler}
        ></textarea></p>
        <p><input type='submit'></input></p>
      </form>
    </div>
  );
}

export default Updatecontents;