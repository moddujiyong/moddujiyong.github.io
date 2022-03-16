import React, {useRef} from 'react';

import "./conference.scss"
export default function Journal() {

  const allCRef=useRef(null);
  const CRef2022=useRef(null);
  const CRef2021=useRef(null);
  const CRef2020=useRef(null);
  const CRef2019=useRef(null);
  const CRef2018=useRef(null);

  const onAllCRefClick=()=>{
    allCRef.current?.scrollIntoView({block:'nearest',behavior:'smooth'});
  };

  const onCRef2022Click=()=>{
    CRef2022.current?.scrollIntoView({block:'nearest',behavior:'smooth'});
  };

  const onCRef2021Click=()=>{
    CRef2021.current?.scrollIntoView({block:'nearest',behavior:'smooth'});
  };

  const onCRef2020Click=()=>{
    CRef2020.current?.scrollIntoView({block:'nearest',behavior:'smooth'});
  };

  const onCRef2019Click=()=>{
    CRef2019.current?.scrollIntoView({block:'nearest',behavior:'smooth'});
  };

  const onCRef2018Click=()=>{
    CRef2018.current?.scrollIntoView({block:'nearest',behavior:'smooth'});
  };

  
  
  return (   
    <div className="conference" >
      <div className="conference-header" >
        <div className="conference-title">
         Conference
        </div>
  
        <div className="conference-scrollMenu">
           <ul className="conferenceList">
            <li className="conferenceListItem" onClick={onAllCRefClick}>All</li>
            <li className="conferenceListItem" onClick={onCRef2022Click}>2022</li>
            <li className="conferenceListItem" onClick={onCRef2021Click}>2021</li>
            <li className="conferenceListItem" onClick={onCRef2021Click}>2020</li>
            <li className="conferenceListItem" onClick={onCRef2021Click}>2019</li>
            <li className="conferenceListItem" onClick={onCRef2021Click}>2018</li>

           </ul>
        </div>
      </div>

      <div className="conference-profile" ref={allCRef}>
       
      </div>
      

      <div className="conference2022" ref={CRef2022}>
        2022
      </div>

      <div className="conference2021" ref={CRef2021}>
        2021
        
      </div>

      <div className="conference2020" ref={CRef2020}>
        
        2020
     </div>

      <div className="conference2019" ref={CRef2019}>
        
        2019
       </div>

      <div className="conference2018" ref={CRef2018}>
        2018
        
      </div>

      <div className="conferenceSearch">
        검색
      </div>

    </div>
  )
}
