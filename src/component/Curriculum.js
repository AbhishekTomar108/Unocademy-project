import React from 'react'

const Curriculum = () => {
  return (
    <div className='curriculum'>
        <h2>Learn with a world class <b>curriculum</b></h2>

        <div className='curriculum-list'>
            <ul>
                <li>Fundamentals</li>
                <li>Frontend Development</li>
                <li>Data Structures</li>
                <li>Backend Development</li>
                <li>Testing & Deployment</li>
                <li>Level Up Your Skills</li>
            </ul>
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