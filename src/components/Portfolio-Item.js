import React from 'react';

const Project = (props) => {
  const { project } = props;
  const  imgLink = "portfolio/" + project.image;

  return (
    <section className="project">
      <img src={imgLink} alt="Test" />
      <div className="project__overlay">
        <h3 className="overlay-title">{project.name}</h3>
        <div className="overlay-text">
          <p>{project.description}</p>
          <a className="sourceLink" href={project.source}>Source Code</a>
          <a className="demoLink" href={project.demo}>{project.demo_text}</a>
        </div>
      </div>

    </section>
  );
}

export default Project;