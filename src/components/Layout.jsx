import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Menu from './menu/Menu.jsx'
import Footer from './footer/Footer.jsx'
import Home from '../containers/Home.js'
import About from '../containers/About.js'
import Post from '../containers/Post.js'
import CategoryView from '../containers/CategoryView.js'

const Layout = () => (
  <div className="body">
    <Switch>
      <div>
        <Menu />
        <div className="content-body">
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/post/:title" component={Post} />
          <Route exact path="/category/:title" component={CategoryView} />
        </div>
        <Footer />
      </div>
    </Switch>
  </div>
)

export default Layout
