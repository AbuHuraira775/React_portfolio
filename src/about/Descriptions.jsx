import React from 'react'
import cv from '../cv/cv.pdf'

export default function Descriptions() {
  return (
    <div className='description'>
    <div className='text'>
        <p>  Hello, I’m <span className='bold'>Abu Huraira,</span> I am a
            <span className='bold'> software engineer.</span> I have also experience in 
            <span className='bold'> software design, UI/UX design, and software development </span> 
             using <span className='bold'> React.js and Node.js</span></p>
    </div>

    <div className='btns'>

      <div className='cv_Link'>
          <a href={cv} download='CV'>
            <button className='downCV'><i class="fa-solid fa-download"></i> Download CV</button>
          </a>
      </div>
        
      <div className='all_links'>
        <button className='btn'> <a href='https://github.com/AbuHuraira775/' target='_blank'><i className="fa-brands fa-github"></i></a></button>
        <button className='btn'> <a href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJTLpGgVDpCgsQtHQCJdnmLNsVbVZfLJZjMvHPNPjvxjNDKmWlpkKzPNljFCfbFRBtMvwhg' target='_blank'><i className="fa-regular fa-envelope"></i></a></button>
        <button className='btn'> <a href='https://www.linkedin.com/in/abu-huraira-a9828922a/' target='_blank'><i className="fa-brands fa-linkedin"></i></a></button>
        <button className='btn'> <a href='' target='_blank'><i className="fa-brands fa-whatsapp"></i></a></button>
      </div>
       
    </div>
    </div>
  )
}
