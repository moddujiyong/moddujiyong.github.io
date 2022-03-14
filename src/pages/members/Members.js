import React,{useEffect, useState} from 'react'
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
        <div className="membersRight">
        
         <p>{page}</p>

        
        </div>
        
      </div>
    )
  }
  