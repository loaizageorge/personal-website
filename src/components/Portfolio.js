import React from 'react'
import Project from './Portfolio-Item'

// TODO: when backend is done, use the component did mount hook to make a request to get
// all projects by section

const projects = [
    {
      image: 'recipebox.png',
      name: 'Recipe Box',
      description: 'Foo',
      source: 'bar',
      demo: 'foo',
      demo_txt: 'bar',
    },
    {
      image: 'full-quote.png',
      name: 'Random Quote Machine',
      description: 'foo',
      source: 'foo',
      demo: 'bar',
      demo_txt: 'bar',
    },
    {
      image: 'markdown.png',
      name: 'Markdown Viewer',
      description: 'foo',
      source: 'bar',
      demo: 'bar',
      demo_txt: 'foo',
    },
  ];
  function Portfolio() {
    return (
      <section id="projects" className="portfolio">
        <div>
         <div className="section-header">
           <h3 className="section-title">Full Stack</h3>
           <img height="28px" width="28px" src="icons/atom.svg" alt="react atom logo"/>
           <img height="28px" width="28px" src="icons/database.svg" alt="database icon"/>
         </div>
          <div className="section">
            {
              projects.map(project => (
                <Project project={project} key={project.id}/>
              ))
            }
          </div>
        </div>
        <div>
          <div className="section-header">
            <h3 className="section-title">Front End</h3>
            <img height="28px" width="28px" src="icons/atom.svg" alt="react atom logo"/>
          </div>
          <div className="section">
            {
              projects.map(project => (
                <Project project={project} key={project.id}/>
              ))
            }
          </div>
        </div>

      </section>
    )
}

export default Portfolio