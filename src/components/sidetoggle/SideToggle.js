import React, {useState} from 'react';
import {Link} from "react-router-dom";
import "./sidetoggle.scss";


export default function SideToggle(){
    return (
      <div className="toggleCenter">
         <ul className="toggleList">
                    
                    <li className="toggleListItem"><Link className="link" to ="/members" >Members</Link></li>
                    <li className="toggleListItem"><Link className="link" to ="/research">Research</Link></li>
                    <li className="toggleListItem"><Link className="link" to ="/publication">Publication</Link></li>
                    <li className="toggleListItem"><Link className="link" to ="/contact">Contact</Link></li>
                    <li className="toggleListItem"><Link className="link" to ="/gallery" >Gallery</Link></li>
            </ul>
      </div>
           

    )
}