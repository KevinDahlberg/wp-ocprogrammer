import React from 'react';
import { render as renderJSX } from 'react-dom';

import SiteHeader from './components/header';
import Posts from './components/posts';

const appState = {
  title: "The OCD Coder",
  subtitle: "obsessed with code",
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
      </main>),
      document.getElementById('container')
  )
}

render(appState);
