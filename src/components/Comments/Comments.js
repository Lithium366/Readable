import React, { Component } from 'react';
import moment from 'moment';
import * as FontAwesome from 'react-icons/lib/fa';

class Post extends Component {
  render() {
    const {
      comments,
      } = this.props;

    return (
      <div>
        <h4>Comments: </h4>
        {comments.map(comment => (
          <div key={comment.id}>
            <div>{comment.body}</div>
            <div className="meta">
              <span>
                Votes: {comment.voteScore}
                <button><FontAwesome.FaThumbsOUp /></button>
                <button><FontAwesome.FaThumbsODown /></button>
              </span>
              <span>By: {comment.author}</span>
              <span>Posted: { moment(comment.timestamp).format('MM-DD-YYYY, h:mmA') }</span>
              <button><FontAwesome.FaTrash/></button>
              <button><FontAwesome.FaPencil/></button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Post;
