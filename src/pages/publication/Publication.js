import React,{useRef,useState} from 'react';
import "./publication.scss";

import BarImgP from "../../components/img/design_bar.png"


export default function Publication() {
  const jourRef=useRef(null);
  const confRef=useRef(null);
  const patRef=useRef(null);
  const bookRef=useRef(null);

  const scrollHeight=162;
 
  const [select,setSelect]=useState("Journal");
  const onJourClick=()=>{
    jourRef.current?.scrollIntoView({behavior:'smooth',block:'center'})
    setSelect('Journal')
  }
  const onConfClick=()=>{
    confRef.current?.scrollIntoView({behavior:'smooth',block:'center'})
    setSelect('Conference')
  }
  const onPatClick=()=>{
    patRef.current?.scrollIntoView({behavior:'smooth',block:'center'})
  
    setSelect('Patent')
  }
  const onBookClick=()=>{
    bookRef.current?.scrollIntoView({behavior:'smooth',block:'center'})
    
    setSelect('Books')
  }

 


  return(
    <div className="publication">
        <div className="pub-left">
            <div className="slider">
            
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
                    <li className="pub-item" onClick={onJourClick} style={{color: select === 'Journal' ? 'black' : 'grey'}}>Journal</li>
                    <li className="pub-item" onClick={onConfClick} style={{color: select === 'Conference' ? 'black' : 'grey'}}>Conference</li>
                    <li className="pub-item" onClick={onPatClick} style={{color: select === 'Patent' ? 'black' : 'grey'}}>Patent</li>
                    <li className="pub-item" onClick={onBookClick} style={{color: select === 'Books' ? 'black' : 'grey'}}>Books</li>
                  </ul>
              </div>
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
            
            <span className="conl">Ko, S., Jang, W. S., Jeong, J. H., Ahn, J. W., Kim, Y. H., Kim, S., ... & Chung, S. (2021). (−)-Gallocatechin gallate from green tea rescues cognitive impairment through restoring hippocampal silent synapses in post-menopausal depression. Scientific reports, 11(1), 1-20. </span>
            <span className="conl">Kang, J., Han, K., Kim, K. S., Jang, W. S., Kim, M. J., & Yoo, Y. (2020). 3D microcalcification detection using a color Doppler twinkling artifact with optimized transmit conditions: Preliminary results. Medical physics, 47(12), 6171-6178.</span>
            <span className="conl">Song, I., Yoon, J., Kang, J., Kim, M., Jang, W. S., Shin, N. Y., & Yoo, Y. (2019). Design and implementation of a new wireless carotid neckband doppler system with wearable ultrasound sensors: preliminary results. Applied Sciences, 9(11), 2202. </span>
            <span className="conl">Jinbum Kang, Won Seuk Jang and Yangmo Yoo. High PRF ultrafast sliding compound doppler imaging: fully qualitative and quantitative analysis of blood flow (Physics in Medicine & Biology, Vol 63, No 4, 45,004~45,020, Feb 2018)  </span>
            <span className="conl">Kim, J. Y., Yoo, S. K., Jang, W. S., Park, B. E., Park, W., & Kim, K. D. (2017). Tooth segmentation using gaussian mixture model and genetic algorithm. Journal of Medical Imaging and Health Informatics, 7(6), 1271-1276. </span>
            <span className="conl">Park, B. E., Jang, W. S., & Yoo, S. K. (2016). Texture analysis of supraspinatus ultrasound image for computer aided diagnostic system. Healthcare informatics research, 22(4), 299-304. </span>
            <span className="conl">Son, T., Yoon, H. J., Lee, S., Jang, W. S., Jung, B., & Kim, W. U. (2014). Continuous monitoring of arthritis in animal models using optical imaging modalities. Journal of Biomedical Optics, 19(10), 106010.  </span>
            <span className="conl">Park, Y. O., Hong, D. K., Cho, H. S., Je, U. K., Oh, J. E., Lee, M. S., ... & Koo, Y. S. (2013). Digital tomosynthesis (DTS) with a Circular X-ray tube: Its image reconstruction based on total-variation minimization and the image characteristics. Journal of the Korean Physical Society, 63(5), 1060-1065.</span>
          
            </div>
            
            <div className="domestic-journal">
              | Domestic Journal |

            </div>

            <div className="journal-content">
            
              <span className="conl">김유림, 유우진, 박호준, & 장원석. (2019). 다목적 안과용 레이저 시스템 안전성 성능평가 및 임상적 유효성평가 가이드라인 수립을 위한 연구. </span>
              <span className="conl">김유림, 전성우, & 장원석. (2019). 내시경용 마그네틱 마킹시스템 임상시험 표준 프로토콜 가이드라인 개발 연구. FDC 법제연구, 14(1), 43-49. </span>
              <span className="conl">김한웅, 김병남, 이지은, 장원석, & 유선국. (2017). 폐 결절 검출을 위한 합성곱 신경망의 성능 개선.  </span>
              <span className="conl">임현준, 유선국, & 장원석. (2017). 이산 웨이브렛 변환을 이용한 고각성 부정 감성의 GSR 신호 분석. </span>
              <span className="conl">박병은, 장원석, & 유선국. (2017). 컴퓨터 보조진단을 위한 초음파 영상에서 갑상선 결절의 텍스쳐 분석. 멀티미디어학회논문지, 20(1), 43-50.  </span>
              <span className="conl">오경택, 신증수, 김정민, 장원석, & 유선국. (2016). 깊이 카메라를 이용한 호흡률 측정에 미치는 영향 요인 분석. 감성과학, 19(3), 81-88.  </span>
              <span className="conl">김혜진, 김병남, 장원석, & 유선국. (2016). 선형-비선형 특징추출에 의한 비정상 심전도 신호의 랜덤포레스트 기반 분류. 의공학회지, 37(2), 61-67.  </span>
              <span className="conl">김병남, 김연희, 김래현, 권규현, 장원석, & 유선국. (2016). 운동 의도에 따른 뇌파-근전도 신호 간 연결성 분석. 감성과학, 19(1), 31-38.</span>
              <span className="conl">오경택, 유선국, & 장원석. (2015). Distance Regularized Level Set Evolution 방법을이용한 간암 Segmentation. 대한의학영상정보학회지, 21, 6-8. </span>
              <span className="conl">Bag, B., Yoo, S., & Jang, W. (2015). Design of Optimized Ultrasound Clinical Work-Flow; Usability Perspective. Journal of International Society for Simulation Surgery, 2(1), 40-42. </span>
              <span className="conl">장원석, 김남현, & 전대근. (2010). 심초음파용 생체신호측정모듈의 개발. 전자공학회논문지–SC, 47(4), 21-29.  </span>
              <span className="conl">장원석, 김남현, 김응석, & 전대근. (2010). 심초음파용 실시간 심전도 QRS 검출 모듈에 관한 연구. 전자공학회논문지-SC, 47(3), 40-47.  </span>
              <span className="conl">장원석, 김성민, 강승호, & 김남현. (2009). 대퇴근활성화에 대한 자전거 운동 시 근전도와 슬관절 각도와의 상관관계 연구. 전자공학회논문지–SC, 46(4), 77-83.</span>
             
           </div>
           
            <div className="international-conference" ref={confRef}>
              | International Conference |

            </div>

             <div className="conference-content">

              <span className="conl">Jeong, J., Park, S., & Jang, W. (2022, Mar). Human Factors Engineering Methods for Risk Analysis of the Breast Imaging Diagnostic System. International Symposium on Human Factors and Ergonomics in Health Care.</span>
              <span className="conl">Choi, H., Park, S., & Jang, W. (2022, Mar). Human Factors Analysis to Design of User Interface for Multi-Purpose Neonatal Incubator. International Symposium on Human Factors and Ergonomics in Health Care.</span>
              <span className="conl">Jeong, J., Park, S., & Jang, W. (2021, Nov). Applying Human Factor Engineering Methods for Risk Analysis of the Breast Imaging Diagnostic System. International Biomedical Engineering Conference and International Conference on Biomedical and Health Informatics.</span>
              <span className="conl">Choi, H., Park, S., & Jang, W. (2021, Nov). User needs analysis for multi-purpose smart neonatal incubator, International Biomedical Engineering Conference and International Conference on Biomedical and Health Informatics. </span>
              <span className="conl">Choi, J., Park, S., & Jang, W. (2021, June). Usability Testing of Ultrasonic Surgical System for Lower Eyelid Fat Removal. In Proceedings of the International Symposium on Human Factors and Ergonomics in Health Care (Vol. 10, No. 1, pp. 251-256). Sage CA: Los Angeles, CA: SAGE Publications. </span>
              <span className="conl">Park, S., Oh, H., choi, J., & Jang, W. (2020, September). A Design of Mobile Application for Ultrasound Bladder Monitoring System Based on Usability Engineering. In Proceedings of the International Symposium on Human Factors and Ergonomics in Health Care (Vol. 9, No. 1, pp. 177-180). Sage CA: Los Angeles, CA: SAGE Publications.</span>
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
        <img className="bar-rightcd" src={BarImgP} alt="" />
      </div>

  )

}

