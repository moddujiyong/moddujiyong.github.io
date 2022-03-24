import React, {useRef} from 'react';
import Bs1Photo from "../../../components/img/bs01.jpg";
import Bs2Photo from "../../../components/img/bs02.jpg";
import "./researchBS.scss"
export default function ResearchBS() {
  const title="Research >  Bio Signal processing & AI"
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
    <div className="researchBS" >
      <div className="bs-header" >
        <div className="bs-title">
         {title}
        </div>
  
        <div className="bs-scrollMenu">
           <ul className="bsList">
            <li className="bsListItem" onClick={onAllResClick}>All</li>
            <li className="bsListItem" onClick={onProgResClick}>Progressing</li>
            <li className="bsListItem" onClick={onClosingResClick}>Closed</li>

           </ul>
        </div>
      </div>
      <div className="bsp-all">
        <div className="bspl">
          <span className="bsp-title">급만성 폐질환 치료를 위한 생체신호 분석기반 스마트 호흡치료기 개발</span>
          <img className="bspImg" src={Bs1Photo} alt=""/> 
        </div>
        <div className="bspl">
          <span className="bsp-title">조산 고위험 산모의 예측 및 검사 접근성의 향상을 위한 자궁근전도 기반의 무선 모니터링시스템 개발</span>
          <img className="bspImg" src={Bs2Photo} alt=""/> 
        </div>
        </div>
      
    </div>
  )
}
