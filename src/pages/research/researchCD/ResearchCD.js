import React, {useRef} from 'react';
import Cd1Photo from "../../../components/img/cd01.JPG";
import Cd2Photo from "../../../components/img/cd02.jpg";
import Cd3Photo from "../../../components/img/cd03.JPG";
import Cd4Photo from "../../../components/img/cd04.jpg";
import Cd5Photo from "../../../components/img/cd05.JPG";
import Cd6Photo from "../../../components/img/cd06.jpg";
import Cd7Photo from "../../../components/img/cd07.jpg";
import "./researchCD.scss"
export default function ResearchCD() {

  const title="Research > Clinical Study Design"
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
          {title}
        </div>
  
        <div className="cd-scrollMenu">
           <ul className="cdList">
            <li className="cdListItem" onClick={onAllResClick}>All</li>
            <li className="cdListItem" onClick={onProgResClick}>Progressing</li>
            <li className="cdListItem" onClick={onClosingResClick}>Closed</li>
           </ul>
        </div>
      </div>

      <div className="csd-all">
        <div className="csdl">
          <span className="csd-title">인공지능 기반 중증악화 예측 가능한 고성능 환자감시장치 시스템 개발</span>
          <img className="resImg" src={Cd1Photo} alt=""/> 
        </div>
        <div className="csdl">
          <span className="csd-title">고령자 만성질환, 현장형 진단 및 치료 시스템 임상시험 지원</span>
          <img className="resImg" src={Cd2Photo} alt=""/> 
        </div>
        <div className="csdl">
          <span className="csd-title">디지털 치료기기 임상설계 가이드라인 개발 연구 사진 변경</span>
          <img className="resImg" src={Cd3Photo} alt=""/> 
        </div>
        <div className="csdl">
          <span className="csd-title">조산 고위험 산모 예측 알고리즘 개발 및 자궁근전도 무선 모니터링 시스템의 임상적 유효성 검증</span>
          <img className="resImg" src={Cd4Photo} alt=""/> 
        </div>
        <div className="csdl">
          <span className="csd-title">위암영상검출진단보조소프트웨어에 대한 임상시험계획서 개발</span>
          <img className="resImg" src={Cd5Photo} alt=""/> 
        </div>
        <div className="csdl">
          <span className="csd-title">생체활성 소재 기반의 임상적 요구에 최적화된 기능성 환자 맞춤형 척추 유합 임플란트 및 제조 시스템 개발</span>
          <img className="resImg" src={Cd6Photo} alt=""/> 
        </div>
        <div className="csdl">
          <span className="csd-title">첨단기술 기반 치료형 기기의 임상시험 프로토콜 가이드라인 개발</span>
          <img className="resImg" src={Cd7Photo} alt=""/> 
        </div>
      </div>

        
    </div>
  )
}


