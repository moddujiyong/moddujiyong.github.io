import React, {useRef} from 'react';
import Ud1Photo from "../../../components/img/ud01.jpg";
import Ud2Photo from "../../../components/img/ud02.jpg";
import Ud3Photo from "../../../components/img/ud03.jpg";
import Ud4Photo from "../../../components/img/ud04.jpg";
import Ud5Photo from "../../../components/img/ud05.jpg";
import Ud6Photo from "../../../components/img/ud06.jpg";
import Ud8Photo from "../../../components/img/ud08.jpg";
import Ud9Photo from "../../../components/img/ud09.jpg";
import "./researchUD.scss"
export default function ResearchCD() {
    
    
  const title="Research > UX/UI Design & Usability"
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
            <li className="udListItem" onClick={onClosingResUDClick}>Closed</li>

           </ul>
        </div>
      </div>

      <div className="udu-all">
        <div className="udul">
          <span className="udu-title">기능 융합형 초음파 영상기기</span>
          <img className="resImg" src={Ud1Photo} alt=""/> 
        </div>
        <div className="udul">
          <span className="udu-title">급만성 폐질환 치료를 위한 생체신호 분석기반 스마트 호흡치료기 개발</span>
          <img className="resImg" src={Ud2Photo} alt=""/> 
        </div>
        <div className="udul">
          <span className="udu-title">인공지능 기반 중증악화 예측 가능한 고성능 환자감치장치 시스템 개발</span>
          <img className="resImg" src={Ud3Photo} alt=""/> 
        </div>
        <div className="udul">
          <span className="udu-title">신생아 집중치료에 적합한 다기능 스마트 보육기 개발</span>
          <img className="resImg" src={Ud4Photo} alt=""/> 
        </div>
        <div className="udul">
          <span className="udu-title">초음파 기반의 패치형 방광 모니터링 헬스케어 시스템 개발</span>
          <img className="resImg" src={Ud5Photo} alt=""/> 
        </div>
        <div className="udul">
          <span className="udu-title">조산 고위험 산모의 예측 및 검사 접근성의 향상을 위한 자궁근전도 기반의 무선 모니터링시스템 개발</span>
          <img className="resImg" src={Ud6Photo} alt=""/> 
        </div>
        <div className="udul">
          <span className="udu-title">하안검 치료용 정밀 초음파 수술기에 대한 사용적합성 평가</span>
          <img className="resImg" src={Ud8Photo} alt=""/> 
        </div>
        <div className="udul">
          <span className="udu-title">현장진단·응급현장 시장 선도를 위한 ICT 기반 무선 초음파 솔루션 개발</span>
          <img className="resImg" src={Ud9Photo} alt=""/> 
        </div>
      </div>

      

    </div>
  )
}
