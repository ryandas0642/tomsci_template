import React from 'react';
import '../App.css';
import {ButtonEv} from './ButtonEv';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>Tomorrow's Scientists</h1>
      <p>An organization committed to the flourishing of the sciences.</p>
    </div>
  );
}

export default HeroSection;
