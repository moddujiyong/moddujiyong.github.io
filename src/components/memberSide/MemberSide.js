import React from 'react'
import "./memberSide.scss"
export default function MemberSide() {
  return (
    <div className="memberSide">
       <div className='title_member'>
          Member
       </div>

      <div className="memberList">
      <ul className="memberContent">
        <li className="memberListItem">Professor</li>
        <li className="memberListItem">Students</li>
        <li className="memberListItem">Alumni</li>
 
      </ul>
        
      </div>

    </div>
  )
}
