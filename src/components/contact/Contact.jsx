import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaTelegram } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_5yy8foq",
      "template_mxvg89y",
      form.current,
      "Dt8ma4BWCJnbLoXhU"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>signorpao@gmail.com</h5>
            <a href="mailto:signorpao@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <FaTelegram className="contact__option-icon" />
            <h4>Telegram</h4>
            <h5>@signor_Pao</h5>
            <a href="https://telegram.me/signor_Pao" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+7 996 958 75 58</h5>
            <a href="https://wa.me/89969587558" target="_blank">
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
