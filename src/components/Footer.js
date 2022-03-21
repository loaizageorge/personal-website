import React from 'react';

const Footer = () => {
  return (
    <footer>
        <p>Coded with <img height="16px" width="16px" src="icons/heart.svg" /> from Spring Valley</p>
        <p id="copyright">Copyright &copy;{ new Date().getFullYear() }</p>
    </footer>
  );
}
export default Footer;