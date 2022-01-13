import React from 'react'
import "./App.css"
import Content from './containers/content/Content'
import Footer from './containers/footer/Footer'

const App = () => {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Content />
                <Footer />
            </div>
        </div>
    )
}

export default App
