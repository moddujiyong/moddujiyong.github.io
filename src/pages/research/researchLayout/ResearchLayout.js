import { getByTitle } from '@testing-library/react';
import React, {useRef} from 'react';
import Bs1Photo from "../../../components/img/bs01.jpg";
import Bs2Photo from "../../../components/img/bs02.jpg";

import "./researchLayout.scss"

export default function ResearchLayout({barl,title,img,bar}) {

/*  console.log(img)
  var imgs = null
  if (bar === 0 ) { 
    var imgs = Cd1Photo
   } else if ( bar === 1 ) {
    var imgs = Cd2Photo
   }
*/
  

  
  return (   
      <div className="layout">
          {barl && <img className="bar-leftcd" src={barl} alt="" /> } 
        <div className="bspl">
          <div className="cd-container">
            

            <span className="bsp-title">{title}</span>
            <img className="bspImg"style = {{width: '100%', height: '80%'}} src={img} alt=""/> 
            
          </div>
       
        </div>
         {bar && <img className="bar-rightcd" src={bar} alt="" />} 
        </div>
  )
}

        