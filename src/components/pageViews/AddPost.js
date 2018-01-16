import React, { Component } from 'react';
import PostForm from '../FormComponents/PostFormContainer';
import { Link } from 'react-router-dom';

class AddPost extends Component {
  goBack() {
    window.history.back();
  }
  render () {
    const {
      match: {
        params: {
          category
        }
      }
    } = this.props;

    return (
      <div>
        <nav>
          <Link to="" onClick={this.goBack}>&lt;- Go back to the list</Link>
        </nav>
        <div className="newPostFormContainer">
          <h4>Add a new post:</h4>
          <PostForm category={category} onSuccess={this.goBack}/>
        </div>
      </div>
    );
  }
}

export default AddPost;
