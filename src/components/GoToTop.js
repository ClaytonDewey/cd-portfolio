import React from "react";

const GoToTop = ({ showGoToTop, scrollUp }) => {
  return (
    <>
      <div className={showGoToTop} onClick={scrollUp}>
        <button className="goTop">
          <i className="goTop__text fa-solid fa-chevron-up"></i>
        </button>
      </div>
    </>
  );
};

export default GoToTop;
