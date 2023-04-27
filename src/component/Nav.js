import React from 'react'
import "../css/style.css"
import "../css/responsive.css"
import Uncodemy from "../image/uncodemy-logo.jpg"

const Nav = () => {
  return (
    <div className='nav'>
    <div className='header'>
    <img className='header-uncodemy-logo' src={Uncodemy}/>
       <div></div>
      <div className='header-btn'>
        <button id='call-us-btn'><a href="tel:91 770-192-8515">Call Us</a></button>
         <button id='chat-btn'><img src="https://www.upgrad.com/bootcamps/images/icon-sprite-new1.svg" class="icon whatsapp-icon"></img><a href="https://wa.link/tu20ly">Chat With Us</a></button>
      </div>
      </div>
       <hr style={{margin:"0"}}/>
       </div>
  )
}

export default Nav