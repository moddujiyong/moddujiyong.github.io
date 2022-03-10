import React from 'react';
import "./top.scss";
import {Link} from "react-router-dom";
import Logo_Design_Eng from '../img/Logo Design_Eng.png'
export default function Top(){
    return(
        <div className="top">
             <div className="topSet">
                 
                 <div className="topLeft">
           
                   <Link to="/"><img className="topImg" src={Logo_Design_Eng} alt=""></img> </Link> 
                   <i className="topSearchIcon fa-solid fa-magnifying-glass">Search</i>
                  
                 </div>    
                
                <div className="topCenter">
                    <ul className="topList">
                     <li className="topListItem"><Link className="link" to ="/introduction">Introduction</Link></li>
                     <li className="topListItem"><Link className="link" to ="/members" >Members</Link></li>
                     <li className="topListItem"><Link className="link" to ="/research">Research</Link></li>
                     <li className="topListItem"><Link className="link" to ="/publication">Publication</Link></li>
                     <li className="topListItem"><Link className="link" to ="/contact">Contact</Link></li>
                 
                    </ul>
                   
                 </div> 
                
            </div>
            
            
         
            
        </div>
    )
}