import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import React,{useEffect,useState} from 'react'




export default function Home() {

  const [position, setPosition] = useState(0);
  
  const onScroll = () => {
    setPosition(window.scrollY);
    console.log(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    }
  },[])

  const introText='We do "Design & Development" and "Research & Evaluation" focusing on "Practical Healthcare Industry" within "Medical Device Regulation".';
  return (
    <div>
    <div style ={{position : "relative", padding : "0 2rem",}}>
      <Head>
        <title>
          Home | mddu
        </title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>


      <style jsx>{`
            

          

           

         
                        `}

        </style>
      
      <div className ={styles.header}>
            <div className={styles.headerTitles}>

              
              <div className={styles.container}>
                    <span className={styles.headerTitleSmall}>MDDU 의료기기 설계 및 사용적합성 연구실</span>
                    <span className={styles.headerTitleSmaller}>Medical Device Design & Usability Lab</span>

                </div>
                <div className = {styles.back} style = {{backgroundPositionY : position /2}}>

                </div>
                {/* <img style={{display: 'flex', width: '100%', height: '100%', objectFit: "contain"}} src="images/main_design_img.png" alt=""/> */}
                
                
            </div>

            <div style = {{display: 'flex', width: '100%', height: '100%',  justifyContent:'center'}}>
              <div style ={{display: 'flex', flexDirection:'column', width: '80%', height: '80%', }}>
                <div style = {{marginTop: '30px', opacity: (position - 20)/80}}> 
                  <div className = {styles.units}>
                <div className = {styles.visionText}>VISON </div>
                <div className = {styles.visionText}>VISON </div>
                </div>


                </div>
               
               
                
                <img style={{display: 'flex', opacity: (position - 30)/50, width: '100%', height: '100%', objectFit:"contain", zIndex: 1}} src="images/upGo.jpeg" alt=""/>

                <div className = {styles.listContainer}>
                <ul className = {styles.links}>
                    <li className = {styles.li} style ={{backgroundColor:'#00489a' ,opacity: (position - 40)/50}} >
                    <Link href = {{pathname: 'research', query: { id : "clinical"}}} style = {{textAlign:'center'}}><contents className = {styles.contents} >Clinical Study Design</contents></Link>
                    </li>
                    <li className = {styles.li} style = {{ backgroundColor:'#003979',opacity: (position - 40)/50}}>
                    <Link href = {{pathname: 'research', query: { id : "uxui"}}} style = {{textAlign:'center'}}><contents className = {styles.contents}>UX/UI Design & Usability</contents> 
                      </Link>
                      </li>
                    <li  className = {styles.li} style ={{ backgroundColor: '#005d8a',opacity: (position - 40)/50}}>
                    <Link href = {{pathname: 'research', query: { id : "industry"}}} style = {{textAlign:'center'}}><contents className = {styles.contents}>Medical Device Industry Policy</contents> 
                      </Link>
                    </li>
                    <li  className = {styles.li} style = {{backgroundColor: '#0086c4',opacity: (position - 40)/50}}>
                    <Link href = {{pathname: 'research', query: { id : "clinical"}}} style = {{textAlign:'center'}}> <contents className = {styles.contents}>Bio-Signal Processing & AI</contents> 
                      </Link>
                      </li>
                    
                </ul>
                </div>
              </div>


              
              
            </div>

           
            
          
        </div>
        
    </div>

<div style = {{display: 'flex', position : "relative", padding : "0 2rem" , marginTop: '50px', width: '100%', height: '100%',  justifyContent:'center'}}>
<div className = {styles.textContainer}>

  {introText}
  
</div>
</div>
</div>
  )
}
