import React from 'react'

const FancyText = ({title,text}) => {
  return title ? <h1>{text}</h1> : <h3>{text}</h3>
}
export default FancyText;