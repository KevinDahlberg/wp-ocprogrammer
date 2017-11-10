import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Menu extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const myTopNav = document.querySelector("topnav");
    // if (myTopNav.className === "topnav") {
    //   myTopNav.className += " responsive";
    // } else {
    //   myTopNav.className = "topnav";
    // }
    console.log(myTopNav)
  }

  render() {
    return (
      <div className="nav-wrapper">
        <div className="container topnav">
          <div className="row align-items-center d-flex justify-content-between topbar">
            <div className="col-sm"></div>
            <NavLink className="col-sm nav-header" to="/home">The OCD Coder</NavLink>
            <NavLink className="col-sm" to="/about">About</NavLink>
          </div>
          <div className="topnav" id="myTopNav">
            <NavLink to="/home">Home</NavLink>
            <a href="javascript:void(0);" className="icon" onClick={this.handleClick()}>&#9776;</a>
          </div>
        </div>
      </div>
    )
  }
}
