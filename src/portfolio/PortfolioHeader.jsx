import React from 'react'
import Filter from './Filter'
import PortFolioComps from './PortFolioComps'

export default function PortfolioHeader() {

  const filter = (value)=>{
    
    // <Filter name = {value.target.name} id = '1'/>
    // console.log(value.target.name)

    if(value.target.name == 'all'){
      console.log('<PortFolioComps />')
      
    }
  }
  return (
    <div className='portfolio_header'>
                <div className='nav_heading'>
                    <h1><span className='bold'>My</span> Portfolio</h1>
                </div>

                {/* <div className='nav_lists'>
                    <ol>
                        <li><a href='#'  className='active' name='all' onClick={filter}>All</a></li>
                        <li><a href='#' name='landing-page'>Landing pages</a></li>
                        <li><a href='#' name='e-commerce'>E-commerce</a></li>
                        <li><a href='#' name='ui/ux'>UI/UX</a></li>
                    </ol>

                </div> */}
    </div>
  )
}
