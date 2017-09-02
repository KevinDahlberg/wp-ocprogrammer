import React, { Component } from 'react';
import { render } from 'react-dom';

import SiteHeader from './components/header';
import Posts from './components/posts';
import SiteFooter from './components/footer';
import postsAPI from './components/postsAPI';

class App extends Component {

    constructor(props) {
      super(props);

      this.state = {
        title: "The OCD Coder",
        subtitle: "obsessed with code",
        copyright: "Simple Digital Solutions 2017",
        postArray: null
      };
    }

    // componentDidMount() {
    //   postsApi.requestPost().then(data => {
    //     this.setState({postArray: data})
    //   });
    // }

  render() {
    return
      (
        <main>
          <SiteHeader
            title={state.title}
            subtitle={state.subtitle}
          />

          <SiteFooter
            copyright={state.copyright}
          />
        </main>
      );
  }
}

render (
  <App />,
  document.getElementById('container')
);
