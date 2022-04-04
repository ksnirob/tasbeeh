import React from 'react'

const Info = ({number, text}) => {
  return (
    <>
        <div className="info">
          <p>Say <span>{number}</span> times: {text}</p>
        </div>
    </>
  )
}

export default Info