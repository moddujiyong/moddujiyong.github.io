import React, {useRef} from 'react';

import "./researchCD.scss"
export default function ResearchCD() {

  const aResRef=useRef(null);
  const progResRef=useRef(null);
  const closingResRef=useRef(null);

  const onAllResClick=()=>{
    aResRef.current?.scrollIntoView({block:'nearest',behavior:'smooth'});
  };

  const onProgResClick=()=>{
    progResRef.current?.scrollIntoView({block:'nearest',behavior:'smooth'});
  };

  const onClosingResClick=()=>{
    closingResRef.current?.scrollIntoView({behavior:'smooth',block:'nearest'});
  };

  
  return (   
    <div className="researchCD" >
      <div className="cd-header" >
        <div className="cd-title">
          Clinical Study Design
        </div>
  
        <div className="cd-scrollMenu">
           <ul className="cdList">
            <li className="cdListItem" onClick={onAllResClick}>All</li>
            <li className="cdListItem" onClick={onProgResClick}>Progressing</li>
            <li className="cdListItem" onClick={onClosingResClick}>Closing</li>

           </ul>
        </div>
      </div>

      <div className="cd-profile" ref={aResRef}>
        cd-profile
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
      

      <div className="cd-prog" ref={progResRef}>
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

      <div className="cd-closing" ref={closingResRef}>
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

    </div>
  )
}
