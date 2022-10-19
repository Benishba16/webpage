import React from 'react'
import BackgroundImage from "./assets/images/backgroundImage.png"
// import "./New.css"

function New() {
  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        width: "100vw",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        objectFit: "contain"
      }}
    >

    </div>
  )
}

export default New