import React from 'react'
import PortfolioArray from './PortfolioArray'
import PortfolioComp from './PortfolioComp'
import filter from './PortfolioHeader'

export default function PortFolioComps() {

  const portfolio_array = [
    <PortfolioComp 
          
    img="https://images.pexels.com/photos/5325050/pexels-photo-5325050.jpeg"
    link="https://646f10a571d08113df35b5dd--singular-hamster-07edc8.netlify.app/"
    title="Typing Speed Checker"
    name = 'landing page'
    id = '1'
  />,
  <PortfolioComp 
    img="https://images.pexels.com/photos/3634930/pexels-photo-3634930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    link=""
    title="Image Editor"
    name = 'landing page'
    id = '2'

  />,
  <PortfolioComp 
    img="https://images.pexels.com/photos/3585001/pexels-photo-3585001.jpeg"
    link="https://646f1026423fed1259f7ebfa--spontaneous-jalebi-2a7eba.netlify.app/"
    title="Landing Page"
    name = 'E-commerce'
    id = '3'

  />,
  <PortfolioComp 
    img="https://images.pexels.com/photos/4386293/pexels-photo-4386293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    link="https://646f1248f621541424aba801--resplendent-cranachan-75351c.netlify.app/"
    title="CGPA Calculator"
    name = 'UI/UX'
    id = '4'

  />,
  <PortfolioComp 
    img="https://images.pexels.com/photos/1292301/pexels-photo-1292301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    link="https://646f10cafac62310da7090fa--magenta-zabaione-2741ab.netlify.app/"
    title="Weather App"
    name = 'UI/UX'
    id = '5'

  />,
  <PortfolioComp 
    img="https://images.pexels.com/photos/5553050/pexels-photo-5553050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    link="https://646f1221cc726b141be26b76--spontaneous-nougat-10cdc7.netlify.app/"
    title="quiz Application"
    name = 'E-commerce'
    id = '6'
    />
  ]

  
  return (
    <div className='portfolio_comps'>
      {portfolio_array}
    </div>
  )
}
