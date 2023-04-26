import React from 'react'
import HTML from "../image/html.png"
import AWS from "../image/aws.png"
import GITHUB from "../image/github.png"
import JEST from "../image/jest.png"
import CSS from "../image/css.png"
import VSCODE from "../image/vscode.png"
import MONGODB from "../image/mongodb.png"
import REACTLOGO from "../image/react.png"
import REDUX from "../image/redux.png"
import BOOTSTRAP from "../image/bootstrap.png"
import JAVASCRIPT from "../image/javascript.png"
import JAVA from "../image/java.png"
import PARCEL from "../image/parcel.png"
import PYTHON from "../image/pyhton.png"
import HEROKU from "../image/heroku.png"
import WEBPACK from "../image/webpack.png"
import NODEJS from "../image/nodejs.png"
import MYSQL from "../image/mysql.png"
import NETLIFY from "../image/netlify.png"

const Technologies = () => {
    const goToBottom = ()=>{
        console.log("go to running");
        const gotoValue = (document.body.scrollHeight)-800;
  
        console.log("go to = ", gotoValue);
        window.scrollTo({top:gotoValue, left:0, behavior:'smooth'})
      }
  return (
    <div className='technologies'>
        <h2>Tools and <b>Technologies covered</b></h2>

        <ul>
            <li>
               <img src={HTML}/>
                <h3>HTML</h3>
            </li>
            <li>
            <img src={CSS}/>
                <h3>Css</h3>
            </li>
            <li>
                    <img src={JAVASCRIPT}/>
                <h3>JavaScript</h3>
            </li>
            <li>
                    <img src={BOOTSTRAP}/>
                <h3>Bootstrap</h3>
            </li>
            <li>
                    <img src={REACTLOGO}/>
                <h3>React</h3>
            </li>
            <li>
                    <img src={REACTLOGO}/>
                <h3>React Router</h3>
            </li>
            <li>
            <img src={REDUX}/>
                <h3>Redux</h3>
            </li>
            <li>
            <img src={WEBPACK}/>
                <h3>Webpack</h3>
            </li>
            <li>
            <img src={PARCEL}/>
                <h3>Parcel</h3>
            </li>
            <li>
            <img src={NODEJS}/>
                <h3>NodeJS</h3>
            </li>
            <li>
            <img src={MONGODB}/>
                <h3>MongoDB</h3>
            </li>
            <li>
            <img src={PYTHON}/>
                <h3>Python</h3>
            </li>
            <li>
            <img src={JAVA}/>
                <h3>Java</h3>
            </li>
            <li>
            <img src={MYSQL}/>
                <h3>MySql</h3>
            </li>
            <li>
            <img src={VSCODE}/>
                <h3>VSCode</h3>
            </li>
            <li>
            <img src={HEROKU}/>
                <h3>Heroku</h3>
            </li>
            <li>
            <img src={JEST}/>
                <h3>Jest</h3>
            </li>
            <li>
            <img src={AWS}/>
                <h3>AWS</h3>
            </li>
            <li>
                <img src={NETLIFY}/>
                <h3>Netlify</h3>
            </li>
            <li>
            <img src={GITHUB}/>
                <h3>GitHub</h3>
            </li>
            
        </ul>

        <div className='apply-btn'>
        <button id="call-us-btn"  onClick={goToBottom}>Apply Now</button>
        </div>
    </div>
  )
}

export default Technologies