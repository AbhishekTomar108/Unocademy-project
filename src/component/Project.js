import React, {useState, useEffect} from 'react'
import Left from "../image/left.png";
import Right from "../image/right.png";

const Project = () => {

    const [moveCreatorImg, setmoveCreatorImg] =  useState(0);
    const [imageAt, setImageAt] = useState(4);

    useEffect(() => {

        const rightArrow = document.getElementsByClassName('right')[0]
        const leftArrow = document.getElementsByClassName('left')[0]

        if (imageAt > 4 && imageAt < 7) {
            rightArrow.style.cursor = "pointer";
            leftArrow.style.cursor = "pointer";

            rightArrow.style.opacity = "1"
            leftArrow.style.opacity = "1"

        }

        if (imageAt === 4) {
            leftArrow.style.cursor = "auto";
            leftArrow.style.opacity = "0.5"
        }

        if (imageAt === 7) {
            rightArrow.style.cursor = "auto";
            rightArrow.style.opacity = "0.5"
        }

    }, [imageAt])

    const moveImageRight = ()=>{
        console.log("right running");
        const projectCard = document.getElementsByClassName('project-card')[0];

        if(imageAt<7)
        {
        const nextMove = moveCreatorImg-300;
        projectCard.style.transform = "translate("+nextMove+"px)";
        setmoveCreatorImg(nextMove);

        const addImage = imageAt+1;
        setImageAt(addImage);
        }

    }

    const moveImageLeft = ()=>{
        const projectCard = document.getElementsByClassName('project-card')[0];

        if(imageAt>4){
        const nextMove = moveCreatorImg+300;
        projectCard.style.transform = "translate("+nextMove+"px)";

        setmoveCreatorImg(nextMove);
        const addImage = imageAt-1;
        setImageAt(addImage);
        }
        
    }
    return (
        <div className='project'>
            <h2>Get a real world understanding through <b>industry projects</b></h2>

            <div className='arrow-block'>
                <div className='left arrow-img' onClick={moveImageLeft}>
                    <img src={Left} />
                </div>

                <div className='right arrow-img' onClick={moveImageRight}>
                    <img src={Right} />
                </div>
            </div>
            <div className='project-card-container'>
                <div className='project-card'>
                    <div class="project-thumb">
                        <img class="project-img" src="https://www.upgrad.com/bootcamps/images/projects/1.png" alt="Bookshelf" title="Bookshelf" />
                        <h5 class="proj-title"> Bookshelf </h5>
                        <h3 class="proj-name"> Social Networking </h3>
                        <p>
                            A social networking application, like Facebook, that allows users to create a curated virtual bookshelf with reviews
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
                        <img class="project-img" src="https://www.upgrad.com/bootcamps/images/projects/2.png" alt="Bookshelf" title="Bookshelf" />
                        <h5 class="proj-title"> Flixxit </h5>
                        <h3 class="proj-name"> Entertainment </h3>
                        <p>
                            A video streaming web app like Netflix, Prime Video or Apple TV+
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