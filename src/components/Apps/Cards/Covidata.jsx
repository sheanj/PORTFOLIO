import React, { Component } from "react";
import "./Covidata.css";
import Covid from "../../../assets/Covid.png";
import AOS from "aos";
import CovidataPreview from "../../../assets/CovidataPreview.png";
import Iframe from "react-iframe";

export default class Covidata extends Component {
  render() {
    AOS.init();
    return (
      <>
        <div className="covidContainer">
          {this.props.iFrame ? (
            <div className="iframe">
              <Iframe
                url="https://pages.git.generalassemb.ly/sheanj/COVIDATA-19/"
                width="100%"
                height="100%"
                id="myId"
                className="myClassname"
                display="initial"
              />
              <div className="covidClose"><button onClick={this.props.close}>X</button></div>
            </div>
          ) : (
            <></>
          )}
          <div className="left">
            <div className="covidHeader">
              <img src={Covid} />
              <h1>COVIDATA</h1>
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
