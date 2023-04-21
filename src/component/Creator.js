import React, { useState, useEffect } from 'react'
import linkedIn from "../image/LinkedIn.png"
import Left from "../image/left.png";
import Right from "../image/right.png";
import Riya from "../image/riyatiwari.jpg"
import Preity from "../image/preitySingh.jpg"
import Ritesh from "../image/riteshSingh.jpg"
import STAR from '../image/star.png'

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
            console.log("width =",window.innerWidth)
            // if(window.innerWidth>861 && window.innerWidth<1034)
            // {
            //     console.log("innerwidth is running");
            // const nextMove = moveCreatorImg - 250;
            // creatorImgBlock.style.transform = "translate(" + nextMove + "px)";
            // setmoveCreatorImg(nextMove);

            // const addImage = imageAt + 1;
            // setImageAt(addImage);
            // }

            
                const nextMove = moveCreatorImg - 26.5;
                creatorImgBlock.style.transform = "translate(" + nextMove + "%)";
                setmoveCreatorImg(nextMove);
    
                const addImage = imageAt + 1;
                setImageAt(addImage);
        

        }

    }

    const moveImageLeft = () => {
        console.log("creator left");

        const creatorImgBlock = document.getElementsByClassName('creator-img-block')[0];

        if (imageAt > 4) {
            console.log("width =",window.innerWidth)

            // if(window.innerWidth>861 && window.innerWidth<1034)
            // {
            //     console.log("innerwidth is running");
            // const nextMove = moveCreatorImg + 250;
            // creatorImgBlock.style.transform = "translate(" + nextMove + "px)";

            // setmoveCreatorImg(nextMove);
            // const addImage = imageAt - 1;
            // setImageAt(addImage);
            // }

           
                const nextMove = moveCreatorImg + 26.5;
                creatorImgBlock.style.transform = "translate(" + nextMove + "%)";
    
                setmoveCreatorImg(nextMove);
                const addImage = imageAt - 1;
                setImageAt(addImage);
            
        }
    }

    const showCreatorDetail = (index)=>{
        console.log("showing");

        // const creatorDetail  = document.getElementsByClassName('creator-details')[index];
        // const projectThumb = document.getElementsByClassName('program-thumb')[index];
        // const CreatorImg = document.getElementsByClassName('creator-img')[index];
        
      

        //     creatorDetail.style.top = "60px";
        //     projectThumb.style.filter = "blur(1px)";
        //     projectThumb.style.backgroundColor = "black";
        //     CreatorImg.style.opacity = "0.5";
      
        
      
    }

    const hideCreatorDetails = (index)=>{
        console.log("hiding");
        
        // const creatorDetail  = document.getElementsByClassName('creator-details')[index];
        // const projectThumb = document.getElementsByClassName('program-thumb')[index];
        // const CreatorImg = document.getElementsByClassName('creator-img')[index];
        
        // creatorDetail.style.top = "400px";
        // projectThumb.style.filter = "blur(0px)";
        // projectThumb.style.backgroundColor = "white";
        // CreatorImg.style.opacity = "1";
    }

    return (
        <div className='creator'>
            <h2>Program <b>creators</b></h2>

            <div className='left-arrow arrow-img' onClick={moveImageLeft}>
                <img src={Left} />
            </div>

            <div className='creator-img-container'>
          
                <div className='creator-img-block'>
                    <div className='thumb-container' onMouseOver={()=>showCreatorDetail(0)} onMouseOut={()=>hideCreatorDetails(0)}>
                    <div class="program-thumb">
                        <img class="creator-img" src={Riya} />
                        <div class="program-thumb-content">
                            <h4> Riya Tiwari </h4>
                            <p> Wipro </p>
                            <div className='star-img-group'>
                                <img src={STAR}/>
                                <img src={STAR}/>
                                <img src={STAR}/>
                                <img src={STAR}/>
                                <img src={STAR}/>
                            </div>
                            <hr></hr>
                           <span className='student-review'>I have always wanted to create complete web applications on my own
                            I went for an Uncodemy Python Full Stack Course. I am so grateful to Uncodemy now because I can fulfil my dream. Their staff and  
                            <b>...See More</b>
                           </span>

                        </div>

                       
                    </div>
                    {/* <div className='creator-details'>
                    I have always wanted to create complete web applications on my own
                            I went for an Uncodemy Python Full Stack Course. I am so grateful to Uncodemy now because I can fulfil my dream. Their staff and training are so fruitful. They will walk you through the process of building your first full-stack python web application. If you Want to be a good program developer, hurry up and go for the Uncodemy Python Full Stack Course.
                       
                        </div> */}
                    </div>
                    <div className='thumb-container' onMouseOver={()=>showCreatorDetail(1)} onMouseOut={()=>hideCreatorDetails(1)}>
                    <div class="program-thumb">
                    <img class="creator-img" src={Preity} />
                        <div class="program-thumb-content">
                        <h4> Preity Singh </h4>
                            <p> Adobe </p>
                            <div className='star-img-group'>
                                <img src={STAR}/>
                                <img src={STAR}/>
                                <img src={STAR}/>
                                <img src={STAR}/>
                                <img src={STAR}/>
                            </div>
                            <hr></hr>
                           <span className='student-review'>Uncodemy is the perfect place to start your data science caree, as they provide regularlive classes with doubt resolution. Moreover, they also allow students to book additional mentorship sessions<b>...See More</b>
                           </span>
                        
                        </div>
                    </div>
                    {/* <div className='creator-details'>
                        Regardless of whether you prefer min-, max-, or combinations thereof, be cognizant of the order of your rules, keeping in mind that if multiple rules match the same element, the later rules will override the earlier rules.
                        </div> */}
                    </div>

                    <div className='thumb-container' onMouseOver={()=>showCreatorDetail(2)} onMouseOut={()=>hideCreatorDetails(2)}>
                    <div class="program-thumb">
                    <img class="creator-img" src={Ritesh} />
                        <div class="program-thumb-content">
                        <h4> Ritesh Singh </h4>
                            <p> Blooshah </p>
                            <div className='star-img-group'>
                                <img src={STAR}/>
                                <img src={STAR}/>
                                <img src={STAR}/>
                                <img src={STAR}/>
                                <img src={STAR}/>
                            </div>
                            <hr></hr>
                           <span className='student-review'>After spending 2 years in Non-IT job, I decided to switch to IT job. Uncodemy is one of the leading brand in this section. I have complete here Software Testing training course They have very good trainers and  <b>...See More</b>
                           </span>
                    
                        </div>
                    </div>
                    {/* <div className='creator-details'>
                        Regardless of whether you prefer min-, max-, or combinations thereof, be cognizant of the order of your rules, keeping in mind that if multiple rules match the same element, the later rules will override the earlier rules.
                        </div> */}
                    </div>

                    <div className='thumb-container' onMouseOver={()=>showCreatorDetail(3)} onMouseOut={()=>hideCreatorDetails(3)}>
                    <div class="program-thumb">
                        <img class="creator-img" src="https://www.upgrad.com/bootcamps/images/mentors/course-creators/Shruti%20Mantri.jpg" alt="Sachin Bhatnagar" title="Sachin Bhatnagar" />
                        <div class="program-thumb-content">
                            <h4> Sachin Bhatnagar </h4>
                            <p> Program Director - Full-Stack </p>
                            <p class="company-name">Knowledgehut upGrad</p>
                           
                        </div>
                    </div>
                    <div className='creator-details'>
                        Regardless of whether you prefer min-, max-, or combinations thereof, be cognizant of the order of your rules, keeping in mind that if multiple rules match the same element, the later rules will override the earlier rules.
                        </div>
                    </div>

                    <div className='thumb-container' onMouseOver={()=>showCreatorDetail(4)} onMouseOut={()=>hideCreatorDetails(4)}>
                    <div class="program-thumb">
                        <img class="creator-img" src="https://www.upgrad.com/bootcamps/images/mentors/course-creators/Jean-Marc%20Julien.jpg" alt="Sachin Bhatnagar" title="Sachin Bhatnagar" />
                        <div class="program-thumb-content">
                            <h4> Sachin Bhatnagar </h4>
                            <p> Program Director - Full-Stack </p>
                            <p class="company-name">Knowledgehut upGrad</p>
                            
                        </div>
                    </div>
                    <div className='creator-details'>
                        Regardless of whether you prefer min-, max-, or combinations thereof, be cognizant of the order of your rules, keeping in mind that if multiple rules match the same element, the later rules will override the earlier rules.
                        </div>
                    </div>

                    <div className='thumb-container' onMouseOver={()=>showCreatorDetail(5)} onMouseOut={()=>hideCreatorDetails(5)}>
                    <div class="program-thumb">
                        <img class="creator-img" src="https://www.upgrad.com/bootcamps/images/mentors/course-creators/Jean-Marc%20Julien.jpg" alt="Sachin Bhatnagar" title="Sachin Bhatnagar" />
                        <div class="program-thumb-content">
                            <h4> Sachin Bhatnagar </h4>
                            <p> Program Director - Full-Stack </p>
                            <p class="company-name">Knowledgehut upGrad</p>
                           
                        </div>
                    </div>
                    <div className='creator-details'>
                        Regardless of whether you prefer min-, max-, or combinations thereof, be cognizant of the order of your rules, keeping in mind that if multiple rules match the same element, the later rules will override the earlier rules.
                        </div>
                    </div>

                    <div className='thumb-container' onMouseOver={()=>showCreatorDetail(6)} onMouseOut={()=>hideCreatorDetails(6)}>
                    <div class="program-thumb">
                        <img class="creator-img" src="https://www.upgrad.com/bootcamps/images/mentors/course-creators/Jean-Marc%20Julien.jpg" alt="Sachin Bhatnagar" title="Sachin Bhatnagar" />
                        <div class="program-thumb-content">
                            <h4> Sachin Bhatnagar </h4>
                            <p> Program Director - Full-Stack </p>
                            <p class="company-name">Knowledgehut upGrad</p>
                            
                        </div>
                    </div>
                    <div className='creator-details'>
                        Regardless of whether you prefer min-, max-, or combinations thereof, be cognizant of the order of your rules, keeping in mind that if multiple rules match the same element, the later rules will override the earlier rules.
                        </div>
                    </div>

                    <div className='thumb-container' onMouseOver={()=>showCreatorDetail(7)} onMouseOut={()=>hideCreatorDetails(7)}>
                    <div class="program-thumb">
                        <img class="creator-img" src="https://www.upgrad.com/bootcamps/images/mentors/course-creators/Jean-Marc%20Julien.jpg" alt="Sachin Bhatnagar" title="Sachin Bhatnagar" />
                        <div class="program-thumb-content">
                            <h4> Sachin Bhatnagar </h4>
                            <p> Program Director - Full-Stack </p>
                            <p class="company-name">Knowledgehut upGrad</p>
                            
                        </div>
                    </div>
                    <div className='creator-details'>
                        Regardless of whether you prefer min-, max-, or combinations thereof, be cognizant of the order of your rules, keeping in mind that if multiple rules match the same element, the later rules will override the earlier rules.
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