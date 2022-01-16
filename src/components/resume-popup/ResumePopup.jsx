import React from 'react'
import "./resumePopup.css"

const ResumePopup = () => {
    return (
        <div className='portfolio__resumePopup'>
            <div className='portfolio__resumePopup-content'>
                <a href="https://github.com/Hack64/me/raw/master/src/resources/CV-Marco-Rizzo-GH-edited.pdf" download><button type="button">Italiano</button></a>
                <button type="button">English</button>
            </div>
        </div>
    )
}

export default ResumePopup
