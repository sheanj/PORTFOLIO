import React, { Component } from "react";
import "./About.css";
import html5 from "../../../assets/html5.png";
import react from "../../../assets/react.png";
import javascript from "../../../assets/javascript.png";
import css3 from "../../../assets/css3.png";
import nodejs from "../../../assets/nodejs.png";
import mongodb from "../../../assets/mongodb.png";
import ruby from "../../../assets/ruby.png";
import rails from "../../../assets/rails.png";
import postgresql from "../../../assets/postgresql.png";
import photoshop from "../../../assets/photoshop.png";
import xd from "../../../assets/xd.png"

export default class About extends Component {
  render() {
    return (
      <div className="component">
        <div className="aboutDiv">
          
            <h2>
              <span>I am committed to making a positive impact. At my root, I am a
              builder and creator.</span> <br />
              <br /> <span>My work experience is diverse and varied
              which provides me with a unique skillset. I am action oriented and
              independent, organized, creative, and most importantly, deeply
              passionate about my work and the things I create. </span><br />
              <br />
              <span>Use the icons above to get in touch, and lets get to work.</span>
            </h2>
        </div>
        <div className="languageIcon">
          <img src={html5} />
          <img src={css3} />
          <img src={javascript} />
          <img src={react} />
          <img src={nodejs} />
          <img src={mongodb} />
          <img src={ruby} />
          <img src={rails} />
          <img src={postgresql} />
          <img src={photoshop} />
          <img src={xd} />
        </div>
      </div>
    );
  }
}
