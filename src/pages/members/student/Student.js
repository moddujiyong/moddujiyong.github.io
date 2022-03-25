import React, {useRef} from 'react';
import YourimPhoto from "../../../components/img/yourim.png";
import SangeunPhoto from "../../../components/img/sangeun.png";
import HyeonkyeongPhoto from "../../../components/img/hyeonkyeong.jpg";
import JiyongPhoto from "../../../components/img/jiyong.jpg";
import ChoroPhoto from "../../../components/img/choro.jpg";
import HeeyoungPhoto from "../../../components/img/heeyoung.png";
import JiyunPhoto from "../../../components/img/jiyun.jpg";
import SeulbiPhoto from "../../../components/img/seulbi.png";
import JeonghwaPhoto from "../../../components/img/jeonghwa.png";
import KanghyeonPhoto from "../../../components/img/kanghyeon.png";
import JiminPhoto from "../../../components/img/jimin.jpg";
import SeungheePhoto from "../../../components/img/seunghee.png";
import GyeongminPhoto from "../../../components/img/gyeongmin.png";
import SehoPhoto from "../../../components/img/seho.jpg";
import YujeongPhoto from "../../../components/img/yujeong.jpg";


import StudentLayout from '../studentLayout/studentLayout';



import "./student.scss"
import { faPhabricator } from '@fortawesome/free-brands-svg-icons';
export default function Student() {

  return (   
    <div className="student" >
      <div className="stu-header" >
        <div className="stu-title">
          Students
        </div>
      </div>

      <StudentLayout 
        course = {'Ph.D course'}
        photo = {YourimPhoto}
        name = {'김유림'}
        EName = {'Yourim Kim'} 
        edu1 = {'M.S in Medical Device Engineering & Management (2020)'} 
        edu2 = {'B.S in Biomedical Engineering, Konkuk University (2017)'} 
        int = {'Medical Device Clinical Study Design, Clinical Effectiveness Evaluation'}
        con = {'yxxrm_k@naver.com / yxxrmk@yonsei.ac.kr'}/>

      <StudentLayout 
        course = {'MS / Ph.D course'}
        photo = {SangeunPhoto}
        name = {'박상은'}
        EName = {'Sangeun Park'} 
        edu1 = {'B.S in Biomedical Engineering, Yonsei University (2018)'} 
        edu2 = {null} 
        int = {'UX/UI Design, Android Programming, Usability/Human Factors Engineering '}
        con = {'pse7036@naver.com / sang-eun.park@yonsei.ac.kr'}/>

      <StudentLayout 
        course = {'MS / Ph.D course'}
        photo = {HyeonkyeongPhoto}
        name = {'최현경'}
        EName = {'Hyeonkyeong Choi'} 
        edu1 = {'B.S in Healthcare Industry, Cha University (2021)'} 
        edu2 = {null} 
        int = {'UX/UI Design, Usability/Human Factors Engineering'}
        con = {'hyeonkyeong97@daum.net / hyeonk@yonsei.ac.kr'}/>

      <StudentLayout 
        course = {'MS / Ph.D course'}
        photo = {JiyongPhoto}
        name = {'정지용'}
        EName = {'Jiyong Chung'} 
        edu1 = {'B.S in Computer Engineering, Tech University of Korea (2022)'} 
        edu2 = {null} 
        int = {'Bio-signal processing, AI & Deep learning'}
        con = {'cowjy0427@yonsei.ac.kr'}/>

      <StudentLayout 
        course = {'MS coursee'}
        photo = {ChoroPhoto}
        name = {'최초로'}
        EName = {'Choro Choi'} 
        edu1 = {'B.S in Biomedical Engineering, Yonsei University (2020)'} 
        edu2 = {null} 
        int = {'Signal & Image processing, AI & Deep learning, Programming, UI design'}
        con = {'hisstoryxx@gmail.com / chororo@yonsei.ac.kr'}/>

       <StudentLayout 
        course = {'MS coursee'}
        photo = {HeeyoungPhoto}
        name = {'최희영'}
        EName = {'Heeyoung Choi'} 
        edu1 = {'B.S in Biomedical Engineering, Yonsei University (2021)'} 
        edu2 = {null} 
        int = {'Medical Device Clinical Study Design, Clinical Effectiveness Evaluation'}
        con = {'chy980423@naver.com'}/>

      <StudentLayout 
        course = {'MS coursee'}
        photo = {JiyunPhoto}
        name = {'정지윤'}
        EName = {'Jiyun Jeong'} 
        edu1 = {'B.S in Biomedical Engineering, Yonsei University (2014)'} 
        edu2 = {null} 
        int = {'Usability/Human Factors Engineering'}
        con = {'ravissante25@gmail.com / jiyunj@yonsei.ac.kr'}/>
        
      <StudentLayout 
        course = {'MS coursee'}
        photo = {SeulbiPhoto}
        name = {'이슬비'}
        EName = {'Seulbi Lee'} 
        edu1 = {'B.S in Biomedical Engineering, Yonsei University (2021)'} 
        edu2 = {null} 
        int = {'Medical Device Clinical Study Design, Clinical Effectiveness Evaluation'}
        con = {'bee5747@naver.com / bee5747@yonsei.ac.kr'}/>

      <StudentLayout 
        course = {'MS coursee'}
        photo = {JeonghwaPhoto}
        name = {'임정화'}
        EName = {'Jeonghwa Lim'} 
        edu1 = {'B.S in Biomedical Engineering, Yonsei University (2021)'} 
        edu2 = {null} 
        int = {'Bio-signal processing, AI & Deep learning'}
        con = {'lim9234@hanmail.net'}/>

      <StudentLayout 
        course = {'MS coursee'}
        photo = {null}
        name = {'임창현'}
        EName = {'Changhyun Lim'} 
        edu1 = {'B.S in Healthcare Industry, Cha University (2021)'} 
        edu2 = {null} 
        int = {'Medical Device Clinical Study Design, Clinical Effectiveness Evaluation, Medical Regulatory Affairs'}
        con = {'julius1231@naver.com'}/>

      <StudentLayout 
        course = {'MS coursee'}
        photo = {KanghyeonPhoto}
        name = {'유강현'}
        EName = {'Kanghyeon You'} 
        edu1 = {'B.S in Healthcare Industry, Cha University (2021)'} 
        edu2 = {null} 
        int = {'Medical Device Industry Policy, Medical Regulatory Affairs'}
        con = {'hap2boy@naver.com / hap2boy@yonsei.ac.kr'}/>

      <StudentLayout 
        course = {'MS coursee'}
        photo = {JiminPhoto}
        name = {'손지민'}
        EName = {'Jimin Son'} 
        edu1 = {'B.S in Biomedical Engineering, Dongguk University (2021)'} 
        edu2 = {null} 
        int = {'Medical Device Clinical Study Design, Medical Regulatory Affairs'}
        con = {'wlals2qj@naver.com / jmson1707@yonsei.ac.kr'}/>

      <StudentLayout 
        course = {'MS coursee'}
        photo = {SeungheePhoto}
        name = {'김승희'}
        EName = {'Seunghee Kim'} 
        edu1 = {'B.S in Healthcare Industry, Cha University (2021)'} 
        edu2 = {null} 
        int = {'Usability/Human Factors Engineering, Medical Device Industry Policy'}
        con = {'sshee0710@naver.com'}/>

      <StudentLayout 
        course = {'MS coursee'}
        photo = {GyeongminPhoto}
        name = {'권경민'}
        EName = {'Gyeongmin Kwon'} 
        edu1 = {'Korean language and literature, Yonsei University(2020)'} 
        edu2 = {null} 
        int = {'Usability/Human Factors Engineering, Medical Regulatory Affairs'}
        con = {'kdskkm12@naver.com'}/>

      <StudentLayout 
        course = {'MS coursee'}
        photo = {SehoPhoto}
        name = {'김세호'}
        EName = {'Seho Kim'} 
        edu1 = {'Life science, Dongguk University(2022)'} 
        edu2 = {null} 
        int = {'Medical Device Clinical Study Design, Clinical Effectiveness Evaluation'}
        con = {'shkim2022@yonsei.ac.kr'}/>

      <StudentLayout 
        course = {'MS coursee'}
        photo = {YujeongPhoto}
        name = {'마유정'}
        EName = {'Yujeong Ma'} 
        edu1 = {`Bachelor of Science in Chemistry, Duksung Women's University(2022)`} 
        edu2 = {null} 
        int = {'Medical Device Clinical Study Design, Clinical Effectiveness Evaluation'}
        con = {'lemontree1235@naver.com'}/>


      <div className="stu-profile">
     
      </div>
    </div>
  )
}
