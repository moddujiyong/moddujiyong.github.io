import React, {useState} from 'react';
import './toggle.scss';
import {Link} from "react-router-dom";
import Toggle_Icon from '../img/icon-toggle.PNG'
export default function Toggle(){
    
 
    return (
        <div className="toggle">
           <div className="toggleSet">
               <div className="toggleContainer">
                 <ul className="toggleList">
                    <li className="toggleListItemTitle">MENU</li>
                    <li className="toggleListItem"><Link className="link" to ="/members" >Members</Link></li>
                    <li className="toggleListItem"><Link className="link" to ="/research">Research</Link></li>
                    <li className="toggleListItem"><Link className="link" to ="/publication">Publication</Link></li>
                    <li className="toggleListItem"><Link className="link" to ="/contact">Contact</Link></li>
                    <li className="toggleListItem"><Link className="link" to ="/gallery" >Gallery</Link></li>
                 </ul>
               </div>
          

           </div>
           
          
        </div>
    )
}