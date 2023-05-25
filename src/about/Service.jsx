import React from 'react'

export default function Service(prop) {
  return (
    <div className='service'>
    <div className='serbox'>
        <div className='sericon'>
            {prop.ico}
        </div>
        <div className='sername'>
            <h2>{prop.ser_name}</h2>
            <p> {prop.ser_detail}</p>
        </div>
    </div>
    </div>
  )
}
