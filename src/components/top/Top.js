import React, {useState} from 'react';
import {IoIosSearch} from "react-icons/io";
import "./top.scss";
import {Link} from "react-router-dom";
import Logo_Design_Eng from '../img/Logo_sizeAdj_new.png'
import Toggle_Icon from '../img/icon-toggle.PNG'
import {AiOutlineBars} from 'react-icons/ai'
import Toggle from '../toggle/Toggle'
export default function Top(){
  //  {isOpen===true ? <SideToggle/> :null}
 // <div className='toggle-click' onClick={()=>{setMenu(!isOpen)}}>
//  <AiOutlineBars />
 
    const [isOpen,setMenu]=useState(false);
    return(
        <div className="top">
          
             <div className="topSet">
            
                 <div className="topLeft">
                   <Link to="/"><img className="topImg" src={Logo_Design_Eng} alt=""></img> </Link> 
                   <img className="icon-toggle" onClick={()=>{setMenu(!isOpen)}} src={Toggle_Icon} alt=""></img>
                
                 </div>    
                 <div className="topCenter">
                 <ul className="topList">
                    
                    <li className="topListItem"><Link className="link" to ="/members" >Members</Link></li>
                    <li className="topListItem"><Link className="link" to ="/research">Research</Link></li>
                    <li className="topListItem"><Link className="link" to ="/publication">Publication</Link></li>
                    <li className="topListItem"><Link className="link" to ="/contact">Contact</Link></li>
                    <li className="topListItem"><Link className="link" to ="/gallery" >Gallery</Link></li>
                </ul>
             
              </div>
          
              <div className="topToggle"> 
              {isOpen===false ? <Toggle/> :null}
              </div>
               
            </div>
        
            
            
        </div>
        
    )
}