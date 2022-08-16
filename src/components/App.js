import React from "react";
import Header from "./Header";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";
import Data from "../site_data.json";

const App = () => {
  const { projects } = Data;
  return (
    <>
      {/* <div class="backtotop">
        <a href="/" title="Back to top">
          <em className="fas fa-chevron-up" aria-hidden="true"></em>
        </a>
      </div>
      <a href="#main" class="skipLink">
        Skip to Content
      </a> */}
      <Header />
      <main id="main" className="container">
        <About title="about" />
        <Portfolio title="portfolio" projects={projects} />
        <Contact title="contact" />
      </main>
      <Footer />
    </>
  );
};

export default App;
