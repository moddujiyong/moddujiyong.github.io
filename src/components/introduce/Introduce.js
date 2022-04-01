import "./introduce.scss";
import IntroduceImg from "../img/vision.jpg";
import BarImg from "../img/design_bar.png";
export default function Introduce() {

  const introText='We view healthcare through Clinical Study Design, UX/UI Desing & Usability, Medical Industry Policy and Bio-Signal Processing & AI. \nWe do Design & Development and Research & Evaluation focusing on Practical Healthcare Industry within Medical Device Regulation.';
  return (
    <div className="introduce">
        <div className="introduceSet">
          <div className="intro-container">
            <div className="introLeft">
                <img className="introduceImg" src={IntroduceImg} alt=""/>
            </div>

            <div className="introRight">
               
                <span className="introText">
                      {introText}
                  </span>

                
              </div>

          </div>
          
              
        </div>
      
    </div>
  )
}
