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
import ChanghyunPhoto from "../../../components/img/changhyun.png";

import Intern from '../intern/Intern';
import StudentLayout from '../studentLayout/StudentLayout';

import MemberSide from "../memberSide/MemberSide"
import BarImgStu from "../../../components/img/design_bar.png";
import "./student.scss"
import { faPhabricator } from '@fortawesome/free-brands-svg-icons';
export default function Student({select ,setSelect, selectStudent, setSelectStudent }) {
  const to="-"

  console.log(selectStudent)
  return (
    <div className="student" >
      {select === 'Student' && selectStudent === '' ? 

<>
<div className="stu-header" >
   <div className="stu-title">
   Students
  </div>
</div>
<StudentLayout 

course = {'Ph.D course'}
photo = {YourimPhoto}
name = {'Yourim Kim'}
EName = {null} 
edu1 = {'Master in Medical Device Engineering & Management (2020)'} 
edu2 = {'Bachelor in Biomedical Engineering, Konkuk University (2017)'} 
int = {'Medical Device Clinical Study Design, Clinical Effectiveness Evaluation'}
con = {'yxxrm_k@naver.com / yxxrmk@yonsei.ac.kr'}
rphoto={BarImgStu}/>
<StudentLayout 
lphoto={BarImgStu}
course = {'MS / Ph.D course'}
photo = {SangeunPhoto}
name = {'Sangeun Park'}
EName = {null} 
edu1 = {'Bachelor in Biomedical Engineering, Yonsei University (2018)'} 
edu2 = {null} 
int = {'UX/UI Design, Android Programming, Usability/Human Factors Engineering '}
con = {'pse7036@naver.com / sang-eun.park@yonsei.ac.kr'}/>

<StudentLayout 
course = {'MS course'}
photo = {ChoroPhoto}
name = {'Choro Choi'}
EName = {null} 
edu1 = {'Bachelor in Biomedical Engineering, Yonsei University (2020)'} 
edu2 = {null} 
int = {'Signal & Image processing, AI & Deep learning, Programming, UI design'}
con = {'hisstoryxx@gmail.com / chororo@yonsei.ac.kr'}
rphoto={BarImgStu}/>


<StudentLayout 
lphoto={BarImgStu}
course = {'MS course'}
photo = {SeulbiPhoto}
name = {'Seulbi Lee'}
EName = {null} 
edu1 = {'Bachelor in Biomedical Engineering, Yonsei University (2021)'} 
edu2 = {null} 
int = {'Medical Device Clinical Study Design, Clinical Effectiveness Evaluation'}
con = {'bee5747@naver.com / bee5747@yonsei.ac.kr'}/>

<StudentLayout 
course = {'MS course'}
photo = {JiyunPhoto}
name = {'Jiyun Jeong'}
EName = {null} 
edu1 = {'Bachelor in Biomedical Engineering, Yonsei University (2014)'} 
edu2 = {null} 
int = {'Usability/Human Factors Engineering'}
con = {'ravissante25@gmail.com / jiyunj@yonsei.ac.kr'}
rphoto={BarImgStu}/>


<StudentLayout 
course = {'MS / Ph.D course'}
photo = {HyeonkyeongPhoto}
name = {'Hyeonkyeong Choi'}
EName = {null} 
edu1 = {'Bachelor in Healthcare Industry, Cha University (2021)'} 
edu2 = {null} 
int = {'UX/UI Design, Usability/Human Factors Engineering'}
con = {'hyeonkyeong97@daum.net / hyeonk@yonsei.ac.kr'}
rphoto={BarImgStu}/>


<StudentLayout 
lphoto={BarImgStu}
course = {'MS course'}
photo = {HeeyoungPhoto}
name = {'Heeyeong Choi'}
EName = {null} 
edu1 = {'Bachelor in Biomedical Engineering, Yonsei University (2021)'} 
edu2 = {null} 
int = {'Medical Device Clinical Study Design, Clinical Effectiveness Evaluation, Medical Regulatory Affairs'}
con = {'chy980423@naver.com / hyeong0423@yonsei.ac.kr'}/>



<StudentLayout 
course = {'MS course'}
photo = {JiminPhoto}
name = {'Jimin Son'}
EName = {null} 
edu1 = {'Bachelor in Biomedical Engineering, Dongguk University (2021)'} 
edu2 = {null} 
int = {'Medical Device Clinical Study Design, Medical Regulatory Affairs'}
con = {'wlals2qj@naver.com / jmson1707@yonsei.ac.kr'}
rphoto={BarImgStu}/>

<StudentLayout 
lphoto={BarImgStu}
course = {'MS course'}
photo = {KanghyeonPhoto}
name = {'Kanghyeon You'}
EName = {null} 
edu1 = {'Bachelor in Healthcare Industry, Cha University (2021)'} 
edu2 = {null} 
int = {'Medical Device Industry Policy, Medical Regulatory Affairs'}
con = {'hap2boy@naver.com / hap2boy@yonsei.ac.kr'}/>

<StudentLayout 
course = {'MS course'}
photo = {JeonghwaPhoto}
name = {'Jeonghwa Lim'}
EName = {null} 
edu1 = {'Bachelor in Biomedical Engineering, Yonsei University (2021)'} 
edu2 = {null} 
int = {'Bio-signal processing, AI & Deep learning'}
con = {'lim9234@hanmail.net'}
rphoto={BarImgStu}/>

<StudentLayout 
lphoto={BarImgStu}
course = {'MS course'}
photo = {ChanghyunPhoto}
name = {'Changhyun Lim'}
EName = {null} 
edu1 = {'Bachelor in Healthcare Industry, Cha University (2021)'} 
edu2 = {null} 
int = {'Medical Device Clinical Study Design, Clinical Effectiveness Evaluation, Medical Regulatory Affairs'}
con = {'julius1231@naver.com'}/>


<StudentLayout 
course = {'MS course'}
photo = {GyeongminPhoto}
name = {'Gyeongmin Kwon'}
EName = {null} 
edu1 = {'Bachelor in Korean language and literature, Yonsei University(2020)'} 
edu2 = {null} 
int = {'Usability/Human Factors Engineering, Medical Regulatory Affairs'}
con = {'kdskkm12@naver.com'}
rphoto={BarImgStu}/>


<StudentLayout 
lphoto={BarImgStu}
course = {'MS course'}
photo = {SehoPhoto}
name = {'Seho Kim'}
EName = {null} 
edu1 = {'Bachelor in Life science, Dongguk University(2022)'} 
edu2 = {null} 
int = {'Medical Device Clinical Study Design, Clinical Effectiveness Evaluation'}
con = {'shkim2022@yonsei.ac.kr'}/>  


<StudentLayout 
course = {'MS course'}
photo = {SeungheePhoto}
name = {'Seunghee Kim'}
EName = {null} 
edu1 = {'Bachelor in Healthcare Industry, Cha University (2021)'} 
edu2 = {null} 
int = {'Usability/Human Factors Engineering, Medical Device Industry Policy'}
con = {'sshee0710@naver.com'}
rphoto={BarImgStu}/>



<StudentLayout 
lphoto={BarImgStu}
course = {'MS course'}
photo = {YujeongPhoto}
name = {'Yujeong Ma'}
EName = {null} 
edu1 = {`Bachelor in Chemistry, Duksung Women's University(2022)`} 
edu2 = {null} 
int = {'Medical Device Clinical Study Design, Clinical Effectiveness Evaluation'}
con = {'lemontree1235@naver.com'}/>

<StudentLayout 
lphoto={BarImgStu}
course = {'MS / Ph.D course'}
photo = {JiyongPhoto}
name = {'Jiyong Chung'}
EName = {null} 
edu1 = {'Bachelor in Computer Engineering, Tech University of Korea (2022)'} 
edu2 = {null} 
int = {'Bio-signal processing, AI & Deep learning, Usability/Human Factors Engineering'}
con = {'cowjy0427@yonsei.ac.kr'}/>


<div className="stu-profile">

</div>

</>

      :
      
      select === 'Student' && selectStudent ==='Ph.D course'?
        <>
          <div className="stu-header" >
             <div className="stu-title">
               Students {to} Ph.D course
            </div>
          </div>
       

         <StudentLayout 
              
              course = {'Ph.D course'}
              photo = {YourimPhoto}
              name = {'Yourim Kim'}
              EName = {null} 
              edu1 = {'Master in Medical Device Engineering & Management (2020)'} 
              edu2 = {'Bachelor in Biomedical Engineering, Konkuk University (2017)'} 
              int = {'Medical Device Clinical Study Design, Clinical Effectiveness Evaluation'}
              con = {'yxxrm_k@naver.com / yxxrmk@yonsei.ac.kr'}
              rphoto={BarImgStu}/>
              
         <div className="stu-profile">
     
        </div>
          
         
        </>
        :

        selectStudent==='MS/Ph.D course'?
        <>
          <div className="stu-header" >
             <div className="stu-title">
               Students {to} MS/Ph.D course
            </div>
          </div>
       <StudentLayout
       
       course = {'MS / Ph.D course'}
        photo = {SangeunPhoto}
        name = {'Sangeun Park'}
        EName = {null} 
        edu1 = {'Bachelor in Biomedical Engineering, Yonsei University (2018)'} 
        edu2 = {null} 
        int = {'UX/UI Design, Android Programming, Usability/Human Factors Engineering '}
        con = {'pse7036@naver.com / sang-eun.park@yonsei.ac.kr'}
        rphoto={BarImgStu}/>

      <StudentLayout 
        lphoto={BarImgStu}
        course = {'MS / Ph.D course'}
        photo = {HyeonkyeongPhoto}
        name = {'Hyeonkyeong Choi'}
        EName = {null} 
        edu1 = {'Bachelor in Healthcare Industry, Cha University (2021)'} 
        edu2 = {null} 
        int = {'UX/UI Design, Usability/Human Factors Engineering'}
        con = {'hyeonkyeong97@daum.net / hyeonk@yonsei.ac.kr'}/>

      <StudentLayout 
        course = {'MS / Ph.D course'}
        photo = {JiyongPhoto}
        name = {'Jiyong Chung'}
        EName = {null} 
        edu1 = {'Bachelor in Computer Engineering, Tech University of Korea (2022)'} 
        edu2 = {null} 
        int = {'Bio-signal processing, AI & Deep learning, Usability/Human Factors Engineering'}
        con = {'cowjy0427@yonsei.ac.kr'}
        rphoto={BarImgStu}
        />
     
        <div className="stu-profile">
     
        </div>
      
        
        </>

        :
        selectStudent==='MS course'?
        <>
         <div className="stu-header" >
             <div className="stu-title">
               Students {to} MS course
            </div>
          </div>
        <StudentLayout 
        course = {'MS course'}
        photo = {ChoroPhoto}
        name = {'Choro Choi'}
        EName = {null} 
        edu1 = {'Bachelor in Biomedical Engineering, Yonsei University (2020)'} 
        edu2 = {null} 
        int = {'Signal & Image processing, AI & Deep learning, Programming, UI design'}
        con = {'hisstoryxx@gmail.com / chororo@yonsei.ac.kr'}
        rphoto={BarImgStu}/>


        <StudentLayout 
       lphoto={BarImgStu}
       course = {'MS course'}
       photo = {SeulbiPhoto}
       name = {'Seulbi Lee'}
       EName = {null} 
        edu1 = {'Bachelor in Biomedical Engineering, Yonsei University (2021)'} 
        edu2 = {null} 
        int = {'Medical Device Clinical Study Design, Clinical Effectiveness Evaluation'}
        con = {'bee5747@naver.com / bee5747@yonsei.ac.kr'}/>


        <StudentLayout 
       course = {'MS course'}
       photo = {JiyunPhoto}
       name = {'Jiyun Jeong'}
       EName = {null} 
        edu1 = {'Bachelor in Biomedical Engineering, Yonsei University (2014)'} 
        edu2 = {null} 
        int = {'Usability/Human Factors Engineering'}
        con = {'ravissante25@gmail.com / jiyunj@yonsei.ac.kr'}
        rphoto={BarImgStu}/>

       <StudentLayout 
       lphoto={BarImgStu}
       course = {'MS course'}
       photo = {HeeyoungPhoto}
       name = {'Heeyeong Choi'}
       EName = {null} 
        edu1 = {'Bachelor in Biomedical Engineering, Yonsei University (2021)'} 
        edu2 = {null} 
        int = {'Medical Device Clinical Study Design, Clinical Effectiveness Evaluation, Medical Regulatory Affairs'}
        con = {'chy980423@naver.com / hyeong0423@yonsei.ac.kr'}/>

        <StudentLayout 
       course = {'MS course'}
       photo = {JiminPhoto}
       name = {'Jimin Son'}
       EName = {null} 
        edu1 = {'Bachelor in Biomedical Engineering, Dongguk University (2021)'} 
        edu2 = {null} 
        int = {'Medical Device Clinical Study Design, Medical Regulatory Affairs'}
        con = {'wlals2qj@naver.com / jmson1707@yonsei.ac.kr'}
        rphoto={BarImgStu}/>

        <StudentLayout 
      lphoto={BarImgStu}
      course = {'MS course'}
      photo = {KanghyeonPhoto}
      name = {'Kanghyeon You'}
      EName = {null} 
        edu1 = {'Bachelor in Healthcare Industry, Cha University (2021)'} 
        edu2 = {null} 
        int = {'Medical Device Industry Policy, Medical Regulatory Affairs'}
        con = {'hap2boy@naver.com / hap2boy@yonsei.ac.kr'}/>


      <StudentLayout 
        course = {'MS course'}
        photo = {JeonghwaPhoto}
        name = {'Jeonghwa Lim'}
        EName = {null} 
        edu1 = {'Bachelor in Biomedical Engineering, Yonsei University (2021)'} 
        edu2 = {null} 
        int = {'Bio-signal processing, AI & Deep learning'}
        con = {'lim9234@hanmail.net'}
        rphoto={BarImgStu}/>

      <StudentLayout 
        lphoto={BarImgStu}
        course = {'MS course'}
        photo = {ChanghyunPhoto}
        name = {'Changhyun Lim'}
        EName = {null} 
        edu1 = {'Bachelor in Healthcare Industry, Cha University (2021)'} 
        edu2 = {null} 
        int = {'Medical Device Clinical Study Design, Clinical Effectiveness Evaluation, Medical Regulatory Affairs'}
        con = {'julius1231@naver.com'}/>

      
<StudentLayout 
course = {'MS course'}
photo = {GyeongminPhoto}
name = {'Gyeongmin Kwon'}
EName = {null} 
edu1 = {'Bachelor in Korean language and literature, Yonsei University(2020)'} 
edu2 = {null} 
int = {'Usability/Human Factors Engineering, Medical Regulatory Affairs'}
con = {'kdskkm12@naver.com'}
rphoto={BarImgStu}/>


<StudentLayout 
lphoto={BarImgStu}
course = {'MS course'}
photo = {SehoPhoto}
name = {'Seho Kim'}
EName = {null} 
edu1 = {'Bachelor in Life science, Dongguk University(2022)'} 
edu2 = {null} 
int = {'Medical Device Clinical Study Design, Clinical Effectiveness Evaluation'}
con = {'shkim2022@yonsei.ac.kr'}/>  


<StudentLayout 
course = {'MS course'}
photo = {SeungheePhoto}
name = {'Seunghee Kim'}
EName = {null} 
edu1 = {'Bachelor in Healthcare Industry, Cha University (2021)'} 
edu2 = {null} 
int = {'Usability/Human Factors Engineering, Medical Device Industry Policy'}
con = {'sshee0710@naver.com'}
rphoto={BarImgStu}/>



<StudentLayout 
lphoto={BarImgStu}
course = {'MS course'}
photo = {YujeongPhoto}
name = {'Yujeong Ma'}
EName = {null} 
edu1 = {`Bachelor in Chemistry, Duksung Women's University(2022)`} 
edu2 = {null} 
int = {'Medical Device Clinical Study Design, Clinical Effectiveness Evaluation'}
con = {'lemontree1235@naver.com'}/>


<div className="stu-profile">

</div>

         
         </>
         
         :
        selectStudent==='Intern'?
         <>
          <div className="stu-header" >
             <div className="stu-title">
             Students {to} Intern
            </div>
          </div>
           <Intern/>

         </>
         :

         null

         
         
  }


    </div>
      
      
      
   
  )
 
} 
{/* /* return (   

    <div className="student" >
      { select === 'Student' ? 
      <>
    {all}
      </>
      :
       selectStudent === 'Ph.D course' ?
          <>
        {ph}
        </>
        :
          selectStudent === 'MS/Ph.D course' ?
          {msph}
                  :
                selectStudent === 'MS course' ?
                    {ms}

                        :
      
                    <Intern/>
                  }
      
   
  
    </div>
  )*/



/*selectStudent === 'Ph.D course' ?

{ph}

:
selectStudent === 'MS/Ph.D course' ?
{msph}
:
selectStudent === 'MS course' ?
{ms}

                :*/ }