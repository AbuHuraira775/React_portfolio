import React from 'react'

export default function ProfessionalExp(props) {
  return (
    <div className='professional_exp'>

        <h2>{props.title}</h2>
        <input type="range" min="1" max="100" value={props.range} className='range blue'/>

    </div>
  )
}
