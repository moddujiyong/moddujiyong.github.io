import React,{useEffect, useState} from 'react'

import "./members.scss"
import MemberSide from "./memberSide/MemberSide"
import Professor from './professor/Professor';
import Student from './student/Student';
import Staffs from './staffs/Staffs';
import Alumni from './alumni/Alumni';
export default function Members() {

  const [select,setSelect]=useState('Professor');

  const [selectStudent,setSelectStudent]=useState()

  const [page, setPage] = useState('')

  console.log(select)

  
  useEffect(() => {

    if(select === 'Alumni') {
      setPage('Alumni')
        
      
    } else if (select === 'Student'){
      setPage('Student')
    } else if (select === 'Staffs') {
      setPage('Staffs')
      
    }
    else{
      setPage('Professor')
    }
  },[select])
    


    
    return (
    
      <div className="members">
        
          <div className="membersLeft">
          <MemberSide select={select} setSelect={setSelect} selectStudent = {selectStudent }   setSelectStudent = {setSelectStudent}  />
        </div>
      
        {select === 'Alumni' ?
          <>
       
        <div className="membersRight">
          <Alumni/>
        </div>
        </>

        :
            select === 'Student'?
            
           
            <div className="membersRight">
              
            <Student selectStudent = {selectStudent }   setSelectStudent = {setSelectStudent} />
            </div>
            
              :
               select === 'Staffs'?
                 
                <div className="membersRight">
                <Staffs/>
                </div>
                
                :
                <div className="membersRight">
                <Professor/>
                </div>
        } 
        
        
      </div>
     
    )
  }
  