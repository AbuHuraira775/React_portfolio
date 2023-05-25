import React from 'react'
import PersonalExp from './PersonalExp'
import ProfessionalExp from './ProfessionalExp'

export default function PersonalExps() {
  return (
    <div className='personal_exps'>
    <h1><span className='bold'>Personal </span>Skills</h1>

<div className='personal_exp_box'>


      <PersonalExp title="React.js"   range='50'/>
      <PersonalExp title="Node.js"  range='30'/>
      <PersonalExp title="JavaScript"  range='80'/>
      {/* <PersonalExp title="UI/UX"  range='65'/> */}
</div>
    </div>
  )
}
