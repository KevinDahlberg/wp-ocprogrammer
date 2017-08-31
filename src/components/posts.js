import React, { Component } from 'react';

export default class Posts extends Component {
  constructor(props){
    super(props);

    this.state = {
      postArray: props.postArray
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps);
  }

  render() {
    return (

       <div className="content" dangerouslySetInnerHTML={{__html:this.state.postArray}}></div>

    );
  }
}
