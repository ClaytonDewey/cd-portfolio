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
      <Header />
      <main className="container">
        <About />
        <Portfolio projects={projects} />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
