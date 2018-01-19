import React, { Component } from 'react';
import logo from './logo.svg';
import Authors from './Authors.js';
import './App.css';


class Post extends Component {

  render() {
    return (
      //nested components
      <div className="Post">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1>{this.props.title}</h1>
        <ul>
        <li>Written by: {this.props.authors[0]}</li>
        <li>Written by: {this.props.authors[1]}</li>
        <li>Written by: {this.props.authors[2]}</li>
        </ul>
        <p>{this.props.body}</p>
        <h2>Comments:</h2>
          {this.props.comment[0]}
      </div>
    );
  }
}

export default Post;
