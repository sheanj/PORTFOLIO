import React, { Component } from "react";
import "./Cura.css";
import CuraLogo from "../../../assets/CuraLogo.png";
import AOS from "aos";
import Iframe from "react-iframe";
import { FaGithub, FaGlobe, FaWindowClose } from "react-icons/fa";
import { IconContext } from "react-icons";
import CuraPreview from '../../../assets/cura-preview.png'

export default class Cura extends Component {
  newTab() {
    window.open("https://github.com/sheanj/CURA", "_blank");
  }
  render() {
    AOS.init();
    return (
      <>
        <div className="curaContainer">
          {this.props.iFrame ? (
            <div className="iframe fade-in">
              <Iframe
                url="http://cura-app.netlify.app/"
                width="100%"
                height="100%"
                display="initial"
              />
              <div className="curaClose">
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
          <div className="curaLeft">
            <div className="curaHeader">
              <img src={CuraLogo} alt="cura application logo"/>
              <h1>CURA</h1>
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
            <div className="curaBlurb">
              <h3>
                CURA was developed as an organizational tool to organize links, notes, task lists, and other digital media into a daily timeline format. 
              </h3>
              <br />
              <br />
              <h4>Current Development:</h4>
              <ul>
                <li>
                    <h6>Ruby database improvements to better incorporate tag feature and to-do lists.</h6>
                </li>
                <li>
                    <h6>Integrating additional API to display news and weather to user.</h6>
                </li>
                <li>
                    <h6>Incorporating settings feature to allow for user customization.</h6>
                </li>
              </ul>
              <h4>API Integrations:</h4>
              <ul>
                <li>
                  <a href="https://www.linkpreview.net/" target="_blank" rel="noopener noreferrer">
                    <h6>LinkPreview</h6>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="curaRight" >
            <div className="curaVideo">
              {/* <video src={CuraPreviewVideo} width="150%" height="auto" autoPlay loop  type="video/mp4" /> */}
              <img src={CuraPreview} alt="cura application preview"/>
            </div>
          </div>
        </div>
      </>
    );
  }
}
