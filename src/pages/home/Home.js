import React from 'react';
import Header from '../../components/header/Header';
import Researches from '../../components/researches/Researches';
import Notice from '../../components/notice/Notice';

import "./home.scss";
import Calendar from '../../components/calendar/Calendar';


//<Notice/>
//<Calendar/>
export default function Home(){
    return (
        <>
       
        <div className="home">
        <Header/>
        <Researches/>
        
        </div>

        </>
    )
}