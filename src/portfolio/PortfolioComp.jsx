import React from 'react'

export default function PortfolioComp(props) {
  return (
    <div className='portfolio_comp'>
    
    <a href={props.link} target="_blank">
    
      <img src={props.img} />
      <p>{props.title}</p>
    </a>

    
    </div>
  )
}
