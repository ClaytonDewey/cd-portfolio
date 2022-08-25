import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import Header from "./Header";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";
import Data from "../site_data.json";

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
          <Header />
          <main id="main" className="container">
            <About />
            <Portfolio
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
