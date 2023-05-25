import React from 'react'

export default function Skill(props) {
  return (
    <div className='skill'>
        
            <h2>{props.skill_title}</h2>
            <p>{props.skill_detail}</p>
            <p>{props.skill_des}</p>
    
    </div>
  )
}
