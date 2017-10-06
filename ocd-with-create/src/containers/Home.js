import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Grid } from 'react-bootstrap'

import { fetchPosts } from '../data/posts'

import ViewPost from '../components/home/ViewPost'

class Home extends Component {

  componentDidMount() {
    const { fetchPosts } = this.props
    fetchPosts()
  }

  render() {
    return (
      <div>
      <h1>Home</h1>
      <Grid>
      <ViewPost posts={this.props.posts} />
      </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.postReducer.posts
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchPosts}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
