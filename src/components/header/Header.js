import React from 'react';
import "./header.scss";
import HeaderImg from "../img/Logo Design.png";
import Introduce from '../introduce/Introduce';

export default function Header(){
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSmall">MDDU 의료기기 설계 및 사용적합성 연구실</span>
            </div>
           <img className="headerImg" src={HeaderImg} alt=""></img>
           <Introduce/>
        </div>
    )
}