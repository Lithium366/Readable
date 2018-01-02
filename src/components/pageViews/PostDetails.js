import React, { Component } from 'react';
import Post from '../Post/PostContainer';
import Comments from '../Comments/CommentsContainer';

class PostPage extends Component {
  render() {
    const {
      match : {
        params: {
          post_id
          }
        }
      } = this.props;

    return (
      <div>
        <div className="postDetails">
          <Post post_id={post_id} />
        </div>
        <div className="postComments">
          <Comments post_id={post_id} />
        </div>
      </div>
    );
  }
}

export default PostPage;
