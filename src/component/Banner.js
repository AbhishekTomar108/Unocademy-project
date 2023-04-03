import React from 'react'

const Banner = () => {
  return (
    <div className='banner'>
        <div className='banner-at-point'>
            <ul>
                <li>Home</li>
                <li>Bootcamps</li>
                <li>Full Stack Software Development Bootcamp</li>
            </ul>
        </div>

        <div className='banner-lower-box'>
            <div className='lower-box-left'>
                <h2>Job Assistance with Interview Opportunity*</h2>
                <h1>
                    <span>Full Stack</span>
                    Software Development Bootcamp
                </h1>
                <p>
                Earn upto 12LPA on Course Completion - Book Your Seat With As Low As <span id='price-text'>INR 5,000/- only</span>
                <strong>Duration of the program- 6 months</strong>

                <span className='cohort-text'>Next Cohort Starts: 27 Mar, 2023</span>
                <span className='limited-text'>Limited no. of seats available</span>
                </p>

            <div className='btn-group'>
                <button id='curriculum-btn'><img src="https://www.upgrad.com/bootcamps/images/download.svg"/>Download Curriculum</button>
                <button id='apply-btn'>Apply Now</button>
                </div>
            </div>
            <div className='lower-box-right'>
            <img class="video-thumbnail" src="https://www.upgrad.com/bootcamps/images/bnr-thumb.png"/>
            
            <a href="javascript:void(0);" data-toggle="modal" data-target=".banner-video" class="video-btn" data-src="https://bootcamps.upgrad.com/bootcamps/videos/FSD_India_course_intro_video_upgrad.mp4"> <span> <img src="https://www.upgrad.com/bootcamps/images/bnr-play.png"/> </span> </a>
            </div>
        </div>
        </div>
  )
}

export default Banner