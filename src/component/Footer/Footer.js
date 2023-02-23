
import styles from './footer.module.css'
const Footer = () => {

    return (
        <div style = {{width:'100%', flexDirection:'column', position : "relative", padding : "0 2rem", bottom:'0', backgroundColor: '#002650'}}>
            <div style = {{width:'100%', display:'flex', justifyContent:'center', alignSelf:'center'}}>
            <img style= {{width: '50%'}} src = "/images/LogoDesign_Eng.png" alt ="logo"/>
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
            <div className = {styles.textCopy}>
                Copyright © hisstoryxx. All rights reserved.
            </div>
            
        </div>
    )
}

export default Footer;