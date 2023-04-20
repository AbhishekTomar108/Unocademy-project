import React, { useState, useEffect } from 'react'
import Left from "../image/left.png";
import Right from "../image/right.png";

const Learner = () => {

    const [imageAt, setImageAt] = useState(2);
    const [imageMove, setImageMove] = useState(0);

    useEffect(()=>{

        const leftArrow = document.getElementsByClassName('review-left-arrow')[0];
        const RightArrow = document.getElementsByClassName('review-right-arrow')[0];

        if(imageAt>2  && imageAt<5)
        {
            leftArrow.style.cursor = "pointer";
            RightArrow.style.cursor = "pointer";

            leftArrow.style.opacity = "1";
            RightArrow.style.opacity = "1";
        }

        if(imageAt===2)
        {
            leftArrow.style.cursor = "auto";
            leftArrow.style.opacity = "0.5";
        }

        if(imageAt===5)
        {
            RightArrow.style.cursor = "auto";
            RightArrow.style.opacity = "0.5";
        }

    },[imageAt])

    const moveImageLeft = () => {
        console.log("learner left");

        const reviews = document.getElementsByClassName('reviews')[0];

        if (imageAt > 2) {
            const nextmove = imageMove + 600;
            reviews.style.transform = "translate(" + nextmove + "px)";
            setImageMove(nextmove);

            const currentimage = imageAt - 1;
            setImageAt(currentimage);
        }
    }

    const moveImageRight = () => {
        console.log("learner right");
        const reviews = document.getElementsByClassName('reviews')[0];

        if (imageAt < 5) {
            const nextmove = imageMove - 600;
            reviews.style.transform = "translate(" + nextmove + "px)";
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
                                    <h3> Mohamed Mufasil Mufeeth <a href="https://www.linkedin.com/in/mohamed-mufasil-mufeeth-364b54202" target="_blank" rel="nofollow"> <i class="icons icon-review-linkedin"></i> </a></h3>
                                </div>
                                <div class="stars-list">
                                    <i class="icons icon-star"></i>
                                    <i class="icons icon-star"></i>
                                    <i class="icons icon-star"></i>
                                    <i class="icons icon-star"></i>
                                    <i class="icons icon-star"></i>
                                </div>
                                <p>
                                    My journey with upGrad was great. I learnt new technologies and skills that would help to build my career. I am currently working as a software developer at BYJUs. I was jobless for a year and ... <a href="javascript:void(0);" class="show-more" data-toggle="modal" data-target=".review-1">Show More</a>
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
                                    <h3> Mohamed Mufasil Mufeeth <a href="https://www.linkedin.com/in/mohamed-mufasil-mufeeth-364b54202" target="_blank" rel="nofollow"> <i class="icons icon-review-linkedin"></i> </a></h3>
                                </div>
                                <div class="stars-list">
                                    <i class="icons icon-star"></i>
                                    <i class="icons icon-star"></i>
                                    <i class="icons icon-star"></i>
                                    <i class="icons icon-star"></i>
                                    <i class="icons icon-star"></i>
                                </div>
                                <p>
                                    This course best fits people who want to kick start their careers in Software Development without having the required preconditioning. The most wholesome part of this course is the... <a href="javascript:void(0);" class="show-more" data-toggle="modal" data-target=".review-7">Show More</a>
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
                                    <h3> Mohamed Mufasil Mufeeth <a href="https://www.linkedin.com/in/mohamed-mufasil-mufeeth-364b54202" target="_blank" rel="nofollow"> <i class="icons icon-review-linkedin"></i> </a></h3>
                                </div>
                                <div class="stars-list">
                                    <i class="icons icon-star"></i>
                                    <i class="icons icon-star"></i>
                                    <i class="icons icon-star"></i>
                                    <i class="icons icon-star"></i>
                                    <i class="icons icon-star"></i>
                                </div>
                                <p>
                                    This course best fits people who want to kick start their careers in Software Development without having the required preconditioning. The most wholesome part of this course is the... <a href="javascript:void(0);" class="show-more" data-toggle="modal" data-target=".review-7">Show More</a>
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
                                    <h3> Mohamed Mufasil Mufeeth <a href="https://www.linkedin.com/in/mohamed-mufasil-mufeeth-364b54202" target="_blank" rel="nofollow"> <i class="icons icon-review-linkedin"></i> </a></h3>
                                </div>
                                <div class="stars-list">
                                    <i class="icons icon-star"></i>
                                    <i class="icons icon-star"></i>
                                    <i class="icons icon-star"></i>
                                    <i class="icons icon-star"></i>
                                    <i class="icons icon-star"></i>
                                </div>
                                <p>
                                    This course best fits people who want to kick start their careers in Software Development without having the required preconditioning. The most wholesome part of this course is the... <a href="javascript:void(0);" class="show-more" data-toggle="modal" data-target=".review-7">Show More</a>
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
                                    <h3> Mohamed Mufasil Mufeeth <a href="https://www.linkedin.com/in/mohamed-mufasil-mufeeth-364b54202" target="_blank" rel="nofollow"> <i class="icons icon-review-linkedin"></i> </a></h3>
                                </div>
                                <div class="stars-list">
                                    <i class="icons icon-star"></i>
                                    <i class="icons icon-star"></i>
                                    <i class="icons icon-star"></i>
                                    <i class="icons icon-star"></i>
                                    <i class="icons icon-star"></i>
                                </div>
                                <p>
                                    This course best fits people who want to kick start their careers in Software Development without having the required preconditioning. The most wholesome part of this course is the... <a href="javascript:void(0);" class="show-more" data-toggle="modal" data-target=".review-7">Show More</a>
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