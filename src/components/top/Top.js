import React, {useState} from 'react';
import {IoIosSearch} from "react-icons/io";
import "./top.scss";
import {Link} from "react-router-dom";
import Logo_Design_Eng from '../img/Logo_sizeAdj_new.png'
import Toggle_Icon from '../img/icon_toggle.png'
import {HiMenu} from 'react-icons/hi'

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
                 <div className="topToggle"> 
                   {isOpen===true ? 
                   <div className="toggle">
                     <div className="toggleSet">
                        <div className="toggleContainer">
                          <ul className="toggleList">
                            <li className="toggleListItemTitle">MENU</li>
                            <li className="toggleListItem" onClick={()=>setMenu(!isOpen)}><Link className="link" to ="/members">Members</Link></li>
                            <li className="toggleListItem" onClick={()=>setMenu(!isOpen)}><Link className="link" to ="/research">Research</Link></li>
                            <li className="toggleListItem" onClick={()=>setMenu(!isOpen)}><Link className="link" to ="/publication">Publication</Link></li>
                            <li className="toggleListItem" onClick={()=>setMenu(!isOpen)}><Link className="link" to ="/contact">Contact</Link></li>
                            <li className="toggleListItem" onClick={()=>setMenu(!isOpen)}><Link className="link" to ="/gallery" >Gallery</Link></li>
                          </ul>
                        </div>
                     </div>
                    </div>
                   
                   :null}
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
          
               
            </div>
        
            
            
        </div>
      
    )
}