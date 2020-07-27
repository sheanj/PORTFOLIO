import React, { Component } from "react";
import "../Landing/Landing.css";
import MyPortrait from '../../assets/me.jpeg';

export default class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <img src={MyPortrait} />
        <div className="about">
          <h1>
            Hello, World. My name is Shean && I'm a software engineer in
            Brooklyn.
          </h1>
          <div className="links">
            <h6>[Contact Me]</h6>
            <a href=""><h6>[View My Resume]</h6></a>
            <h6>[Here's what I'm working on]</h6>
          </div>
        </div>
      </div>
    );
  }
}
