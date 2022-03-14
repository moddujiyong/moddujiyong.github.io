import React,{useEffect, useState} from 'react'
import Header from '../../components/header/Header';
import Researches from '../../components/researches/Researches';
import Research from '../research/Research';
import "./members.scss"
import MemberSide from "./memberSide/MemberSide"
export default function Members() {

  const [select,setSelect]=useState('');

  const [page, setPage] = useState('')

  console.log(select)

  
  useEffect(() => {

    if(select === 'Professor') {
      setPage('Professor')
        
      
    } else if (select === 'Student'){
      setPage('Student')
    } else {
      setPage('Alumni')
    }
  },[select])
    


    
    return (
    
      <div className="members">
        
          <div className="membersLeft">
          <MemberSide select={select} setSelect={setSelect}/>
        </div>
      
        {select === 'Professor' ?
          <>
       
        <div className="membersRight">
         {page}
        </div>
        </>

        :
            select === 'Student'?
            <>
           
            <div className="membersRight">
            {page}
            </div>
            </>
            :
            <>
            <div className="membersRight">
            {page}
            </div>
            </>
        } 
        
        
      </div>
     
    )
  }
  