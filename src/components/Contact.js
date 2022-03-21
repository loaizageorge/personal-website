import React, { useState, useEffect } from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <div className="contact-container">
        <div className="contact__links">
          <h3>Send me an email!</h3>
          <div className="buttons">

            <div className="email">
              <a href="mailto:loaizageorge@gmail.com" target="_top">
                <img src="icons/envelope.svg" id="email-icon" aria-hidden="true" />
              </a>
              <p id="email-url">loaizageorge@gmail.com</p>
            </div>

            <h3>I'm also at these sites!</h3>
            <a href="https://www.freecodecamp.com/xchendo" target="_blank" rel="noopener noreferrer" id="freecodecamp" role="button" className="btn btn-default btn-lg freecodecamp-btn">
              <img src="icons/free-code-camp.svg" aria-hidden="true" />
              <span> FreeCodeCamp</span>
            </a>

            <a href="http://codepen.io/xchendo/" target="_blank" rel="noopener noreferrer" id="codepen" role="button" className="btn btn-default btn-lg codepen-btn">
              <img src="icons/codepen.svg"/>
              <span>CodePen</span>
            </a>

            <a href="https://github.com/xchendo" target="_blank" rel="noopener noreferrer" id="github" role="button" className="btn btn-default btn-lg github-btn">
              <img src="icons/github-alt.svg" aria-hidden="true" />
              <span> Github</span>
            </a>
          </div>
        </div>
              </div>
    </section>
  );
}

export default Contact;