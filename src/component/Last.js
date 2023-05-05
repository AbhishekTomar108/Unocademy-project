import React, {useState} from 'react'
import axios from "axios"
import pdfFile from '../pdf/FullStack-Uncodemy.pdf'
import contact from '../image/contact-1.png'

const Last = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
   
   


    const submitHandle = async(e)=>{
      e.preventDefault();
      
      
       if(mobile.length!=10){
        // alert("Please enter correct mobile no.");
        
       }
  
       else {
           
  
            let data = new FormData();
            data.append('name', name);
            data.append('email', email);
            data.append('mobile', mobile);
           
  
            try{
              const response = await axios.post('https://albuminoid-contempt.000webhostapp.com/formSubmit.php', data);
      
              
              if(response.data===1){
                window.location.href=pdfFile;
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
         <input required type='tel' maxlength="10" minlength="10" name='mobile' placeholder="Enter your Phone No." value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
      

       
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