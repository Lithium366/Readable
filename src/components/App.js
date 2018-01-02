import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import PostsList from './pageViews/PostsList';
import PostDetails from './pageViews/PostDetails';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/:category?' component={PostsList} />
        <Route exact path='/:category/:post_id' component={PostDetails} />
      </div>
    );
  }
}

export default App;
