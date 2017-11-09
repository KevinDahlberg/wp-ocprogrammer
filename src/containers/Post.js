import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { shouldFetchSinglePosts } from '../data/posts'

import ViewPost from '../components/post/ViewPost.jsx'

class Post extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentPost: []
    }
  }

  componentDidMount(){
    const { shouldFetchSinglePosts } = this.props
    const currentPostTitle = this.props.match.params.title
    console.log('current poast title ', currentPostTitle);
    shouldFetchSinglePosts(currentPostTitle)
  }

  render() {
    if (this.props.currentPost.length === 0) {
      return (
          <div>
            <Col xs={12} className="placeholder" />
          </div>
      )
    } else {
      return (
          <div>
            <ViewPost posts={this.props.currentPost} />
          </div>
      )
    }
  }
}
const mapStateToProps = state => ({
  currentPost: state.postReducer.currentPost
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({shouldFetchSinglePosts}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
