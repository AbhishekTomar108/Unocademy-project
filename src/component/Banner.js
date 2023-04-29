import React, {useState} from 'react'
import axios from 'axios'
import cross from "../image/cross-1.png"
import rightArrow from "../image/banner-right-arrow.png"
import fullStack from "../image/fullstack-img.png"
import download from "../image/download.svg"
import pdfFile from '../pdf/uncodemy-file.pdf'





const Banner = () => {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [mobile, setMobile] = useState('');
   const [location, setLocation] = useState('');
   const [mode, setMode] = useState('Select the Training Mode');
   const [submitStatus, setSubmitStatus] = useState(true);

    const hideBanner=()=>{

        const Banner = document.getElementsByClassName('banner-lower-box')[0];
        const formContainer = document.getElementsByClassName('form-main')[0];
        

            Banner.style.opacity = "0.5";
            formContainer.style.visibility = "visible";
            
          
        }

        const checkAgree =()=>{
          
          const agreeCheck = document.getElementById('term');
          const submitBtn = document.getElementsByClassName('submit-btn-container')[0];
            if(agreeCheck.checked){

              submitBtn.style.opacity="1";
              setSubmitStatus(false)
            }
            else{
              submitBtn.style.opacity="0.5";
              setSubmitStatus(true)
            }
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
     
    
     

     else{
          const url = 'http://localhost/uncodemy/formSubmit.php';

          console.log("mode ", mode);
          
          let data = new FormData();
          data.append('name', name);
          data.append('email', email);
          data.append('mobile', mobile);
          data.append('location', location);
          data.append('mode', mode);


          axios.post(url, data).then(window.open(pdfFile))
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
        <input type='text' name='name' placeholder="Enter your Name*" required value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type='email' name='email' placeholder="Enter your Email*" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
         <input type='number' name='mobile' placeholder="Enter your Phone No." required value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
       <input type='text' name='location'placeholder="Enter your Location" required  value={location} onChange={(e)=>setLocation(e.target.value)}/>
       <select placeholder='select the training mode' onChange={e=>setMode(e.target.value)}>
        <option disabled selected>Select the Training Mode</option>
        <option value='online'>Online</option>
        <option value='classRoom'>Class room</option>
       </select>

       <div className='agree-box'><input type="checkbox" name="terms" id="term"  onChange={checkAgree}/>  I Agree Terms & Coditions
       </div>
        <div className='submit-btn-container'>

        <button disabled={submitStatus} id='submit-btn' onClick={submitHandle}>Submit</button>
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