import React, { Component } from 'react'
import FaCopyright from 'react-icons/lib/fa/copyright'

export default class Footer extends Component {
  render () {
    return (
      <footer className="container footer-container">
        <span><FaCopyright className="footer-icon"/> 2017 One Point Oh Solutions</span>
      </footer>
    )
  }
}
