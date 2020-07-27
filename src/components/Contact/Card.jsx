import React, { Component } from 'react'
import './Card.css'

export default class Card extends Component {
  render() {
    return (
      <div>
        <a href="mailto:csheanjohnson@gmail.com"><h1>email me</h1></a>
        <a href="tel:+19174742061"><h1>call me</h1></a>
        <a target="_blank" href="https://github.com/sheanj"><h1>github</h1></a>
        <a target="_blank" href="https://www.linkedin.com/in/sheanj/"><h1>linkedin</h1></a>
        <a target="_blank" href="https://docdro.id/YbJTilE"><h1>[View My Resume]</h1></a>
      </div>
    )
  }
}
