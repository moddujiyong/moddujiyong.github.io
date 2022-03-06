import React from 'react';
import "./top.scss";

import Logo_Design from '../img/Logo Design.png'
export default function Top(){
    return(
        <div className="top">
            <div className="topSet">
                <div className="topLeft">
           
                    <img className="topImg" src={Logo_Design} alt=""/> 
          
                </div>    
                        
                <div className="topCenter">
                    <ul className="topList">
                     <li className="topListItem">Introduction</li>
                     <li className="topListItem">Members</li>
                     <li className="topListItem">Research</li>
                     <li className="topListItem">Publication</li>
                     <li className="topListItem">Board</li>
                    </ul>
                  
                 </div>
                 <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
            
        </div>
    )
}