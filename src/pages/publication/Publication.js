/*import React, {useEffect,useState} from 'react'
import "./publication.scss"
import PublicationSide from "./publicationSide/PublicationSide"
import Journal from './journal/Journal';
import Conference from './conference/Conference';
import Patent from './patent/Patent';*/

import React,{useRef} from 'react';
import "./publication.scss";



export default function Publication() {
  const jourRef=useRef(null);
  const confRef=useRef(null);
  const patRef=useRef(null);
  const bookRef=useRef(null);

  const onJourClick=()=>{
    jourRef.current?.scrollIntoView({behavior:'smooth',block:'center'})
  }
  const onConfClick=()=>{
    confRef.current?.scrollIntoView({behavior:'smooth',block:'center'})
  }
  const onPatClick=()=>{
    patRef.current?.scrollIntoView({behavior:'smooth',block:'center'})
  }
  const onBookClick=()=>{
    bookRef.current?.scrollIntoView({behavior:'smooth',block:'center'})
  }



  return(
    <div className="publication">
        <div className="pub-left">
          
              <div className="pub-menuTitle">
                Publication
                <div className="title_border">
                  <div className="title_left">
                    
                  </div>
                  <div className="title_right">
                    
                  </div>
                 </div>  
              </div>
              <div className="pubContent">
                  <ul className="pub-list">
                    <li className="pub-item" onClick={onJourClick} >Journal</li>
                    <li className="pub-item" onClick={onConfClick} >Conference</li>
                    <li className="pub-item" onClick={onPatClick} >Patent</li>
                    <li className="pub-item" onClick={onBookClick} >Books</li>
                </ul>
              </div>
           
            
        </div>

        <div className="pub-right">
            <div className="pub-header" >
              <div className="pub-title">
                Publication
              </div>
            </div>
            
            <div className="international-journal" ref={jourRef}>
              | International Journal |
            </div>

            <div className="journal-content">

            <span className="conl">Sukjin Ko, Won Seuk Jang, Ji-Hyun Jeong, Ji Woong Ahn, Young-Hwan Kim, Sohyun Kim, Hyeon Kyeong Chae & Seungsoo Chung. (-)-Gallocatechin gallate from green tea rescues cognitive impairment through restoring hippocampal silent synapses in post-menopausal depression (SCIENTIFIC REPORTS, Vol 11, No 1, 910~, Jan 2021)</span>
            <span className="conl">Jinbum Kang,Kanghee Han,Kang-Sik Kim,Won Seuk Jang,Min Jung Kim. 3D Microcalcification Detection Using a Color Doppler Twinkling Artifact with Optimized Transmit Conditions: Preliminary Results (MEDICAL PHYSICS, Vol 47, No 12, 6171~6178, Dec 2020)</span>
            <span className="conl">Ilseob Song ,Jongmin Yoon ,Jinbum Kang ,Min Kim ,Won Seuk Jang ,Na-Young Shin andYangmo Yoo,*. Design and Implementation of a New Wireless Carotid Neckband Doppler System with Wearable Ultrasound Sensors: Preliminary Results (APPLIED SCIENCES-BASEL, Vol 9, No 11, e2202~, Jun 2019)</span>
            <span className="conl">Jinbum Kang, Won Seuk Jang and Yangmo Yoo. High PRF ultrafast sliding compound doppler imaging: fully qualitative and quantitative analysis of blood flow (Physics in Medicine & Biology, Vol 63, No 4, 45,004~45,020, Feb 2018) </span>
            <span className="conl">Kim, Joo Young; Yoo, Sun K.; Jang, W. S.; Park, Byung Eun; Park, Wonse; Kim, Kee Deog. Tooth Segmentation Using Gaussian Mixture Model and Genetic Algorithm (JOURNAL OF MEDICAL IMAGING AND HEALTH INFORMATICS, Vol 7, No 6, 1,271~1,276, Oct 2017)</span>
            <span className="conl">Byung Eun Park, BS, Won Seuk Jang, PhD, Sun Kook Yoo, PhD. Texture Analysis of Supraspinatus Ultrasound Image for Computer Aided Diagnostic System (Healthcare Informatics Research, Vol 22, no 4, 299~304, Oct 2016) </span>
            <span className="conl"> Taeyoon Son, Hyung-Ju Yoon, Saseong Lee, Won Seuk Jang, Byungjo Jung, Wan-Uk Kim. Continuous monitoring of arthritis in animal models using optical imaging modalities (JOURNAL OF BIOMEDICAL OPTICS, Vol 19, No 10, Oct 2014) </span>
            <span className="conl">Y. O. Park, D. K. Hong, H. S. Cho, U. K. Je, J. E. Oh, M. S. Lee, H. J. Kim, S. H. Lee, W. S. Jang, H. M. Cho, S. I. Choi & Y. S. Koo . Digital tomosynthesis (DTS) with a Circular X-ray tube: Its image reconstruction based on total-variation minimization and the image characteristics (JOURNAL OF THE KOREAN PHYSICAL SOCIETY, Vol 63, No 5, 1060~1065, Sep 2013)</span>
            </div>

            <div className="domestic-journal">
              | Domestic Journal |

            </div>

            <div className="journal-content">
            
              <span className="conl">김유림; 유우진; 박호준; 장원석. 다목적 안과용 레이저 시스템 안전성 성능평가 및 임상적 유효성평가 가이드라인 수립을 위한 연구 (의공학회지, 40권, 6호, 250~259, 2019. 12) </span>
              <span className="conl">김유림; 전성우; 장원석. 내시경용 마그네틱 마킹시스템 임상시험 표준 프로토콜 가이드라인 개발 연구 (FDC 법제연구, 14권, 1호, 43~49, 2019. 6) </span>
              <span className="conl">김한웅; 김병남; 이지은; 장원석; 유선국 . 폐 결절 검출을 위한 합성곱 신경망의 성능 개선 (의공학회지, 38권, 5호, 237~241, 2017. 10) </span>
              <span className="conl">임현준 ; 유선 ; 장원석. 이산 웨이브렛 변환을 이용한 고각성 부정 감성의 GSR 신호 분석 ( 감성과학, 20권, 3호, 13~22, 2017.9)</span>
              <span className="conl">박병은 ， 장원석， 유선국. 컴퓨터 보조진단을 위한 초음파 영상에서갑상선 결절의 텍스쳐 분석 (멀티미디어학회논문지, 20권, 1호, 43~50, 2017. 1) </span>
              <span className="conl">오경택; 신증수; 김정민 ; 장원석; 유선국. 깊이 카메라를 이용한 호흡률 측정에 미치는 영향 요인 분석 (감성과학, 19권, 3호, 81~88, 2016. 9) </span>
              <span className="conl">김혜진 ; 김병남 ; 장원석 ; 유선국. 선형-비선형 특징추출에 의한 비정상 심전도 신호의 랜덤포레스트 기반 분류 (의공학회지, 37권, 2호, 61~67, 2016. 4) </span>
              <span className="conl">김병남; 김연희; 김래현; 권규현; 장원석 ; 유선국. 운동 의도에 따른 뇌파-근전도 신호 간 연결성 분석 (감성과학, 19권, 1호, 31~38, 2016. 3) </span>
              <span className="conl">오경택; 유선국; 장원석. Distance Regularized Level Set Evolution 방법을 이용한 간암 Segmentation (대한의학영상정보학회지, 21권, 6~8, 2015. 8) </span>
              <span className="conl">Bag, ByungEun.Yoo, SunKook , Jang, WonSeuk. Design of Optimized Ultrasound Clinical Work-flow; Usability Perspective (Journal of International Society for Simulation Surgery, 2권, 1호, 40~42, 2015. 6) </span>
              <span className="conl">장원석 ; 김남현; 전대근 . 심초음파용 생체신호측정모듈의 개발 (전자공학회논문지–SC, 47권, 4호, 21~29, 2010. 7) </span>
              <span className="conl">장원석 ;김남현;김응석;전대근. 심초음파용 실시간 심전도 QRS 검출 모듈에 관한 연구 (전자공학회논문지–SC, 47권, 3호, 40~47, 2010. 5) </span>
              <span className="conl">장원석 ; 김성민 ; 강승호 ; 김남현 . 대퇴근활성화에 대한 자전거 운동 시 근전도와 슬관절 각도와의 상관관계 연구 (전자공학회논문지–SC, 46권, 4호, 77~83, 2009. 7)</span>
             
           </div>
           
            <div className="international-conference" ref={confRef}>
              | International Conference |

            </div>

             <div className="conference-content">

              <span className="conl">Jeong, J.Y, Park, S.E & Jang, W.S. "Human Factors Engineering Methods for Risk Analysis of the Breast Imaging Diagnostic System, International Symposium on Human Factors and Ergonomics in Health Care,2022 </span>
              <span className="conl">Choi, H.K, Park, S.E & Jang, W.S. "Human Factors Analysis to Design of User Interface for Multi-Purpose Neonatal Incubator", International Symposium on Human Factors and Ergonomics in Health Care,2022</span>
              <span className="conl">Jeong, J.Y, Park, S.E & Jang, W.S. "Applying Human Factor Engineering Methods for Risk Analysis of the Breast Imaging Diagnostic System", International Biomedical Engineering Conference and International Conference on Biomedical and Health Informatics, 2021</span>
              <span className="conl">Choi, H.K, Park, S.E & Jang, W.S. "User needs analysis for multi-purpose smart neonatal incubator", International Biomedical Engineering Conference and International Conference on Biomedical and Health Informatics, 2021</span>
              <span className="conl">Choi, J.W., Park, S.e., & Jang, W.S. "Usability Testing of Ultrasonic Surgical System for Lower Eyelid Fat Removal." Proceedings of the International Symposium on Human Factors and Ergonomics in Health Care. 2021.</span>
              <span className="conl">Park, S.E., Oh, H.K., Choi, J.W., & Jang, W.S. "A Design of Mobile Application for Ultrasound Bladder Monitoring System Based on Usability Engineering." Proceedings of the International Symposium on Human Factors and Ergonomics in Health Care. Vol. 9. No. 1., 2020.</span>
            </div>
          

            <div className="domestic-conference">
              | Domestic Conference |
            </div>
            <div className="conference-content">

              <span className="conl">최초로, 장원석 . 조산 예측을 위한 신호 전처리 및 CNN-LSTM 모델 설계,대한전자공학회, 2021</span>
              <span className="conl">최초로, 정윤지, 김영한, 최정욱, 박상은, 김유림, 장원석.K-평균 알고리즘을 이용한 자궁수축 신호 분석, 대한전자공학회 하계학술대회, 2020, GEP-672 </span>
              <span className="conl">최초로, 장원석, 정윤지, 김영한 . 조산 예측을 위한 비지도학습을 이용한 비수축 신호분석 매개변수 추출, 대한주산의학회 추계학술대회, 2020, 20-3312 </span>
              <span className="conl">박상은, 오현경, 임인식, 장원석. 초음파 방광모니터링 시스템의 모바일 어플리케이션 설계, 대한생체의용공학회 춘계학술대회, 2019, 2-22 </span>
              <span className="conl">최초로, 정윤지, 김영한, 장원석. 자궁 근전도 주파수분석 기반의 고위험 자궁 수축 검출 패턴분류 신경망 알고리즘 시뮬레이션 및 분석, 대한생체의용공학회 추계학술대회, 2019, PS2-01 </span>
              <span className="conl">장익제, 최혜원, 강동주, 최초로, 장원석, 정윤지, 김영한. 무선 자궁 근전도기반의 산모 모니터링 시스템 개발 및 자궁수축 신호 분석, 대한주산의학회 추계학술대회, 2019 - 135</span>
            </div>
            

            <div className="patent" ref={patRef}>
              | Patent |
            </div>

            <div className="patent-content">
                <span className="conl">김영한,장원석, 김영환, "배터리 소모 감소 기능이 구비된 산모 자궁수축도 검사장치", 10-2020-0187801 (2020. 12. 30) </span>
                <span className="conl">김영한,장원석, 김영환, "산모 자궁수축도 검사장치", 10-2020-0187800 (2020. 12. 30) </span>
                <span className="conl">장원석,박상은,오현경, "모바일 기반 방광 모니터링를 위한 패치형 초음파센서의 포지셔닝 최적화 장치 및 방법", PCT/KR2020/016186 (2020. 11. 17) </span>
                <span className="conl">장원석,박상은,오현경, "모바일 기반 방광 모니터링를 위한 패치형 초음파센서의 포지셔닝 최적화 장치 및 방법", 10-2019-0148244 (2019. 11. 19) </span>
                <span className="conl">장원석,박상은,오현경, "방광 모니터링 헬스케어 시스템 및 방광 모니터링 방법", 10-2018-0173498 (2018. 12. 31)</span>
                <span className="conl">장원석,유선국,김병남, "맥파 및 심박변이도를 이용한 통증 분류 방법", 10-2018-0100372 (2018. 8. 27) </span>
                <span className="conl">장원석,유선국,오경택,김병남,김한웅, "배뇨장애 관리 및 개선을 위한 어플리케이션 프로세스 및 UX/UI 시스템", 10-2017-0184169 (2017. 12. 29)</span>
                <span className="conl">장원석,유선국,오경택, "초음파 영상을 표시하는 장치 및 방법", 10-2017-0163456 (2017. 11. 30)</span>
                <span className="conl">장원석,유선국,김병남, "맥파 및 심박변이도를 이용한 통증 분류 방법", 10-2017-0143053 (2017. 10. 31) </span>
                <span className="conl">장원석,유선국,권준환,김한웅, "초음파 영상 내 선택 지점의 위치를 조절하는 방법 및 그 장치", 10-2017-0055510 (2017. 4. 28) </span>
                <span className="conl">장원석,유선국,오경택, "하드웨어 및 그래픽 인터페이스를 이용한 사용자 입력에 기초하여 무선 초음파 영상을 제어하는 방법 및 장치", PCT/KR2017/004173 (2017. 4. 19)</span>
                <span className="conl">장원석,유선국,오경택, "하드웨어 및 그래픽 인터페이스를 이용한 사용자 입력에 기초하여 무선 초음파 영상을 제어하는 방법 및 장치", 10-2016-0066725 (2016. 5. 30) </span>
                <span className="conl">장원석,유선국,오경택, "초음파 영상 모드 별 그래픽 인터페이스에 기초하여 초음파 영상을 제어하는 방법 및 장치", 10-2016-0066737 (2016. 5. 30)</span>
                <span className="conl">김희중,장원석,이동훈,김도현,서경은,김대홍,이영진,최성훈,이행화, "토모신세시스 시스템에서 사용되는 방사선 차폐장치 및 방사선 차폐장치를 이용한 방사선 촬영방법", 10-2013-0169303 (2013. 12. 31)</span>

            </div>

            <div className="book" ref={bookRef}>
              | Book |
            </div>

            <div className="book-content">
              <span className="conl">구성욱, 장원석, 김규범, 김규석, "디지털헬스케어를 위한 웨어러블기술" (2021.7) </span>
              <span className="conl">김규범, 장원석 "디지털헬스케어 시스템설계학" (2021. 4)</span>
              <span className="conl">이호, 장원석, "의료영상처리 이해 및 응용" (2020. 7) </span>
              <span className="conl">연세대학교의과대학 구성욱, 구교철, 권병주, 김성준, 김성환,김지언, 노미령, 박준성, 박중현, 윤영훈, 윤인식, 이병권, 이승규, 이익재, 임재열, 장원석, 정희교, 조한별, 허종기 , "알기쉬운 의료기기 임상총론" (2019. 12) </span>
              <span className="conl">구성욱, 장원석, "의료기기 설계학 제4판" (2018. 11) </span>
              <span className="conl">구성욱, 장원석, "의료기기품질경영시스템" : MDSAP: 의료기기 단일 심사 프로그램 (2018. 10)</span>
              
            </div>
        </div>
        
      </div>

  )

}

