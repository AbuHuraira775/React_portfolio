import React from 'react'
import Skill from './Skill'

export default function Skills() {
  return (
    <div className='skills'>
        <h1> <span className='bold'>My</span> Experience</h1>
        
        <div className='skill_box'>
          
          <Skill
          skill_title="React.js"
          skill_detail='2022-present'
          skill_des="1 year of experience. I can design an attractive user Interface" />
  
          <Skill
          skill_title="Node.js"
          skill_detail='2022-present'
          skill_des="Still learning about modules and other things." />
  
          <Skill
          skill_title="JavaScript and ES6"
          skill_detail='2021-present'
          skill_des="I have grip in JavaScript with 2 years of experience" />
          
          {/* <Skill
          skill_title="web development"
          skill_detail='2020-2023'
          skill_des="Collaborate with creative and development teams on the execution of ideas." /> */}
  
        </div>
    </div>
  )
}
