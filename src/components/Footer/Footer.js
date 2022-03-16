import React from 'react';
import "./footer.scss";
import Logo_Mark from '../img/Logo_White.png'
import Logo_Design_Footer from '../img/Logo Design_Eng.png'
export default function Footer(){
  
    return(
        <div className="footer">
            <div className="footerSet">

            <div className="footerLeft">
                L
            </div>    
        
            <div className="footerCenter">
            <img className="markImg" src={Logo_Mark} alt=""/>
            <img className="footerImg" src={Logo_Design_Footer} alt=""/> 
               
            </div>

            <div className="footerRight">
              R
            </div>

            </div>

          
            <div className="footerBottom">
                <span className="infoTitle1">연세대학교 의료기기 설계 및 사용적합성 연구실(MDDU)</span>
                <span className="infoTitle2">06229 서울특별시 강남구 언주로 63길 20</span>
                <span className="infoTitle3">20, Eonju-ro 63-gil Gangnam-gu, Seoul 06229, Korea</span>
            </div>

        </div>

    )
}