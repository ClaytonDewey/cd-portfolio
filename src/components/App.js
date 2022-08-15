import React from "react";
import Header from "./Header";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="container">
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
