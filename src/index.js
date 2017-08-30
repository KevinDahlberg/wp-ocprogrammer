import React from 'react';
import { render as renderJSX } from 'react-dom';

import SiteHeader from './components/header';
import Posts from './components/posts';
import SiteFooter from './components/footer';

const appState = {
  title: "The OCD Coder",
  subtitle: "obsessed with code",
  copyright: "Simple Digital Solutions 2017",
};

function render(props) {
  renderJSX(
    (
      <main>
        <SiteHeader
          title={props.title}
          subtitle={props.subtitle}
        />
        <Posts />
        <SiteFooter
          copyright={props.copyright}
        />
      </main>),
      document.getElementById('container')
  )
}

render(appState);
