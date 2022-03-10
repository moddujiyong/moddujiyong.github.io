import React from 'react'
import "./publicationSide.scss"
export default function publicationSide() {
  return (
    <div className="publicationSide">
       <div className='title_publication'>
          Publication
       </div>

      <div className="publicationList">
         <ul className="publicationContent">
            <li className="publicationListItem">Journal</li>
            <li className="publicationListItem">Conference</li>
            <li className="publicationListItem">Patent</li>
 
         </ul>
        
      </div>

    </div>
  )
}
