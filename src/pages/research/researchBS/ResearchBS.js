import React, {useState} from 'react';
import Bs1Photo from "../../../components/img/bs01.jpg";
import Bs2Photo from "../../../components/img/bs02.jpg";
import ResearchLayout from '../researchLayout/ResearchLayout';
import "./researchBS.scss"
import BarImgR from "../../../components/img/design_bar.png";
export default function ResearchBS() {
  const title="Research >  Bio-Signal Processing & AI"

 
  const [choose,setChoose]=useState('All')


  const onAllResClick=()=>{
    setChoose('All')
  };

  const onProgResClick=()=>{
    setChoose('Progressing')
  };

  const onClosedResClick=()=>{
    setChoose('Closed')
  };

  
  return (   
    <div className="researchBS" >
      <div className="bs-header" >
        <div className="bs-title">
         {title}
        </div>
  
        <div className="bs-scrollMenu">
           <ul className="bsList">
            <li className="bsListItem" onClick={onAllResClick} style={{color: choose === 'All' ? 'black' : 'grey'}}>All</li>
            <li className="bsListItem" onClick={onProgResClick} style={{color: choose === 'Progressing' ? 'black' : 'grey'}}>Progressing</li>
            <li className="bsListItem" onClick={onClosedResClick} style={{color: choose === 'Closed' ? 'black' : 'grey'}}>Closed</li>

           </ul>
        </div>
      </div>

      {choose ==='All'?
         <div className="bsp-all">
         <ResearchLayout title={'급만성 폐질환 치료를 위한 생체신호 분석기반 스마트 호흡치료기 개발'} img={Bs1Photo}bar={BarImgR}/>
         <ResearchLayout barl={BarImgR} title={'조산 고위험 산모의 예측 및 검사 접근성의 향상을 위한 자궁근전도 기반의 무선 모니터링시스템 개발'} img={Bs2Photo}/>
       </div>

        :
          choose==='Progressing'?
        
           <div className="bsp-all">
              <ResearchLayout title={'급만성 폐질환 치료를 위한 생체신호 분석기반 스마트 호흡치료기 개발'} img={Bs1Photo}bar={BarImgR}/>
       
           </div>
        
         : 
         
           <div className="bsp-all">
     
              <ResearchLayout title={'조산 고위험 산모의 예측 및 검사 접근성의 향상을 위한 자궁근전도 기반의 무선 모니터링시스템 개발'} img={Bs2Photo}bar={BarImgR}/>
          </div>
        
      }



   
      
    </div>
  )
}
