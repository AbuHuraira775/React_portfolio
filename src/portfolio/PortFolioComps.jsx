import React from 'react'
import PortfolioArray from './PortfolioArray'
import PortfolioComp from './PortfolioComp'
import filter from './PortfolioHeader'

export default function PortFolioComps() {

  const portfolio_array = [
    <PortfolioComp 
          
    img="https://onlinetyping.org/blog/images/10-finger-typing-600.jpg"
    title="Typing Speed Checker"
    name = 'landing page'
    id = '1'
  />,
  <PortfolioComp 
    img="https://onlinetyping.org/blog/images/10-finger-typing-600.jpg"
    title="Typing Speed Checker"
    name = 'landing page'
    id = '2'

  />,
  <PortfolioComp 
    img="https://onlinetyping.org/blog/images/10-finger-typing-600.jpg"
    title="Typing Speed Checker"
    name = 'E-commerce'
    id = '3'

  />,
  <PortfolioComp 
    img="https://onlinetyping.org/blog/images/10-finger-typing-600.jpg"
    title="Typing Speed Checker"
    name = 'UI/UX'
    id = '4'

  />,
  <PortfolioComp 
    img="https://onlinetyping.org/blog/images/10-finger-typing-600.jpg"
    title="Typing Speed Checker"
    name = 'UI/UX'
    id = '5'

  />,
  <PortfolioComp 
    img="https://onlinetyping.org/blog/images/10-finger-typing-600.jpg"
    title="Typing Speed Checker"
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
