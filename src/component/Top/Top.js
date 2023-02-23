import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from './top.module.css'

const Top = () => {

    return (
        <div>
            <div style = {{display : "flex",flexDirection:'column', }}>
            <div style = {{ flex : "100px 0 0"}}>
            <img src = "/images/LogoDesign_Eng.png" alt ="logo"/>
            로고 텍스트 이미지

            </div>

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
                <div className = {styles.togle_btn}>
                <FontAwesomeIcon icon={faBars} />
                </div>
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

                header{
                    position : relative;
                    padding : 0 2rem;
                }
                            `}

            </style>
           
            </div>
           
        </div>
    )
}

export default Top;