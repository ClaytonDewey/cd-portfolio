import React from "react";

const GoToTop = (props) => {
  return (
    <>
      <div>
        <button
          className={props.showGoTop}
          onClick={props.animateScroll.scrollToTop}
        >
          <i className="goTop__text fa-solid fa-chevron-up"></i>
        </button>
      </div>
    </>
  );
};

export default GoToTop;
