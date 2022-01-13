import React from 'react'
import {github, instagram, linkedin, telegram, paypal} from "./import"

import "./contacts.css"

const Contacts = () => {
    return (
        <div className='portfolio__contacts'>
            <div>
                <a href="https://github.com/hack64"><img src={github} alt='github' /></a>
            </div>
            <div>
                <a href="https://instagram.com/marco_rizzo_00"><img src={instagram} alt='instagram' /></a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/marco-rizzo-b97210227/"><img src={linkedin} alt='linkedin' /></a>
            </div>
            <div>
                <a href="https://t.me/marco03"><img src={telegram} alt='telegram' /></a>
            </div>
            <div>
                <a href="https://paypal.me/marcor00"><img src={paypal} alt="paypal" /></a>
            </div>
        </div>
    )
}

export default Contacts
