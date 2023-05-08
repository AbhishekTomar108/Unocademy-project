import React from 'react'
import Uncodemy from "../image/Uncodemy-logo-07.png"
import star from "../image/star.png"
import googleIcon from "../image/google-icon.png"
import sulekhaIcon from "../image/sulekha-icon.png"
import facebookIcon from "../image/facebook-icon-2.png"
import JustDialIcon from "../image/just-dial-icon.jpg"
import urban from "../image/urban.jpg"
import instagram from "../image/insta1.png"
import halfStar from "../image/half-star-2.png"
import star4 from "../image/4.9-star.jpg"

const Footer = () => {
  return (
    <div>
        <footer>
      
    <div class="container">
        <div class="footer-summary">
            <div class="top-footer">
                <div class="row">
                    <div class="col-md-3 company-logo-icon-container">
                    <a href="https://www.uncodemy.com/" target='_blank'><img src={Uncodemy} className='uncodemy-logo' /></a>
                     
                        <div class="social-icons">
                            <a href="https://www.facebook.com/uncodemyofficial/" target="_blank"><i class="icons icon-footer-fb"></i></a>
                            <a href="https://twitter.com/uncodemy?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank"><i class="icons icon-footer-tw"></i></a>
                            <a href="https://in.linkedin.com/company/uncodemy" target="_blank"><i class="icons icon-footer-in"></i></a>
                            <a href="https://www.youtube.com/channel/UCDR66fGjZxvdZl7g3x0xbWw" target="_blank"><i class="icons icon-footer-yt"></i></a>
                            <a href="https://www.instagram.com/uncodemyofficial/?hl=en" target="_blank" id='insta-a'><img src={instagram} class="icons icon-footer-img"/></a>
                        </div>
                    </div>
                    <div class="col-md-6 offset-md-3">
                    <div className='review-section'>
                        <div className='star-review-group'>
                        <div className='star-section'>
                           <img src={star4}/>
                        </div>
                        <div className='review-text top-text-review'>
                            4.9 out of 5 based on 10112 votes
                        </div>
                        </div>
                       
                       <div className='icon-review-container'>
                        <div className='company-icon google-review'>
                            <img src={googleIcon}/>
                            <div className='review-text'>
                            5/5
                        </div>
                        </div>
                       

                        <div className='company-icon sulekha-review'>
                            <img src={sulekhaIcon}/>
                            <div className='review-text'>
                            4.9/5
                        </div>
                        </div>
                       
                        <div className='company-icon just-dial-review'>
                            <img src={JustDialIcon}/>
                            <div className='review-text'>
                            4.9/5
                        </div>
                        </div>
                       
                        <div className='company-icon facebook-icon'>
                            <img src={facebookIcon}/>
                            <div className='review-text'>
                            4.9/5
                        </div>
                        </div>
                        <div className='company-icon urban-icon'>
                            <img src={urban}/>
                            <div className='review-text'>
                            4.9/5
                        </div>
                        </div>
                       </div>
                       
                    </div>
                    </div>
                </div>
            </div>
            <div class="bottom-footer">
                <p>
                    Copyright © 2020.  All rights reserved.
                </p>
            </div>
        </div>
    </div>
</footer>
    
    </div>
  )
}

export default Footer