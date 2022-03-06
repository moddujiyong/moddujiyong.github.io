import "./introduce.scss";
import IntroduceImg from "../img/mddu_design.png";
export default function Introduce() {
  return (
    <div className="introduce">
        <div className="introduceSet">
             <div className="introLeft">
                <img className="introduceImg" src={IntroduceImg} alt=""/>
            </div>

            <div className="introRight">
                <span className="introduceInfo">의료기기 설계 및 사용적합성 연구실(MDDU)</span>

        </div>

        </div>
      
    </div>
  )
}
