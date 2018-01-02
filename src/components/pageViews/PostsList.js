import React, { Component } from 'react';
import Categories from '../Categories/CategoriesContainer';
import Posts from '../Posts/PostsContainer';

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
        <div>
          Categories: <Categories category={category} />
        </div>
        <Posts category={category} />
        <button>New post</button>
      </div>
    );
  }
}

export default PostsList;
