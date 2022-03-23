import React, {useRef} from 'react';

import "./student.scss"
export default function Professor() {

  const allRef=useRef(null);
  const phdRef=useRef(null);
  const msphRef=useRef(null);
  const msRef=useRef(null);
  const onAlClick=()=>{
    allRef.current?.scrollIntoView({block:'nearest',behavior:'smooth'});
  };

  const onPhdClick=()=>{
    phdRef.current?.scrollIntoView({block:'nearest',behavior:'smooth'});
  };

  const onMsPhClick=()=>{
    msphRef.current?.scrollIntoView({behavior:'smooth',block:'nearest'});
  };

  const onMsClick=()=>{
    msRef.current?.scrollIntoView({behavior:'smooth',block:'nearest'});
  };
  return (   
    <div className="student" >
      <div className="stu-header" >
        <div className="stu-title">
          Students
        </div>
      </div>

      <div className="stu-profile">
        <div className="stu-left">
           <div className="stu-course">
               Ph.D course
            </div>
        
            <div className="stu-photo"> 
               ..
            </div>
        </div>
        <div className="stu-right">
          <div className="stu-name">
              김유림
              <span className="stu-pos"> 연구원 </span>
              <span className="stu-eng"> Yourim Kim</span>
          </div>

          <div className="stu-field"> 
            <span className="stu-edu">| Education |</span>
            <span className="stu-edul1">M.S in Medical Device Engineering & Management (2020) </span>
            <span className="stu-edul2">B.S in Biomedical Engineering, Konkuk University (2017)</span>
            <span className="stu-ri">| Research Interest |</span>
            <span className="stu-ril">Medical Device Clinical Study Design, Clinical Effectiveness Evaluation </span>
            <span className="stu-contact">| Contact |</span>
            <span className="stu-contactl">yxxrm_k@naver.com / yxxrmk@yonsei.ac.kr</span>
         
          </div>
        </div>
        
      </div>
      

      <div className="phd">
        phd
       
      </div>

      <div className="msphd" >
        scolarship-career
        
        
      </div>

      <div className="ms">
        research-subject22
        
        
      </div>
    </div>
  )
}
