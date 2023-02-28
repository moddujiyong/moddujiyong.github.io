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
    window.addEventListener(&qoutscroll&qout, onScroll);
    return () => {
      window.removeEventListener(&qoutscroll&qout, onScroll);
    }
  },[])

 

  const introText='We do &qoutDesign & Development&qout and &qoutResearch & Evaluation&qout focusing on &qoutPractical Healthcare Industry&qout within &qoutMedical Device Regulation&qout.';
  return (
    <div>
    <div style ={{position : &qoutrelative&qout, padding : &qout0 2rem&qout,}}>
      <Head>
        <title>
          Home | mddu
        </title>
        <link rel=&qoutshortcut icon&qout href=&qout/favicon.ico&qout />
        <meta name=&qoutviewport&qout content=&qoutinitial-scale=1.0, width=device-width&qout />
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
                <div className = {styles.back} style = {{backgroundPositionY : position /1.2, opacity : 0.9 +  position/3}}>

                </div>
                {/* <img style={{display: 'flex', width: '100%', height: '100%', objectFit: &qoutcontain&qout}} src=&qoutimages/main_design_img.png&qout alt=&qout/> */}
                
                
            </div>

            <div style = {{display: 'flex', width: '100%', height: '100%',  justifyContent:'center'}}>
              <div style ={{display: 'flex', flexDirection:'column', width: '80%', height: '80%', }}>
                <div style = {{marginTop: '30px',opacity: (position - 10)/50 + 0.5 }}> 
                  <div className = {styles.units}>
                <div className = {styles.visionText}>VISON </div>
                <div className = {styles.visionText}>VISON </div>
                </div>


                </div>
               
               
           <img style={{ display: 'flex', opacity: (position - 20)/50 + 0.9, width: '100%', height: '100%', objectFit:&qoutcontain&qout, zIndex: -1}} src=&qoutimages/upGo.jpeg&qout alt=&qout/>
                
                
                <div style ={{ position : &qoutrelative&qout,
  padding : &qout0 2rem&qout}}>
                <div className = {styles.listContainer}>
                <ul className = {styles.links}>
                    <li className = {styles.li} style ={{backgroundColor:'#00489a' ,opacity: (position - 30)/50 + 0.95,  }} >
                    <Link href = {{pathname: 'research', query: { id : &qoutclinical&qout}}} style = {{textAlign:'center'}}><contents className = {styles.contents} >Clinical Study Design</contents></Link>
                    </li>
                    <li className = {styles.li} style = {{ backgroundColor:'#003979',opacity: (position - 30)/50+ 0.95}}>
                    <Link href = {{pathname: 'research', query: { id : &qoutuxui&qout}}} style = {{textAlign:'center'}}><contents className = {styles.contents}>UX/UI Design & Usability</contents> 
                      </Link>
                      </li>
                    <li  className = {styles.li} style ={{ backgroundColor: '#005d8a',opacity: (position - 30)/50+ 0.95}}>
                    <Link href = {{pathname: 'research', query: { id : &qoutindustry&qout}}} style = {{textAlign:'center'}}><contents className = {styles.contents}>Medical Device Industry Policy</contents> 
                      </Link>
                    </li>
                    <li  className = {styles.li} style = {{backgroundColor: '#0086c4',opacity: (position - 30)/50+ 0.95}}>
                    <Link href = {{pathname: 'research', query: { id : &qoutbio&qout}}} style = {{textAlign:'center'}}> <contents className = {styles.contents}>Bio-Signal Processing & AI</contents> 
                      </Link>
                      </li>
                    
                </ul>
                </div>
                </div>
              </div>


              
              
            </div>


            <div style = {{display: 'flex', flexDirection:'column', position : &qoutrelative&qout , marginTop: '100px', marginBottom: '100px', width: '100%', height: '100%',  justifyContent:'center', alignSelf:'center', marginBottom: '300px'}}>
              
            <p className = {styles.textContainer1} style = {{opacity: (position-100)/100}}>
              We do 
            </p>
            <p className = {styles.textContainer2} style = {{opacity: (position-140)/100}}>
            &qout;Design &amp; Development&qout;
            </p>
            <p className = {styles.textContainer3} style = {{opacity: (position-180)/100}}>
            and...
            </p>
            <p className = {styles.textContainer4} style = {{opacity: (position-220)/50}}>
            &qout;Research &amp; Evaluation&qout;
            </p>
            <p className = {styles.textContainer5} style = {{opacity: (position-260)/50}}>
            focusing on
            </p>
            <p className = {styles.textContainer6} style = {{opacity: (position-300)/50}}>
            &qout;Practical Healthcare Industry&qout;
            </p>
            <p className = {styles.textContainer7} style = {{opacity: (position-340)/100}}>
            within
            </p>
            <p className = {styles.textContainer8} style = {{opacity: (position-380)/100}}>
            &qout;Medical Device Regulation&qout;
            </p>
            </div>

            <div>

            </div>

            
          
          
        </div>
        
    </div>


</div>
  )
}
