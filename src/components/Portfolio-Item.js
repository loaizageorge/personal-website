import React from 'react';

const Project = (props) => {
  const { project } = props;
  const { name, image, description, source, demo, demo_text } = project;
  const  imgLink = `/portfolio/${image}`;

  return (
    <section className="project">
      <img src={imgLink} alt="Test" />
      <div className="project__overlay">
        <h3 className="overlay-title">{name}</h3>
        <div className="overlay-text">
          <p>{description}</p>
          {
            source && <a target="_blank" className="sourceLink" href={source}>Source Code</a>
          }
          <a target="_blank" className="demoLink" href={demo}>{demo_text}</a>
        </div>
      </div>

    </section>
  );
}

export default Project;