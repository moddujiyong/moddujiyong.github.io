import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import Introduce from '@/src/component/Introduce'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div style ={{position : "relative", padding : "0 2rem",}}>
      <Head>
        <title>
          Home | mddu
        </title>
      </Head>
      
      <div className ={styles.header}>
            <div className={styles.headerTitles}>

              
              <div className={styles.container}>
                    <span className={styles.headerTitleSmall}>MDDU 의료기기 설계 및 사용적합성 연구실</span>
                    <span className={styles.headerTitleSmaller}>Medical Device Design & Usability Lab</span>

                </div>
                
                <img style={{display: 'flex', width: '100%', height: '100%', objectFit: "c"}} src="images/main_design_img.png" alt=""/>
                
                
            </div>

            <div style = {{display: 'flex', width: '100%', height: 'auto', backgroundColor:'red', justifyContent:'center'}}>
              <div style ={{display: 'flex', width: '80%', height: '300px', backgroundColor: 'blue'}}>
                <div className = {styles.units}>
                <div style = {{color: '#010e1e', fontSize: '2.5rem', }}>VISON </div>
                <div style = {{color: '#010e1e', fontSize: '2.5rem', }}>VISON </div>
                </div>
              
              </div>
              
            </div>

            
              
                
   
           
           <Introduce/>
        </div>
    </div>
  )
}
