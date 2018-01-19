import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './App';
import registerServiceWorker from './registerServiceWorker';

var post = {
  title: 'Dinosaurs are awesome',
  body: 'Check out this body property',
  comments: [
	  'First', 
	  'Yeah, go dinos',
	  'Hire this author now!'
  ],
  allAuthors: [
	  'Stealthy Stegosaurus',
	  'Tiny trex',
	  'Iguanadon Ivory'
  ]
}
ReactDOM.render(<Post title = {post.title} authors = {post.allAuthors} body = {post.body} comment = {post.comments} />, document.getElementById('root'));
registerServiceWorker();
