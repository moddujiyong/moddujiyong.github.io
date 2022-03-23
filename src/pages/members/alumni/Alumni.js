import React, {useRef} from 'react';

import "./alumni.scss"
export default function Alumni() {

  const allAlumRef=useRef(null);
  const phdAlumRef=useRef(null);
  const msAlumRef=useRef(null);

  const onAlAlumClick=()=>{
    allAlumRef.current?.scrollIntoView({block:'nearest',behavior:'smooth'});
  };

  const onPhdAlumClick=()=>{
    phdAlumRef.current?.scrollIntoView({block:'nearest',behavior:'smooth'});
  };

  const onMsAlumClick=()=>{
    msAlumRef.current?.scrollIntoView({behavior:'smooth',block:'nearest'});
  };
  return (   
    <div className="alumni" >
      <div className="alu-header" >
        <div className="alu-title">
         Alumni
        </div>
  
        <div className="alu-scrollMenu">
           <ul className="aluList">
            <li className="aluListItem" onClick={onAlAlumClick}>All</li>
            <li className="aluListItem" onClick={onPhdAlumClick}>Ph.D</li>
            <li className="aluListItem" onClick={onMsAlumClick}>MS</li>        
                 
           </ul>
        </div>
      </div>

      <div className="alu-profile" ref={allAlumRef}>
        alu-profile
      </div>
      

      <div className="phdAlum" ref={phdAlumRef}>
        phd alum
        <div>
        phd alum
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

      <div className="msAlum" ref={msAlumRef}>
        msAlum
        
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
