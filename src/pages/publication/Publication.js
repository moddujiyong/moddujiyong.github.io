import React, {useEffect,useState} from 'react'
import "./publication.scss"
import PublicationSide from "./publicationSide/PublicationSide"
export default function Publication() {

  const [select,setSelect]=useState('');
  const [page,setPage]=useState('');

    
  useEffect(() => {

    if(select === 'Journal') {
      setPage('Journal')
        
      
    } else if (select === 'Conference'){
      setPage('Conference')
    } else {
      setPage('Patent')
    }
  },[select])
    




  return (
    <div className="publication">
      <div className="publicationLeft">
            <PublicationSide select={select} setSelect={setSelect}/>
      </div>
      {select==='Journal'? 
      <>
       <div className="publicationRight">
        {page}
      </div>
      
      
      </>
        : select==='Conference'?
        <>
        <div className="publicationRight">
         {page}
        </div>
        </>
        : 
        <>
        <div className="publicationRight">
          {page}
        </div>
        </>

     
    
    
      }
    </div>
    
  )
}
