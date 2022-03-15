import React, {useEffect,useState} from 'react'
import "./publication.scss"
import PublicationSide from "./publicationSide/PublicationSide"
import Journal from './journal/Journal';
export default function Publication() {

  const [select,setSelect]=useState('');
  const [page,setPage]=useState('');

    
  useEffect(() => {

    if(select === 'Patent') {
      setPage('Patent')
        
      
    } else if (select === 'Conference'){
      setPage('Conference')
    } else {
      setPage('Journal')
    }
  },[select])
    




  return (
    <div className="publication">
      <div className="publicationLeft">
            <PublicationSide select={select} setSelect={setSelect}/>
      </div>
      {select==='Patent'? 
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
        
          <Journal/>
        </div>
        </>

     
    
    
      }
    </div>
    
  )
}
