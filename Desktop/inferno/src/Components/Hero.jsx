import React from 'react';
import infernoVideo from '../assets/headervideo.mp4';

const Hero = () => {
  return (
    <div className="hero">
      <div className="content" id="hero-content">
         <div className="video-container">
        <video 
            width="100%" 
            height="auto" 
            controls 
            autoPlay={true} 
            muted 
            loop
        >
            <source src={infernoVideo} type="video/mp4" />
            Your browser does not support the video tag.
      </video>
    </div>
      </div>
    </div>
  )
}

export default Hero
