import React, {useRef} from 'react';
import YourimPhoto from "../../../components/img/yourim.png";
import SangeunPhoto from "../../../components/img/sangeun.png";
import HyeonkyeongPhoto from "../../../components/img/hyeonkyeong.jpg";
import JiyongPhoto from "../../../components/img/jiyong.jpg";
import ChoroPhoto from "../../../components/img/choro.jpg";
import HeeyoungPhoto from "../../../components/img/heeyoung.png";
import JiyunPhoto from "../../../components/img/jiyun.jpg";
import SeulbiPhoto from "../../../components/img/seulbi.png";
import JeonghwaPhoto from "../../../components/img/jeonghwa.png";
import KanghyeonPhoto from "../../../components/img/kanghyeon.png";
import JiminPhoto from "../../../components/img/jimin.jpg";
import SeungheePhoto from "../../../components/img/seunghee.png";
import GyeongminPhoto from "../../../components/img/gyeongmin.png";
import SehoPhoto from "../../../components/img/seho.jpg";
import YujeongPhoto from "../../../components/img/yujeong.jpg";



import "./student.scss"
export default function Professor() {

  
 
  return (   
    <div className="student" >
      <div className="stu-header" >
        <div className="stu-title">
          Students
        </div>
      </div>

      <div className="stu-profile">
        <div className="stu-left">
           <div className="stu-course">
               Ph.D course
            </div>
        
            <div className="stu-photo"> 
              <img className="stuImg" src={YourimPhoto} alt=""/> 
            </div>
        </div>
        <div className="stu-right">
          <div className="stu-name">
              김유림
              <span className="stu-pos"> 연구원 </span>
              <span className="stu-eng"> Yourim Kim</span>
          </div>

          <div className="stu-field"> 
            <span className="stu-edu">| Education |</span>
            <span className="stu-edul1">M.S in Medical Device Engineering & Management (2020) </span>
            <span className="stu-edul2">B.S in Biomedical Engineering, Konkuk University (2017)</span>
            <span className="stu-ri">| Research Interest |</span>
            <span className="stu-ril">Medical Device Clinical Study Design, Clinical Effectiveness Evaluation </span>
            <span className="stu-contact">| Contact |</span>
            <span className="stu-contactl">yxxrm_k@naver.com / yxxrmk@yonsei.ac.kr</span>
         
          </div>
        </div>
        
      </div>
      

      <div className="stu-profile">
        <div className="stu-left">
           <div className="stu-course">
               MS / Ph.D course
            </div>
        
            <div className="stu-photo"> 
              <img className="stuImg" src={SangeunPhoto} alt=""/> 
            </div>
        </div>
        <div className="stu-right">
          <div className="stu-name">
              박상은  
              <span className="stu-pos"> 연구원 </span>
              <span className="stu-eng"> Sangeun Park</span>
          </div>

          <div className="stu-field"> 
            <span className="stu-edu">| Education |</span>
            <span className="stu-edul1">B.S in Biomedical Engineering, Yonsei University (2018)  </span>
            <span className="stu-ri">| Research Interest |</span>
            <span className="stu-ril">UX/UI Design, Android Programming, Usability/Human Factors Engineering </span>
            <span className="stu-contact">| Contact |</span>
            <span className="stu-contactl">pse7036@naver.com / sang-eun.park@yonsei.ac.kr</span>
         
          </div>
        </div>
        
      </div>

      <div className="stu-profile">
        <div className="stu-left">
           <div className="stu-course">
               MS / Ph.D course
            </div>
        
            <div className="stu-photo"> 
              <img className="stuImg" src={HyeonkyeongPhoto} alt=""/> 
            </div>
        </div>
        <div className="stu-right">
          <div className="stu-name">
              최현경  
              <span className="stu-pos"> 연구원 </span>
              <span className="stu-eng"> Hyeonkyeong Choi</span>
          </div>

          <div className="stu-field"> 
            <span className="stu-edu">| Education |</span>
            <span className="stu-edul1">B.S in Healthcare Industry, Cha University (2021)  </span>
            <span className="stu-ri">| Research Interest |</span>
            <span className="stu-ril">UX/UI Design, Usability/Human Factors Engineering</span>
            <span className="stu-contact">| Contact |</span>
            <span className="stu-contactl">hyeonkyeong97@daum.net / hyeonk@yonsei.ac.kr</span>
         
          </div>
        </div>
        
      </div>

      <div className="stu-profile">
        <div className="stu-left">
           <div className="stu-course">
               MS / Ph.D course
            </div>
        
            <div className="stu-photo"> 
              <img className="stuImg" src={JiyongPhoto} alt=""/> 
            </div>
        </div>
        <div className="stu-right">
          <div className="stu-name">
              정지용      
              <span className="stu-pos"> 연구원 </span>
              <span className="stu-eng"> Jiyong Chung</span>
          </div>

          <div className="stu-field"> 
            <span className="stu-edu">| Education |</span>
            <span className="stu-edul1">B.S in Computer Engineering, Tech University of Korea (2022) </span>
            <span className="stu-ri">| Research Interest |</span>
            <span className="stu-ril">Bio-signal processing, AI & Deep learning</span>
            <span className="stu-contact">| Contact |</span>
            <span className="stu-contactl">cowjy0427@yonsei.ac.kr</span>
         
          </div>
        </div>
        
      </div>


      <div className="stu-profile">
        <div className="stu-left">
           <div className="stu-course">
               MS course
            </div>
        
            <div className="stu-photo"> 
              <img className="stuImg" src={ChoroPhoto} alt=""/> 
            </div>
        </div>
        <div className="stu-right">
          <div className="stu-name">
              최초로      
              <span className="stu-pos"> 연구원 </span>
              <span className="stu-eng"> Choro Choi</span>
          </div>

          <div className="stu-field"> 
            <span className="stu-edu">| Education |</span>
            <span className="stu-edul1">B.S in Biomedical Engineering, Yonsei University (2020) </span>
            <span className="stu-ri">| Research Interest |</span>
            <span className="stu-ril">Signal & Image processing, AI & Deep learning, Programming, UI design</span>
            <span className="stu-contact">| Contact |</span>
            <span className="stu-contactl">hisstoryxx@gmail.com</span>
         
          </div>
        </div>
        
      </div>
      
      <div className="stu-profile">
        <div className="stu-left">
           <div className="stu-course">
               MS course
            </div>
        
            <div className="stu-photo"> 
              <img className="stuImg" src={HeeyoungPhoto} alt=""/> 
            </div>
        </div>
        <div className="stu-right">
          <div className="stu-name">
              최희영      
              <span className="stu-pos"> 연구원 </span>
              <span className="stu-eng"> Heeyoung Choi</span>
          </div>

          <div className="stu-field"> 
            <span className="stu-edu">| Education |</span>
            <span className="stu-edul1">B.S in Biomedical Engineering, Yonsei University (2021) </span>
            <span className="stu-ri">| Research Interest |</span>
            <span className="stu-ril">Medical Device Clinical Study Design, Clinical Effectiveness Evaluation</span>
            <span className="stu-contact">| Contact |</span>
            <span className="stu-contactl">chy980423@naver.com</span>
         
          </div>
        </div>
        
      </div>

      <div className="stu-profile">
        <div className="stu-left">
           <div className="stu-course">
               MS course
            </div>
        
            <div className="stu-photo"> 
              <img className="stuImg" src={JiyunPhoto} alt=""/> 
            </div>
        </div>
        <div className="stu-right">
          <div className="stu-name">
              정지윤      
              <span className="stu-pos"> 연구원 </span>
              <span className="stu-eng"> Jiyun Jeong</span>
          </div>

          <div className="stu-field"> 
            <span className="stu-edu">| Education |</span>
            <span className="stu-edul1">B.S in Biomedical Engineering, Yonsei University (2014) </span>
            <span className="stu-ri">| Research Interest |</span>
            <span className="stu-ril">Usability/Human Factors Engineering</span>
            <span className="stu-contact">| Contact |</span>
            <span className="stu-contactl">ravissante25@gmail.com / jiyunj@yonsei.ac.kr</span>
         
          </div>
        </div>
        
      </div>
     


      <div className="stu-profile">
        <div className="stu-left">
           <div className="stu-course">
               MS course
            </div>
        
            <div className="stu-photo"> 
              <img className="stuImg" src={SeulbiPhoto} alt=""/> 
            </div>
        </div>
        <div className="stu-right">
          <div className="stu-name">
              이슬비      
              <span className="stu-pos"> 연구원 </span>
              <span className="stu-eng"> Seulbi Lee</span>
          </div>

          <div className="stu-field"> 
            <span className="stu-edu">| Education |</span>
            <span className="stu-edul1">B.S in Biomedical Engineering, Yonsei University (2021) </span>
            <span className="stu-ri">| Research Interest |</span>
            <span className="stu-ril">Medical Device Clinical Study Design, Clinical Effectiveness Evaluation</span>
            <span className="stu-contact">| Contact |</span>
            <span className="stu-contactl">bee5747@naver.com / bee5747@yonsei.ac.kr</span>
         
          </div>
        </div>
        
      </div>


      <div className="stu-profile">
        <div className="stu-left">
           <div className="stu-course">
               MS course
            </div>
        
            <div className="stu-photo"> 
              <img className="stuImg" src={JeonghwaPhoto} alt=""/> 
            </div>
        </div>
        <div className="stu-right">
          <div className="stu-name">
              임정화      
              <span className="stu-pos"> 연구원 </span>
              <span className="stu-eng"> Jeonghwa Lim</span>
          </div>

          <div className="stu-field"> 
            <span className="stu-edu">| Education |</span>
            <span className="stu-edul1">B.S in Biomedical Engineering, Yonsei University (2021) </span>
            <span className="stu-ri">| Research Interest |</span>
            <span className="stu-ril">Bio-signal processing, AI & Deep learning</span>
            <span className="stu-contact">| Contact |</span>
            <span className="stu-contactl">lim9234@hanmail.net</span>
         
          </div>
        </div>
        
      </div>
      

      <div className="stu-profile">
        <div className="stu-left">
           <div className="stu-course">
               MS course
            </div>
        
            <div className="stu-photo"> 
           
            </div>
        </div>
        <div className="stu-right">
          <div className="stu-name">
              임창현      
              <span className="stu-pos"> 연구원 </span>
              <span className="stu-eng"> Changhyun Lim</span>
          </div>

          <div className="stu-field"> 
            <span className="stu-edu">| Education |</span>
            <span className="stu-edul1">B.S in Healthcare Industry, Cha University (2021)  </span>
            <span className="stu-ri">| Research Interest |</span>
            <span className="stu-ril">Medical Device Clinical Study Design, Clinical Effectiveness Evaluation, Medical Regulatory Affairs </span>
            <span className="stu-contact">| Contact |</span>
            <span className="stu-contactl">julius1231@naver.com</span>
         
          </div>
        </div>
        
      </div>


      <div className="stu-profile">
        <div className="stu-left">
           <div className="stu-course">
               MS course
            </div>
        
            <div className="stu-photo"> 
              <img className="stuImg" src={KanghyeonPhoto} alt=""/> 
            </div>
        </div>
        <div className="stu-right">
          <div className="stu-name">
              유강현     
              <span className="stu-pos"> 연구원 </span>
              <span className="stu-eng"> Kanghyeon You</span>
          </div>

          <div className="stu-field"> 
            <span className="stu-edu">| Education |</span>
            <span className="stu-edul1">B.S in Healthcare Industry, Cha University (2021) </span>
            <span className="stu-ri">| Research Interest |</span>
            <span className="stu-ril">Medical Device Industry Policy, Medical Regulatory Affairs</span>
            <span className="stu-contact">| Contact |</span>
            <span className="stu-contactl">hap2boy@naver.com / hap2boy@yonsei.ac.kr</span>
         
          </div>
        </div>
        
      </div>

      <div className="stu-profile">
        <div className="stu-left">
           <div className="stu-course">
               MS course
            </div>
        
            <div className="stu-photo"> 
              <img className="stuImg" src={JiminPhoto} alt=""/> 
            </div>
        </div>
        <div className="stu-right">
          <div className="stu-name">
              손지민     
              <span className="stu-pos"> 연구원 </span>
              <span className="stu-eng"> Jimin Son</span>
          </div>

          <div className="stu-field"> 
            <span className="stu-edu">| Education |</span>
            <span className="stu-edul1">B.S in Biomedical Engineering, Dongguk University (2021) </span>
            <span className="stu-ri">| Research Interest |</span>
            <span className="stu-ril">Medical Device Clinical Study Design, Medical Regulatory Affairs</span>
            <span className="stu-contact">| Contact |</span>
            <span className="stu-contactl">wlals2qj@naver.com / jmson1707@yonsei.ac.kr</span>
         
          </div>
        </div>
        
      </div>

      <div className="stu-profile">
        <div className="stu-left">
           <div className="stu-course">
               MS course
            </div>
        
            <div className="stu-photo"> 
              <img className="stuImg" src={SeungheePhoto} alt=""/> 
            </div>
        </div>
        <div className="stu-right">
          <div className="stu-name">
              김승희     
              <span className="stu-pos"> 연구원 </span>
              <span className="stu-eng"> Seunghee Kim</span>
          </div>

          <div className="stu-field"> 
            <span className="stu-edu">| Education |</span>
            <span className="stu-edul1">B.S in Healthcare Industry, Cha University (2021) </span>
            <span className="stu-ri">| Research Interest |</span>
            <span className="stu-ril">Usability/Human Factors Engineering, Medical Device Industry Policy</span>
            <span className="stu-contact">| Contact |</span>
            <span className="stu-contactl">sshee0710@naver.com</span>
         
          </div>
        </div>
        
      </div>
     

      <div className="stu-profile">
        <div className="stu-left">
           <div className="stu-course">
               MS course
            </div>
        
            <div className="stu-photo"> 
              <img className="stuImg" src={GyeongminPhoto} alt=""/> 
            </div>
        </div>
        <div className="stu-right">
          <div className="stu-name">
              권경민     
              <span className="stu-pos"> 연구원 </span>
              <span className="stu-eng"> Gyeongmin Kwon</span>
          </div>

          <div className="stu-field"> 
            <span className="stu-edu">| Education |</span>
            <span className="stu-edul1">Korean language and literature, Yonsei University(2020) </span>
            <span className="stu-ri">| Research Interest |</span>
            <span className="stu-ril">Usability/Human Factors Engineering, Medical Regulatory Affairs</span>
            <span className="stu-contact">| Contact |</span>
            <span className="stu-contactl">kdskkm12@naver.com</span>
         
          </div>
        </div>
        
      </div>

      <div className="stu-profile">
        <div className="stu-left">
           <div className="stu-course">
               MS course
            </div>
        
            <div className="stu-photo"> 
              <img className="stuImg" src={SehoPhoto} alt=""/> 
            </div>
        </div>
        <div className="stu-right">
          <div className="stu-name">
              김세호     
              <span className="stu-pos"> 연구원 </span>
              <span className="stu-eng"> Seho Kim</span>
          </div>

          <div className="stu-field"> 
            <span className="stu-edu">| Education |</span>
            <span className="stu-edul1">Life science, Dongguk University(2022) </span>
            <span className="stu-ri">| Research Interest |</span>
            <span className="stu-ril">Medical Device Clinical Study Design, Clinical Effectiveness Evaluation </span>
            <span className="stu-contact">| Contact |</span>
            <span className="stu-contactl">shkim2022@yonsei.ac.kr</span>
         
          </div>
        </div>
        
      </div>

      <div className="stu-profile">
        <div className="stu-left">
           <div className="stu-course">
               MS course
            </div>
        
            <div className="stu-photo"> 
              <img className="stuImg" src={YujeongPhoto} alt=""/> 
            </div>
        </div>
        <div className="stu-right">
          <div className="stu-name">
              마유정     
              <span className="stu-pos"> 연구원 </span>
              <span className="stu-eng"> Yujeong Ma</span>
          </div>

          <div className="stu-field"> 
            <span className="stu-edu">| Education |</span>
            <span className="stu-edul1">Bachelor of Science in Chemistry, Duksung Women's University(2022) </span>
            <span className="stu-ri">| Research Interest |</span>
            <span className="stu-ril">Medical Device Clinical Study Design, Clinical Effectiveness Evaluation</span>
            <span className="stu-contact">| Contact |</span>
            <span className="stu-contactl">lemontree1235@naver.com</span>
         
          </div>
        </div>
        
      </div>
      
      <div className="stu-profile">
     
      </div>
    </div>
  )
}
