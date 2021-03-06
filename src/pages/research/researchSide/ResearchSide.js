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

  const clickBS=()=>{
     setSelect('BS')
  }
  
  
   return (
    <div className="researchSide">
       <div className='title_research'>
          Research
          <div className="title_border">
            <div className="title_left">
              
            </div>
            <div className="title_right">
              
            </div>
        </div>  
       </div>

      <div className="researchList">
         <ul className="researchContent">
            <li className="researchListItem" onClick={clickCD} style={{color: select === 'CD' ? 'black' : 'grey'}} >Clinical Study Design</li>
            <li className="researchListItem" onClick={clickUD} style={{color: select === 'UD' ? 'black' : 'grey'}}>UX/UI Design & Usability</li>
            <li className="researchListItem" onClick={clickMI} style={{color: select === 'MI' ?'black' : 'grey'}}>Medical Industry Policy</li>
            <li className="researchListItem" onClick={clickBS} style={{color: select === 'BS' ? 'black' : 'grey'}}>Bio Signal Processing & AI</li>
         </ul>
        
      </div>

    </div>
  )
}
