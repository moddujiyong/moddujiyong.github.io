import React, {useState} from 'react';
import {Link} from "react-router-dom";
import "./sidetoggle.scss";


const [isOpen, setMenu]=useState(false);

const toggleMenu=()=>{
    setMenu(isOpen=>!isOpen);
}


export default function SideToggle(){

    return (
        <div className="side-toggle">
            <div className='toggle-click' onClick={toggleMenu}>Click</div>
            <div className="toggle-list">
                <ul className="sideList">
                     <li className="toggleListItem"><Link className="link" to ="/members" >Members</Link></li>
                     <li className="toggleListItem"><Link className="link" to ="/research">Research</Link></li>
                     <li className="toggleListItem"><Link className="link" to ="/publication">Publication</Link></li>
                     <li className="toggleListItem"><Link className="link" to ="/contact">Contact</Link></li>
                     <li className="toggleListItem"><Link className="link" to ="/gallery" >Gallery</Link></li>
                </ul>
            </div>
        </div>
    )
}