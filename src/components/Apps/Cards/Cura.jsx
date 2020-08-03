import React, { Component } from "react";
import "./Cura.css";
import CuraLogo from "../../../assets/CuraLogo.png";
import AOS from "aos";
import CovidataPreview from "../../../assets/CovidataPreview.png";
import Iframe from "react-iframe";

export default class Cura extends Component {
  render() {
    AOS.init();
    return (
      <>
        <div className="curaContainer">
          {this.props.iFrame ? (
            <div className="iframe">
              <Iframe
                url="https://cura-app.netlify.app/"
                width="100%"
                height="100%"
                display="initial"
              />
              <div className="curaClose"><button onClick={this.props.close}>X</button></div>
            </div>
          ) : (
            <></>
          )}
          <div className="left">
            <div className="curaHeader">
              <img src={CuraLogo} />
              <h1>CURA</h1>
            </div>
            <div className="covidBlurb">
              <h4>
                Covidata set out to be a data hub for the latest statistics and
                news surrounding the Coronavirus Pandemic in the United States
              </h4>
              <button onClick={this.props.view}>View Site</button>
            </div>
          </div>
          <div className="right">
            <div className="covidPreview" data-aos="fade-up">
              <img src={CovidataPreview} />
            </div>
          </div>
        </div>
      </>
    );
  }
}
