import React from 'react'
import "./resumePopup.css"

const notAvailable = () => {
    alert("Sorry, this language is not available yet!");
}

const ResumePopup = () => {
    return (
        <div className='portfolio__resumePopup'>
            <div className='portfolio__resumePopup-content-text'>
                <h3>Select the CV's language:</h3>
            </div>
            <div className='portfolio__resumePopup-content-buttons'>
                <a href="https://github.com/Hack64/me/raw/master/src/resources/CV-Marco-Rizzo-GH-edited.pdf" download><button className="portfolio__cv-button" type="button">Italian</button></a>
                <a href="#"><button className="portfolio__cv-button" onClick={notAvailable} type="button">English</button></a>
            </div>
        </div>
    )
}

export default ResumePopup
