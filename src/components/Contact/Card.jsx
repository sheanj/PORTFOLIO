import React, { Component } from "react";
import "./Card.css";
import {
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaGit,
  FaGithub,
  FaLinkedin,
  FaPage4,
  FaPagelines,
  FaHandPaper,
  FaPaperclip,
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
              color: "#ffffff",
              paddingLeft: "8px",
              paddingTop: "5px",
              paddingRight: "8px"
            },
          }}
        >
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
          href="https://docdro.id/YbJTilE"
        >
            <FaPaperclip />
        </a>
          </IconContext.Provider>
      </div>
    );
  }
}
