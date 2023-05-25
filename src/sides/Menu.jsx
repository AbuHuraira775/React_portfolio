import React, { Profiler, useState } from 'react'
import About from '../about/About'
import Address from '../address/Address'
import Blogs from '../blog/Blogs'
import Home from '../images/home/Home'
import Portfolio from '../portfolio/Portfolio'
import Resume from '../resume/Resume'


export default function Menu() {

  var status = true
  const toogle = ()=>{
  
    const toogle_btn = document.getElementById('toogle-btn')
    const menu = document.getElementById('menu')
    console.log(status)
    status? menu.style.display = 'flex' : menu.style.display = 'none';
    status ? status = false : status = true
    console.log(status)

  }
  status = true
  const [comp, setComp] = useState(<Home />)
  var home_icons = document.getElementsByClassName('home_icons')


  // const active_icons = ()=>{
  //   for(var i=0; i<home_icons.length;i++){
  //     home_icons[i].classList.remove('active')
  //     // if(home_icons[i].title == 'home'){
  //     //   home_icons[i].classList.add('active')
  //     // }
  //     // else if(home_icons[i].title == 'profile'){
  //     //   home_icons[i].classList.add('active')
  //     // }
  //     // else if(home_icons[i].title == 'resume'){
  //     //   home_icons[i].classList.add('active')
  //     // }
  //     // else if(home_icons[i].title == 'portfolio'){
  //     //   home_icons[i].classList.add('active')
  //     // }
  //     // else if(home_icons[i].title == 'blogs'){
  //     //   home_icons[i].classList.add('active')
  //     // }
  //     // else if(home_icons[i].title == 'contact'){
  //     //   home_icons[i].classList.add('active')
  //     // }

  //     switch(home_icons[i].title){
  //       case 'home':
  //       home_icons[i].classList.add('active')
  //       break;
        
  //       case 'portfolio':
  //       home_icons[i].classList.add('active')
  //       break;
        
  //       case 'resume':
  //       home_icons[i].classList.add('active')
  //       break;
        
  //       case 'profile':
  //       home_icons[i].classList.add('active')
  //       break;
        
  //       case 'blogs':
  //       home_icons[i].classList.add('active')
  //       break;
        
  //       case 'contact':
  //       home_icons[i].classList.add('active')
  //       break;
        
  //     }
  //   }
  // }
  
  const home = ()=>{
    // active_icons()
    for(var i=0;i<home_icons.length;i++){
      home_icons[i].classList.remove('active')
      if(home_icons[i].title == 'home'){
        home_icons[i].classList.add('active')
      }
    }

    const home = <Home />
      setComp(home)

      }

  const profile = ()=>{
    // active_icons()
    for(var i=0;i<home_icons.length;i++){
      home_icons[i].classList.remove('active')
      if(home_icons[i].title == 'profile'){
        home_icons[i].classList.add('active')
      }
    }
    const about = <About />
      setComp(about)
  }
  
  const resume = ()=>{
    // active_icons()
    for(var i=0;i<home_icons.length;i++){
      home_icons[i].classList.remove('active')
      if(home_icons[i].title == 'resume'){
        home_icons[i].classList.add('active')
      }
    }
    const resume = <Resume />
      setComp(resume)
  }
  
  const portfolio = ()=>{
    // active_icons()
    for(var i=0;i<home_icons.length;i++){
      home_icons[i].classList.remove('active')
      if(home_icons[i].title == 'portfolio'){
        home_icons[i].classList.add('active')
      }
    }
    const portfolio = <Portfolio />
      setComp(portfolio)
  }
  
  const blogs = ()=>{
    
    for(var i=0;i<home_icons.length;i++){
      home_icons[i].classList.remove('active')
      if(home_icons[i].title == 'blogs'){
        home_icons[i].classList.add('active')
      }
    }
    const blogs = <Blogs />
      setComp(blogs)
  }
  
  const contact = ()=>{
    // active_icons()
    for(var i=0;i<home_icons.length;i++){
      home_icons[i].classList.remove('active')
      if(home_icons[i].title == 'contact'){
        home_icons[i].classList.add('active')
      }
    }
    const contact = <Address />
      setComp(contact)
  }
  

  
  return (
    <div className='nav'>

    <div className='nav_side_links'>
   
        <div className='menu' id='menu'>
            <i className="fa-solid fa-house home_icons active" id='home-icon' title="home" onClick={home}></i>
            <i className="fa-regular fa-user home_icons" title="profile" onClick={profile}></i>
            <i className="fa-solid fa-graduation-cap home_icons" title="resume" onClick={resume}></i>
            <i className="fa-regular fa-file home_icons" title="portfolio" onClick={portfolio}></i>
            {/* <i className="fa-solid fa-newspaper home_icons" title="blogs" onClick={blogs}></i> */}
            <i className="fa-regular fa-envelope home_icons" title="contact" onClick={contact}></i>
        </div>

        <div className='links'>
          <div className='navbar_toogle'>
            <i className="fa-solid fa-bars" id='toogle-btn' onClick={toogle}></i>
          </div>

          <div className='link'>
            <a href='https://github.com/AbuHuraira775/' target='_blank'><i className="fa-brands fa-github" ></i></a>
            <a href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJqVNfGJlNbWJVmFtdLLqhMhNBrTdqwqvgHbDjGNcKdJssxwPMWhtvHpRwQHfblJBkJmxfg' target='_blank'><i className="fa-regular fa-envelope"></i></a>
            <a href='https://www.linkedin.com/in/abu-huraira-a9828922a/' target='_blank'><i className="fa-brands fa-linkedin"></i></a>
            <a href='https://wa.me/+923132680481' target='_blank'><i className="fa-brands fa-whatsapp"></i></a>
          </div>
       
        </div>
     
    </div>

    <div className='components'>
        {comp}
    </div>

    </div>
  )
}
