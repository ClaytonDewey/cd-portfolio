import React, { useState, useEffect } from "react";
import {
  About,
  Contact,
  Footer,
  GoToTop,
  Header,
  Loader,
  Portfolio,
} from "./components";
import { Link, animateScroll } from "react-scroll";
import Data from "./site_data.json";

const App = () => {
  const { projects } = Data;
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => setIsModalVisible(!isModalVisible);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      {!loading ? (
        <>
          <GoToTop />
          <Header Link={Link} animateScroll={animateScroll} />
          <main title="home" id="main" className="container">
            <About Link={Link} animateScroll={animateScroll} title="about" />
            <Portfolio
              title="portfolio"
              projects={projects}
              isModalVisible={isModalVisible}
              toggleModal={toggleModal}
            />
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
