import React from 'react'
import Map from '../../components/map/Map'
import "./contact.scss"
import {RiMapPin2Fill} from "react-icons/ri";
import {MdContactMail} from "react-icons/md";
import {MdPersonSearch} from "react-icons/md";
import { FaGraduationCap} from "react-icons/fa";
export default function contact() {

   const toHomepage = () => {
      window.location.href='http://mdi.yonsei.ac.kr/'

      return false
  }


  return (
    <div className="contact">
       <div className="contactLeft">
            
       </div>

       <div className="contactRight">
        
        
            <div className="contact-header">
              Contact
            </div>
         <div className="contact-content">
            <div className="google_Map">
                <Map/>
            </div>

            <div className="address">
               
               <span className="address_title"><RiMapPin2Fill className="address_icon"/>Address</span>
               <span className="address_content">B1, 20, Eonju-ro 63-gil, Gangnam-gu, Seoul, Republic of Korea</span>
            </div>

            <div className="email">
               <span className="email_title"><MdContactMail className="email_icon"/>Email</span>
               <span className="email_content">mddu.lab.yonsei@gmail.com</span>
            </div>

            <div className="application">
               <span className="application_title"><MdPersonSearch className="application_icon"/>Application</span>
               <span className="application_content">Interns - Opening per semester </span>
               <span className="application_content">Graduate students - No openings for now </span>
               <span className="application_content">Requirements - CV & Academic Record (recommended) </span>
            </div>

            <div className="department">
               <span className="department_title"><FaGraduationCap className="department_icon"/>Department</span>
               <span className="department_content">Dept. of Medical Device Engineering & Management</span>
               <span className="department_content_mdi"  onClick={toHomepage} > http://mdi.yonsei.ac.kr/</span>
            </div>
        </div>
       </div>

     
    </div>
  )
}
