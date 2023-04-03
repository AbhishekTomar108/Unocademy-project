import React from 'react'
import Axis from "../image/Axis_Bank_logo.svg.png"
import Cognizant from "../image/Cognizant's_logo.svg.png"
import IBM from "../image/IBM_logo.svg.png"
import TechMahindra from "../image/Tech_Mahindra_New_Logo.svg.png"
import Wipro from "../image/Wipro_Primary_Logo_Color_RGB.svg.png"
import Adobe from "../image/images.png"

const PlacementStat = () => {
  return (
    <div className='placement-container'>

<div className='placement-box'>
        <div className='placement-box-left'>
            <h1><b>Placement</b> Stats</h1>
        </div>
        <div className='placement-box-right'>
            <span><b>2700+</b>
            Tech transitions</span>
            <span><b>12LPA</b>
            Exciting salaries</span>
            <span><b>44%</b>
            Average Salary Hike</span>
            <span><b>650+</b>
            Hiring Partners</span>
        </div>
        </div>

        <div className='company'>
        <h2>Companies that trust upGrad learners</h2>
        <div className='company-logo-moving'>
           <ul>
            <li className=''><img src={Axis}/></li>
            <li className=''><img src={Cognizant}/></li>
            <li className=''><img src={IBM}/></li>
            <li className=''><img src={TechMahindra}/></li>
            <li className=''><img src={Wipro}/></li>
            <li className=''><img src={Adobe}/></li>
        
            
            </ul> 
        </div>
        </div>
    </div>
  )
}

export default PlacementStat