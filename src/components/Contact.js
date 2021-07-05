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
                <i id="email-icon" className="fal fa-envelope" aria-hidden="true" />
              </a>
              <p id="email-url">loaizageorge@gmail.com</p>
            </div>

            <h3>I'm also at these sites!</h3>
            <a href="https://www.freecodecamp.com/xchendo" target="_blank" rel="noopener noreferrer" id="freecodecamp" role="button" className="btn btn-default btn-lg freecodecamp-btn">
              <i className="fab fa-free-code-camp" aria-hidden="true" />
              <span> FreeCodeCamp</span>
            </a>

            <a href="http://codepen.io/xchendo/" target="_blank" rel="noopener noreferrer" id="codepen" role="button" className="btn btn-default btn-lg codepen-btn">
              <i className="fab fa-codepen" />
              <span>CodePen</span>
            </a>

            <a href="https://github.com/xchendo" target="_blank" rel="noopener noreferrer" id="github" role="button" className="btn btn-default btn-lg github-btn">
              <i className="fab fa-github" aria-hidden="true" />
              <span> Github</span>
            </a>
          </div>
        </div>
              </div>
    </section>
  );
}

export default Contact;