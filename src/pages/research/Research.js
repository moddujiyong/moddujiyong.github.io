import React,{useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom';


import "./research.scss"
import ResearchCD from './researchCD/ResearchCD';
import ResearchUD from './researchUD/ResearchUD';
import ResearchMI from './researchMI/ResearchMI';
import ResearchSide from "./researchSide/ResearchSide"


export default function Research() {
  let recv;

  const location = useLocation();


 
  //const [page,setPage]=useState('');



 /*useEffect(() => {

    if(select === 'MI') {
      setPage('MI')
    } 
    else if (select === 'UD'){
      setPage('UD')
    } 
    else {
      setPage('CD')
      
    }
  },[select])
*/


  if(location.pathname.includes("clinical")){
    
    recv='clinical'

  } 
  else if (location.pathname.includes("uxui")){
  
   recv="uxui"

  } 
  
  else if (location.pathname.includes('industry')) {
  
  recv="industry"


  }


  const [select,setSelect]=useState('');



  return(
    <div className="research">
      <div className="researchLeft">
          
          <ResearchSide select={select} setSelect={setSelect}/>
      </div>
    
    {select==="MI"?
      
      <div className="researchRight">
        <ResearchMI/>
      </div>
      :
        select==="UD"?
       
           <div className="researchRight">
            <ResearchUD/>
          </div>
          :
          <div className="researchRight">
           <ResearchCD />
          </div>
        
         }
{recv==="industry"?
  <>
  <div className="researchRight">
    <ResearchMI/>
  </div>
  </>
  :
    recv==="uxui"?
    <>
      <div className="researchRight">
        <ResearchUD/>
      </div>
    </>
    :
    <>
      <div className="researchRight">
       <ResearchCD />
      
      </div>
    </>
  } 

   
  </div>
  )
}
 


/*{recv==="industry"?
  <>
  <div className="researchRight">
    <ResearchMI/>
  </div>
  </>
  :
    recv==="uxui"?
    <>
      <div className="researchRight">
        <ResearchUD/>
      </div>
    </>
    :
    <>
      <div className="researchRight">
       <ResearchCD />
      
      </div>
    </>
  }
  </div>
  )
 }*/


 /* {recv==="industry"?
  <>
  <div className="researchRight">
    <ResearchMI/>
  </div>
  </>
  :
    recv==="uxui"?
    <>
      <div className="researchRight">
        <ResearchUD/>
      </div>
    </>
    :
    <>
      <div className="researchRight">
       <ResearchCD />
      
      </div>
    </>
  } */