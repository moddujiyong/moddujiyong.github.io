import React from 'react'
import Map from '../../components/map/Map'
import "./contact.scss"


export default function contact() {
  return (
    <div className="contact">
       <div className="contactLeft">
            .
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
               <span className="address_title">Address</span>
               <span className="address_content">B1, 20, Eonju-ro 63-gil, Gangnam-gu, Seoul, Republic of Korea</span>
            </div>

            <div className="email">
               <span className="email_title">Email</span>
               <span className="email_content">mddu.lab.yonsei@gmail.com</span>
            </div>

            <div className="application">
               <span className="application_title">Application</span>
               <span className="application_content">Intern - Opening per semester </span>
               <span className="application_content">Graduate students - No openings for now </span>
               <span className="application_content">Requirements - CV & Academic Record (recommended) </span>
            </div>

            <div className="department">
               <span className="department_title">Department</span>
               <span className="department_content">Dept. of Medical Device Engineering & Management</span>
               <span className="department_content"> http://mdi.yonsei.ac.kr/</span>
            </div>
        </div>
       </div>

     
    </div>
  )
}
