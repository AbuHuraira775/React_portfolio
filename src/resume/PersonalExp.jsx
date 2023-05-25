import React from 'react'

export default function PersonalExp(props) {
  return (
    <div className='personal_exp'>
      <h2>{props.title}</h2>
      <input type="range" min="1" max="100" value={props.range} className="range blue" />    
    </div>
  )
}
