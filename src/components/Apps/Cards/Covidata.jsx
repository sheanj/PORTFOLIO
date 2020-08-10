import React, { Component } from "react";
import "./Covidata.css";
import Covid from "../../../assets/Covid.png";
import AOS from "aos";
import CovidataPreview from "../../../assets/CovidataPreview.png";
import Iframe from "react-iframe";
import { FaGithub, FaGlobe, FaWindowClose } from "react-icons/fa";
import { IconContext } from "react-icons";

export default class Covidata extends Component {
  render() {
    AOS.init();
    return (
      <>
        <div className="covidContainer">
          {this.props.iFrame ? (
            <div className="iframe fade-in">
              <Iframe
                url="https://pages.git.generalassemb.ly/sheanj/COVIDATA-19/"
                width="100%"
                height="100%"
                id="myId"
                className="myClassname"
                display="initial"
              />
              <div className="covidClose">
                <IconContext.Provider
                  value={{
                    style: {
                      fontSize: "35px",
                      color: "#000000",
                      paddingLeft: "8px",
                      paddingTop: "5px",
                      paddingRight: "8px",
                    },
                  }}
                >
                  <button className="btn" onClick={this.props.close}>
                    <FaWindowClose />
                  </button>
                </IconContext.Provider>
              </div>
            </div>
          ) : (
            <></>
          )}
          <div className="covidLeft">
            <div className="covidHeader">
              <img src={Covid} alt="covid particle"/>
              <h1>COVIDATA</h1>
              <div className="projectButtons">
                <IconContext.Provider
                  value={{
                    style: {
                      fontSize: "35px",
                      color: "#000000",
                      paddingLeft: "8px",
                      paddingTop: "5px",
                      paddingRight: "8px",
                    },
                  }}
                >
                  <button className="btn" onClick={this.newTab}>
                    <FaGithub />
                  </button>
                  <button className="btn">
                    <FaGlobe onClick={this.props.view} />
                  </button>
                </IconContext.Provider>
              </div>
            </div>
            <div className="covidBlurb">
              <h3>
                Covidata set out to be a data hub for the latest statistics and
                news surrounding the Coronavirus Pandemic in the United States
              </h3>
              <br />
              <br />
              <h4>Current Development:</h4>
              <ul>
                <li>
                  <h6>Rebuilding application for React framework</h6>
                </li>
                <li>
                  <h6>
                    Adjusting for edge cases where data from disperate API does
                    not properly correlate
                  </h6>
                </li>
              </ul>
              <h4>API Integrations:</h4>
              <ul>
                <li>
                  <a href="https://covidtracking.com/api" target="_blank">
                    <h6>The COVID Tracking Project</h6>
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="https://newsapi.org/" target="_blank">
                    <h6>News API</h6>
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="https://api.propublica.org/congress" target="_blank">
                    <h6>ProPublica Senators API</h6>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="covidRight">
            <div className="covidPreview" data-aos="fade-up">
              <img src={CovidataPreview} />
            </div>
          </div>
        </div>
      </>
    );
  }
}
