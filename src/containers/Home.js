import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchPostsIfNeeded } from '../data/posts'
import { shouldFetchSinglePage } from '../data/pages'

import PostExcerpt from '../components/home/PostExcerpt.jsx'


class Home extends Component {
  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  componentWillMount() {
    const { fetchPostsIfNeeded, shouldFetchSinglePage } = this.props
    fetchPostsIfNeeded()
    //this will be replaced by something from the settings that will provide the pages that are in the nav widget
    const pageName = 'about'
    shouldFetchSinglePage(pageName)
  }

  handleClick(e) {
  }

  render() {
    if (this.props.posts.length === 0) {
      return (
        <div>
            <div className="placeholder" />
        </div>
      )
    } else {
      return (
        <div>
          <PostExcerpt posts={this.props.posts} onItemClick={this.handleClick} />
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  posts: state.postReducer.posts,
  isFetching: state.postReducer.isFetching,
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchPostsIfNeeded, shouldFetchSinglePage}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
