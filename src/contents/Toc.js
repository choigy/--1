import React from 'react'

const Toc = (props) => {
  const data = props.data
  let lists = [];
  for(let i=0; i<data.length; i++){
      lists.push(
        <li 
        key={data[i].id}
        >
        <a 
          href={'/contents/'+data[i].id}
          data-id={data[i].id}
          onClick={(e)=>{
            e.preventDefault();
            props.onChangePage(e.target.dataset.id);
          }}
        >{data[i].title}</a></li>
      )
  }
    
  return(
    <div>{lists}</div>
  )
};

export default Toc;