import React from "react";

const Portfolio = ({ projects }) => {
  return (
    <section id="portfolio">
      <h2 className="section__title">
        Portfolio
        <br />
        <span>My Work</span>
      </h2>

      <div className="flex flex__row-wrap">
        {projects.map((project) => {
          const { id, title, type, image, external, tools, description } =
            project;
          return (
            <div key={id} className="project">
              <div className="project__image">
                <a
                  href={external}
                  aria-label="External Link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img src={`/content/projects/${image}`} alt="" />
                </a>
              </div>
              <div className="project__header">
                <h2 className="project__title">{title}</h2>
                <h3 className="project__type">{type}</h3>
              </div>
              <div className="project__content">
                <p className="project__description">{description}</p>
                <a
                  href={external}
                  aria-label="External Link"
                  className="external"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  View Site
                </a>
                <ul className="project__tools">
                  {tools.map((tool) => {
                    return <li key={tool}>{tool}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
