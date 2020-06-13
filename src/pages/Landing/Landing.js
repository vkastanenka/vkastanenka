// React
import React, { Component } from "react";

// Components
import Auxiliary from "../../components/HigherOrder/Auxiliary";
import Header from "./Layout/Header";
import About from "./Layout/About";
import Portfolio from './Layout/Portfolio';
import Skills from './Layout/Skills';

class Landing extends Component {
  render() {
    return (
      <Auxiliary>
        <Header />
        <main className="main">
          <About />
          <Portfolio />
          <Skills />
        </main>
      </Auxiliary>
    );
  }
}

export default Landing;
