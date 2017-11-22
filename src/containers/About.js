import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { shouldFetchSinglePage } from '../data/pages'

import ViewPost from '../components/post/ViewPost.jsx'

//this page is built for a single About page with the title 'about'.  In future updates, it can be used as a "single page template" with some minor changes

class About extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    const { shouldFetchSinglePage } = this.props
    //current page title will be changed to match.params.title when multiple pages happen
    const currentPageTitle = 'about'
    console.log('current page title ', currentPageTitle);
    shouldFetchSinglePage(currentPageTitle)
    console.log('menu ', WPsettings.nav)
  }

  render() {
    if (this.props.currentPage.length === 0) {
      return (
          <div>
            <div className="placeholder" />
          </div>
      )
    } else {
      return (
          <div>
            <ViewPost posts={this.props.currentPage} />
          </div>
      )
    }
  }
}
const mapStateToProps = state => ({
  currentPage: state.pageReducer.currentPage
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({shouldFetchSinglePage}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(About)
