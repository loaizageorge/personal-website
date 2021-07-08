import React from 'react';
import Project from './Portfolio-Item';

// TODO: when backend is done, use the component did mount hook to make a request to get
// all projects by section

const sections = [
    {
        name: 'React',
        projects: [
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
            }
        ],
    }
];

function Portfolio() {
    console.log(sections);
  return (
    <section id="projects" className="portfolio">
      {
        sections.map(section => (
          <Section
            key={section.id}
            section={section}
          />
        ))
      }
    </section>

  );
}

const Section = ({section}) => {
    console.log(section);
    return (
        <div>
            <h3 className="section-title">{section.name}</h3>
            <div className="section">
            {
                section.projects.map(project => (
                    <Project project={project} key={project.id} />
                ))
            }
            </div>
        </div>
    );
}



export default Portfolio;