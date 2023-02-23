import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {

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
                
                <img style={{display: 'flex', width: '100%', height: '100%', objectFit: "contain"}} src="images/main_design_img.png" alt=""/>
                
                
            </div>

            <div style = {{display: 'flex', width: '100%', height: '100%',  justifyContent:'center'}}>
              <div style ={{display: 'flex', flexDirection:'column', width: '80%', height: '80%', }}>
                <div style = {{marginTop: '30px'}}> 
                  <div className = {styles.units}>
                <div className = {styles.visionText}>VISON </div>
                <div className = {styles.visionText}>VISON </div>
                </div>


                </div>
               
               
                
                <img style={{display: 'flex', width: '100%', height: '100%', objectFit:"contain", zIndex: 1}} src="images/upGo.jpeg" alt=""/>

                <div className = {styles.listContainer}>
                <ul className = {styles.links}>
                    <li className = {styles.li} style ={{backgroundColor:'#00489a'}} >
                    <Link href = {{pathname: 'research', query: { id : "clinical"}}}><contents className = {styles.contents} >Clinical Study Design</contents></Link>
                    </li>
                    <li className = {styles.li} style = {{ backgroundColor:'#003979'}}>
                    <Link href = {{pathname: 'research', query: { id : "uxui"}}}><contents className = {styles.contents}>UX/UI Design & Usability</contents> 
                      </Link>
                      </li>
                    <li  className = {styles.li} style ={{ backgroundColor: '#005d8a'}}>
                    <Link href = {{pathname: 'research', query: { id : "industry"}}}><contents className = {styles.contents}>Medical Device Industry Policy</contents> 
                      </Link>
                    </li>
                    <li  className = {styles.li} style = {{backgroundColor: '#0086c4'}}>
                    <Link href = {{pathname: 'research', query: { id : "bio"}}}> <contents className = {styles.contents}>Bio-Signal Processing & AI</contents> 
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
