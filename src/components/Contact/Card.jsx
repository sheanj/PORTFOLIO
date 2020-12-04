import React, { Component } from "react";
import "./Card.css";
import Resume from '../../assets/Shean_Johnson_Resume.pdf'
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaPaperclip,
  FaInstagram,
  FaTwitter
} from "react-icons/fa";
import { IconContext } from "react-icons";

export default class Card extends Component {
  render() {
    return (
      <div className="contact">
        <IconContext.Provider
          value={{
            style: {
              fontSize: "35px",
              color: "#000000",
              paddingLeft: "8px",
              paddingRight: "8px"
            },
          }}
        >
          <a href="mailto:csheanjohnson@gmail.com">
            <FaLinkedin />
          </a>
          <a href="mailto:csheanjohnson@gmail.com">
            <FaEnvelope />
          </a>
          <a href="tel:+19174742061">
            <FaPhone />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/sheanj"
          >
            <FaGithub />
          </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/sheanj/"
        >
            <FaLinkedin />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={Resume}
        >
            <FaPaperclip />
          </a>
          <a target="_blank"
          rel="noopener noreferrer" href="https://instagram.com/softwareshean">
            <FaInstagram />
          </a>
          <a target="_blank"
          rel="noopener noreferrer" href="https://twitter.com/softwareshean">
            <FaTwitter />
          </a>
          </IconContext.Provider>
      </div>
    );
  }
}
