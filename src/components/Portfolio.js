import React from "react";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2 className="section__title">
        Portfolio
        <br />
        <span>My Work</span>
      </h2>

      <div className="flex flex__row-wrap">
        <div className="project">
          <div className="project__image">
            <img
              src="/content/projects/uwbookstore/bookstore-comp.png"
              alt=""
            />
          </div>

          <div className="project__content">
            <h2 className="project__title">University Book Store</h2>
            <h3 className="project__type">E-Commerce Site</h3>
            <p className="project__description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
              accusamus cum quia ratione, hic, dignissimos adipisci molestias
              excepturi quam asperiores enim culpa rerum debitis voluptates
              recusandae? Consequuntur illum commodi quidem.
            </p>
            <ul className="project__tools">
              <li>HTML</li>
              <li>CSS/Sass</li>
              <li>JavaScript/jQuery</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
