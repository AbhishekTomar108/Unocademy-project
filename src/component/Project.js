import React, { useState, useEffect } from 'react'
import Left from "../image/left.png";
import Right from "../image/right.png";

const Project = () => {

    const [moveProjectImage, setmoveProjectImage] = useState(0);
    const [imageAt, setImageAt] = useState(4);

    useEffect(() => {

        const rightArrow = document.getElementsByClassName('project-right-arrow')[0]
        const leftArrow = document.getElementsByClassName('project-left-arrow')[0]

        if (imageAt > 4 && imageAt < 7) {
            console.log("first if");
            rightArrow.style.cursor = "pointer";
            leftArrow.style.cursor = "pointer";

            rightArrow.style.opacity = "1"
            leftArrow.style.opacity = "1"

        }

        if (imageAt === 4) {
            console.log("second if");

            leftArrow.style.cursor = "auto";
            leftArrow.style.opacity = "0.5";
        }

        if (imageAt === 7) {
            console.log("third if");

            rightArrow.style.cursor = "auto";
            rightArrow.style.opacity = "0.5";
        }

    }, [imageAt])

    const moveImageRight = () => {
        console.log("right running");
        const projectCard = document.getElementsByClassName('project-card')[0];

        if (imageAt < 7) {
            const nextMove = moveProjectImage - 30;
            projectCard.style.transform = "translate(" + nextMove + "vw)";
            setmoveProjectImage(nextMove);

            const addImage = imageAt + 1;
            setImageAt(addImage);
        }

    }

    const moveImageLeft = () => {
        console.log("left running");
        const projectCard = document.getElementsByClassName('project-card')[0];

        if (imageAt > 4) {
            const nextMove = moveProjectImage + 30;
            projectCard.style.transform = "translate(" + nextMove + "vw)";

            setmoveProjectImage(nextMove);
            const addImage = imageAt - 1;
            setImageAt(addImage);
        }

    }
    return (
        <div className='project'>
            <h2>Get a real world understanding through <b>Industry Projects</b></h2>

            
                <div className='project-left-arrow arrow-img' onClick={moveImageLeft}>
                    <img src={Left} />
                </div>

                <div className='project-right-arrow arrow-img' onClick={moveImageRight}>
                    <img src={Right} />
              
            </div>
            <div className='project-card-container'>
                <div className='project-card'>
                    <div class="project-thumb">
                        <img class="project-img" src="https://www.upgrad.com/bootcamps/images/projects/1.png" alt="Bookshelf" title="Bookshelf" />
                        <h5 class="proj-title"> Uncode Tech </h5>
                        <h3 class="proj-name"> Learning Management Systems</h3>
                        <p>
                            Uncode Tech offers the best professional LMS made to cater to industry requirements. LMS is built with State of IT Technology with World Class features, Course content, Industry expert trainer, Quiz, and Interview Preparation. 
                        </p>
                        <ul class="skills">
                            <li>
                                HTML 
                            </li>
                            <li>
                                CSS
                            </li>
                            <li>
                               Javascript
                            </li>
                            <li>
                               ReactJS
                            </li>
                            <li>
                               NodeJS
                            </li>
                            <li>
                               MongoDB
                            </li>
                            <li>
                               AWS
                            </li>
                            <li>
                               Trello Jira
                            </li>
                        </ul>
                    </div>

                    <div class="project-thumb">
                        <img class="project-img" src="https://www.upgrad.com/bootcamps/images/projects/2.png" alt="Bookshelf" title="Bookshelf" />
                        <h5 class="proj-title"> UncodeCart </h5>
                        <h3 class="proj-name"> E-commerce Application </h3>
                        <p>
                            The One-stop Shopping Destination. E-commerce is revolutionizing the way we all shop in India. E-commerce allows you to buy and sell tangible goods, digital products, or services online.
                        </p>
                        <ul class="skills">
                        <li>
                                HTML 
                            </li>
                            <li>
                                CSS
                            </li>
                            <li>
                               Javascript
                            </li>
                            <li>
                                Typescript
                            </li>
                            <li>
                                Java
                            </li>
                            <li>
                                Sql Server
                            </li>
                            <li>
                                AWS
                            </li>
                        </ul>
                    </div>

                    <div class="project-thumb">
                        <img class="project-img" src="https://www.upgrad.com/bootcamps/images/projects/3.png" alt="Bookshelf" title="Bookshelf" />
                        <h5 class="proj-title"> TrackUncode </h5>
                        <h3 class="proj-name"> Shipping and Tracking Software </h3>
                        <p>
                            Flexible modern app that makes it easyto ship and track by saving time. Reduces manual efforts by 80% by Processing orders faster and efficiently.
                        </p>
                        <ul class="skills">
                        <li>
                                HTML 
                            </li>
                            <li>
                                CSS
                            </li>
                            <li>
                               Javascript
                            </li>
                            <li>
                               ReactJS
                            </li>
                            <li>
                               NodeJS
                            </li>
                            <li>
                               MongoDB
                            </li>
                        </ul>
                    </div>

                    <div class="project-thumb">
                        <img class="project-img" src="https://www.upgrad.com/bootcamps/images/projects/3.png" alt="Bookshelf" title="Bookshelf" />
                        <h5 class="proj-title"> ShopPlusPlus </h5>
                        <h3 class="proj-name"> Commerce </h3>
                        <p>
                            An Amazon clone that allows users to create accounts, wish lists, browse and purchase products
                        </p>
                        <ul class="skills">
                            <li>
                                React JS
                            </li>
                            <li>
                                Node JS
                            </li>
                            <li>
                                Express JS
                            </li>
                            <li>
                                Creative Thinking
                            </li>
                        </ul>
                    </div>

                    <div class="project-thumb">
                        <img class="project-img" src="https://www.upgrad.com/bootcamps/images/projects/3.png" alt="Bookshelf" title="Bookshelf" />
                        <h5 class="proj-title"> ShopPlusPlus </h5>
                        <h3 class="proj-name"> Commerce </h3>
                        <p>
                            An Amazon clone that allows users to create accounts, wish lists, browse and purchase products
                        </p>
                        <ul class="skills">
                            <li>
                                React JS
                            </li>
                            <li>
                                Node JS
                            </li>
                            <li>
                                Express JS
                            </li>
                            <li>
                                Creative Thinking
                            </li>
                        </ul>
                    </div>

                    <div class="project-thumb">
                        <img class="project-img" src="https://www.upgrad.com/bootcamps/images/projects/3.png" alt="Bookshelf" title="Bookshelf" />
                        <h5 class="proj-title"> ShopPlusPlus </h5>
                        <h3 class="proj-name"> Commerce </h3>
                        <p>
                            An Amazon clone that allows users to create accounts, wish lists, browse and purchase products
                        </p>
                        <ul class="skills">
                            <li>
                                React JS
                            </li>
                            <li>
                                Node JS
                            </li>
                            <li>
                                Express JS
                            </li>
                            <li>
                                Creative Thinking
                            </li>
                        </ul>
                    </div>

                    <div class="project-thumb">
                        <img class="project-img" src="https://www.upgrad.com/bootcamps/images/projects/3.png" alt="Bookshelf" title="Bookshelf" />
                        <h5 class="proj-title"> ShopPlusPlus </h5>
                        <h3 class="proj-name"> Commerce </h3>
                        <p>
                            An Amazon clone that allows users to create accounts, wish lists, browse and purchase products
                        </p>
                        <ul class="skills">
                            <li>
                                React JS
                            </li>
                            <li>
                                Node JS
                            </li>
                            <li>
                                Express JS
                            </li>
                            <li>
                                Creative Thinking
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Project