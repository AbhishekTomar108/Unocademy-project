import React, { useState, useEffect } from 'react'
import axios from 'axios'
import cross from "../image/cross-1.png"
import rightArrow from "../image/banner-right-arrow.png"
import fullStack from "../image/full-stack-banner-image.png"
import certified from "../image/certified.png"
import nsdca from "../image/nsdca.png"
import fututreSkills from "../image/fututre-skills.jpg"
import nasscom from "../image/nasscom-2.jpg"
import uncodemylogobanner from "../image/uncodemy-logo-banner.png"
import download from "../image/download.svg"
import pdfFile from '../pdf/FullStack-Uncodemy.pdf'





const Banner = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  

  const hideBanner = () => {

    const Banner = document.getElementsByClassName('banner-lower-box')[0];
    const formContainer = document.getElementsByClassName('form-main')[0];


    Banner.style.opacity = "0.5";
    formContainer.style.visibility = "visible";


  }

 



  const hideForm = () => {

    const formContainer = document.getElementsByClassName('form-main')[0];
    const Banner = document.getElementsByClassName('banner-lower-box')[0];
    formContainer.style.visibility = "hidden";
    Banner.style.opacity = "1";

  }

  const goToBottom = () => {
   
    const gotoValue = (document.body.scrollHeight) - 800;

    
    window.scrollTo({ top: gotoValue, left: 0, behavior: 'smooth' })
  }

  const submitHandle = async(e) => {
    e.preventDefault();   

      let data = new FormData();
      data.append('name', name);
      data.append('email', email);
      data.append('mobile', mobile);

      try{
        const response = await axios.post('https://gvcloudsecure.com/formSubmit.php', data);

        
        if(response.data===1){
          
          window.open(pdfFile,'_blank');
               setEmail('')
               setMobile('')
               setName('');
        }

        else{
          alert(response.data)
          console.log(response.data);
        
        }
      }
      catch(error) {
        alert("There is some error occured") 
      };


  }


  return (
    <div className='banner'>
      <div className='form-main'>
        <div className='form-container'>
          <div className='brochure'>
            Receive Your Brochure
            <img src={cross} onClick={hideForm} />
          </div>
          <div className='form-heading-text'>
            Submit your details below to learn more about the course fee, curriculum, placements, and more.
            <hr></hr>
          </div>
          <form method='#' onSubmit={submitHandle}>
            <input type='text' name='name' placeholder="Enter your Name*" required value={name} onChange={(e) => setName(e.target.value)} />
            <input type='email' name='email' placeholder="Enter your Email*" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type='tel' maxlength="10" minlength="10" name='mobile' placeholder="Enter your Phone No." required value={mobile} onChange={(e) => setMobile(e.target.value)} />
           

  
            <div className='submit-btn-container'>

              <input type='submit' id='submit-btn'/>
            </div>
          </form>
        </div>
      </div>

      <div className='banner-at-point'>
        <ul>
          <li>Home</li>
          <li><img src={rightArrow} /></li>
          <li>Bootcamps</li>

          <li><img src={rightArrow} /></li>
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
            Earn upto 10LPA on Course Completion<span id='price-text'>Book Your Seat With As Low As INR 2,000/- only</span>
            <strong>Duration of the program- 6 months</strong>

            <span className='cohort-text'><b style={{color:'black'}}>New Batches Starts from : </b>10th May, 12th May, 15th May, 17th May 2023 and So On.</span>
            <span className='limited-text'>Limited no. of seats available</span>
          </p>


        </div>
        <div className='lower-box-right'>
          <div className='associates-logo'>
            <img src={uncodemylogobanner}/>
            <span></span>
            <img src={nasscom}/>
            <span></span>
            <img src={fututreSkills}/>
            <span></span>
            <img src={nsdca}/>
          </div>
          <div className='full-stack-logo'>
          <img class="video-thumbnail" src={fullStack} />
       </div>

       <div className='certified-logo'>
       <img src={certified} />

        </div>
        </div>
      </div>
      <div className='btn-group'>
        <button id='curriculum-btn' onClick={hideBanner}><img src={download} />Download Curriculum</button>
        <button id='apply-btn' onClick={goToBottom}>Apply Now</button>
      </div>
    </div>
  )
}

export default Banner