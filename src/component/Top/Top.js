import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from './top.module.css'
import { useState } from "react";

const Top = () => {

    const [toggle, setToggle] = useState(false);

    const barClick = () => {
        setToggle(!toggle);
        
    }
    return (
        <div style = {{position : "relative", padding : "0 2rem"}}>
            <div style = {{display : "flex",flexDirection:'column', }}>
            {/* <div style = {{ flex : "100px 0 0"}}>
            <img src = "/images/LogoDesign_Eng.png" alt ="logo"/>
            로고 텍스트 이미지

            </div> */}

            <div className = {styles.navbar}>
                <div class = {styles.logo}>
                    <a href= "#">web dev creates</a>
                </div>
                <ul class = {styles.links}>
                    <li><a href = "#">Home</a></li>
                    <li><a href = "about" >About</a></li>
                    <li><a href = "services"> Services</a></li>
                    <li><a href = "contact">Contact</a></li>
                    
                </ul>
                <a href = "#" className={styles.action_btn}>get started</a>
                <div className = {styles.togle_btn} onClick = {() => barClick()}>
                 {toggle ? 
                 <FontAwesomeIcon icon={faXmark} />
                 :
                 <FontAwesomeIcon icon={faBars} />
                 }

                </div>
            </div>

            <div className ={toggle ? styles.dropDownMenuOpen : styles.dropDownMenu}>
            <li><a href = "#">Home</a></li>
                    <li><a href = "about" >About</a></li>
                    <li><a href = "services"> Services</a></li>
                    <li><a href = "contact">Contact</a></li>
                    <li><a href = "#" className={styles.action_btn}>get started</a></li>
            </div>

      
            <style jsx>{`
            
                li {
                    list-style: none;
                }

                a {
                    text-decoration: none;
                    color : #fff;
                    font-size: 1rem
                }
                a:hover {
                    color: pink;
                }

             
                            `}

            </style>


           
            </div>
           
        </div>
    )
}

export default Top;