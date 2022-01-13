import React from 'react'
import "./aboutme.css"
import profile_pic from "../../assets/profile_pic.png"

const AboutMe = () => {
    return (
        <div className='portfolio__aboutme'>
            <div className='portfolio__aboutme-content scale-up-center'>
                <div className='portfolio__aboutme-content-image'>
                    <img src={profile_pic} alt="profile_pic"/>
                </div>
                <h1>Marco Rizzo</h1>
            </div>
            <div className='portfolio__aboutme-subtext'>
                <div className='typewriter'>
                        <h1>Developer | IT Enthusiast</h1>
                </div>
            </div>
            <div className='portfolio__separator'>
                <div />
            </div>
        </div>
    )
}

export default AboutMe
