import React from 'react'
import { Form } from './Form'


const Banner = () => {

  
  return (
    <div className='banner'>
        <div className='banner-at-point'>
            <ul>
                <li>Home</li>
                <li>Bootcamps</li>
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

                <span className='cohort-text'>Next Cohort Starts: 01 May, 2023</span>
                <span className='limited-text'>Limited no. of seats available</span>
                </p>

                {/*  */}
            </div>
            <div className='lower-box-right'>
            <img class="video-thumbnail" src="https://www.upgrad.com/bootcamps/images/bnr-thumb.png"/>
            
            </div>
        </div>
        <div className='btn-group'>
                <button id='curriculum-btn'><img src="https://www.upgrad.com/bootcamps/images/download.svg"/>Download Curriculum</button>
                <button id='apply-btn'>Apply Now</button>
                </div>
        </div>
  )
}

export default Banner