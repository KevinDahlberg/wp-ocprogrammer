import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PostExcerpt extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  excerptTitle (title) {
    return (
      <div>
        <h3>{title}</h3>
      </div>
    )
  }

  excerptSummary (summary) {
    return (
      <div>
        <div dangerouslySetInnerHTML={{__html: summary}} />
        </div>
    )
  }

  excerptImage (image) {
    return (
      <img src={image.url} alt={image.alt} />
    )
  }

  excerptLayout (postInfo) {
    if (postInfo.image) {
      return (
        <div>
          <div>
            {this.excerptImage(postInfo.image)}
          </div>
          <div>
            {this.excerptTitle(postInfo.title.rendered)}
            {this.excerptSummary(postInfo.excerpt.rendered)}
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div>
            {this.excerptTitle(postInfo.title.rendered)}
            {this.excerptSummary(postInfo.excerpt.rendered)}
          </div>
        </div>
      )
    }
  }

  excerptBox (postInfo) {
    const postPath = '/post/' + postInfo.title.rendered.toLowerCase().toString().replace(/\s/g,'-')
    return (
    <Link to={postPath}>
      <div key={postInfo.id}>
      <div>
        {this.excerptLayout(postInfo)}
      </div>
      </div>
    </Link>
    )
  }

  handleClick(e) {
    this.props.onItemClick(e.target.value)
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.posts.map((post, idx) => {
              return (
                <div className="col-md-6 d-flex align-items-stretch excerpt-box-wrapper" key={idx}>
                  <div className="excerpt-box" onClick={this.handleClick} value={post.id}>
                  {this.excerptBox(post)}
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
