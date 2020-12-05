import React, { Component } from "react";
import "./Covidata.css";
import Covid from "../../../assets/Covid.png";
import CovidataPreview from "../../../assets/covidata-preview.png";
import { FaGithub, FaGlobe, FaWindowClose } from "react-icons/fa";
import { IconContext } from "react-icons";

export default class Covidata extends Component {
  render() {
    return (
      <>
        <div className="covidContainer">
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
                  <button className="btn">
                    <a href="https://github.com/sheanj/COVIDATA" target="_blank0" rel="noopener noreferrer"><FaGithub /></a>
                  </button>
                  <button className="btn">
                    <a href="https://covidata19.netlify.app/" target="_blank0" rel="noopener noreferrer"><FaGlobe /></a>
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
                  <a href="https://covidtracking.com/api" target="_blank" rel="noopener noreferrer">
                    <h6>The COVID Tracking Project</h6>
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="https://newsapi.org/" target="_blank" rel="noopener noreferrer">
                    <h6>News API</h6>
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="https://api.propublica.org/congress" target="_blank" rel="noopener noreferrer">
                    <h6>ProPublica Senators API</h6>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="covidRight">
            <div className="covidPreview" data-aos="fade-up">
              <img src={CovidataPreview} alt="covidata preview"/>
            </div>
          </div>
        </div>
      </>
    );
  }
}
