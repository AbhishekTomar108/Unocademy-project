import React, { useState } from 'react'

const Curriculum = () => {
    const [prevPoint, setPrevPoint] = useState(0);

    const MoveProgress = (point) => {
        const progressBar = document.getElementsByClassName("progress-bar")[0];
        const currentmodule = document.getElementsByClassName('module')[point];
        const previousmodule = document.getElementsByClassName('module')[prevPoint];
        console.log("point = ", prevPoint);

        previousmodule.style.display = "none";
        currentmodule.style.display = "block";

        setPrevPoint(point);

        if (point === 0) {
            progressBar.style.width = "10%"
        }
        if (point === 1) {
            progressBar.style.width = "25%"
        }
        if (point === 2) {
            progressBar.style.width = "45%"
        }
        if (point === 3) {
            progressBar.style.width = "60%"
        }
        if (point === 4) {
            progressBar.style.width = "78%"
        }
        if (point === 5) {
            progressBar.style.width = "95%"
        }

    }

    return (
        <div className='curriculum'>
            <h2>Learn with a world class <b>curriculum</b></h2>

            <div className='curriculum-list'>
                <ul>
                    <li onClick={() => MoveProgress(0)}>Fundamentals</li>
                    <li onClick={() => MoveProgress(1)}>Frontend Development</li>
                    <li onClick={() => MoveProgress(2)}>Data Structures</li>
                    <li onClick={() => MoveProgress(3)}>Backend Development</li>
                    <li onClick={() => MoveProgress(4)}>Testing & Deployment</li>
                    <li onClick={() => MoveProgress(5)}>Level Up Your Skills</li>
                </ul>
            </div>

            <div className='progress'>
                <div className='progress-bar'>

                </div>

            </div>
            <div className='modules'>
                <div className='modules-child'>
                    <div className='module-container module' id='module1'>
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



                    <div className='module-container module' id='module2'>
                        <span class="module-badge"> Module-2 </span>
                        <div class="curi-title">
                            <h3> Fundamentals </h3>
                            <span> Week 3-5 </span>
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

                    <div className='module-container module' id='module2'>
                        <span class="module-badge"> Module-3 </span>
                        <div class="curi-title">
                            <h3> Fundamentals </h3>
                            <span> Week 5-7 </span>
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

                    <div className='module-container module' id='module2'>
                        <span class="module-badge"> Module-4 </span>
                        <div class="curi-title">
                            <h3> Fundamentals </h3>
                            <span> Week 7-9 </span>
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

                    <div className='module-container module' id='module2'>
                        <span class="module-badge"> Module-5 </span>
                        <div class="curi-title">
                            <h3> Fundamentals </h3>
                            <span> Week 9-11 </span>
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

                    <div className='module-container module' id='module2'>
                        <span class="module-badge"> Module-6 </span>
                        <div class="curi-title">
                            <h3> Fundamentals </h3>
                            <span> Week 11-15 </span>
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
                </div>


            </div>

            <div className='curi-btn'>
                <button id='curriculum-btn'><img src="https://www.upgrad.com/bootcamps/images/download.svg" />Download Curriculum</button>
            </div>
        </div>
    )
}

export default Curriculum