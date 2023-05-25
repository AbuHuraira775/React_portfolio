import React from 'react'

export default function AddressInfo() {
  return (
    <div className='address_info'>
    
        <h1><span className='bold'>Get </span>in touch</h1>

        <div className='boxes'>

                    <div className='address_box box'>
                        <div className='icon'>
                        <a href='' target='_blank'><i className="fa-solid fa-location-dot"></i></a>
                        </div>
                        <div className='detail'>
                            <h2>Address</h2>
                            <p>From Karachi, Pakistan</p>
                        </div>
                    </div>

                    <div className='address_box box'>
                        <div className='icon'>
                        <a href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox' target='_blank'><i className="fa-solid fa-envelope"></i></a>
                        
                        </div>
                        <div className='detail'>
                            <h2>Email</h2>
                            <p>abuhuraira775@gmail.com</p>
                        </div>
                    </div>


                    <div className='address_box box'>
                        <div className='icon'>
                        <a href=''><i className="fa-solid fa-phone" target='_blank'></i></a>
                        
                        </div>
                        <div className='detail'>
                            <h2>Phone</h2>
                            <p>0313-2680481</p>
                        </div>
                    </div>


                    <div className='address_box box'>
                        <div className='icon'>
                        <a href='https://www.linkedin.com/in/abu-huraira-a9828922a/' target='_blank'><i className="fa-brands fa-linkedin"></i></a>
                        
                        </div>
                        <div className='detail'>
                            <h2>Linkedin</h2>
                            <p>Available</p>
                        </div>
                    </div>


        </div>
    </div>
  )
}
