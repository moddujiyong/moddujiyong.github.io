import React from 'react'
import "./researchSide.scss"
export default function ResearchSide({select,setSelect}) {
  const clickCD=()=>{
     setSelect('CD')
      
  }
  const clickUD=()=>{
      setSelect('UD')
     
  }
  const clickMI=()=>{
       setSelect('MI')
       
  }
  
  
   return (
    <div className="researchSide">
       <div className='title_research'>
          Research
       </div>

      <div className="researchList">
         <ul className="researchContent">
            <li className="researchListItem" onClick={clickCD}>Clinical Study Design</li>
            <li className="researchListItem" onClick={clickUD}>UX/UI Design & Usability</li>
            <li className="researchListItem" onClick={clickMI}>Medical Industry Policy</li>
 
         </ul>
        
      </div>

    </div>
  )
}
