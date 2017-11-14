import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Menu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      categoryArray: [],
      myTopNav: ''
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentWillMount () {
    this.fetchCategories()
  }

  componentDidMount () {
    const topNav = document.querySelector("topnav")
    console.log('topNav ', topNav)
    this.setState(this.state.myTopNav = topNav)
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
    const myTopNav = document.querySelector("topnav");
    // if (myTopNav.className === "topnav") {
    //   myTopNav.className += " responsive";
    // } else {
    //   myTopNav.className = "topnav";
    // }
    console.log(this.state.myTopNav)
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
            {this.state.categoryArray.map((item, idx) => {
              const path = "/category/" + item.slug
              return (
                <NavLink to={path} key={idx}>{item.name}</NavLink>
              )
            })}
            <a href="javascript:void(0);" className="icon" onClick={this.handleClick()}>&#9776;</a>
          </div>
        </div>
      </div>
    )
  }
}
