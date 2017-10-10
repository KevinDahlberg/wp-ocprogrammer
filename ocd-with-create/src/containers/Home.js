import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Grid } from 'react-bootstrap'

import { fetchPostsIfNeeded } from '../data/posts'

import Header from '../components/home/Header'
import PostExcerpt from '../components/home/PostExcerpt'

class Home extends Component {
  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    const { fetchPostsIfNeeded } = this.props
    fetchPostsIfNeeded()
  }

  handleClick(e) {
    console.log(e);
  }

  render() {
    return (
      <div>
      <Header />
      <Grid>
      <PostExcerpt posts={this.props.posts} onItemClick={this.handleClick} />
      </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.postReducer.posts
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchPostsIfNeeded}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
