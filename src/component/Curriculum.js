import React from 'react'

const Curriculum = () => {

    const MoveProgress = (point)=>{
            const progressBar = document.getElementsByClassName("progress-bar")[0];
            if(point===0)
            {
                progressBar.style.width="100px"
            }
            if(point===1)
            {
                progressBar.style.width="350px"
            }
            if(point===2)
            {
                progressBar.style.width="550px"
            }
            if(point===3)
            {
                progressBar.style.width="750px"
            }
            if(point===4)
            {
                progressBar.style.width="950px"
            }
            if(point===5)
            {
                progressBar.style.width="1150px"
            }
           
    }

  return (
    <div className='curriculum'>
        <h2>Learn with a world class <b>curriculum</b></h2>

        <div className='curriculum-list'>
            <ul>
                <li onClick={()=>MoveProgress(0)}>Fundamentals</li>
                <li onClick={()=>MoveProgress(1)}>Frontend Development</li>
                <li onClick={()=>MoveProgress(2)}>Data Structures</li>
                <li onClick={()=>MoveProgress(3)}>Backend Development</li>
                <li onClick={()=>MoveProgress(4)}>Testing & Deployment</li>
                <li onClick={()=>MoveProgress(5)}>Level Up Your Skills</li>
            </ul>
        </div>

        <div className='progress'>
            <div className='progress-bar'>

            </div>

        </div>

        <div className='module-container'>
        <span class="module-badge"> Module-1 </span>
        <div class="curi-title">
                            <h3> Fundamentals </h3>
                            <span> Week 1-3 </span>
                        </div>
                        <p>
                            This module helps you take your first steps towards becoming a successful coder. You will be introduced to computer programming as you learn about programming languages, how computer programs work, and how to build programming logic using Pseudocode.
                        </p>

                        <div class="topics-covered">
                            <h4><span>Topics Covered</span></h4>
                            <ul>
                                <li>
                                    Introduction to Programming
                                </li>
                                <li>
                                    Syntax and Pseudocode
                                </li>
                                <li>
                                    Introduction to Fullstack Development
                                </li>
                                <li>
                                    Linux Essentials
                                </li>
                            </ul>
                        </div>
        </div>

<div className='curi-btn'>
        <button id='curriculum-btn'><img src="https://www.upgrad.com/bootcamps/images/download.svg"/>Download Curriculum</button>
        </div>
    </div>
  )
}

export default Curriculum