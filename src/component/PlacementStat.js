import React, {useEffect, useState} from 'react'
import WALMART from "../image/walmart.png"
import COGNIZANT from "../image/Cognizant's_logo.svg.png"
import MINDTREE from "../image/mindtree.png"
import CRED from "../image/cred.png"
import GOOGLE from "../image/google.png"
import SAMSUNG from "../image/samsung.png"
import ONEPLUS from "../image/oneplus.png"
import DUNZO from "../image/dunzo.png"
import MEDIANET from "../image/medianet.png"
import Flipkart from "../image/Flipkart_logo.svg.png"
import UBER from "../image/uber.png"
import AMAZON from "../image/Amazon_logo.svg.png"
import nvidia from "../image/nvidia.png"
import microsoft from "../image/microsoft.png"
import paytm from "../image/paytm.png"
import gojek from "../image/gojek.png"
import ajio from "../image/ajio.png"
import netflix from "../image/netflix.png"
import jio from "../image/jio.png"
import delhivery from "../image/delhivery.png"
import goldman from "../image/goldman.png"
import zeta from "../image/zeta.png"
import phonepe from "../image/phonepe.png"
import infosys from "../image/infosys.png"
import toppr from "../image/toppr.png"
import mindtickle from "../image/mindtickle.png"
import atlassian from "../image/atlassian.png"
import paysafe from "../image/paysafe.png"
import creditSuisse from "../image/creditSuisse.png"
import qualcomm from "../image/qualcomm.png"
import ola from "../image/ola.png"
import hcl from "../image/hcl.png"
import wakefit from "../image/wakefit.png"
import Placement from "../image/placement-2.jpg"




const PlacementStat = () => {

  //---------attempt to move company image using transition infinite time------------------

  // useEffect(()=>{
  //   let imageList  = document.getElementById('company-list');
  //   imageList.style.transform="translate3d(-300px,0,0)";
  //   imageList.style.transitionDuration="2s";
   
  //  let value = -300;
  //   imageList.addEventListener("transitionend", () => {
     
  //     console.log("running");
  //     if(value===(-900))
  //     {
  //       value=-300;
  //       imageList.style.transform="translate3d("+value+"px,0,0)";
  //       imageList.style.transitionDuration="2s";
  //     }
  //     else{
  //       value = value-300;
  //       imageList.style.transform="translate3d("+value+"px,0,0)";
  //       imageList.style.transitionDuration="4s";

  //     }
  //   });

  // },[1])
  return (
    <>

    <div className='placement-container'>

<div className='placement-box'>
        <div className='placement-box-left'>
            <h1><b>Placement</b> Stats</h1>
        </div>
        <div className='placement-box-right'>
            <span><b>1200+</b>
            Students Placed</span>
            <span><b>25LPA</b>
            Highest salaries</span>
            <span><b>35%</b>
            Average Salary Hike</span>
            <span><b>250+</b>
            Hiring Partners</span>
        </div>
        </div>

      <div className='company-container'>
        <div className='company'>
        <h2>Companies that trust Uncodemy learners</h2>
        <div className='company-logo-moving'>
           <marquee><ul id='company-list'>
            <li className=''><img src={WALMART}/></li>
            <li className=''><img src={COGNIZANT}/></li>
            <li className=''><img src={MINDTREE}/></li>
            <li className=''><img src={CRED}/></li>
            <li className=''><img src={GOOGLE}/></li>
            <li className=''><img src={SAMSUNG}/></li>
            <li className=''><img src={ONEPLUS}/></li>
            <li className=''><img src={Flipkart}/></li>
            <li className=''><img src={DUNZO}/></li>
            <li className=''><img src={UBER}/></li>
            <li className=''><img src={MEDIANET}/></li>
            <li className=''><img src={AMAZON}/></li>
            <li className=''><img src={nvidia}/></li>
            <li className=''><img src={microsoft}/></li>
            <li className=''><img src={paytm}/></li>
            <li className=''><img src={gojek}/></li>
            <li className=''><img src={ajio}/></li>
            <li className=''><img src={netflix}/></li>
            <li className=''><img src={jio}/></li>
            <li className=''><img src={delhivery}/></li>
            <li className=''><img src={goldman}/></li>
            <li className=''><img src={zeta}/></li>
            <li className=''><img src={phonepe}/></li>
            <li className=''><img src={infosys}/></li>
            <li className=''><img src={toppr}/></li>
            <li className=''><img src={mindtickle}/></li>
            <li className=''><img src={atlassian}/></li>
            <li className=''><img src={paysafe}/></li>
            <li className=''><img src={creditSuisse}/></li>
            <li className=''><img src={qualcomm}/></li>
            <li className=''><img src={ola}/></li>
            <li className=''><img src={hcl}/></li>
            <li className=''><img src={wakefit}/></li>
        
            
            </ul> 
            </marquee>
        </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default PlacementStat