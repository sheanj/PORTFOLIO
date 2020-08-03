import React, { Component } from "react";
import "../Landing/Landing.css";
import MyPortrait from "../../assets/me.jpeg";
// import { Link } from "react-router-dom";
import Card from "../Contact/Card";
import FadeIn from "react-fade-in";
import Carrat from "../../assets/carrat.jsx";
import Cura from "../Apps/Cards/Cura";
import Covidata from "../Apps/Cards/Covidata";

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
        {/* <FadeIn> */}
        <viewport className="landing">
          <section className="greeting">
            <img src={MyPortrait} alt="pic" className="fade-in" />
            <div className="about fade-in">
              <span>
                <h1>
                  Hello, World. <br /> {"{"} My name is Shean && <br />
                  I'm a software engineer in Brooklyn. {"}"}
                </h1>
                <br />
                {/* <h3>Scroll to view what I'm working on</h3> */}
                <br />
                <Carrat />
              </span>
            </div>
          </section>
          <div
            className="project1"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-center"
            // className="mobile-title"
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
        </viewport>
        {/* </FadeIn> */}
      </>
    );
  }
}
