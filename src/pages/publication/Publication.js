import React from 'react'
import "./publication.scss"
import PublicationSide from "../../components/publicationSide/PublicationSide"
export default function Publication() {
  return (
    <div className="publication">
      <div className="publicationLeft">
            <PublicationSide/>
      </div>
      <div className="publicationRight">
        R

      </div>
      
    </div>
  )
}
