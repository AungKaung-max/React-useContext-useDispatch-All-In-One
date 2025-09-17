import React from 'react'

export function Profile() {
    return (
        <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
    )
}

function Gallery() {
  return (
    <section>
        <h1>Amazing Scientists</h1>
        <Profile/>
        <Profile/>
        <Profile/>
    </section>
  )
}

export default Gallery