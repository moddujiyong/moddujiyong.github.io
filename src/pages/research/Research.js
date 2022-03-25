import React,{useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom';


import "./research.scss"
import ResearchCD from './researchCD/ResearchCD';
import ResearchUD from './researchUD/ResearchUD';
import ResearchMI from './researchMI/ResearchMI';
import ResearchBS from './researchBS/ResearchBS';
import ResearchSide from "./researchSide/ResearchSide";

export default function Research() {
 
  let recv;
  const location = useLocation();

  const [select,setSelect]=useState('CD');
  
  console.log('select',select)

  if(location.pathname.includes("clinical")){
    recv='clinical'
    
    
 } 
 else if (location.pathname.includes("uxui")){
   
   recv="uxui"

 } 
 
 else if (location.pathname.includes('industry')) {
 
   recv="industry"
 }

 else if (location.pathname.includes('bio')) {
 
  recv="bio"
}


 useEffect(()=>{
  if(recv==='bio'){
    setSelect('BS')
    console.log(recv,'확인')
  }
  else if(recv==='industry'){
    setSelect('MI')
    console.log(recv,'확인')
  }
  
  else if (recv==='uxui'){
    setSelect('UD')
    console.log(recv,'확인')
  }
  else if(recv==='clinical'){
    setSelect('CD')
    console.log(recv,'확인')
  }
  console.log('ERROR')    
 
},[recv]);
   


  



  return(
    <div className="research">
      <div className="researchLeft">
      <ResearchSide select={select} setSelect={setSelect}/>
        {console.log(select,'ok')}
      </div>

    {select==='BS'?
       <div className="researchRight">
          <ResearchBS/>
      </div>
      :
        select==='MI'?
      
        <div className="researchRight">
          <ResearchMI/>
         </div>
        :
        select==='UD'?
       
           <div className="researchRight">
            <ResearchUD/>
          </div>
          : 

          <div className="researchRight">
           <ResearchCD />
          </div>
        
         }
   
  </div>
  )
}

