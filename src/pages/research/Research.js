import React,{useEffect,useState} from 'react'

import "./research.scss"
import ResearchSide from "./researchSide/ResearchSide"
export default function Research() {
  const [select,setSelect]=useState('');
  const [page,setPage]=useState('');

  useEffect(() => {

    if(select === 'CD') {
      setPage('CD')
    } 
    else if (select === 'UD'){
      setPage('UD')
    } 
    else {
      setPage('MI')
    }
  },[select])
    



  return (
    <div className="research">
      <div className="researchLeft">
            <ResearchSide select={select} setSelect={setSelect}/>
      </div>
      {select==="CD"?
      <>
      <div className="researchRight">
        {page}
      </div>
      </>
      :
        select==="UD"?
        <>
          <div className="researchRight">
           {page}
          </div>
        </>
        :
        <>
          <div className="researchRight">
           {page}
          </div>
        </>
      } 
    </div>
  )
}
