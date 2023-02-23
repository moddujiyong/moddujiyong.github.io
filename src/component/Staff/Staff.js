import React, {useRef} from 'react';

import styles from "./Staff.module.css"
export default function Staffs() {

  const BarImgAdm = "images/design_bar.png"
  const BoraPhoto = "images/bora.jpg"

  return (   
    <div className={styles.staffs} >
      <div className={styles.staffs_header} >
        <div className={styles.staffs_title}>
          Staffs
        </div>
  
      </div>

      <div className={styles.staffs_profile}>
      <div className={styles.staffs_left}>
           <div className={styles.staffs_course}>
               Administrator
            </div>
        
            <div className={styles.staffs_photo}> 
              <img className={styles.staffsImg} src={BoraPhoto} alt=""/> 
            </div>
        </div>
        <div className={styles.staffs_right}>
          <div className={styles.staffs_name}>
          Bora Kim
          
             
          </div>

          <div className={styles.staffs_field}> 
            <span className={styles.staffs_edu}>| Education |</span>
            <span className={styles.staffs_edul1}>Bachelor in Advanced Materials Engineering, Sejong University (2017) </span>
          
            <span className={styles.staffs_ri}>| Task |</span>
            <span className={styles.staffs_ril}>Administration </span>
            <span className={styles.staffs_contact}>| Contact |</span>
            <span className={styles.staffs_contactl}>arobk@naver.com / arobk@yonsei.ac.kr</span>
         
          </div>
         
        </div>
        <img className={styles.bar_rights} src={BarImgAdm} alt="" />
      </div>

      <div className={styles.staffs_profile}>

        
      </div>
    </div>
  )
}
