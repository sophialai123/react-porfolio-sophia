import React from 'react';
import cv from "../Images/Resume.pdf";

function Cv() {
  return (
    <div className='cta'>
      <a href={cv} download className='btn'> Download CV</a>
      <a href='#contact' className='btn btn-primary'>Get In Touch</a>

    </div>
  );
}

export default Cv;