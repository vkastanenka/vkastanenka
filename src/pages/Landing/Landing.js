// React
import React, { Component } from "react";

// Components
import Auxiliary from "../../components/HigherOrder/Auxiliary";
import Header from "./Layout/Header";
import NavBar from "../../components/Layout/NavBar";
import About from "./Layout/About";
import Portfolio from "./Layout/Portfolio";
import Skills from "./Layout/Skills";
import Testimonials from "./Layout/Testimonials";
import Contact from "./Layout/Contact";
import Footer from "../../components/Layout/Footer";

class Landing extends Component {
  render() {
    return (
      <Auxiliary>
        <Header />
        <main className="main">
          <NavBar />
          <About />
          <Portfolio />
          <Skills />
          <Testimonials />
          {/* <Contact /> */}
        </main>
        {/* <Footer /> */}
      </Auxiliary>
    );
  }
}

export default Landing;
