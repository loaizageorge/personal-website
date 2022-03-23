import React from 'react'
import Project from './Portfolio-Item'

const projects = [
  {
    image: 'gabys.png',
    name: "Gaby's Beauty Salon",
    description: 'A live brochure website setup for a client. Swing by if you\'re ever in the Nyack NY area! Built in Gatsby (React based)',
    source: '',
    demo: 'https://www.gabysunisexbeautysalon.com',
    demo_text: 'Get a fresh cut!',
  },
  {
    image: 'wordle.png',
    name: 'Wordle Clone',
    description: 'A clone of the breakout viral hit! Built in React w/ Typescript',
    source: 'https://github.com/xchendo/wordle-clone',
    demo: 'https://adoring-goodall-f64075.netlify.app/',
    demo_text: 'Can you guess the mystery word?',
  },
  {
    image: 'recipebox.png',
    name: 'Recipe Box',
    description: 'Store your favorite recipes in an online cook book! Built in React',
    demo: 'http://intense-inlet-42574.herokuapp.com/',
    source: 'https://github.com/xchendo/RecipeBox',
    demo_text: 'Save your favorite recipes!',
  },
  {
    image: 'markdown.png',
    name: 'Markdown Viewer',
    description: 'See your Markdown code converted to HTML as you type! Built in React',
    demo: 'http://intense-crag-38940.herokuapp.com/',
    source: 'https://github.com/xchendo/Markdown-Previewer',
    demo_text: 'Write a blog post!',
  },
  {
    image: 'lifegame.png',
    name: 'Game of Life',
    description: 'The simulation game based on Conway\'s Game of Life. Built in React',
    demo: 'https://codepen.io/xchendo/full/yMpKwx',
    source: 'https://github.com/xchendo/Game-of-Life',
    demo_text: 'Run a simulation!',
  },
  {
    image: 'pomodoro.png',
    name: 'Pomodoro Timer',
    description: 'Take your productivity to new heights with this timer! You can set custom work and break periods and be notified when times\'s up! Built in React',
    demo: 'https://codepen.io/xchendo/full/wWNqRW',
    source: 'https://github.com/xchendo/Pomodoro-Timer',
    demo_text: 'Find some zen...',
  },
  {
    image: 'tictactoe.png',
    name: 'Tic Tac Toe',
    description: 'Play a match (or a couple) of Tic-Tac-Toe against the computer! Be careful, it doesn\'t like to lose. Built in vanilla JS',
    demo: 'https://codepen.io/xchendo/full/KgyzZg',
    source: 'https://github.com/xchendo/TicTacToe',
    demo_text: 'Play against an AI',
  },
]

function Portfolio () {
  return (
    <section id="projects" className="portfolio">
      <div>
        <div className="section-header">
          <h3 className="section-title">Projects</h3>
          <img height="28px" width="28px" src="icons/atom.svg"
               alt="react atom logo"/>
          <img height="28px" width="28px" src="icons/database.svg"
               alt="database icon"/>
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