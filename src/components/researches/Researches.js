import "./researches.scss";
import researchImg from "../img/Logo Design.png";
export default function Researches() {
  return (
    <div className="researches">
      <div className="researchesInfo">
         
          <div className="researchesLeft">
                <span className="researchesTitle">Clinical Study Design</span>
                <img className="researchesImg" src={researchImg} alt=""/>
              
         </div>

          <div className="researchesCenter">
               <span className="researchesTitle">UX/UI Design & Usability</span>
              <img className="researchesImg" src={researchImg} alt=""/>
             
          </div>

          <div className="researchesRight">
            <span className="researchesTitle">Medical Industry Policy</span> 
             <img className="researchesImg" src={researchImg} alt=""/>  
            
              
          </div>
       
      </div>
    </div>
  )
}
