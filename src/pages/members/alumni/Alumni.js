import React, {useRef} from 'react';
import MisoPhoto from "../../../components/img/miso.png";
import InsikPhoto from "../../../components/img/insik.png";
import SihyunPhoto from "../../../components/img/sihyun.png";
import HanjiPhoto from "../../../components/img/hanji.png";
import JeongukPhoto from "../../../components/img/jeonguk.jpg";
import MiwonPhoto from "../../../components/img/miwon.jpg";
import EunseonPhoto from "../../../components/img/eunseon.jpg";
import YoungboPhoto from "../../../components/img/youngbo.jpg";
import BarImgAlu from "../../../components/img/design_bar.png";
import "./alumni.scss";


export default function Alumni() {

 
  return (   
  <div className="alumni">

      <div className="alu-header" >
        <div className="alu-title">
          Alumni
        </div>
      </div>
    <div className="alu-profile">
        <div className="alu-left">
          <div className="alu-course">
              MS
            </div>
        
            <div className="alu-photo"> 
              <img className="aluImg" src={MisoPhoto} alt=""/> 
            </div>
        </div>
        <div className="alu-right">
          <div className="alu-name">
          Miso Choi     
              <span className="alu-pos"> Researcher </span>
              
          </div>

          <div className="alu-field"> 
            <span className="alu-edu">| Education |</span>
            <span className="alu-edul1">M.S in Medical Device Engineering & Management (2020) </span>
            <span className="alu-aff">| Affiliation |</span>
            <span className="alu-affl"></span>
            <span className="alu-dis">| Dissertation |</span>
            <span className="alu-disl">Strategies for Korean Medical Devices to enter the Chinese market through the Analysis of Chinese Devices System</span>
            <span className="alu-contact">| Contact |</span>
            <span className="alu-contactl">msc17@yonsei.ac.kr</span>
        
          </div>
        </div>
        <img className="bar-rights" src={BarImgAlu} alt="" />
      </div>

      <div className="alu-profile">
      <img className="bar-left" src={BarImgAlu} alt="" />
        <div className="alu-left">
          <div className="alu-course">
              MS
            </div>
        
            <div className="alu-photo"> 
              <img className="aluImg" src={InsikPhoto} alt=""/> 
            </div>
        </div>
        <div className="alu-right">
          <div className="alu-name">
          Insik Im
              <span className="alu-pos"> Researcher </span>
            
          </div>

          <div className="alu-field"> 
            <span className="alu-edu">| Education |</span>
            <span className="alu-edul1">M.S in Medical Device Engineering & Management (2021) </span>
            <span className="alu-aff">| Affiliation |</span>
            <span className="alu-affl">Medrtonic</span>
            <span className="alu-dis">| Dissertation |</span>
            <span className="alu-disl">A Study on the Diagnosis Korea Medical Device Industry through Management Performance and Enterprise Value </span>
            <span className="alu-contact">| Contact |</span>
            <span className="alu-contactl">insik7410@gmail.com</span>
        
          </div>
        </div>
        
      </div>

      <div className="alu-profile">
        <div className="alu-left">
          <div className="alu-course">
              MS
            </div>
        
            <div className="alu-photo"> 
              <img className="aluImg" src={SihyunPhoto} alt=""/> 
            </div>
        </div>
        <div className="alu-right">
          <div className="alu-name">
          Sihyun Han     
              <span className="alu-pos"> Researcher </span>
             
          </div>

          <div className="alu-field"> 
            <span className="alu-edu">| Education |</span>
            <span className="alu-edul1">M.S in Medical Device Engineering & Management (2021)  </span>
            <span className="alu-aff">| Affiliation |</span>
            <span className="alu-affl">Synex</span>
            <span className="alu-dis">| Dissertation |</span>
            <span className="alu-disl">A Study on the Application of Digital Clinical Trial System to Medical Device  </span>
            <span className="alu-contact">| Contact |</span>
            <span className="alu-contactl">2007andy@naver.com</span>
        
          </div>
        </div>
        <img className="bar-rights" src={BarImgAlu} alt="" />
      </div>


      <div className="alu-profile">
      <img className="bar-left" src={BarImgAlu} alt="" />
        <div className="alu-left">
          <div className="alu-course">
              MS
            </div>
        
            <div className="alu-photo"> 
              <img className="aluImg" src={HanjiPhoto} alt=""/> 
            </div>
        </div>
        <div className="alu-right">
          <div className="alu-name">
          Hanji Lee      
              <span className="alu-pos"> Researcher </span>
              <span className="alu-eng"> </span>
          </div>

          <div className="alu-field"> 
            <span className="alu-edu">| Education |</span>
            <span className="alu-edul1">M.S in Medical Device Engineering & Management (2022)  </span>
            <span className="alu-aff">| Affiliation |</span>
            <span className="alu-affl">Abbott</span>
            <span className="alu-dis">| Dissertation |</span>
            <span className="alu-disl">Improvement of domestic regulation based on analysis of global regulations for digital therapeutics   </span>
            <span className="alu-contact">| Contact |</span>
            <span className="alu-contactl">hangilee00@gmail.com</span>
        
          </div>
        </div>
        
      </div>


      <div className="alu-profile">
        
        <div className="alu-left">
          <div className="alu-course">
              MS
            </div>
        
            <div className="alu-photo"> 
              <img className="aluImg" src={JeongukPhoto} alt=""/> 
            </div>
        </div>
        <div className="alu-right">
          <div className="alu-name">
          Jeonguk Choi     
              <span className="alu-pos">Researcher </span>
            
          </div>

          <div className="alu-field"> 
            <span className="alu-edu">| Education |</span>
            <span className="alu-edul1">M.S in Medical Device Engineering & Management (2022)   </span>
            <span className="alu-aff">| Affiliation |</span>
            <span className="alu-affl">VUNO </span>
            <span className="alu-dis">| Dissertation |</span>
            <span className="alu-disl">User Interface Design for Ventilator Central Monitoring System Applying Human Factors Engineering   </span>
            <span className="alu-contact">| Contact |</span>
            <span className="alu-contactl">hrju5110@naver.com</span>
        
          </div>
        </div>
        <img className="bar-rights" src={BarImgAlu} alt="" />
      </div>


      <div className="alu-profile">
      <img className="bar-left" src={BarImgAlu} alt="" />
        <div className="alu-left">
          <div className="alu-course">
              MS
            </div>
        
            <div className="alu-photo"> 
              <img className="aluImg" src={MiwonPhoto} alt=""/> 
            </div>
        </div>
        <div className="alu-right">
          <div className="alu-name">
          Mi Won Song       
              <span className="alu-pos"> Researcher </span>
              
          </div>

          <div className="alu-field"> 
            <span className="alu-edu">| Education |</span>
            <span className="alu-edul1">M.S in Medical Device Engineering & Management (2022)   </span>
            <span className="alu-aff">| Affiliation |</span>
            <span className="alu-affl">Gangnam Severance Hospital (Medical Device Usability Research Center) </span>
            <span className="alu-dis">| Dissertation |</span>
            <span className="alu-disl">Assessment for usefulness of A-mode sonography for muscle change after training   </span>
            <span className="alu-contact">| Contact |</span>
            <span className="alu-contactl">aldnjthd@naver.com / mwsong0529@yuhs.ac</span>
        
          </div>
        </div>
        
      </div>

      <div className="alu-profile">
        <div className="alu-left">
          <div className="alu-course">
              MS
            </div>
        
            <div className="alu-photo"> 
              <img className="aluImg" src={EunseonPhoto} alt=""/> 
            </div>
        </div>
        <div className="alu-right">
          <div className="alu-name">
          EunSeon Lee     
              <span className="alu-pos"> Researcher </span>
          </div>

          <div className="alu-field"> 
            <span className="alu-edu">| Education |</span>
            <span className="alu-edul1">M.S in Medical Device Engineering & Management (2022) </span>
            <span className="alu-aff">| Affiliation |</span>
            <span className="alu-affl">Seegene</span>
            <span className="alu-dis">| Dissertation |</span>
            <span className="alu-disl">Analysis of Emergency Use Authorization (EUA) for In Vitro Diagnostic Medical Devices (IVD) on Emerging Infectious Disease </span>
            <span className="alu-contact">| Contact |</span>
            <span className="alu-contactl">eunseon.lee92@gmail.com</span>
        
          </div>
        </div>
        <img className="bar-rights" src={BarImgAlu} alt="" />
      </div>
    

      <div className="alu-profile">
        <div className="alu-left">
          <div className="alu-course">
              MS
            </div>
        
            <div className="alu-photo"> 
              <img className="aluImg" src={YoungboPhoto} alt=""/> 
            </div>
        </div>
        <div className="alu-right">
          <div className="alu-name">
          Young-bo Cho    
              <span className="alu-pos"> Researcher </span>
              
          </div>

          <div className="alu-field"> 
            <span className="alu-edu">| Education |</span>
            <span className="alu-edul1">M.S in Medical Device Engineering & Management (2022) </span>
            <span className="alu-aff">| Affiliation |</span>
            <span className="alu-affl">Guerbet Korea</span>
            <span className="alu-dis">| Dissertation |</span>
            <span className="alu-disl">A Study on the global harmonized adverse event reporting system for domestic medical device manufacturers  </span>
            <span className="alu-contact">| Contact |</span>
            <span className="alu-contactl">miracle0134@naver.com</span>
        
          </div>
        </div>
        <img className="bar-rights" src={BarImgAlu} alt="" />
      </div>


      <div className="alu-profile">

      </div>
  </div>
   
  )
}
