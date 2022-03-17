import React, {useRef} from 'react';

import "./researchMI.scss"
export default function ResearchCD() {

  const aResMIRef=useRef(null);
  const progResMIRef=useRef(null);
  const closingResMIRef=useRef(null);

  const onAllResMIClick=()=>{
    aResMIRef.current?.scrollIntoView({block:'nearest',behavior:'smooth'});
  };

  const onProgResMIClick=()=>{
    progResMIRef.current?.scrollIntoView({block:'nearest',behavior:'smooth'});
  };

  const onClosingResMIClick=()=>{
    closingResMIRef.current?.scrollIntoView({behavior:'smooth',block:'nearest'});
  };

  
  return (   
    <div className="researchMI" >
      <div className="mi-header" >
        <div className="mi-title">
          Medical Industry Policy
        </div>
  
        <div className="mi-scrollMenu">
           <ul className="miList">
            <li className="miListItem" onClick={onAllResMIClick}>All</li>
            <li className="miListItem" onClick={onProgResMIClick}>Progressing</li>
            <li className="miListItem" onClick={onClosingResMIClick}>Closing</li>

           </ul>
        </div>
      </div>

      <div className="mi-profile" ref={aResMIRef}>
        mi-profile
     
      </div>
      

      <div className="mi-prog" ref={progResMIRef}>
        main-career
      
      </div>

      <div className="mi-closing" ref={closingResMIRef}>
        scolarship-career
       
        
      </div>

    </div>
  )
}
