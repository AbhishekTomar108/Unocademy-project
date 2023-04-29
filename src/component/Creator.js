import React, { useState, useEffect } from 'react'
import linkedIn from "../image/LinkedIn.png"
import Left from "../image/left.png";
import Right from "../image/right.png";
import Riya from "../image/riyatiwari (1).jpg"
import Preity from "../image/preitySingh.jpg"
import TANVI from "../image/tanvi.jpg"
import Ritesh from "../image/riteshSingh.jpg"
import ADITYA from "../image/adityaSingh.jpg"
import RAJENDRA from "../image/rajendra.jpg"
import SAURABH from "../image/saurabh.jpg"
import college from "../image/college.png"
import amity from "../image/amity.png"
import nalanda from "../image/nalanda.png"
import ashoka from "../image/ashoka.png"
import lpu from "../image/lpu.png"
import indianuniversity from "../image/indianuniversity.png"
import techno from "../image/techno.png"
import adobe from "../image/images.png"
import wipro from "../image/Wipro_Primary_Logo_Color_RGB.svg.png"
import deloitte from "../image/deloitte.png"
import hcl from "../image/hcl2.png"
import kpmg from "../image/kpmg.png"
import bloohash from "../image/bloohash.png"


const Creator = () => {
    const [moveCreatorImg, setmoveCreatorImg] = useState(0);
    const [imageAt, setImageAt] = useState(4);

    useEffect(() => {

        const rightArrow = document.getElementsByClassName('right-arrow')[0]
        const leftArrow = document.getElementsByClassName('left-arrow')[0]

        if (imageAt > 4 && imageAt < 6) {
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

            const nextMove = moveCreatorImg - 26;
            creatorImgBlock.style.transform = "translate(" + nextMove + "vw)";
            setmoveCreatorImg(nextMove);

            const addImage = imageAt + 1;
            setImageAt(addImage);


        }

    }

    const moveImageLeft = () => {
        console.log("creator left");

        const creatorImgBlock = document.getElementsByClassName('creator-img-block')[0];

        if (imageAt > 4) {
            console.log("width =", window.innerWidth)

            const nextMove = moveCreatorImg + 26;
            creatorImgBlock.style.transform = "translate(" + nextMove + "vw)";

            setmoveCreatorImg(nextMove);
            const addImage = imageAt - 1;
            setImageAt(addImage);

        }
    }

    const showCreatorDetail = (index) => {
        console.log("showing");

        const creatorDetail = document.getElementsByClassName('creator-details')[index];
        const projectThumb = document.getElementsByClassName('program-thumb')[index];
        const CreatorImg = document.getElementsByClassName('creator-img')[index];
        const programThummbHr = document.getElementsByClassName('program-thumb-content-hr')[index];
        const collegeImg = document.getElementsByClassName('college-img')[index];
        const programThummbHr1 = document.getElementsByClassName('program-thumb-content-hr-1')[index];



        creatorDetail.style.top = "60px";
        projectThumb.style.filter = "blur(1px)";
        projectThumb.style.backgroundColor = "#ff5421";
        CreatorImg.style.opacity = "0.1";
        programThummbHr.style.visibility = "visible";
        collegeImg.style.opacity = "0.1";
        programThummbHr1.style.visibility = "hidden";



    }

    const hideCreatorDetails = (index) => {
        console.log("hiding");

        const creatorDetail = document.getElementsByClassName('creator-details')[index];
        const projectThumb = document.getElementsByClassName('program-thumb')[index];
        const CreatorImg = document.getElementsByClassName('creator-img')[index];
        const programThummbHr = document.getElementsByClassName('program-thumb-content-hr')[index];
        const programThummbHr1 = document.getElementsByClassName('program-thumb-content-hr-1')[index];
        const collegeImg = document.getElementsByClassName('college-img')[index];


        creatorDetail.style.top = "460px";
        projectThumb.style.filter = "blur(0px)";
        projectThumb.style.backgroundColor = "white";
        CreatorImg.style.opacity = "1";
        programThummbHr.style.visibility = "hidden";
        collegeImg.style.opacity = "1";
        programThummbHr1.style.visibility = "visible";

    }

    return (
        <div className='creator'>
            <h2>Success <b>Stories</b></h2>

            <div className='left-arrow arrow-img' onClick={moveImageLeft}>
                <img src={Left} />
            </div>

            <div className='creator-img-container'>

                <div className='creator-img-block'>
                    <div className='thumb-container' onMouseOver={() => showCreatorDetail(0)} onMouseOut={() => hideCreatorDetails(0)}>
                        <div class="program-thumb">
                            <img class="creator-img" src={Riya} />
                            <div class="program-thumb-content">
                                <h4> Riya Tiwari </h4>
                                <hr className='program-thumb-content-hr-1'></hr>
                                <p className='college-img'><img src={amity} className='college-img-2' /> &rarr; <img src={wipro} className='college-img-2' /> </p>
                            </div>

                        </div>

                        <div className='creator-details'>
                            <div className='details'>
                                " I have always wanted to create complete web applications on my own
                                I went for an Uncodemy Python Full Stack Course. I am so grateful to Uncodemy now because I can fulfil my dream. Their staff and training are so fruitful. They will walk you through the process of building your first full-stack python web application. If you Want to be a good program developer, hurry up and go for the Uncodemy Python Full Stack Course."

                            </div>
                            <hr className='program-thumb-content-hr'></hr>

                        </div>

                    </div>
                    <div className='thumb-container' onMouseOver={() => showCreatorDetail(1)} onMouseOut={() => hideCreatorDetails(1)}>
                        <div class="program-thumb">
                            <img class="creator-img" src={ADITYA} />
                            <div class="program-thumb-content">
                                <h4> Aditya Singh </h4>
                                <hr className='program-thumb-content-hr-1'></hr>
                                <p className='college-img'> <img src={lpu} className='college-img-2' /> &rarr;<img src={deloitte} className='college-img-2' /> </p>

                            </div>
                        </div>

                        <div className='creator-details'>
                            <div className='details'>
                                "Uncodemy is the perfect place to start your data science caree, as they provide regularlive classes with doubt resolution. Moreover, they also allow students to book additional mentorship sessions to book additional mentorship sessions with industry experts to understand challenging topics better and gain industry insights. Uncodemy as highly as possible and suggest all the aspirants join Uncodemy without hesitation."
                            </div>
                            <hr className='program-thumb-content-hr'></hr>

                        </div>
                    </div>

                    <div className='thumb-container' onMouseOver={() => showCreatorDetail(2)} onMouseOut={() => hideCreatorDetails(2)}>
                        <div class="program-thumb">
                            <img class="creator-img" src={Ritesh} />
                            <div class="program-thumb-content">
                                <h4> Ritesh Singh </h4>
                                <hr className='program-thumb-content-hr-1'></hr>
                                <p className='college-img'><img src={nalanda} className='college-img-2' /> &rarr; <img src={bloohash} className='college-img-2' /> </p>


                            </div>
                        </div>

                        <div className='creator-details'>
                            <div className='details'>
                                "After spending 2 years in Non-IT job, I decided to switch to IT job. Uncodemy is one of the leading brand in this section. I have complete here Software Testing training course They have very good trainers and HR team who helps you to find the right job. The training content is very excellent and very useful to get your dream IT job. Special thanks to Shivendra Sir, Udit Sir, Anam Ma'am and HR department team for proper guidance and help throughout this journey. Now I'm working in the leading IT company with good package, all thanks to Uncodemy team."
                            </div>
                            <hr className='program-thumb-content-hr'></hr>

                        </div>
                    </div>

                    <div className='thumb-container' onMouseOver={() => showCreatorDetail(3)} onMouseOut={() => hideCreatorDetails(3)}>
                        <div class="program-thumb">
                            <img class="creator-img" src={TANVI} />
                            <div class="program-thumb-content">
                                <h4> Tanvi </h4>
                                <hr className='program-thumb-content-hr-1'></hr>
                                <p className='college-img'><img src={ashoka} className='college-img-2' /> &rarr; <img src={adobe} className='college-img-2' /> </p>


                            </div>
                        </div>
                        <div className='creator-details'>
                            <div className='details'>
                                "Uncodemy is a good place to start up if you are looking for a career transitionor build a career in Data analaytics. Moreover, guest lectures by Upendra Sir are very insightful. Very efficient management to reach out for any help during training. The best thing is, they also offer support in looking for jobs post training. Thank you."
                            </div>

                            <hr className='program-thumb-content-hr'></hr>

                        </div>
                    </div>

                    <div className='thumb-container' onMouseOver={() => showCreatorDetail(4)} onMouseOut={() => hideCreatorDetails(4)}>
                        <div class="program-thumb">
                            <img class="creator-img" src={RAJENDRA} />
                            <div class="program-thumb-content">
                                <h4> Rajendra Yadav </h4>
                                <hr className='program-thumb-content-hr-1'></hr>
                                <p className='college-img'> <img src={indianuniversity} className='college-img-2' /> &rarr;<img src={hcl} className='college-img-2' /> </p>

                            </div>
                        </div>
                        <div className='creator-details'>
                            <div className='details'>
                                "The turning point in my career came when I joined Uncodemy which really helped me get well-versed in almost every aspect of Software Testing. Uncodemy is a great platform to expand your career in your dream field. Thanks to my mentors Shivendra Sir, Shubham Sir, and Anam Ma'am for guiding & supporting me enough to be working at the world's largest company by revenue."
                            </div>
                            <hr className='program-thumb-content-hr'></hr>

                        </div>
                    </div>

                    <div className='thumb-container' onMouseOver={() => showCreatorDetail(5)} onMouseOut={() => hideCreatorDetails(5)}>
                        <div class="program-thumb">
                            <img class="creator-img" src={SAURABH} />
                            <div class="program-thumb-content">
                                <h4> Saurabh Mishra </h4>
                                <hr className='program-thumb-content-hr-1'></hr>
                                <p className='college-img'><img src={techno} className='college-img-2' /> &rarr; <img src={kpmg} className='college-img-2' /> </p>

                            </div>
                        </div>
                        <div className='creator-details'>
                            <div className='details'>
                                "I had successfully completed machine learning with Python course for Uncodemy. The training was very smooth. It was completely practical-based training. I am fully satisfied with the type of training Uncodemy had provided. It was worth it to join, Trainer was very Cooperative and the student crows was also very interactive. Management had suppported in every step regarding time management and other things. Getting placement assistance too. Thanks, Uncodemy Team..!!"
                            </div>
                            <hr className='program-thumb-content-hr'></hr>

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