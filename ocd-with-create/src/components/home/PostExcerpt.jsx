import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class PostExcerpt extends Component {

  excerptTitle = title => (
    <Row>
      <h1>{title}</h1>
    </Row>
  )

  excerptSummary = summary => (
    <Row>
      <div dangerouslySetInnerHTML={{__html: summary}} />
    </Row>
  )
  // this will be added later when the theme supports it
  // excerptImage = image => (
  //   <img src={image.url} alt={image.alt} />
  // )

  excerptLayout = (postInfo) => (
    <Row>
      <Col xs={12}>
        {this.excerptTitle(postInfo.title.rendered)}
        {this.excerptSummary(postInfo.excerpt.rendered)}
      </Col>
    </Row>
  )

  excerptBox = (postInfo) => (
      <Link to='/:'{postInfo.id}>
      <div key={postInfo.id}>
      <p>{postInfo.id}</p>
      <Col xs={4} className="excerpt-box">
        {this.excerptLayout(postInfo)}
      </Col>
      </div>
      </Link>

  )

  createExcerptBoxes = (postArray) => (
    postArray.map(this.excerptBox)
  )

  render() {
    return (
      <div>
        {this.createExcerptBoxes(this.props.posts)}
      </div>
    )
  }
}
