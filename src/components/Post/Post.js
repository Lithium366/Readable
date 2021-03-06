import React, { Component } from 'react';
import moment from 'moment';
import * as FontAwesome from 'react-icons/lib/fa';

class Post extends Component {
  render() {
    const {
      posts,
      deletePost,
      vote,
      postId,
      onEdit
    } = this.props;

    const post = posts.find(v => (v.id === postId));

    return (
      <div>
        <h2>{post.title}</h2>
        <div>{post.body}</div>
        <div className="meta">
          <span>
            Votes: {post.voteScore}
            <button onClick={() => vote(post.id, 1)} className="buttonControl"><FontAwesome.FaThumbsOUp /></button>
            <button onClick={() => vote(post.id, -1)} className="buttonControl"><FontAwesome.FaThumbsODown /></button>
          </span>
          <span>By: {post.author}</span>
          <span>Posted: { moment(post.timestamp).format('MM-DD-YYYY, h:mmA') }</span>
          <button onClick={() => deletePost(post.id)} className="buttonControl"><FontAwesome.FaTrash/></button>
          <button onClick={onEdit} className="buttonControl"><FontAwesome.FaPencil/></button>
        </div>
      </div>
    );
  }
}

export default Post;
