import React, { useState } from 'react';
import Modal from './Modal';
// import FadeInSection from './FadeInSection';
import IconExternal from './icons/external';

const Portfolio = ({ projects, isModalVisible, toggleModal }) => {
  const [selectedProject, setSelectedProject] = useState({});

  const renderContent = () => {
    return (
      <>
        <div className='modal__content-img'>
          <img src={`content/projects/${selectedProject.image}`} alt='' />
        </div>
        <div className='modal__content-text'>
          <h3>{selectedProject.type}</h3>
          <p className='project__description'>{selectedProject.description}</p>
          <a
            href={selectedProject.external}
            aria-label='External Link'
            className='btn btn__primary'
            rel='noopener noreferrer'
            target='_blank'>
            View Site <IconExternal />
          </a>
          <p className='m-0'>Tools used:</p>
          <ul className='project__tools'>
            {selectedProject.tools.map((tool) => {
              return <li key={tool}>{tool}</li>;
            })}
          </ul>
        </div>
      </>
    );
  };

  const renderActions = () => {
    return (
      <>
        <button onClick={toggleModal} className='btn btn__cancel'>
          Close
        </button>
      </>
    );
  };

  return (
    <>
      <section id='portfolio'>
        <h2 className='section__title'>
          Portfolio
          <br />
          <span>My Work</span>
        </h2>

        <div className='flex flex__row-wrap'>
          {projects.map((project) => {
            const { id, title, type, image } = project;
            return (
              <div key={id} className='project'>
                <div className='project__body'>
                  <div className='project__image'>
                    <a
                      href='/'
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedProject(project);
                        toggleModal(id);
                      }}>
                      <img src={`content/projects/${image}`} alt='' />
                    </a>
                  </div>
                  <div className='project__header'>
                    <h2 className='project__title'>{title}</h2>
                    <h3 className='project__type'>{type}</h3>
                  </div>
                  {/* <div className="project__content">
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
                    <p className="m-0">Tools used:</p>
                    <ul className="project__tools">
                      {tools.map((tool) => {
                        return <li key={tool}>{tool}</li>;
                      })}
                    </ul>
                  </div> */}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {isModalVisible && (
        <Modal
          title={selectedProject.title}
          content={renderContent()}
          actions={renderActions()}
          onDismiss={() => toggleModal()}
        />
      )}
    </>
  );
};

export default Portfolio;
