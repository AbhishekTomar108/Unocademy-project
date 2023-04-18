import React from 'react'
import "../css/style.css"
import "../css/responsive.css"

const Nav = () => {
  return (
    <div className='nav'>
    <div className='header'>
        <h1>UnCodemy</h1>
      <div className='header-btn'>
        <button id='write-to-us-btn'>Write to Us</button>
        <button id='call-us-btn'>Call Us</button>
        <button id='chat-btn'><img src="https://www.upgrad.com/bootcamps/images/icon-sprite-new1.svg" class="icon whatsapp-icon"></img>Chat With Us</button>
      </div>
      </div>
       <hr style={{margin:"0"}}/>
       </div>
  )
}

export default Nav