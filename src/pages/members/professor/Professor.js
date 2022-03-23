import React, {useRef} from 'react';
import BarImgProf from "../../../components/img/design_bar.png";
import ProfPhoto from "../../../components/img/JangWonSuk.jpg";
import "./professor.scss"
export default function Professor() {
  const intJournal="< 국외 논문 >"
  const domJournal="< 국내 논문 >"
  const aRef=useRef(null);
  const mRef=useRef(null);
  const sRef=useRef(null);
  const rRef=useRef(null);
  const onAllClick=()=>{
    aRef.current?.scrollIntoView({block:'end',behavior:'smooth'});
  };

  const onMainCareerClick=()=>{
    mRef.current?.scrollIntoView({block:'end',behavior:'smooth'});
  };

  const onScolarCareerClick=()=>{
    sRef.current?.scrollIntoView({block:'start',behavior:'smooth'});
  };

  const onResearchSubjectClick=()=>{
   
    rRef.current?.scrollIntoView({block:'start',behavior:'smooth'});
  };
  return (   
    <div className="professor" >
      <div className="prof-header" >
        <div className="header-title">
          Professor
      
        </div>
  
        <div className="prof-scrollMenu">
           <ul className="profList">
            <li className="profListItem" onClick={onAllClick}>All</li>
            <li className="profListItem" onClick={onMainCareerClick}>주요경력</li>
            <li className="profListItem" onClick={onScolarCareerClick}>학술경력</li>
            <li className="profListItem" onClick={onResearchSubjectClick}>연구과제</li>        
                 
           </ul>
        </div>
      </div>

      <div className="prof-profile" ref={aRef}>
       <div className="prof-photo">
           <img className="profImg" src={ProfPhoto} alt=""/>
       </div>

       <div className="prof-summary">
          <div className="prof-name">
            장원석
            <span className="prof-pos"> 교수/공학박사 </span>
            <span className="prof-eng"> Wonseuk Jang</span>
          </div>

          <div className="prof-field">
            <div>
             <span className="fos">Field of specialty: </span>
             <span clasName="fosCont">Medical Engineering</span>
            </div>
            
            <div>
              <span className="prof-email">Email: </span>
              <span className="prof-emailCont">WSJANG@yuhs.ac</span>
            </div>
             
           
            <div>
              <span className="loc">Location: </span>
              <span className="locCon"> Future Medicine Research Center</span>
            </div>


            <div>
             <span className="tel">Tel:</span> 
             <span className="telCon"> 02-2019-5442</span>
            </div>



              <span className="ri">| Research Interest |</span>
              <span className="ril1">Medical devices usability engineering</span>
              <span className="ril2">Medical devices UX/UI design and evaluation</span>
              <span className="ril3">Medical image diagnostic system</span>
              <span className="ril4">Biosignal processing and diagnostic algorithm</span>
              <span className="ril5">Medical devices industry policies</span>

          </div> 

       </div>
      </div>
      

      <div className="main-career" ref={mRef}>
        <div className="mc">
        | 주요 경력 |
        </div>
        
        <span className="mcl">2020. 3 ~ 현재 : 연세대학교 의과대학 대학원 융합의학과(디지털헬스케어전공) 교수</span>
        <span className="mcl">2018. 3 ~ 현재 : 연세대학교 의과대학 대학원 의료기기산업학과 교수</span>
        <span className="mcl">2014. 9 ~ 2018. 2 : 연세대학교 의과대학 의학공학교실 연구조교수</span>
        <span className="mcl">2012. 12 ~ 2014. 8 : 연세대학교 보건과학대학 방사선학과 조교수</span>
        <span className="mcl">2012. 7 ~ 2012. 11 : 삼성메디슨㈜ 수석연구원</span>
        <span className="mcl">2004. 8 ~ 2011. 4 : 지멘스㈜ SIEMENS Medical R&D Center, 수석연구원</span>
        <span className="mcl">2002. 5 ~ 2004. 7 : 한국보건산업진흥원 의료기기팀, 연구원</span>
        <span className="mcl">1997. 7 ~ 2002. 5 : ㈜바이오시스 연구소 S/W팀 , 전임연구원</span>
      </div>

      <div className="other-career">
        <div className="oc">
          | 기타 경력 |
        </div>

        <span className="ocl">2021.9 ~ 현재 : 강남세브란스병원 의료기기사용적합성 연구센터 소장</span>
        
        <span className="ocl">2021.7 ~ 현재 : 소비자정책위원회, 국무총리실, 전문위원(식의약품분야)</span>
        
        <span className="ocl">2021.7 ~ 현재 : 의료기기위원회, 식품의약품안전처, 전문위원</span>
        
        <span className="ocl">2021.5 ~ 현재 : 보건산업 기술가치 평가 심의위원, 한국보건산업진흥원</span>

        
        <span className="ocl">2021.1 ~ 현재 : 대한에프디씨규제과학회 학술위원</span>
        
        <span className="ocl">2021.1 ~ 현재 : 대한의용생체공학회 학술이사</span>
        
        <span className="ocl">2020.11 ~ 현재 : R&D 샌드박스 운영위원회, 산업통상자원부</span>
        
        <span className="ocl">2020.4 ~ 현재 : 의료기기 기술문서심사기관 심의위원회, 식품의약품안전처</span>
        
        <span className="ocl">2017. 7 ~ 2017.10 : 산업계관점대학평가(의료기기분야) 요구분석, 대학교육협의회, 전문위원</span>
        
        <span className="ocl">2016. 6 ~ 2017. 5 : 의료기기광고사전심의위원회, 전문위원</span>
        
        <span className="ocl">2016. 3 ~ 현재 : 의료기기 이상사례 심위위원회, 위원</span>
        <span className="ocl">2015. 10 ~ 2015. 12 : 산업핵심기술개발사업, 산업통상자원부, 기획위원</span>
        <span className="ocl">2013. 5 ~ 현재 : 의료기기위원회, 식품의약품안전처, 전문위원</span>
        <span className="ocl">2013. 6 ~ 2013. 6 : 산업계관점대학평가(의료기기분야) 요구분석, 대학교육협의회, 전문위원 </span>
        <span className="ocl">2011. 7 ~ 2011. 12 : 범부처의료기기연구개발사업 공동기획위원,지식경제부/보건복지부, 기획위원</span>
        <span className="ocl">2011. 6 ~ 2011. 12 : 산업원천기술개발사업(의료기기) R&D R&D전략위원회, 기획위원</span>
        <span className="ocl">2010. 10 ~ 2011. 4 : 대경 광역권선도산업육성 프로젝트, Advisor</span>
        <span className="ocl">2009. 9 ~ 현재 : 의료기기미래포럼-제도분과개선 전문위원회. 식품의약품안전처, 전문위원</span>
        <span className="ocl">2009. 8 ~ 2012. 1 : 산업원천기술개발사업(의료기기) 기획지원팀, 지식경제부, 기획위원</span>
        <span className="ocl">2008. 4 ~ 2009. 1 : 신성장동력기획단 바이오.의료소위원회, 지식경제부, 전문위원</span>
        <span className="ocl">2008. 8 ~ 2011.12 : 산업원천기술로드맵(의료기기) 기획위원회, 지식경제부, 기획위원</span>
        <span className="ocl">2008. 2 ~ 2009.12 : 산업술로드맵(차세대의료기기) 기획위원회, 지식경제부, 기획위원</span>
        <span className="ocl">2006. 5 ~ 현재 : 지식경제 기술혁신평가단(의료기기), 지식경제부, 평가위원</span>
        <span className="ocl">2005. 4 ~ 2009. 2 : 산업원천기술개발사업 기획위원회, 지식경제부, 기획위원</span>
        <span className="ocl">2003 : 의료기기법 연구회, 식품의약품안전처, 위원</span>
     
      </div>
      <div className="edu-career">
        <div className="ec">| 학력 사항 |</div>
        <span className="ecl">2007 ~ 2010 : 연세대학교 대학원 생체공학협동과정 공학박사</span>
        <span className="ecl">* 학위 논문: Development of Portable Ultrasound Imaging System with Wireless Patient Monitor</span>
        <span className="ecl">1995 ~ 1997 : 연세대학교 대학원 의용전자공학과 공학석사</span>
        <span className="ecl">1991 ~ 1995 : 연세대학교 보건과학대학 의용전자공학과 공학사</span>
      </div>

      <div className="void-career">
          입력

      </div>

      <div className="scolarship-career" ref={sRef}>
      <div className="sc">
        | 학술 경력 |
        </div>
        
        <span className="scl">{intJournal}</span>
        <span className="scl">High PRF ultrafast sliding compound doppler imaging: fully qualitative and quantitative analysis of blood flow (Physics in Medicine & Biology, Vol 63, No 4 , Feb 2018) </span>
        <span className="scl">Tooth Segmentation Using Gaussian Mixture Model and Genetic Algorithm (JOURNAL OF MEDICAL IMAGING AND HEALTH INFORMATICS, Vol 7, No 6, Oct 2017) </span>
        <span className="scl">Texture Analysis of Supraspinatus Ultrasound Image for Computer Aided Diagnostic System (Healthcare Informatics Research, Vol 22, no 4, Oct 2016)</span>
        <span className="scl">Continuous monitoring of arthritis in animal models using optical imaging modalities (JOURNAL OF BIOMEDICAL OPTICS, Vol 19, No 10, Oct 2014) </span>
        <span className="scl">Digital tomosynthesis (DTS) with a Circular X-ray tube: Its image reconstruction based on total-variation minimization and the image characteristics (JOURNAL OF THE KOREAN PHYSICAL SOCIETY, Vol 63, No 5, Sep 2013)</span>
        <span className="scl">{domJournal}</span>
        <span className="scl">폐 결절 검출을 위한 합성곱 신경망의 성능 개선 (의공학회지, 38권, 5호, 2017. 10) </span>
        <span className="scl">이산 웨이브렛 변환을 이용한 고각성 부정 감성의 GSR 신호 분석 (감성과학, 20권, 3호, 2017. 9) </span>
        <span className="scl">컴퓨터 보조진단을 위한 초음파 영상에서갑상선 결절의 텍스쳐 분석 (멀티미디어학회논문지, 20권, 1호, 2017. 1) </span>
        <span className="scl">깊이 카메라를 이용한 호흡률 측정에 미치는 영향 요인 분석 (감성과학, 19권, 3호, 2016. 9) </span>
        <span className="scl">선형-비선형 특징추출에 의한 비정상 심전도 신호의 랜덤포레스트 기반 분류 (의공학회지, 37권, 2호, 2016. 4)</span>
        <span className="scl">운동 의도에 따른 뇌파-근전도 신호 간 연결성 분석 (감성과학, 19권, 1호, 2016. 3) </span>
        <span className="scl">Distance Regularized Level Set Evolution 방법을 이용한 간암 Segmentation(대한의학영상정보학회지, 21권, 2015. 8) </span>
        <span className="scl">Design of Optimized Ultrasound Clinical Work-flow; Usability Perspective (Journal of International Society for Simulation Surgery, 2권, 1호, 2015. 6) </span>
        <span className="scl">심초음파용 생체신호측정모듈의 개발 (전자공학회논문지–SC, 47권, 4호, 2010. 7) </span>
        <span className="scl">심초음파용 실시간 심전도 QRS 검출 모듈에 관한 연구 (전자공학회논문지–SC, 47권, 3호, 2010. 5) </span>
        <span className="scl">대퇴근활성화에 대한 자전거 운동 시 근전도와 슬관절 각도와의 상관관계 연구 (전자공학회논문지–SC, 46권, 4호, 2009. 7)</span>
      </div>

      <div className="research-subject" ref={rRef}>
        

        <div className="rs">| 연구 과제 |</div>
        
        <span className="rsl">| 보건복지부 | 2018. 4 ~ 2021. 12</span>
        <span className="rsl">조산 고위험 산모 예측 알고리즘 개발 및 자궁 근전도 무선 모니터링 시스템의 임상적 유효성 검증 (공동연구)</span>
        <span className="rsl">| 식품의약품안전처 | 2018. 2 ~ 2018. 11 </span>
        <span className="rsl">첨단기술 기반 치료형기기에 대한 임상시험프로토콜가이드라인개발 (세부과제책임자) </span>
        <span className="rsl">| 한국연구재단 | 2017. 4 ~ 2022. 3 </span>
        <span className="rsl">초음파기반의 패치형 방광모니터링 헬스케어 시스템 개발 (세부과제책임자)</span>
        <span className="rsl"> | 산업통상자원부 | </span>
        <span className="rsl">2014 ~ 2018: 현장진단응급현장시장선도를 위한 ICT기반의 무선초음파솔루션 개발 (참여기관 책임자)</span>
        <span className="rsl">2015 ~ 2017: 전후두부 정보흐름을 이용한 마취심도 및 통증수준 진단 시스템 개발 (참여기관 책임자) </span>
        <span className="rsl">2015 ~ 2016: 급/만성 뇌질환/심혈관질환자 모니터링용 인체친화형 스마트 패치 및 재택 건강관리 서비스 솔루션 개발 (참여기관 책임자, 산업통상자원부)</span>
        <span className="rsl">| 지식경제부 |</span>
        <span className="rsl">| 2005. 12 ~ 2010. 11 </span>
        <span className="rsl">차세대 의료용 영상진단시스템 개발 (총괄책임자)</span>
  

      </div>

      <div className="reward-career">
        
       <div className="rec">| 수상 경력 |</div>
        
        <span className="recl">2021 의료기기산업특성화대학원 유공자 포상 “한국보건산업진흥원 표창장”, 보건복지부, 2021.09.14</span>
        <span className="recl">2010 대한민국기술대상 산업진흥유공분야“지식경제부장관상”, 지식경제부, 2010.12.09</span>
      </div>




      <div className="void-career">
          입력

      </div>

      <div className="void-career">
          입력

      </div>

      <div className="void-career">
          입력

      </div>
    </div>
  )
}
