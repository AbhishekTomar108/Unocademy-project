import React, { useState, useEffect } from 'react'
import Left from "../image/banner-left-arrow.png";
import Right from "../image/banner-right-arrow.png";
import Riya from "../image/riyatiwari (1).jpg"
import TANVI from "../image/tanvi.jpg"
import Ritesh from "../image/riteshSingh.jpg"
import ADITYA from "../image/adityaSingh.jpg"
import RAJENDRA from "../image/rajendra.jpg"
import SAURABH from "../image/saurabh.jpg"
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
import Abhishek from "../image/stories-7.jpg"
import abhilasha from "../image/abhilasha.jpg"
import himanshu from "../image/himanshu.jpg"
import infosys from "../image/infosys.png"
import galgotias from "../image/galgotias.png"
import srm from "../image/srm.jpg"
import sikkim from "../image/sikkim.png"
import Amazon from "../image/Amazon_logo.svg.png"
import tcs from "../image/tcs.png"


const Creator = () => {
    const [moveCreatorImg, setmoveCreatorImg] = useState(0);
    const [imageAt, setImageAt] = useState(3);
    const [moveCreatorImg2, setmoveCreatorImg2] = useState(0);
    const [imageAt2, setImageAt2] = useState(3);
    const [stopScroll, setStopScroll] = useState(false);
    let currentIndex = 0;
    
    useEffect(() => {
       
        let scrollInterval =null;

        const rightArrow = document.getElementsByClassName('right-arrow')[0]
        const leftArrow = document.getElementsByClassName('left-arrow')[0]
        const secondrightArrow = document.getElementsByClassName('second-right-arrow')[0]
        const secondleftArrow = document.getElementsByClassName('second-left-arrow')[0]

        if (imageAt > 3 && imageAt < 5) {
            rightArrow.style.cursor = "pointer";
            leftArrow.style.cursor = "pointer";

            rightArrow.style.opacity = "1"
            leftArrow.style.opacity = "1"

        }

        if (imageAt === 3) {
            leftArrow.style.cursor = "auto";
            leftArrow.style.opacity = "0.5"
        }

        if (imageAt === 5) {
            rightArrow.style.cursor = "auto";
            rightArrow.style.opacity = "0.5"
        }
        if (imageAt2 > 3 && imageAt2 < 5) {
            secondrightArrow.style.cursor = "pointer";
            secondleftArrow.style.cursor = "pointer";

            secondrightArrow.style.opacity = "1"
            secondleftArrow.style.opacity = "1"

        }

        if (imageAt2 === 3) {
            secondleftArrow.style.cursor = "auto";
            secondleftArrow.style.opacity = "0.5"
        }

        if (imageAt2 === 5) {
            secondrightArrow.style.cursor = "auto";
            secondrightArrow.style.opacity = "0.5"
        }

        if(document.documentElement.clientWidth >= 901)
        {
            const creatorImgBlock = document.getElementsByClassName('creator-img-block')[0];
      const creatorImgBlock2 = document.getElementsByClassName('creator-img-block')[1];
      const creatorImage = document.getElementsByClassName('program-thumb');
    
      let totalItems =  creatorImage.length;   
        currentIndex = 0;
       let nextMove = 26;
       let direction =1;
        
      
   if(stopScroll===false){
   
    scrollInterval = window.setInterval(() => {
       
    currentIndex = (currentIndex + direction) % (totalItems/2);
   
  
    if (currentIndex === -1) {
      currentIndex = (totalItems/2) - 1;
     
    }
    creatorImgBlock.style.transform = `translateX(-${currentIndex * nextMove}vw)`;
    creatorImgBlock2.style.transform = `translateX(-${currentIndex * nextMove}vw)`;

    if (currentIndex === (totalItems/2) - 3 && direction === 1) {
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

    }, [stopScroll, imageAt,imageAt2])          

    const moveImageRight = () => {
           
            const creatorImgBlock = document.getElementsByClassName('creator-img-block')[0];
    
            if (imageAt < 5) {
    
                const nextMove = moveCreatorImg - 26;
                creatorImgBlock.style.transform = "translate(" + nextMove + "vw)";
                setmoveCreatorImg(nextMove);
    
                const addImage = imageAt + 1;
                setImageAt(addImage);
    
    
            }
    
        }

        const moveImageRight2 = () => {
    
            const creatorImgBlock2 = document.getElementsByClassName('creator-img-block')[1];
    
            if (imageAt2 < 5) {
    
                const nextMove2 = moveCreatorImg2 - 26;
                creatorImgBlock2.style.transform = "translate(" + nextMove2 + "vw)";
                setmoveCreatorImg2(nextMove2);
    
                const addImage = imageAt2 + 1;
                setImageAt2(addImage);
    
    
            }
    
        }

        const moveImageLeft = () => {
               
        
                const creatorImgBlock = document.getElementsByClassName('creator-img-block')[0];
        
                if (imageAt > 3) {
                    
        
                    const nextMove = moveCreatorImg + 26;
                    creatorImgBlock.style.transform = "translate(" + nextMove + "vw)";
        
                    setmoveCreatorImg(nextMove);
                    const addImage = imageAt - 1;
                    setImageAt(addImage);
        
                }
            }

            
        const moveImageLeft2 = () => {
            
    
            const creatorImgBlock2 = document.getElementsByClassName('creator-img-block')[1];
    
            if (imageAt2 > 3) {
                
    
                const nextMove2 = moveCreatorImg2 + 26;
                creatorImgBlock2.style.transform = "translate(" + nextMove2 + "vw)";
    
                setmoveCreatorImg2(nextMove2);
                const addImage = imageAt2 - 1;
                setImageAt2(addImage);
    
            }
        }

    const showCreatorDetail = (index) => {
    

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

            <div className='left-arrow arrow-img'>
                <img src={Left} onClick={()=>{moveImageLeft();setStopScroll(true)}}/>
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

                    


                </div>
                <div className='right-arrow arrow-img' onClick={()=>{moveImageRight();setStopScroll(true)}}>
                <img src={Right} />
            </div>
            <div className='second-left-arrow arrow-img' onClick={()=>{moveImageLeft2();setStopScroll(true)}}>
                <img src={Left} />
            </div>


                
                <div className='creator-img-block'>
                    <div className='thumb-container' onMouseOver={() => showCreatorDetail(5)} onMouseOut={() => hideCreatorDetails(5)}>
                        <div class="program-thumb">
                            <img class="creator-img" src={Abhishek} />
                            <div class="program-thumb-content">
                                <h4> Abhishek Kumar </h4>
                                <hr className='program-thumb-content-hr-1'></hr>
                                <p className='college-img'><img src={galgotias} className='college-img-2' /> &rarr; <img src={tcs} className='college-img-2' /> </p>
                            </div>

                        </div>

                        <div className='creator-details'>
                            <div className='details'>
                                " Hey Everyone,
                                    I recently finished a Digital Marketing Course in Noida, and I'd like to share my impressions about Uncodemy                                    here.The instructors Pradyumn Sir were excellent, and they were also quite helpful. You can learn everything                                about digital marketing here (SEO, SMO, SEM, ORM, Websites design, Blogging etc) and brighten your future as                                well. Best Digital Marketing Institute, lovely setting, and helpful staff. My learning experience with                              Uncodemy was fantastic, and the professors are the best. In a nutshell, it is a helpful and excellent                               institute. Thank You"

                            </div>
                            <hr className='program-thumb-content-hr'></hr>

                        </div>

                    </div>
                    <div className='thumb-container' onMouseOver={() => showCreatorDetail(6)} onMouseOut={() => hideCreatorDetails(6)}>
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

                   

                    <div className='thumb-container' onMouseOver={() => showCreatorDetail(7)} onMouseOut={() => hideCreatorDetails(7)}>
                        <div class="program-thumb">
                            <img class="creator-img" src={abhilasha} />
                            <div class="program-thumb-content">
                                <h4> Abhilasha Rathi </h4>
                                <hr className='program-thumb-content-hr-1'></hr>
                                <p className='college-img'><img src={sikkim} className='college-img-2' /> &rarr; <img src={infosys} className='college-img-2' /> </p>


                            </div>
                        </div>
                        <div className='creator-details'>
                            <div className='details'>
                                "Its a good place for mean stack development training course in noida. Aslo supportive staff and provides placement, develops the communication and development skills. Very good trainers and placement. Thank You Uncodemy.."
                            </div>

                            <hr className='program-thumb-content-hr'></hr>

                        </div>
                    </div>

                    <div className='thumb-container' onMouseOver={() => showCreatorDetail(8)} onMouseOut={() => hideCreatorDetails(8)}>
                        <div class="program-thumb">
                            <img class="creator-img" src={himanshu} />
                            <div class="program-thumb-content">
                                <h4> Himanshu Tyagi </h4>
                                <hr className='program-thumb-content-hr-1'></hr>
                                <p className='college-img'><img src={srm} className='college-img-2' /> &rarr; <img src={Amazon} className='college-img-2' /> </p>

                            </div>
                        </div>
                        <div className='creator-details'>
                            <div className='details'>
                                "The Software Testing course with Shivendra Sir at Uncodemy was a great experience for me. The trainer was knowledgeable and provided practical examples which helped me understand the concepts better. The course covered topics such as manual testing, automation testing, test planning, and more. The course material was easy to follow and the institute provided me with placement assistance after completing the course. Overall, I highly recommend this course for anyone looking to build a career in software testing,,."
                            </div>
                            <hr className='program-thumb-content-hr'></hr>

                        </div>

                    </div>

                    <div className='thumb-container' onMouseOver={() => showCreatorDetail(9)} onMouseOut={() => hideCreatorDetails(9)}>
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

                


                </div>
                
            </div>
            <div className='second-right-arrow arrow-img' onClick={()=>{moveImageRight2();setStopScroll(true)}}>
                <img src={Right} />
            </div>
        </div>
    )
}

export default Creator