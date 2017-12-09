import React, { Component } from 'react';
import Categories from '../Categories';

class PostsList extends Component {
  render() {
    const {
      match : {
        params: {
          category
          }
        }
      } = this.props;

    return (
      <div>
        <Categories category={category} />
        <div>Posts</div>
      </div>
    );
  }
}

export default PostsList;
