import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import Header from "./Header";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";
import Data from "../site_data.json";
import { Link } from "react-scroll";

const App = () => {
  const { projects } = Data;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000);
  }, []);

  return (
    <>
      {!loading ? (
        <>
          <Header Link={Link} title="home" />
          <main id="main" className="container">
            <About Link={Link} title="about" />
            <Portfolio title="portfolio" projects={projects} />
            <Contact title="contact" />
          </main>
          <Footer />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default App;
