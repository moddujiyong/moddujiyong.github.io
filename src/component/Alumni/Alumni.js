
import styles from './Alumni.module.css'
import React, {useRef} from 'react';

// import MisoPhoto from "../../../components/img/miso.png";
// import InsikPhoto from "../../../components/img/insik.png";
// import SihyunPhoto from "../../../components/img/sihyun.png";
// import HanjiPhoto from "../../../components/img/hanji.png";
// import JeongukPhoto from "../../../components/img/jeonguk.jpg";
// import MiwonPhoto from "../../../components/img/miwon.jpg";
// import EunseonPhoto from "../../../components/img/eunseon.jpg";
// import YoungboPhoto from "../../../components/img/youngbo.jpg";
// import BarImgAlu from "../../../components/img/design_bar.png";
// import ChoroPhoto from "../../../components/img/cho.jpeg";

// import { Link } from 'react_router_dom';


export default function Alumni() {

 
  return (   
  <div className={styles.alumni}>

      <div className={styles.alu_header} >
        <div className={styles.alu_title}>
          Alumni
        </div>
      </div>
    <div className={styles.alu_profile}>
        <div className={styles.alu_left}>
          <div className={styles.alu_course}>
              MS
            </div>
        
            <div className={styles.alu_photo}> 
              <img className={styles.aluImg} src="images/miso.png" alt=""/> 
            </div>
        </div>
        <div className={styles.alu_right}>
          <div className={styles.alu_name}>
          Miso Choi     
            
          </div>

          <div className={styles.alu_field}> 
            <span className={styles.alu_edu}>| Education |</span>
            <span className={styles.alu_edul1}>Master in Medical Device Engineering & Management (2020) </span>
            <span className={styles.alu_aff}>| Affiliation |</span>
            <span className={styles.alu_affl}></span>
            <span className={styles.alu_dis}>| Dissertation |</span>
            <span className={styles.alu_disl}>Strategies for Korean Medical Devices to enter the Chinese market through the Analysis of Chinese Devices System</span>
            <span className={styles.alu_contact}>| Contact |</span>
            <span className={styles.alu_contactl}>msc17@yonsei.ac.kr</span>
        
          </div>
        </div>
        <img className={styles.bar_rights} src="images/design_bar.png" alt="" />
      </div>

      <div className={styles.alu_profile}>
      <img className={styles.bar_left} src="images/design_bar.png" alt="" />
        <div className={styles.alu_left}>
          <div className={styles.alu_course}>
              MS
            </div>
        
            <div className={styles.alu_photo}> 
              <img className={styles.aluImg} src="images/insik.png" alt=""/> 
            </div>
        </div>
        <div className={styles.alu_right}>
          <div className={styles.alu_name}>
          Insik Im
         
            
          </div>

          <div className={styles.alu_field}> 
            <span className={styles.alu_edu}>| Education |</span>
            <span className={styles.alu_edul1}>Master in Medical Device Engineering & Management (2021) </span>
            <span className={styles.alu_aff}>| Affiliation |</span>
            <span className={styles.alu_affl}>Medtronic</span>
            <span className={styles.alu_dis}>| Dissertation |</span>
            <span className={styles.alu_disl}>A Study on the Diagnosis Korea Medical Device Industry through Management Performance and Enterprise Value </span>
            <span className={styles.alu_contact}>| Contact |</span>
            <span className={styles.alu_contactl}>insik7410@gmail.com</span>
        
          </div>
        </div>
        
      </div>

      <div className={styles.alu_profile}>
        <div className={styles.alu_left}>
          <div className={styles.alu_course}>
              MS
            </div>
        
            <div className={styles.alu_photo}> 
              <img className={styles.aluImg} src="images/sihyun.png" alt=""/> 
            </div>
        </div>
        <div className={styles.alu_right}>
          <div className={styles.alu_name}>
          Sihyun Han     
          
             
          </div>

          <div className={styles.alu_field}> 
            <span className={styles.alu_edu}>| Education |</span>
            <span className={styles.alu_edul1}>Master in Medical Device Engineering & Management (2021)  </span>
            <span className={styles.alu_aff}>| Affiliation |</span>
            <span className={styles.alu_affl}>Synex</span>
            <span className={styles.alu_dis}>| Dissertation |</span>
            <span className={styles.alu_disl}>A Study on the Application of Digital Clinical Trial System to Medical Device  </span>
            <span className={styles.alu_contact}>| Contact |</span>
            <span className={styles.alu_contactl}>2007andy@naver.com</span>
        
          </div>
        </div>
        <img className={styles.bar_rights} src="images/design_bar.png"alt="" />
      </div>


      <div className={styles.alu_profile}>
      <img className={styles.bar_left} src="images/design_bar.png" alt="" />
        <div className={styles.alu_left}>
          <div className={styles.alu_course}>
              MS
            </div>
        
            <div className={styles.alu_photo}> 
              <img className={styles.aluImg} src="images/hanji.png" alt=""/> 
            </div>
        </div>
        <div className={styles.alu_right}>
          <div className={styles.alu_name}>
          Hanji Lee      
          
              <span className="alu_eng"> </span>
          </div>

          <div className={styles.alu_field}> 
            <span className={styles.alu_edu}>| Education |</span>
            <span className={styles.alu_edul1}>Master in Medical Device Engineering & Management (2022)  </span>
            <span className={styles.alu_aff}>| Affiliation |</span>
            <span className={styles.alu_affl}>Abbott</span>
            <span className={styles.alu_dis}>| Dissertation |</span>
            <span className={styles.alu_disl}>Improvement of domestic regulation based on analysis of global regulations for digital therapeutics   </span>
            <span className={styles.alu_contact}>| Contact |</span>
            <span className={styles.alu_contactl}>hangilee00@gmail.com</span>
        
          </div>
        </div>
        
      </div>


      <div className={styles.alu_profile}>
        
        <div className={styles.alu_left}>
          <div className={styles.alu_course}>
              MS
            </div>
        
            <div className={styles.alu_photo}> 
              <img className={styles.aluImg} src="images/jeonguk.jpg" alt=""/> 
            </div>
        </div>
        <div className={styles.alu_right}>
          <div className={styles.alu_name}>
          Jeonguk Choi     
        
          </div>

          <div className={styles.alu_field}> 
            <span className={styles.alu_edu}>| Education |</span>
            <span className={styles.alu_edul1}>Master in Medical Device Engineering & Management (2022)   </span>
            <span className={styles.alu_aff}>| Affiliation |</span>
            <span className={styles.alu_affl}>Vuno </span>
            <span className={styles.alu_dis}>| Dissertation |</span>
            <span className={styles.alu_disl}>User Interface Design for Ventilator Central Monitoring System Applying Human Factors Engineering   </span>
            <span className={styles.alu_contact}>| Contact |</span>
            <span className={styles.alu_contactl}>hrju5110@naver.com</span>
        
          </div>
        </div>
        <img className={styles.bar_rights} src="images/design_bar.png" alt="" />
      </div>


      <div className={styles.alu_profile}>
      <img className={styles.bar_left} src="images/design_bar.png"alt="" />
        <div className={styles.alu_left}>
          <div className={styles.alu_course}>
              MS
            </div>
        
            <div className={styles.alu_photo}> 
              <img className={styles.aluImg} src="images/miwon.jpg" alt=""/> 
            </div>
        </div>
        <div className={styles.alu_right}>
          <div className={styles.alu_name}>
          MiWon Song       
             
              
          </div>

          <div className={styles.alu_field}> 
            <span className={styles.alu_edu}>| Education |</span>
            <span className={styles.alu_edul1}>Master in Medical Device Engineering & Management (2022)   </span>
            <span className={styles.alu_aff}>| Affiliation |</span>
            <span className={styles.alu_affl}>Gangnam Severance Hospital (Medical Device Usability Research Center) </span>
            <span className={styles.alu_dis}>| Dissertation |</span>
            <span className={styles.alu_disl}>Assessment for usefulness of A_mode sonography for muscle change after training   </span>
            <span className={styles.alu_contact}>| Contact |</span>
            <span className={styles.alu_contactl}>aldnjthd@naver.com / mwsong0529@yuhs.ac</span>
        
          </div>
        </div>
        
      </div>

      <div className={styles.alu_profile}>
        <div className={styles.alu_left}>
          <div className={styles.alu_course}>
              MS
            </div>
        
            <div className={styles.alu_photo}> 
              <img className={styles.aluImg}  src="images/eunseon.jpg" alt=""/> 
            </div>
        </div>
        <div className={styles.alu_right}>
          <div className={styles.alu_name}>
          EunSeon Lee     
              
          </div>

          <div className={styles.alu_field}> 
            <span className={styles.alu_edu}>| Education |</span>
            <span className={styles.alu_edul1}>Master in Medical Device Engineering & Management (2022) </span>
            <span className={styles.alu_aff}>| Affiliation |</span>
            <span className={styles.alu_affl}>Seegene</span>
            <span className={styles.alu_dis}>| Dissertation |</span>
            <span className={styles.alu_disl}>Analysis of Emergency Use Authorization (EUA) for In Vitro Diagnostic Medical Devices (IVD) on Emerging Infectious Disease </span>
            <span className={styles.alu_contact}>| Contact |</span>
            <span className={styles.alu_contactl}>eunseon.lee92@gmail.com</span>
        
          </div>
        </div>
        <img className={styles.bar_rights} src="images/design_bar.png" alt="" />
      </div>
    

      <div className={styles.alu_profile}>
      <img className={styles.bar_left} src="images/design_bar.png" alt="" />
        <div className={styles.alu_left}>
          <div className={styles.alu_course}>
              MS
            </div>
        
            <div className={styles.alu_photo}> 
              <img className={styles.aluImg} src="images/youngbo.jpg" alt=""/> 
            </div>
        </div>
        <div className={styles.alu_right}>
          <div className={styles.alu_name}>
          Youngbo Cho    
              
              
          </div>

          <div className={styles.alu_field}> 
            <span className={styles.alu_edu}>| Education |</span>
            <span className={styles.alu_edul1}>Master in Medical Device Engineering & Management (2022) </span>
            <span className={styles.alu_aff}>| Affiliation |</span>
            <span className={styles.alu_affl}>Guerbet</span>
            <span className={styles.alu_dis}>| Dissertation |</span>
            <span className={styles.alu_disl}>A Study on the Global Harmonized Adverse Event Reporting System for Domestic Medical Device Manufacturers  </span>
            <span className={styles.alu_contact}>| Contact |</span>
            <span className={styles.alu_contactl}>miracle0134@naver.com</span>
        
          </div>
        </div>
        
      </div>


      <div className={styles.alu_profile}>
      <img className="bar_right" src="images/design_bar.png" alt="" />
        <div className={styles.alu_left}>
          <div className={styles.alu_course}>
              MS
            </div>
        
            <div className={styles.alu_photo}> 
              <img className={styles.aluImg} src="images/cho.jpeg" alt=""/> 
            </div>
        </div>
        <div className={styles.alu_right}>
          <div className={styles.alu_name}>
          Choro Choi    
              
              
          </div>

          <div className={styles.alu_field}> 
            <span className={styles.alu_edu}>| Education |</span>
            <span className={styles.alu_edul1}>Master in Medical Device Engineering & Management (2022) </span>
            <span className={styles.alu_aff}>| Affiliation |</span>
            {/* <Link className={styles.alu_affl}  onClick={() => window.location.href='http://m_doc.io/'}> MDOC</Link> */}
            <span className={styles.alu_dis}>| Dissertation |</span>
            <span className={styles.alu_disl}> Development of cloud_based remote monitoring system for peritoneal dialysis patients </span>
            <span className={styles.alu_contact}>| Contact |</span>
            <span className={styles.alu_contactl}>hisstoryxx@gmail.com</span>
        
          </div>
        </div>
        
      </div>
  </div>
   
  )
}
