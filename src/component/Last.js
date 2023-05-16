import React, {useState} from 'react'
import axios from "axios"
import pdfFile from '../pdf/FullStack-Uncodemy.pdf'
import contact from '../image/contact-1.png'
import Swal from 'sweetalert2'

const Last = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
   
   
   const numberOnly =()=> {
      // Get element by id which passed as parameter within HTML element event
      var element = document.getElementById('flight_number');
      // This removes any other character but numbers as entered by user
      element.value = element.value.replace(/[^0-9]/gi, "");

      if (element.value.length < 10) {
        element.setCustomValidity('Phone number must have at least 10 digits.');
      } else {
        element.setCustomValidity('');
      }
  }
    

    const submitHandle = async(e)=>{
      e.preventDefault();             
  
            let data = new FormData();
            data.append('name', name);
            data.append('email', email);
            data.append('mobile', mobile);
           
  
            try{
              const response = await axios.post('https://gvcloudsecure.com/formSubmit.php', data);
      
              
              if(response.data===1){
                Swal.fire({
                  icon: 'success',
                  title: 'Congratulation!',
                  html:`You are one step closer to become a <span style="color:#ff5124">Full Stack Developer</span>. Our Team will connect you soon with Detail Information`,
                  showConfirmButton: false,
                  timer: 8000
                })
                     setEmail('')
                      setMobile('')
                      setName('');
              }
      
              else{
                alert("sorry some error is occured")
              
              }
            }
            catch(error) {
              alert(error)
            };
  
          
 
  
    
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

         <input required type='tel' maxlength="10" minlength="10" name='mobile' onInput={numberOnly} id="flight_number" placeholder="Enter your Phone No." value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
      

       
        <div className='last-submit-btn-container'>
        <input type='submit' id='submit-btn'/>
       
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