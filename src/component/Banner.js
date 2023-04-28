import React, {useState} from 'react'
import axios from 'axios'
import cross from "../image/cross-1.png"
import rightArrow from "../image/banner-right-arrow.png"
import fullStack from "../image/full-stack-image.jpg"
import download from "../image/download.svg"
import pdfFile from '../pdf/uncodemy-file.pdf'





const Banner = () => {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [mobile, setMobile] = useState('');
   const [location, setLocation] = useState('');

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

    const submitHandle = ()=>{
      console.log("name ",name);
    
     if(name.length<3){
    
      alert("Name should be at least four character");
      
     }
     if(mobile.length!=10){
      alert("Please enter correct mobile no.");
      
     }
     if(email.length===0){
      alert("Email must be filled");
   
     }
     if(location.length===0){
      alert("Location must be filled");
    
     }

     else{
          const url = 'http://localhost/uncodemy/formSubmit.php';

          let data = new FormData();
          data.append('name', name);
          data.append('email', email);
          data.append('mobile', mobile);
          data.append('location', location);

          axios.post(url, data).then(window.open(pdfFile, '_blank'))
          .catch(error=>console.log("error"));

          // axios({
          //   method: 'post',
          //   url: url,
          //   data: data
          // }).then(()=> window.open(pdfFile))
          // .catch(error=>alert(error));

     }
    }

  
  return (
    <div className='banner'>
     <div className='form-main'>
        <div className='form-container'>
        <div className='brochure'>
          Receive Your Brochure
          <img src={cross} onClick={hideForm}/>
        </div>
        <div className='form-heading-text'>
        Submit your details below to learn more about the course fee, curriculum, placements, and more.
        <hr></hr>
        </div>
      <form>
        <input type='text' name='name' placeholder="Enter your Name*" value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type='email' name='email' placeholder="Enter your Email*" value={email} onChange={(e)=>setEmail(e.target.value)}/>
         <input type='number' name='mobile' placeholder="Enter your Phone No." value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
       <input type='text' name='location'placeholder="Enter your Location"  value={location} onChange={(e)=>setLocation(e.target.value)}/>
       <select placeholder='select the training mode'>
        <option disabled selected>Select the Training Mode</option>
        <option>Online</option>
        <option>Class room</option>
       </select>

       <div className='agree-box'><input type="checkbox" name="terms" id="terms" required onchange="activateButton(this)"/>  I Agree Terms & Coditions
       </div>
        <div className='submit-btn'>

        <input type='submit'  onClick={submitHandle}/>
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