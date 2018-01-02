import React, { Component } from 'react';
import moment from 'moment';
import * as FontAwesome from 'react-icons/lib/fa';

class Post extends Component {
  render() {
    const {
      post
    } = this.props;

    return (
      <div>
        <h2>{post.title}</h2>
        <div>{post.body}</div>
        <div className="meta">
          <span>
            Votes: {post.voteScore}
            <button><FontAwesome.FaThumbsOUp /></button>
            <button><FontAwesome.FaThumbsODown /></button>
          </span>
          <span>By: {post.author}</span>
          <span>Posted: { moment(post.timestamp).format('MM-DD-YYYY, h:mmA') }</span>
          <button><FontAwesome.FaTrash/></button>
          <button><FontAwesome.FaPencil/></button>
        </div>
      </div>
    );
  }
}

export default Post;
