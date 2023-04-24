import React, { useState, useEffect } from 'react'
import Left from "../image/left.png";
import Right from "../image/right.png";
import star from '../image/star.png'

const Learner = () => {

    const [imageAt, setImageAt] = useState(2);
    const [imageMove, setImageMove] = useState(0);

    useEffect(() => {

        const leftArrow = document.getElementsByClassName('review-left-arrow')[0];
        const RightArrow = document.getElementsByClassName('review-right-arrow')[0];

        if (imageAt > 2 && imageAt < 5) {
            leftArrow.style.cursor = "pointer";
            RightArrow.style.cursor = "pointer";

            leftArrow.style.opacity = "1";
            RightArrow.style.opacity = "1";
        }

        if (imageAt === 2) {
            leftArrow.style.cursor = "auto";
            leftArrow.style.opacity = "0.5";
        }

        if (imageAt === 5) {
            RightArrow.style.cursor = "auto";
            RightArrow.style.opacity = "0.5";
        }

    }, [imageAt])

    const moveImageLeft = () => {
        console.log("learner left");

        const reviews = document.getElementsByClassName('reviews')[0];

        if (imageAt > 2) {
            const nextmove = imageMove + 38;
            reviews.style.transform = "translate(" + nextmove + "vw)";
            setImageMove(nextmove);

            const currentimage = imageAt - 1;
            setImageAt(currentimage);
        }
    }

    const moveImageRight = () => {
        console.log("learner right");
        const reviews = document.getElementsByClassName('reviews')[0];

        if (imageAt < 5) {
            const nextmove = imageMove - 38;
            reviews.style.transform = "translate(" + nextmove + "vw)";
            setImageMove(nextmove);

            const currentimage = imageAt + 1;
            setImageAt(currentimage);
        }
    }
    return (
        <div className='learner'>
            <h2 class="section-heading text-center"> See what <b>our learners say</b></h2>
            <div className='review-left-arrow arrow-img' onClick={moveImageLeft}>
                <img src={Left} />
            </div>
            <div className='reviews-container'>
                <div className='reviews'>
                    <div class="review-thumb">
                        <div class="media">
                            <div class="review-img">
                                <img src="https://www.upgrad.com/bootcamps/images/reviews/review-1.png" alt="Mohamed Mufasil Mufeeth" title="Mohamed Mufasil Mufeeth" />
                            </div>
                            <div class="media-body align-self-center">
                                <div class="review-title">
                                    <h3> Vinay Kumar </h3>
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
                                  "  I completed Data Science course in this institute. Our trainer Upendra Sir was very Knowledgeablen and friendly. It is a good Institute for beginners who want to learn this course. Classes were handled both theoretically and practically."
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="review-thumb">
                        <div class="media">
                            <div class="review-img">
                                <img src="https://www.upgrad.com/bootcamps/images/reviews/review-7.jpg" alt="Mohamed Mufasil Mufeeth" title="Mohamed Mufasil Mufeeth" />
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
                                <img src="https://www.upgrad.com/bootcamps/images/reviews/review-7.jpg" alt="Mohamed Mufasil Mufeeth" title="Mohamed Mufasil Mufeeth" />
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
                                <img src="https://www.upgrad.com/bootcamps/images/reviews/review-7.jpg" alt="Mohamed Mufasil Mufeeth" title="Mohamed Mufasil Mufeeth" />
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
                                <img src="https://www.upgrad.com/bootcamps/images/reviews/review-7.jpg" alt="Mohamed Mufasil Mufeeth" title="Mohamed Mufasil Mufeeth" />
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
                </div>
            </div>

            <div className='review-right-arrow arrow-img' onClick={moveImageRight}>
                <img src={Right} />
            </div>
        </div>
    )
}

export default Learner