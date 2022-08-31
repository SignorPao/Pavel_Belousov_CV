import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Figma</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Photoshop</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Illustrator</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Full-Stack Web Development Services</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Ecommerce Applications</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Custom Web Applications</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Content Management Systems</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>QA & Testing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web Support and Maintenance</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Content creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Blogs</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Podcasts</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Video</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Graphics</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
