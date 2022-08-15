import React from "react";
import Header from "./Header";
import About from "./About";
import Portfolio from "./Portfolio";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="container">
        <About />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
};

export default App;
