import React, { useState, useEffect } from 'react'
import linkedIn from "../image/LinkedIn.png"
import Left from "../image/left.png";
import Right from "../image/right.png";

const Creator = () => {
    const [moveCreatorImg, setmoveCreatorImg] = useState(0);
    const [imageAt, setImageAt] = useState(4);

    useEffect(() => {

        const rightArrow = document.getElementsByClassName('right-arrow')[0]
        const leftArrow = document.getElementsByClassName('left-arrow')[0]

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

    const moveImageRight = () => {
        console.log("creator right");
        const creatorImgBlock = document.getElementsByClassName('creator-img-block')[0];

        if (imageAt < 7) {
            const nextMove = moveCreatorImg - 270;
            creatorImgBlock.style.transform = "translate(" + nextMove + "px)";
            setmoveCreatorImg(nextMove);

            const addImage = imageAt + 1;
            setImageAt(addImage);

        }

    }

    const moveImageLeft = () => {
        console.log("creator left");

        const creatorImgBlock = document.getElementsByClassName('creator-img-block')[0];

        if (imageAt > 4) {
            const nextMove = moveCreatorImg + 270;
            creatorImgBlock.style.transform = "translate(" + nextMove + "px)";

            setmoveCreatorImg(nextMove);
            const addImage = imageAt - 1;
            setImageAt(addImage);
        }
    }
    return (
        <div className='creator'>
            <h2>Program <b>creators</b></h2>

            <div className='left-arrow arrow-img' onClick={moveImageLeft}>
                <img src={Left} />
            </div>

            <div className='creator-img-container'>
                <div className='creator-img-block'>
                    <div class="program-thumb">
                        <img class="creator-img" src="https://www.upgrad.com/bootcamps/images/mentors/course-creators/Sachin%20Bhatnagar.jpg" alt="Sachin Bhatnagar" title="Sachin Bhatnagar" />
                        <div class="program-thumb-content">
                            <h4> Sachin Bhatnagar </h4>
                            <p> Program Director - Full-Stack </p>
                            <p class="company-name">Knowledgehut upGrad</p>

                        </div>
                    </div>

                    <div class="program-thumb">
                        <img class="creator-img" src="https://www.upgrad.com/bootcamps/images/mentors/course-creators/Beau%20-%20Carnes.jpg" alt="Sachin Bhatnagar" title="Sachin Bhatnagar" />
                        <div class="program-thumb-content">
                            <h4> Sachin Bhatnagar </h4>
                            <p> Program Director - Full-Stack </p>
                            <p class="company-name">Knowledgehut upGrad</p>
                        
                        </div>
                    </div>

                    <div class="program-thumb">
                        <img class="creator-img" src="https://www.upgrad.com/bootcamps/images/mentors/course-creators/Jean-Marc%20Julien.jpg" alt="Sachin Bhatnagar" title="Sachin Bhatnagar" />
                        <div class="program-thumb-content">
                            <h4> Sachin Bhatnagar </h4>
                            <p> Program Director - Full-Stack </p>
                            <p class="company-name">Knowledgehut upGrad</p>
                    
                        </div>
                    </div>

                    <div class="program-thumb">
                        <img class="creator-img" src="https://www.upgrad.com/bootcamps/images/mentors/course-creators/Shruti%20Mantri.jpg" alt="Sachin Bhatnagar" title="Sachin Bhatnagar" />
                        <div class="program-thumb-content">
                            <h4> Sachin Bhatnagar </h4>
                            <p> Program Director - Full-Stack </p>
                            <p class="company-name">Knowledgehut upGrad</p>
                           
                        </div>
                    </div>

                    <div class="program-thumb">
                        <img class="creator-img" src="https://www.upgrad.com/bootcamps/images/mentors/course-creators/Jean-Marc%20Julien.jpg" alt="Sachin Bhatnagar" title="Sachin Bhatnagar" />
                        <div class="program-thumb-content">
                            <h4> Sachin Bhatnagar </h4>
                            <p> Program Director - Full-Stack </p>
                            <p class="company-name">Knowledgehut upGrad</p>
                            
                        </div>
                    </div>

                    <div class="program-thumb">
                        <img class="creator-img" src="https://www.upgrad.com/bootcamps/images/mentors/course-creators/Jean-Marc%20Julien.jpg" alt="Sachin Bhatnagar" title="Sachin Bhatnagar" />
                        <div class="program-thumb-content">
                            <h4> Sachin Bhatnagar </h4>
                            <p> Program Director - Full-Stack </p>
                            <p class="company-name">Knowledgehut upGrad</p>
                           
                        </div>
                    </div>

                    <div class="program-thumb">
                        <img class="creator-img" src="https://www.upgrad.com/bootcamps/images/mentors/course-creators/Jean-Marc%20Julien.jpg" alt="Sachin Bhatnagar" title="Sachin Bhatnagar" />
                        <div class="program-thumb-content">
                            <h4> Sachin Bhatnagar </h4>
                            <p> Program Director - Full-Stack </p>
                            <p class="company-name">Knowledgehut upGrad</p>
                            
                        </div>
                    </div>

                    <div class="program-thumb">
                        <img class="creator-img" src="https://www.upgrad.com/bootcamps/images/mentors/course-creators/Jean-Marc%20Julien.jpg" alt="Sachin Bhatnagar" title="Sachin Bhatnagar" />
                        <div class="program-thumb-content">
                            <h4> Sachin Bhatnagar </h4>
                            <p> Program Director - Full-Stack </p>
                            <p class="company-name">Knowledgehut upGrad</p>
                            
                        </div>
                    </div>




                </div>
            </div>

            <div className='right-arrow arrow-img' onClick={moveImageRight}>
                <img src={Right} />
            </div>
        </div>
    )
}

export default Creator