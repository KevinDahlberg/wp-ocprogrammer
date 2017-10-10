import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { checkPostArray } from '../data/posts'

class Post extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount(){
    const { checkPostArray } = this.props
    const currentPostTitle = this.props.match.params.title.replace(/-/g, ' ')
    console.log('current post title: ', currentPostTitle);
    checkPostArray(currentPostTitle)
    console.log(this.props.currentPost);
  }

  render() {
  return (
    <h1>{this.props.match.params.title}</h1>
  )
  }
}
const mapStateToProps = state => ({
  currentPost: state.postReducer.currentPost
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({checkPostArray}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
