import React from "react";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Project from "./components/Project/Project";

function App() {
  return (
    <div className="App">

      <Home />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
