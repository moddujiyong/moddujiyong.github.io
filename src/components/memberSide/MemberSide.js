import React from 'react'
import {useState} from 'react';
import "./memberSide.scss"
export default function MemberSide() {

  const [mem,memfunc]=useState(['Professor','Students','Alumni']);

  const memProf=()=>{
    memfunc(mem);
    
  }

  return (
    <div className="memberSide">
       <div className='title_member'>
          Member
       </div>

      <div className="memberList">
        <button onClick={memProf}>Professor</button>
   
      </div>

    </div>
  )
}
/*<ul className="memberContent">
<li className="memberListItem">Professor</li>
<li className="memberListItem">Students</li>
<li className="memberListItem">Alumni</li>

</ul>
*/