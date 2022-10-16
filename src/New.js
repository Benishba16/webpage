import React from 'react'
import Something_image from "./assets/images/backgroundImage.png"
import "./New.css"

function New() {
  return (
    <div
        style={{
            // border: "2px solid red",
            // height: "50vh"
        }}
    >
     <div>
        <img src={Something_image} alt="background_image"/>
    </div>   
    </div>
  )
}

export default New