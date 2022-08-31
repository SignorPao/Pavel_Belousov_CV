import React from "react";
import "./footer.css";
import { FaFacebookF, FaInstagram, FaRedditAlien } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        signorPao
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        {/* <li>
          <a href="#services">Services</a>
        </li> */}
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        {/* <li>
          <a href="#testimonials">Testimonials</a>
        </li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/pavel.belousov.82" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/signorpao/" target="_blank">
          <FaInstagram />
        </a>
        <a href="https://www.reddit.com/user/meta_hedonist" target="_blank">
          <FaRedditAlien />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; 2022 All Rights Reserved.</small>
        <small>
          Created by{" "}
          <a href="https://github.com/SignorPao" target="_blank">
            @signorPao
          </a>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
