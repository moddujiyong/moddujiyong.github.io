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


      <style jsx>{`
            
            li {
                display: flex;
                flex-direction: column;
                list-style: none;
                width : 220px;
                height : auto;
                align-self: center;
                border-radius: 10px; 
                padding: 20px;
                cursor: pointer;
                transition: scale 0.2 ease;
                justify-content: center;
            }

            li:hover{
                scale: 1.05;
                color: #fff;
            }

            contents {
                text-decoration: none;
                color : #fff;
                font-size: 1.5rem;
                font-family: 'Noto Sans KR','Open Sans',AppleGothic,helvetica,sans-serif;
                
                
            }
            contents:hover {
                color : #0167b3;
            }

           

         
                        `}

        </style>
      
      <div className ={styles.header}>
            <div className={styles.headerTitles}>

              
              <div className={styles.container}>
                    <span className={styles.headerTitleSmall}>MDDU 의료기기 설계 및 사용적합성 연구실</span>
                    <span className={styles.headerTitleSmaller}>Medical Device Design & Usability Lab</span>

                </div>
                
                <img style={{display: 'flex', width: '100%', height: '100%', objectFit: "contain"}} src="images/main_design_img.png" alt=""/>
                
                
            </div>

            <div style = {{display: 'flex', width: '100%', height: '100%',  justifyContent:'center'}}>
              <div style ={{display: 'flex', flexDirection:'column', width: '80%', height: '80%', }}>
                <div style = {{marginTop: '30px'}}> 
                  <div className = {styles.units}>
                <div style = {{color: '#010e1e', fontSize: '3rem', }}>VISON </div>
                <div style = {{color: '#010e1e', fontSize: '3rem', }}>VISON </div>
                </div>


                </div>
               
               
                
                <img style={{display: 'flex', width: '100%', height: '100%', objectFit:"contain", zIndex: 1}} src="images/upGo.jpeg" alt=""/>

                <div className = {styles.listContainer}>
                <ul className = {styles.links}>
                    <li style ={{backgroundColor:'#00489a'}} >
                    <contents >Clinical Study Design</contents>
                    </li>
                    <li style = {{ backgroundColor:'#003979'}}>
                      <contents>UX/UI Design & Usability</contents> 
                      
                      </li>
                    <li style ={{ backgroundColor: '#005d8a'}}>
                      <contents>Medical Device Industry Policy</contents> 
                      
                    </li>
                    <li style = {{backgroundColor: '#0086c4'}}>
                      <contents>Bio-Signal Processing & AI</contents> 
                      </li>
                    
                </ul>
                </div>
              </div>
              
            </div>

            
              
                
   
           
           <Introduce/>
        </div>
    </div>
  )
}
