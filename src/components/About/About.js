import React from 'react';
import "./About.css";
import sophia from "../Images/sophia.jpeg";

function About() {
  return (
    <section id='about'>

      <div className='container about-container'>
        <div className='about-me'>
          <div className='about-me-img'>
            <img src={sophia} alt="sophia" />
          </div>
        </div>
        <div className='about-content'>
          <h2>About Me</h2>
          <p>
            Hello! My name is Sophia, a self-taught Software Developer.</p>

          <p>I started learning Python language at the beginning. The more I code, the more I enjoy doing it. I am particularly interested in front-end development. I have a good knowledge of CSS, HTML, JavaScript, React, Bootstrap, jQuery, Python, Git and Github. </p>

          <p>
            I am currently undertaking an internship for a start-up company that is creating an animation series.The series is unique and promotes Australia culture, and also promotes environmental sustainability.
          </p>

          <p>I am a fast learner, a team player and hard worker. I enjoy identifying and solving problems and developing solutions. I am willing to learn new skills and to take on new challenges.</p>
        </div>
      </div>
    </section>
  );
}

export default About;