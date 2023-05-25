import React from 'react'
import ProfessionalExp from './ProfessionalExp'

export default function ProfessionalExps() {
  return (
    <div className='professional_exps'>
    <h1><span className='bold'>Professional </span>Skills</h1>
   
   <div className='professional_exp_box'>

      <ProfessionalExp title="Communication" range='70'/>
      {/* <ProfessionalExp title="Team Leading" range='45'/> */}
      <ProfessionalExp title="Leadership" range='55'/>
      {/* <ProfessionalExp title="Language" range='75'/> */}

  </div>
    </div>
  )
}
