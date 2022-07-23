import React from 'react';
import "./Header.css";
//npm install react-icons --save
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

function HeaderSocials() {
  return (
    <div className='header-socials' style={{ position: "fixed" }}>
      <a href='https://github.com/sophialai123' target="_blank"><BsGithub /></a>
      <a href='https://www.linkedin.com/in/sophia-lai-55a736220/' target="_blank"><BsLinkedin /></a>
      <a href='https://www.instagram.com/sophia_lai123/' target="_blank"><BsInstagram /></a>
      <a href='https://www.facebook.com/' target="_blank"><BsFacebook /></a>
    </div>
  );
}

export default HeaderSocials;