import React from 'react'
import AboutMe from '../../components/aboutme/AboutMe'
import Contacts from '../../components/contacts/Contacts'

import "./content.css"

const Content = () => {
    return (
        <div className='portfolio__content'>
            <AboutMe />
            <Contacts />
            <button type='button'>More about me</button>
        </div>
    )
}

export default Content
