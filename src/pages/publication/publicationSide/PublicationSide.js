import React from 'react'
import "./publicationSide.scss"
export default function publicationSide({select,setSelect}) {

   const clickJou = () => {
      setSelect('Journal')
    }
  
    const clickCon = () => {
      setSelect('Conference')
    }
    
  
    const clickPat = () => {
      setSelect('Patent')
    }
    
  
  

  return (
    <div className="publicationSide">
       <div className='title_publication'>
          Publication
       </div>

      <div className="publicationList">
         <ul className="publicationContent">
            <li className="publicationListItem" onClick={clickJou}>Journal</li>
            <li className="publicationListItem" onClick={clickCon}>Conference</li>
            <li className="publicationListItem" onClick={clickPat}>Patent</li>
 
         </ul>
        
      </div>

    </div>
  )
}
