import React, { Component } from 'react'
import './Cura.css'
import CuraLogo from '../../../assets/CuraLogo.png'

export default class CURA extends Component {
  render() {
    return (
      <div className="curaContainer">
        <img src={CuraLogo} />
      </div>
    )
  }
}
