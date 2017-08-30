import React, { Component } from 'react';

export default class SiteFooter extends Component {

  render() {
    const { copyright } = this.props;

    return (
      <footer>
        <p>{copyright}</p>
      </footer>
    )
  }
}
