import React from 'react';
import Subject from './contents/Subject'
import Toc from './contents/Toc'
import ReadContents from './contents/ReadContents'
import Control from './contents/Control'
import Createcontents from './contents/Createcontents'
import Updatecontents from './contents/Updatecontents'
import './App.css';

const App = (props) => {
    
    
    const [state, setState] = React.useState({
      max_id:3,
      mode:'read',
      selected_id:1,
      subject:{title:'WEB', sub:'World Wide Web!'},
      welcome:{title:'Welcome', desc:'Hello, React!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ],
    });
    
    function getReadcontent(){
      for(let i=0; i<state.contents.length; i++){
        let data = state.contents[i];
        if(data.id===state.selected_id){
          return data;
          break;
        }
      }
    }

    function getcontents(){
      let _titl, _desc, article = null;
      if(state.mode==='hello'){
      _titl=state.welcome.title;
      _desc=state.welcome.desc;
      article=<ReadContents
        title={_titl}
        desc={_desc}
        />
      } else if(state.mode==='read') {
        let _contents=getReadcontent();  
        article=<ReadContents title={_contents.title} desc={_contents.desc}/>
      } else if(state.mode==='create'){
        article=<Createcontents onSubmit={(_title, _desc)=>{
        
        setState(prevState=>({
          ...prevState,
          mode:'read',
          contents:_contents,
          max_id:state.max_id+1,
          selected_id:state.max_id+1
          }));
        let _contents=state.contents.concat({
          id:state.max_id+1, title:_title, desc:_desc
        });
        
      }}/>
    } else if(state.mode==='update'){
          let _contents=getReadcontent();
          article=<Updatecontents 
          data={_contents}
          onSubmit={(_id, _title, _desc)=>{
            let _content=Array.from(state.contents);
            for(let i=0; i<_content.length; i++){
              if(_content[i].id===_id){
                _content[i]={id:_id, title:_title, desc:_desc};
                break;
              }
            }        
            setState(prevState=>({
              ...prevState,
              contents:_content,
              mode:'read'
            }));        
          }}/>
        }
        return article;
      }
  
    
 
      
    
  
    return(
      <div>
        <Subject 
        title={state.subject.title}
        sub={state.subject.sub}
        onChangePage={()=>setState(prevState=>({
          ...prevState,
          mode:'hello'}))}
        />
        <Control
        onChange={(_mode)=>
        {if(_mode==='delete'){
          if(window.confirm('really?')){
            const _contents=Array.from(state.contents);
            for(let i=0; i<_contents.length; i++){
              if(_contents[i].id===state.selected_id){
                _contents.splice(i,1);
                break;
              }
            }
            setState({
              ...state,
              mode:'welcome',
              contents:_contents
            })
          }
        } else {setState({
          ...state,
          mode:_mode
          });
        }}}/>
        <Toc
        onChangePage={(id)=>setState(prevState=>({
          ...prevState,
          mode:'read',
          selected_id:Number(id)
        }))} 
        data={state.contents}
        />
        {getcontents()}
        <p>{state.mode}</p>
        <p>{state.selected_id}</p>
        <p>max_id:{state.max_id}</p>
      </div>
    );
}

export default App;
