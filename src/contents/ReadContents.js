import React from 'react'

const ReacContents = (props) => {

  return(
    <div>
      <h1>{props.title}</h1>
      {props.desc}
    </div>
  )
};

export default ReacContents;