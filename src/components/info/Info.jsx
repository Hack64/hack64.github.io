import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ResumePopup from '../resume-popup/ResumePopup';

import "./info.css"

const Info = () => {
    return (
        <div id="info" className='portfolio__info section__padding'>
            <div className="portfolio__info-content">
                <div className='portfolio__info-content-title'>
                    <h1>About Me</h1>   
                </div>
                <div className='portfolio__info-content-text'>
                    <p>I am a 21 years old IT Engineering student with a great passion for everything that involves a computer. I've recently gotten more involved in the great world of Open Source Software and I fell in love with it. In my free time, I usually like coding or playing video games, mostly racing sims. I'm currently trying to learn ReactJS and Python, while also keeping my focus on improving my Java skills. I'm also a custom ROM maintainer for my mobile device.</p>
                </div>
                <Popup trigger={<button className="button"> Get my CV</button>} modal> 
                   <ResumePopup />
                </Popup>
            </div>
        </div>
    )
}

export default Info
