import React from 'react';

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="logo">
        <a href="http://georgeloaiza.com">
          <img height="32px" width="32px" src="icons/ghost.svg" alt="ghost icon" />
            George Loaiza
        </a>
      </div>
      <ul>
        <li><a className="reset" href="#projects">Projects</a></li>
        <li><a className="reset" href="#contact">Contact</a></li>
      </ul>
    </nav>

  );
}

export default Navbar;