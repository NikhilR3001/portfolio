import React from "react";
import "./footer.css";
import { FiPhone, FiLinkedin } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="tel:6360120872"
            className="home__social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiPhone />
          </a>
          <a
            href="mailto:nikhil.ravikumargowda@gmail.com"
            className="home__social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdOutlineEmail />
          </a>
          <a
            href="https://www.linkedin.com/in/ni-khil-r/"
            className="home__social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin />
          </a>
        </div>
        <span className="footer__copy"></span>
      </div>
    </footer>
  );
};

export default Footer;
