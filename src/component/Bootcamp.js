import React from 'react'
import clock from "../image/clock.jpg"
import trainer from "../image/trainer.jpg"
import monitor from "../image/monitor.jpg"
import placement from "../image/placement (2).jpg"
import whatsapp from "../image/whatsapp.png"

const Bootcamp = () => {
  return (
    <div className='bootcamp'>
     <h2 className='uplift-text'>This Bootcamp Will Uplift Your Career. <b>Here’s How.</b></h2>

     <div className='course-summary'>
     <div class="benefit-thumb">
                        
                        <img src={clock} class="icons icon-benefit-1"/><h3> 120+ hours learning </h3>
                        <p>
                            With over 120 hours of instruction from an experienced full-stack developer, you will gain in-depth knowledge of the latest web development technologies and best practices.
                        </p>
                    </div>
     <div class="benefit-thumb">
                        
                        <img src={trainer} class="icons icon-benefit-2"/><h3> 10+ year Experience Industry Expert Trainers </h3>
                        <p>
                          At Uncodemy, You will Learn from the Experts from industry who are Passionate in sharing their Knowledge with Learners. Get Personally Mentored by the Experts.
                        </p>
                    </div>
     <div class="benefit-thumb">
                        
                        <img src="https://www.upgrad.com/bootcamps/images/icon-sprite-new1.svg" class="icons icon-benefit-3"/><h3> 25+ Assignments, Live projects and case studies</h3>
                        <p>
                        Get an opportunity to work in Real-time projects that will give you a Deep Experience. Showcase your projects Experience & Increase your chances of getting Hired!
                        </p>
                    </div>
     <div class="benefit-thumb">
                        
                        <img src={monitor} class="icons icon-benefit-4"/><h3>Live Facility with Internet </h3>
                        <p>
                          At Uncodemy, the availability of a lab facility with Internet access for students can greatly enhance their practical experience and prepare for the Dream Job.
                        </p>
                    </div>
     <div class="benefit-thumb">
                        
                        <img src="https://www.upgrad.com/bootcamps/images/icon-sprite-new1.svg" class="icons icon-benefit-5"/><h3> Affordable Fees with No Cost EMI</h3>
                        <p>
                        At Uncodemy, Course Fee is not only Affordable, but you have the option to pay it in installmentsand also No cost EMI. Quality Training at an Affordable Price is our Motto.
                        </p>
                    </div>
     <div class="benefit-thumb">
                        
                        <img src={placement} class="icons icon-benefit-6"/><h3>100% Placement Support </h3>
                        <p>
                        Tie-Up & MOU with more than 500+ Small & Medium Companies to Support you with opportunities to Kick-Start & Step-up Your Career.
                        </p>
                    </div>
     </div>

     <div className='btn-group'>
    
        <button id='chat-btn'><img src={whatsapp} class="icon whatsapp-icon"></img><a href="https://wa.link/tu20ly">Chat With Us</a></button>
        <button id='call-us-btn'><a href="tel:91 770-192-8515">Call Us</a></button>
      </div>

        </div>
  )
}

export default Bootcamp