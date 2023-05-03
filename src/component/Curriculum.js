import React, { useState } from 'react'
import download from "../image/download.svg"

const Curriculum = () => {
    const [prevPoint, setPrevPoint] = useState(0);

    const MoveProgress = (point) => {
        const progressBar = document.getElementsByClassName("progress-bar")[0];
        const currentmodule = document.getElementsByClassName('module')[point];
        const previousmodule = document.getElementsByClassName('module')[prevPoint];
       

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

    
    const showForm=()=>{

   
      
        const formContainer = document.getElementsByClassName('form-main')[0];
            formContainer.style.visibility = "visible";

            const width = window.screen.width;
            if(width<500){
            window.scrollTo({top:500, left:0, behavior:'smooth'});

            }
            else{

                window.scrollTo({top:50, left:0, behavior:'smooth'});
            }
            
          
        }


    return (
        <div className='curriculum'>
            <h2>Learn with a world class <b>Curriculum</b></h2>

            <div className='curriculum-list'>
                <ul>
                    <li onClick={() => MoveProgress(0)}>Fundamentals</li>
                    <li onClick={() => MoveProgress(1)}>Frontend Development</li>
                    <li onClick={() => MoveProgress(2)}>Data Structures</li>
                    <li onClick={() => MoveProgress(3)}>Backend Development</li>
                    <li onClick={() => MoveProgress(4)}>API Testing & Deployment</li>
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
                            
                        </div>
                       

                        <div class="topics-covered">
                            <h4><span>Topics Covered</span></h4>
                            <ul>
                                <li>
                                Learn the most fundamental languages that define the world wide web.
                                </li>
                                <li>
                                Learn to build beautiful websites and user interfaces that work on a variety of devices and platforms.
                                </li>
                                <li>
                                Build expressive websites, landing pages, and more.
                                </li>
                                <li>
                                Go from basics to functional and object-oriented JavaScript.
                                </li>
                                <li>
                                Bring your web pages to life by adding interactivity and data-driven dynamism.
                                </li>
                                <li>
                                Learn to interact with remote services and APIs.
                                </li>
                                <li>
                                Learn to build modular JavaScript applications.
                                </li>
                                <li>
                                Earn to set up your development environment effectively.
                                </li>
                                <li>
                                Learn and implement auto code formatting and linting.
                                </li>
                                <li>
                                Embrace Babel and write next-gen JavaScript today.
                                </li>
                                <li>
                                Learn all about module bundlers with Parcel and Webpack.
                                </li>
                            </ul>
                        </div>
                    </div>



                    <div className='module-container module' id='module2'>
                        <span class="module-badge"> Module-2 </span>
                        <div class="curi-title">
                            <h3> Frontend Development Using React </h3>
                           
                        </div>

                        <div class="topics-covered">
                            <h4><span>Topics Covered</span></h4>
                            <ul>
                                <li>
                                Master the most popular JavaScript library for building UIs and Web apps.
                                </li>
                                <li>
                                Learn to build composable and reusable components.
                                </li>
                                <li>
                                Embrace the power of React Hooks and learn to build your hooks.
                                </li>
                                <li>
                                Implement routing in a single-page application with React Router.
                                </li>
                                <li>
                                Master global state management and transitions using Redux.
                                </li>
                                <li>
                                Build data-driven applications with ease.
                                </li>
                                <li>
                                Implement Test-Driven Development (TDD) using Jest, Enzyme, and React Testing Library.
                                </li>
                                <li>
                                Master the framework of choice for Facebook, Instagram, New York Times, Netflix, Airbnb, Microsoft, and more.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='module-container module' id='module2'>
                        <span class="module-badge"> Module-3 </span>
                        <div class="curi-title">
                            <h3> Data Structures Using JavaScript </h3>
                           
                        </div>
                       

                        <div class="topics-covered">
                            <h4><span>Topics Covered</span></h4>
                            <ul>
                                <li>
                                Master the intricacies of Arrays, Objects, Stacks, Queues, Linked Lists, Hash Tables, Graphs, Trees, and more data structures.
                                </li>
                            
                            </ul>
                        </div>
                    </div>

                    <div className='module-container module' id='module2'>
                        <span class="module-badge"> Module-4 </span>
                        <div class="curi-title">
                            <h3> Backend Development with Node.js, Express, and MongoDB </h3>
                          
                        </div>

                        <div class="topics-covered">
                            <h4><span>Topics Covered</span></h4>
                            <ul>
                                <li>
                                Learn to write server-side applications using JavaScript.
                                </li>
                                <li>
                                Learn to work with files, modules, and NPM.
                                </li>
                                <li>
                                Learn to build web servers, APIs, and more.
                                </li>
                                <li>
                                Master the Express framework for rapidly building web apps with Node.js.
                                </li>
                                <li>
                                Get a grip on Middleware, Authentication, and the MVC architecture
                                </li>
                                <li>
                                Build data-driven applications using MongoDB Atlas as the database.
                                </li>
                                <li>
                                Learn to secure your web apps and APIs and deploy them on the Cloud.
                                </li>
                                <li>
                                Learn to effectively implement Create-Read-Update-Delete queries.
                                </li>
                                <li>
                                Learn about schema design and data modeling.
                                </li>
                                <li>
                                Learn about critical operations like sorting, aggregation, and lots more.
                                </li>
                                <li>
                                Master the platform that is used by LinkedIn, Netflix, PayPal, NASA, Medium, Walmart, and more.
                                </li>
                                <li>
                                Embrace the database of choice for Uber, Lyft, Accenture, and more.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='module-container module' id='module2'>
                        <span class="module-badge"> Module-5 </span>
                        <div class="curi-title">
                            <h3> APIs and Testing & Deployment </h3>
                           
                        </div>
                

                        <div class="topics-covered">
                            <h4><span>Topics Covered</span></h4>
                            <ul>
                                <li>
                                Learn all about REST and build RESTful APIs.    
                                </li>
                                <li>
                                Discover the OpenAPI 3.0 specification.
                                </li>
                                <li>
                                Work with Swagger to document your APIs.
                                </li>
                                <li>
                                Learn to test your code so it doesn't fail in production.
                                </li>
                                <li>
                                Learn to write unit tests using Jest.
                                </li>
                                <li>
                                Build end-to-end (E2E) tests using Puppeteer.
                                </li>
                                <li>
                                Level up your E2E experience with Cypress.io.
                                </li>
                                <li>
                                Go hands-on with deployment on major cloud platforms such as AWS, Cpanel, Netlify, and Heroku.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='module-container module' id='module2'>
                        <span class="module-badge"> Module-6 </span>
                        <div class="curi-title">
                            <h3> Level Up Your Skills – Mastering Algorithms and Process Management </h3>
                           
                        </div>

                        <div class="topics-covered">
                            <h4><span>Topics Covered</span></h4>
                            <ul>
                                <li>
                                Learn all about time complexity.
                                </li>
                                <li>
                                Learn to implement algorithms such as sorting, search, divide and conquer, dynamic programming, greedy algorithms and many more.
                                </li>
                                <li>
                                Discover the Agile way of building software.
                                </li>
                                <li>
                                Learn about project lifecycle management with Agile.
                                </li>
                                <li>
                                Embrace the SCRUM framework like Jira, rello.
                                </li>
                                <li>
                                Get ready to face job interviews.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>

            <div className='curi-btn'>
                <button id='curriculum-btn' onClick={showForm}><img src={download} />Download Curriculum</button>
            </div>
        </div>
    )
}

export default Curriculum