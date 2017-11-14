import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import FaBars from 'react-icons/lib/fa/bars'

export default class Menu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      categoryArray: [],
      active: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentWillMount () {
    this.fetchCategories()
  }
  
  fetchCategories() {
    const init = {
        method: 'GET'
    }
    fetch('http://theocdcoder.com/wp-json/wp/v2/categories', init)
      .then(response => response.json())
      .then(json => this.setState(this.state.categoryArray = json))
      .then(() => {console.log(this.state)})
  }


  handleClick() {
    const linksEl = document.querySelector('.narrow-links');
    if(linksEl.style.display === 'block') {
      linksEl.style.display = 'none';
    } else {
      linksEl.style.display = 'block'
    }
  }

  render() {

    return (
      <nav className="nav-wrapper">
        <div className="container">
          <div className="row align-items-center d-flex justify-content-between topbar">
            <div className="col-xs"></div>
            <NavLink className="col-xs nav-header" to="/home">The OCD Coder</NavLink>
            <NavLink className="col-xs" to="/about">About</NavLink>
          </div>
          <div className="topnav">
            <NavLink to="/home">Home</NavLink>
            {this.state.categoryArray.map((item, idx) => {
              const path = "/category/" + item.slug
              return (
                <NavLink to={path} key={idx}>{item.name}</NavLink>
              )
            })}
          </div>
          <div className="topnav-narrow">
            <FaBars className="nav-icon" onClick={this.handleClick}></FaBars>
              <div className="narrow-links">
                {this.state.categoryArray.map((item, idx) => {
                  const path = "/category/" + item.slug
                  return (
                    <NavLink to={path} key={idx} onClick={this.handleClick}>{item.name}</NavLink>
                  )
                })}
              </div>
          </div>
        </div>
      </nav>
    )
  }
}
