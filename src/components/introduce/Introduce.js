import "./introduce.scss";
import IntroduceImg from "../img/vision.jpg";
import BarImg from "../img/design_bar.png";
export default function Introduce() {

  const introText='We view healthcare through a CLINICAL STUDY DESIGN, UX/UI DESIGN & USABILITY, MEDICAL INDUSTRY POLICY and BIO-SIGNAL PROCESSING & AI lens. \n Our team do Design&Development and Research& Evaluation focusing on Practical Healthcare Industry within Medical Device Regulation.';
  return (
    <div className="introduce">
        <div className="introduceSet">
          <div className="intro-container">
          <div className="introLeft">
                <img className="introduceImg" src={IntroduceImg} alt=""/>
            </div>

            <div className="introRight">
                <span className="introduceInfo">Medical Device Design & Usability Lab (MDDU)</span>
                <span className="introText">
                      {introText}
                  </span>

                
              </div>

          </div>
          
              <img className="barImg" src={BarImg} alt="" />
        </div>
      
    </div>
  )
}
