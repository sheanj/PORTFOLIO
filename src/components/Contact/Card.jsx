import React, { Component } from "react";
import "./Card.css";

export default class Card extends Component {
  render() {
    return (
      <div className="contact">
        <a href="mailto:csheanjohnson@gmail.com">
          <h4>[email]</h4>
        </a>
        <a href="tel:+19174742061">
          <h4>[phone]</h4>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/sheanj">
          <h4>[github]</h4>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sheanj/">
          <h4>[linkedin]</h4>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://docdro.id/YbJTilE">
          <h4>[resume]</h4>
        </a>
        {/* <a target="_blank" href="https://docdro.id/YbJTilE">
          <h4>[view my work]</h4>
        </a> */}
      </div>
    );
  }
}
