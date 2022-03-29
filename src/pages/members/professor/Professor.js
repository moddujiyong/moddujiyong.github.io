import React, {useRef,useState} from 'react';
import BarImgProf from "../../../components/img/design_bar.png";
import ProfPhoto from "../../../components/img/JangWonSuk.jpg";
import "./professor.scss"
export default function Professor() {
  const intJournal="< 국외 논문 >"
  const domJournal="< 국내 논문 >"

  const 보건복지부="<보건복지부>"
  const 식품의약품안전처="<식품의약품안전처>"
  const 한국연구재단="<한국연구재단>"
  const 산업통상자원부="<산업통상자원부>"
  const 지식경제부="<지식경제부>"
  const 식품의약품안전평가원="<식품의약품안전평가원>"
  const 범부처전주기의료기기연구개발사업단="<범부처전주기의료기기연구개발사업단>"
  const 뉴풍="<(주)뉴풍>"
  const 시지바이오="<(주)시지바이오>"
  const 엣지케어="<(주)엣지케어>"
  const 웨이센="<(주)웨이센>"
  const 다나="<특허법인 다나>"
  const 서울산업진흥원="<서울산업진흥원>"
  const 한국보건산업진흥원="<한국보건산업진흥원>"
  const 한국산업기술평가관리원="<한국산업기술평가관리원>"

  const [select,setSelect]=useState("All");

  const aRef=useRef(null);
  const mRef=useRef(null);
  const sRef=useRef(null);
  const rRef=useRef(null);


  const onAllClick=()=>{
    aRef.current?.scrollIntoView({block:'end',behavior:'smooth'});
    setSelect('All')
  };

  const onMainCareerClick=()=>{
    mRef.current?.scrollIntoView({block:'end',behavior:'smooth'});
    setSelect('주요경력')
  };

  const onScolarCareerClick=()=>{
    sRef.current?.scrollIntoView({block:'start',behavior:'smooth'});
    setSelect('학술경력')
  };
  const onResearchSubjectClick=()=>{
   
    rRef.current?.scrollIntoView({block:'start',behavior:'smooth'});
    setSelect('연구과제')
  };
  return (   
    <div className="professor" >
      <div className="prof-header" >
        <div className="header-title">
          Professor
      
        </div>
  
        <div className="prof-scrollMenu">
           <ul className="profList">
            <li className="profListItem" onClick={onAllClick} style={{color: select === 'All' ? 'black' : 'grey'}}>All</li>
            <li className="profListItem" onClick={onMainCareerClick} style={{color: select === 'Major Career' ? 'black' : 'grey'}}>Major Career</li>
            <li className="profListItem" onClick={onScolarCareerClick}style={{color: select === 'Major Career' ? 'black' : 'grey'}}>Major Career</li>
            <li className="profListItem" onClick={onResearchSubjectClick}style={{color: select === 'Research Subjects' ? 'black' : 'grey'}}>Research Subjects</li>        
                 
           </ul>
        </div>
      </div>
   
    <div className="prof-profile" ref={aRef}>
       <div className="prof-photo">
           <img className="profImg" src={ProfPhoto} alt=""/>
       </div>

       <div className="prof-summary">
          <div className="prof-name">
          Wonseuk Jang
            <span className="prof-pos"> Professor/Doctor of </span>
           
          </div>
      
            
          <div className="prof-field">
            <div className="fos-container">
             <span className="fos">Field of Specialty : </span>
             <span className="fosCont"> Medical Engineering</span>
            </div>
            
            <div className="email-container">
              <span className="prof-email">Email : </span>
              <span className="prof-emailCont">WS.JANG@yuhs.ac</span>
            </div>
             
           
      
            <div className="tel-container">
             <span className="tel">Tel :</span> 
             <span className="telCont"> 02-2019-5442</span>
            </div>
            <div className="research-interest">
              <span className="ri">| Research Interest |</span>
              <span className="ril">Medical Device Usability Engineering</span>
              <span className="ril">Medical Device UX/UI Design and Evaluation</span>
              <span className="ril">Medical Image Diagnostic System</span>
              <span className="ril">Bio-Signal Processing and Diagnostic Algorithm</span>
              <span className="ril">Medical Device Industry Policies</span>

            </div>
          
          </div> 

       </div>
      </div>
      

      <div className="main-career" ref={mRef}>
          <div className='mc-container'>
         
            <div className="mc">
            | Major Career |
            </div>
            
            <span className="mcl">Mar. 2020. ~ Current : Professor of Department of Integrative Medical Science (Digital healthcare), Graduate School, College of Medicine, Yonsei University</span>
            <span className="mcl">Mar. 2018. ~ Current : Professor, Department of Medical Devices Industry, Graduate School, College of Medicine, Yonsei University</span>
            <span className="mcl">Sep. 2014. ~ Current : Research Assistant Professor, Office of Medical Engineering, College of Medicine, Yonsei University</span>
            <span className="mcl">Dec. 2012. ~ Aug. 2014. : Assistant Professor, Department of Radiology, College of Health and Science, Yonsei University</span>
            <span className="mcl">Jul. 2012. ~ Nov. 2012. : Senior Researcher, Samsung Medicine</span>
            <span className="mcl">Aug. 2004. ~ Apr. 2011. : Senior Researcher, SIEMENS Medical R&D Center</span>
            <span className="mcl">May 2002. ~ Jul. 2004. : Researcher, Medical Devices Team, Korea Health Industry Development Institute</span>
            <span className="mcl">Jul. 1997. ~ May 2002. : Full-time researcher at Biosys Research Center</span>
          </div>
            <img className="bar-right" src={BarImgProf} alt="" />
     
      </div>

      <div className="other-career">
      <img className="bar-left1" src={BarImgProf} alt="" />
      <div className='oc-container'>
        <div className="oc">
          | Miscellaneous Career |
        </div>
       
        <span className="ocl" style={{color:'red'}}>2021.9 ~ 현재 : 강남세브란스병원 의료기기사용적합성 연구센터 소장</span>
        
        <span className="ocl"style={{color:'red'}}>2021.7 ~ 현재 : 소비자정책위원회, 국무총리실, 전문위원(식의약품분야)</span>
        
        <span className="ocl"style={{color:'red'}}>2021.7 ~ 현재 : 의료기기위원회, 식품의약품안전처, 전문위원</span>
        
        <span className="ocl"style={{color:'red'}}>2021.5 ~ 현재 : 보건산업 기술가치 평가 심의위원, 한국보건산업진흥원</span>

        
        <span className="ocl"style={{color:'red'}}>2021.1 ~ 현재 : 대한에프디씨규제과학회 학술위원</span>
        
        <span className="ocl"style={{color:'red'}}>2021.1 ~ 현재 : 대한의용생체공학회 학술이사</span>
        
        <span className="ocl"style={{color:'red'}}>2020.11 ~ 현재 : R&D 샌드박스 운영위원회, 산업통상자원부</span>
        
        <span className="ocl"style={{color:'red'}}>2020.4 ~ 현재 : 의료기기 기술문서심사기관 심의위원회, 식품의약품안전처</span>
        
        <span className="ocl">Jul. 2017. ~ Oct. 2017. : Professional Personnel, University Education Council, Demand Analysis of Industry Perspective University Evaluation (Medical devices)</span>
        
        <span className="ocl">Jun. 2016. ~ May 2017. : Professional Personnel, Medical Devices Advertisement Preview Committee</span>
        
        <span className="ocl">Mar. 2016. ~ Current : Member, Review Committee for Abnormal Cases of Medical Devices</span>
        <span className="ocl">Oct. 2015. ~ Dec. 2015. : Planner, Industrial Core Technology Development Project, Ministry of Trade, Industry, and Energy</span>
        <span className="ocl">May 2013. ~ Current : Professional Personnel, Medical Devices Committee, KFDA</span>
        <span className="ocl">June 2013. ~ June 2013. : Professional Personnel, Demand Analysis of Industry Perspective University Evaluation (Medical devices), University Education Council </span>
        <span className="ocl">Jul. 2011. ~ Dec. 2011. : Planner, Joint Planner for Cross-department Medical Devices Development Project, Ministry of Knowledge and Economy/Health and Welfare</span>
        <span className="ocl">Jun. 2011. ~ Dec. 2011. : Planner, R&D Strategic Committee, Industrial Orignal Technology Development Project (Medical devices)</span>
        <span className="ocl">Oct. 2010. ~ Apr. 2011. : Advisor, Daekyeong Regional Leading Industry Fostering Project</span>
        <span className="ocl">Sep. 2009. ~ Current : Professional Personnel, Future of Medical Devices Forum-Professional Committee for Institutional Division Improvement, KFDA</span>
        <span className="ocl">Aug. 2009. ~ Jan. 2012. : Planner, Ministry of Knowledge and Economy, Industrial Original Technology Fostering Project (Medical devices) Planning Support Team</span>
        <span className="ocl">Apr. 2008. ~ Jan. 2009. : Professional Personnel, New Growth Driver Planning Committee, Bio/medical subcommittee, Ministry of Knowledge and Economy</span>
        <span className="ocl">Aug. 2008. ~ Dec. 2011. : Planner, Industrial Original Technology Roadmap Planning Committee, Ministry of Knowledge and Economics</span>
        <span className="ocl">Feb. 2008. ~ Dec. 2009. : Planner, Planning Committee for Industry Roadmaps (Next Generation of Medical Devices), Ministry of Knowledge and Economics</span>
        <span className="ocl">May 2006. ~ Current : Evaluator, Knowledge and Economics Technology Innovation Evaluation Group (Medical devices), Ministry of Knowledge and Economics</span>
        <span className="ocl">Apr. 2005. ~ Feb. 2009. : Planner, Planning Committee for Industrial Original Technology Fostering Project, Ministry of Knowledge and Economics</span>
        <span className="ocl">2003. : Member, Medical Devices Law Research Society, KFDA,</span>
     
      </div>
        
      </div>
      <div className="edu-career">
     
        <div className="edu-container">
          <div className="ec">| Educational Background |</div>
          <span className="ecl">2007~2010 : D. Eng., Biotechnology Cooperation Course, Graduate School, Yonsei University</span>
          <span className="ecl">* 학위 논문: Development of Portable Ultrasound Imaging System with Wireless Patient Monitor</span>
          <span className="ecl">1995 ~ 1997 : 연세대학교 대학원 의용전자공학과 공학석사</span>
          <span className="ecl"ref={sRef}>1991 ~ 1995 : 연세대학교 보건과학대학 의용전자공학과 공학사</span>
          </div>
          <img className="bar-right" src={BarImgProf} alt="" />
      </div>


      <div className="reward-career" >
      <img className="bar-left2" src={BarImgProf} alt="" />
        <div className='rec-container'>
          
          <div className="rec">| 수상 경력 |</div>
         
          <span className="recl">2021 의료기기산업특성화대학원 유공자 포상 “한국보건산업진흥원 표창장”, 보건복지부, 2021.09.14</span>
          <span className="recl">2010 대한민국기술대상 산업진흥유공분야“지식경제부장관상”, 지식경제부, 2010.12.09</span>
         
         </div>  
       </div>

      <div className="scolarship-career" >
        <div className="sc-container">
          <div className="sc">
            | 학술 경력 |
            </div>
            
            <span className="scl">{intJournal}</span>
            <span className="scl">High PRF ultrafast sliding compound doppler imaging: fully qualitative and quantitative analysis of blood flow (Physics in Medicine & Biology, Vol 63, No 4 , Feb 2018) </span>
            <span className="scl">Tooth Segmentation Using Gaussian Mixture Model and Genetic Algorithm (JOURNAL OF MEDICAL IMAGING AND HEALTH INFORMATICS, Vol 7, No 6, Oct 2017) </span>
            <span className="scl">Texture Analysis of Supraspinatus Ultrasound Image for Computer Aided Diagnostic System (Healthcare Informatics Research, Vol 22, no 4, Oct 2016)</span>
            <span className="scl">Continuous monitoring of arthritis in animal models using optical imaging modalities (JOURNAL OF BIOMEDICAL OPTICS, Vol 19, No 10, Oct 2014) </span>
            <span className="scl">Digital tomosynthesis (DTS) with a Circular X-ray tube: Its image reconstruction based on total-variation minimization and the image characteristics (JOURNAL OF THE KOREAN PHYSICAL SOCIETY, Vol 63, No 5, Sep 2013)</span>
            <span className="scl"></span>
            <span className="scl">{domJournal}</span>
            
            <span className="scl">폐 결절 검출을 위한 합성곱 신경망의 성능 개선 (의공학회지, 38권, 5호, 2017. 10) </span>
            <span className="scl">이산 웨이브렛 변환을 이용한 고각성 부정 감성의 GSR 신호 분석 (감성과학, 20권, 3호, 2017. 9) </span>
            <span className="scl">컴퓨터 보조진단을 위한 초음파 영상에서 갑상선 결절의 텍스쳐 분석 (멀티미디어학회논문지, 20권, 1호, 2017. 1) </span>
            <span className="scl">깊이 카메라를 이용한 호흡률 측정에 미치는 영향 요인 분석 (감성과학, 19권, 3호, 2016. 9) </span>
            <span className="scl">선형-비선형 특징추출에 의한 비정상 심전도 신호의 랜덤포레스트 기반 분류 (의공학회지, 37권, 2호, 2016. 4)</span>
            <span className="scl">운동 의도에 따른 뇌파-근전도 신호 간 연결성 분석 (감성과학, 19권, 1호, 2016. 3) </span>
            <span className="scl">Distance Regularized Level Set Evolution 방법을 이용한 간암 Segmentation(대한의학영상정보학회지, 21권, 2015. 8) </span>
            <span className="scl">Design of Optimized Ultrasound Clinical Work-flow; Usability Perspective (Journal of International Society for Simulation Surgery, 2권, 1호, 2015. 6) </span>
            <span className="scl">심초음파용 생체신호측정모듈의 개발 (전자공학회논문지–SC, 47권, 4호, 2010. 7) </span>
            <span className="scl">심초음파용 실시간 심전도 QRS 검출 모듈에 관한 연구 (전자공학회논문지–SC, 47권, 3호, 2010. 5) </span>
            <span className="scl">대퇴근활성화에 대한 자전거 운동 시 근전도와 슬관절 각도와의 상관관계 연구 (전자공학회논문지–SC, 46권, 4호, 2009. 7)</span>
          
            </div>
        <img className="bar-right" src={BarImgProf} alt="" />
      </div>


      
      <div className="book-career">
      <img className="bar-left3" src={BarImgProf} alt="" />
        <div className='book-container'>
        <div className="bc">| 저역서 |</div>
         
         <span className="bcl">디지털헬스케어를 위한 웨어러블기술 (2021.7)</span>
         <span className="bcl">디지털헬스케어 시스템설계학 (2021. 4) </span>
         <span className="bcl">의료영상처리 이해 및 응용 (2020. 7)  </span>
         <span className="bcl">알기쉬운 의료기기 임상총론 (2019. 12)  </span>
         <span className="bcl">의료기기 설계학 제4판 (2018. 11)  </span>
         <span className="bcl">의료기기품질경영시스템 : MDSAP: 의료기기 단일 심사 프로그램 (2018. 10)</span>
         </div>
       </div>


         
      <div className="intell-career">
        <div className="intell-container">
        <div className="ic">| 지식재산권 |</div>
         
         <span className="icl">배터리 소모 감소 기능이 구비된 산모 자궁수축도 검사장치 (2020. 12)</span>
         <span className="icl">산모 자궁수축도 검사장치 (2020. 12)</span>
         <span className="icl">모바일 기반 방광 모니터링을 위한 패치형 초음파센서의 포지셔닝 최적화 장치 및 방법 (2020. 11) </span>
         <span className="icl">모바일 기반 방광 모니터링을 위한 패치형 초음파센서의 포지셔닝 최적화 장치 및 방법 (2019. 11) </span>
         <span className="icl">방광 모니터링 헬스케어 시스템 및 방광 모니터링 방법 (2018. 12) </span>
         <span className="icl">맥파 및 심박변이도를 이용한 통증 분류 방법 (2018. 8) </span>
         <span className="icl">배뇨장애 관리 및 개선을 위한 어플리케이션 프로세스 및 UX/UI 시스템 (2017. 12) </span>
         <span className="icl">초음파 영상을 표시하는 장치 및 방법 (2017. 11) </span>
         <span className="icl">맥파 및 심박변이도를 이용한 통증 분류 방법 (2017. 10)</span>
         <span className="icl">초음파 영상 내 선택 지점의 위치를 조절하는 방법 및 그 장치 (2017. 4) </span>
         <span className="icl"ref={rRef}>하드웨어 및 그래픽 인터페이스를 이용한 사용자 입력에 기초하여 무선 초음파 영상을 제어하는 방법 및 장치 (2017. 4) </span>
         <span className="icl">하드웨어 및 그래픽 인터페이스를 이용한 사용자 입력에 기초하여 무선 초음파 영상을 제어하는 방법 및 장치 (2016. 5) </span>
         <span className="icl">초음파 영상 모드 별 그래픽 인터페이스에 기초하여 초음파 영상을 제어하는 방법 및 장치 (2016. 5) </span>
         <span className="icl">토모신세시스 시스템에서 사용되는 방사선 차폐장치 및 방사선 차폐장치를 이용한 방사선 촬영방법 (2013. 12)</span>
         </div>
         <img className="bar-right" src={BarImgProf} alt="" />
      </div>

      <div className="research-subject" >
        
      <img className="bar-left3" src={BarImgProf} alt="" />
        <div className="rs-container">
        <div className="rs">| 연구 과제 |</div>
        
        <span className="rslt">{보건복지부}</span>
        <span className="rsl">2018. 4 ~ 2021. 12 : 조산 고위험 산모 예측 알고리즘 개발 및 자궁 근전도 무선 모니터링 시스템의 임상적 유효성 검증 (공동연구)</span>
        <span className="rsl">2019. 8 ~ 2019. 12 : 혁신형의료기기 기업인증기준 및 지원방안수립연구</span>
        <span className="rsl">2019. 1 ~ 2019. 12 : 의료기기산업특성화대학원 지원사업</span>
        <span className="rslt">{식품의약품안전처}</span>
        <span className="rsl">2020. 1 ~ 2020. 6 : 첨단기술 기반 치료형기기에 대한 임상시험프로토콜가이드라인개발 (세부과제책임자)</span>
        <span className="rslt">{한국연구재단}</span>
        <span className="rsl">2017. 4 ~ 2022. 3 : 초음파기반의 패치형 방광모니터링 헬스케어 시스템 개발 (세부과제책임자)</span>
        <span className="rslt">{산업통상자원부}</span>
        <span className="rsl">2020. 9 ~ 2021. 8 : 디지털 헬스케어 확산을 위한 오픈 이노베이션 생태계 구축사업 </span>
        <span className="rsl">2014 ~ 2018 : 현장진단응급현장시장선도를 위한 ICT기반의 무선초음파솔루션 개발 (참여기관 책임자) </span>
        <span className="rsl">2015 ~ 2017 : 전후두부 정보흐름을 이용한 마취심도 및 통증수준 진단 시스템 개발 (참여기관 책임자)</span>
        <span className="rsl">2015 ~ 2016 : 급/만성 뇌질환/심혈관질환자 모니터링용 인체친화형 스마트 패치 및 재택 건강관리 서비스 솔루션 개발 (참여기관 책임자, 산업통상자원부)</span>
        <span className="rslt">{지식경제부}</span>
        <span className="rsl">2005. 12 ~ 2010. 11 : 차세대 의료용 영상진단시스템 개발 (총괄책임자)</span>
        <span className="rslt">{식품의약품안전평가원}</span>
        <span className="rsl">2019. 2 ~ 2019. 7 : 의료기기임상시험의 국제동향파악및 제도운영방안마련연구</span>
        <span className="rsl">2017. 2 ~ 2018. 11 : 첨단기술 기반 치료형기기 평가기술 개발</span>
        <span className="rslt">{범부처전주기의료기기연구개발사업단}</span>
        <span className="rsl">2020. 9 ~ 2025. 12 : 기능 융합형 초음파 영상기기(4세부) </span>
        <span className="rsl">2020. 9 ~ 2023. 12 : 신생아 집중치료에 적합한 다기능 스마트 보육기 개발(3세부)</span>
        <span className="rsl">2021. 3 ~ 2022. 2 : 의료공공복지구현 및 사회문제해결’분야 맞춤형 의료기기 평가기술 개발(4세부) </span>
        <span className="rsl">2020. 9 ~ 2024. 12 : 인공지능 기반 중증악화 예측 가능한 고성능 환자감시장치 시스템 개발(총괄)</span>
        <span className="rsl">2020. 9 ~ 2022. 12 : 고령자 만성질환, 현장형 진단 및 치료 시스템 임상시험 지원(세부) </span>
        <span className="rsl">2020. 9 ~ 2024. 12 : 급만성 폐질환 치료를 위한 생체신호 분석기반 스마트 호흡치료기 개발</span>
        <span className="rsl">2020. 9 ~ 2021. 2 : (간호대) 스마트 헬스케어 의료기기 핵심기술 개발(RFP명) </span>
        <span className="rsl">2020. 8 ~ 2021. 1 : 의료기기 평가기술 개발</span>
        <span className="rslt">{뉴풍}</span>
        <span className="rsl"> 2020. 3 ~ 2020. 8 : 하안검 치료용 정밀 초음파 수술기에 대한 사용적합성 평가</span>
        <span className="rslt">{시지바이오}</span>
        <span className="rsl">2020. 1 ~ 2020. 6 : 생체활성 소재 기반의 임상적 요구에 최적화된 기능성 환자 맞춤형 척추 유합 임플란트 및 제조 시스템 개발</span>
        <span className="rslt">{엣지케어}</span>
        <span className="rsl">2021. 12 ~ 2022. 11 : 아이콜리에 대한 RA/QA 지원 용역</span>
        <span className="rslt">{웨이센}</span>
        <span className="rsl">2020. 12 ~ 2021. 9 : 위암영상검출진단보조소프트웨어에 대한 임상시험계획서 개발</span>
        <span className="rslt">{다나}</span>
        <span className="rsl">2017. 12: 산업자문 : 보건산업진흥원 미래융합의료기기개발 연구계획서 작성 자문(컨설팅)</span>
        <span className="rslt">{서울산업진흥원}</span>
        <span className="rsl">2019. 11 ~ 2020. 10 : 초음파 영상기반 체외충격파 융합기기의 새로운 치료기능에 대한 임상적 유효성 평가 </span>
        <span className="rslt">{한국보건산업진흥원}</span>
        <span className="rsl">2021. 5 ~ 2021. 10 : 디지털 치료기기 임상설계 가이드라인 개발 연구 </span>
        <span className="rslt">{한국산업기술평가관리원}</span>
        <span className="rsl">2020. 11 ~ 2021. 1 : 병원-기업 연계 의료기기 R&D 협력 플랫폼 기획연구</span>
      </div>
      </div>

 
     
    


    </div>
  )
}
