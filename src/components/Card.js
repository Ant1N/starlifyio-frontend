import React from 'react'

function Card({title, children}) {
  return (
    <div className="card">
        <div className="textContainer">
          <h3>{title}</h3>
          {children}
        </div>
    </div>
  )
}

export default Card