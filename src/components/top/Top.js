import React from 'react';
import {IoIosSearch} from "react-icons/io";
import "./top.scss";
import {Link} from "react-router-dom";
import Logo_Design_Eng from '../img/Logo_sizeAdj_new.png'
import SideToggle from '../sidetoggle/SideToggle';
export default function Top(){
   /* <IoIosSearch className="topSearchIcon"/>
    <div className="searchText">

        Search
      
    </div>*/
    return(
        <div className="top">
             <div className="topSet">
                 
                 <div className="topLeft">
                   <Link to="/"><img className="topImg" src={Logo_Design_Eng} alt=""></img> </Link> 
                   
                
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