import React from 'react'
import AboutMe from '../../components/aboutme/AboutMe'
import Contacts from '../../components/contacts/Contacts'
import Info from '../../components/info/Info'

import "./content.css"

const Content = () => {
    return (
        <div className='portfolio__content'>
            <div className='portfolio__content-main'>
                <AboutMe />
                <Contacts />
                <a href="#info"><button type='button'>More about me</button></a>
            </div>

            {/*<Info />*/}
        </div>
    )
}

export default Content
