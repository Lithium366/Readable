import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './../logo.svg';
import './App.css';
import PostsList from './pageViews/PostsList';
import PostDetails from './pageViews/PostDetails';
import Categories from './Categories';

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
