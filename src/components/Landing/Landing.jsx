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
          <section className="greeting">
            <img src={MyPortrait} alt="pic" />
            <div className="about fade-in">
              <h1>
                Hello, World. <br /> My name is Shean && <br />
                I'm a software engineer in Brooklyn.
              </h1>
              <h3>Scroll to see what I'm working on.</h3>
            </div>
          </section>
          {/* <div className="project">
            <h1>CURA</h1>
          </div>
          <div className="project">
          <h1>COVIDATA</h1>
          </div> */}

        </div>
      </>
    );
  }
}
