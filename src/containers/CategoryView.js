import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchPostsIfNeeded } from '../data/posts'
import { shouldFetchSinglePage } from '../data/pages'

import PostExcerpt from '../components/home/PostExcerpt.jsx'


class Home extends Component {
  constructor(props){
    super(props)
    
    this.state = {
        currentCategoryPosts: []
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    const { fetchPostsIfNeeded, shouldFetchSinglePage, filterCategoryPosts, posts, categoryArray } = this.props
  
    fetchPostsIfNeeded()
    const pageName = 'about'
    shouldFetchSinglePage(pageName)
    const currentCategory = this.props.match.params.title
    filterCategoryPosts(currentCategory, posts, categoryArray)
  }

  handleClick(e) {
  }

  render() {
    if (this.props.currentCategoryPosts.length === 0) {
      return (
        <div>
            <div className="col-xs-12 placeholder" />
        </div>
      )
    } else {
      return (
        <div>
          <PostExcerpt posts={this.props.currentCategoryPosts} onItemClick={this.handleClick} />
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
    categoryArray: state.categoryReducer.categoryArray,
    currentCategoryPosts: state.categoryReducer.currentCategoryPosts,
    posts: state.postReducer.posts
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchPostsIfNeeded, shouldFetchSinglePage, filterCategoryPosts}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
