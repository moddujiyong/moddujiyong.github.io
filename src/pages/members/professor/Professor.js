import React, {useRef} from 'react';

import "./professor.scss"
export default function Professor() {

  const aRef=useRef(null);
  const mRef=useRef(null);
  const sRef=useRef(null);
  const rRef=useRef(null);
  const onAllClick=()=>{
    aRef.current?.scrollIntoView({block:'nearest',behavior:'smooth'});
  };

  const onMainCareerClick=()=>{
    mRef.current?.scrollIntoView({block:'nearest',behavior:'smooth'});
  };

  const onScolarCareerClick=()=>{
    sRef.current?.scrollIntoView({behavior:'smooth',block:'nearest'});
  };

  const onResearchSubjectClick=()=>{
    rRef.current?.scrollIntoView({behavior:'smooth',block:'nearest'});
  };
  return (   
    <div className="professor" >
      <div className="prof-header" >
        <div className="header-title">
          Professor
        </div>
  
        <div className="prof-scrollMenu">
           <ul className="profList">
            <li className="profListItem" onClick={onAllClick}>All</li>
            <li className="profListItem" onClick={onMainCareerClick}>주요경력</li>
            <li className="profListItem" onClick={onScolarCareerClick}>학술경력</li>
            <li className="profListItem" onClick={onResearchSubjectClick}>연구과제</li>        
                 
           </ul>
        </div>
      </div>

      <div className="prof-profile" ref={aRef}>
        prof-profile
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
      

      <div className="main-career" ref={mRef}>
        main-career
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

      <div className="scolarship-career" ref={sRef}>
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

      <div className="research-subject" ref={rRef}>
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
