import { getByTitle } from '@testing-library/react';
import React, {useRef} from 'react';
import Bs1Photo from "../../../components/img/bs01.jpg";
import Bs2Photo from "../../../components/img/bs02.jpg";
import "./researchLayout.scss"
export default function ResearchLayout({title,img}) {

  
  return (   

        <div className="bspl">
          <span className="bsp-title">{title}</span>
          <img className="bspImg" src={img} alt=""/> 
        </div>
       
        
  )
}
