import React, {useRef} from 'react';

import "./researchUD.scss"
export default function ResearchCD() {

  const aResUDRef=useRef(null);
  const progResUDRef=useRef(null);
  const closingResUDRef=useRef(null);

  const onAllResUDClick=()=>{
    aResUDRef.current?.scrollIntoView({block:'nearest',behavior:'smooth'});
  };

  const onProgResUDClick=()=>{
    progResUDRef.current?.scrollIntoView({block:'nearest',behavior:'smooth'});
  };

  const onClosingResUDClick=()=>{
    closingResUDRef.current?.scrollIntoView({behavior:'smooth',block:'nearest'});
  };

  
  return (   
    <div className="researchUD" >
      <div className="ud-header" >
        <div className="ud-title">
         UX/UI Design & Usability
        </div>
  
        <div className="ud-scrollMenu">
           <ul className="udList">
            <li className="udListItem" onClick={onAllResUDClick}>All</li>
            <li className="udListItem" onClick={onProgResUDClick}>Progressing</li>
            <li className="udListItem" onClick={onClosingResUDClick}>Closing</li>

           </ul>
        </div>
      </div>

      <div className="ud-profile" ref={aResUDRef}>
        ud-profile
      
      </div>
      

      <div className="ud-prog" ref={progResUDRef}>
        main-career
      
      </div>

      <div className="ud-closing" ref={closingResUDRef}>
        scolarship-career
       
        
      </div>

    </div>
  )
}
