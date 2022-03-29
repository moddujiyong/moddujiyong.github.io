import { getByTitle } from '@testing-library/react';
import React, {useRef} from 'react';
import Bs1Photo from "../../../components/img/bs01.jpg";
import Bs2Photo from "../../../components/img/bs02.jpg";
import "./researchLayout.scss"

export default function ResearchLayout({barl,title,img,bar}) {

  
  return (   
      <div className="layout">
         <img className="bar-leftcd" src={barl} alt="" />
        <div className="bspl">
          <div className="cd-container">
<<<<<<< HEAD
            <span className="bsp-title">{title}</span>
            <img className="bspImg"style = {{width: '100%', height: '80%'}} src={img} alt=""/> 
            
=======
          <span className="bsp-title">{title}</span>
            <div className="bspImg-container">
              
               <img className="bspImg" src={img} alt=""/> 
            </div>
          
>>>>>>> 2e163fdfa389fb6af8477c47f3e0e03ca2ede389
            
          </div>
       
        </div>
         <img className="bar-rightcd" src={bar} alt="" />
        </div>
  )
}

        