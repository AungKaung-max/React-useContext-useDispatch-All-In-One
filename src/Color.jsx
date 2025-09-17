import React from 'react'
import "./App.css"

function Color({color}) {
    console.log("VALUE",color)
  return (
    <div className='box' style={{backgroundColor: color}}></div>
  )
}

export default Color