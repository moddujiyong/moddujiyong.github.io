import { faBlackberry } from '@fortawesome/free-brands-svg-icons'
import React,{useState} from 'react'
import "./memberSide.scss"
export default function MemberSide({ select, setSelect} ) {


  const [color,setColor]=useState('');
  
  

  const clickPro = () => {
    setSelect('Professor') 
    if(color==='#707070'){
      setColor('black')
    }
      else{
        setColor('#707070')
      }
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
          <li className="memberListItem" onClick={clickPro} >professor</li>
          <li className="memberListItem" onClick={clickStu}  >Students</li>
          <li className="memberListItem" onClick={clickStaffs}>Staffs</li>
          <li className="memberListItem" onClick={clickAlu} >Alumni</li>
        </ul>
      </div>

    </div>
  )
}
