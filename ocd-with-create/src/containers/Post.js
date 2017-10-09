import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { displayPost } from '../data/posts'

class Post extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount(){
    const { displayPost } = this.props
    const currentPostTitle = this.props.match.params.title.replace(/-/g, ' ')
    console.log(currentPostTitle);
    displayPost(currentPostTitle)
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
  return bindActionCreators({displayPost}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
