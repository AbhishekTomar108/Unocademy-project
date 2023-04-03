import React from 'react'

const Media = () => {
  return (
    <div className='media'>
        <h2 class="section-heading text-center">Our Media Presence</h2>
        <div class="row media-presence-container">
            <div class="col-md-12">
                
            </div>
            <div class="col-md-4">
                <a href="https://www.business-standard.com/article/companies/upgrad-launches-new-upskilling-programme-aims-to-enable-75-000-jobs-122082201006_1.html" rel="nofollow" class="media-presence-block" target="_blank">
                    <h3 class="description">upGrad launches new upskilling programme; aims to enable 75,000 jobs</h3>
                    <img src="https://www.upgrad.com/bootcamps/images/our-media-presence-bs.svg" class="media-img" alt="Business Standard" title="Business Standard" height="25px"/>
                </a>
            </div>
            <div class="col-md-4">
                <a href="https://yourstory.com/2022/08/upgrads-job-enabled-courses-college-freshers-working-professionals" class="media-presence-block" rel="nofollow" target="_blank">
                    <h3 class="description">upGrad launches job-enabled courses for college freshers and working
                        professionals</h3>
                    <img src="https://www.upgrad.com/bootcamps/images/our-media-presence-your-story.svg" class="media-img" alt="Your Story" title="Your Story"/>
                </a>
            </div>
            <div class="col-md-4">
                <a href="https://www.afaqs.com/people-spotting/upgrad-appoints-ex-amazon-ashish-sharma-to-spearhead-its-own-branded-program-vertical" rel="nofollow" class="media-presence-block" target="_blank">
                    <h3 class="description">upGrad appoints ex-Amazon Ashish Sharma to spearhead its own-branded Program
                        Vertical</h3>
                    <img src="https://www.upgrad.com/bootcamps/images/our-media-presence-afaqs.svg" class="media-img" alt="Afaqs" title="Afaqs"/>
                </a>
            </div>
            
        </div>
        <div className='view-btn'>
            <button>View More</button>
        </div>
    </div>
  )
}

export default Media