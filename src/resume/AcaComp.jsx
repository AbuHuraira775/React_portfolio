import React from 'react'

export default function AcaComp(props) {
  return (
    <div className='acacomp'>
        <div className='component' >
            <h2>{props.comptitle}</h2>
            <p>{props.compdetail}</p>
            <p className='compdes'>{props.compdes}</p>
        </div>
    </div>
  )
}
