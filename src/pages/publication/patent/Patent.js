import React, {useRef} from 'react';

import "./patent.scss"
export default function Patent() {

  const allPRef=useRef(null);
  const PRef2022=useRef(null);
  const PRef2021=useRef(null);
  const PRef2020=useRef(null);
  const PRef2019=useRef(null);
  const PRef2018=useRef(null);

  const onAllPRefClick=()=>{
    allPRef.current?.scrollIntoView({block:'nearest',behavior:'smooth'});
  };

  const onPRef2022Click=()=>{
    PRef2022.current?.scrollIntoView({block:'nearest',behavior:'smooth'});
  };

  const onPRef2021Click=()=>{
    PRef2021.current?.scrollIntoView({block:'nearest',behavior:'smooth'});
  };

  const onPRef2020Click=()=>{
    PRef2020.current?.scrollIntoView({block:'nearest',behavior:'smooth'});
  };

  const onPRef2019Click=()=>{
    PRef2019.current?.scrollIntoView({block:'nearest',behavior:'smooth'});
  };

  const onPRef2018Click=()=>{
    PRef2018.current?.scrollIntoView({block:'nearest',behavior:'smooth'});
  };

  
  
  return (   
    <div className="patent" >
      <div className="patent-header" >
        <div className="patent-title">
         patent
        </div>
  
        <div className="patent-scrollMenu">
           <ul className="patentList">
            <li className="patentListItem" onClick={onAllPRefClick}>All</li>
            <li className="patentListItem" onClick={onPRef2022Click}>2022</li>
            <li className="patentListItem" onClick={onPRef2021Click}>2021</li>
            <li className="patentListItem" onClick={onPRef2020Click}>2020</li>
            <li className="patentListItem" onClick={onPRef2019Click}>2019</li>
            <li className="patentListItem" onClick={onPRef2018Click}>2018</li>

           </ul>
        </div>
      </div>

      <div className="patent-profile" ref={allPRef}>
       
      </div>
      

      <div className="patent2022" ref={PRef2022}>
        2022
      </div>

      <div className="patent2021" ref={PRef2021}>
        2021
        
      </div>

      <div className="patent2020" ref={PRef2020}>
        
        2020
     </div>

      <div className="patent2019" ref={PRef2019}>
        
        2019
       </div>

      <div className="patent2018" ref={PRef2018}>
        2018
        
      </div>

      <div className="patentSearch">
        검색
      </div>

    </div>
  )
}
