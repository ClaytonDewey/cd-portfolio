import React, { useState, useEffect } from 'react';
import {
  About,
  Contact,
  Footer,
  // GoToTop,
  Header,
  Loader,
  Portfolio,
} from './components';
import { Link, animateScroll } from 'react-scroll';
import Data from './site_data.json';

const App = () => {
  const { projects } = Data;
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const [showGoTop, setShowGoTop] = useState('goTopHidden');

  const toggleModal = () => setIsModalVisible(!isModalVisible);

  // const handleVisibleButton = () => {
  //   const position = window.pageYOffset;
  //   setScrollPosition(position);

  //   if (scrollPosition > 70) {
  //     return setShowGoTop('goTop');
  //   } else if (scrollPosition < 70) {
  //     return setShowGoTop('goTopHidden');
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleVisibleButton);
  // });

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      {!loading ? (
        <>
          <a href='#main' className='skipLink'>
            Skip to Content
          </a>
          {/* <GoToTop
            Link={Link}
            animateScroll={animateScroll}
            showGoTop={showGoTop}
          /> */}
          <Header Link={Link} animateScroll={animateScroll} />
          <main title='home' id='main' className='container'>
            <About
              Link={Link}
              // animateScroll={animateScroll}
            />
            <Portfolio
              projects={projects}
              isModalVisible={isModalVisible}
              toggleModal={toggleModal}
            />
            <Contact />
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
