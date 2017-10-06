import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Menu from './menu/Menu'
import Home from './home/Home'
import About from './about/About'
import Post from './post/Post'

const Layout = () => (
  <div className="body">
    <Switch>
      <div>
        <Menu />
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/:id" component={Post} />
      </div>
    </Switch>
  </div>
)

export default Layout
