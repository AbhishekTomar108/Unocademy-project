import React, { useState, useEffect } from 'react'
import Left from "../image/banner-left-arrow.png";
import Right from "../image/banner-right-arrow.png";
import Riya from "../image/riyatiwari (1).jpg"
import TANVI from "../image/tanvi.png"  
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
import mamaearth from "../image/mamaearth.png"
import vishal from "../image/vishal.jpg"
import shruti from "../image/shruti.jpg"
import prashant from "../image/prashant.jpg"
import babita from "../image/babita.jpg"
import neelam from "../image/neelam.jpg"
import arun from "../image/arun.jpg"
import juhi from "../image/juhi.jpg"
import deepak from "../image/deepak.jpg"
import mindit from "../image/mindit.png"
import appinventive from "../image/appinventive.png"
import delloite from "../image/2560px-Deloitte.svg.png"
import maruti from "../image/maruti.png"
import rapidops from "../image/rapidops.png"
import ibm from "../image/IBM_logo.svg.png"
import techexactly from "../image/techexactly.jpeg"
import poonam from "../image/riyatiwari.jpg"
import ripensapps from "../image/ripensapps.png"
import hcltech from "../image/hcltech.png"
import niit from "../image/niit.png"
import integral from "../image/integral.png"
import imsghaziabad from "../image/imsghaziabad.png"
import nsut from "../image/nsut.png"
import grelogic from "../image/grelogic.png"
import runex from "../image/runex.png"


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

        if (imageAt > 3 && imageAt < 9) {
            rightArrow.style.cursor = "pointer";
            leftArrow.style.cursor = "pointer";

            rightArrow.style.opacity = "1"
            leftArrow.style.opacity = "1"

        }

        if (imageAt === 3) {
            leftArrow.style.cursor = "auto";
            leftArrow.style.opacity = "0.5"
        }

        if (imageAt === 9) {
            rightArrow.style.cursor = "auto";
            rightArrow.style.opacity = "0.5"
        }
        if (imageAt2 > 3 && imageAt2 < 9) {
            secondrightArrow.style.cursor = "pointer";
            secondleftArrow.style.cursor = "pointer";

            secondrightArrow.style.opacity = "1"
            secondleftArrow.style.opacity = "1"

        }

        if (imageAt2 === 3) {
            secondleftArrow.style.cursor = "auto";
            secondleftArrow.style.opacity = "0.5"
        }

        if (imageAt2 === 9) {
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
    
            if (imageAt < 9) {
    
                const nextMove = moveCreatorImg - 26;
                creatorImgBlock.style.transform = "translate(" + nextMove + "vw)";
                setmoveCreatorImg(nextMove);
    
                const addImage = imageAt + 1;
                setImageAt(addImage);
    
    
            }
    
        }

        const moveImageRight2 = () => {
    
            const creatorImgBlock2 = document.getElementsByClassName('creator-img-block')[1];
    
            if (imageAt2 < 9) {
    
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
                                <h4>Abhilasha Rathi</h4>
                                <hr className='program-thumb-content-hr-1'></hr>
                                <p className='college-img'><img src={amity} className='college-img-2' /> &rarr; <img src={infosys} className='college-img-2' /> </p>
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
                                <p className='college-img'> <img src={lpu} className='college-img-2' /> &rarr;<img src={Amazon} className='college-img-2' /> </p>

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
                                <h4> Tanvi Singh</h4>
                                <hr className='program-thumb-content-hr-1'></hr>
                                <p className='college-img'><img src={imsghaziabad} className='college-img-2' /> &rarr; <img src={delloite} className='college-img-2' /> </p>


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
                            <img class="creator-img" src={poonam} />
                            <div class="program-thumb-content">
                                <h4> Riya Tiwari </h4>
                                <hr className='program-thumb-content-hr-1'></hr>
                                <p className='college-img'> <img src={integral} style={{height:"48px",width:"auto"}} className='college-img-2' /> &rarr;<img src={hcl} className='college-img-2' /> </p>

                            </div>
                        </div>
                        <div className='creator-details'>
                            <div className='details'>
                                "I joined for selenium automation and manual testing in Uncodemy institute on August month and my vision towards software industry is change felt like easy now Because the teaching style is too good. Explanation is easy to understand and the trainer will help us for any difficulty and problem. Really very nice place to get more technical skills and even job too."
                            </div>
                            <hr className='program-thumb-content-hr'></hr>

                        </div>
                    </div>
                    <div className='thumb-container' onMouseOver={() => showCreatorDetail(5)} onMouseOut={() => hideCreatorDetails(5)}>
                        <div class="program-thumb">
                            <img class="creator-img" src={vishal} />
                            <div class="program-thumb-content">
                                <h4> Vishal Singh </h4>
                                <hr className='program-thumb-content-hr-1'></hr>
                                <p className='college-img'> <img src={amity} className='college-img-2' /> &rarr;<img src={mindit} className='college-img-2' /> </p>

                            </div>
                        </div>
                        <div className='creator-details'>
                            <div className='details'>
                                "I had a great experience with the Data Science course at Uncodemy. The instructors were very knowledgeable and the course content was well-structured and easy to follow. The projects were challenging but also fun, and they really helped me develop my skills in data analysis and machine learning. The community of students was also very supportive and made the learning experience even more enjoyable. Overall, I would definitely recommend this course to anyone who wants to learn about data science."
                            </div>
                            <hr className='program-thumb-content-hr'></hr>

                        </div>
                    </div>
                    <div className='thumb-container' onMouseOver={() => showCreatorDetail(6)} onMouseOut={() => hideCreatorDetails(6)}>
                        <div class="program-thumb">
                            <img class="creator-img" src={shruti} />
                            <div class="program-thumb-content">
                                <h4> Shruti </h4>
                                <hr className='program-thumb-content-hr-1'></hr>
                                <p className='college-img'> <img src={indianuniversity} className='college-img-2' /> &rarr;<img src={appinventive} className='college-img-2' /> </p>

                            </div>
                        </div>
                        <div className='creator-details'>
                            <div className='details'>
                                "I have done Automation testing course at Uncodemy. Best place for learning automation testing course (selenium). I am very much satisfied with the course and its content. Faculty with great experience and they are always available for answering queries even after course completion. Uncodemy provides you training to work on live projects. They also provide good placements. Will definitely refer to others. Thank you so much Uncodemy team and vishnu sir..!"
                            </div>
                            <hr className='program-thumb-content-hr'></hr>

                        </div>
                    </div>
                    <div className='thumb-container' onMouseOver={() => showCreatorDetail(7)} onMouseOut={() => hideCreatorDetails(7)}>
                        <div class="program-thumb">
                            <img class="creator-img" src={prashant} />
                            <div class="program-thumb-content">
                                <h4> Prashant </h4>
                                <hr className='program-thumb-content-hr-1'></hr>
                                <p className='college-img'> <img src={srm} className='college-img-2' /> &rarr;<img src={techexactly} className='college-img-2' /> </p>

                            </div>
                        </div>
                        <div className='creator-details'>
                            <div className='details'>
                                "As usual, I did some research on the internet and identified Uncodemy is a good institute for Selenium testing. Then went there and got trained by Bishnu Sir. It was a superb training institute. Now I am successfully able to automate any web application. But you need to follow the faculty regularly and should do exercises as explained by him. Guys!!! please go and join and explore more good opportunities in Automation testing rather than restrict yourself to Manual Testing."
                            </div>
                            <hr className='program-thumb-content-hr'></hr>

                        </div>
                    </div>
                    <div className='thumb-container' onMouseOver={() => showCreatorDetail(8)} onMouseOut={() => hideCreatorDetails(8)}>
                        <div class="program-thumb">
                            <img class="creator-img" src={babita} />
                            <div class="program-thumb-content">
                                <h4> Babita Singh </h4>
                                <hr className='program-thumb-content-hr-1'></hr>
                                <p className='college-img'> <img src={sikkim} className='college-img-2' /> &rarr;<img src={hcl} className='college-img-2' /> </p>

                            </div>
                        </div>
                        <div className='creator-details'>
                            <div className='details'>
                                "Great Experience with Uncodemy. All industrial Experts faculty teach and guide each and every student. I took Automation Testing Software classes here. All teachers are supporting here to teach and to make the candidates understand not just theoretically but practically..."
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
                    <div className='thumb-container' onMouseOver={() => showCreatorDetail(9)} onMouseOut={() => hideCreatorDetails(9)}>
                        <div class="program-thumb">
                            <img class="creator-img" src={Abhishek} />
                            <div class="program-thumb-content">
                                <h4> Abhishek Kumar </h4>
                                <hr className='program-thumb-content-hr-1'></hr>
                                <p className='college-img'><img src={runex} className='college-img-2' /> &rarr; <img src={mamaearth} className='college-img-2' /> </p>
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
                    <div className='thumb-container' onMouseOver={() => showCreatorDetail(10)} onMouseOut={() => hideCreatorDetails(10)}>
                        <div class="program-thumb">
                            <img class="creator-img" src={SAURABH} />
                            <div class="program-thumb-content">
                                <h4> Saurabh Mishra </h4>
                                <hr className='program-thumb-content-hr-1'></hr>
                                <p className='college-img'><img src={niit} className='college-img-2' /> &rarr; <img src={kpmg} className='college-img-2' /> </p>

                            </div>
                        </div>
                        <div className='creator-details'>
                            <div className='details'>
                                "I had successfully completed machine learning with Python course for Uncodemy. The training was very smooth. It was completely practical-based training. I am fully satisfied with the type of training Uncodemy had provided. It was worth it to join, Trainer was very Cooperative and the student crows was also very interactive. Management had suppported in every step regarding time management and other things. Getting placement assistance too. Thanks, Uncodemy Team..!!"
                            </div>
                            <hr className='program-thumb-content-hr'></hr>

                        </div>

                    </div>

                   

                    <div className='thumb-container' onMouseOver={() => showCreatorDetail(11)} onMouseOut={() => hideCreatorDetails(11)}>
                        <div class="program-thumb">
                            <img class="creator-img" src={abhilasha} />
                            <div class="program-thumb-content">
                                <h4> Neha Sharma </h4>
                                <hr className='program-thumb-content-hr-1'></hr>
                                <p className='college-img'><img src={sikkim} className='college-img-2' /> &rarr; <img src={infosys} className='college-img-2' /> </p>


                            </div>
                        </div>
                        <div className='creator-details'>
                            <div className='details'>
                                "Its a good place for Java Full stack development training course in noida. Aslo supportive staff and provides placement, develops the communication and development skills. Very good trainers and placement. Thank You Uncodemy.."
                            </div>

                            <hr className='program-thumb-content-hr'></hr>

                        </div>
                    </div>

                    <div className='thumb-container' onMouseOver={() => showCreatorDetail(12)} onMouseOut={() => hideCreatorDetails(12)}>
                        <div class="program-thumb">
                            <img class="creator-img" src={himanshu} />
                            <div class="program-thumb-content">
                                <h4> Himanshu Tyagi </h4>
                                <hr className='program-thumb-content-hr-1'></hr>
                                <p className='college-img'><img src={grelogic} className='college-img-2' /> &rarr; <img src={ripensapps} className='college-img-2' /> </p>

                            </div>
                        </div>
                        <div className='creator-details'>
                            <div className='details'>
                                "The Software Testing course with Shivendra Sir at Uncodemy was a great experience for me. The trainer was knowledgeable and provided practical examples which helped me understand the concepts better. The course covered topics such as manual testing, automation testing, test planning, and more. The course material was easy to follow and the institute provided me with placement assistance after completing the course. Overall, I highly recommend this course for anyone looking to build a career in software testing,,."
                            </div>
                            <hr className='program-thumb-content-hr'></hr>

                        </div>

                    </div>

                    <div className='thumb-container' onMouseOver={() => showCreatorDetail(13)} onMouseOut={() => hideCreatorDetails(13)}>
                        <div class="program-thumb">
                            <img class="creator-img" src={RAJENDRA} />
                            <div class="program-thumb-content">
                                <h4> Rajendra Yadav </h4>
                                <hr className='program-thumb-content-hr-1'></hr>
                                <p className='college-img'> <img src={nsut} style={{height:"48px",width:"auto"}} className='college-img-2' /> &rarr;<img src={hcltech} className='college-img-2' /> </p>

                            </div>
                        </div>
                        <div className='creator-details'>
                            <div className='details'>
                                "The turning point in my career came when I joined Uncodemy which really helped me get well-versed in almost every aspect of Software Testing. Uncodemy is a great platform to expand your career in your dream field. Thanks to my mentors Shivendra Sir, Shubham Sir, and Anam Ma'am for guiding & supporting me enough to be working at the world's largest company by revenue."
                            </div>
                            <hr className='program-thumb-content-hr'></hr>

                        </div>
                    </div>

                    <div className='thumb-container' onMouseOver={() => showCreatorDetail(14)} onMouseOut={() => hideCreatorDetails(14)}>
                        <div class="program-thumb">
                            <img class="creator-img" src={neelam} />
                            <div class="program-thumb-content">
                                <h4> Neelam Nishad </h4>
                                <hr className='program-thumb-content-hr-1'></hr>
                                <p className='college-img'> <img src={ashoka} className='college-img-2' /> &rarr;<img src={delloite} className='college-img-2' /> </p>

                            </div>
                        </div>
                        <div className='creator-details'>
                            <div className='details'>
                                "I joined Uncodemy for Manual Testing and Automation Testing course and my trainer was Shivendra sir and bishnu sir. It is one of the best experience. The way he taught us was totally Amazing. He started everything from basics and he always make sure that each & every one of us get what he is trying to explain. Classes were very interactive. Due to Shivendra sir I got confidence in coding specifically in Java language & Automation frameworks. No matter whether you are from IT background or from Non- IT background you will going to get a lot of knowledge and confidence. At the end, I will just say that I was so lucky to join Uncodemy..!!"
                            </div>
                            <hr className='program-thumb-content-hr'></hr>

                        </div>
                    </div>

                    <div className='thumb-container' onMouseOver={() => showCreatorDetail(15)} onMouseOut={() => hideCreatorDetails(15)}>
                        <div class="program-thumb">
                            <img class="creator-img" src={arun} />
                            <div class="program-thumb-content">
                                <h4> Arun Pal </h4>
                                <hr className='program-thumb-content-hr-1'></hr>
                                <p className='college-img'> <img src={indianuniversity} className='college-img-2' /> &rarr;<img src={maruti} className='college-img-2' /> </p>

                            </div>
                        </div>
                        <div className='creator-details'>
                            <div className='details'>
                                "I joined Uncodemy Noida centre to pursue course in Data Acience and had a great experience. Experts available at the center are highly qualified as well as experienced with expertise in respective field. I enjoyed the studying environment as well as the support provided by the expertise. I developed new ideas and perspective about Data Analytics as well as developed a few. I would recommend you to join Uncodemy in order to gain knowledge and increase ability to understand different technologies."
                            </div>
                            <hr className='program-thumb-content-hr'></hr>

                        </div>
                    </div>

                    <div className='thumb-container' onMouseOver={() => showCreatorDetail(16)} onMouseOut={() => hideCreatorDetails(16)}>
                        <div class="program-thumb">
                            <img class="creator-img" src={juhi} />
                            <div class="program-thumb-content">
                                <h4> Juhi Sharma </h4>
                                <hr className='program-thumb-content-hr-1'></hr>
                                <p className='college-img'> <img src={galgotias} className='college-img-2' /> &rarr;<img src={rapidops} className='college-img-2' /> </p>

                            </div>
                        </div>
                        <div className='creator-details'>
                            <div className='details'>
                                "My experience with Uncodemy has been very enriching. Being a student from a completely non IT background has never been a difficulty because of their practical ways of teaching and hands on case studies. The faculty here is always there to guide and help the students in solving their doubts. Uncodemy also provides lifetime placement assistance. I would highly recommend anyone interested in the Data Science course and Data Analytics course to go to this institution. Thank You"
                            </div>
                            <hr className='program-thumb-content-hr'></hr>

                        </div>
                    </div>

                    <div className='thumb-container' onMouseOver={() => showCreatorDetail(17)} onMouseOut={() => hideCreatorDetails(17)}>
                        <div class="program-thumb">
                            <img class="creator-img" src={deepak} />
                            <div class="program-thumb-content">
                                <h4> Deepak </h4>
                                <hr className='program-thumb-content-hr-1'></hr>
                                <p className='college-img'> <img src={nalanda} className='college-img-2' /> &rarr;<img src={ibm} className='college-img-2' /> </p>

                            </div>
                        </div>
                        <div className='creator-details'>
                            <div className='details'>
                                "I got trained in MERN Stack development from Uncodemy, their teaching methodology is very practical, Industry relevant and interactive, our mentor Rahul Sir made the concepts very clear and simple, taught us the best ways and practices that I could never learn anywhere else before, mentors are supportive and friendly. I got good hands-on experience as they provide relevant assignments and projects, they will focus, analyze, teach, support each and every student. within short span of time over there I am able to build complex projects. it is the best place to learn MERN full Stack development Course. Thank You"
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