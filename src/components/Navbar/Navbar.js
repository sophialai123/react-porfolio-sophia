import React, { useState } from 'react';
import "./Navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { AiOutlineProject } from "react-icons/ai";
import { FcContacts } from "react-icons/fc";

function Navbar(props) {

  //change the color,if activeNav is true, className will be active
  const [activeNav, setActiveNav] = useState("#")


  return (
    <nav>
      <a href='#'
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}><AiOutlineHome /></a>
      <a href='#about'
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#" ? "active" : ""}

      ><FcAbout /></a>
      <a href='#project'
        onClick={() => setActiveNav("#project")}
        className={activeNav === "#" ? "active" : ""}
      ><AiOutlineProject /></a>
      <a href='#contact'
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#" ? "active" : ""}

      ><FcContacts /></a>
    </nav>
  );
}

export default Navbar;