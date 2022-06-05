import React from 'react';
import Cv from "./Cv";
import "./Header.css";
import backgroundimg from "../Images/backgroundimg.png";
import HeaderSocial from "./HeaderSocials";



function Header() {
  return (
    <header>
      <div className='container header-container'>
        <h5>Hello I am</h5>
        <h1>Sophia Lai</h1>
        <h5>Software Developer</h5>
        <Cv />
        <HeaderSocial />
        <div className='bg'>
          <img src={backgroundimg} alt='image' />
        </div>
        <a href='#contact' className='scroll-down'>Scroll Down</a>
      </div>

    </header>
  );
}

export default Header;