import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Grid } from 'react-bootstrap'

import { shouldFetchSinglePosts } from '../data/posts'

import ViewPost from '../components/post/ViewPost'

class Post extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount(){
    const { shouldFetchSinglePosts } = this.props
    const currentPostTitle = this.props.match.params.title
    console.log('current post title: ', currentPostTitle);
    shouldFetchSinglePosts(currentPostTitle)
  }

  render() {
  return (
    <Grid>
    <h1>{this.props.match.params.title}</h1>
    <div>
      <ViewPost posts={this.props.currentPost} />
    </div>
    </Grid>
  )
  }
}
const mapStateToProps = state => ({
  currentPost: state.postReducer.currentPost
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({shouldFetchSinglePosts}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
