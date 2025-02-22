import React from "react";
import Hero from "../../components/HomePage/Hero";
import About from "../../components/HomePage/About";
import Products from "../../components/HomePage/Products";
import Contact from "../../components/HomePage/Contact";
import TeamM from "../../components/HomePage/TeamM";
import Navbar from "../../Shared/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Contact />
      <TeamM />
    </div>
  );
};

export default HomePage;
