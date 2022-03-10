import "./researches.scss";
import researchImg from "../img/Logo Design.png";
export default function Researches() {
  return (
    <div className="researches">
      <div className="researchesInfo">
         
          <div className="researchesLeft">
                <img className="researchesImg" src={researchImg} alt=""/>
                <span className="researchesTitle">Clinical Study Design</span>
         </div>

          <div className="researchesCenter">
              <img className="researchesImg" src={researchImg} alt=""/>
              <span className="researchesTitle">UX/UI Design & Usability</span>
          </div>

          <div className="researchesRight">
             <img className="researchesImg" src={researchImg} alt=""/>  
             <span className="researchesTitle">Medical Industry Policy</span> 
              
          </div>
       
      </div>
    </div>
  )
}
