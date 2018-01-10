import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import PostsList from './pageViews/PostsListContainer';
import PostDetails from './pageViews/PostDetailsContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/:category?' component={PostsList} />
        <Route exact path='/:category/:postId' component={PostDetails} />
      </div>
    );
  }
}

export default App;
