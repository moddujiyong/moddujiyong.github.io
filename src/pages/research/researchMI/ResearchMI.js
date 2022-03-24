import React, {useRef} from 'react';
import Mi1Photo from "../../../components/img/mi01.JPG";
import Mi2Photo from "../../../components/img/mi02.JPG";
import Mi3Photo from "../../../components/img/mi03.JPG";
import Mi4Photo from "../../../components/img/mi04.jpg";

import "./researchMI.scss"
export default function ResearchCD() {
  const title="Research > Medical Industry Policy"
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
          {title}
        </div>
  
        <div className="mi-scrollMenu">
           <ul className="miList">
            <li className="miListItem" onClick={onAllResMIClick}>All</li>
            <li className="miListItem" onClick={onProgResMIClick}>Progressing</li>
            <li className="miListItem" onClick={onClosingResMIClick}>Closed</li>

           </ul>
        </div>
      </div>

      <div className="mip-all">
        <div className="mipl">
          <span className="mip-title">아이콜리에 대한 RA/QA 지원 용역</span>
          <img className="mipImg" src={Mi1Photo} alt=""/> 
        </div>
        <div className="mipl">
        <span className="mip-title">디지털 치료기기 임상설계 가이드라인 개발 연구</span>
          <img className="mipImg" src={Mi2Photo} alt=""/> 
        </div>
        <div className="mipl">
        <span className="mip-title">병원-기업 연계 의료기기 R&D 협력 플랫폼 기술개발 후속 사업을 위한 기획연구</span>
          <img className="mipImg" src={Mi3Photo} alt=""/> 
        </div>
        <div className="mipl">
        <span className="mip-title">혁신형 의료기기 기업 인증 기준 및 지원 방안 수립 연구</span>
          <img className="mipImg" src={Mi4Photo} alt=""/> 
        </div>
    
      </div>

    </div>
  )
}
