import React, { Component } from 'react';
import Categories from '../Categories/CategoriesContainer';
import Posts from '../Posts/PostsContainer';
import { Link } from 'react-router-dom';

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
        <div className="listContent">
          <div>
            Categories: <Categories category={category} />
          </div>
          <Posts category={category} />
        </div>
        <div className="addNewPostLink">
          <Link to={`/add/post/${category || 'react'}`}><button>Add new post</button></Link>
        </div>
      </div>
    );
  }
}

export default PostsList;
