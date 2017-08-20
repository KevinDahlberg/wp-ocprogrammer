import React, { Component } from 'react';

export default class SiteHeader extends Component {

  render() {
    const { title, subtitle } = this.props;

    return (
      <header>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </header>
    );
  }
}
