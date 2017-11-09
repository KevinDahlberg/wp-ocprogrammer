import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Menu extends Component {
  render() {
    return (
      <div className="topnav">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    )
  }
}
