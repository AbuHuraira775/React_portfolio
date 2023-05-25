import React, { useState } from 'react'

export default function Desc() {

  const [skill, set_skill] = useState('web developer')

  // const my_skills = ['web developer','freelancer','UI/UX designer','app developer']

  // var show_skills = ''
  // var i = -1
  // var j = -1
  // setInterval(() => {
  //   i++
  //   skill_elements(i)
  // }, 1000);
  
  // const skill_elements = (m)=>{
  //   show_skills += my_skills[m]
  //   console.log(show_skills)
  //   show_skills =''
  // }
  return (
    <div className='desc'>
    <h1> <span className="abu">Abu </span>Huraira</h1>
    <p className='iam'>I am a <span className='bold change'>{skill}</span></p>
    </div>
  )
}
