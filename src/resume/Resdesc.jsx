import React from 'react'
import Academy from './Academy'
import PersonalExps from './PersonalExps'
import ProfessionalExps from './ProfessionalExps'
import Skills from './Skills'

export default function Resdesc() {
  return (
    <div className='resdesc'>
       <Academy />
       <Skills />
       <ProfessionalExps />
       <PersonalExps />
    </div>
  )
}
