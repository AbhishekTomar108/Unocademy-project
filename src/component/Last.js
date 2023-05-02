import React, {useState} from 'react'
import axios from "axios"
import pdfFile from '../pdf/FullStack-Uncodemy.pdf'
import contact from '../image/contact-1.png'

const Last = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [location, setLocation] = useState('');
    const [mode, setMode] = useState('');
    const [submitStatus, setSubmitStatus] = useState(true);

    const checkAgree =()=>{
        console.log('status ',submitStatus);
      const agreeCheck = document.getElementById('terms');
      const submitBtn = document.getElementsByClassName('last-submit-btn-container')[0];
      
      submitBtn.style.opacity="1";
      setSubmitStatus(false);

        if(agreeCheck.checked){
          submitBtn.style.opacity="1";
          setSubmitStatus(false)
        }
        else{
            console.log('else is running');
          submitBtn.style.opacity="0.5";
          setSubmitStatus(true)
        }
    }

    const submitHandle = async(e)=>{
      e.preventDefault();
        console.log("name ",name);
      
      
       if(mobile.length!=10){
        alert("Please enter correct mobile no.");
        
       }
  
       else {
           
  
            let data = new FormData();
            data.append('name', name);
            data.append('email', email);
            data.append('mobile', mobile);
            data.append('location', location);
            data.append('mode', mode);
  
            try{
              const response = await axios.post('https://albuminoid-contempt.000webhostapp.com/formSubmit.php', data);
      
              
              if(response.data===1){
                window.location.href=pdfFile;
                     setEmail('')
                      setLocation('')
                      setMobile('')
                      setMode('')
                      setName('');
              }
      
              else{
                alert("sorry some error is occured")
                console.log(response)
              }
            }
            catch(error) {
              alert(error)
            };
  
          
  
       }
      }

      

    return (
        <div className='last'>
            <div class="got-a-ques-summary">
                <div class="container">
                    <img src={contact} alt="Support" title="Support" />
                    <div class="row">
                        <div class="col-md-6 offset-md-6">
                        <div className='last-form-main form-main'>
        <div className='last-form-container form-container'>
        <div className='last-form-heading-text form-heading-text'>
        Submit your details below to learn more about the course fee, curriculum, placements, and more.
        <hr></hr>
        </div>
      <form onSubmit={submitHandle}>
        <input required type='text' name='name' placeholder="Enter your Name*" value={name} onChange={(e)=>setName(e.target.value)}/>
        <input required type='email' name='email' placeholder="Enter your Email*" value={email} onChange={(e)=>setEmail(e.target.value)}/>
         <input required type='number' name='mobile' placeholder="Enter your Phone No." value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
       <input required type='text' name='location'placeholder="Enter your Location"  value={location} onChange={(e)=>setLocation(e.target.value)}/>
       <select required placeholder='select the training mode' onChange={e=>setMode(e.target.value)}>
        <option disabled selected value=''>Select the Training Mode</option>
        <option>Online</option>
        <option>Class room</option>
       </select>

       
        <div className='last-submit-btn-container'>
        <input type='submit' disabled={submitStatus} id='submit-btn'/>
       
        </div>
      </form>
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