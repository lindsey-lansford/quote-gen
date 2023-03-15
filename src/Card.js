import React from 'react'

const Card = ({ quote }) => {
  return (
    <div className="card">
      <h1 className='header'>Quote Generator</h1>
      <p>{quote.quote}</p>
      <h6>{quote.author}</h6>
    </div>
  )
};

export default Card;