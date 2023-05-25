import React from 'react'
import Service from './Service'
import Sdata from './Sdata'

export default function Services() {


 
  return (
    <div className='services'>
    <h1> <span className='bold'>My </span> Services</h1>

    <div className='sercomp'>
    <Service ico={<i className="fa-brands fa-searchengin ico"></i>} ser_name="Web Optimization" ser_detail='Modern and mobile-ready website that will help of your marketing.'/>
    <Service ico={<i className="fa-solid fa-link ico"></i>} ser_name="Web Hosting" ser_detail='Modern and mobile-ready website that will help of your marketing.'/>
    <Service ico={<i class="fa-solid fa-mobile ico"></i>} ser_name="Device Friendly" ser_detail='Modern and mobile-ready website that will help of your marketing.'/>
    <Service ico={<i className="fa-brands fa-react ico"></i>} ser_name="Frontend Development" ser_detail='Modern and mobile-ready website that will help of your marketing.'/>
   
   
    </div>
   
    </div>
  )
}
