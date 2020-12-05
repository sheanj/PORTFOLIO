import React, { Component } from "react";
import "./Cura.css";
import CuraLogo from "../../../assets/CuraLogo.png";
import { FaGithub, FaGlobe, FaWindowClose } from "react-icons/fa";
import { IconContext } from "react-icons";
import CuraPreview from '../../../assets/cura-preview.png'

export default class Cura extends Component {
  render() {
    return (
      <>
        <div className="curaContainer">
          <div className="curaLeft">
            <div className="curaHeader">
              <img src={CuraLogo} alt="cura application logo"/>
              <div className="curaProjectButtons">
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
                    <a href="https://cura-app.netlify.app/" target="_blank0" rel="noopener noreferrer"><FaGlobe /></a>
                  </button>
                </IconContext.Provider>
              </div>
                            <h1>CURA</h1>

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
              <img src={CuraPreview} alt="cura application preview"/>
            </div>
          </div>
        </div>
      </>
    );
  }
}
