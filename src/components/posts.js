import React, { Component } from 'react';

export default class Posts extends Component {

  $.ajax({
    type: 'GET',
    url: WPsettings.root + 'wp/v2/posts',
    success: function(response) {
      postArray.push(response.data);
    }
  });
  
  render() {
    return (
      <div>
        <p>{ 'New Stuff' }</p>
      </div>
    );
  }
}
