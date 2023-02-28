
import styles from './footer.module.css'
const Footer = () => {

    const toHomepage = () => {
        window.location.href='https://github.com/hisstoryxx'
    
        return false
    }
    return (
        <div style= {{position : "relative", padding : "0 2rem"}}>
        <div style = {{width:'100%', flexDirection:'column', bottom:'0', backgroundColor: '#002650',
         maxWidth : '1200px', margin: '0 auto',
         
    
    }}>
            <div style = {{width:'100%', display:'flex', justifyContent:'center', alignSelf:'center'}}>
            <img style= {{width: '40%'}} src = "/images/LogoDesign_Eng.png" alt ="logo"/>
            </div>

            <div className = {styles.text}>
                연세대학교 의료기기 설계 및 사용적합성 연구실
            </div>
            <div className = {styles.text}>
            06229 서울특별시 강남구 언주로 63길 20
            </div>
            <div className = {styles.text}>
            (06229) 20, Eonju-ro 63-gil Gangnam-gu, Seoul, Korea
            </div>
            {/* <span className={styles.department_content_mdi}  onClick={toHomepage} > http://mdi.yonsei.ac.kr/</span> */}
            <div className = {styles.textCopy}>
                Copyright {" "}
                
                <span  className={styles.his} onClick = {toHomepage} style ={{}}>© hisstoryxx.</span> 
                All rights reserved.
            </div>
            
        </div>
        </div>
    )
}

export default Footer;