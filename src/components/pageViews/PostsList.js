import React, { Component } from 'react';
import Categories from '../Categories/CategoriesContainer';
import Posts from '../Posts/PostsContainer';
import PostForm from '../forms/PostFormContainer';

class PostsList extends Component {
  componentWillMount() {
    const { fetchCategories } = this.props;
    fetchCategories();
  }
  render() {
    const {
      match : {
        params: {
          category
        }
      },
    } = this.props;

    return (
      <div>
        <div>
          Categories: <Categories category={category} />
        </div>
        <Posts category={category} />
        <div className="newPostFormContainer">
          <h4>Add a new post:</h4>
          <PostForm category={category} />
        </div>
      </div>
    );
  }
}

export default PostsList;
