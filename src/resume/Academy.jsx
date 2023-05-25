import React from 'react'
import AcaComp from './AcaComp'

export default function Academy() {
  return (

    <div className='academy'>
     <h1> <span className='bold'>My</span> Education</h1>
        
      <div className='academy_box'>
        <AcaComp 
        comptitle="Intermediate"
        compdetail='2017-2019'
        compdes="Pre-Engineering from PECHS Education Foundation Government Degree Science College" />

        <AcaComp 
        comptitle="Bachelor Degree"
        compdetail='2021-2025'
        compdes="Software Engineering (BSSE) from Sindh Madressatul Islam University" />

        {/* <AcaComp 
        comptitle="web development"
        compdetail='2020-2023'
        compdes="Collaborate with creative and development teams on the execution of ideas." />

        <AcaComp 
        comptitle="web development"
        compdetail='2020-2023'
        compdes="Collaborate with creative and development teams on the execution of ideas." />
         */}
      </div>

    </div>
  )
}
