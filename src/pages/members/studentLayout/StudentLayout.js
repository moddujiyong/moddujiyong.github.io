import React, {useRef} from 'react';

import BarImgStu from "../../../components/img/design_bar.png";
import "./studentLayout.scss"

export default function StudentLayout({course,lphoto,photo, name, EName, edu1, edu2, int, con, rphoto}) {

  return (   
    <div className="stu-profile">
       <img className="bar-left" src={lphoto} alt="" />
        <div className="stu-left">
       
           <div className="stu-course">
               {course}
            </div>
           
            <div className="stu-photo"> 
              <img className="stuImg" src={photo} alt=""/> 
            </div>
        </div>
        <div className="stu-right">
          <div className="stu-name">
              {name}
              <span className="stu-pos"> Researcher </span>
              <span className="stu-eng"> {EName}</span>
          </div>

          <div className="stu-field"> 
            <span className="stu-edu">| Education |</span>
            <span className="stu-edul1">{edu1}</span>
            {edu2 && <span className="stu-edul2">{edu2}</span>}
            <span className="stu-ri">| Research Interest |</span>
            <span className="stu-ril">{int} </span>
            <span className="stu-contact">| Contact |</span>
            <span className="stu-contactl">{con}</span>
            
          </div>
         
        </div>
        <img className="bar-rights" src={rphoto} alt="" />
      </div>
  )
}