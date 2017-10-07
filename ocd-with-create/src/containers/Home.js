import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Grid } from 'react-bootstrap'

import { fetchPosts } from '../data/posts'

import Header from '../components/home/Header'
import PostExcerpt from '../components/home/PostExcerpt'

class Home extends Component {

  componentDidMount() {
    const { fetchPosts } = this.props
    fetchPosts()
  }

  render() {
    return (
      <div>
      <Header />
      <Grid>
      <PostExcerpt posts={this.props.posts} />
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
