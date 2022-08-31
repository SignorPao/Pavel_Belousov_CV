import React from "react";
import "./about.css";
import ME from "../../assets/me-05.webp";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Year Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>0+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>

          <p>
            My name is Pavel. I am 40 years old and I am a beginner web
            developer from Yoshkar-Ola, Russia. For the last 12 years,
            programming and design have been my hobbies. In October 2021, I
            finally decided to make my hobby my main activity. In 2017, there
            was little commercial experience in copywriting: 95 articles were
            written, of which 91 were sold without negative reviews and returns.
            In my free time I go in for sports and go out into nature.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
