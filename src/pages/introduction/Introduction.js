import React from 'react'
import "./introduction.scss"
import IntroductionSide from "./introductionSide/IntroductionSide"

export default function Introduction() {
  return (
    <div className="introduction">
    <div className="introductionLeft">
          <IntroductionSide/>
    </div>
    <div className="introductionRight">
      R

    </div>
    
  </div>
  )
}
