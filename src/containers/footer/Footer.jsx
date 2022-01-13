import React from 'react'
import react_svg from "../../assets/react.png"
import "./footer.css"

const Footer = () => {
    return (
        <div className='portfolio__footer'>
            <div className='portfolio__footer-text'>
                <h4>Made with 🤍 by Marco / Hack64 using <img src={react_svg}/></h4>
            </div>
        </div>
    )
}

export default Footer
