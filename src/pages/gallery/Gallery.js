import React from 'react'
import GalleryPhoto1 from "../../components/img/elec2020_1.jpg";
import GalleryPhoto2 from "../../components/img/elec2020_2.jpg";
import GalleryPhoto3 from "../../components/img/elec2021_1.jpg";
import GalleryPhoto4 from "../../components/img/elec2021_2.jpg";
import GalleryPhoto5 from "../../components/img/iceic2022_1.jpg";
import GalleryPhoto6 from "../../components/img/iceic2022_2.jpg";
import GalleryPhoto7 from "../../components/img/iceic2022_3.jpg";
import GalleryPhoto8 from "../../components/img/iceic2022_4.jpg";
import GalleryPhoto9 from "../../components/img/jeju2021_1.JPG";
import GalleryPhoto10 from "../../components/img/kimes2018.jpg";
import GalleryPhoto11 from "../../components/img/kimes2021_1.jpg";
import GalleryPhoto12 from "../../components/img/mddu2021_1.JPG";
import GalleryPhoto13 from "../../components/img/mddu2020_1.jpg";
import GalleryPhoto14 from "../../components/img/mddu2020_2.jpg";
import GalleryPhoto15 from "../../components/img/202207jeju1.jpg";
import GalleryPhoto16 from "../../components/img/202207jeju2.jpg";

import "./gallery.scss"

export default function gallery() {
  return (
    <div className="gallery">
       <div className="gallery-left">
            
       </div>

       <div className="gallery-center">
            <div className="gallery-header">
              Gallery
            </div>

            <div className="gallery-content">
              <div className="gallery-body">

              <div className="gal-field"> 
                  
                  <div className="gal-photo"> 
                     <div className="img-container">
                      <img className="galImg" src={GalleryPhoto15} alt=""/> 
                      </div>
                    <div className="gal-name">
                      <span className="gal-info"> 2022.07 - 제주도 </span>
                      <span className="gal-loc">대한전자공학회</span>
                    </div>
                </div>

                <div className="gal-photo"> 
                <div className="img-container">
                    <img className="galImg" src={GalleryPhoto16} alt=""/> 
                </div>
                    <div className="gal-name">
                      <span className="gal-info"> 2022.07 - 제주도 </span>
                      <span className="gal-loc">대한전자공학회</span>
                    </div>
                </div>
              </div>


                <div className="gal-field"> 
                  
                  <div className="gal-photo"> 
                     <div className="img-container">
                      <img className="galImg" src={GalleryPhoto5} alt=""/> 
                      </div>
                    <div className="gal-name">
                      <span className="gal-info"> 2022.02 - 제주도 </span>
                      <span className="gal-loc">ICEIC 2022</span>
                    </div>
                </div>

                <div className="gal-photo"> 
                <div className="img-container">
                    <img className="galImg" src={GalleryPhoto6} alt=""/> 
                </div>
                    <div className="gal-name">
                      <span className="gal-info"> 2022.02 - 제주도 </span>
                      <span className="gal-loc">ICEIC 2022</span>
                    </div>
                </div>
              </div>



              <div className="gal-field"> 
                
                <div className="gal-photo"> 
                <div className="img-container">
                      <img className="galImg" src={GalleryPhoto7} alt=""/> 
                      </div>
              
                  <div className="gal-name">
                    <span className="gal-info"> 2022.02 - 제주도 </span>
                    <span className="gal-loc">ICEIC 2022</span>
                  </div>
              </div>

              <div className="gal-photo"> 
              <div className="img-container">
                      <img className="galImg" src={GalleryPhoto8} alt=""/> 
                      </div>
              
                  <div className="gal-name">
                    <span className="gal-info"> 2022.02 - 제주도 </span>
                    <span className="gal-loc">ICEIC 2022</span>
                  </div>
              </div>
            </div>

            <div className="gal-field"> 
                
                <div className="gal-photo"> 
                    <div className="img-container">
                      <img className="galImg" src={GalleryPhoto11} alt=""/> 
                      </div>
              
                  <div className="gal-name">
                    <span className="gal-info"> 2021.10 - 부산 </span>
                    <span className="gal-loc">KIMES</span>
                  </div>
              </div>

              <div className="gal-photo"> 
              <div className="img-container">
                      <img className="galImg" src={GalleryPhoto3} alt=""/> 
                      </div>
                  <div className="gal-name">
                    <span className="gal-info"> 2021.07 - 제주도 </span>
                    <span className="gal-loc">대한전자공학회 하계종합학술대회</span>
                  </div>
              </div>
            </div>

            <div className="gal-field"> 
                
                <div className="gal-photo"> 
                    <div className="img-container">
                      <img className="galImg" src={GalleryPhoto4} alt=""/> 
                      </div>
              
                  <div className="gal-name">
                    <span className="gal-info"> 2021.07 - 제주도 </span>
                    <span className="gal-loc">대한전자공학회 하계종합학술대회</span>
                  </div>
              </div>

                <div className="gal-photo"> 
                <div className="img-container">
                      <img className="galImg" src={GalleryPhoto9} alt=""/> 
                      </div>
              
                  <div className="gal-name">
                    <span className="gal-info"> 2021.07 - 제주도 </span>
                    <span className="gal-loc">대한전자공학회 하계종합학술대회</span>
                  </div>
                </div>
                </div>


            <div className="gal-field"> 
                <div className="gal-photo"> 
                <div className="img-container">
                      <img className="galImg" src={GalleryPhoto12} alt=""/> 
                      </div>
                  
                      <div className="gal-name">
                        <span className="gal-info"> 2021.03</span>
                        <span className="gal-loc"> 연구실 상반기 워크샵</span>
                      </div>
               </div>
               <div className="gal-photo"> 
                <div className="img-container">
                      <img className="galImg" src={GalleryPhoto13} alt=""/> 
                      </div>
              
                  <div className="gal-name">
                  <span className="gal-info"> 2020.10 </span>
                    <span className="gal-loc">연구실 하반기 워크샵</span>
                  </div>
              </div>
            </div>


            
            <div className="gal-field"> 
                
            <div className="gal-photo"> 
              <div className="img-container">
                      <img className="galImg" src={GalleryPhoto14} alt=""/> 
                      </div>
              
                  <div className="gal-name">
                    <span className="gal-info"> 2020.10 </span>
                    <span className="gal-loc">연구실 하반기 워크샵</span>
                  </div>
              </div>


            <div className="gal-photo"> 
              <div className="img-container">
                      <img className="galImg" src={GalleryPhoto1} alt=""/> 
                      </div>
              
                  <div className="gal-name">
                    <span className="gal-info"> 2020.07 - 제주도 </span>
                    <span className="gal-loc">대한전자공학회 하계종합학술대회</span>
                  </div>
              </div>

              
            </div>

            <div className="gal-field"> 
                
                <div className="gal-photo"> 
                <div className="img-container">
                      <img className="galImg" src={GalleryPhoto2} alt=""/> 
                      </div>
              
                  <div className="gal-name">
                  <span className="gal-info"> 2020.07 - 제주도 </span>
                    <span className="gal-loc">대한전자공학회 하계종합학술대회</span>
                  </div>
              </div>

              <div className="gal-photo"> 
              <div className="img-container">
                      <img className="galImg" src={GalleryPhoto10} alt=""/> 
                      </div>
              
                  <div className="gal-name">
                    <span className="gal-info"> 2018.10 - 부산 </span>
                    <span className="gal-loc">KIMES</span>
                  </div>
              </div>
            </div>



          
              </div>
                
            </div>

       </div>
     
     
    </div>
  )
}
