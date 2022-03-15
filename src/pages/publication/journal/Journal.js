import React, {useRef} from 'react';

import "./journal.scss"
export default function ResearchCD() {

  const allJRef=useRef(null);
  const JRef2022=useRef(null);
  const JRef2021=useRef(null);
  const JRef2020=useRef(null);
  const JRef2019=useRef(null);
  const JRef2018=useRef(null);

  const onAllJRefClick=()=>{
    allJRef.current?.scrollIntoView({block:'nearest',behavior:'smooth'});
  };

  const onJRef2022Click=()=>{
    JRef2022.current?.scrollIntoView({block:'nearest',behavior:'smooth'});
  };

  const onJRef2021Click=()=>{
    JRef2021.current?.scrollIntoView({block:'nearest',behavior:'smooth'});
  };

  const onJRef2020Click=()=>{
    JRef2020.current?.scrollIntoView({block:'nearest',behavior:'smooth'});
  };

  const onJRef2019Click=()=>{
    JRef2019.current?.scrollIntoView({block:'nearest',behavior:'smooth'});
  };

  const onJRef2018Click=()=>{
    JRef2018.current?.scrollIntoView({block:'nearest',behavior:'smooth'});
  };

  
  
  return (   
    <div className="journal" >
      <div className="journal-header" >
        <div className="journal-title">
         Journal
        </div>
  
        <div className="journal-scrollMenu">
           <ul className="journalList">
            <li className="journalListItem" onClick={onAllJRefClick}>All</li>
            <li className="journalListItem" onClick={onJRef2022Click}>2022</li>
            <li className="journalListItem" onClick={onJRef2021Click}>2021</li>
            <li className="journalListItem" onClick={onJRef2021Click}>2020</li>
            <li className="journalListItem" onClick={onJRef2021Click}>2019</li>
            <li className="journalListItem" onClick={onJRef2021Click}>2018</li>

           </ul>
        </div>
      </div>

      <div className="journal-profile" ref={allJRef}>
       
      </div>
      

      <div className="journal2022" ref={JRef2022}>
        
      </div>

      <div className="journal2021" ref={JRef2021}>
        
        
      </div>

      <div className="journal2020" ref={JRef2020}>
        
        
     </div>

    <div className="journal2019" ref={JRef2019}>
        
        
     </div>

     <div className="journal2018" ref={JRef2018}>
        
        
     </div>

    </div>
  )
}
