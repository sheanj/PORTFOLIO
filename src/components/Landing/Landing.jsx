import React, { Component } from "react";
import "../Landing/Landing.css";
import MyPortrait from "../../assets/me.jpeg";
// import { Link } from "react-router-dom";
import Card from "../Contact/Card";

export default class Landing extends Component {
  render() {
    return (
      <>
      <header>
      <Card />
      </header>
      <div className="landing">
        <img src={MyPortrait} alt="pic"/>
        <div className="about">
          <h1>
            Hello, World. <br /> My name is Shean && <br />I'm a software engineer in
            Brooklyn.
          </h1>
          <div className="links">
            
          </div>
        </div>
        </div>
        </>
    );
  }
}
