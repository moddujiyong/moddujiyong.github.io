import "./introduce.scss";
import IntroduceImg from "../img/mddu_design.png";
import BarImg from "../img/design_bar.png";
export default function Introduce() {

  const introText='We view healthcare through a human factors lens. \n Our team designs and evaluates health products \n and services to address the complexity of human \n behaviour and create experiences that are both \n seamless and safe.'
  return (
    <div className="introduce">
        <div className="introduceSet">
             <div className="introLeft">
                <img className="introduceImg" src={IntroduceImg} alt=""/>
            </div>

            <div className="introRight">
                <span className="introduceInfo">Medical Device Design & Usability Lab (MDDU)</span>
                <span className="introText">{introText}</span>
                
                
              </div>
              <img className="barImg" src={BarImg} alt="" />
        </div>
      
    </div>
  )
}
