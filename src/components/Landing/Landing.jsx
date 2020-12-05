import React, { Component } from "react";
import "../Landing/Landing.css";
import Card from "../Contact/Card";
import Cura from "../Apps/Cards/Cura";
import Covidata from "../Apps/Cards/Covidata";
import About from '../Apps/Cards/About'
import html5 from "../../assets/html5.png";
import react from "../../assets/react.png";
import javascript from "../../assets/javascript.png";
import css3 from "../../assets/css3.png";
import nodejs from "../../assets/nodejs.png";
import mongodb from "../../assets/mongodb.png";
import ruby from "../../assets/ruby.png";
import rails from "../../assets/rails.png";
import postgresql from "../../assets/postgresql.png";

export default class Landing extends Component {
  state = {
    covidiFrame: false,
    curaiFrame: false
  };

  viewCovidiFrame = () => {
    this.setState({
      covidiFrame: true,
    });
  };

  closeCovidiFrame = () => {
    this.setState({
      covidiFrame: false,
    });
  };

  viewCuraiFrame = () => {
    this.setState({
      curaiFrame: true,
    });
  };

  closeCuraiFrame = () => {
    this.setState({
      curaiFrame: false,
    });
  };

  render() {
    return (
      <>
        <header>
          <Card />
        </header>
        <div className="landing">
            <div className="about">
              <div className="portrait fade-in"></div>
              <div className="intro">
                <h1>
                  HI,
                  <br />
                  I'M SHEAN
                  <br />
                </h1>
                <h3>I'm a developer<br />in New York City.</h3>
                <br />
                <br />
            </div>
            <div className="greetingFooter">
              <div className="footerTop">
                <a href="https://www.tiktok.com/@softwareshean" target="_blank" rel="noopener noreferrer">
                  <div className="tiktok fade-in">
                    <div className="tiktokicon">
                  </div>
                </div></a>
                <a href="https://www.twitter.com/softwareshean" target="_blank" rel="noopener noreferrer">
                <div className="twitter fade-in">
                  <div className="twittericon"></div>
                  </div>
                  </a>
                <a href="https://www.linkedin.com/in/sheanj/" target="_blank" rel="noopener noreferrer">
                <div className="linkedin fade-in">
                  <div className="linkedinicon"></div>
                  </div>
                  </a>
            </div>
              <div className="footerBottom">
                <img src={html5} alt="language icons"/>
                <img src={css3} alt="language icons"/>
                <img src={javascript} alt="language icons"/>
                <img src={react} alt="language icons"/>
                <img src={nodejs} alt="language icons"/>
                <img src={mongodb} alt="language icons"/>
                <img src={ruby} alt="language icons"/>
                <img src={rails} alt="language icons"/>
                <img src={postgresql} alt="language icons"/>
              </div>
            </div>
            </div>
          <div
            className="project1"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-center"
          >
            <Cura 
            iFrame={this.state.curaiFrame}
            view={this.viewCuraiFrame}
            close={this.closeCuraiFrame}
            />
          </div>
          <div className="project2">
            <Covidata
              iFrame={this.state.covidiFrame}
              view={this.viewCovidiFrame}
              close={this.closeCovidiFrame}
            />
          </div>
          <div className="project3">
            <About />
          </div>
        </div>
      </>
    );
  }
}
