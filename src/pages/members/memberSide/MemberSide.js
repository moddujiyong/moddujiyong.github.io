import React from 'react'
//import {useState} from 'react';
import "./memberSide.scss"
export default function MemberSide({ select, setSelect} ) {

 
  const clickPro = () => {
    setSelect('Professor')
  }

  const clickStu = () => {
    setSelect('Student')
  }
  

  const clickAlu = () => {
    setSelect('Alumni')
  }
  


  return (
    <div className="memberSide">
       <div className='title_member'>
          Members
        <div className="title_border">
            <div className="title_left">
              
            </div>
            <div className="title_right">
              
            </div>
        </div>  
         
       </div>

      <div className="memberList">
        <ul className="memberContent">
          <li className="memberListItem" onClick={clickPro}>Professor</li>
          <li className="memberListItem" onClick={clickStu}>Student</li>
          <li className="memberListItem" onClick={clickAlu}>Alumni</li>
        </ul>
      </div>

    </div>
  )
}
/*<ul className="memberContent">
<li className="memberListItem">Professor</li>
<li className="memberListItem">Students</li>
<li className="memberListItem">Alumni</li>
</ul>*/