import React from 'react';
import Header from '../../components/header/Header';
import Researches from '../../components/researches/Researches';
import Notice from '../../components/notice/Notice';

import "./home.scss";
import Calendar from '../../components/calendar/Calendar';

export default function Home(){
    return (
        <>
        <Header/>
        <div className="home">
            <Researches/>
        </div>
        <div className="home">
            <Notice/>
            <Calendar/>
        </div>
        </>
    )
}