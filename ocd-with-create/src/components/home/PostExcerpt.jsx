import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'

export default class PostExcerpt extends Component {

  excerptTitle = title => (
    <Row>
      <h1>{title}</h1>
    </Row>
  )

  excerptSummary = summary => (
    <Row>
      <p>{summery}</p>
    </Row>
  )

  excerptImage = image => (
    <img src={image.url} alt={image.alt} />
  )

  excerptLayout = (props) => (
    <Row>
      <Col xs={6}>
        excerptImage(props.image)
      </Col>
      <Col xs={6}>
        {this.excerptTitle(props.title)}
        {this.excerptSummary(props.summary)}
      </Col>
    </Row>
  )

  excerptBox = (props) => (
    <Col xs={4} className = "excerpt-box">
      {this.excerptLayout(props)}
    </Col>
  )

  createExcerptBoxes = (props) => (
    props.map((excerpt) =>
      excerptBox(excerpt)
    )
  )

  render() {
    return (
      <div>
        {createExcerptBoxes(this.props.excerptInfo)}
      <div>
    )
  }
}
