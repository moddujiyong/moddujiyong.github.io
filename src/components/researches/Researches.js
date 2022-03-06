import "./researches.scss";
import researchImg from "../img/Logo Design.png";
export default function Researches() {
  return (
    <div className="researches">
      <div className="researchInfo">
         
          <div className="researchLeft">
                <img className="researchImg" src={researchImg} alt=""/>
                <span className="researchTitle">Clinical Study Design</span>
         </div>

          <div className="researchCenter">
              <img className="researchImg" src={researchImg} alt=""/>
              <span className="researchTitle">UX/UI Design & Usability</span>
          </div>

          <div className="researchRight">
             <img className="researchImg" src={researchImg} alt=""/>  
             <span className="researchTitle">Medical Industry Policy</span> 
              
          </div>
       
      </div>
    </div>
  )
}
