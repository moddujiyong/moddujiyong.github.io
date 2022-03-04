import React from 'react';
import "./footer.scss";
import Logo_Design_Footer from '../img/Logo Design_footer.png'
export default function Footer(){

    const text="연세대학교 의료기기 설계 및 사용적합성 연구실 (MDDU) \n \n \t 06229 서울특별시 강남구 언주로 63길 20 \n 20, Eonju-ro 63-gil, Gangnam-gu, Seoul 06229, Korea"
    return(
        <div className="footer">
            <div className="footerLeft">
           
                
               
            </div>            
            <div className="footerCenter">
                <span className="firstline">{text}</span>

            </div>

            <div className="footerRight">
            <img className="footerImg" src={Logo_Design_Footer} alt=""/> 
            </div>
        </div>
    )
}