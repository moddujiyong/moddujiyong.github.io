import React from 'react';
import "./footer.scss";
import {Link} from "react-router-dom";
import Logo_Mark from '../img/Logo_White.png'
import Logo_Design_Footer from '../img/Yonsei_White.png'
import ResearchCD from '../../pages/research/researchCD/ResearchCD';
import ResearchUD from '../../pages/research/researchUD/ResearchUD';
export default function Footer(){
   
    const footerText='Dept. of Medical Device \n Engineering & Management'

    return(
        <div className="footer">
            <div className="footerSet">

                <div className="footerLeft">
                     <ul className="footerList">
                       
                        <li className="footerListItem"><Link className="link" to ="/members" >Members</Link></li>
                        <li className="footerListItem"><Link className="link" to ="/research">Research</Link></li>
                        <li className="footerListItem"><Link className="link" to ="/publication">Publication</Link></li>
                        <li className="footerListItem"><Link className="link" to ="/contact">Contact</Link></li>
                        <li className="footerListItem"><Link className="link" to ="/gallery" >Gallery</Link></li>
                    </ul>
                </div>    
        
                <div className="footerCenter">  
                    <img className="markImg" src={Logo_Mark} alt=""/>
                    <img className="footerImg" src={Logo_Design_Footer} alt=""/> 
               
                </div>

                <div className="footerRight">
                    <ul className="footerList">
                       
                       <li className="footerRListItem"><Link className="link" to ="/research/clinical">Clinical Study Design</Link></li>
                       <li className="footerRListItem"><Link className="link" to ="/research/uxui">UX/UI Design & Usability</Link></li>
                       <li className="footerRListItem"><Link className="link" to ="/research/industry">Medical Industry Policy</Link></li>
                       <li className="footerRListItem"><Link className="link" to ="/">{footerText}</Link></li>
                    
                     </ul>
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