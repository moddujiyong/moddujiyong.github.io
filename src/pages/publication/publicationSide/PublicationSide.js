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
          <div className="titlePub_border">
            <div className="titlePub_left">
              
            </div>
            <div className="titlePub_right">
              
            </div>
        </div>  
       </div>

      <div className="publicationList">
         <ul className="publicationContent">
            <li className="publicationListItem" onClick={clickJou} style={{color: select === 'Journal' ? 'grey' : 'black'}}>Journal</li>
            <li className="publicationListItem" onClick={clickCon} style={{color: select === 'Conference' ? 'grey' : 'black'}}>Conference</li>
            <li className="publicationListItem" onClick={clickPat}>Patent</li>
 
         </ul>
        
      </div>

    </div>
  )
}
