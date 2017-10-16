import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Grid, Col } from 'react-bootstrap'

import { fetchPostsIfNeeded } from '../data/posts'

import Header from '../components/home/Header'
import PostExcerpt from '../components/home/PostExcerpt'

class Home extends Component {
  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    console.log(this.props.isFetching);
    const { fetchPostsIfNeeded } = this.props
    fetchPostsIfNeeded()
  }

  handleClick(e) {
  }

  render() {
    if (this.props.posts.length === 0) {
      return (
        <div>
          <Header />
          <Grid>
            <Col xs={12} className="placeholder" />
          </Grid>
        </div>
      )
    } else {
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
}

const mapStateToProps = state => ({
  posts: state.postReducer.posts,
  isFetching: state.postReducer.isFetching
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchPostsIfNeeded}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
