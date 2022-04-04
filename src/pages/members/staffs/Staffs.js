import React, {useRef} from 'react';
import BoraPhoto from "../../../components/img/bora.jpg";
import BarImgAdm from "../../../components/img/design_bar.png";
import "./staffs.scss"
export default function Staffs() {

  return (   
    <div className="staffs" >
      <div className="staffs-header" >
        <div className="staffs-title">
          Staffs
        </div>
  
      </div>

      <div className="staffs-profile">
      <div className="staffs-left">
           <div className="staffs-course">
               Administrator
            </div>
        
            <div className="staffs-photo"> 
              <img className="staffsImg" src={BoraPhoto} alt=""/> 
            </div>
        </div>
        <div className="staffs-right">
          <div className="staffs-name">
          Bora Kim
          
             
          </div>

          <div className="staffs-field"> 
            <span className="staffs-edu">| Education |</span>
            <span className="staffs-edul1">B.S in Advanced Materials Engineering, Sejong University (2017) </span>
          
            <span className="staffs-ri">| Task |</span>
            <span className="staffs-ril">Administration </span>
            <span className="staffs-contact">| Contact |</span>
            <span className="staffs-contactl">arobk@naver.com / arobk@yonsei.ac.kr</span>
         
          </div>
         
        </div>
        <img className="bar-rights" src={BarImgAdm} alt="" />
      </div>

      <div className="staffs-profile">

        
      </div>
    </div>
  )
}
