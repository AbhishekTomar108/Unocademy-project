import React from 'react'

const Last = () => {
  return (
    <div className='last'>
        <div class="got-a-ques-summary">
        <div class="container">
            <img src="https://www.upgrad.com/bootcamps/images/got-ques.png" alt="Support" title="Support"/>
            <div class="row">
                <div class="col-md-6 offset-md-6">
                    <div class="got-a-ques-content">
                        <h2>Got a question?</h2>
                        <p>
                            Chat with our Admissions Counsellor today!
                        </p>
                        <div class="got-a-ques-btn">
                            <a href="mailto:bootcampsupport@upgrad.com" class="btn btn-default" onclick="generateMoengageEvent({'label':'upGrad Clicked on Write to Us','action':'upGrad Clicked on Write to Us','name':'UG_FSD_BOOTCAMP_GOT_A_QUESTION_WRITE_TO_US'})"> Write to us </a>
                            <a href="https://wa.me/919321423323" class="btn btn-default whatsapp-btn" target="_blank" onclick="generateMoengageEvent({'label':'upGrad Clicked on Chat With Us','action':'upGrad Clicked on Chat With Us','name':'UG_FSD_BOOTCAMP_GOT_A_QUESTION_CHAT_WITH_US'})"> <i class="icons icon-whatsapp" title="Chat With Us"></i> Chat With Us </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
  )
}

export default Last