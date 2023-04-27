import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import cross from "../image/cross-2.png"
import rightArrow from "../image/banner-right-arrow.png"
import fullStack from "../image/full-stack-image.jpg"
import download from "../image/download.svg"



const Banner = () => {
   

    const hideBanner=()=>{

        const Banner = document.getElementsByClassName('banner-lower-box')[0];
        const formContainer = document.getElementsByClassName('form-main')[0];
        

            Banner.style.opacity = "0.5";
            formContainer.style.visibility = "visible";
            
          
        }

    const hideForm = ()=>{
      
        const formContainer = document.getElementsByClassName('form-main')[0];
        const Banner = document.getElementsByClassName('banner-lower-box')[0];
        formContainer.style.visibility="hidden";
        Banner.style.opacity = "1";
      
    }

    const goToBottom = ()=>{
      console.log("go to running");
      const gotoValue = (document.body.scrollHeight)-800;

      console.log("go to = ", gotoValue);
      window.scrollTo({top:gotoValue, left:0, behavior:'smooth'})
    }

  
  return (
    <div className='banner'>
     <div className='form-main'>
        <div className='form-container'>
          <div className='form-top'>
            <img src={cross} id='cross-img' onClick={hideForm}/>
          </div>
      <form>
        Name <input/>
        Email <input/>
        Phone No. <input/>
        Location <input/>
        <div className='submit-btn'>

        <input type='submit'/>
        </div>
      </form>
    </div>
    </div>
   
        <div className='banner-at-point'>
            <ul>
                <li>Home</li>
                <li><img src={rightArrow}/></li>
                <li>Bootcamps</li>
                
                <li><img src={rightArrow}/></li>
                <li>Job Oriented Full Stack Software Development Bootcamp</li>
            </ul>
        </div>

        <div className='banner-lower-box'>
            <div className='lower-box-left'>
                <h2>Job Assistance with Interview Opportunity*</h2>
                <h1>
                    <span>Job Oriented Full Stack</span>
                    Software Development Bootcamp
                </h1>
                <p>
                Earn upto 10LPA on Course Completion - Book Your Seat With As Low As <span id='price-text'>INR 2,000/- only</span>
                <strong>Duration of the program- 6 months</strong>

                <span className='cohort-text'>Next Batch Starts: 01 May, 2023</span>
                <span className='limited-text'>Limited no. of seats available</span>
                </p>

           
            </div>
            <div className='lower-box-right'>
            <img class="video-thumbnail" src={fullStack}/>
            
            </div>
        </div>
        <div className='btn-group'>
                <button id='curriculum-btn' onClick={hideBanner}><img src={download}/>Download Curriculum</button>
                <button id='apply-btn' onClick={goToBottom}>Apply Now</button>
                </div>
        </div>
  )
}

export default Banner