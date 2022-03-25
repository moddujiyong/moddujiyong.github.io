import { faBlackberry } from '@fortawesome/free-brands-svg-icons'
import React,{useState} from 'react'
import "./memberSide.scss"
export default function MemberSide({ select, setSelect} ) {


  const clickPro = () => {
    setSelect('Professor') 
   
  }

  const clickStu = () => {
    setSelect('Student')
  
  }

  const clickStaffs=()=>{
    setSelect('Staffs')
  
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
          <li className="memberListItem" onClick={clickPro} style={{color: select === 'Professor' ? 'black' : 'grey'}}  >Professor</li>
          <li className="memberListItem" onClick={clickStu} style={{color: select === 'Student' ? 'black' : 'grey'}} >Students</li>
          <li className="memberListItem" onClick={clickStaffs}style={{color: select === 'Staffs' ? 'black' : 'grey'}}>Staffs</li>
          <li className="memberListItem" onClick={clickAlu} style={{color: select === 'Alumni' ? 'black' : 'grey'}}>Alumni</li>
        </ul>
      </div>

    </div>
  )
}
