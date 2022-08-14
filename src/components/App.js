import React from "react";
import Header from "./Header";
import About from "./About";
import Portfolio from "./Portfolio";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="container">
      <Header />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default App;
