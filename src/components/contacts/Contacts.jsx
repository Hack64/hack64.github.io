import React from 'react'
import {github, instagram, linkedin, telegram} from "./import"

import "./contacts.css"

const Contacts = () => {
    return (
        <div className='portfolio__contacts'>
            <div>
                <img src={github} alt='github' />
            </div>
            <div>
                <img src={instagram} alt='instagram' />
            </div>
            <div>
                <a href="https://www.linkedin.com/in/marco-rizzo-b97210227/"><img src={linkedin} alt='linkedin' /></a>
            </div>
            <div>
                <img src={telegram} alt='telegram' />
            </div>
        </div>
    )
}

export default Contacts
