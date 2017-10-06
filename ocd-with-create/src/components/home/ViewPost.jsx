import React, { Component } from 'react'
import { Col } from 'react-bootstrap'

export default class ViewPost extends Component {

  postHeader = (header) => {
    <h1>{header}</h1>
  }

  postContent = (content) => {
    <Col xs={12}>
    {content}
    </Col>
  }

  postLayout = (post) => {
    <Col xs={12}>
    {this.postHeader(post.title.rendered)}
    {this.postContent(post.content.rendered)}
    </Col>
  }

  displayPosts = (postArray) => {
    <Col xs={12}>
    {postArray.map((post) =>
      {this.postLayout(post)}
    )}
    </Col>
  }

  render() {
    return (
      <Col xs={12}>
      {this.displayPosts(this.props.posts)}
      </Col>
    )
  }
}
