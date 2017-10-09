import React, { Component } from 'react'
import render from 'react-dom'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class PostExcerpt extends Component {

  excerptTitle (title) {
    return (
      <Row>
        <h1>{title}</h1>
      </Row>
    )
  }

  excerptSummary (summary) {
    return (
      <Row>
        <div dangerouslySetInnerHTML={{__html: summary}} />
        </Row>
    )
  }
  // this will be added later when the theme supports it
  // excerptImage = image => (
  //   <img src={image.url} alt={image.alt} />
  // )

  excerptLayout (postInfo) {
    return (
    <Row>
      <Col xs={12}>
        {this.excerptTitle(postInfo.title.rendered)}
        {this.excerptSummary(postInfo.excerpt.rendered)}
      </Col>
    </Row>
    )
  }

  excerptBox (postInfo) {
    const postPath = '/post/' + postInfo.title.rendered.toLowerCase().toString().replace(/\s/g,'-')
    return (
    <Link to={postPath}>
      <div key={postInfo.id}>
      <Col xs={4} className="excerpt-box">
        {this.excerptLayout(postInfo)}
      </Col>
      </div>
    </Link>
    )
  }

  render() {
    return (
      <div>
        {this.props.posts.map((post, idx) => {
            return (
              <div key={idx}>
              {this.excerptBox(post)}
              </div>
            )
          })
        }
      </div>
    )
  }
}
