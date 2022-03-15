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
  
        <div className="stu-scrollMenu">
           <ul className="stuList">
            <li className="stuListItem" onClick={onAlClick}>All</li>
            <li className="stuListItem" onClick={onPhdClick}>Ph.D course</li>
            <li className="stuListItem" onClick={onMsPhClick}>MS/Ph.D course</li>
            <li className="stuListItem" onClick={onMsClick}>MS course</li>        
                 
           </ul>
        </div>
      </div>

      <div className="stu-profile" ref={allRef}>
        stu-profile
        
      </div>
      

      <div className="phd" ref={phdRef}>
        phd
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
         <div>
        research-subject
        </div>
        <div>
        research-subject
        </div> <div>
        research-subject
        </div>
      </div>

      <div className="msphd" ref={msphRef}>
        scolarship-career
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
         <div>
        research-subject
        </div>
        <div>
        research-subject
        </div> <div>
        research-subject
        </div>
        
      </div>

      <div className="ms" ref={msRef}>
        research-subject22
        
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
        <div>
        research-subject
        </div>
         <div>
        research-subject
        </div>
        <div>
        research-subject
        </div> <div>
        research-subject
        </div>


      </div>
    </div>
  )
}
