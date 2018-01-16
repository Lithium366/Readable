import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import PostsList from './pageViews/PostsListContainer';
import PostDetails from './pageViews/PostDetailsContainer';
import AddPost from './pageViews/AddPost';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={PostsList} />
        <Route exact path='/cat/:category?' component={PostsList} />
        <Route exact path='/view/:category/:postId' component={PostDetails} />
        <Route exact path='/add/post/:category' component={AddPost} />
      </div>
    );
  }
}

export default App;
