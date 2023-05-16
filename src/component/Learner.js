import React, { useState, useEffect } from 'react'
import Left from "../image/banner-left-arrow.png";
import Right from "../image/banner-right-arrow.png";
import star from '../image/star.png'
import mani from '../image/mani.jpg'
import mohit from '../image/mohit.jpg'
import sanoj from '../image/sanoj.jpg'
import nitin from '../image/nitin.jpg'
import david from '../image/david.jpg'
import rajendra from '../image/rajendra.jpg'
import himanshu from '../image/himanshu.jpg'
import deepak from '../image/deepak.jpg'
import abhilasha from '../image/abhilasha.jpg'
import saurabh from '../image/saurabh.jpg'

const Learner = () => {

    const [imageAt, setImageAt] = useState(2);
    const [imageMove, setImageMove] = useState(0);
    const [stopScroll, setStopScroll] =  useState(false);

    useEffect(() => {

        let scrollInterval =null;

        const leftArrow = document.getElementsByClassName('review-left-arrow')[0];
        const RightArrow = document.getElementsByClassName('review-right-arrow')[0];

        if (imageAt > 2 && imageAt < 10) {
            leftArrow.style.cursor = "pointer";
            RightArrow.style.cursor = "pointer";

            leftArrow.style.opacity = "1";
            RightArrow.style.opacity = "1";
        }

        if (imageAt === 2) {
            leftArrow.style.cursor = "auto";
            leftArrow.style.opacity = "0.5";
        }

        if (imageAt === 10) {
            RightArrow.style.cursor = "auto";
            RightArrow.style.opacity = "0.5";
        }

        if(document.documentElement.clientWidth >= 901)
        {
            const reviews = document.getElementsByClassName('reviews')[0];
     
      const reviewImage = document.getElementsByClassName('review-thumb');
    
      let totalItems =  reviewImage.length;   
        let currentIndex = 1;
       let nextMove = 36;
       let direction =1;
        
      
   if(stopScroll===false){
   
    scrollInterval = window.setInterval(() => {
       
    currentIndex = (currentIndex + direction) % (totalItems);
   
    if (currentIndex === -1) {
      currentIndex = (totalItems) - 1;
     
    }
    reviews.style.transform = `translateX(-${currentIndex * nextMove}vw)`;

    if (currentIndex === (totalItems) - 1 && direction === 1) {
      direction = -1;
    } else if (currentIndex === 0 && direction === -1) {
      direction = 1;
    }
  }, 1500)// Change slide every 3 seconds
  // Change slide every 3 seconds
 }
 
 else{
    
    
    window.clearInterval(scrollInterval);
 }

        }

        return () => {
            window.clearInterval(scrollInterval);
            }

    }, [imageAt])

    const moveImageLeft = () => {
       

        const reviews = document.getElementsByClassName('reviews')[0];

        if (imageAt > 2) {
            const nextmove = imageMove + 36;
            reviews.style.transform = "translate(" + nextmove + "vw)";
            setImageMove(nextmove);

            const currentimage = imageAt - 1;
            setImageAt(currentimage);
        }
    }

    const moveImageRight = () => {
        
        const reviews = document.getElementsByClassName('reviews')[0];

        if (imageAt < 10) {
            const nextmove = imageMove - 36;
            reviews.style.transform = "translate(" + nextmove + "vw)";
            setImageMove(nextmove);

            const currentimage = imageAt + 1;
            setImageAt(currentimage);
        }
    }
    return (
        <div className='learner'>
            <h2 class="section-heading text-center"> See what <b>Our Learners Say</b></h2>
            <div className='review-left-arrow arrow-img' onClick={()=>{moveImageLeft();setStopScroll(true)}}>
                <img src={Left}/>
            </div>
            <div className='reviews-container'>
                <div className='reviews'>
                    <div class="review-thumb">
                        <div class="media">
                            <div class="review-img">
                                <img src={mani}/>
                                 
                            </div>
                            <div class="media-body align-self-center">
                                <div class="review-title">
                                    <h3> Mani Raja </h3>
                                </div>
                                <div className="star-img-group">
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                </div>

                                <hr></hr>
                                <p>
                                  " I joined the Uncodemy for MERN Stack course as I was interested in the development course. It was my best decision because I got very good teaching from Ajay sir. I thank them wholeheartedly. Also, our mentors assured us about placements and kept us enthusiastic. Thanks, Uncodemy. And special thanks to Shivani mam and Pooja mam for showing trust in us and always keep encouraging us. I also suggest joining Uncodemy who are interested to start a career in the IT field."
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="review-thumb">
                        <div class="media">
                            <div class="review-img">
                            <img src={mohit}/>
                            </div>
                            <div class="media-body align-self-center">
                                <div class="review-title">
                                    <h3>Mohit Sharma </h3>
                                </div>
                                <div className="star-img-group">
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                </div>

                                <hr></hr>
                                <p>
                                 "   Uncodemy gave me the best experience of theoritical and practical knowledge of Java Full stack course. Initially I was confused regarding pursuing the training from here but throughout the training the training I got a wonderful experience."
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="review-thumb">
                        <div class="media">
                            <div class="review-img">
                            <img src={nitin}/>
                            </div>
                            <div class="media-body align-self-center">
                                <div class="review-title">
                                    <h3>Nitin Yadav </h3>
                                </div>
                                <div className="star-img-group">
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                </div>

                                <hr></hr>
                                <p>
                                  "  I got trained in MERN full Stack development from Uncodemy, their teaching methodology is very practical, Industry relevant, and interactive.
                                    our mentor Ajay Sir made the concepts very clear and simple and taught us the best ways and practices that I could never learn anywhere else before, and mentors are supportive and friendly."
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="review-thumb">
                        <div class="media">
                            <div class="review-img">
                            <img src={sanoj}/>
                            </div>
                            <div class="media-body align-self-center">
                                <div class="review-title">
                                    <h3> Sanoj Kumar</h3>
                                </div>
                                <div className="star-img-group">
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                </div>

                                <hr></hr>
                                <p>
                              "  I done my mern full stack course the best software training institute in Noida. I'am from Delhi studying final year before joined here don't know anything now i done my Health product base wep app in Mern. faculty Ajay sir and management was very supportive and caring every one. Thank you i refer every one to join here for Full stack development course."
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="review-thumb">
                        <div class="media">
                            <div class="review-img">
                            <img src={david}/>
                            </div>
                            <div class="media-body align-self-center">
                                <div class="review-title">
                                <h3> David Raj</h3>
                                </div>
                                <div className="star-img-group">
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                </div>

                                <hr></hr>
                                <p>
                                    "I got trained in MERN full Stack development from Uncodemy. Their teaching methodology is very practical, industry relevant, and interactive.

                                    Our mentor Ajay Sir made the concepts very clear and simple and taught us the best ways and practices that I could never learn anywhere else before. He taught us to choose technology that works for each project, not just implement it excitedly without any thought of how it can be executed or make the most out of it. After that we were given training on how to use web technologies such as HTML5, JavaScript and CSS3 to build a complete stack which we could also use for building our own applications as well as modifying code from existing projects."
                                </p>
                            </div>
                        </div>
                    </div>

                    
                    <div class="review-thumb">
                        <div class="media">
                            <div class="review-img">
                            <img src={deepak}/>
                            </div>
                            <div class="media-body align-self-center">
                                <div class="review-title">
                                <h3>Deepak</h3>
                                </div>
                                <div className="star-img-group">
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                </div>

                                <hr></hr>
                                <p>
                                    "Hello All, I am very glad to write this review on Uncodemy, This is one of the best IT training and placement companies. My experience with all processes and especially with the Training department was very good. I have completed the mern full stack course from here. The placement department of Uncodemy is very active and helpful in making your future bright. So I can suggest If you are looking for IT Training & placement then go there and register yourself and get good knowledge and a good Job. Thank You Uncodemy Team.."
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="review-thumb">
                        <div class="media">
                            <div class="review-img">
                            <img src={himanshu}/>
                            </div>
                            <div class="media-body align-self-center">
                                <div class="review-title">
                                <h3>Himanshu</h3>
                                </div>
                                <div className="star-img-group">
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                </div>

                                <hr></hr>
                                <p>
                                    "I had an awesome experience learning Mern Full stack programming from Uncodemy, it gives 100% personal attention and has flexible timings as per candidate requirements. Friendly class ambience created by the Institute.
                                        The trainer is cooperative and has good command over the subject. The concepts are explained with depth and clarity. It is one of the best institute for software courses in Noida.
                                        After having a good experience with Mern Full stack I also joined for Python Training and Data science Course. The course was well planned. It would be highly recommended by me to join this institute. Most importantly he gives personal attention on each candidate from both practical and practice point of view."
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="review-thumb">
                        <div class="media">
                            <div class="review-img">
                            <img src={rajendra}/>
                            </div>
                            <div class="media-body align-self-center">
                                <div class="review-title">
                                <h3>Rajendra</h3>
                                </div>
                                <div className="star-img-group">
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                </div>

                                <hr></hr>
                                <p>
                                    "Uncodemy is the Best learning institute for web development courses. I have completed MERN Stack Developement course in Noida from Uncodemy. Trainers and other faculties are very supportive and co-operative. Its been a great learning experience for me. I suggest Uncodemy for everyone who wants build there carrier in web development field. I'm very much thankful to Ajay Sir, Anam Mam, and Pradyumn Sir fot their support."
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="review-thumb">
                        <div class="media">
                            <div class="review-img">
                            <img src={abhilasha}/>
                            </div>
                            <div class="media-body align-self-center">
                                <div class="review-title">
                                <h3>Neha Sharma</h3>
                                </div>
                                <div className="star-img-group">
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                </div>

                                <hr></hr>
                                <p>
                                    "I got trained in JAVA Full Stack development from Uncodemy, their teaching methodology is very practical, Industry relevant and interactive, our mentor Rahul Sir made the concepts very clear and simple, taught us the best ways and practices that I could never learn anywhere else before, mentors are supportive and friendly. I got good hands-on experience as they provide relevant assignments and projects, they will focus, analyze, teach, support each and every student. within short span of time over there I am able to build complex projects. it is the best place to learn MERN full Stack development Course. Thank You"
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="review-thumb">
                        <div class="media">
                            <div class="review-img">
                            <img src={saurabh}/>
                            </div>
                            <div class="media-body align-self-center">
                                <div class="review-title">
                                <h3>saurabh</h3>
                                </div>
                                <div className="star-img-group">
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                </div>

                                <hr></hr>
                                <p>
                                    "I joined Uncodemy as a Python full Stack course. I was fully satisfied with this solutions by the way of teaching skills given by trainer Ajay sir. while coming to the placement, HR Anam mam who always motivate and gave confident to got placed and other staff like Pooja mam and udit sir are very friendly regarding to discuss anything. A very big thanks to the whole Uncodemy team for the support."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='review-right-arrow arrow-img'onClick={()=>{moveImageRight();setStopScroll(true)}}>
                <img src={Right} />
            </div>
        </div>
    )
}

export default Learner