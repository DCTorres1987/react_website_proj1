import React from 'react';
import { Button } from './Button';
// import react library

function HeroSection() {
    // stateless function

    return (
        // JSX returning a video on loop, h1 tag, and paragraph tag
        <div className='hero-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <Button className="btns" buttonStyle="btn-outline"
            buttonSize="btn-large"></Button>
        </div>
    )
}

export default HeroSection;

