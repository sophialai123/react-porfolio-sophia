import React from 'react';
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";


function Home(props) {
  return (
    <section id="home" style={{ margin: "0 auto" }}>
      <Header />
      <Navbar />
    </section>
  );
}

export default Home;