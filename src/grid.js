import React from 'react'
import Header from './components/Header'
import "./grid.css"

function Grid() {
  return (
    <div className='grid_container'>
        <div style={{border: "2px solid green"}}>
            <Header />
            {/* one */}
        </div>
        <div>Two</div>
        <div>Three</div>
        <div>Four</div>
        <div>Five</div>
        <div>Six</div>
    </div>
  )
}

export default Grid