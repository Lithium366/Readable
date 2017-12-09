import React, { Component } from 'react';

class PostPage extends Component {
  render() {
    const {
      match : {
        params: {
          category,
          post_id
          }
        }
      } = this.props;

    return (
      <div>
        Post details
      </div>
    );
  }
}

export default PostPage;
